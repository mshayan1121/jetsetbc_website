"use client";

import React from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Award } from "lucide-react";
import QuoteBuilder from "./QuoteBuilder";

const Hero = () => {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 200]);

    return (
        <section className="relative z-20 min-h-screen flex items-center justify-center bg-navy-900 w-full pt-20">
            {/* Background Image with Parallax */}
            <div className="absolute inset-0 z-0 w-full h-full overflow-hidden">
                <motion.div
                    style={{ y: y1 }}
                    className="absolute inset-0 w-full h-full"
                >
                    <Image
                        src="/office_burj_khalifa_view.png"
                        alt="Jetset Business Center Office"
                        fill
                        priority
                        sizes="100vw"
                        className="object-cover object-center"
                    />
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-navy-900/60" />
                </motion.div>
            </div>

            {/* Content Container */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full flex flex-col items-center text-center">
                
                {/* Main Heading */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                    className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white mb-6 leading-tight max-w-5xl"
                >
                    Work Where Ambition Lives.
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                    className="font-body text-lg sm:text-xl md:text-2xl text-cream-50 mb-8 max-w-3xl leading-relaxed"
                >
                    Premium serviced offices and coworking spaces in Prime Tower, Business Bay. Skip the fit-out costs and move into your new headquarters today.
                </motion.p>

                {/* Awards / Badges */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
                    className="flex flex-wrap justify-center gap-4 sm:gap-8 mb-10"
                >
                    <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-5 py-3 rounded-full border border-white/10 hover:bg-white/15 transition-colors">
                        <Award className="w-6 h-6 text-gold-500" />
                        <div className="text-left">
                            <p className="text-[10px] text-gold-500 font-bold uppercase tracking-wider leading-none mb-1">Winner</p>
                            <p className="text-sm text-white font-medium leading-none mb-1">Best Business Center 2024</p>
                            <p className="text-[10px] text-white/60 leading-none">
                                by <a href="https://www.letswork.io/" target="_blank" rel="noopener noreferrer" className="hover:text-gold-500 underline decoration-gold-500/30 underline-offset-2 transition-colors">Letswork</a>
                            </p>
                        </div>
                    </div>

                    <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-5 py-3 rounded-full border border-white/10 hover:bg-white/15 transition-colors">
                        <Award className="w-6 h-6 text-gold-500" />
                        <div className="text-left">
                            <p className="text-[10px] text-gold-500 font-bold uppercase tracking-wider leading-none mb-1">Winner</p>
                            <p className="text-sm text-white font-medium leading-none mb-1">Best Newcomer 2023</p>
                            <p className="text-[10px] text-white/60 leading-none">
                                by <a href="https://www.letswork.io/" target="_blank" rel="noopener noreferrer" className="hover:text-gold-500 underline decoration-gold-500/30 underline-offset-2 transition-colors">Letswork</a>
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* Quote Builder */}
                <div className="w-full">
                    <QuoteBuilder />
                </div>
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