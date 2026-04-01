import type { Metadata } from "next";
import LpTestimonials from "@/components/lp/LpTestimonials";
import LpFooterSection from "@/components/lp/LpFooterSection";
import { Shield, Clock, Wifi, Users, Coffee, Zap } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import JetsetForm from "@/components/sections/JetsetForm";

export const metadata: Metadata = {
  title: "Office Space in Dubai — Business Bay | Jetset Business Center",
  description:
    "Serviced private offices in Business Bay with iconic city views. Flexible terms, fully furnished, from AED 50,000/year.",
  robots: { index: false, follow: false },
  alternates: { canonical: "https://jetsetbc.com/office-space" },
};

const features: { title: string; description: string; Icon: LucideIcon }[] = [
  {
    title: "Fully Furnished",
    description:
      "Move-in ready offices fitted with high-end ergonomic furniture and premium finishes.",
    Icon: Shield,
  },
  {
    title: "24/7 Secure Access",
    description:
      "Round-the-clock key-fob entry to your private office with CCTV and building security.",
    Icon: Clock,
  },
  {
    title: "Enterprise Internet",
    description:
      "Fibre optic connection with dedicated bandwidth and redundant failover for zero downtime.",
    Icon: Wifi,
  },
  {
    title: "Concierge & Reception",
    description:
      "Front-desk team handles incoming mail, visitor registration, and call forwarding.",
    Icon: Users,
  },
  {
    title: "Unlimited Refreshments",
    description:
      "Complimentary premium coffee, fresh teas, and filtered water throughout the day.",
    Icon: Coffee,
  },
  {
    title: "Housekeeping Included",
    description:
      "Daily professional cleaning ensures your office is always presentation-ready.",
    Icon: Zap,
  },
];

const whyJetset: { heading: string; body: string }[] = [
  {
    heading: "Level 20, Prime Tower",
    body: "Floor-to-ceiling windows with Burj Khalifa and Canal views that make every client meeting memorable.",
  },
  {
    heading: "Business Bay Address",
    body: "Dubai's most prestigious business district, moments from the financial centre and DIFC.",
  },
  {
    heading: "Flexible 3-Month Lease",
    body: "Start with a minimum three-month term and scale up as your team grows — no long lock-ins.",
  },
];

const whoIsThisFor =
  "Growing businesses, SMEs, and international companies seeking a serviced private office in Dubai's Business Bay that comes with full amenities, a flexible lease, and an address that signals prestige. Ideal for anyone who wants to move in on day one with zero setup hassle.";

const benefits = [
  "Move-in ready, fully furnished offices in multiple sizes",
  "24/7 secure access with dedicated key fob",
  "High-speed fibre internet connection included",
  "Professional reception & concierge support",
  "Unlimited artisan coffee, tea & daily housekeeping",
  "Flexible lease terms from 3 months",
];

const testimonials = [
  {
    quote:
      "The best workspace experience we've had in Dubai. Flexible, professional, and well-located.",
    attribution: "Consulting Firm, DIFC",
  },
  {
    quote: "Jetset feels more like a business partner than a coworking space.",
    attribution: "E-Commerce Founder",
  },
  {
    quote: "Jetset helped me grow from a solo founder to a team of 5.",
    attribution: "Digital Marketing Agency",
  },
];

