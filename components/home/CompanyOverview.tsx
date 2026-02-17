import SectionWrapper from "@/components/layout/SectionWrapper";

export default function CompanyOverview() {
    return (
        <SectionWrapper>
            <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-6 font-heading">
                    Building Sri Lanka&apos;s Future
                </h2>
                <p className="text-neutral-600 leading-relaxed mb-4">
                    SAT Holdings Pvt Ltd is a diversified Sri Lankan corporation with a
                    proven track record across three core industries: engineering &amp;
                    construction, manufacturing, and import &amp; trading.
                </p>
                <p className="text-neutral-600 leading-relaxed mb-4">
                    With a legacy built on government infrastructure projects - including
                    Southern Highway works and RDA contracts - we bring the same
                    discipline, quality assurance, and reliability to every venture we
                    undertake.
                </p>
                <p className="text-neutral-600 leading-relaxed">
                    As the operator of Sri Lanka&apos;s first rice cooker manufacturing
                    facility, SAT Holdings is committed to local manufacturing excellence
                    and expanding the &ldquo;Made in Sri Lanka&rdquo; brand across
                    consumer electronics and industrial products.
                </p>
            </div>
        </SectionWrapper>
    );
}
