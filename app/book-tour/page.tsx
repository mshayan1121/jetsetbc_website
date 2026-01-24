'use client';

import { useState, useEffect } from 'react';
import Script from 'next/script';
import { Calendar } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import JetsetForm from '@/components/sections/JetsetForm';

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
      <section className="relative bg-gradient-luxury min-h-[50vh] flex items-center justify-center pt-20 md:pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-10 sm:py-12 md:py-16">
          <Badge className="mb-4 sm:mb-6 bg-gold-500/20 text-gold-500 border border-gold-500/30 text-xs sm:text-sm">
            SAME-DAY TOURS AVAILABLE
          </Badge>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white mb-4 sm:mb-6">
            Step Inside Jetset
          </h1>
          <p className="font-body text-lg sm:text-xl md:text-2xl text-cream-50 max-w-3xl mx-auto px-4">
            Experience our premium workspace in person. Schedule your personalized tour today.
          </p>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section id="tour-booking" className="bg-white py-16 sm:py-20 md:py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
            
            {/* LEFT COLUMN - CALENDLY */}
            <div>
              <div className="mb-6 sm:mb-8 md:mb-10">
                <h2 className="font-display text-2xl sm:text-3xl md:text-4xl text-navy-900 mb-3 sm:mb-4">
                  Schedule Your Tour
                </h2>
                <p className="font-body text-base sm:text-lg text-navy-700 leading-relaxed">
                  Book a specific time slot directly using our calendar. 
                  Choose a time that works best for you.
                </p>
              </div>

              {/* CALENDLY WIDGET */}
              <div className="bg-cream-50 rounded-2xl p-4 sm:p-6 md:p-8 mb-6 sm:mb-8 border border-cream-200">
                <div className="flex items-center gap-3 mb-4 sm:mb-6">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gold-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Calendar className="w-5 h-5 sm:w-6 sm:h-6 text-navy-900" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg sm:text-xl text-navy-900">
                      Book Instantly
                    </h3>
                    <p className="text-xs sm:text-sm text-navy-700">
                      Choose your preferred time slot
                    </p>
                  </div>
                </div>

                {/* CALENDLY EMBED */}
                <div 
                  className="calendly-inline-widget rounded-lg overflow-hidden" 
                  data-url="https://calendly.com/YOUR-CALENDLY-USERNAME/office-tour?hide_event_type_details=1&hide_gdpr_banner=1"
                  style={{ minWidth: '100%', height: '600px' }}
                />
              </div>

              {/* WHAT TO EXPECT */}
              <div className="bg-white border border-cream-200 rounded-2xl p-6 sm:p-8">
                <h3 className="font-display text-xl sm:text-2xl text-navy-900 mb-4 sm:mb-6">
                  What to Expect
                </h3>
                
                <div className="space-y-4 sm:space-y-5">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="w-7 h-7 sm:w-8 sm:h-8 bg-gold-500/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-gold-600 font-bold text-sm sm:text-base">1</span>
                    </div>
                    <div>
                      <h4 className="font-body font-semibold text-navy-900 mb-1 text-sm sm:text-base">
                        Personalized Workspace Tour
                      </h4>
                      <p className="text-navy-700 text-xs sm:text-sm">
                        See our private offices, coworking spaces, and premium amenities
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="w-7 h-7 sm:w-8 sm:h-8 bg-gold-500/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-gold-600 font-bold text-sm sm:text-base">2</span>
                    </div>
                    <div>
                      <h4 className="font-body font-semibold text-navy-900 mb-1 text-sm sm:text-base">
                        Discuss Your Needs
                      </h4>
                      <p className="text-navy-700 text-xs sm:text-sm">
                        We'll understand your requirements and recommend the best solution
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="w-7 h-7 sm:w-8 sm:h-8 bg-gold-500/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-gold-600 font-bold text-sm sm:text-base">3</span>
                    </div>
                    <div>
                      <h4 className="font-body font-semibold text-navy-900 mb-1 text-sm sm:text-base">
                        Transparent Pricing
                      </h4>
                      <p className="text-navy-700 text-xs sm:text-sm">
                        Get clear pricing with no hidden fees or surprises
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="w-7 h-7 sm:w-8 sm:h-8 bg-gold-500/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-gold-600 font-bold text-sm sm:text-base">4</span>
                    </div>
                    <div>
                      <h4 className="font-body font-semibold text-navy-900 mb-1 text-sm sm:text-base">
                        Same-Day Move-In
                      </h4>
                      <p className="text-navy-700 text-xs sm:text-sm">
                        Subject to availability, you could start working the same day
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN - ZOHO FORM */}
            <div>
              <div className="mb-6 sm:mb-8 md:mb-10">
                <h2 className="font-display text-2xl sm:text-3xl md:text-4xl text-navy-900 mb-3 sm:mb-4">
                  Get in Touch
                </h2>
                <p className="font-body text-base sm:text-lg text-navy-700 leading-relaxed">
                  Fill out the form below and our team will get back to you within 24 hours 
                  to schedule your personalized tour.
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

