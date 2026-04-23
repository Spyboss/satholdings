import { COMPANY } from "@/lib/constants";
import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: "*",
            allow: "/",
        },
        host: COMPANY.domain,
        sitemap: `${COMPANY.domain}/sitemap.xml`,
    };
}
