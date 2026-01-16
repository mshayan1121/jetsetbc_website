"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const SocialProof = () => {
    // Placeholder logos - in a real scenario, these would be actual client logos
    // Using a simple array for now
    const logos = [
        "Company 1", "Company 2", "Company 3", "Company 4", "Company 5", "Company 6"
    ];

    return (
        <section className="bg-cream-100 border-y border-cream-200 py-4 sm:py-6 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-6 md:gap-12">
                <div className="shrink-0">
                    <span className="text-xs font-accent font-bold uppercase tracking-widest text-navy-900/60">
                        TRUSTED BY 500+ COMPANIES IN DUBAI
                    </span>
                </div>
                
                {/* Scrolling Logos */}
                <div className="flex-1 w-full overflow-hidden relative">
                    <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-cream-100 to-transparent z-10" />
                    <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-cream-100 to-transparent z-10" />
                    
                    <motion.div 
                        className="flex items-center gap-12 whitespace-nowrap"
                        animate={{ x: [0, -1000] }}
                        transition={{ 
                            repeat: Infinity, 
                            duration: 30, 
                            ease: "linear" 
                        }}
                    >
                        {/* Repeat logos to ensure seamless scrolling */}
                        {[...logos, ...logos, ...logos, ...logos].map((logo, index) => (
                            <div key={index} className="opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300 font-display text-xl font-bold text-navy-800">
                                {/* Ideally these would be images */}
                                {logo}
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default SocialProof;