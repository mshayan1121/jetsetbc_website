import fs from "fs";
import path from "path";
import Hero from "@/components/sections/Hero";
import SocialProof from "@/components/sections/SocialProof";
import WorkspaceGrid from "@/components/sections/WorkspaceGrid";
import WhyJetset from "@/components/sections/WhyJetset";
import LocationHighlight from "@/components/sections/LocationHighlight";
import FAQ from "@/components/sections/FAQ";
import CTASection from "@/components/sections/CTASection";

export default function Home() {
  const imagesDirectory = path.join(
    process.cwd(),
    "public",
    "images",
    "hero_section_images"
  );
  const heroImages = fs
    .readdirSync(imagesDirectory)
    .filter((file) => /\.(jpe?g|png|webp|gif)$/i.test(file))
    .sort((a, b) => a.localeCompare(b))
    .map((file) => `/images/hero_section_images/${file}`);

  return (
    <div className="flex flex-col w-full">
      <Hero images={heroImages} />
      <SocialProof />
      <WorkspaceGrid />
      <WhyJetset />
      <LocationHighlight />
      <FAQ />
      <CTASection />
    </div>
  );
}
