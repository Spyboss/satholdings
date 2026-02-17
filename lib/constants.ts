import type { Division } from "@/types/division";
import type { Project } from "@/types/project";

export const COMPANY = {
    name: "SAT Holdings Pvt Ltd",
    legalName: "SAT Holdings (Private) Limited",
    domain: "https://satholdings.lk",
    email: "holdingssat@gmail.com",
    phone: ["+94 77 123 4567", "+94 11 234 5678"],
    address: {
        street: "Colombo Road",
        city: "Colombo",
        province: "Western Province",
        country: "Sri Lanka",
        countryCode: "LK",
    },
    stats: {
        projects: 21,
        clients: 24,
        machinery: 43,
    },
} as const;

export const NAV_LINKS = [
    { label: "Home", href: "/" },
    { label: "Engineering", href: "/engineering" },
    { label: "Manufacturing", href: "/manufacturing" },
    { label: "Products", href: "/products" },
    { label: "Projects", href: "/projects" },
    { label: "FAQ", href: "/faq" },
    { label: "Contact", href: "/contact" },
] as const;

export const DIVISIONS: Division[] = [
    {
        slug: "engineering",
        title: "Engineering & Construction",
        tagline: "Building Sri Lanka's infrastructure with precision and scale.",
        href: "/engineering",
        icon: "🏗️",
    },
    {
        slug: "manufacturing",
        title: "Manufacturing",
        tagline: "Sri Lanka's first rice cooker manufacturing facility.",
        href: "/manufacturing",
        icon: "🏭",
    },
    {
        slug: "trading",
        title: "Import & Trading",
        tagline: "Electronics, aluminum profiles, and bathware — sourced globally.",
        href: "/products",
        icon: "📦",
    },
];

export const ENGINEERING_SERVICES = [
    {
        title: "Building Construction",
        description:
            "Commercial, residential, and industrial construction projects delivered with precision engineering.",
    },
    {
        title: "Road Construction",
        description:
            "Highway and road infrastructure projects for national development.",
    },
    {
        title: "Soil Protection & Turfing",
        description:
            "Environmental protection through professional soil stabilization and turfing services.",
    },
    {
        title: "Machinery & Vehicle Hiring",
        description:
            "A fleet of 43+ heavy machinery units available for hire across Sri Lanka.",
    },
] as const;

export const PRODUCT_CATEGORIES = [
    {
        name: "SAT Electronics",
        products: [
            {
                title: "Rice Cookers",
                description:
                    "Locally manufactured rice cookers with safety certification and energy efficiency. Multiple capacities available.",
            },
            {
                title: "Electric Kettles",
                description:
                    "Stainless steel and BPA-free electric kettles for home and commercial use.",
            },
        ],
    },
    {
        name: "SAT Aluminum Profiles",
        products: [
            {
                title: "Architectural Profiles",
                description:
                    "High-quality aluminum profiles for windows, doors, curtain walls, and structural applications.",
            },
            {
                title: "Industrial Profiles",
                description:
                    "Custom aluminum extrusions for industrial and manufacturing applications.",
            },
        ],
    },
    {
        name: "SAT Bathware",
        products: [
            {
                title: "Bathroom Fittings",
                description:
                    "Premium taps, showers, and accessories for residential and commercial bathrooms.",
            },
            {
                title: "Sanitary Ware",
                description:
                    "Quality ceramic sanitary ware designed for durability and modern aesthetics.",
            },
        ],
    },
] as const;

export const PROJECTS: Project[] = [
    {
        id: "1",
        year: 2023,
        title: "Southern Highway Extension Works",
        client: "Road Development Authority (RDA)",
        location: "Southern Province, Sri Lanka",
        description:
            "Major highway construction and earthwork operations as part of the Southern Expressway extension project.",
        category: "Highway",
    },
    {
        id: "2",
        year: 2022,
        title: "RDA Road Rehabilitation Project",
        client: "Road Development Authority (RDA)",
        location: "Western Province, Sri Lanka",
        description:
            "Road rehabilitation and improvement works covering multiple national routes.",
        category: "RDA",
    },
    {
        id: "3",
        year: 2021,
        title: "Commercial Building Construction",
        client: "Private Sector",
        location: "Colombo, Sri Lanka",
        description:
            "Multi-story commercial building construction with full engineering services from foundation to finishing.",
        category: "Building",
    },
    {
        id: "4",
        year: 2020,
        title: "Soil Protection & Turfing Project",
        client: "Government of Sri Lanka",
        location: "Southern Province, Sri Lanka",
        description:
            "Large-scale soil stabilization and turfing project for highway embankment protection.",
        category: "Infrastructure",
    },
];

