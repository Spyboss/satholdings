import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import SectionWrapper from "@/components/layout/SectionWrapper";
import FAQAccordion from "@/components/faq/FAQAccordion";
import { FAQS, COMPANY } from "@/lib/constants";
import { createMetadata } from "@/lib/metadata";
import { createBreadcrumbSchema, createCollectionPageSchema } from "@/lib/structuredData";

const pageDescription =
    "Find answers about SAT Holdings services, projects, products, manufacturing, and operations across Sri Lanka.";

export const metadata: Metadata = createMetadata({
    title: "Frequently Asked Questions",
    description: pageDescription,
    path: "/faq",
    keywords: ["SAT Holdings FAQ", "SAT Holdings questions", "Sri Lanka engineering company FAQ"],
});

const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", url: COMPANY.domain },
    { name: "FAQ", url: `${COMPANY.domain}/faq` },
]);

const faqPageSchema = createCollectionPageSchema({
    name: "SAT Holdings Frequently Asked Questions",
    description: pageDescription,
    path: "/faq",
});

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
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema) }}
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
