import Link from "next/link";
import { COMPANY } from "@/lib/constants";

const siteMap = [
    { label: "Home", href: "/" },
    { label: "Engineering", href: "/engineering" },
    { label: "Products", href: "/products" },
    { label: "Projects", href: "/projects" },
    { label: "Manufacturing", href: "/manufacturing" },
    { label: "Contact", href: "/contact" },
    { label: "FAQ", href: "/faq" },
];

const socialLinks = [
    {
        label: "LinkedIn",
        href: "https://www.linkedin.com",
        icon: "linkedin",
        hoverClass: "hover:border-[#72c0ff] hover:bg-[#0a66c2]",
    },
    {
        label: "Facebook",
        href: "https://www.facebook.com",
        icon: "facebook",
        hoverClass: "hover:border-[#8ab4ff] hover:bg-[#1877f2]",
    },
    {
        label: "YouTube",
        href: "https://www.youtube.com",
        icon: "youtube",
        hoverClass: "hover:border-[#ff8f8f] hover:bg-[#ff0000]",
    },
] as const;

function FooterIcon({ type }: { type: "sitemap" | "contact" | "social" | "brand" }) {
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

    if (type === "contact") {
        return (
            <svg viewBox="0 0 24 24" fill="none" className={common} aria-hidden>
                <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
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
    const common = "h-4 w-4";

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
        <footer className="mt-16 bg-primary-dark text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(42,123,136,0.1)_0%,transparent_50%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(212,168,67,0.05)_0%,transparent_50%)]" />
            <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
                <div className="grid gap-8 md:grid-cols-[1.1fr,1fr,1fr,1fr]">
                    <div>
                        <h3 className="flex items-center gap-2 font-heading text-xl font-bold uppercase tracking-wide">
                            <span className="text-[#3aa1ff]">
                                <FooterIcon type="brand" />
                            </span>
                            {COMPANY.name}
                        </h3>
                        <p className="mt-3 max-w-sm text-sm leading-relaxed text-slate-300">
                            Building Sri Lanka through engineering, manufacturing,
                            renewable energy, trading, and modern agriculture initiatives.
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
                        <h4 className="flex items-center gap-2 text-[11px] font-extrabold uppercase tracking-widest text-neutral-300">
                            <span className="text-secondary">
                                <FooterIcon type="contact" />
                            </span>
                            Contact Us
                        </h4>
                        <ul className="mt-3 space-y-2 text-sm text-slate-300">
                            <li>1028/B7 Midway Park, Liyanagoda, <br />Pannipitiya, Sri Lanka.</li>
                            <li>
                                <a href="tel:+94772346283" className="hover:text-white transition">+94 77 234 6283</a> / <a href="tel:+94112160620" className="hover:text-white transition">+94 11 216 0620</a>
                            </li>
                            <li>
                                <a href="mailto:holdingssat@gmail.com" className="hover:text-white transition">holdingssat@gmail.com</a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="flex items-center gap-2 text-[11px] font-extrabold uppercase tracking-widest text-neutral-300">
                            <span className="text-secondary">
                                <FooterIcon type="social" />
                            </span>
                            Social Media
                        </h4>
                        <p className="mt-3 text-xs leading-relaxed text-slate-300">
                            Follow us for updates, project highlights, and company news.
                        </p>
                        <div className="mt-4 flex gap-3">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noreferrer"
                                    className={`group relative flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:text-white hover:shadow-lg ${social.hoverClass}`}
                                    aria-label={social.label}
                                    title={social.label}
                                >
                                    <span className="absolute inset-0 rounded-full bg-gradient-to-br from-white/15 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                                    <span className="relative transition-transform duration-300 group-hover:scale-110">
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
