import type { Metadata } from "next";
import AboutContent from "@/components/sections/AboutContent";

export const metadata: Metadata = {
    title: "About Us - Family-Run Business Center in Dubai | Jetset",
    description: "Award-winning business center in Dubai since 2003. Family-run excellence with 20+ years experience. Best Business Center 2024.",
};

export default function AboutPage() {
    return <AboutContent />;
}
