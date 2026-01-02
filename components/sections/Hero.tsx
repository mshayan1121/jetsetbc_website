"use client";

import React from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { Star, Users, Briefcase, MapPin } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import Image from "next/image";

const Hero = () => {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 200]);

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-navy-900 w-full">
            {/* Background Image with Parallax */}
            <motion.div
                style={{ y: y1 }}
                className="absolute inset-0 z-0 w-full h-full"
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
                {/* Award Badges */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                    className="flex flex-col items-start gap-3 mb-8"
                >
                    <Badge
                        variant="gold"
                        className="bg-gold-500/20 text-gold-500 border border-gold-500/30 px-4 py-1.5 backdrop-blur-md"
                    >
                        🏆 Winner: Best Business Center of the Year (Letswork, 2024)
                    </Badge>
                    <Badge
                        variant="gold"
                        className="bg-gold-500/20 text-gold-500 border border-gold-500/30 px-4 py-1.5 backdrop-blur-md"
                    >
                        🏆 Winner: Best Newcomer of the Year (Letswork, 2023)
                    </Badge>
                </motion.div>

                {/* Main Heading */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                    className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white mb-6 leading-tight"
                >
                    Award-Winning Coworking And Private Offices in{' '}
                    <span className="text-gold-500">Dubai</span>
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                    className="font-body text-lg sm:text-xl md:text-2xl text-cream-50 mb-8 max-w-3xl leading-relaxed"
                >
                    We are the premium provider of luxury workspace solutions and corporate setup services in Dubai.
                </motion.p>



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
                        variant="outline-light"
                        size="lg"
                        asChild
                    >
                        <Link href="/services">EXPLORE SPACES</Link>
                    </Button>
                </motion.div>
            </div>

            {/* Glassmorphism accent for the left side */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden" style={{ maxWidth: '100%' }}>
                <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-gold-500/5 blur-[120px] rounded-full" style={{ maxWidth: '100%' }} />
                <div className="absolute bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-navy-800/20 blur-[120px] rounded-full" style={{ maxWidth: '100%' }} />
            </div>
        </section>
    );
};

export default Hero;
