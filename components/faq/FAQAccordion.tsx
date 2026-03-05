"use client";

import { useState } from "react";

type FAQ = {
    question: string;
    answer: string;
};

export default function FAQAccordion({ faqs }: { faqs: readonly FAQ[] }) {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <div className="space-y-4">
            {faqs.map((faq, index) => (
                <div
                    key={index}
                    className="border border-neutral-100 rounded-2xl overflow-hidden shadow-[0_4px_20px_rgb(0,0,0,0.02)] transition-all hover:border-secondary/20"
                >
                    <button
                        onClick={() =>
                            setOpenIndex(openIndex === index ? null : index)
                        }
                        className="w-full flex items-center justify-between p-6 sm:p-8 text-left bg-white hover:bg-neutral-50/50 transition-colors"
                    >
                        <span className="font-extrabold text-[13px] uppercase tracking-widest text-primary pr-4">
                            {faq.question}
                        </span>
                        <span className="flex-shrink-0 text-secondary">
                            {openIndex === index ? (
                                <svg
                                    className="w-5 h-5"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M20 12H4"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    className="w-5 h-5"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M12 4v16m8-8H4"
                                    />
                                </svg>
                            )}
                        </span>
                    </button>
                    {openIndex === index && (
                        <div className="p-6 sm:p-8 pt-0 bg-white border-t border-neutral-100/50">
                            <p className="text-[14px] text-neutral-500 leading-relaxed">
                                {faq.answer}
                            </p>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}
