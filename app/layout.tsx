import type { Metadata } from "next";
import { Barlow, Rajdhani } from "next/font/google";
import { COMPANY } from "@/lib/constants";
import { organizationSchema } from "@/lib/structuredData";
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
    metadataBase: new URL(COMPANY.domain),
    title: {
        default: "SAT Holdings Engineering",
        template: `%s - ${COMPANY.name}`,
    },
    description:
        "Sri Lankan engineering and construction company behind the country's first rice cooker manufacturing project.",
    openGraph: {
        title: "SAT Holdings Pvt LTD",
        description:
            "Engineering, construction and manufacturing projects across Sri Lanka.",
        url: COMPANY.domain,
        siteName: COMPANY.name,
        locale: "en_LK",
        type: "website",
        images: [
            {
                url: "/og-image.jpg",
                width: 1200,
                height: 630,
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "SAT Holdings Pvt LTD",
        description:
            "Engineering, construction and manufacturing projects across Sri Lanka.",
        images: ["/og-image.jpg"],
    },
    icons: {
        icon: "/favicon.ico",
        apple: "/apple-icon.png",
    },
    manifest: "/manifest.json",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className={`${barlow.variable} ${rajdhani.variable}`}>
            <head>
                <meta name="apple-mobile-web-app-title" content="MyWebSite" />
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
