import SectionWrapper from "@/components/layout/SectionWrapper";
import GridLayout from "@/components/ui/GridLayout";
import Card from "@/components/ui/Card";
import { DIVISIONS } from "@/lib/constants";

export default function DivisionsOverview() {
    return (
        <SectionWrapper bg="neutral">
            <div className="text-center mb-10">
                <h2 className="text-2xl sm:text-3xl font-bold text-primary font-heading">
                    Our Business Divisions
                </h2>
                <p className="mt-3 text-neutral-600 max-w-xl mx-auto">
                    Three integrated divisions working together to deliver value across
                    Sri Lanka.
                </p>
            </div>

            <GridLayout columns={3}>
                {DIVISIONS.map((division) => (
                    <Card
                        key={division.slug}
                        title={division.title}
                        description={division.tagline}
                        icon={division.icon}
                        href={division.href}
                    />
                ))}
            </GridLayout>
        </SectionWrapper>
    );
}
