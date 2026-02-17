import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import SectionWrapper from "@/components/layout/SectionWrapper";
import FAQAccordion from "@/components/faq/FAQAccordion";
import { FAQS, COMPANY } from "@/lib/constants";
import { createBreadcrumbSchema } from "@/lib/structuredData";

export const metadata: Metadata = {
    title: "Frequently Asked Questions",
    description:
        "Find answers to common questions about SAT Holdings services, projects, products, and company operations in Sri Lanka.",
};

const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", url: COMPANY.domain },
    { name: "FAQ", url: `${COMPANY.domain}/faq` },
]);

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
        },
    })),
};

export default function FAQPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <PageHero
                title="Frequently Asked Questions"
                subtitle="Find answers to common questions about our services, products, and company."
            />

            <SectionWrapper>
                <div className="max-w-3xl mx-auto">
                    <FAQAccordion faqs={FAQS} />
                </div>
            </SectionWrapper>
        </>
    );
}
