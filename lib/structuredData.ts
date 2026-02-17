import { COMPANY } from "./constants";

export const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: COMPANY.name,
    legalName: COMPANY.legalName,
    url: COMPANY.domain,
    logo: `${COMPANY.domain}/assets/icons/logo.png`,
    address: {
        "@type": "PostalAddress",
        streetAddress: COMPANY.address.street,
        addressLocality: COMPANY.address.city,
        addressRegion: COMPANY.address.province,
        addressCountry: COMPANY.address.countryCode,
    },
    contactPoint: {
        "@type": "ContactPoint",
        telephone: COMPANY.phone[0],
        contactType: "customer service",
        availableLanguage: ["English", "Sinhala"],
    },
    sameAs: [],
};

export function createBreadcrumbSchema(items: { name: string; url: string }[]) {
    return {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: items.map((item, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: item.name,
            item: item.url,
        })),
    };
}
