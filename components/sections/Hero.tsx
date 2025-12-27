"use client";

import React from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { Star, Users, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import Image from "next/image";

const Hero = () => {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 200]);

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-navy-900">
            {/* Background Image with Parallax */}
            <motion.div
                style={{ y: y1 }}
                className="absolute inset-0 z-0"
            >
                <Image
                    src="/images/hero-bg.png"
                    alt="Jetset Business Center Office"
                    fill
                    priority
                    sizes="100vw"
                    className="object-cover object-center"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-navy-900/95 via-navy-900/90 to-navy-900/70" />
            </motion.div>

            {/* Content Container */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
                {/* Award Badge */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                >
                    <Badge
                        variant="gold"
                        className="bg-gold-500/20 text-gold-500 border border-gold-500/30 px-4 py-1.5 mb-6 backdrop-blur-md"
                    >
                        🏆 BEST BUSINESS CENTER OF THE YEAR 2024
                    </Badge>
                </motion.div>

                {/* Main Heading */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                    className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white mb-6 leading-tight"
                >
                    Award-Winning Workspace in the Heart of{' '}
                    <span className="text-gold-500">Dubai</span>
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                    className="font-body text-lg sm:text-xl md:text-2xl text-cream-50 mb-8 max-w-3xl leading-relaxed"
                >
                    Premium Private Offices & Coworking Spaces with Stunning Burj Khalifa Views. 
                    Elevate your business in Dubai's most prestigious location.
                </motion.p>

                {/* Stats Row */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="flex flex-wrap items-center gap-6 md:gap-8 mb-10"
                >
                    <div className="flex items-center gap-2">
                        <div className="w-10 h-10 bg-gold-500/10 rounded-full flex items-center justify-center">
                            <Users className="w-5 h-5 text-gold-500" />
                        </div>
                        <div className="text-white">
                            <span className="font-accent text-2xl block">500+</span>
                            <span className="text-sm text-cream-50">CLIENTS</span>
                        </div>
                    </div>
                    
                    <div className="flex items-center gap-2">
                        <div className="w-10 h-10 bg-gold-500/10 rounded-full flex items-center justify-center">
                            <Star className="w-5 h-5 text-gold-500 fill-gold-500" />
                        </div>
                        <div className="text-white">
                            <span className="font-accent text-2xl block">4.9★</span>
                            <span className="text-sm text-cream-50">RATING</span>
                        </div>
                    </div>
                    
                    <div className="flex items-center gap-2">
                        <div className="w-10 h-10 bg-gold-500/10 rounded-full flex items-center justify-center">
                            <Briefcase className="w-5 h-5 text-gold-500" />
                        </div>
                        <div className="text-white">
                            <span className="font-accent text-2xl block">20+</span>
                            <span className="text-sm text-cream-50">YEARS</span>
                        </div>
                    </div>
                </motion.div>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.0 }}
                    className="flex flex-col sm:flex-row gap-4"
                >
                    <Button
                        variant="primary"
                        size="lg"
                        asChild
                    >
                        <Link href="/book-tour">BOOK A TOUR</Link>
                    </Button>
                    <Button
                        variant="outline"
                        size="lg"
                        className="border-2 border-white text-white hover:bg-white hover:text-navy-900"
                        asChild
                    >
                        <Link href="/services">EXPLORE SPACES</Link>
                    </Button>
                </motion.div>
            </div>

            {/* Glassmorphism accent for the left side */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
                <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-gold-500/5 blur-[120px] rounded-full" />
                <div className="absolute bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-navy-800/20 blur-[120px] rounded-full" />
            </div>
        </section>
    );
};

export default Hero;
