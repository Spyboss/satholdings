import { COMPANY } from "./constants";

export const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Corporation",
    "@id": `${COMPANY.domain}#organization`,
    name: COMPANY.name,
    legalName: COMPANY.legalName,
    url: COMPANY.domain,
    description: COMPANY.description,
    slogan: COMPANY.tagline,
    foundingDate: `${COMPANY.foundedYear}`,
    email: COMPANY.email,
    telephone: COMPANY.phone[0],
    logo: `${COMPANY.domain}/og-image.jpg`,
    address: {
        "@type": "PostalAddress",
        streetAddress: COMPANY.address.street,
        addressLocality: COMPANY.address.city,
        addressRegion: COMPANY.address.province,
        postalCode: COMPANY.address.postalCode,
        addressCountry: COMPANY.address.countryCode,
    },
    areaServed: COMPANY.serviceAreas.map((name) => ({
        "@type": "Country",
        name,
    })),
    contactPoint: COMPANY.phone.map((telephone, index) => ({
        "@type": "ContactPoint",
        telephone,
        contactType: index === 0 ? "customer service" : "sales",
        email: COMPANY.email,
        availableLanguage: ["English", "Sinhala"],
        areaServed: "LK",
    })),
    knowsAbout: [
        "Engineering and construction",
        "Road construction",
        "Heavy machinery hiring",
        "Rice cooker manufacturing",
        "Renewable energy projects",
        "Import and trading",
    ],
};

export const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${COMPANY.domain}#website`,
    name: COMPANY.name,
    url: COMPANY.domain,
    description: COMPANY.description,
    inLanguage: "en-LK",
    publisher: {
        "@id": `${COMPANY.domain}#organization`,
    },
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

export function createWebPageSchema({
    name,
    description,
    path,
}: {
    name: string;
    description: string;
    path: string;
}) {
    const url = path ? `${COMPANY.domain}${path}` : COMPANY.domain;

    return {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        name,
        description,
        url,
        isPartOf: {
            "@id": `${COMPANY.domain}#website`,
        },
        about: {
            "@id": `${COMPANY.domain}#organization`,
        },
        inLanguage: "en-LK",
    };
}

export function createCollectionPageSchema({
    name,
    description,
    path,
}: {
    name: string;
    description: string;
    path: string;
}) {
    return {
        ...createWebPageSchema({ name, description, path }),
        "@type": "CollectionPage",
    };
}

export function createContactPageSchema() {
    return {
        ...createWebPageSchema({
            name: "Contact SAT Holdings",
            description:
                "Contact SAT Holdings for engineering, manufacturing, renewable energy, and trading inquiries in Sri Lanka.",
            path: "/contact",
        }),
        "@type": "ContactPage",
        mainEntity: {
            "@id": `${COMPANY.domain}#organization`,
        },
    };
}

export function createServiceSchema({
    name,
    description,
    path,
    serviceType,
}: {
    name: string;
    description: string;
    path: string;
    serviceType: string;
}) {
    return {
        "@context": "https://schema.org",
        "@type": "Service",
        name,
        description,
        url: `${COMPANY.domain}${path}`,
        serviceType,
        areaServed: COMPANY.serviceAreas.map((area) => ({
            "@type": "Country",
            name: area,
        })),
        provider: {
            "@id": `${COMPANY.domain}#organization`,
        },
    };
}
