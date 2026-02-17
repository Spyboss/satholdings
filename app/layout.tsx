import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import { COMPANY } from "@/lib/constants";
import { organizationSchema } from "@/lib/structuredData";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-sans",
    display: "swap",
});

const outfit = Outfit({
    subsets: ["latin"],
    variable: "--font-heading",
    display: "swap",
});

export const metadata: Metadata = {
    metadataBase: new URL(COMPANY.domain),
    title: {
        default: `${COMPANY.name} — Engineering · Manufacturing · Trading`,
        template: `%s — ${COMPANY.name}`,
    },
    description:
        "SAT Holdings is a diversified Sri Lankan corporation operating in engineering & construction, rice cooker manufacturing, and import & trading.",
    openGraph: {
        title: `${COMPANY.name} — Engineering · Manufacturing · Trading`,
        description:
            "SAT Holdings is a diversified Sri Lankan corporation operating in engineering & construction, rice cooker manufacturing, and import & trading.",
        url: COMPANY.domain,
        siteName: COMPANY.name,
        locale: "en_LK",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: `${COMPANY.name} — Engineering · Manufacturing · Trading`,
        description:
            "SAT Holdings is a diversified Sri Lankan corporation operating in engineering & construction, rice cooker manufacturing, and import & trading.",
    },
    icons: {
        icon: "/assets/icons/favicon.svg",
        apple: "/assets/icons/favicon.svg",
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
            <head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(organizationSchema),
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
