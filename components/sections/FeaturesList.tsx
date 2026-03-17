"use client";

import React from "react";
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface Feature {
    title: string;
    description: string;
    icon: LucideIcon;
}

interface FeaturesListProps {
    features: Feature[];
    title: string;
    subtitle?: string;
    columns?: number;
    className?: string;
}

const FeaturesList = ({ features, title, subtitle, columns = 3, className = "" }: FeaturesListProps) => {
    return (
        <section className={`py-24 bg-white ${className}`}>
            <div className="container-custom">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-display text-navy-900 mb-4">{title}</h2>
                    {subtitle && <p className="text-navy-600 max-w-2xl mx-auto">{subtitle}</p>}
                </div>

                <div className={`grid grid-cols-1 md:grid-cols-2 ${columns === 3 ? "lg:grid-cols-3" : ""} gap-12`}>
                    {features.map((feature, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            className="group rounded-2xl p-8 border border-cream-200 bg-white hover:bg-[#D4AF37] hover:border-[#D4AF37] shadow-sm hover:shadow-luxury-lg hover:-translate-y-2 transition-all duration-300 ease-out cursor-default"
                        >
                            <div className="mb-6 p-4 bg-navy-50 rounded-2xl w-fit group-hover:bg-white/20 transition-colors duration-300">
                                <feature.icon className="w-8 h-8 text-gold-500 group-hover:text-white transition-colors duration-300" />
                            </div>
                            <h3 className="text-xl font-display text-navy-900 group-hover:text-white mb-3 transition-colors duration-300">{feature.title}</h3>
                            <p className="text-navy-600 group-hover:text-white leading-relaxed transition-colors duration-300">{feature.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturesList;
