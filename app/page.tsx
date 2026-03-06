import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
    title: "SAT Holdings Group - Diversified Business Portfolio",
    description:
        "SAT Holdings Group across engineering, trading, renewable energy, agro, and local appliance manufacturing in Sri Lanka.",
};

const heroPanels = [
    {
        title: "Electronics",
        image:
            "https://res.cloudinary.com/dtnzmhngi/image/upload/v1772183199/535eee07e8fd4c9fabc377cd464c1d74_bqtd4l.png",
    },
    {
        title: "Construction",
        image:
            "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1800&q=80",
    },
    {
        title: "Energy",
        image: "/assets/gallery/1.jpg",
    },
    {
        title: "Agro",
        image:
            "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=1800&q=80",
    },
];

const portfolioCards = [
    {
        title: "SAT Electronics (Pvt) Ltd",
        subtitle: "Local appliance manufacturing for Sri Lankan households",
        cta: "View Electronics",
        logo: "https://res.cloudinary.com/dtnzmhngi/image/upload/v1772171307/WhatsApp_Image_2026-02-27_at_11.08.39_j5iktg.jpg",
        href: "/products",
        accent: "#0b76d1",
    },
    {
        title: "SAT Holdings (Pvt) Ltd",
        subtitle: "Engineering, infrastructure delivery, and strategic trading",
        cta: "View Construction",
        logo: "https://res.cloudinary.com/dtnzmhngi/image/upload/v1772171307/WhatsApp_Image_2026-02-27_at_11.08.37_hf8int.jpg",
        href: "/engineering",
        accent: "#ef8f22",
    },
    {
        title: "SAT Energy Solutions Pvt Ltd",
        subtitle: "Grid-connected solar infrastructure and energy delivery",
        cta: "View Energy",
        logo: "https://res.cloudinary.com/dtnzmhngi/image/upload/v1772171307/WhatsApp_Image_2026-02-27_at_11.08.38_ap0zlp.jpg",
        href: "/projects",
        accent: "#11a86a",
    },
    {
        title: "SAT Green Agro (Pvt) Ltd",
        subtitle: "Technology-led agriculture and food security initiatives",
        cta: "View Agro",
        logo: "https://res.cloudinary.com/dtnzmhngi/image/upload/v1772171307/img11_z2uvkb.jpg",
        href: "/contact",
        accent: "#74c63c",
    },
];

const keyStats = [
    { value: "4", label: "Major Industries", icon: "industries" },
    { value: "2017", label: "Established 2017", icon: "calendar" },
    { value: "21+", label: "Major Projects", icon: "projects" },
    { value: "24+", label: "Corporate Clients", icon: "team" },
] as const;

const reasons = [
    {
        title: "Safe Work Culture",
        text: "Healthy and secure work practices across sites and operations.",
        icon: "integration",
    },
    {
        title: "Integrity",
        text: "Transparent and principled decision-making in every project.",
        icon: "innovation",
    },
    {
        title: "Social Responsibility",
        text: "Projects designed with long-term community benefit in mind.",
        icon: "reliability",
    },
    {
        title: "Corporate Governance",
        text: "Structured oversight to sustain quality and accountability.",
        icon: "sustainability",
    },
] as const;

const milestones = [
    {
        title: "SAT Holdings Incorporated",
        date: "2017",
        image:
            "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=900&q=80",
    },
    {
        title: "SAT Energy founded and Tangalle solar plant connected",
        date: "2024",
        image:
            "/assets/gallery/2.jpg",
    },
    {
        title: "SAT Electronics rice cooker line launched",
        date: "2026",
        image:
            "https://images.unsplash.com/photo-1626806819282-2c1dc01a5e0c?auto=format&fit=crop&w=900&q=80",
    },
];


