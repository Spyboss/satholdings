import type { Division } from "@/types/division";
import type { Project } from "@/types/project";

export const COMPANY = {
    name: "SAT Holdings Pvt Ltd",
    legalName: "SAT Holdings (Private) Limited",
    domain: "https://satholdings.lk",
    description:
        "SAT Holdings is a Sri Lankan business group operating across engineering and construction, manufacturing, renewable energy projects, and strategic trading.",
    email: "holdingssat@gmail.com",
    phone: ["+94 77 234 6283", "+94 77 741 0011", "+94 11 216 0620"],
    foundedYear: 2017,
    address: {
        street: "1028/B7 Midway Park, Liyanagoda, Pannipitiya",
        city: "Pannipitiya",
        province: "Western Province",
        country: "Sri Lanka",
        countryCode: "LK",
        postalCode: "10230",
    },
    tagline: "Building Dreams, Empowering Lifestyles.",
    serviceAreas: ["Sri Lanka"],
    keywords: [
        "SAT Holdings",
        "SAT Holdings Sri Lanka",
        "satholdings.lk",
        "engineering company Sri Lanka",
        "construction company Sri Lanka",
        "rice cooker manufacturer Sri Lanka",
        "solar energy projects Sri Lanka",
        "heavy machinery hiring Sri Lanka",
        "road construction Sri Lanka",
        "import trading Sri Lanka",
    ],
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
        tagline: "Electricals and aluminum profiles, sourced globally.",
        href: "/products",
        icon: "📦",
    },
];

export const ENGINEERING_SERVICES = [
    {
        title: "Building Construction",
        description:
            "Commercial and civil construction packages delivered with disciplined planning, quality control, and safe site management.",
    },
    {
        title: "Road Construction",
        description:
            "Highway and access-road development works including turfing, labor supply, and machinery support for national programs.",
    },
    {
        title: "Soil Protection & Turfing",
        description:
            "Slope stabilization and turfing solutions that protect embankments and improve long-term environmental resilience.",
    },
    {
        title: "Machinery & Vehicle Hiring",
        description:
            "A 43+ unit fleet including excavators, rollers, graders, dump trucks, wheel loaders, dual AC vans, and 4WD double cabs.",
    },
    {
        title: "Manpower Recruitment",
        description:
            "Skilled and semi-skilled workforce support for construction and infrastructure projects across Sri Lanka.",
    },
] as const;

export const PRODUCT_CATEGORIES = [
    {
        name: "SAT Electricals",
        products: [
            {
                title: "Rice Cookers",
                description:
                    "Locally manufactured SAT Premium Deluxe rice cookers with 1.8L, 2.2L, and 2.8L options, rapid-heat technology, and dual thermal fuse protection.",
            },
            {
                title: "Electric Kettles",
                description:
                    "Premium electric kettles imported for Sri Lankan households with dependable heating performance and durable construction.",
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
                    "Modern taps, showers, and accessories selected for residential and commercial durability.",
            },
            {
                title: "Sanitary Ware",
                description:
                    "Elegant and practical sanitaryware solutions curated for contemporary projects.",
            },
        ],
    },
] as const;

export const PROJECTS: Project[] = [
    {
        id: "1",
        year: 2017,
        title: "Southern Highway - Beliatta to Apelassa (13km)",
        client: "Road Development Authority (RDA)",
        location: "Southern Province, Sri Lanka",
        description:
            "Turfing and labor supply package delivered with China Railway First Survey & Design Institute Group for expressway works.",
        category: "Highway",
    },
    {
        id: "2",
        year: 2017,
        title: "Southern Highway - Wetiya to Andaragaswewa (10km)",
        client: "Road Development Authority (RDA)",
        location: "Southern Province, Sri Lanka",
        description:
            "Road package support with construction labor and turfing services under strict timeline and quality requirements.",
        category: "Highway",
    },
    {
        id: "3",
        year: 2017,
        title: "Southern Highway - Matara to Beliatta (5km)",
        client: "Road Development Authority (RDA)",
        location: "Southern Province, Sri Lanka",
        description:
            "Highway support scope focused on quality turfing and workforce deployment for key expressway sections.",
        category: "Highway",
    },
    {
        id: "4",
        year: 2019,
        title: "Southern Highway Interchange Admin Building (Beliatta-Wetiya)",
        client: "Road Development Authority (RDA)",
        location: "Southern Province, Sri Lanka",
        description:
            "Subcontracted building construction works for the interchange administration facility with compliant project delivery.",
        category: "Building",
    },
    {
        id: "5",
        year: 2020,
        title: "RDA Kataragama Detagama Wewa Project",
        client: "Road Development Authority (RDA)",
        location: "Kataragama, Sri Lanka",
        description:
            "Material, machinery, and labor supply support for an ongoing RDA infrastructure program.",
        category: "RDA",
    },
    {
        id: "6",
        year: 2021,
        title: "RDA Hambanthota 100000 KM Project (Ongoing)",
        client: "Road Development Authority (RDA)",
        location: "Hambanthota, Sri Lanka",
        description:
            "Multi-package support including material mobilization, machinery deployment, and labor coordination.",
        category: "RDA",
        value: "50M",
    },
    {
        id: "7",
        year: 2021,
        title: "Polpithigama Wayaba Ela Project (Ongoing)",
        client: "Irrigation Sector",
        location: "Polpithigama, Sri Lanka",
        description:
            "Machinery and vehicle supply for irrigation development under program management and design supervision.",
        category: "Irrigation",
        value: "15M",
    },
];

