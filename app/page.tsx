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
            "https://images.unsplash.com/photo-1555617778-02518510b9fa?auto=format&fit=crop&w=1800&q=80",
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
    { value: "4", label: "Major Industries" },
    { value: "2012", label: "Est. 2012" },
    { value: "500+", label: "Employees" },
    { value: "300+", label: "Completed Projects" },
];

const reasons = [
    {
        title: "Integration",
        text: "Engineering and digital teams run on shared operations.",
        icon: "◉",
    },
    {
        title: "Innovation",
        text: "Modern systems and practical R&D power long-term growth.",
        icon: "◌",
    },
    {
        title: "Reliability",
        text: "Trusted delivery across public and private sector programs.",
        icon: "◎",
    },
    {
        title: "Sustainability",
        text: "Growth strategy balances impact, profitability, and environment.",
        icon: "◍",
    },
];

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

            <section id="portfolio" className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
                <div className="grid gap-7 lg:grid-cols-[1fr,430px]">
                    <div className="bg-[#f4f4f4] px-3 pb-12 pt-10 sm:px-5 lg:pr-4">
                        <h2 className="text-center font-heading text-5xl font-extrabold uppercase tracking-tight text-slate-900">
                            Our Diverse Business Portfolio
                        </h2>

                        <div className="mt-10 grid items-center gap-7 lg:grid-cols-[200px,1fr]">
                            <div className="mx-auto w-full max-w-[190px]">
                                <Image
                                    src="https://res.cloudinary.com/dtnzmhngi/image/upload/v1772171307/WhatsApp_Image_2026-02-27_at_11.08.39_j5iktg.jpg"
                                    alt="SAT Electronics logo"
                                    width={700}
                                    height={700}
                                    className="h-auto w-full"
                                />
                            </div>

                            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                                {portfolioCards.map((card, index) => (
                                    <article
                                        key={card.title}
                                        className="stagger-rise rounded-2xl border border-black/10 bg-white p-4 shadow-[0_8px_24px_-16px_rgba(0,0,0,0.55)]"
                                        style={{ animationDelay: `${index * 100}ms` }}
                                    >
                                        <div
                                            className="mb-3 h-2 w-14 rounded-full"
                                            style={{ backgroundColor: card.accent }}
                                            aria-hidden
                                        />
                                        <Image
                                            src={card.logo}
                                            alt={`${card.title} logo`}
                                            width={500}
                                            height={300}
                                            className="mx-auto h-16 w-auto object-contain"
                                        />
                                        <h3 className="mt-4 text-center text-[11px] font-extrabold uppercase leading-tight text-slate-900">
                                            {card.title}
                                        </h3>
                                        <p className="mt-3 min-h-[42px] text-center text-[11px] font-semibold uppercase leading-relaxed tracking-wide text-slate-700">
                                            {card.subtitle}
                                        </p>
                                        <Link
                                            href={card.href}
                                            className="mt-4 block text-center text-[11px] font-extrabold uppercase tracking-wide"
                                            style={{ color: card.accent }}
                                        >
                                            [{card.cta}]
                                        </Link>
                                    </article>
                                ))}
                            </div>
                        </div>

                        <div className="mt-10 border-t border-slate-300 pt-6 text-center">
                            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-slate-600">
                                SAT Holdings Group Portfolio
                            </p>
                        </div>
                    </div>

                    <aside className="mt-8 overflow-hidden border border-black/10 bg-white shadow-[0_16px_30px_-20px_rgba(0,0,0,0.65)] lg:-mt-36 lg:mt-0">
                        <div className="border-b border-black/10 px-5 py-5">
                            <h3 className="text-center font-heading text-4xl font-extrabold uppercase text-slate-900">
                                Group Statistics
                            </h3>
                            <div className="mt-4 grid grid-cols-2 gap-2 text-center sm:grid-cols-4">
                                {keyStats.map((stat) => (
                                    <div key={`side-${stat.label}`}>
                                        <p className="font-heading text-3xl font-extrabold text-slate-900">
                                            {stat.value}
                                        </p>
                                        <p className="text-[8px] font-extrabold uppercase tracking-wide text-slate-700">
                                            {stat.label}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="border-b border-black/10 px-5 py-5">
                            <h3 className="text-center font-heading text-4xl font-extrabold uppercase text-slate-900">
                                Why SAT Holdings?
                            </h3>
                            <p className="mt-1 text-center text-[11px] font-extrabold uppercase tracking-[0.15em] text-slate-600">
                                Integration, Innovation, Reliability, Sustainability
                            </p>

                            <div className="mt-5 grid grid-cols-2 gap-2 sm:grid-cols-4">
                                {reasons.map((reason) => (
                                    <article key={reason.title} className="rounded-lg bg-slate-50 px-2 py-2 text-center">
                                        <p className="text-[9px] font-extrabold uppercase text-slate-900">
                                            <span className="mr-0.5 text-[#1768af]">{reason.icon}</span>
                                            {reason.title}
                                        </p>
                                        <p className="mt-1 text-[8px] leading-relaxed text-slate-600">
                                            {reason.text}
                                        </p>
                                    </article>
                                ))}
                            </div>
                        </div>

                        <div id="news" className="px-5 py-5">
                            <h3 className="text-center font-heading text-4xl font-extrabold uppercase text-slate-900">
                                Latest News &amp; Insights
                            </h3>
                            <div className="mt-5 grid grid-cols-3 gap-2">
                                {latestNews.map((item) => (
                                    <article key={item.title} className="rounded-lg border border-black/10 p-1.5">
                                        <Image
                                            src={item.image}
                                            alt={item.title}
                                            width={400}
                                            height={260}
                                            className="h-16 w-full rounded object-cover"
                                        />
                                        <h4 className="mt-1 text-[8px] font-extrabold uppercase leading-tight text-slate-900">
                                            {item.title}
                                        </h4>
                                        <p className="mt-1 text-[7px] font-semibold uppercase tracking-wide text-slate-500">
                                            {item.date}
                                        </p>
                                    </article>
                                ))}
                            </div>
                        </div>

                    </aside>
                </div>
            </section>
        </div>
    );
}
