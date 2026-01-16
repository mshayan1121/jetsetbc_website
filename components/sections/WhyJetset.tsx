"use client";

import React from "react";
import { motion } from "framer-motion";
import { Plug, Wifi, MapPin, Coffee } from "lucide-react";

const features = [
    {
        icon: Plug,
        title: "Plug & Play Simplicity",
        description: "Stop wasting capital on furniture and fit-outs. We provide the infrastructure; you provide the talent.",
    },
    {
        icon: Wifi,
        title: "Uninterrupted Productivity",
        description: "Never suffer through a lagging video call again with our enterprise-grade, secure Wi-Fi.",
    },
    {
        icon: MapPin,
        title: "Commute Less, Live More",
        description: "Minutes from the Metro and Sheikh Zayed Road. Spend less time in traffic and more time growing your business.",
    },
    {
        icon: Coffee,
        title: "Fuel Your Day",
        description: "Unlimited premium coffee, tea, and water for you and your guests.",
    },
];

const WhyJetset = () => {
    return (
        <section className="py-20 sm:py-28 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="font-display text-4xl sm:text-5xl text-navy-900">
                        Why Leaders Choose Jetset BC
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