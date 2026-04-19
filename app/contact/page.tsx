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

        // Honeypot check - spam bots fill this hidden field
        if (formData.get("company")) {
            setStatus("error");
            setErrorMessage("Spam detected.");
            return;
        }

        try {
            const formDataObj = {
                name: formData.get("name"),
                email: formData.get("email"),
                phone: formData.get("phone"),
                subject: formData.get("subject"),
                message: formData.get("message"),
            };

            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formDataObj),
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

                        <div className="mt-8 rounded-3xl overflow-hidden border border-neutral-100 shadow-[0_4px_20px_rgb(0,0,0,0.02)]">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d253682.62280805858!2d79.68383204999999!3d6.9218386!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae253d10f7a7003%3A0x320b2e4d32d3838d!2sColombo!5e0!3m2!1sen!2slk!4v1707000000000"
                                width="100%"
                                height="280"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="SAT Holdings Location"
                            />
                        </div>
                    </div>

                    <div className="bg-white p-8 sm:p-12 rounded-[2rem] border border-neutral-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
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
                                {/* Honeypot - hidden from real users */}
                                <input
                                    type="text"
                                    name="company"
                                    className="hidden"
                                    tabIndex={-1}
                                    autoComplete="off"
                                />

                                <label
                                    htmlFor="name"
                                    className="block text-[11px] font-extrabold uppercase tracking-widest text-neutral-500 mb-2"
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
                                    className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl text-[13px] text-neutral-700 focus:bg-white focus:ring-4 focus:ring-secondary/10 focus:border-secondary outline-none transition-all placeholder:text-neutral-400"
                                    placeholder="Your full name"
                                />

                                <label
                                    htmlFor="email"
                                    className="block text-[11px] font-extrabold uppercase tracking-widest text-neutral-500 mb-2"
                                >
                                    Email Address *
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl text-[13px] text-neutral-700 focus:bg-white focus:ring-4 focus:ring-secondary/10 focus:border-secondary outline-none transition-all placeholder:text-neutral-400"
                                    placeholder="you@example.com"
                                />

                                <label
                                    htmlFor="phone"
                                    className="block text-[11px] font-extrabold uppercase tracking-widest text-neutral-500 mb-2"
                                >
                                    Phone Number
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl text-[13px] text-neutral-700 focus:bg-white focus:ring-4 focus:ring-secondary/10 focus:border-secondary outline-none transition-all placeholder:text-neutral-400"
                                    placeholder="+94 XX XXX XXXX"
                                />

                                <label
                                    htmlFor="subject"
                                    className="block text-[11px] font-extrabold uppercase tracking-widest text-neutral-500 mb-2"
                                >
                                    Subject *
                                </label>
                                <select
                                    id="subject"
                                    name="subject"
                                    required
                                    className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl text-[13px] text-neutral-700 focus:bg-white focus:ring-4 focus:ring-secondary/10 focus:border-secondary outline-none transition-all"
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

                                <label
                                    htmlFor="message"
                                    className="block text-[11px] font-extrabold uppercase tracking-widest text-neutral-500 mb-2"
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
                                    className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl text-[13px] text-neutral-700 focus:bg-white focus:ring-4 focus:ring-secondary/10 focus:border-secondary outline-none transition-all resize-y placeholder:text-neutral-400"
                                    placeholder="Tell us about your project or inquiry..."
                                />

                                {status === "error" && (
                                    <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
                                        <p className="text-sm text-red-700">{errorMessage}</p>
                                    </div>
                                )}

                                <button
                                    type="submit"
                                    disabled={status === "submitting"}
                                    className="w-full px-6 py-4 bg-primary text-white font-extrabold text-[12px] uppercase tracking-widest rounded-xl hover:bg-primary-light transition-all shadow-[0_4px_14px_rgb(27,54,93,0.3)] hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgb(27,54,93,0.4)] disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none"
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