function StatIcon({ type }: { type: (typeof keyStats)[number]["icon"] }) {
    const common = "h-5 w-5";

    if (type === "calendar") {
        return (
            <svg viewBox="0 0 24 24" fill="none" className={common} aria-hidden>
                <rect x="3" y="5" width="18" height="16" rx="3" stroke="currentColor" strokeWidth="1.8" />
                <path d="M3 9.5h18" stroke="currentColor" strokeWidth="1.8" />
                <path d="M8 3v4M16 3v4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
        );
    }

    if (type === "team") {
        return (
            <svg viewBox="0 0 24 24" fill="none" className={common} aria-hidden>
                <circle cx="12" cy="8" r="3" stroke="currentColor" strokeWidth="1.8" />
                <circle cx="6" cy="10" r="2.2" stroke="currentColor" strokeWidth="1.6" />
                <circle cx="18" cy="10" r="2.2" stroke="currentColor" strokeWidth="1.6" />
                <path d="M5 19c.4-2.6 2.4-4 5-4h4c2.6 0 4.6 1.4 5 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
        );
    }

    if (type === "projects") {
        return (
            <svg viewBox="0 0 24 24" fill="none" className={common} aria-hidden>
                <rect x="5" y="4" width="14" height="17" rx="2" stroke="currentColor" strokeWidth="1.8" />
                <path d="M9 8h6M9 12h6M9 16h4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
        );
    }

    return (
        <svg viewBox="0 0 24 24" fill="none" className={common} aria-hidden>
            <path d="M12 3l2.1 4.3L19 8l-3.5 3.4.8 4.8-4.3-2.3-4.3 2.3.8-4.8L5 8l4.9-.7L12 3z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
        </svg>
    );
}

function PillarIcon({ type }: { type: (typeof reasons)[number]["icon"] }) {
    const common = "h-5 w-5";

    if (type === "innovation") {
        return (
            <svg viewBox="0 0 24 24" fill="none" className={common} aria-hidden>
                <path d="M12 3v3M6 6l2 2M18 6l-2 2M12 17v4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                <path d="M8.5 11a3.5 3.5 0 117 0c0 1.6-.8 2.4-1.6 3.2-.5.5-.9 1-1 1.8h-1.8c-.1-.8-.5-1.3-1-1.8-.8-.8-1.6-1.6-1.6-3.2z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
            </svg>
        );
    }

    if (type === "reliability") {
        return (
            <svg viewBox="0 0 24 24" fill="none" className={common} aria-hidden>
                <path d="M12 3l7 3v5c0 4.2-2.7 7.7-7 9-4.3-1.3-7-4.8-7-9V6l7-3z" stroke="currentColor" strokeWidth="1.8" />
                <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        );
    }

    if (type === "sustainability") {
        return (
            <svg viewBox="0 0 24 24" fill="none" className={common} aria-hidden>
                <path d="M12 20v-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                <path d="M12 14c0-3.6 2.4-6.4 6-7-0.5 3.6-2.5 6.6-6 7z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
                <path d="M12 15c-3.5-.4-5.5-2.8-6-6 3.6.5 6 3.2 6 6z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
            </svg>
        );
    }

    return (
        <svg viewBox="0 0 24 24" fill="none" className={common} aria-hidden>
            <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.8" />
            <path d="M4 12h16M12 4a13 13 0 010 16M12 4a13 13 0 000 16" stroke="currentColor" strokeWidth="1.5" />
        </svg>
    );
}

