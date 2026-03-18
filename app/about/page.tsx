import type { Metadata } from "next";
import AboutContent from "@/components/sections/AboutContent";

export const metadata: Metadata = {
    title: "About - Jetset Business Center | Your Ideal Workspace in Dubai",
    description: "Discover Jetset Business Center – your ideal workspace in Dubai. Located in Prime Tower, Business Bay. A premium business center built for ambition.",
    alternates: {
        canonical: 'https://jetsetbc.com/about',
    },
    openGraph: {
        title: "About - Jetset Business Center | Your Ideal Workspace in Dubai",
        description: "Discover Jetset Business Center – your ideal workspace in Dubai. Located in Prime Tower, Business Bay. A premium business center built for ambition.",
        url: 'https://jetsetbc.com/about',
        images: ['/images/hero-bg.png'],
    },
    twitter: {
        card: "summary_large_image",
        title: "About - Jetset Business Center | Your Ideal Workspace in Dubai",
        description: "Discover Jetset Business Center – your ideal workspace in Dubai. Located in Prime Tower, Business Bay. A premium business center built for ambition.",
        images: ['/images/hero-bg.png'],
    },
};

export default function AboutPage() {
    return <AboutContent />;
}
