import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import SectionWrapper from "@/components/layout/SectionWrapper";
import { COMPANY } from "@/lib/constants";
import { createMetadata } from "@/lib/metadata";
import {
    createBreadcrumbSchema,
    createCollectionPageSchema,
    createContactPageSchema,
} from "@/lib/structuredData";
import ContactPageClient from "./ContactPageClient";

const pageDescription =
    "Contact SAT Holdings in Sri Lanka for engineering, construction, manufacturing, renewable energy, machinery hiring, and trading inquiries.";

export const metadata: Metadata = createMetadata({
    title: "Contact SAT Holdings",
    description: pageDescription,
    path: "/contact",
    keywords: ["contact SAT Holdings", "SAT Holdings phone number", "SAT Holdings Sri Lanka address"],
});

const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", url: COMPANY.domain },
    { name: "Contact Us", url: `${COMPANY.domain}/contact` },
]);

const contactPageSchema = createCollectionPageSchema({
    name: "Contact SAT Holdings",
    description: pageDescription,
    path: "/contact",
});

const contactSchema = createContactPageSchema();

export default function ContactPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
            />
            <PageHero
                title="Contact Us"
                subtitle="Get in touch with SAT Holdings for project inquiries, product information, or partnerships."
            />

            <SectionWrapper>
                <ContactPageClient />
            </SectionWrapper>
        </>
    );
}
