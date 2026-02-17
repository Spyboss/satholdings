import { COMPANY } from "@/lib/constants";
import SectionWrapper from "@/components/layout/SectionWrapper";

interface Stat {
    label: string;
    value: number;
    suffix?: string;
}

const stats: Stat[] = [
    { label: "Projects Completed", value: COMPANY.stats.projects, suffix: "+" },
    { label: "Clients Served", value: COMPANY.stats.clients, suffix: "+" },
    { label: "Machinery Units", value: COMPANY.stats.machinery, suffix: "+" },
];

export default function StatsBar() {
    return (
        <SectionWrapper bg="primary">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
                {stats.map((stat) => (
                    <div key={stat.label}>
                        <p className="text-4xl sm:text-5xl font-bold text-accent font-heading">
                            {stat.value}
                            {stat.suffix}
                        </p>
                        <p className="mt-2 text-sm text-neutral-300 uppercase tracking-wider font-medium">
                            {stat.label}
                        </p>
                    </div>
                ))}
            </div>
        </SectionWrapper>
    );
}
