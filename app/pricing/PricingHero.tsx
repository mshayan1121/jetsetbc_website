"use client";

import React from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/Badge";

const PricingHero = () => {
    return (
        <section className="relative bg-gradient-to-br from-navy-900 via-teal-600 to-navy-900 min-h-[70vh] flex items-center justify-center overflow-hidden">
            {/* Background Texture */}
            <div
                className="absolute inset-0 opacity-10 mix-blend-overlay"
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

            {/* Decorative Elements */}
            <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-gold-500/10 blur-[100px]" />
            <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-teal-500/20 blur-[100px]" />
        </section>
    );
};

export default PricingHero;




