import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import SectionWrapper from "@/components/layout/SectionWrapper";
import { COMPANY } from "@/lib/constants";
import { createBreadcrumbSchema } from "@/lib/structuredData";

export const metadata: Metadata = {
    title: "Manufacturing",
    description:
        "Sri Lanka's first rice cooker manufacturing facility - SAT Holdings Manufacturing division. Quality assurance, local production, future expansion.",
};

const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", url: COMPANY.domain },
    { name: "Manufacturing", url: `${COMPANY.domain}/manufacturing` },
]);

export default function ManufacturingPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            <PageHero
                title="Manufacturing"
                subtitle="Sri Lanka's first rice cooker manufacturing line - proudly Made in Sri Lanka and engineered for local homes."
            />

            {/* The Story & Made in SL */}
            <SectionWrapper>
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <span className="inline-block px-3 py-1 text-[10px] font-extrabold tracking-widest uppercase bg-secondary/10 text-secondary rounded-full">
                                Local Empowerment
                            </span>
                            <h2 className="text-3xl sm:text-4xl font-extrabold text-primary font-heading tracking-tight">
                                The Manufacturing Story
                            </h2>
                            <p className="text-neutral-600 leading-relaxed font-medium">
                                SAT Holdings established Sri Lanka&apos;s first rice cooker
                                manufacturing facility, marking a milestone in local consumer
                                electronics production under SAT Electronics Pvt Ltd. Our
                                commitment to quality and reliability drives every product that
                                leaves our factory floor.
                            </p>
                            <p className="text-neutral-600 leading-relaxed font-medium">
                                By manufacturing locally, we reduce import dependency, create
                                employment, and prove that world-class consumer appliances can be
                                built right here in Sri Lanka.
                            </p>
                        </div>

                        <div className="relative group">
                            <div className="absolute inset-0 bg-primary/5 rounded-[2.5rem] transform translate-x-4 translate-y-4 transition-transform group-hover:translate-x-6 group-hover:translate-y-6" />
                            <div className="relative bg-white p-10 sm:p-14 rounded-[2.5rem] border border-neutral-100 shadow-[0_8px_30px_rgb(0,0,0,0.06)] text-center">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    src="https://res.cloudinary.com/dtnzmhngi/image/upload/v1771931976/1200px-Flag_of_Sri_Lanka.svg_mtkcw9.png"
                                    alt="Sri Lanka"
                                    className="w-16 h-10 mx-auto mb-6 drop-shadow-sm"
                                />
                                <h3 className="text-2xl font-bold text-primary mb-4 font-heading">
                                    Proudly Made in Sri Lanka
                                </h3>
                                <p className="text-neutral-500 leading-relaxed text-[13px] font-medium">
                                    Every unit is designed, assembled, and quality-tested at our local
                                    facility for Sri Lankan voltage, climate, and daily usage patterns.
                                    We&apos;re building a brand that represents Sri Lankan capability on a global standard.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </SectionWrapper>



            {/* Quality Assurance */}
            <SectionWrapper bg="neutral">
                <div className="max-w-7xl mx-auto text-center">
                    <span className="inline-block px-3 py-1 text-[10px] font-extrabold tracking-widest uppercase bg-primary/10 text-primary rounded-full mb-4">
                        Standards
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-primary mb-12 font-heading tracking-tight">
                        Quality Assurance System
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Raw Material Testing",
                                desc: "All materials undergo strict quality inspection before entering production.",
                                icon: "🧪"
                            },
                            {
                                title: "Production Line QC",
                                desc: "Continuous monitoring at every stage of the assembly process.",
                                icon: "⚙️"
                            },
                            {
                                title: "Final Product Testing",
                                desc: "Each unit is individually tested for safety and performance before packaging.",
                                icon: "✅"
                            },
                        ].map((item) => (
                            <div
                                key={item.title}
                                className="group p-8 bg-white rounded-3xl border border-neutral-100 shadow-[0_8px_30px_rgb(0,0,0,0.02)] transition-all hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] hover:-translate-y-2 relative overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 w-24 h-24 bg-secondary/5 rounded-bl-[100px] -mr-4 -mt-4 transition-transform duration-500 group-hover:scale-150" />
                                <div className="text-4xl mb-6 relative z-10">{item.icon}</div>
                                <h3 className="text-lg font-bold text-primary mb-3 font-heading relative z-10">
                                    {item.title}
                                </h3>
                                <p className="text-[13px] font-medium text-neutral-500 leading-relaxed relative z-10">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </SectionWrapper>

            <SectionWrapper>
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-6 font-heading">
                        SAT Premium Deluxe Rice Cooker Specifications
                    </h2>
                    <div className="grid grid-cols-1 gap-4 text-left sm:grid-cols-2">
                        {[
                            ["Capacity Options", "1.8L / 2.2L / 2.8L"],
                            ["Power", "230V / 50Hz (SL grid optimized)"],
                            ["Inner Pot", "High-grade non-stick coated aluminum"],
                            ["Heating", "Rapid-heat with keep-warm function"],
                            ["Safety", "Dual thermal fuse protection"],
                            ["Warranty", "12-month SAT manufacturer warranty"],
                        ].map(([label, value]) => (
                            <div
                                key={label}
                                className="rounded-2xl border border-neutral-100 bg-white p-5 shadow-[0_4px_20px_rgb(0,0,0,0.02)] transition-all hover:-translate-y-0.5"
                            >
                                <p className="text-[11px] font-extrabold uppercase tracking-widest text-neutral-400">
                                    {label}
                                </p>
                                <p className="mt-2 text-[14px] font-semibold text-primary">{value}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </SectionWrapper>

            {/* Manufacturing Process */}
            <SectionWrapper bg="white">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="inline-block px-3 py-1 text-[10px] font-extrabold tracking-widest uppercase bg-secondary/10 text-secondary rounded-full mb-4">
                            The Factory Floor
                        </span>
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-primary mb-6 font-heading tracking-tight">
                            Manufacturing Process
                        </h2>
                    </div>

                    <div className="relative">
                        {/* Connecting Line (Desktop) */}
                        <div className="hidden lg:block absolute top-[45px] left-[10%] right-[10%] h-0.5 bg-neutral-100" />

                        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                            {[
                                { title: "Component Sourcing", subtitle: "Inspection" },
                                { title: "Precision", subtitle: "Assembly" },
                                { title: "Quality Control", subtitle: "& Testing" },
                                { title: "Packaging", subtitle: "& Distribution" },
                            ].map((step, index) => (
                                <div key={step.title} className="relative z-10 flex flex-col items-center text-center group">
                                    <div className="w-24 h-24 mb-6 rounded-full bg-white border-4 border-neutral-50 shadow-[0_8px_30px_rgb(0,0,0,0.06)] flex items-center justify-center text-2xl font-black text-secondary group-hover:bg-secondary group-hover:text-white group-hover:border-secondary-light transition-all duration-300">
                                        0{index + 1}
                                    </div>
                                    <h3 className="font-extrabold text-[13px] uppercase tracking-wide text-primary mb-1">
                                        {step.title}
                                    </h3>
                                    <p className="text-[12px] text-neutral-400 font-bold uppercase tracking-widest">
                                        {step.subtitle}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </SectionWrapper>

            {/* Future Vision */}
            <SectionWrapper>
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-4 font-heading">
                        Future Expansion Vision
                    </h2>
                    <p className="text-neutral-600 leading-relaxed">
                        Our roadmap includes expanding into additional household appliance
                        categories, scaling production capacity, and strengthening local
                        after-sales support while preserving SAT&apos;s quality-first standard.
                    </p>
                </div>
            </SectionWrapper>
        </>
    );
}
