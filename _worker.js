/**
 * Cloudflare Pages Worker for Contact Form API
 * Handles POST /api/contact
 */

export async function onRequestPost(context) {
  const { request, env } = context;

  try {
    const body = await request.json();
    const { name, email, phone, subject, message } = body;

    if (!name || !email || !message) {
      return new Response(JSON.stringify({
        success: false,
        message: "Name, email, and message are required."
      }), {
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }

    const resendApiKey = env.RESEND_API_KEY;
    
    if (!resendApiKey) {
      console.error("RESEND_API_KEY not configured");
      return new Response(JSON.stringify({
        success: false,
        message: "Server configuration error."
      }), {
        status: 500,
        headers: { "Content-Type": "application/json" }
      });
    }

    const businessEmail = env.BUSINESS_EMAIL || "info@satholdings.lk";

    const emailRequests = [];

    // Email to business
    emailRequests.push(
      fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${resendApiKey}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          from: "SAT Holdings <noreply@satholdings.lk>",
          to: [businessEmail],
          subject: `New Inquiry: ${subject || "General"}`,
          html: `
            <h2 style="color: #1b365d;">New Contact Form Submission</h2>
            <table style="width: 100%; max-width: 600px; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold; width: 120px;">Name:</td>
                <td style="padding: 8px; border-bottom: 1px solid #eee;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Email:</td>
                <td style="padding: 8px; border-bottom: 1px solid #eee;"><a href="mailto:${email}">${email}</a></td>
              </tr>
              ${phone ? `<tr><td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Phone:</td><td style="padding: 8px; border-bottom: 1px solid #eee;">${phone}</td></tr>` : ""}
              <tr>
                <td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Subject:</td>
                <td style="padding: 8px; border-bottom: 1px solid #eee;">${subject || "General Inquiry"}</td>
              </tr>
              <tr>
                <td style="padding: 8px; vertical-align: top; font-weight: bold;">Message:</td>
                <td style="padding: 8px; vertical-align: top;">${message.replace(/\n/g, "<br>")}</td>
              </tr>
            </table>
          `
        })
      })
    );

    // Auto-reply to user
    emailRequests.push(
      fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${resendApiKey}`,
          "Content-Type": "application/json"
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
              
              <h2 style="color: #1b365d;">Thank you for contacting us, ${name.split(" ")[0]}!</h2>
              
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
          `
        })
      })
    );

    await Promise.all(emailRequests);

    return new Response(JSON.stringify({
      success: true,
      message: "Thank you! We've received your message and will get back to you within 24-48 hours."
    }), {
      headers: { "Content-Type": "application/json" }
    });

  } catch (error) {
    console.error("Contact form error:", error);
    return new Response(JSON.stringify({
      success: false,
      message: "Something went wrong. Please try again."
    }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
}

export async function onRequestOptions() {
  return new Response(null, {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type"
    }
  });
}
