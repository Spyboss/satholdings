import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import SectionWrapper from "@/components/layout/SectionWrapper";
import GridLayout from "@/components/ui/GridLayout";
import Card from "@/components/ui/Card";
import { ENGINEERING_SERVICES, COMPANY } from "@/lib/constants";
import { createBreadcrumbSchema } from "@/lib/structuredData";

export const metadata: Metadata = {
    title: "Engineering & Construction",
    description:
        "SAT Holdings engineering division — building construction, road construction, soil protection, and heavy machinery hiring across Sri Lanka.",
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
                <div className="text-center mb-10">
                    <h2 className="text-2xl sm:text-3xl font-bold text-primary font-heading">
                        Our Services
                    </h2>
                </div>
                <GridLayout columns={2}>
                    {ENGINEERING_SERVICES.map((service) => (
                        <Card
                            key={service.title}
                            title={service.title}
                            description={service.description}
                        />
                    ))}
                </GridLayout>
            </SectionWrapper>

            {/* Triple Quality Check */}
            <SectionWrapper bg="neutral">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-6 font-heading">
                        Triple Quality Check System
                    </h2>
                    <p className="text-neutral-600 leading-relaxed mb-6">
                        Every project undergoes our rigorous three-stage quality assurance
                        process — from material inspection through construction monitoring
                        to final delivery verification.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
                        {["Material Inspection", "Construction Monitoring", "Final Verification"].map(
                            (step, index) => (
                                <div
                                    key={step}
                                    className="p-5 bg-white rounded-xl border border-neutral-200"
                                >
                                    <span className="inline-flex items-center justify-center w-10 h-10 bg-secondary/10 text-secondary font-bold rounded-full text-lg mb-3">
                                        {index + 1}
                                    </span>
                                    <p className="font-semibold text-primary text-sm">{step}</p>
                                </div>
                            )
                        )}
                    </div>
                </div>
            </SectionWrapper>

            {/* Machinery Fleet */}
            <SectionWrapper>
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-4 font-heading">
                        Machinery Fleet
                    </h2>
                    <p className="text-neutral-600 leading-relaxed">
                        Our fleet of 43+ heavy machinery units — including excavators,
                        loaders, rollers, and transport vehicles — is available for hire
                        across Sri Lanka. All equipment is maintained to international
                        safety standards.
                    </p>
                    {/* Machinery gallery placeholder — add real images when available */}
                    <p className="mt-8 text-sm text-neutral-400 italic">
                        Machinery gallery images coming soon.
                    </p>
                </div>
            </SectionWrapper>
        </>
    );
}
