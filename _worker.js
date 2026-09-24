/**
 * Cloudflare Pages Worker for Contact Form API
 * Handles POST /api/contact
 *
 * Security: escapeHtml (XSS), locked CORS, IP rate limiting (KV + memory
 * fallback), input validation, honeypot, guarded errors.
 */

const ALLOWED_ORIGINS = ["https://satholdings.lk", "https://www.satholdings.lk"];

const EMAIL_RE =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;
const PHONE_RE = /^[+0-9()\-.\s]{7,20}$/;

const LIMITS = {
  name: 100,
  email: 254,
  phone: 20,
  subject: 200,
  message: 5000,
  messageMin: 10,
  maxBodyBytes: 100_000,
};

const RATE_LIMIT = {
  windowMs: 60_000,
  max: 5,
  keyNs: "rl",
};

// --------------------------------------------------------------------------
// In-memory rate limiter (fallback when no KV binding is configured).
// Isolate-local: safe enough for a low-traffic form; KV is preferred.
// --------------------------------------------------------------------------
const memoryBuckets = new Map();

function resetIfExpired(ip, now) {
  const bucket = memoryBuckets.get(ip);
  if (!bucket || bucket.resetAt <= now) {
    memoryBuckets.set(ip, { count: 0, resetAt: now + RATE_LIMIT.windowMs });
  }
  return memoryBuckets.get(ip);
}

function rateLimitMemory(ip) {
  const now = Date.now();
  const bucket = resetIfExpired(ip, now);
  bucket.count += 1;
  return bucket.count > RATE_LIMIT.max ? Math.ceil((bucket.resetAt - now) / 1000) : 0;
}

/**
 * KV-backed + memory rate limiter. Returns 0 (allowed) or seconds to retry.
 * Uses a per-minute bucket key in KV with TTL; falls back to memory.
 */
async function rateLimit(env, ip) {
  const kv = env && env.SATHOLDINGS_KV;
  if (!kv) return rateLimitMemory(ip);

  try {
    const now = Date.now();
    const key = `${RATE_LIMIT.keyNs}:${ip}:${Math.floor(now / RATE_LIMIT.windowMs)}`;
    const raw = await kv.get(key, "json");
    const count = (raw && typeof raw.count === "number" && raw.count) || 0;
    await kv.put(key, JSON.stringify({ count: count + 1 }), {
      expirationTtl: Math.ceil(RATE_LIMIT.windowMs / 1000) + 10,
    });
    return count >= RATE_LIMIT.max
      ? Math.ceil((RATE_LIMIT.windowMs - (now % RATE_LIMIT.windowMs)) / 1000)
      : 0;
  } catch (error) {
    console.error("KV rate limit error, falling back to memory:", error);
    return rateLimitMemory(ip);
  }
}

// --------------------------------------------------------------------------

function escapeHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function clientIp(request) {
  return (
    request.headers.get("CF-Connecting-IP") ||
    request.headers.get("x-real-ip") ||
    (request.headers.get("x-forwarded-for") || "").split(",")[0].trim() ||
    "unknown"
  );
}

function isAllowedOrigin(request) {
  const origin = request.headers.get("Origin");
  return !origin || ALLOWED_ORIGINS.includes(origin);
}

function corsHeaders(request) {
  const origin = request.headers.get("Origin");
  const headers = { "Vary": "Origin" };
  if (origin && ALLOWED_ORIGINS.includes(origin)) {
    headers["Access-Control-Allow-Origin"] = origin;
    headers["Access-Control-Allow-Methods"] = "POST, OPTIONS";
    headers["Access-Control-Allow-Headers"] = "Content-Type";
  }
  return headers;
}

function json(data, status, request) {
  return new Response(JSON.stringify(data), {
    status: status || 200,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "no-store",
      ...corsHeaders(request),
    },
  });
}

function requireValidFields(body) {
  const errors = {};
  const name = typeof body.name === "string" ? body.name.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim().toLowerCase() : "";
  const phone = typeof body.phone === "string" ? body.phone.trim() : "";
  const subject = typeof body.subject === "string" ? body.subject.trim() : "";
  const message = typeof body.message === "string" ? body.message.trim() : "";

  if (name.length < 2 || name.length > LIMITS.name) {
    errors.name = "Name must be between 2 and " + LIMITS.name + " characters.";
  }
  if (!EMAIL_RE.test(email) || email.length > LIMITS.email) {
    errors.email = "Please enter a valid email address.";
  }
  if (phone && !PHONE_RE.test(phone)) {
    errors.phone = "Please enter a valid phone number.";
  }
  if (subject.length > LIMITS.subject) {
    errors.subject = "Subject must be under " + LIMITS.subject + " characters.";
  }
  if (message.length < LIMITS.messageMin || message.length > LIMITS.message) {
    errors.message =
      "Message must be between " +
      LIMITS.messageMin +
      " and " +
      LIMITS.message +
      " characters.";
  }

  return { clean: { name, email, phone, subject, message }, errors };
}

export async function onRequestOptions(context) {
  const { request } = context;
  if (!isAllowedOrigin(request)) {
    return new Response("Forbidden", { status: 403 });
  }
  return new Response(null, {
    status: 204,
    headers: { "Access-Control-Max-Age": "86400", ...corsHeaders(request) },
  });
}

