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
                    className="border border-neutral-200 rounded-lg overflow-hidden"
                >
                    <button
                        onClick={() =>
                            setOpenIndex(openIndex === index ? null : index)
                        }
                        className="w-full flex items-center justify-between p-5 text-left bg-white hover:bg-neutral-50 transition-colors"
                    >
                        <span className="font-medium text-primary pr-4">
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
                        <div className="p-5 pt-0 bg-white border-t border-neutral-100">
                            <p className="text-neutral-600 leading-relaxed">
                                {faq.answer}
                            </p>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}
