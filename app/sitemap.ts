import { COMPANY } from "@/lib/constants";
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = COMPANY.domain;
    const routes = [
        "",
        "/engineering",
        "/manufacturing",
        "/products",
        "/projects",
        "/faq",
        "/contact",
    ];

    return routes.map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: route === "" ? 1 : 0.8,
    }));
}