export default function OfficeSpacePage() {
  return (
    <article>
      {/* HERO */}
      <section className="bg-navy-900 text-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="font-accent text-xs uppercase tracking-[0.2em] text-gold-400 mb-4">
            Business Bay, Dubai — Serviced Offices
          </p>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-white max-w-3xl">
            Office Space in Dubai — Business Bay
          </h1>
          <p className="mt-4 font-accent text-lg sm:text-xl text-cream-50/80 max-w-2xl">
            Serviced private offices with iconic city views from AED 50,000/year
          </p>
          {/* Hero CTA */}
          <div className="mt-8 flex flex-col items-start gap-3">
            <a
              href="#enquiry-form"
              className="inline-block px-6 py-3 font-accent font-semibold text-sm"
              style={{ backgroundColor: "#D4AF37", color: "#0A1828", borderRadius: "4px" }}
            >
              Book a Free Consultation
            </a>
            <div className="flex items-center gap-2">
              <svg width="16" height="16" viewBox="0 0 48 48" aria-hidden="true">
                <path fill="#EA4335" d="M24 9.5c3.5 0 6.6 1.2 9 3.2l6.7-6.7C35.6 2.2 30.2 0 24 0 14.6 0 6.6 5.4 2.6 13.3l7.8 6C12.3 13 17.7 9.5 24 9.5z" />
                <path fill="#4285F4" d="M46.5 24.5c0-1.6-.1-3.1-.4-4.5H24v8.5h12.7c-.6 3-2.3 5.5-4.8 7.2l7.5 5.8c4.4-4.1 7.1-10.1 7.1-17z" />
                <path fill="#FBBC05" d="M10.4 28.7A14.5 14.5 0 0 1 9.5 24c0-1.6.3-3.2.9-4.7l-7.8-6A23.9 23.9 0 0 0 0 24c0 3.9.9 7.5 2.6 10.7l7.8-6z" />
                <path fill="#34A853" d="M24 48c6.2 0 11.4-2 15.2-5.5l-7.5-5.8c-2.1 1.4-4.7 2.3-7.7 2.3-6.3 0-11.7-4.2-13.6-9.9l-7.8 6C6.6 42.6 14.6 48 24 48z" />
              </svg>
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} width="12" height="12" viewBox="0 0 24 24" fill="#D4AF37" aria-hidden="true">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
              <span className="font-accent text-xs text-cream-50/70">Trusted Since 2003</span>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES GRID */}
      <section className="bg-cream-50 py-12 sm:py-16" data-testid="features-section">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => (
              <div
                key={feature.title}
                data-testid="feature-card"
                className="bg-white rounded-xl border border-cream-200 p-6 flex flex-col gap-3"
              >
                <div className="w-10 h-10 rounded-lg bg-navy-900 flex items-center justify-center shrink-0">
                  <feature.Icon className="w-5 h-5 text-gold-400" />
                </div>
                <h3 className="font-display text-base font-semibold text-navy-900 leading-snug">
                  {feature.title}
                </h3>
                <p className="font-accent text-sm text-navy-900/60 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TWO-COLUMN BODY */}
      <section className="bg-white py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* LEFT: Why Jetset + Who is this for + Benefits + Trust strip */}
            <div>
              {/* WHY JETSET */}
              <div className="mb-10" data-testid="why-jetset">
                <h2 className="font-display text-2xl font-semibold text-navy-900 mb-6">
                  Why Jetset Business Center?
                </h2>
                <ul className="space-y-5">
                  {whyJetset.map((point) => (
                    <li key={point.heading} className="flex flex-col gap-1">
                      <span className="font-display text-base font-semibold text-navy-900">
                        {point.heading}
                      </span>
                      <span className="font-accent text-sm text-navy-900/60 leading-relaxed">
                        {point.body}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* WHO IS THIS FOR */}
              <div className="mb-10 p-5 bg-cream-50 rounded-xl border border-cream-200">
                <p className="font-accent text-xs uppercase tracking-widest text-gold-600 mb-2">
                  Who Is This For
                </p>
                <p
                  data-testid="who-is-this-for"
                  className="font-accent text-sm text-navy-900/70 leading-relaxed"
                >
                  {whoIsThisFor}
                </p>
              </div>

              {/* BENEFITS */}
              <ul className="space-y-4">
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3">
                    <span className="text-gold-500 font-bold text-xl leading-snug select-none">
                      —
                    </span>
                    <span className="font-accent text-navy-900 text-base leading-relaxed">
                      {benefit}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="mt-10 pt-8 border-t border-cream-100">
                <p className="font-accent text-sm text-navy-900/60 leading-relaxed">
                  Level 20, Prime Tower, Business Bay, Dubai
                </p>
              </div>
            </div>

            {/* RIGHT: Sticky form card */}
            <div className="lg:sticky lg:top-8">
              <div
                id="enquiry-form"
                className="bg-white rounded-2xl border border-cream-200 shadow-navy-md w-full"
                style={{ borderTop: "3px solid #D4AF37" }}
              >
                <div className="p-6 lg:p-8">
                  <h3 className="font-display text-2xl font-semibold text-navy-900 mb-2">
                    Get a Free Consultation
                  </h3>
                  <p className="font-accent text-sm text-navy-900/60 mb-6">
                    Our team will respond within a few hours.
                  </p>
                  <JetsetForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <LpTestimonials testimonials={testimonials} />
      <LpFooterSection />
    </article>
  );
}
