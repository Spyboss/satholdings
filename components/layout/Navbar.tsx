"use client";

import Link from "next/link";
import { useState } from "react";
import { NAV_LINKS, COMPANY } from "@/lib/constants";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 bg-white border-b border-neutral-200">
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo / Company Name */}
                    <Link href="/" className="flex items-center gap-3 group">
                        <span className="text-xl font-bold text-primary font-heading tracking-tight">
                            {COMPANY.name.replace(" Pvt Ltd", "")}
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <ul className="hidden md:flex items-center gap-1">
                        {NAV_LINKS.map((link) => (
                            <li key={link.href}>
                                <Link
                                    href={link.href}
                                    className="px-3 py-2 text-sm font-medium text-neutral-700 hover:text-primary rounded-md transition-colors"
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                        <li className="ml-2">
                            <Link
                                href="/contact"
                                className="px-4 py-2 text-sm font-medium text-white bg-primary rounded-lg hover:bg-primary-light transition-colors"
                            >
                                Get a Quote
                            </Link>
                        </li>
                    </ul>

                    {/* Mobile Menu Button */}
                    <button
                        type="button"
                        className="md:hidden p-2 text-neutral-700 hover:text-primary"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label={isOpen ? "Close menu" : "Open menu"}
                        aria-expanded={isOpen}
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            {isOpen ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isOpen && (
                    <div className="md:hidden border-t border-neutral-200 py-3">
                        <ul className="flex flex-col gap-1">
                            {NAV_LINKS.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="block px-3 py-2 text-sm font-medium text-neutral-700 hover:text-primary hover:bg-neutral-50 rounded-md transition-colors"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                            <li className="mt-2 px-3">
                                <Link
                                    href="/contact"
                                    className="block w-full text-center px-4 py-2 text-sm font-medium text-white bg-primary rounded-lg hover:bg-primary-light transition-colors"
                                    onClick={() => setIsOpen(false)}
                                >
                                    Get a Quote
                                </Link>
                            </li>
                        </ul>
                    </div>
                )}
            </nav>
        </header>
    );
}
