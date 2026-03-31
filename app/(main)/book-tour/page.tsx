'use client';

import { useState, useEffect } from 'react';
import Script from 'next/script';
import { Calendar } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import JetsetForm from '@/components/sections/JetsetForm';
import PageHero from '@/components/PageHero';

export default function BookTourPage() {
  const [calendlyLoaded, setCalendlyLoaded] = useState(false);

  useEffect(() => {
    // Load Calendly CSS
    const link = document.createElement('link');
    link.href = 'https://assets.calendly.com/assets/external/widget.css';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    return () => {
      // Cleanup
      const existingLink = document.querySelector(`link[href="${link.href}"]`);
      if (existingLink) {
        existingLink.remove();
      }
    };
  }, []);

  return (
    <>
      {/* HERO SECTION */}
      <PageHero
        badge="Same-day tours available"
        title="Step Inside Jetset"
        subtitle="Experience our premium workspace in person. Schedule your personalized tour today."
      />

      {/* MAIN CONTENT */}
      <section id="tour-booking" className="bg-white py-16 sm:py-20 md:py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
            {/* RIGHT COLUMN - FORM (NOW FULL WIDTH ON MOBILE) */}
            <div className="lg:col-start-1 lg:col-end-3">
              <div className="mb-6 sm:mb-8 md:mb-10">
                <h2 className="font-display text-2xl sm:text-3xl md:text-4xl text-navy-900 mb-3 sm:mb-4">
                  Get in Touch
                </h2>
                <p className="font-body text-base sm:text-lg text-navy-700 leading-relaxed">
                  Fill out the form below and our team will get back to you within 24 hours
                  to schedule your personalized tour.
                </p>
              </div>

              {/* What to expect */}
              <div className="mb-8 sm:mb-10">
                <h3 className="font-display text-xl sm:text-2xl text-navy-900 mb-3">
                  What to Expect on Your Tour
                </h3>
                <p className="font-body text-base sm:text-lg text-navy-700 leading-relaxed mb-5">
                  One of our team members will guide you through Jetset Business Center on Level 20 of Prime Tower,
                  Business Bay. You&apos;ll walk through our private offices, dedicated coworking areas, and
                  fully equipped meeting rooms — all while taking in unobstructed views of the Dubai skyline
                  and Canal. Tours typically last 20–30 minutes and are tailored to your business needs.
                </p>
                <ul className="space-y-2 font-body text-base text-navy-700">
                  <li className="flex items-start gap-2">
                    <span className="mt-1 text-gold-600 shrink-0">&#8212;</span>
                    Private offices in a range of sizes, ready to move in
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 text-gold-600 shrink-0">&#8212;</span>
                    Dedicated desks and flexible coworking stations
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 text-gold-600 shrink-0">&#8212;</span>
                    Boardroom and meeting rooms with AV and high-speed internet
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 text-gold-600 shrink-0">&#8212;</span>
                    Premium lounge and café area for informal meetings
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 text-gold-600 shrink-0">&#8212;</span>
                    Panoramic views of Business Bay and the Dubai Canal from Level 20
                  </li>
                </ul>
                <p className="font-body text-base text-navy-700 mt-5">
                  Secure your spot and come see why leading professionals choose Jetset as their base in Dubai.
                </p>
              </div>

              {/* Jetset Official Form */}
              <div className="bg-white rounded-2xl border border-cream-200 shadow-sm w-full p-4 lg:p-10" style={{ height: 'auto', display: 'block' }}>
                <JetsetForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VISUAL ENGAGEMENT */}
      <section className="bg-cream-50 py-16 sm:py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-12 md:mb-14">
            <p className="text-gold-600 uppercase tracking-[0.25em] text-xs sm:text-sm font-accent mb-3">
              Virtual Preview
            </p>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-navy-900 mb-4">
              See It For Yourself
            </h2>
            <p className="font-body text-base sm:text-lg text-navy-700 max-w-3xl mx-auto">
              Explore our interiors, amenities, and meeting spaces before you visit. 
              A quick look at Jetset makes it easier to picture your next workspace.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
            {[
              {
                src: '/images/hero_section_images/Reception.jpg',
                alt: 'Reception area at Jetset Business Center',
              },
              {
                src: '/images/hero_section_images/Hallway.jpg',
                alt: 'Workspace hallway with premium finishes',
              },
              {
                src: '/images/hero_section_images/Majilis.jpg',
                alt: 'Collaborative lounge seating',
              },
              {
                src: '/images/hero_section_images/Majilis(2).jpg',
                alt: 'Meeting lounge with luxury seating',
              },
              {
                src: '/images/hero_section_images/Reception(1).jpg',
                alt: 'Front desk and concierge reception',
              },
              {
                src: '/images/hero_section_images/Reception(4).jpg',
                alt: 'Reception seating and common area',
              },
            ].map((item) => (
              <div
                key={item.src}
                className="group relative overflow-hidden rounded-2xl border border-cream-200 bg-white shadow-sm"
              >
                <div className="aspect-[4/3] w-full overflow-hidden">
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 sm:mt-12 flex flex-col items-center gap-4">
            <p className="text-sm sm:text-base text-navy-700">
              Ready to experience it in person? Choose a time that suits you.
            </p>
            <Button asChild size="lg" variant="primary">
              <a href="#tour-booking">Book Your Tour</a>
            </Button>
          </div>
        </div>
      </section>

      {/* CALENDLY SCRIPT */}
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
        onLoad={() => setCalendlyLoaded(true)}
      />
    </>
  );
}

