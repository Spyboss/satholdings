import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import SectionWrapper from "@/components/layout/SectionWrapper";
import Reveal from "@/components/ui/Reveal";
import { COMPANY, CASE_STUDIES } from "@/lib/constants";
import { createMetadata } from "@/lib/metadata";
import { createBreadcrumbSchema, createCollectionPageSchema, createServiceSchema } from "@/lib/structuredData";

const pageDescription =
    "SAT Holdings manufacturing division operates Sri Lanka's first rice cooker manufacturing line with local quality control, product testing, and after-sales support.";

export const metadata: Metadata = createMetadata({
    title: "Rice Cooker Manufacturing in Sri Lanka",
    description: pageDescription,
    path: "/manufacturing",
    keywords: ["rice cooker manufacturing Sri Lanka", "made in Sri Lanka appliances", "SAT Electronics"],
});

const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", url: COMPANY.domain },
    { name: "Manufacturing", url: `${COMPANY.domain}/manufacturing` },
]);

const manufacturingPageSchema = createCollectionPageSchema({
    name: "SAT Holdings Manufacturing",
    description: pageDescription,
    path: "/manufacturing",
});

const manufacturingServiceSchema = createServiceSchema({
    name: "Consumer Appliance Manufacturing",
    description: pageDescription,
    path: "/manufacturing",
    serviceType: "Manufacturing",
});

export default function ManufacturingPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(manufacturingPageSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(manufacturingServiceSchema) }}
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
                        ].map((item, index) => (
                            <Reveal
                                key={item.title}
                                delay={index * 0.15}
                                className="group p-8 bg-white rounded-3xl border border-neutral-100 shadow-[0_8px_30px_rgb(0,0,0,0.02)] transition-all hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] hover:-translate-y-2 relative overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 w-24 h-24 bg-secondary/5 rounded-bl-[100px] -mr-4 -mt-4 transition-transform duration-500 group-hover:scale-150" />
                                <div className="text-4xl mb-6 relative z-10">{item.icon}</div>
                                <h3 className="text-lg font-bold text-primary mb-3 font-heading relative z-10">
                                    {item.title}
                                </h3>
                                <p className="text-[13px] font-medium text-neutral-500 leading-relaxed relative z-10">{item.desc}</p>
                            </Reveal>
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
                                <Reveal
                                    key={step.title}
                                    delay={index * 0.15}
                                    className="relative z-10 flex flex-col items-center text-center group"
                                >
                                    <div className="w-24 h-24 mb-6 rounded-full bg-white border-4 border-neutral-50 shadow-[0_8px_30px_rgb(0,0,0,0.06)] flex items-center justify-center text-2xl font-black text-secondary group-hover:bg-secondary group-hover:text-white group-hover:border-secondary-light transition-all duration-300">
                                        0{index + 1}
                                    </div>
                                    <h3 className="font-extrabold text-[13px] uppercase tracking-wide text-primary mb-1">
                                        {step.title}
                                    </h3>
                                    <p className="text-[12px] text-neutral-400 font-bold uppercase tracking-widest">
                                        {step.subtitle}
                                    </p>
                                </Reveal>
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

            {/* Case Study - Rice Cooker */}
            <SectionWrapper bg="neutral">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-2xl sm:text-3xl font-bold text-primary font-heading mb-4 text-center">
                        Case Study
                    </h2>

                    {CASE_STUDIES.filter(s => s.slug === "local-rice-cooker-manufacturing").map((study) => (
                        <Reveal key={study.slug}>
                            <article className="group bg-white rounded-3xl overflow-hidden border border-neutral-100 shadow-[0_4px_20px_rgb(0,0,0,0.02)] transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                                <div className="p-8 sm:p-12 relative">
                                    <div className="absolute inset-x-0 top-0 h-1.5 w-full bg-secondary opacity-0 transform origin-left transition-all duration-300 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100"></div>
                                    <div className="flex flex-wrap items-center gap-3 mb-6">
                                        <span className="px-3 py-1 text-[10px] font-extrabold tracking-widest uppercase bg-secondary/10 text-secondary rounded-full">
                                            {study.category}
                                        </span>
                                        <span className="text-[11px] font-bold text-neutral-400 font-mono">
                                            {study.year}
                                        </span>
                                    </div>

                                    <h3 className="text-2xl sm:text-3xl font-bold text-primary font-heading mb-4 group-hover:text-secondary transition-colors">
                                        {study.title}
                                    </h3>

                                    <div className="flex flex-wrap gap-x-8 gap-y-3 text-[12px] text-neutral-500 mb-8 border-b border-neutral-100 pb-6 uppercase tracking-wider font-semibold">
                                        <span>
                                            <span className="text-neutral-400">Client:</span> {study.client}
                                        </span>
                                        <span>
                                            <span className="text-neutral-400">Location:</span> {study.location}
                                        </span>
                                    </div>

                                    <div className="grid gap-8 sm:gap-10">
                                        <div>
                                            <h4 className="font-extrabold text-[12px] uppercase tracking-widest text-primary mb-3">
                                                The Challenge
                                            </h4>
                                            <p className="text-neutral-500 text-[13px] leading-relaxed">
                                                {study.challenge}
                                            </p>
                                        </div>

                                        <div>
                                            <h4 className="font-extrabold text-[12px] uppercase tracking-widest text-primary mb-3">
                                                Our Solution
                                            </h4>
                                            <p className="text-neutral-500 text-[13px] leading-relaxed">
                                                {study.solution}
                                            </p>
                                        </div>

                                        <div className="bg-neutral-50 p-6 rounded-2xl border border-neutral-100">
                                            <h4 className="font-extrabold text-[12px] uppercase tracking-widest text-primary mb-4">
                                                Results
                                            </h4>
                                            <ul className="grid sm:grid-cols-2 gap-4">
                                                {study.results.map((result, i) => (
                                                    <li key={i} className="flex items-start gap-3 text-[13px] text-neutral-600 font-medium">
                                                        <span className="flex-shrink-0 mt-0.5 w-5 h-5 flex items-center justify-center bg-secondary/10 text-secondary rounded-full">
                                                            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                            </svg>
                                                        </span>
                                                        <span className="leading-snug">{result}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        </Reveal>
                    ))}
                </div>
            </SectionWrapper>
        </>
    );
}
