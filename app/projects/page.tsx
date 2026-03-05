import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import SectionWrapper from "@/components/layout/SectionWrapper";
import { PROJECTS, CASE_STUDIES, COMPANY } from "@/lib/constants";
import { createBreadcrumbSchema } from "@/lib/structuredData";

export const metadata: Metadata = {
    title: "Projects & Case Studies",
    description:
        "SAT Holdings project portfolio - Southern Highway works, RDA projects, and flagship case studies including the 500kW Tangalle solar plant.",
};

const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", url: COMPANY.domain },
    { name: "Projects", url: `${COMPANY.domain}/projects` },
]);

export default function ProjectsPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            <PageHero
                title="Projects & Case Studies"
                subtitle="A proven track record across highway infrastructure, renewable energy, and local manufacturing milestones."
            />

            <SectionWrapper>
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-2xl font-bold text-primary font-heading mb-8 text-center">
                        Project Timeline
                    </h2>
                    {/* Timeline */}
                    <div className="relative">
                        {/* Timeline line */}
                        <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-px bg-neutral-200" />

                        <div className="space-y-10">
                            {PROJECTS.map((project) => (
                                <div key={project.title} className="relative pl-12 sm:pl-20">
                                    {/* Timeline dot */}
                                    <div className="absolute left-2.5 sm:left-6.5 top-1 w-3 h-3 bg-secondary rounded-full border-2 border-white shadow-sm" />

                                    {/* Year badge */}
                                    <span className="inline-block px-2 py-0.5 text-xs font-semibold bg-accent/10 text-accent rounded mb-2">
                                        {project.year}
                                    </span>

                                    <h3 className="text-lg font-bold text-primary font-heading mb-1">
                                        {project.title}
                                    </h3>

                                    <div className="flex flex-wrap gap-3 text-[11px] font-semibold text-neutral-500 mb-3 uppercase tracking-wider">
                                        <span>{project.client}</span>
                                        <span>&bull;</span>
                                        <span>{project.location}</span>
                                        <span>&bull;</span>
                                        <span className="px-2 py-0.5 bg-neutral-100/50 rounded text-neutral-600 border border-neutral-200/50">
                                            {project.category}
                                        </span>
                                    </div>

                                    <p className="text-[13px] text-neutral-500 leading-relaxed">
                                        {project.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </SectionWrapper>

            {/* Case Studies */}
            <SectionWrapper bg="neutral">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-2xl sm:text-3xl font-bold text-primary font-heading mb-4 text-center">
                        Case Studies
                    </h2>
                    <p className="text-neutral-600 text-center mb-12 max-w-2xl mx-auto">
                        Real-world examples of how we deliver exceptional results for our clients.
                    </p>

                    <div className="space-y-12">
                        {CASE_STUDIES.map((study) => (
                            <article
                                key={study.slug}
                                className="group bg-white rounded-3xl overflow-hidden border border-neutral-100 shadow-[0_4px_20px_rgb(0,0,0,0.02)] transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                            >
                                <div className="p-8 sm:p-12 relative">
                                    <div className="absolute inset-x-0 top-0 h-1.5 w-full bg-secondary opacity-0 transform origin-left transition-all duration-300 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100"></div>
                                    <div className="flex flex-wrap items-center gap-3 mb-6">
                                        <span className="px-3 py-1 text-[10px] font-extrabold tracking-widest uppercase bg-secondary/10 text-secondary rounded-full">
                                            {study.category}
                                        </span>
                                        <span className="text-[11px] font-bold text-neutral-400 font-mono">
                                            {study.year}
                                        </span>
                                    </div>

                                    <h3 className="text-2xl sm:text-3xl font-bold text-primary font-heading mb-4 group-hover:text-secondary transition-colors">
                                        {study.title}
                                    </h3>

                                    <div className="flex flex-wrap gap-x-8 gap-y-3 text-[12px] text-neutral-500 mb-8 border-b border-neutral-100 pb-6 uppercase tracking-wider font-semibold">
                                        <span>
                                            <span className="text-neutral-400">Client:</span> {study.client}
                                        </span>
                                        <span>
                                            <span className="text-neutral-400">Location:</span>{" "}
                                            {study.location}
                                        </span>
                                    </div>

                                    <div className="grid gap-8 sm:gap-10">
                                        <div>
                                            <h4 className="font-extrabold text-[12px] uppercase tracking-widest text-primary mb-3">
                                                The Challenge
                                            </h4>
                                            <p className="text-neutral-500 text-[13px] leading-relaxed">
                                                {study.challenge}
                                            </p>
                                        </div>

                                        <div>
                                            <h4 className="font-extrabold text-[12px] uppercase tracking-widest text-primary mb-3">
                                                Our Solution
                                            </h4>
                                            <p className="text-neutral-500 text-[13px] leading-relaxed">
                                                {study.solution}
                                            </p>
                                        </div>

                                        <div className="bg-neutral-50 p-6 rounded-2xl border border-neutral-100">
                                            <h4 className="font-extrabold text-[12px] uppercase tracking-widest text-primary mb-4">
                                                Results
                                            </h4>
                                            <ul className="grid sm:grid-cols-2 gap-4">
                                                {study.results.map((result, i) => (
                                                    <li
                                                        key={i}
                                                        className="flex items-start gap-3 text-[13px] text-neutral-600 font-medium"
                                                    >
                                                        <span className="flex-shrink-0 mt-0.5 w-5 h-5 flex items-center justify-center bg-secondary/10 text-secondary rounded-full">
                                                            <svg
                                                                className="w-3 h-3"
                                                                fill="currentColor"
                                                                viewBox="0 0 20 20"
                                                            >
                                                                <path
                                                                    fillRule="evenodd"
                                                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                                    clipRule="evenodd"
                                                                />
                                                            </svg>
                                                        </span>
                                                        <span className="leading-snug">{result}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </SectionWrapper>

            {/* Government Credibility */}
            <SectionWrapper>
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-4 font-heading">
                        Government-Grade Credibility
                    </h2>
                    <p className="text-neutral-600 leading-relaxed">
                        Our portfolio includes projects commissioned by the Road
                        Development Authority, Southern Highway programs, and renewable
                        energy initiatives. Each contract reflects our ability to meet
                        strict standards for quality, safety, and timely delivery.
                    </p>
                </div>
            </SectionWrapper>
        </>
    );
}
