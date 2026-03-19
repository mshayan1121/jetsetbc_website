import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import TrustBar from "@/components/sections/TrustBar";
import ValueProposition from "@/components/sections/ValueProposition";
import WorkspaceGrid from "@/components/sections/WorkspaceGrid";
import WhyJetset from "@/components/sections/WhyJetset";
import LocationHighlight from "@/components/sections/LocationHighlight";
import FAQ from "@/components/sections/FAQ";
import CTASection from "@/components/sections/CTASection";
import TestimonialsCarousel from "@/components/sections/TestimonialsCarousel";

export const metadata: Metadata = {
  title: "Flexible Coworking Space in Dubai | Jetset Business Center",
  description:
    "Looking for a business center in Dubai? Jetset Business Center offers coworking spaces, private offices solutions designed for productivity and growth.",
  alternates: {
    canonical: "https://jetsetbc.com/",
  },
  openGraph: {
    title: "Flexible Coworking Space in Dubai | Jetset Business Center",
    description:
      "Looking for a coworking space in Dubai? Jetset Business Center offers premium office space in Business Bay with Burj Khalifa views. Flexible plans available.",
    url: "https://jetsetbc.com/",
    images: [
      {
        url: "https://jetsetbc.com/reception1.jpg",
        width: 1200,
        height: 630,
        alt: "Jetset Business Center Reception",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Flexible Coworking Space in Dubai | Jetset Business Center",
    description:
      "Looking for a coworking space in Dubai? Jetset Business Center offers premium office space in Business Bay with Burj Khalifa views. Flexible plans available.",
    images: ["https://jetsetbc.com/reception1.jpg"],
  },
};

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <PageHero
        title="Flexible Coworking Space in Dubai"
        image="/images/hero_section_images/Reception BK View.jpg"
        subtitle="Looking for a coworking space Dubai teams love? Jetset Business Center is a premium business center Dubai professionals trust, offering flexible plans and office space in Dubai at Prime Tower, Business Bay—with iconic Burj Khalifa views."
      />
      <TrustBar />
      <ValueProposition />
      <WorkspaceGrid />
      <WhyJetset />
      <TestimonialsCarousel />
      <LocationHighlight />
      <FAQ />
      <CTASection />
    </div>
  );
}
