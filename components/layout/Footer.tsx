import Link from "next/link";
import { COMPANY } from "@/lib/constants";

const siteMap = [
    { label: "Home", href: "/" },
    { label: "Our Businesses", href: "#portfolio" },
    { label: "Projects", href: "/projects" },
    { label: "Contact", href: "/contact" },
];

const socialLinks = [
    { label: "in", href: "https://www.linkedin.com" },
    { label: "fb", href: "https://www.facebook.com" },
    { label: "yt", href: "https://www.youtube.com" },
];

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="mt-16 bg-gradient-to-r from-[#0e1117] via-[#101726] to-[#152239] text-white">
            <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
                <div className="grid gap-8 md:grid-cols-[1.1fr,1fr,1fr,1fr]">
                    <div>
                        <h3 className="font-heading text-xl font-bold uppercase tracking-wide">
                            {COMPANY.name}
                        </h3>
                        <p className="mt-3 max-w-sm text-sm leading-relaxed text-slate-300">
                            Integration, innovation, reliability, and sustainability across
                            electronics, infrastructure, renewable energy, and agro.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-sm font-extrabold uppercase tracking-[0.12em] text-slate-200">
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
                        <h4 className="text-sm font-extrabold uppercase tracking-[0.12em] text-slate-200">
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
                        <h4 className="text-sm font-extrabold uppercase tracking-[0.12em] text-slate-200">
                            Social Media
                        </h4>
                        <div className="mt-3 flex gap-2">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex h-9 w-9 items-center justify-center rounded-full border border-white/25 bg-white/10 text-xs font-extrabold uppercase text-slate-200 transition hover:bg-white hover:text-slate-900"
                                >
                                    {social.label}
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
