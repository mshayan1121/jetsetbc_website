"use client";

import { useState } from "react";

type Testimonial = {
  quote: string;
  attribution: string;
};

function StarRow() {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#D4AF37" aria-hidden="true">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <div className="bg-white rounded-xl border border-cream-200 p-6 flex flex-col gap-4">
      <StarRow />
      <p className="font-accent text-sm text-navy-900/80 leading-relaxed">
        &ldquo;{t.quote}&rdquo;
      </p>
      <p className="font-accent text-xs font-semibold text-navy-900">&mdash; {t.attribution}</p>
    </div>
  );
}

export default function LpTestimonials({ testimonials }: { testimonials: Testimonial[] }) {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  return (
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

        {/* Mobile: single-card slider */}
        <div className="md:hidden" data-testid="testimonials-section">
          <TestimonialCard t={testimonials[current]} />
          <div className="flex items-center justify-center gap-4 mt-4">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-navy-900/20 flex items-center justify-center hover:border-gold-500 transition-colors"
              aria-label="Previous testimonial"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <span className="font-accent text-sm text-navy-900/40">
              {current + 1} / {testimonials.length}
            </span>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-navy-900/20 flex items-center justify-center hover:border-gold-500 transition-colors"
              aria-label="Next testimonial"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>

        {/* Desktop: 3-column grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-6" data-testid="testimonials-section">
          {testimonials.map((t) => (
            <TestimonialCard key={t.attribution} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
}