export default function HomePage() {
    return (
        <div className="bg-white pb-14">
            <section className="relative border-y border-black/15 bg-white">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                    {heroPanels.map((panel) => (
                        <div
                            key={panel.title}
                            className="relative h-56 sm:h-72 lg:h-[470px]"
                        >
                            <div
                                className="absolute inset-0 bg-cover bg-center"
                                style={{ backgroundImage: `url(${panel.image})` }}
                                aria-hidden
                            />
                            <div className="absolute inset-0 bg-slate-900/16" aria-hidden />
                        </div>
                    ))}
                </div>

                <div className="absolute inset-0 flex items-center justify-center px-6 text-center lg:justify-start lg:px-0">
                    <div className="hero-fade mx-auto w-[min(92%,760px)] rounded-3xl glass-dark p-8 sm:p-10 lg:ml-[31%] lg:bg-transparent lg:p-4 lg:backdrop-blur-none lg:border-none">
                        <h1 className="font-heading text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-7xl lg:leading-[0.95] drop-shadow-2xl">
                            SAT HOLDINGS GROUP
                        </h1>
                        <p className="mt-4 text-[13px] font-semibold tracking-wide text-neutral-200 sm:text-base lg:text-[32px] lg:leading-tight drop-shadow-md">
                            BUILDING DREAMS. EMPOWERING LIFESTYLES.
                        </p>
                        <p className="mt-3 text-[12px] font-medium text-neutral-300 sm:text-sm lg:text-lg max-w-xl mx-auto lg:mx-0 drop-shadow">
                            Pioneering Sri Lanka's First Rice Cooker Manufacturing alongside our established legacy in engineering and infrastructure.
                        </p>
                        <Link
                            href="#portfolio"
                            className="mt-8 inline-flex rounded-full bg-white px-8 py-3.5 text-[13px] font-extrabold uppercase tracking-[0.1em] text-primary shadow-[0_8px_20px_rgba(255,255,255,0.15)] transition-all duration-300 hover:-translate-y-1 hover:bg-neutral-50 hover:shadow-[0_12px_25px_rgba(255,255,255,0.25)]"
                        >
                            Explore Our Industries
                        </Link>
                    </div>
                </div>
            </section>

            <section id="portfolio" className="mx-auto mt-8 max-w-[1400px] px-4 sm:px-6 lg:px-8">
                <div className="rounded-[2.5rem] bg-neutral-50 px-4 pb-16 pt-12 shadow-sm border border-neutral-100 sm:px-8 lg:px-12">
                    <h2 className="text-center font-heading text-3xl font-extrabold uppercase tracking-tight text-primary sm:text-5xl">
                        Our Diverse Business Portfolio
                    </h2>

                    <div className="mx-auto mt-12 max-w-6xl grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
                        {portfolioCards.map((card, index) => (
                            <article
                                key={card.title}
                                className="stagger-rise relative overflow-hidden rounded-2xl border border-neutral-100 bg-white p-8 shadow-sm transition-all duration-300 ease-out hover:-translate-y-1.5 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.08)]"
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                <div
                                    className="absolute inset-x-0 top-0 h-1.5 w-full"
                                    style={{ backgroundColor: card.accent }}
                                    aria-hidden
                                />
                                <div className="flex h-24 items-center justify-center">
                                    <Image
                                        src={card.logo}
                                        alt={`${card.title} logo`}
                                        width={500}
                                        height={300}
                                        className="max-h-full max-w-full object-contain"
                                    />
                                </div>
                                <h3 className="mt-6 text-center text-[13px] font-extrabold uppercase leading-tight text-slate-900">
                                    {card.title}
                                </h3>
                                <p className="mt-3 min-h-[52px] text-center text-[11px] font-semibold leading-relaxed tracking-wide text-neutral-500">
                                    {card.subtitle}
                                </p>
                                <Link
                                    href={card.href}
                                    className="mt-6 flex items-center justify-center gap-1.5 text-center text-[11px] font-extrabold uppercase tracking-widest transition-opacity hover:opacity-80"
                                    style={{ color: card.accent }}
                                >
                                    {card.cta} <span>&rarr;</span>
                                </Link>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="mx-auto mt-8 max-w-[1400px] px-4 sm:px-6 lg:px-8">
                <div className="rounded-3xl border border-neutral-100 bg-white px-6 py-10 shadow-sm sm:p-12">
                    <h3 className="text-center font-heading text-3xl font-extrabold uppercase text-primary sm:text-4xl">
                        Group Statistics
                    </h3>
                    <div className="mt-8 grid grid-cols-2 gap-5 sm:grid-cols-4">
                        {keyStats.map((stat) => (
                            <div key={`stat-${stat.label}`} className="card-hover flex flex-col items-center justify-center rounded-2xl border border-neutral-100 bg-neutral-50 p-6">
                                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                                    <StatIcon type={stat.icon} />
                                </div>
                                <p className="mt-5 font-heading text-4xl font-extrabold text-slate-900">{stat.value}</p>
                                <p className="mt-1.5 text-center text-[11px] font-extrabold uppercase tracking-wider text-neutral-500">
                                    {stat.label}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="mx-auto mt-8 max-w-[1400px] px-4 sm:px-6 lg:px-8">
                <div className="rounded-3xl border border-neutral-100 bg-white px-6 py-10 shadow-sm sm:p-12">
                    <h3 className="text-center font-heading text-3xl font-extrabold uppercase text-primary sm:text-4xl">
                        Why SAT Holdings?
                    </h3>
                    <p className="mt-3 text-center text-[11px] font-extrabold uppercase tracking-[0.2em] text-secondary">
                        Core Principles We Operate By
                    </p>

                    <div className="mt-10 grid grid-cols-2 gap-5 sm:grid-cols-4">
                        {reasons.map((reason) => (
                            <article key={reason.title} className="card-hover rounded-2xl border border-neutral-100 bg-neutral-50 p-6 text-center">
                                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-secondary/10 text-secondary">
                                    <PillarIcon type={reason.icon} />
                                </div>
                                <h4 className="mt-5 text-[12px] font-extrabold uppercase tracking-wide text-slate-900">{reason.title}</h4>
                                <p className="mt-2 text-[11px] leading-relaxed text-neutral-500">
                                    {reason.text}
                                </p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="mx-auto mt-8 max-w-[1400px] px-4 sm:px-6 lg:px-8">
                <div className="rounded-3xl border border-neutral-100 bg-white px-6 py-12 shadow-sm relative overflow-hidden sm:px-12 sm:py-16">
                    <div className="absolute -left-10 -top-10 h-32 w-32 rounded-full bg-primary/5 blur-3xl"></div>
                    <div className="absolute -bottom-10 -right-10 h-32 w-32 rounded-full bg-secondary/5 blur-3xl"></div>

                    <h3 className="relative text-center font-heading text-3xl font-extrabold uppercase text-primary sm:text-4xl">
                        Message From The Managing Director
                    </h3>
                    <p className="relative mx-auto mt-6 max-w-4xl text-center text-sm leading-relaxed text-slate-700 sm:text-base md:text-lg">
                        &ldquo;From construction and trading to renewable energy,
                        agriculture, and now electronics manufacturing, our commitment
                        has remained the same: building practical solutions that
                        empower the Sri Lankan people.&rdquo;
                    </p>
                    <p className="relative mt-8 text-center text-[11px] font-extrabold uppercase tracking-widest text-secondary">
                        &mdash; Mr. Anura Lokugamage, Managing Director
                    </p>
                </div>
            </section>

            <section className="mx-auto mt-8 max-w-[1400px] px-4 sm:px-6 lg:px-8">
                <div className="grid gap-5 md:grid-cols-2">
                    <article className="card-hover rounded-3xl border border-neutral-100 bg-white p-8 shadow-sm sm:p-12 relative overflow-hidden group">
                        <div className="absolute inset-x-0 top-0 h-1.5 w-full bg-primary transform origin-left transition-transform duration-500 scale-x-0 group-hover:scale-x-100"></div>
                        <h3 className="font-heading text-2xl font-extrabold uppercase text-slate-900 sm:text-3xl">
                            Our Vision
                        </h3>
                        <p className="mt-4 text-sm leading-loose text-neutral-600 sm:text-base">
                            To be Sri Lanka&apos;s premier multi-disciplinary conglomerate,
                            recognized for transforming the nation through local
                            manufacturing, sustainable energy, and resilient
                            infrastructure.
                        </p>
                    </article>
                    <article className="card-hover rounded-3xl border border-neutral-100 bg-white p-8 shadow-sm sm:p-12 relative overflow-hidden group">
                        <div className="absolute inset-x-0 top-0 h-1.5 w-full bg-secondary transform origin-left transition-transform duration-500 scale-x-0 group-hover:scale-x-100"></div>
                        <h3 className="font-heading text-2xl font-extrabold uppercase text-slate-900 sm:text-3xl">
                            Our Mission
                        </h3>
                        <p className="mt-4 text-sm leading-loose text-neutral-600 sm:text-base">
                            We empower local industry, expand renewable energy,
                            strengthen construction and trading excellence, and support
                            food security while creating jobs and reducing import
                            dependency.
                        </p>
                    </article>
                </div>
            </section>

            <section id="news" className="mx-auto mt-8 max-w-[1400px] px-4 sm:px-6 lg:px-8">
                <div className="rounded-3xl border border-neutral-100 bg-white px-6 py-10 shadow-sm sm:p-12">
                    <h3 className="text-center font-heading text-3xl font-extrabold uppercase text-primary sm:text-4xl">
                        Group Milestones
                    </h3>
                    <div className="mt-10 grid gap-6 sm:grid-cols-3">
                        {milestones.map((item) => (
                            <article key={item.title} className="group overflow-hidden rounded-2xl border border-neutral-100 bg-neutral-50 shadow-[0_4px_20px_rgb(0,0,0,0.02)] transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                                <div className="overflow-hidden h-48 sm:h-40 lg:h-48">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        width={400}
                                        height={260}
                                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                </div>
                                <div className="p-5">
                                    <p className="mb-2 inline-block rounded-full bg-accent/10 px-2.5 py-0.5 text-[10px] font-extrabold uppercase tracking-widest text-accent-dark">
                                        {item.date}
                                    </p>
                                    <h4 className="mt-1 text-[13px] font-bold leading-tight text-slate-900 group-hover:text-primary transition-colors">
                                        {item.title}
                                    </h4>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
