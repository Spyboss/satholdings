"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const headerLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "#portfolio" },
    { label: "Our Businesses", href: "#portfolio" },
    { label: "Sustainability", href: "/projects" },
    { label: "Careers", href: "/contact" },
    { label: "News", href: "#news" },
    { label: "Contact Us", href: "/contact" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 border-b border-black/10 bg-white/95 backdrop-blur">
            <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-[76px] items-center justify-between gap-4">
                    <Link href="/" className="shrink-0">
                        <Image
                            src="https://res.cloudinary.com/dtnzmhngi/image/upload/v1772171307/WhatsApp_Image_2026-02-27_at_11.08.37_hf8int.jpg"
                            alt="SAT Holdings logo"
                            width={240}
                            height={240}
                            className="h-12 w-auto sm:h-14"
                        />
                    </Link>

                    <ul className="hidden items-center gap-1 md:flex">
                        {headerLinks.map((link, index) => (
                            <li key={`${link.href}-${link.label}`} className="flex items-center">
                                <Link
                                    href={link.href}
                                    className="px-2 py-2 text-xs font-bold uppercase tracking-wide text-slate-800 transition hover:text-[#1666ab] lg:px-3"
                                >
                                    {link.label}
                                </Link>
                                {index < headerLinks.length - 1 && (
                                    <span className="text-black/35">|</span>
                                )}
                            </li>
                        ))}
                        <li className="ml-2 border-l border-black/15 pl-3 text-xs font-extrabold uppercase tracking-wide text-slate-800">
                            ⌕ Search
                        </li>
                    </ul>

                    <button
                        type="button"
                        className="p-2 text-slate-700 transition hover:text-[#1666ab] md:hidden"
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

                {isOpen && (
                    <div className="border-t border-black/10 py-3 md:hidden">
                        <ul className="flex flex-col gap-1">
                            {headerLinks.map((link) => (
                                <li key={`${link.href}-${link.label}`}>
                                    <Link
                                        href={link.href}
                                        className="block rounded-md px-3 py-2 text-sm font-bold uppercase tracking-wide text-slate-700 hover:bg-slate-50 hover:text-[#1666ab]"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                            <li className="px-3 py-2 text-sm font-bold uppercase tracking-wide text-slate-700">
                                ⌕ Search
                            </li>
                        </ul>
                    </div>
                )}
            </nav>
        </header>
    );
}
