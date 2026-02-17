import { COMPANY } from "./constants";
import type { Metadata } from "next";

const BASE_URL = COMPANY.domain;

export function createMetadata({
    title,
    description,
    path = "",
    ogImage,
}: {
    title: string;
    description: string;
    path?: string;
    ogImage?: string;
}): Metadata {
    const fullTitle = `${title} - ${COMPANY.name}`;
    const url = `${BASE_URL}${path}`;
    const image = ogImage || `${BASE_URL}/assets/og/default.png`;

    return {
        title: fullTitle,
        description,
        metadataBase: new URL(BASE_URL),
        alternates: {
            canonical: url,
        },
        openGraph: {
            title: fullTitle,
            description,
            url,
            siteName: COMPANY.name,
            locale: "en_LK",
            type: "website",
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
