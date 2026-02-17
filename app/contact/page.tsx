"use client";

import { useState, type FormEvent } from "react";
import PageHero from "@/components/ui/PageHero";
import SectionWrapper from "@/components/layout/SectionWrapper";
import { COMPANY } from "@/lib/constants";
import { createBreadcrumbSchema } from "@/lib/structuredData";

type FormStatus = "idle" | "submitting" | "success" | "error";

const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", url: COMPANY.domain },
    { name: "Contact Us", url: `${COMPANY.domain}/contact` },
]);

export default function ContactPage() {
    const [status, setStatus] = useState<FormStatus>("idle");
    const [errorMessage, setErrorMessage] = useState("");

    async function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setStatus("submitting");
        setErrorMessage("");

        const form = e.currentTarget;
        const formData = new FormData(form);

        // Honeypot check
        if (formData.get("botcheck")) {
            setStatus("error");
            setErrorMessage("Spam detected.");
            return;
        }

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData,
            });

            const result = await response.json();

            if (result.success) {
                setStatus("success");
                form.reset();
            } else {
                setStatus("error");
                setErrorMessage(result.message || "Something went wrong. Please try again.");
            }
        } catch {
            setStatus("error");
            setErrorMessage("Network error. Please check your connection and try again.");
        }
    }

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            <PageHero
                title="Contact Us"
                subtitle="Get in touch with SAT Holdings for project inquiries, product information, or partnerships."
            />

            <SectionWrapper>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    {/* Contact Info */}
                    <div>
                        <h2 className="text-2xl font-bold text-primary mb-6 font-heading">
                            Get in Touch
                        </h2>

                        <div className="space-y-6">
                            <div>
                                <h3 className="text-sm font-semibold text-neutral-500 uppercase tracking-wider mb-2">
                                    Address
                                </h3>
                                <p className="text-neutral-700">
                                    {COMPANY.address.street}
                                    <br />
                                    {COMPANY.address.city}, {COMPANY.address.province}
                                    <br />
                                    {COMPANY.address.country}
                                </p>
                            </div>

                            <div>
                                <h3 className="text-sm font-semibold text-neutral-500 uppercase tracking-wider mb-2">
                                    Phone
                                </h3>
                                {COMPANY.phone.map((phone) => (
                                    <p key={phone} className="text-neutral-700">
                                        <a
                                            href={`tel:${phone.replace(/\s/g, "")}`}
                                            className="hover:text-secondary transition-colors"
                                        >
                                            {phone}
                                        </a>
                                    </p>
                                ))}
                            </div>

                            <div>
                                <h3 className="text-sm font-semibold text-neutral-500 uppercase tracking-wider mb-2">
                                    Email
                                </h3>
                                <p>
                                    <a
                                        href={`mailto:${COMPANY.email}`}
                                        className="text-secondary hover:text-secondary-dark transition-colors"
                                    >
                                        {COMPANY.email}
                                    </a>
                                </p>
                            </div>
                        </div>

                        {/* Google Map Embed */}
                        <div className="mt-8 rounded-xl overflow-hidden border border-neutral-200">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d253682.62280805858!2d79.68383204999999!3d6.9218386!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae253d10f7a7003%3A0x320b2e4d32d3838d!2sColombo!5e0!3m2!1sen!2slk!4v1707000000000"
                                width="100%"
                                height="250"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="SAT Holdings Location"
                            />
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div>
                        <h2 className="text-2xl font-bold text-primary mb-6 font-heading">
                            Send a Message
                        </h2>

                        {status === "success" ? (
                            <div className="p-6 bg-green-50 border border-green-200 rounded-xl text-center">
                                <span className="text-3xl mb-2 block">✓</span>
                                <h3 className="text-lg font-bold text-green-800 mb-2">
                                    Message Sent Successfully
                                </h3>
                                <p className="text-sm text-green-700">
                                    Thank you for contacting us. We&apos;ll get back to you within
                                    24–48 hours.
                                </p>
                                <button
                                    onClick={() => setStatus("idle")}
                                    className="mt-4 text-sm text-green-700 underline hover:no-underline"
                                >
                                    Send another message
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-5">
                                {/* Web3Forms Access Key */}
                                <input
                                    type="hidden"
                                    name="access_key"
                                    value={process.env.NEXT_PUBLIC_WEB3FORMS_KEY || ""}
                                />

                                {/* Honeypot — hidden from real users */}
                                <input
                                    type="checkbox"
                                    name="botcheck"
                                    className="hidden"
                                    tabIndex={-1}
                                    autoComplete="off"
                                />

                                <div>
                                    <label
                                        htmlFor="name"
                                        className="block text-sm font-medium text-neutral-700 mb-1"
                                    >
                                        Full Name *
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        minLength={2}
                                        maxLength={100}
                                        className="w-full px-4 py-2.5 border border-neutral-300 rounded-lg text-sm focus:ring-2 focus:ring-secondary/20 focus:border-secondary outline-none transition-colors"
                                        placeholder="Your full name"
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor="email"
                                        className="block text-sm font-medium text-neutral-700 mb-1"
                                    >
                                        Email Address *
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        className="w-full px-4 py-2.5 border border-neutral-300 rounded-lg text-sm focus:ring-2 focus:ring-secondary/20 focus:border-secondary outline-none transition-colors"
                                        placeholder="you@example.com"
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor="phone"
                                        className="block text-sm font-medium text-neutral-700 mb-1"
                                    >
                                        Phone Number
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        className="w-full px-4 py-2.5 border border-neutral-300 rounded-lg text-sm focus:ring-2 focus:ring-secondary/20 focus:border-secondary outline-none transition-colors"
                                        placeholder="+94 XX XXX XXXX"
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor="subject"
                                        className="block text-sm font-medium text-neutral-700 mb-1"
                                    >
                                        Subject *
                                    </label>
                                    <select
                                        id="subject"
                                        name="subject"
                                        required
                                        className="w-full px-4 py-2.5 border border-neutral-300 rounded-lg text-sm focus:ring-2 focus:ring-secondary/20 focus:border-secondary outline-none transition-colors bg-white"
                                    >
                                        <option value="">Select a topic</option>
                                        <option value="Engineering Inquiry">
                                            Engineering &amp; Construction
                                        </option>
                                        <option value="Manufacturing Inquiry">Manufacturing</option>
                                        <option value="Product Inquiry">
                                            Import &amp; Trading
                                        </option>
                                        <option value="Partnership">Partnership</option>
                                        <option value="General">General Inquiry</option>
                                    </select>
                                </div>

                                <div>
                                    <label
                                        htmlFor="message"
                                        className="block text-sm font-medium text-neutral-700 mb-1"
                                    >
                                        Message *
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        required
                                        rows={5}
                                        minLength={10}
                                        maxLength={2000}
                                        className="w-full px-4 py-2.5 border border-neutral-300 rounded-lg text-sm focus:ring-2 focus:ring-secondary/20 focus:border-secondary outline-none transition-colors resize-y"
                                        placeholder="Tell us about your project or inquiry..."
                                    />
                                </div>

                                {status === "error" && (
                                    <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
                                        <p className="text-sm text-red-700">{errorMessage}</p>
                                    </div>
                                )}

                                <button
                                    type="submit"
                                    disabled={status === "submitting"}
                                    className="w-full px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary-light transition-colors disabled:opacity-60 disabled:cursor-not-allowed text-sm"
                                >
                                    {status === "submitting" ? "Sending..." : "Send Message"}
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </SectionWrapper>
        </>
    );
}
