import type { Metadata } from "next";
import { Monitor, Wifi, Video, Mic, FileText, Coffee } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import JetsetForm from "@/components/sections/JetsetForm";

export const metadata: Metadata = {
  title: "Meeting Rooms for Hire in Business Bay Dubai | Jetset Business Center",
  description:
    "Boardrooms for 6–10 guests with 4K AV, Zoom/Teams conferencing & catering in Business Bay, Dubai.",
  robots: { index: false, follow: false },
  alternates: { canonical: "https://jetsetbc.com/lp-meeting-room" },
};

const features: { title: string; description: string; Icon: LucideIcon }[] = [
  {
    title: "4K Displays",
    description:
      "High-resolution LED screens for crystal-clear presentations, video calls, and shared content.",
    Icon: Monitor,
  },
  {
    title: "Dedicated Connectivity",
    description:
      "High-bandwidth WiFi and wired ethernet ports at every seat for reliable, fast connections.",
    Icon: Wifi,
  },
  {
    title: "Video Conferencing",
    description:
      "Integrated Logitech systems fully compatible with Zoom, Microsoft Teams, and Google Meet.",
    Icon: Video,
  },
  {
    title: "Premium Audio",
    description:
      "Ceiling-mounted microphones and speakers deliver uniform sound coverage across the room.",
    Icon: Mic,
  },
  {
    title: "Collaboration Tools",
    description:
      "Digital whiteboards and professional stationery for productive brainstorming sessions.",
    Icon: FileText,
  },
  {
    title: "Catering Available",
    description:
      "Gourmet food and beverage packages available upon request for any length of booking.",
    Icon: Coffee,
  },
];

const whyJetset: { heading: string; body: string }[] = [
  {
    heading: "Level 20 Views",
    body: "Impress every client and guest with panoramic Burj Khalifa views from a boardroom on Level 20.",
  },
  {
    heading: "Three Room Configurations",
    body: "Choose Standard (6), Conference (8), or Majilis VIP (9–10 guests) to match your event size.",
  },
  {
    heading: "Business Bay Convenience",
    body: "Located in Prime Tower, minutes from the metro, DIFC, and Dubai's top hotels.",
  },
];

const whoIsThisFor =
  "Businesses hosting client presentations, investor meetings, team off-sites, or executive workshops who need a professional boardroom environment with world-class AV technology — without the cost or commitment of a permanent office lease.";

const benefits = [
  "Standard (6 pax), Conference (8 pax) & Majilis VIP (10 pax) room options",
  "4K smart displays & collaborative digital whiteboards",
  "Built-in Zoom, Teams & Google Meet video conferencing",
  "Ceiling microphones & premium Logitech audio system",
  "High-speed WiFi + dedicated ethernet port at every seat",
  "Catering available — coffee, refreshments & full setups",
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

export default function MeetingRoomPage() {
  return (
    <article>
      {/* HERO */}
      <section className="bg-navy-900 text-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="font-accent text-xs uppercase tracking-[0.2em] text-gold-400 mb-4">
            Business Bay, Dubai — Meeting &amp; Conference Rooms
          </p>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-white max-w-3xl">
            Meeting Rooms for Hire in Business Bay, Dubai
          </h1>
          <p className="mt-4 font-accent text-lg sm:text-xl text-cream-50/80 max-w-2xl">
            Boardrooms for 6–10 guests with 4K AV, video conferencing &amp; catering
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
      {/* TESTIMONIALS */}
      <section className="py-12 sm:py-16" style={{ backgroundColor: "#FAF9F6" }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="font-display text-2xl sm:text-3xl font-semibold text-navy-900">
              Loved by Businesses Like Yours
            </h2>
            <p className="mt-2 font-accent text-sm text-navy-900/60">
              Real stories from the professionals who call Jetset their home.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6" data-testid="testimonials-section">
            {testimonials.map((t) => (
              <div
                key={t.attribution}
                className="bg-white rounded-xl border border-cream-200 p-6 flex flex-col gap-4"
              >
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#D4AF37">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
                <p className="font-accent text-sm text-navy-900/80 leading-relaxed">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <p className="font-accent text-xs font-semibold text-navy-900">
                  &mdash; {t.attribution}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AWARDS */}
      <section
        className="py-12 sm:py-16"
        style={{ backgroundColor: "#0A1828" }}
        data-testid="awards-section"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-4">
            <svg
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#D4AF37"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M6 9H4a2 2 0 0 1-2-2V5h4" />
              <path d="M18 9h2a2 2 0 0 0 2-2V5h-4" />
              <path d="M12 17v4" />
              <path d="M8 21h8" />
              <path d="M6 5h12v4a6 6 0 0 1-12 0V5z" />
            </svg>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-white mb-2">
            Award-Winning Workspace in Dubai
          </h2>
          <p className="font-accent text-sm text-cream-50/70 mb-8">
            Providing world-class business environments since 2003.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6 mb-6">
            {[{ name: "Best Business Center 2024" }, { name: "Best Newcomer 2023" }].map(
              (award) => (
                <div
                  key={award.name}
                  className="border border-gold-500/40 rounded-xl px-8 py-5 flex flex-col items-center gap-1"
                >
                  <span
                    className="font-display text-base font-semibold"
                    style={{ color: "#D4AF37" }}
                  >
                    {award.name}
                  </span>
                </div>
              )
            )}
          </div>
          <p className="font-accent text-xs text-cream-50/50">Recognized by Letswork</p>
          <div className="mt-8">
            <a
              href="#enquiry-form"
              className="inline-block px-6 py-3 font-accent font-semibold text-sm"
              style={{ backgroundColor: "#D4AF37", color: "#0A1828", borderRadius: "4px" }}
            >
              Book a Free Consultation
            </a>
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="py-16 sm:py-20" style={{ backgroundColor: "#0A1828" }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-white mb-8">
            Ready to Get Started?
          </h2>
          <a
            href="#enquiry-form"
            className="inline-block px-8 py-4 font-accent font-semibold text-base"
            style={{ backgroundColor: "#D4AF37", color: "#0A1828", borderRadius: "4px" }}
          >
            Book a Free Consultation
          </a>
        </div>
      </section>
    </article>
  );
}
