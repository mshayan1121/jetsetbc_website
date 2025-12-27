"use client";

import React from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown, Star, Users, Calendar } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import Image from "next/image";

const Hero = () => {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 200]);

    const stats = [
        { label: "500+ Clients", icon: <Users className="w-4 h-4" /> },
        { label: "4.9★ Rating", icon: <Star className="w-4 h-4 fill-gold-500" /> },
        { label: "20+ Years", icon: <Calendar className="w-4 h-4" /> },
    ];

    return (
        <section className="relative min-h-screen w-full flex items-center overflow-hidden bg-navy-900">
            {/* Background Image with Parallax */}
            <motion.div
                style={{ y: y1 }}
                className="absolute inset-0 z-0"
            >
                <div className="absolute inset-0 bg-gradient-to-r from-navy-900 via-navy-900/80 to-transparent z-10" />
                <div className="absolute inset-0 bg-gradient-to-b from-navy-900/40 via-transparent to-navy-900 z-10" />
                <Image
                    src="/images/hero-bg.png"
                    alt="Burj Khalifa View"
                    fill
                    priority
                    sizes="100vw"
                    className="object-cover object-center scale-110"
                />
            </motion.div>

            {/* Content Container */}
            <div className="container-custom relative z-20 w-full pt-20">
                <div className="max-w-3xl lg:w-[60%]">
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                    >
                        <Badge
                            variant="gold"
                            className="bg-gold-500/20 text-gold-400 border-gold-500/30 px-4 py-1.5 mb-8 backdrop-blur-md"
                        >
                            🏆 Best Business Center of the Year 2024
                        </Badge>
                    </motion.div>

                    {/* Headline */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                        className="text-white text-5xl md:text-7xl lg:text-[72px] leading-[1.1] mb-6 font-display"
                    >
                        Award-Winning Workspace in the Heart of <span className="text-gold-500">Dubai</span>
                    </motion.h1>

                    {/* Subheadline */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                        className="text-cream-100 text-lg md:text-2xl mb-10 max-w-2xl font-body leading-relaxed"
                    >
                        Premium Private Offices & Coworking Spaces with Stunning Burj Khalifa Views. Elevate your business in Dubai's most prestigious location.
                    </motion.p>

                    {/* Stats Row */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        className="flex flex-wrap items-center gap-8 md:gap-12 mb-12"
                    >
                        {stats.map((stat, idx) => (
                            <div key={idx} className="flex items-center gap-3">
                                <span className="text-gold-500">{stat.icon}</span>
                                <span className="text-white font-accent font-medium tracking-wider text-sm md:text-base uppercase">
                                    {stat.label}
                                </span>
                            </div>
                        ))}
                    </motion.div>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1.0 }}
                        className="flex flex-wrap gap-4"
                    >
                        <Button
                            variant="primary"
                            size="lg"
                            className="px-10 text-base"
                            asChild
                        >
                            <Link href="/book-tour">Book a Tour</Link>
                        </Button>
                        <Button
                            variant="outline"
                            size="lg"
                            className="px-10 text-base border-white/30 text-white hover:border-gold-500 hover:text-gold-500"
                        >
                            Explore Spaces
                        </Button>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
            >
                <span className="text-gold-500/60 text-[10px] uppercase tracking-[0.3em] font-accent">Discover More</span>
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="flex flex-col items-center"
                >
                    <ChevronDown className="w-6 h-6 text-gold-500" />
                </motion.div>
            </motion.div>

            {/* Glassmorphism accent for the left side */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
                <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-gold-500/5 blur-[120px] rounded-full" />
                <div className="absolute bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-navy-800/20 blur-[120px] rounded-full" />
            </div>
        </section>
    );
};

export default Hero;
