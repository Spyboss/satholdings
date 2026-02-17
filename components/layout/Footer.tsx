import Link from "next/link";
import { COMPANY, NAV_LINKS } from "@/lib/constants";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-primary text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {/* Company Info */}
                    <div>
                        <h3 className="text-lg font-bold text-white mb-4 font-heading">
                            {COMPANY.name}
                        </h3>
                        <p className="text-neutral-300 text-sm leading-relaxed">
                            A diversified Sri Lankan corporation in engineering &amp;
                            construction, manufacturing, and import &amp; trading.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-sm font-semibold text-neutral-300 uppercase tracking-wider mb-4">
                            Quick Links
                        </h4>
                        <ul className="space-y-2">
                            {NAV_LINKS.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-neutral-300 hover:text-white transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-sm font-semibold text-neutral-300 uppercase tracking-wider mb-4">
                            Contact
                        </h4>
                        <address className="not-italic text-sm text-neutral-300 space-y-2">
                            <p>{COMPANY.address.street}</p>
                            <p>
                                {COMPANY.address.city}, {COMPANY.address.country}
                            </p>
                            {COMPANY.phone.map((phone) => (
                                <p key={phone}>
                                    <a
                                        href={`tel:${phone.replace(/\s/g, "")}`}
                                        className="hover:text-white transition-colors"
                                    >
                                        {phone}
                                    </a>
                                </p>
                            ))}
                            <p>
                                <a
                                    href={`mailto:${COMPANY.email}`}
                                    className="hover:text-white transition-colors"
                                >
                                    {COMPANY.email}
                                </a>
                            </p>
                        </address>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-10 pt-6 border-t border-white/10 text-center">
                    <p className="text-sm text-neutral-400">
                        &copy; {currentYear} {COMPANY.name}. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
