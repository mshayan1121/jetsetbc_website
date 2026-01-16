import Hero from "@/components/sections/Hero";
import SocialProof from "@/components/sections/SocialProof";
import WorkspaceGrid from "@/components/sections/WorkspaceGrid";
import WhyJetset from "@/components/sections/WhyJetset";
import LocationHighlight from "@/components/sections/LocationHighlight";
import FAQ from "@/components/sections/FAQ";
import CTASection from "@/components/sections/CTASection";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <SocialProof />
      <WorkspaceGrid />
      <WhyJetset />
      <LocationHighlight />
      <FAQ />
      <CTASection />
    </div>
  );
}
