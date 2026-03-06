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
        <div className="bg-white pb-14">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            <PageHero
                title="Import & Trading"
                subtitle="A balanced portfolio of locally manufactured and globally sourced products for Sri Lankan households and construction projects."
            />

            {/* Featured Product: SAT Rice Cooker */}
            <SectionWrapper>
                <div className="rounded-3xl border border-neutral-100 bg-white px-6 py-10 shadow-sm sm:p-12 mb-8 group relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none" />
                    <div className="absolute top-0 right-0 p-6 opacity-10">
                        <svg width="120" height="120" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2L2 22h20L12 2zm0 4.5l6.5 13h-13L12 6.5z" />
                        </svg>
                    </div>

                    <div className="relative z-10 grid gap-8 md:grid-cols-2 lg:gap-12 items-center">
                        <div>
                            <span className="inline-block px-3 py-1 text-[10px] font-extrabold tracking-widest uppercase bg-secondary/10 text-secondary rounded-full mb-4">
                                Flagship Product
                            </span>
                            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4 font-heading leading-tight">
                                SAT Premium Deluxe Rice Cooker
                            </h2>
                            <p className="text-neutral-600 leading-relaxed mb-6 font-medium">
                                Engineered specifically for the Sri Lankan kitchen. Proudly manufactured locally at our state-of-the-art facility to withstand local power fluctuations and heavy daily use.
                            </p>

                            <div className="grid grid-cols-2 gap-4">
                                {[
                                    { icon: "⚡", title: "Energy Efficient", desc: "Optimized for Sri Lankan grid" },
                                    { icon: "🛡️", title: "Advanced Safety", desc: "Dual thermal fuse protection" },
                                    { icon: "🏗️", title: "Durable Build", desc: "Heat-resistant outer body" },
                                    { icon: "🔧", title: "Local Warranty", desc: "Full service & spare parts" },
                                ].map((feature) => (
                                    <div key={feature.title} className="bg-neutral-50 p-4 rounded-xl border border-neutral-100">
                                        <div className="text-2xl mb-2">{feature.icon}</div>
                                        <h4 className="text-[11px] font-extrabold uppercase tracking-wide text-primary mb-1">{feature.title}</h4>
                                        <p className="text-[11px] text-neutral-500 leading-tight">{feature.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-neutral-100 overflow-hidden">
                            <div className="bg-primary px-6 py-4">
                                <h3 className="text-white font-bold font-heading text-lg">Technical Specifications</h3>
                            </div>
                            <div className="divide-y divide-neutral-100">
                                {[
                                    ["Capacity", "1.8L / 2.2L / 2.8L Options"],
                                    ["Power Supply", "230V / 50Hz"],
                                    ["Inner Pot", "High-Grade Non-Stick Coated Aluminum"],
                                    ["Heating", "Rapid-Heat Tech with Keep-Warm"],
                                    ["Included", "Measuring Cup, Steamer Tray, Spoon"],
                                    ["Warranty", "12-Month Manufacturer Warranty"],
                                ].map(([label, value]) => (
                                    <div key={label} className="px-6 py-3.5 flex justify-between items-center sm:text-sm text-[12px]">
                                        <span className="font-extrabold uppercase tracking-wider text-neutral-500">{label}</span>
                                        <span className="font-semibold text-primary text-right w-1/2">{value}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </SectionWrapper>

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
        </div>
    );
}
