import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import SectionWrapper from "@/components/layout/SectionWrapper";
import { PROJECTS, CASE_STUDIES, COMPANY } from "@/lib/constants";
import { createBreadcrumbSchema } from "@/lib/structuredData";

export const metadata: Metadata = {
    title: "Projects & Case Studies",
    description:
        "SAT Holdings project portfolio — Southern Highway works, RDA projects, and government infrastructure. Detailed case studies showcasing engineering excellence.",
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
                subtitle="A proven track record of delivering government and private infrastructure projects across Sri Lanka."
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

                                    <div className="flex flex-wrap gap-3 text-xs text-neutral-500 mb-2">
                                        <span>{project.client}</span>
                                        <span>·</span>
                                        <span>{project.location}</span>
                                        <span>·</span>
                                        <span className="px-1.5 py-0.5 bg-neutral-100 rounded text-neutral-600">
                                            {project.category}
                                        </span>
                                    </div>

                                    <p className="text-sm text-neutral-600 leading-relaxed">
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
                                className="bg-white rounded-2xl overflow-hidden border border-neutral-200"
                            >
                                <div className="p-6 sm:p-8">
                                    <div className="flex flex-wrap items-center gap-3 mb-4">
                                        <span className="px-3 py-1 text-xs font-medium bg-secondary/10 text-secondary rounded-full">
                                            {study.category}
                                        </span>
                                        <span className="text-sm text-neutral-500">
                                            {study.year}
                                        </span>
                                    </div>

                                    <h3 className="text-xl sm:text-2xl font-bold text-primary font-heading mb-2">
                                        {study.title}
                                    </h3>

                                    <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-neutral-500 mb-6">
                                        <span>
                                            <span className="font-medium">Client:</span> {study.client}
                                        </span>
                                        <span>
                                            <span className="font-medium">Location:</span>{" "}
                                            {study.location}
                                        </span>
                                    </div>

                                    <div className="grid gap-5">
                                        <div>
                                            <h4 className="font-semibold text-primary mb-2">
                                                The Challenge
                                            </h4>
                                            <p className="text-neutral-600 text-sm leading-relaxed">
                                                {study.challenge}
                                            </p>
                                        </div>

                                        <div>
                                            <h4 className="font-semibold text-primary mb-2">
                                                Our Solution
                                            </h4>
                                            <p className="text-neutral-600 text-sm leading-relaxed">
                                                {study.solution}
                                            </p>
                                        </div>

                                        <div>
                                            <h4 className="font-semibold text-primary mb-3">
                                                Results
                                            </h4>
                                            <ul className="grid sm:grid-cols-2 gap-2">
                                                {study.results.map((result, i) => (
                                                    <li
                                                        key={i}
                                                        className="flex items-start gap-2 text-sm text-neutral-600"
                                                    >
                                                        <span className="flex-shrink-0 mt-0.5 w-4 h-4 flex items-center justify-center bg-green-100 text-green-600 rounded-full">
                                                            <svg
                                                                className="w-2.5 h-2.5"
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
                                                        <span>{result}</span>
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
                        Our portfolio includes projects commissioned by the Road Development
                        Authority, Southern Highway project, and other government entities.
                        Each contract reflects our ability to meet strict government
                        standards for quality, safety, and timely delivery.
                    </p>
                </div>
            </SectionWrapper>
        </>
    );
}
