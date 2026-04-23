import { COMPANY } from "./constants";
import type { Metadata } from "next";

const BASE_URL = COMPANY.domain;

export function createMetadata({
    title,
    description,
    path = "",
    ogImage,
    keywords = [],
    type = "website",
}: {
    title: string;
    description: string;
    path?: string;
    ogImage?: string;
    keywords?: string[];
    type?: "website" | "article";
}): Metadata {
    const fullTitle = title === COMPANY.name ? title : `${title} - ${COMPANY.name}`;
    const url = `${BASE_URL}${path}`;
    const image = ogImage || `${BASE_URL}/og-image.jpg`;

    return {
        title: fullTitle,
        description,
        metadataBase: new URL(BASE_URL),
        applicationName: COMPANY.name,
        alternates: {
            canonical: url,
        },
        keywords: [...COMPANY.keywords, ...keywords],
        category: "Engineering, Construction, Manufacturing, Renewable Energy",
        authors: [{ name: COMPANY.name, url: BASE_URL }],
        creator: COMPANY.name,
        publisher: COMPANY.legalName,
        robots: {
            index: true,
            follow: true,
            googleBot: {
                index: true,
                follow: true,
                "max-image-preview": "large",
                "max-snippet": -1,
                "max-video-preview": -1,
            },
        },
        openGraph: {
            title: fullTitle,
            description,
            url,
            siteName: COMPANY.name,
            locale: "en_LK",
            type,
            images: [
                {
                    url: image,
                    width: 1200,
                    height: 630,
                    alt: title,
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title: fullTitle,
            description,
            images: [image],
        },
    };
}
