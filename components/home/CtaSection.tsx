import SectionWrapper from "@/components/layout/SectionWrapper";
import Button from "@/components/ui/Button";

export default function CtaSection() {
    return (
        <SectionWrapper bg="neutral">
            <div className="text-center">
                <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-4 font-heading">
                    Ready to Work Together?
                </h2>
                <p className="text-neutral-600 mb-8 max-w-lg mx-auto">
                    Whether it&apos;s a construction project, manufacturing partnership,
                    or product inquiry, we&apos;re here to help.
                </p>
                <Button href="/contact" variant="primary">
                    Get in Touch
                </Button>
            </div>
        </SectionWrapper>
    );
}
