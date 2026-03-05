import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import SectionWrapper from "@/components/layout/SectionWrapper";
import GridLayout from "@/components/ui/GridLayout";
import Card from "@/components/ui/Card";
import { PRODUCT_CATEGORIES, COMPANY } from "@/lib/constants";
import { createBreadcrumbSchema } from "@/lib/structuredData";

export const metadata: Metadata = {
    title: "Import & Trading",
    description:
        "SAT Holdings product catalog - SAT Electronics (rice cookers, electric kettles), SAT Aluminum Profiles, and SAT Bathware. Quality products sourced globally.",
};

const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", url: COMPANY.domain },
    { name: "Import & Trading", url: `${COMPANY.domain}/products` },
]);

export default function ProductsPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            <PageHero
                title="Import & Trading"
                subtitle="A balanced portfolio of locally manufactured and globally sourced products for Sri Lankan households and construction projects."
            />

            {PRODUCT_CATEGORIES.map((category, index) => (
                <SectionWrapper
                    key={category.name}
                    bg={index % 2 === 0 ? "white" : "neutral"}
                >
                    <div className="mb-8">
                        <h2 className="text-2xl sm:text-3xl font-bold text-primary font-heading">
                            {category.name}
                        </h2>
                    </div>
                    <GridLayout columns={2}>
                        {category.products.map((product) => (
                            <Card
                                key={product.title}
                                title={product.title}
                                description={product.description}
                            />
                        ))}
                    </GridLayout>
                </SectionWrapper>
            ))}
        </>
    );
}
