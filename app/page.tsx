import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
    title: "SAT Holdings Group - Diversified Business Portfolio",
    description:
        "SAT Holdings Group portfolio: electronics, construction, energy, and agro services. Empowering progress with sustainable growth.",
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
        image:
            "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1800&q=80",
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
        subtitle: "Innovating the Digital Frontier",
        cta: "View Electronics",
        logo: "https://res.cloudinary.com/dtnzmhngi/image/upload/v1772171307/WhatsApp_Image_2026-02-27_at_11.08.39_j5iktg.jpg",
        href: "/products",
        accent: "#0b76d1",
    },
    {
        title: "SAT Holdings (Pvt) Ltd",
        subtitle: "Building Infrastructure and Global Trading",
        cta: "View Construction",
        logo: "https://res.cloudinary.com/dtnzmhngi/image/upload/v1772171307/WhatsApp_Image_2026-02-27_at_11.08.37_hf8int.jpg",
        href: "/engineering",
        accent: "#ef8f22",
    },
    {
        title: "SAT Energy Solutions Pvt Ltd",
        subtitle: "Powering a Sustainable Future",
        cta: "View Energy",
        logo: "https://res.cloudinary.com/dtnzmhngi/image/upload/v1772171307/WhatsApp_Image_2026-02-27_at_11.08.38_ap0zlp.jpg",
        href: "/projects",
        accent: "#11a86a",
    },
    {
        title: "SAT Green Agro (Pvt) Ltd",
        subtitle: "Securing Food Through Smart Farming",
        cta: "View Agro",
        logo: "https://res.cloudinary.com/dtnzmhngi/image/upload/v1772171307/img11_z2uvkb.jpg",
        href: "/contact",
        accent: "#74c63c",
    },
];

const keyStats = [
    { value: "4", label: "Major Industries", icon: "industries" },
    { value: "2012", label: "Est. 2012", icon: "calendar" },
    { value: "500+", label: "Employees", icon: "team" },
    { value: "300+", label: "Completed Projects", icon: "projects" },
] as const;

const reasons = [
    {
        title: "Integration",
        text: "Engineering and digital teams run on shared operations.",
        icon: "integration",
    },
    {
        title: "Innovation",
        text: "Modern systems and practical R&D power long-term growth.",
        icon: "innovation",
    },
    {
        title: "Reliability",
        text: "Trusted delivery across public and private sector programs.",
        icon: "reliability",
    },
    {
        title: "Sustainability",
        text: "Growth strategy balances impact, profitability, and environment.",
        icon: "sustainability",
    },
] as const;

