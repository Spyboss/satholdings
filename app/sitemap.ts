import { COMPANY } from "@/lib/constants";
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = COMPANY.domain;
    const routes = [
        { path: "", changeFrequency: "weekly" as const, priority: 1 },
        { path: "/engineering", changeFrequency: "monthly" as const, priority: 0.9 },
        { path: "/manufacturing", changeFrequency: "monthly" as const, priority: 0.9 },
        { path: "/products", changeFrequency: "monthly" as const, priority: 0.85 },
        { path: "/projects", changeFrequency: "monthly" as const, priority: 0.85 },
        { path: "/faq", changeFrequency: "monthly" as const, priority: 0.7 },
        { path: "/contact", changeFrequency: "monthly" as const, priority: 0.8 },
    ];

    return routes.map((route) => ({
        url: `${baseUrl}${route.path}`,
        lastModified: new Date(),
        changeFrequency: route.changeFrequency,
        priority: route.priority,
    }));
}
