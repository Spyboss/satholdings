"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const headerLinks = [
    { label: "Home", href: "/" },
    { label: "Engineering", href: "/engineering" },
    { label: "Products", href: "/products" },
    { label: "Projects", href: "/projects" },
    { label: "Manufacturing", href: "/manufacturing" },
    { label: "Contact Us", href: "/contact" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 border-b border-neutral-100 bg-white/70 backdrop-blur-xl shadow-sm transition-all duration-300">
            <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-[76px] items-center justify-between gap-4">
                    <Link href="/" className="shrink-0">
                        <Image
                            src="https://res.cloudinary.com/dthx4fxte/image/upload/v1773220134/Sat_Holdings_Transparent_qyjuzm.png"
                            alt="SAT Holdings logo"
                            width={240}
                            height={240}
                            className="h-16 w-auto sm:h-18"
                        />
                    </Link>

                    <ul className="hidden items-center gap-1 md:flex">
                        {headerLinks.map((link, index) => (
                            <li key={`${link.href}-${link.label}`} className="flex items-center">
                                <Link
                                    href={link.href}
                                    className="px-2 py-2 text-[11px] font-extrabold uppercase tracking-widest text-neutral-600 transition-colors hover:text-primary lg:px-3"
                                >
                                    {link.label}
                                </Link>
                                {index < headerLinks.length - 1 && (
                                    <span className="text-neutral-300 text-xs">|</span>
                                )}
                            </li>
                        ))}
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
                    <div className="border-t border-neutral-100 py-3 md:hidden">
                        <ul className="flex flex-col gap-1">
                            {headerLinks.map((link) => (
                                <li key={`${link.href}-${link.label}`}>
                                    <Link
                                        href={link.href}
                                        className="block rounded-lg px-3 py-2 text-[12px] font-extrabold uppercase tracking-widest text-neutral-600 hover:bg-neutral-50 hover:text-primary transition-colors"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </nav>
        </header>
    );
}
