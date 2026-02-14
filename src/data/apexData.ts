// ========================================
// APEX AUTO DETAILING - CONTENT DATA
// ========================================

export interface Service {
    id: string;
    title: string;
    description: string;
    icon: string;
    price?: string;
}

export interface PerformanceUpgrade {
    id: string;
    title: string;
    specs: string[];
}

export interface Testimonial {
    id: string;
    name: string;
    car: string;
    quote: string;
    rating: number;
}

// Hero Section
export const heroData = {
    title: "APEX",
    subtitle: "Auto Detailing & Custom Builds",
    tagline: "Where Precision Meets Performance",
    cta: {
        primary: "BOOK SERVICE",
        secondary: "EXPLORE BUILDS",
    },
};

// Services
export const servicesData: Service[] = [
    {
        id: "ppf",
        title: "Paint Protection Film",
        description:
            "Military-grade self-healing film that shields your paint from rock chips, scratches, and environmental damage.",
        icon: "🛡️",
        price: "From ₹45,000",
    },
    {
        id: "ceramic",
        title: "Ceramic Coating",
        description:
            "9H hardness nano-ceramic coating providing hydrophobic protection and deep gloss for years.",
        icon: "✨",
        price: "From ₹25,000",
    },
    {
        id: "interior",
        title: "Interior Detailing",
        description:
            "Complete interior restoration including leather treatment, steam cleaning, and odor elimination.",
        icon: "🎯",
        price: "From ₹8,000",
    },
    {
        id: "bodykit",
        title: "Custom Body Kits",
        description:
            "Premium aftermarket body kits from leading brands, professionally installed with precision fitment.",
        icon: "🔧",
        price: "Custom Quote",
    },
    {
        id: "wheels",
        title: "Wheel & Brake Upgrades",
        description:
            "Forged wheels, big brake kits, and performance brake upgrades for enhanced stopping power.",
        icon: "⚙️",
        price: "From ₹75,000",
    },
    {
        id: "wrap",
        title: "Vinyl Wrapping",
        description:
            "Full color change wraps, accent packages, and custom graphics using premium 3M and Avery films.",
        icon: "🎨",
        price: "From ₹85,000",
    },
];

// Performance Upgrades
export const performanceData: PerformanceUpgrade[] = [
    {
        id: "ecu",
        title: "ECU Tuning",
        specs: ["Stage 1-3 Tunes", "+15-40% Power", "Custom Dyno Mapping"],
    },
    {
        id: "exhaust",
        title: "Exhaust Systems",
        specs: ["Catback Systems", "Downpipes", "Headers & Manifolds"],
    },
    {
        id: "suspension",
        title: "Suspension Kits",
        specs: ["Coilovers", "Air Suspension", "Lowering Springs"],
    },
    {
        id: "forced",
        title: "Forced Induction",
        specs: ["Turbo Kits", "Superchargers", "Intercooler Upgrades"],
    },
];

// HUD Scroll Phases Content
export const hudPhases = {
    hero: {
        range: [0, 0.33],
        content: {
            title: "APEX",
            subtitle: "AUTO DETAILING & CUSTOM BUILDS",
            description: "WHERE PRECISION MEETS PERFORMANCE",
        },
    },
    services: {
        range: [0.33, 0.66],
        content: {
            title: "SERVICES",
            items: [
                "PAINT PROTECTION FILM",
                "CERAMIC COATING",
                "INTERIOR DETAILING",
                "CUSTOM BODY KITS",
                "WHEEL & BRAKE UPGRADES",
            ],
        },
    },
    performance: {
        range: [0.66, 1],
        content: {
            title: "PERFORMANCE",
            items: [
                { label: "ECU TUNING", value: "+40% POWER" },
                { label: "EXHAUST", value: "FULL SYSTEMS" },
                { label: "SUSPENSION", value: "TRACK READY" },
                { label: "FORCED INDUCTION", value: "TURBO/SC" },
            ],
        },
    },
};

// Testimonials
export const testimonialsData: Testimonial[] = [
    {
        id: "1",
        name: "Rahul Sharma",
        car: "BMW M4 Competition",
        quote:
            "The ceramic coating on my M4 is absolutely flawless. The attention to detail at APEX is unmatched.",
        rating: 5,
    },
    {
        id: "2",
        name: "Priya Patel",
        car: "Mercedes AMG GT",
        quote:
            "From PPF to the Stage 2 tune, APEX transformed my GT into a true track weapon while keeping it street-legal.",
        rating: 5,
    },
    {
        id: "3",
        name: "Vikram Singh",
        car: "Porsche 911 GT3",
        quote:
            "These guys understand performance cars like no one else. My GT3 has never looked or performed better.",
        rating: 5,
    },
];

// Footer Links
export const footerLinks = {
    services: [
        { label: "Detailing", href: "#services" },
        { label: "Protection Films", href: "#services" },
        { label: "Ceramic Coating", href: "#services" },
        { label: "Custom Builds", href: "#builds" },
    ],
    performance: [
        { label: "ECU Tuning", href: "#performance" },
        { label: "Exhaust Systems", href: "#performance" },
        { label: "Suspension", href: "#performance" },
        { label: "Forced Induction", href: "#performance" },
    ],
    company: [
        { label: "About Us", href: "#about" },
        { label: "Gallery", href: "#gallery" },
        { label: "Contact", href: "#contact" },
        { label: "Careers", href: "#careers" },
    ],
};

// Contact Info
export const contactData = {
    phone: "+91 98765 43210",
    email: "studio@apexdetailing.in",
    address: "Industrial Area, Phase 2, Bangalore - 560058",
    hours: "Mon - Sat: 9:00 AM - 7:00 PM",
};

// Stats
export const statsData = [
    { value: "500+", label: "Cars Detailed" },
    { value: "150+", label: "Custom Builds" },
    { value: "50+", label: "Track Cars" },
    { value: "99%", label: "Client Satisfaction" },
];
