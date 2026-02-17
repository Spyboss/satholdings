import type { Metadata } from "next";
import HeroSection from "@/components/home/HeroSection";
import CompanyOverview from "@/components/home/CompanyOverview";
import StatsBar from "@/components/ui/StatsBar";
import DivisionsOverview from "@/components/home/DivisionsOverview";
import CtaSection from "@/components/home/CtaSection";

export const metadata: Metadata = {
    title: "SAT Holdings — Engineering · Manufacturing · Trading",
    description:
        "SAT Holdings Pvt Ltd — a diversified Sri Lankan corporation in engineering & construction, rice cooker manufacturing, and import & trading. 21+ projects, 24+ clients.",
};

export default function HomePage() {
    return (
        <>
            <HeroSection />
            <CompanyOverview />
            <StatsBar />
            <DivisionsOverview />
            <CtaSection />
        </>
    );
}
