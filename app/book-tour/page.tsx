'use client';

import { useState, useEffect } from 'react';
import Script from 'next/script';
import { Calendar } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
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
            Same-Day Tours Available
          </Badge>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white mb-4 sm:mb-6">
            Book Your Tour
          </h1>
          <p className="font-body text-lg sm:text-xl md:text-2xl text-cream-50 max-w-3xl mx-auto px-4">
            Experience our premium workspace in person. Schedule your personalized tour today.
          </p>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="bg-white py-16 sm:py-20 md:py-24 lg:py-32">
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

      {/* CALENDLY SCRIPT */}
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
        onLoad={() => setCalendlyLoaded(true)}
      />
    </>
  );
}

