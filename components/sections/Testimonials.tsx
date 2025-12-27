"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import { cn } from "../../lib/utils";

export interface Testimonial {
    id: number;
    name: string;
    text: string;
    rating: number;
    source: string;
}

export const defaultTestimonials: Testimonial[] = [
    {
        id: 1,
        name: "MANELYN",
        text: "A modern, well-equipped business center in Business Bay with a stunning view of the Burj Khalifa. Fast Wi-Fi, professional staff... Highly recommended for anyone looking for a premium, inspiring workspace.",
        rating: 5,
        source: "Google Reviews",
    },
    {
        id: 2,
        name: "MOHAMED",
        text: "Hannah, Jessie and Pauline were really nice and helpful. The center is calm... The facilities are well-maintained and the atmosphere is conducive to productivity.",
        rating: 5,
        source: "Google Reviews",
    },
    {
        id: 3,
        name: "SUNAINA",
        text: "Having worked from various business centers... Jetset really stood out. Their office spaces are exceptionally well-organized... the access to a beautiful lounge area adds a touch of professionalism. I can't forget to mention the incredibly friendly reception staff.",
        rating: 5,
        source: "Google Reviews",
    },
];

const GoogleIcon = () => (
    <svg viewBox="0 0 24 24" className="w-4 h-4 mr-1.5" fill="currentColor">
        <path
            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            fill="#4285F4"
        />
        <path
            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            fill="#34A853"
        />
        <path
            d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
            fill="#FBBC05"
        />
        <path
            d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
            fill="#EA4335"
        />
    </svg>
);

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => {
    return (
        <div className="h-full px-2 sm:px-4 flex-shrink-0 w-full md:w-1/3">
            <motion.div
                whileHover={{ y: -10 }}
                className="h-full flex flex-col items-start p-6 sm:p-8 rounded-2xl bg-cream-50 border border-cream-100 shadow-navy-sm transition-all duration-300 relative"
            >
                <div className="relative mb-6">
                    <Quote className="w-10 h-10 text-gold-500 opacity-10 absolute -top-2 -left-2 transform -scale-x-100" />
                    <Quote className="w-8 h-8 text-gold-500 relative z-10" />
                </div>

                <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-gold-500 text-gold-500" />
                    ))}
                </div>

                <p className="text-navy-700 font-body text-base leading-relaxed mb-8 flex-grow">
                    "{testimonial.text}"
                </p>

                <div className="mt-auto pt-6 border-t border-cream-200 w-full flex flex-col gap-3">
                    <span className="font-body font-bold text-navy-900 tracking-wide uppercase">
                        {testimonial.name}
                    </span>
                    <div className="flex items-center">
                        <div className="bg-white px-3 py-1.5 rounded-full border border-cream-100 flex items-center shadow-sm">
                            <GoogleIcon />
                            <span className="text-[10px] font-bold text-navy-700 uppercase tracking-tighter">
                                {testimonial.source}
                            </span>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default function Testimonials({ testimonialsData = defaultTestimonials }: { testimonialsData?: Testimonial[] }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const shouldReduceMotion = useReducedMotion();

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    const nextSlide = useCallback(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
    }, [testimonialsData.length]);

    const prevSlide = useCallback(() => {
        setCurrentIndex((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
    }, [testimonialsData.length]);

    useEffect(() => {
        if (isPaused || shouldReduceMotion) return;
        const interval = setInterval(nextSlide, 5000);
        return () => clearInterval(interval);
    }, [isPaused, nextSlide, shouldReduceMotion]);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "ArrowLeft") prevSlide();
            if (e.key === "ArrowRight") nextSlide();
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [nextSlide, prevSlide]);

    return (
        <section className="section-padding bg-white overflow-hidden relative">
            <div className="container-custom relative z-10">
                <div className="text-center mb-16 space-y-4">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-display text-navy-900"
                    >
                        What Our Clients Say
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-navy-700 font-body max-w-2xl mx-auto"
                    >
                        Real experiences from our community
                    </motion.p>
                </div>

                <div
                    className="relative"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                >
                    {/* Navigation Arrows */}
                    <div className="absolute left-2 sm:left-4 md:-left-12 top-1/2 -translate-y-1/2 z-20">
                        <button
                            onClick={prevSlide}
                            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-gold-500/30 flex items-center justify-center bg-white text-gold-500 hover:bg-gold-500 hover:text-white transition-all duration-300 shadow-luxury-sm focus:outline-none"
                            aria-label="Previous testimonial"
                        >
                            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
                        </button>
                    </div>
                    <div className="absolute right-2 sm:right-4 md:-right-12 top-1/2 -translate-y-1/2 z-20">
                        <button
                            onClick={nextSlide}
                            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-gold-500/30 flex items-center justify-center bg-white text-gold-500 hover:bg-gold-500 hover:text-white transition-all duration-300 shadow-luxury-sm focus:outline-none"
                            aria-label="Next testimonial"
                        >
                            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
                        </button>
                    </div>

                    {/* Carousel Track */}
                    <div className="overflow-hidden py-4 px-2 sm:px-4">
                        <motion.div
                            animate={{
                                x: `-${currentIndex * (isMobile ? 100 : 33.333)}%`,
                            }}
                            transition={{
                                type: "spring",
                                stiffness: 260,
                                damping: 20,
                            }}
                            className="flex items-stretch"
                        >
                            {[...testimonialsData, ...testimonialsData].map((testimonial, idx) => (
                                <TestimonialCard key={`${testimonial.id}-${idx}`} testimonial={testimonial} />
                            ))}
                        </motion.div>
                    </div>

                    {/* Dot Indicators */}
                    <div className="flex justify-center gap-3 mt-12">
                        {testimonialsData.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={cn(
                                    "w-2.5 h-2.5 rounded-full transition-all duration-500 ease-out",
                                    currentIndex === index
                                        ? "bg-gold-500 w-10"
                                        : "bg-gold-500/20 hover:bg-gold-500/40"
                                )}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>

            {/* Background Decor */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-gold-500/5 blur-[100px] rounded-full -z-10" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-navy-900/5 blur-[120px] rounded-full -z-10" />
        </section>
    );
}
