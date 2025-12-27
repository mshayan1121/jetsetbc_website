import Hero from "@/components/sections/Hero";
import StatsBar from "@/components/sections/StatsBar";
import ServicesOverview from "@/components/sections/ServicesOverview";
import WhyJetset from "@/components/sections/WhyJetset";
import Testimonials from "@/components/sections/Testimonials";
import CTASection from "@/components/sections/CTASection";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <StatsBar />
      <ServicesOverview />
      <WhyJetset />
      <Testimonials />
      <CTASection />
    </div>
  );
}
