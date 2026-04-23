import type { Metadata } from "next";
import { Barlow, Rajdhani } from "next/font/google";
import { COMPANY } from "@/lib/constants";
import { createMetadata } from "@/lib/metadata";
import { organizationSchema, websiteSchema } from "@/lib/structuredData";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const barlow = Barlow({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700", "800"],
    variable: "--font-sans",
    display: "swap",
});

const rajdhani = Rajdhani({
    subsets: ["latin"],
    weight: ["500", "600", "700"],
    variable: "--font-heading",
    display: "swap",
});

export const metadata: Metadata = {
    ...createMetadata({
        title: COMPANY.name,
        description: COMPANY.description,
        keywords: [
            "Sri Lanka construction",
            "Sri Lanka engineering",
            "SAT Energy Solutions",
            "SAT Electronics",
            "SAT Green Agro",
        ],
    }),
    title: {
        default: COMPANY.name,
        template: `%s - ${COMPANY.name}`,
    },
    icons: {
        icon: "/favicon.ico",
        apple: "/apple-icon.png",
    },
    manifest: "/manifest.json",
    appleWebApp: {
        title: COMPANY.name,
        capable: true,
        statusBarStyle: "default",
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className={`${barlow.variable} ${rajdhani.variable}`}>
            <head>
                <meta name="apple-mobile-web-app-title" content={COMPANY.name} />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(organizationSchema),
                    }}
                />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(websiteSchema),
                    }}
                />
            </head>
            <body className="min-h-screen flex flex-col">
                <Navbar />
                <main className="flex-1">{children}</main>
                <Footer />
            </body>
        </html>
    );
}
