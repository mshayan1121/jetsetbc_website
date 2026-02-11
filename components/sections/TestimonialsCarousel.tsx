"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote } from "lucide-react";

const carouselTestimonials = [
  {
    text: "The best workspace experience we've had in Dubai. Flexible, professional, and well-located.",
    author: "Consulting Firm, DIFC",
    rating: 5,
  },
  {
    text: "Jetset feels more like a business partner than a landlord.",
    author: "E-commerce Founder",
    rating: 5,
  },
  {
    text: "We moved in within 48 hours — no setup, no delays. Our clients were impressed from day one.",
    author: "Tech Startup Founder, Dubai",
    rating: 5,
  },
  {
    text: "Jetset helped me grow from a solo founder to a team of 5 without changing locations.",
    author: "Digital Marketing Agency",
    rating: 5,
  },
];

const ROTATE_INTERVAL_MS = 4500;

const TestimonialsCarousel = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setIndex((i) => (i + 1) % carouselTestimonials.length);
    }, ROTATE_INTERVAL_MS);
    return () => clearInterval(t);
  }, []);

  const item = carouselTestimonials[index];

  return (
    <section className="py-12 sm:py-16 bg-cream-50 border-y border-cream-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-2xl bg-white p-8 sm:p-10 shadow-luxury-lg border border-cream-100 min-h-[180px] flex flex-col justify-center">
          <Quote className="absolute top-6 right-6 w-10 h-10 text-gold-500/20" />
          <div className="flex gap-1 mb-4">
            {[...Array(item.rating)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-gold-500 text-gold-500" />
            ))}
          </div>
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
            >
              <p className="font-body text-lg sm:text-xl text-navy-800 italic mb-4">
                &ldquo;{item.text}&rdquo;
              </p>
              <p className="text-sm text-navy-600">— {item.author}</p>
            </motion.div>
          </AnimatePresence>
          <div className="flex gap-2 mt-6">
            {carouselTestimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`h-2 rounded-full transition-all ${i === index ? "w-8 bg-gold-500" : "w-2 bg-gold-500/30 hover:bg-gold-500/50"}`}
                aria-label={`View testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;
