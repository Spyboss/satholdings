import Link from "next/link";
import { COMPANY } from "@/lib/constants";

const siteMap = [
    { label: "Home", href: "/" },
    { label: "Our Businesses", href: "#portfolio" },
    { label: "Projects", href: "/projects" },
    { label: "Contact", href: "/contact" },
];

const socialLinks = [
    { label: "LinkedIn", short: "in", href: "https://www.linkedin.com", icon: "linkedin" },
    { label: "Facebook", short: "fb", href: "https://www.facebook.com", icon: "facebook" },
    { label: "YouTube", short: "yt", href: "https://www.youtube.com", icon: "youtube" },
] as const;

function FooterIcon({ type }: { type: "sitemap" | "newsletter" | "social" | "brand" }) {
    const common = "h-4 w-4";

    if (type === "sitemap") {
        return (
            <svg viewBox="0 0 24 24" fill="none" className={common} aria-hidden>
                <path d="M12 5v6M6 18h12M6 12h12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                <circle cx="12" cy="4" r="2" stroke="currentColor" strokeWidth="1.8" />
                <circle cx="6" cy="19" r="2" stroke="currentColor" strokeWidth="1.8" />
                <circle cx="12" cy="19" r="2" stroke="currentColor" strokeWidth="1.8" />
                <circle cx="18" cy="19" r="2" stroke="currentColor" strokeWidth="1.8" />
            </svg>
        );
    }

    if (type === "newsletter") {
        return (
            <svg viewBox="0 0 24 24" fill="none" className={common} aria-hidden>
                <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.8" />
                <path d="M4 7l8 6 8-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        );
    }

    if (type === "social") {
        return (
            <svg viewBox="0 0 24 24" fill="none" className={common} aria-hidden>
                <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.8" />
                <path d="M4 12h16M12 4a13 13 0 010 16M12 4a13 13 0 000 16" stroke="currentColor" strokeWidth="1.5" />
            </svg>
        );
    }

    return (
        <svg viewBox="0 0 24 24" fill="none" className={common} aria-hidden>
            <path d="M12 3l2.1 4.3L19 8l-3.5 3.4.8 4.8-4.3-2.3-4.3 2.3.8-4.8L5 8l4.9-.7L12 3z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
        </svg>
    );
}

function SocialIcon({ type }: { type: (typeof socialLinks)[number]["icon"] }) {
    const common = "h-3.5 w-3.5";

    if (type === "linkedin") {
        return (
            <svg viewBox="0 0 24 24" fill="currentColor" className={common} aria-hidden>
                <path d="M6.94 8.5H3.56v10.88h3.38V8.5zm.23-3.36A1.95 1.95 0 105.2 7.1a1.95 1.95 0 001.97-1.96zM20.44 13.13c0-3.25-1.73-4.76-4.04-4.76-1.87 0-2.7 1.03-3.16 1.75V8.5h-3.38v10.88h3.38v-6.07c0-1.6.3-3.15 2.28-3.15 1.95 0 1.98 1.82 1.98 3.26v5.96h3.39l-.01-6.25z" />
            </svg>
        );
    }

    if (type === "facebook") {
        return (
            <svg viewBox="0 0 24 24" fill="currentColor" className={common} aria-hidden>
                <path d="M13.5 21v-7.2h2.43l.36-2.8H13.5V9.2c0-.8.22-1.35 1.37-1.35h1.47V5.34A19 19 0 0014.2 5c-2.12 0-3.57 1.28-3.57 3.66v2.34H8.2v2.8h2.43V21h2.87z" />
            </svg>
        );
    }

    return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={common} aria-hidden>
            <path d="M21.6 7.2a3 3 0 00-2.1-2.1C17.6 4.5 12 4.5 12 4.5s-5.6 0-7.5.6a3 3 0 00-2.1 2.1c-.6 1.9-.6 5.8-.6 5.8s0 3.9.6 5.8a3 3 0 002.1 2.1c1.9.6 7.5.6 7.5.6s5.6 0 7.5-.6a3 3 0 002.1-2.1c.6-1.9.6-5.8.6-5.8s0-3.9-.6-5.8zM10.2 16.5V9.5l6 3.5-6 3.5z" />
        </svg>
    );
}

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="mt-16 bg-gradient-to-r from-[#0e1117] via-[#101726] to-[#152239] text-white">
            <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
                <div className="grid gap-8 md:grid-cols-[1.1fr,1fr,1fr,1fr]">
                    <div>
                        <h3 className="flex items-center gap-2 font-heading text-xl font-bold uppercase tracking-wide">
                            <span className="text-[#3aa1ff]">
                                <FooterIcon type="brand" />
                            </span>
                            {COMPANY.name}
                        </h3>
                        <p className="mt-3 max-w-sm text-sm leading-relaxed text-slate-300">
                            Integration, innovation, reliability, and sustainability across
                            electronics, infrastructure, renewable energy, and agro.
                        </p>
                    </div>

                    <div>
                        <h4 className="flex items-center gap-2 text-sm font-extrabold uppercase tracking-[0.12em] text-slate-200">
                            <span className="text-[#88c5ff]">
                                <FooterIcon type="sitemap" />
                            </span>
                            Site Map
                        </h4>
                        <ul className="mt-3 space-y-2">
                            {siteMap.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-slate-300 transition hover:text-white"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="flex items-center gap-2 text-sm font-extrabold uppercase tracking-[0.12em] text-slate-200">
                            <span className="text-[#88c5ff]">
                                <FooterIcon type="newsletter" />
                            </span>
                            Newsletter
                        </h4>
                        <form className="mt-3 flex gap-2" action="#" method="post">
                            <input
                                type="email"
                                placeholder="Your email address"
                                className="w-full rounded-md border border-white/20 bg-white/10 px-3 py-2 text-sm text-white placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-[#3aa1ff]"
                                aria-label="Email address"
                            />
                            <button
                                type="submit"
                                className="rounded-md bg-[#2a84d8] px-4 py-2 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-[#4a9ae2]"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>

                    <div>
                        <h4 className="flex items-center gap-2 text-sm font-extrabold uppercase tracking-[0.12em] text-slate-200">
                            <span className="text-[#88c5ff]">
                                <FooterIcon type="social" />
                            </span>
                            Social Media
                        </h4>
                        <div className="mt-3 flex gap-2">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="group flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-white/10 text-slate-200 transition hover:border-[#58b4ff] hover:bg-[#2b8bde] hover:text-white hover:shadow-[0_0_18px_rgba(56,160,255,0.45)]"
                                    aria-label={social.label}
                                    title={social.label}
                                >
                                    <span className="group-hover:hidden text-[10px] font-extrabold uppercase tracking-wide">
                                        {social.short}
                                    </span>
                                    <span className="hidden group-hover:block">
                                        <SocialIcon type={social.icon} />
                                    </span>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="mt-8 border-t border-white/15 pt-5 text-center">
                    <p className="text-sm text-slate-300">
                        &copy; {currentYear} {COMPANY.name}. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
