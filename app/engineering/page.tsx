import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import SectionWrapper from "@/components/layout/SectionWrapper";
import GridLayout from "@/components/ui/GridLayout";
import Card from "@/components/ui/Card";
import Reveal from "@/components/ui/Reveal";
import { ENGINEERING_SERVICES, COMPANY } from "@/lib/constants";
import { createBreadcrumbSchema } from "@/lib/structuredData";

export const metadata: Metadata = {
    title: "Engineering & Construction",
    description:
        "SAT Holdings engineering division - building construction, road construction, soil protection, and heavy machinery hiring across Sri Lanka.",
};

const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", url: COMPANY.domain },
    { name: "Engineering & Construction", url: `${COMPANY.domain}/engineering` },
]);

export default function EngineeringPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            <PageHero
                title="Engineering & Construction"
                subtitle="Building Sri Lanka's infrastructure with precision, scale, and a triple quality check system."
            />

            {/* Services */}
            <SectionWrapper>
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-primary font-heading tracking-tight">
                        Our Services
                    </h2>
                    <p className="mt-4 text-neutral-500 max-w-2xl mx-auto font-medium">
                        Comprehensive infrastructure solutions delivered with disciplined planning and safe site management.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                    {ENGINEERING_SERVICES.map((service, i) => {
                        const icons = ["🏗️", "🛣️", "🌱", "🚜", "👷"];
                        return (
                            <Reveal
                                key={service.title}
                                delay={i * 0.1}
                                className={`group relative p-8 rounded-3xl bg-white border border-neutral-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] ${i === 3 ? "lg:col-span-2 lg:flex lg:items-center lg:gap-8 lg:p-10" : ""} ${i === 4 ? "lg:col-span-1" : ""}`}
                            >
                                <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 rounded-bl-full -mr-8 -mt-8 transition-transform duration-500 group-hover:scale-150 ease-out" />
                                <div className={`text-4xl mb-6 ${i === 3 ? "lg:mb-0 lg:text-5xl" : ""}`}>
                                    {icons[i] || "🛠️"}
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-primary mb-3 font-heading group-hover:text-secondary transition-colors">
                                        {service.title}
                                    </h3>
                                    <p className="text-[13px] text-neutral-500 leading-relaxed font-medium">
                                        {service.description}
                                    </p>
                                </div>
                            </Reveal>
                        );
                    })}
                </div>
            </SectionWrapper>

            {/* Triple Quality Check */}
            <SectionWrapper bg="white">
                <div className="max-w-6xl mx-auto rounded-[2.5rem] bg-primary-dark px-6 py-16 sm:px-16 sm:py-24 relative overflow-hidden shadow-2xl">
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1541888086431-7bdba226dbde?auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center opacity-10 mix-blend-overlay" />
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-dark via-primary-dark/95 to-secondary/30" />

                    <div className="relative z-10 text-center">
                        <span className="inline-block px-3 py-1 text-[10px] font-extrabold tracking-widest uppercase bg-secondary/20 text-secondary-light rounded-full mb-6 border border-secondary/30">
                            Quality Assurance
                        </span>
                        <h2 className="text-3xl sm:text-5xl font-extrabold text-white mb-6 font-heading tracking-tight drop-shadow-md">
                            Triple Quality Check System
                        </h2>
                        <p className="text-neutral-300 text-lg leading-relaxed mb-16 max-w-2xl mx-auto font-medium">
                            Every project undergoes our rigorous three-stage assurance
                            process, ensuring uncompromised standards from material sourcing to final delivery.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 relative">
                            {/* Connecting Line (Desktop) */}
                            <div className="hidden sm:block absolute top-[28px] left-[15%] right-[15%] h-0.5 bg-gradient-to-r from-transparent via-secondary/50 to-transparent" />

                            {[
                                { title: "Material Inspection", desc: "Rigorous vetting of all raw inputs" },
                                { title: "Construction Monitoring", desc: "Real-time daily site supervision" },
                                { title: "Final Verification", desc: "Handover standard compliance" }
                            ].map((step, index) => (
                                <Reveal
                                    key={step.title}
                                    delay={0.2 + (index * 0.1)}
                                    className="relative group bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:-translate-y-2"
                                >
                                    <div className="w-14 h-14 mx-auto bg-secondary text-primary-dark font-black rounded-full flex items-center justify-center text-xl mb-6 shadow-[0_0_20px_rgba(212,168,67,0.4)] group-hover:scale-110 transition-transform">
                                        {index + 1}
                                    </div>
                                    <h3 className="font-extrabold tracking-wider uppercase text-white text-[12px] mb-3 leading-tight">{step.title}</h3>
                                    <p className="text-[11px] text-neutral-400 font-medium">{step.desc}</p>
                                </Reveal>
                            ))}
                        </div>
                    </div>
                </div>
            </SectionWrapper>

            {/* Machinery Fleet */}
            <SectionWrapper>
                <div className="max-w-6xl mx-auto text-center">
                    <span className="inline-block px-3 py-1 text-[10px] font-extrabold tracking-widest uppercase bg-primary/5 text-primary rounded-full mb-4">
                        Equipment Capacity
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-primary mb-6 font-heading tracking-tight">
                        Our Machinery Fleet
                    </h2>
                    <p className="text-neutral-600 text-lg leading-relaxed max-w-3xl mx-auto font-medium">
                        A robust fleet of 43+ heavy machinery units available for hire across Sri Lanka, meticulously maintained to international safety standards.
                    </p>

                    <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                        {[
                            { name: "Excavators", icon: "🏗️" },
                            { name: "Dump Trucks", icon: "🚛" },
                            { name: "Graders", icon: "🚜" },
                            { name: "Rollers", icon: "🛤️" },
                            { name: "Wheel Loaders", icon: "🚜" },
                            { name: "Water Bowsers", icon: "💧" },
                            { name: "Dual AC Vans", icon: "🚐" },
                            { name: "4WD Double Cabs", icon: "🛻" },
                        ].map((item, index) => (
                            <Reveal
                                key={item.name}
                                delay={0.1 * (index % 4)}
                                className="group flex flex-col items-center justify-center p-6 bg-neutral-50 rounded-2xl border border-neutral-100 transition-all duration-300 hover:bg-white hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:border-secondary/30 hover:-translate-y-1"
                            >
                                <span className="text-3xl mb-3 grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110">{item.icon}</span>
                                <span className="text-[12px] font-bold text-neutral-700 uppercase tracking-wider group-hover:text-primary transition-colors">
                                    {item.name}
                                </span>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </SectionWrapper>
        </>
    );
}