export const FAQS = [
    {
        question: "What services does SAT Holdings provide?",
        answer: "SAT Holdings operates in three main divisions: Engineering & Construction (building construction, road construction, soil protection, and machinery hiring), Manufacturing (Sri Lanka's first rice cooker manufacturing facility), and Import & Trading (electricals and aluminum profiles).",
    },
    {
        question: "Where is SAT Holdings located?",
        answer: "SAT Holdings is headquartered at 1028/B7 Midway Park, Liyanagoda, Pannipitiya, Sri Lanka, and serves clients island-wide.",
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
        answer: "Yes. SAT Electricals, part of the SAT Holdings Group, operates Sri Lanka's first rice cooker manufacturing line with local testing, local service support, and a 12-month manufacturer warranty.",
    },
    {
        question: "What is SAT Energy Solutions' flagship renewable project?",
        answer: "SAT Energy Solutions commissioned a 500 kW rooftop solar project in Vitharandeniya, Tangalle with 775 high-efficiency 620W panels, 4 inverters, and an estimated 800MWh annual yield connected to the national grid.",
    },
    {
        question: "How can I request a quote for services?",
        answer:         "You can request a quote by visiting our Contact page, calling us at +94 77 234 6283, or emailing us at holdingssat@gmail.com. Our team typically responds within 24-48 hours.",
    },
    {
        question: "What areas does SAT Holdings serve?",
        answer: "SAT Holdings serves clients throughout Sri Lanka, with projects completed in the Western, Southern, Central, and other provinces. Our engineering services are available island-wide.",
    },
    {
        question: "Does SAT Holdings offer product warranties?",
        answer:     "Yes, all SAT products including rice cookers and electricals come with manufacturer warranties. Specific warranty terms vary by product - contact us for details.",
    },
] as const;

export const CASE_STUDIES = [
    {
        slug: "tangalle-solar-plant",
        title: "500kW Tangalle Rooftop Solar Commissioning",
        client: "SAT Energy Solutions (Pvt) Ltd",
        location: "Vitharandeniya, Tangalle, Sri Lanka",
        year: 2024,
        category: "Renewable Energy",
        challenge: "Sri Lanka's grid transition requires dependable private-sector renewable projects with measurable output and compliant grid integration.",
        solution: "SAT Energy Solutions delivered a full rooftop solar installation with 775 high-efficiency 620W panels, 4 inverters, and a dedicated transformer station connected to the national grid.",
        results: [
            "500kW installed generation capacity",
            "775 solar panels and 4 inverters commissioned",
            "Estimated annual energy yield of 800MWh",
            "Grid-connected clean energy contribution",
        ],
        image: null,
    },
    {
        slug: "southern-highway-program",
        title: "Southern Highway Multi-Package Delivery",
        client: "Road Development Authority (RDA)",
        location: "Southern Province, Sri Lanka",
        year: 2019,
        category: "Infrastructure",
        challenge: "Large highway packages required coordinated labor, machinery, and quality turfing support across multiple expressway sections and timelines.",
        solution: "SAT Holdings executed several Southern Highway scopes including Beliatta, Wetiya, Andaragaswewa, and an interchange admin building package under a triple quality check approach.",
        results: [
            "13km, 10km, and 5km project stretches supported",
            "Interchange admin building package completed",
            "Continuous support for RDA-led infrastructure programs",
            "Proven repeat delivery capability for government clients",
        ],
        image: null,
    },
    {
        slug: "local-rice-cooker-manufacturing",
        title: "Launching Sri Lanka's First Rice Cooker Manufacturing Line",
        client: "Internal Development",
        location: "Sri Lanka",
        year: 2026,
        category: "Manufacturing",
        challenge: "Sri Lanka needed reliable, locally engineered household appliances that reduce import dependency while meeting local usage conditions.",
        solution: "SAT Electricals established a local manufacturing line focused on durability, energy efficiency, and safety with units optimized for Sri Lankan power standards.",
        results: [
            "Made in Sri Lanka rice cooker line launched",
            "1.8L, 2.2L, and 2.8L product variants available",
            "Dual thermal fuse safety with rapid-heat technology",
            "12-month manufacturer warranty and local service support",
        ],
        image: null,
    },
] as const;
