import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import SectionWrapper from "@/components/layout/SectionWrapper";
import { COMPANY } from "@/lib/constants";
import { createBreadcrumbSchema } from "@/lib/structuredData";

export const metadata: Metadata = {
    title: "Manufacturing",
    description:
        "Sri Lanka's first rice cooker manufacturing facility — SAT Holdings Manufacturing division. Quality assurance, local production, future expansion.",
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
                subtitle="Operating Sri Lanka's first rice cooker manufacturing facility — proudly Made in Sri Lanka."
            />

            {/* The Story */}
            <SectionWrapper>
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-6 font-heading text-center">
                        The Manufacturing Story
                    </h2>
                    <p className="text-neutral-600 leading-relaxed mb-4">
                        SAT Holdings established Sri Lanka&apos;s first rice cooker
                        manufacturing facility, marking a milestone in local consumer
                        electronics production. Our commitment to quality and innovation
                        drives every product that leaves our factory floor.
                    </p>
                    <p className="text-neutral-600 leading-relaxed">
                        By manufacturing locally, we reduce import dependency, create
                        employment, and prove that world-class consumer appliances can be
                        built right here in Sri Lanka.
                    </p>
                </div>
            </SectionWrapper>

            {/* Made in Sri Lanka */}
            <SectionWrapper bg="neutral">
                <div className="max-w-3xl mx-auto text-center">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        src="/assets/icons/sri-lanka.svg"
                        alt="Sri Lanka"
                        className="w-12 h-8 mx-auto mb-4"
                    />
                    <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-4 font-heading">
                        Proudly Made in Sri Lanka
                    </h2>
                    <p className="text-neutral-600 leading-relaxed">
                        Every unit is designed, assembled, and quality-tested at our local
                        facility. We&apos;re building a brand that represents Sri Lankan
                        manufacturing capability on the global stage.
                    </p>
                </div>
            </SectionWrapper>

            {/* Quality Assurance */}
            <SectionWrapper>
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-6 font-heading">
                        Quality Assurance System
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                        {[
                            {
                                title: "Raw Material Testing",
                                desc: "All materials undergo strict quality inspection before entering production.",
                            },
                            {
                                title: "Production Line QC",
                                desc: "Continuous monitoring at every stage of the assembly process.",
                            },
                            {
                                title: "Final Product Testing",
                                desc: "Each unit is individually tested for safety and performance before packaging.",
                            },
                        ].map((item) => (
                            <div
                                key={item.title}
                                className="p-6 bg-neutral-50 rounded-xl border border-neutral-200"
                            >
                                <h3 className="font-bold text-primary mb-2 font-heading">
                                    {item.title}
                                </h3>
                                <p className="text-sm text-neutral-600">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </SectionWrapper>

            {/* Manufacturing Process */}
            <SectionWrapper bg="neutral">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-6 font-heading">
                        Manufacturing Process
                    </h2>
                    <div className="flex flex-col gap-4">
                        {[
                            "Component Sourcing & Inspection",
                            "Precision Assembly",
                            "Quality Control & Testing",
                            "Packaging & Distribution",
                        ].map((step, index) => (
                            <div
                                key={step}
                                className="flex items-center gap-4 p-4 bg-white rounded-lg border border-neutral-200 text-left"
                            >
                                <span className="flex-shrink-0 inline-flex items-center justify-center w-8 h-8 bg-secondary/10 text-secondary font-bold rounded-full text-sm">
                                    {index + 1}
                                </span>
                                <p className="font-medium text-neutral-700">{step}</p>
                            </div>
                        ))}
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
                        Our roadmap includes expanding into additional consumer electronics
                        categories, increasing production capacity, and exploring export
                        markets — all while maintaining the quality standards that define
                        SAT Holdings manufacturing.
                    </p>
                </div>
            </SectionWrapper>
        </>
    );
}