export async function onRequestPost(context) {
  const { request, env } = context;

  if (!isAllowedOrigin(request)) {
    return json(
      { success: false, message: "Blocked: cross-origin request." },
      403,
      request
    );
  }

  const ip = clientIp(request);
  const retryAfter = await rateLimit(env, ip);
  if (retryAfter) {
    const response = json(
      {
        success: false,
        message: "Too many requests. Please try again later.",
      },
      429,
      request
    );
    response.headers.set("Retry-After", String(retryAfter));
    return response;
  }

  let body;
  try {
    const contentLength = Number(request.headers.get("Content-Length") || 0);
    if (contentLength > LIMITS.maxBodyBytes) {
      return json(
        { success: false, message: "Request body too large." },
        413,
        request
      );
    }
    body = await request.json();
  } catch {
    return json(
      { success: false, message: "Invalid JSON body." },
      400,
      request
    );
  }

  if (!body || typeof body !== "object" || Array.isArray(body)) {
    return json({ success: false, message: "Invalid request body." }, 400, request);
  }

  // Honeypot: hidden field bots fill in. Silently accept without sending.
  if (body.website || body.company_website) {
    return json(
      {
        success: true,
        message:
          "Thank you! We've received your message and will get back to you within 24-48 hours.",
      },
      200,
      request
    );
  }

  const { clean, errors } = requireValidFields(body);
  if (Object.keys(errors).length) {
    return json({ success: false, errors, message: "Please fix the highlighted fields." }, 400, request);
  }

  const { name, email, phone, subject, message } = clean;

  const resendApiKey = env.RESEND_API_KEY;
  if (!resendApiKey) {
    console.error("RESEND_API_KEY not configured");
    return json({ success: false, message: "Server configuration error." }, 500, request);
  }

  const businessEmail = env.BUSINESS_EMAIL || "info@satholdings.lk";
  const eName = escapeHtml(name);
  const eEmail = escapeHtml(email);
  const ePhone = escapeHtml(phone);
  const eSubject = escapeHtml(subject);
  const eMessage = escapeHtml(message).replace(/\r?\n/g, "<br>");

  const emailRequests = [];

  // Email to business
  emailRequests.push(
    fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "SAT Holdings <noreply@satholdings.lk>",
        to: [businessEmail],
        subject: `New Inquiry: ${eSubject || "General"}`,
        html: `
          <h2 style="color: #1b365d;">New Contact Form Submission</h2>
          <table style="width: 100%; max-width: 600px; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold; width: 120px;">Name:</td>
              <td style="padding: 8px; border-bottom: 1px solid #eee;">${eName}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Email:</td>
              <td style="padding: 8px; border-bottom: 1px solid #eee;"><a href="mailto:${eEmail}">${eEmail}</a></td>
            </tr>
            ${ePhone
              ? `<tr><td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Phone:</td><td style="padding: 8px; border-bottom: 1px solid #eee;">${ePhone}</td></tr>`
              : ""}
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Subject:</td>
              <td style="padding: 8px; border-bottom: 1px solid #eee;">${eSubject || "General Inquiry"}</td>
            </tr>
            <tr>
              <td style="padding: 8px; vertical-align: top; font-weight: bold;">Message:</td>
              <td style="padding: 8px; vertical-align: top;">${eMessage}</td>
            </tr>
          </table>
        `,
      }),
    })
  );

  // Auto-reply to user
  emailRequests.push(
    fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "SAT Holdings <noreply@satholdings.lk>",
        to: [email],
        subject: "We received your message - SAT Holdings",
        html: `
          <!DOCTYPE html>
          <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
          </head>
          <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
            <div style="text-align: center; margin-bottom: 30px;">
              <h1 style="color: #1b365d; margin: 0;">SAT Holdings</h1>
              <p style="color: #666; margin: 5px 0 0;">Engineering | Manufacturing | Construction</p>
            </div>

            <h2 style="color: #1b365d;">Thank you for contacting us, ${eName.split(" ")[0]}!</h2>

            <p>We've received your message and want to assure you that we're reviewing it carefully.</p>

            <div style="background: #f8f9fa; border-left: 4px solid #d4a84b; padding: 15px; margin: 20px 0;">
              <p style="margin: 0;"><strong>Our team typically responds within 24-48 hours.</strong></p>
            </div>

            <p>If your inquiry is urgent, please call us directly at <a href="tel:+94112345678" style="color: #d4a84b;">+94 11 234 5678</a></p>

            <hr style="border: none; border-top: 1px solid #eee; margin: 30px 0;">

            <p style="font-size: 12px; color: #999; text-align: center;">
              SAT Holdings Pvt Ltd<br>
              Engineering, Construction & Manufacturing Solutions<br>
              Sri Lanka
            </p>
          </body>
          </html>
        `,
      }),
    })
  );

  try {
    const results = await Promise.all(emailRequests);
    const failed = results.some((res) => !res.ok);
    if (failed) {
      console.error("Resend returned non-2xx:", results.map((r) => r.status));
      return json(
        { success: false, message: "Failed to send your message. Please try again." },
        502,
        request
      );
    }
  } catch (error) {
    console.error("Resend request error:", error);
    return json(
      { success: false, message: "Failed to send your message. Please try again." },
      502,
      request
    );
  }

  return json(
    {
      success: true,
      message:
        "Thank you! We've received your message and will get back to you within 24-48 hours.",
    },
    200,
    request
  );
}

// Guard non-POST/OPTIONS verbs.
export async function onRequest(context) {
  const { request } = context;
  const method = (request.method || "GET").toUpperCase();
  if (method === "POST") return onRequestPost(context);
  if (method === "OPTIONS") return onRequestOptions(context);
  return json({ success: false, message: "Method not allowed." }, 405, request);
}