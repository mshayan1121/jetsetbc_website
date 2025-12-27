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
}

const FeaturesList = ({ features, title, subtitle, columns = 3 }: FeaturesListProps) => {
    return (
        <section className="py-24 bg-white">
            <div className="container-custom">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-display text-navy-900 mb-4">{title}</h2>
                    {subtitle && <p className="text-navy-600 max-w-2xl mx-auto">{subtitle}</p>}
                </div>

                <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-${columns} gap-12`}>
                    {features.map((feature, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            className="group"
                        >
                            <div className="mb-6 p-4 bg-navy-50 rounded-2xl w-fit group-hover:bg-gold-500 transition-colors duration-300">
                                <feature.icon className="w-8 h-8 text-gold-500 group-hover:text-white transition-colors duration-300" />
                            </div>
                            <h3 className="text-xl font-display text-navy-900 mb-3">{feature.title}</h3>
                            <p className="text-navy-600 leading-relaxed">{feature.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturesList;
