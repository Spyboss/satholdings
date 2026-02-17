"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function GlobalError({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        console.error("Application error:", error);
    }, [error]);

    return (
        <section className="flex flex-col items-center justify-center min-h-[60vh] px-6 text-center">
            <h1 className="text-4xl font-bold text-primary mb-4">Something went wrong</h1>
            <p className="text-neutral-600 mb-8 max-w-md">
                We encountered an unexpected error. Please try again or return to the homepage.
            </p>
            <div className="flex gap-4">
                <button
                    onClick={reset}
                    className="inline-block px-6 py-3 bg-secondary text-white font-medium rounded-lg hover:bg-secondary/90 transition-colors"
                >
                    Try Again
                </button>
                <Link
                    href="/"
                    className="inline-block px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary-light transition-colors"
                >
                    Back to Home
                </Link>
            </div>
        </section>
    );
}
