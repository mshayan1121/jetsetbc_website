import type { Metadata } from "next";
import AboutContent from "@/components/sections/AboutContent";

export const metadata: Metadata = {
    title: "About - Jetset Business Center | Your Ideal Workspace in Dubai",
    description: "Discover Jetset Business Center – your ideal workspace in Dubai. Located in Prime Tower, Business Bay. A premium business center built for ambition.",
};

export default function AboutPage() {
    return <AboutContent />;
}