export const FAQS = [
    {
        question: "What services does SAT Holdings provide?",
        answer: "SAT Holdings operates in three main divisions: Engineering & Construction (building construction, road construction, soil protection, and machinery hiring), Manufacturing (Sri Lanka's first rice cooker manufacturing facility), and Import & Trading (electronics, aluminum profiles, and bathware products).",
    },
    {
        question: "Where is SAT Holdings located?",
        answer: "SAT Holdings is headquartered in Colombo, Sri Lanka, and operates across all provinces serving both government and private sector clients throughout the island.",
    },
    {
        question: "Does SAT Holdings undertake government projects?",
        answer: "Yes, SAT Holdings has extensive experience working with government entities including the Road Development Authority (RDA), and has completed multiple infrastructure projects for various government ministries and departments.",
    },
    {
        question: "What is SAT Holdings' machinery fleet capacity?",
        answer: "Our engineering division maintains a fleet of 43+ heavy machinery units including excavators, loaders, rollers, and transport vehicles, all available for hire across Sri Lanka.",
    },
    {
        question: "Are SAT rice cookers locally manufactured?",
        answer: "Yes, SAT Holdings operates Sri Lanka's first rice cooker manufacturing facility. All rice cookers are designed, assembled, and quality-tested locally, supporting local employment and reducing import dependency.",
    },
    {
        question: "How can I request a quote for services?",
        answer: "You can request a quote by visiting our Contact page, calling us at +94 77 123 4567, or emailing us at holdingssat@gmail.com. Our team typically responds within 24-48 hours.",
    },
    {
        question: "What areas does SAT Holdings serve?",
        answer: "SAT Holdings serves clients throughout Sri Lanka, with projects completed in the Western, Southern, Central, and other provinces. Our engineering services are available island-wide.",
    },
    {
        question: "Does SAT Holdings offer product warranties?",
        answer: "Yes, all SAT products including rice cookers, electronics, and bathware come with manufacturer warranties. Specific warranty terms vary by product - contact us for details.",
    },
] as const;

export const CASE_STUDIES = [
    {
        slug: "southern-highway",
        title: "Southern Highway Extension Works",
        client: "Road Development Authority (RDA)",
        location: "Southern Province, Sri Lanka",
        year: 2023,
        category: "Highway Construction",
        challenge: "The Road Development Authority required a reliable contractor for earthwork operations and pavement construction as part of the Southern Expressway extension. The project demanded adherence to strict timelines and quality standards.",
        solution: "SAT Holdings deployed a team of 50+ skilled workers and 15+ heavy machinery units including excavators, bulldozers, and compactors. Our triple quality check system ensured all work met RDA specifications.",
        results: [
            "Completed 12km of earthwork ahead of schedule",
            "Zero safety incidents throughout project duration",
            "RDA quality certification achieved",
            "Follow-up contracts secured for additional phases",
        ],
        image: null,
    },
    {
        slug: "colombo-commercial-complex",
        title: "Colombo Commercial Complex",
        client: "Private Developer",
        location: "Colombo 07, Sri Lanka",
        year: 2021,
        category: "Building Construction",
        challenge: "A private developer needed a turnkey solution for a 5-story commercial building in the heart of Colombo, requiring coordination with multiple stakeholders and adherence to municipal regulations.",
        solution: "SAT Holdings provided end-to-end construction services from foundation work to final finishing. Our in-house engineering team handled structural design while coordinating with utility providers and regulatory bodies.",
        results: [
            "Project completed 2 months ahead of schedule",
            "LEED-equivalent sustainability standards met",
            "100% occupancy achieved within 6 months of completion",
            "Awarded 'Best Commercial Project' by construction association",
        ],
        image: null,
    },
    {
        slug: "local-rice-cooker-manufacturing",
        title: "Establishing Sri Lanka's First Rice Cooker Plant",
        client: "Internal Development",
        location: "Colombo, Sri Lanka",
        year: 2020,
        category: "Manufacturing",
        challenge: "Sri Lanka relied entirely on imported rice cookers. SAT Holdings aimed to establish domestic manufacturing capability to reduce import dependency and create local employment.",
        solution: "We invested in state-of-the-art assembly lines, imported quality components, and established rigorous quality control processes. Our team underwent extensive training to ensure production quality meets international standards.",
        results: [
            "First locally manufactured rice cooker launched in 2021",
            "Over 10,000 units produced in first year",
            "30+ direct jobs created in manufacturing facility",
            "30% price reduction compared to imported alternatives",
        ],
        image: null,
    },
] as const;
