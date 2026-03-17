"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import Image from "next/image";

const carouselTestimonials = [
  {
    text: "The best workspace experience we've had in Dubai. Flexible, professional, and well-located.",
    author: "Consulting Firm, DIFC",
    rating: 5,
    avatar: null as string | null,
  },
  {
    text: "Jetset feels more like a business partner than a landlord.",
    author: "E-commerce Founder",
    rating: 5,
    avatar: null as string | null,
  },
  {
    text: "We moved in within 48 hours — no setup, no delays. Our clients were impressed from day one.",
    author: "Tech Startup Founder, Dubai",
    rating: 5,
    avatar: null as string | null,
  },
  {
    text: "Jetset helped me grow from a solo founder to a team of 5 without changing locations.",
    author: "Digital Marketing Agency",
    rating: 5,
    avatar: null as string | null,
  },
];

const ROTATE_INTERVAL_MS = 5000;
const HEADLINE_OPTIONS = [
  "Loved by Businesses Like Yours",
  "Real Stories. Real Results.",
  "The Jetset Experience",
];

const TestimonialsCarousel = () => {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [headlineIndex, setHeadlineIndex] = useState(0);

  const goTo = useCallback((i: number) => {
    setIndex((i + carouselTestimonials.length) % carouselTestimonials.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const t = setInterval(() => {
      setIndex((i) => (i + 1) % carouselTestimonials.length);
    }, ROTATE_INTERVAL_MS);
    return () => clearInterval(t);
  }, [isPaused]);

  useEffect(() => {
    const t = setInterval(() => {
      setHeadlineIndex((i) => (i + 1) % HEADLINE_OPTIONS.length);
    }, 4000);
    return () => clearInterval(t);
  }, []);

  const prev = (index - 1 + carouselTestimonials.length) % carouselTestimonials.length;
  const next = (index + 1) % carouselTestimonials.length;

  return (
    <section
      className="py-12 sm:py-16 bg-white border-y border-cream-100"
      aria-label="Testimonials"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-navy-900 mb-3 min-h-[1.2em]">
            <motion.span
              key={headlineIndex}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-block"
            >
              {HEADLINE_OPTIONS[headlineIndex]}
            </motion.span>
          </h2>
          <p className="text-navy-600 font-body text-lg max-w-xl mx-auto">
            Real stories from the professionals who call Jetset their home.
          </p>
        </div>

        <div className="relative flex items-stretch justify-center min-h-[280px] sm:min-h-[320px] overflow-hidden">
          {/* Left peek - hidden on small screens */}
          <div className="hidden md:flex md:w-[18%] lg:w-[22%] justify-end pr-1 shrink-0">
            <motion.div
              animate={{ opacity: 0.4, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="w-full max-w-[200px] rounded-2xl bg-white shadow-md border border-cream-100 overflow-hidden cursor-pointer flex-shrink-0"
              onClick={() => goTo(prev)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && (e.preventDefault(), goTo(prev))}
              aria-label="Previous testimonial"
            >
              <div className="p-4 min-h-[200px] flex flex-col justify-end">
                <div className="flex items-center gap-2 mb-2">
                  <div className="relative w-8 h-8 rounded-full overflow-hidden bg-gold-500/20 shrink-0 ring-1 ring-gold-500/30 flex items-center justify-center">
                    {carouselTestimonials[prev].avatar ? (
                      <Image src={carouselTestimonials[prev].avatar!} alt="" fill className="object-cover" sizes="32px" />
                    ) : (
                      <span className="text-navy-800 font-display font-bold text-sm">
                        {carouselTestimonials[prev].author.charAt(0)}
                      </span>
                    )}
                  </div>
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-2.5 h-2.5 fill-gold-500 text-gold-500" />
                    ))}
                  </div>
                </div>
                <p className="text-navy-700 text-xs line-clamp-2 italic">&ldquo;{carouselTestimonials[prev].text}&rdquo;</p>
                <p className="text-navy-600 text-[10px] mt-1 truncate">— {carouselTestimonials[prev].author}</p>
              </div>
            </motion.div>
          </div>

          {/* Center card - full size */}
          <div className="flex-1 flex justify-center px-2 md:px-4 max-w-xl z-10">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="w-full rounded-2xl bg-white p-6 sm:p-8 shadow-luxury-lg border border-cream-100 flex flex-col justify-center min-h-[240px] sm:min-h-[260px] relative"
            >
              <Quote className="absolute top-4 right-4 w-8 h-8 text-gold-500/20" />
              <div className="flex gap-0.5 mb-4" aria-hidden="true">
                {[...Array(carouselTestimonials[index].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 sm:w-6 sm:h-6 fill-gold-500 text-gold-500" />
                ))}
              </div>
              <p className="font-body text-base sm:text-lg text-navy-800 italic mb-6">
                &ldquo;{carouselTestimonials[index].text}&rdquo;
              </p>
              <div className="flex items-center gap-3 mt-auto">
                <div className="relative w-12 h-12 rounded-full overflow-hidden bg-gold-500/20 shrink-0 ring-2 ring-gold-500/30 flex items-center justify-center">
                  {carouselTestimonials[index].avatar ? (
                    <Image
                      src={carouselTestimonials[index].avatar}
                      alt=""
                      fill
                      className="object-cover"
                      sizes="48px"
                    />
                  ) : (
                    <span className="text-navy-800 font-display font-bold text-lg">
                      {carouselTestimonials[index].author.charAt(0)}
                    </span>
                  )}
                </div>
                <p className="text-sm font-medium text-navy-900">{carouselTestimonials[index].author}</p>
              </div>
            </motion.div>
          </div>

          {/* Right peek */}
          <div className="hidden md:flex md:w-[18%] lg:w-[22%] justify-start pl-1 shrink-0">
            <motion.div
              animate={{ opacity: 0.4, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="w-full max-w-[200px] rounded-2xl bg-white shadow-md border border-cream-100 overflow-hidden cursor-pointer flex-shrink-0"
              onClick={() => goTo(next)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && (e.preventDefault(), goTo(next))}
              aria-label="Next testimonial"
            >
              <div className="p-4 min-h-[200px] flex flex-col justify-end">
                <div className="flex items-center gap-2 mb-2">
                  <div className="relative w-8 h-8 rounded-full overflow-hidden bg-gold-500/20 shrink-0 ring-1 ring-gold-500/30 flex items-center justify-center">
                    {carouselTestimonials[next].avatar ? (
                      <Image src={carouselTestimonials[next].avatar!} alt="" fill className="object-cover" sizes="32px" />
                    ) : (
                      <span className="text-navy-800 font-display font-bold text-sm">
                        {carouselTestimonials[next].author.charAt(0)}
                      </span>
                    )}
                  </div>
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-2.5 h-2.5 fill-gold-500 text-gold-500" />
                    ))}
                  </div>
                </div>
                <p className="text-navy-700 text-xs line-clamp-2 italic">&ldquo;{carouselTestimonials[next].text}&rdquo;</p>
                <p className="text-navy-600 text-[10px] mt-1 truncate">— {carouselTestimonials[next].author}</p>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="flex justify-center gap-2 mt-8 pt-4">
          {carouselTestimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === index ? "w-8 bg-gold-500" : "w-2 bg-gold-500/30 hover:bg-gold-500/50"
              }`}
              aria-label={`View testimonial ${i + 1}`}
              aria-current={i === index ? "true" : undefined}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;
