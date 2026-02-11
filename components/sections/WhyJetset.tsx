"use client";

import React from "react";
import { motion } from "framer-motion";
import { Users, TrendingUp, MapPin, Building2 } from "lucide-react";

const features = [
    {
        icon: Users,
        title: "Inspire Collaboration",
        description: "Open layouts and private meeting rooms designed to spark ideas and teamwork across your team.",
    },
    {
        icon: TrendingUp,
        title: "Scale with Ease",
        description: "Flexible office and coworking solutions that grow with your business—expand or downsize without hassle.",
    },
    {
        icon: MapPin,
        title: "Central and Accessible",
        description: "Minutes from Dubai's Metro and Sheikh Zayed Road for easy access and productivity.",
    },
    {
        icon: Building2,
        title: "Professional First Impressions",
        description: "Prestigious Business Bay address and stylish office spaces that impress clients from day one.",
    },
];

const WhyJetset = () => {
    return (
        <section className="py-20 sm:py-28 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="font-display text-4xl sm:text-5xl text-navy-900">
                        Why Leaders Choose Jetset Business Center
                    </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
                    {features.map((feature, index) => {
                        const Icon = feature.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="flex flex-col items-center text-center"
                            >
                                <div className="w-16 h-16 rounded-full bg-cream-100 flex items-center justify-center text-gold-500 mb-6">
                                    <Icon className="w-8 h-8 stroke-[1.5]" />
                                </div>
                                <h3 className="font-display text-xl text-navy-900 mb-4">
                                    {feature.title}
                                </h3>
                                <p className="text-navy-600 leading-relaxed">
                                    {feature.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default WhyJetset;