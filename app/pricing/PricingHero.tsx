"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/Badge";
import { ChevronDown } from "lucide-react";

const PricingHero = () => {
    return (
        <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-navy-900">
            {/* Background - wide-angle luxury office with Burj view */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/hero-bg.png"
                    alt=""
                    fill
                    className="object-cover"
                    priority
                    sizes="100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-navy-900/85 via-navy-900/70 to-navy-900/95 z-[1]" />
            </div>
            {/* Background Texture */}
            <div
                className="absolute inset-0 opacity-10 mix-blend-overlay z-[2]"
                style={{
                    backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                    backgroundSize: '48px 48px'
                }}
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <Badge 
                        className="mb-6 bg-gold-500/20 text-gold-400 border-gold-500/30 px-4 py-1.5 backdrop-blur-md" 
                        variant="gold"
                    >
                        All-Inclusive Model
                    </Badge>
                    <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-white mb-6">
                        Transparent Pricing for Premium Spaces
                    </h1>
                    <p className="font-body text-xl md:text-2xl text-cream-50 max-w-3xl mx-auto">
                        Pricing that's perfect for you. From flexible coworking to private headquarters, experience luxury workspaces without hidden fees.
                    </p>
                </motion.div>
            </div>

            {/* Scroll-down arrow */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.6 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
            >
                <span className="text-gold-500/70 text-[10px] uppercase tracking-[0.2em] font-accent">Scroll</span>
                <motion.div
                    animate={{ y: [0, 6, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                    <ChevronDown className="w-8 h-8 text-gold-500" aria-hidden />
                </motion.div>
            </motion.div>

            {/* Decorative Elements */}
            <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-gold-500/10 blur-[100px] z-[1]" />
            <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-teal-500/20 blur-[100px] z-[1]" />
        </section>
    );
};

export default PricingHero;




