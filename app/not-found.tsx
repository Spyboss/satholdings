import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Page Not Found",
    robots: {
        index: false,
        follow: false,
    },
};

export default function NotFound() {
    return (
        <section className="flex flex-col items-center justify-center min-h-[60vh] px-6 text-center">
            <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
            <p className="text-xl text-neutral-600 mb-8 max-w-md">
                The page you&apos;re looking for doesn&apos;t exist or has been moved.
            </p>
            <Link
                href="/"
                className="inline-block px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary-light transition-colors"
            >
                Back to Home
            </Link>
        </section>
    );
}