const latestNews = [
    {
        title: "SAT Electronics to Lead IoT Device Trends",
        date: "Jan 11, 2026",
        image:
            "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80",
    },
    {
        title: "E4 Corridor Construction Milestone Achieved",
        date: "Dec 19, 2025",
        image:
            "https://images.unsplash.com/photo-1591799265444-d66432b91588?auto=format&fit=crop&w=900&q=80",
    },
    {
        title: "Green Agro Expands Precision Irrigation",
        date: "Nov 26, 2025",
        image:
            "https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=900&q=80",
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
                    <div className="hero-fade mx-auto w-[min(92%,760px)] rounded-2xl bg-black/35 p-6 text-white sm:p-8 lg:ml-[31%] lg:bg-transparent lg:p-2">
                        <h1
                            className="font-heading text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-7xl lg:leading-[0.95]"
                            style={{ textShadow: "0 4px 18px rgba(0,0,0,0.55)" }}
                        >
                            SAT HOLDINGS GROUP
                        </h1>
                        <p
                            className="mt-3 text-sm font-semibold tracking-wide text-white sm:text-base lg:text-[34px] lg:leading-none"
                            style={{ textShadow: "0 3px 14px rgba(0,0,0,0.5)" }}
                        >
                            EMPOWERING PROGRESS. SUSTAINING LIFE. NURTURING GROWTH.
                        </p>
                        <Link
                            href="#portfolio"
                            className="mt-6 inline-flex rounded-full bg-white px-8 py-3 text-sm font-extrabold uppercase tracking-wide text-slate-900 shadow-lg transition hover:bg-[#f2f2f2]"
                        >
                            Explore Our Industries
                        </Link>
                    </div>
                </div>
            </section>

            <section id="portfolio" className="mx-auto mt-8 max-w-[1400px] px-4 sm:px-6 lg:px-8">
                <div className="bg-[#f4f4f4] px-3 pb-12 pt-10 sm:px-5 lg:px-6">
                    <h2 className="text-center font-heading text-5xl font-extrabold uppercase tracking-tight text-slate-900">
                        Our Diverse Business Portfolio
                    </h2>

                    <div className="mx-auto mt-10 max-w-6xl grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
                        {portfolioCards.map((card, index) => (
                            <article
                                key={card.title}
                                className="stagger-rise rounded-2xl border border-black/10 bg-white p-5 shadow-[0_12px_28px_-18px_rgba(0,0,0,0.55)]"
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                <div
                                    className="mb-4 h-2 w-16 rounded-full"
                                    style={{ backgroundColor: card.accent }}
                                    aria-hidden
                                />
                                <Image
                                    src={card.logo}
                                    alt={`${card.title} logo`}
                                    width={500}
                                    height={300}
                                    className="mx-auto h-20 w-auto object-contain"
                                />
                                <h3 className="mt-4 text-center text-xs font-extrabold uppercase leading-tight text-slate-900">
                                    {card.title}
                                </h3>
                                <p className="mt-3 min-h-[52px] text-center text-xs font-semibold uppercase leading-relaxed tracking-wide text-slate-700">
                                    {card.subtitle}
                                </p>
                                <Link
                                    href={card.href}
                                    className="mt-4 block text-center text-xs font-extrabold uppercase tracking-wide"
                                    style={{ color: card.accent }}
                                >
                                    [{card.cta}]
                                </Link>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="mx-auto mt-8 max-w-[1400px] px-4 sm:px-6 lg:px-8">
                <div className="border border-black/10 bg-white px-5 py-7 shadow-[0_16px_30px_-20px_rgba(0,0,0,0.5)]">
                    <h3 className="text-center font-heading text-4xl font-extrabold uppercase text-slate-900">
                        Group Statistics
                    </h3>
                    <div className="mt-5 grid grid-cols-2 gap-4 text-center sm:grid-cols-4">
                        {keyStats.map((stat) => (
                            <div key={`stat-${stat.label}`} className="rounded-lg border border-black/10 bg-slate-50 px-3 py-4">
                                <div className="mx-auto flex w-fit items-center gap-2 rounded-full bg-[#0d5a93]/10 px-2.5 py-1 text-[#0d5a93]">
                                    <StatIcon type={stat.icon} />
                                </div>
                                <p className="mt-2 font-heading text-4xl font-extrabold text-slate-900">{stat.value}</p>
                                <p className="mt-1 text-[11px] font-extrabold uppercase tracking-wide text-slate-700">
                                    {stat.label}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="mx-auto mt-8 max-w-[1400px] px-4 sm:px-6 lg:px-8">
                <div className="border border-black/10 bg-white px-5 py-7 shadow-[0_16px_30px_-20px_rgba(0,0,0,0.5)]">
                    <h3 className="text-center font-heading text-4xl font-extrabold uppercase text-slate-900">
                        Why SAT Holdings?
                    </h3>
                    <p className="mt-2 text-center text-[12px] font-extrabold uppercase tracking-[0.16em] text-slate-600">
                        Integration, Innovation, Reliability, Sustainability
                    </p>

                    <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
                        {reasons.map((reason) => (
                            <article key={reason.title} className="rounded-lg border border-black/10 bg-slate-50 px-3 py-3 text-center">
                                <div className="mx-auto flex h-8 w-8 items-center justify-center rounded-full bg-[#2f8a43]/10 text-[#2f8a43]">
                                    <PillarIcon type={reason.icon} />
                                </div>
                                <p className="mt-2 text-[10px] font-extrabold uppercase text-slate-900">{reason.title}</p>
                                <p className="mt-2 text-[10px] leading-relaxed text-slate-600">
                                    {reason.text}
                                </p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section id="news" className="mx-auto mt-8 max-w-[1400px] px-4 sm:px-6 lg:px-8">
                <div className="border border-black/10 bg-white px-5 py-7 shadow-[0_16px_30px_-20px_rgba(0,0,0,0.5)]">
                    <h3 className="text-center font-heading text-4xl font-extrabold uppercase text-slate-900">
                        Latest News &amp; Insights
                    </h3>
                    <div className="mt-5 grid gap-3 sm:grid-cols-3">
                        {latestNews.map((item) => (
                            <article key={item.title} className="rounded-lg border border-black/10 p-2">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    width={400}
                                    height={260}
                                    className="h-36 w-full rounded object-cover"
                                />
                                <h4 className="mt-2 text-[11px] font-extrabold uppercase leading-tight text-slate-900">
                                    {item.title}
                                </h4>
                                <p className="mt-1 text-[10px] font-semibold uppercase tracking-wide text-slate-500">
                                    {item.date}
                                </p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
