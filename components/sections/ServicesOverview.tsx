"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Building, Users, Presentation, FileCheck, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

const services = [
    {
        title: "Private Offices",
        description: "Fully furnished suites with panoramic Burj Khalifa views and 24/7 access",
        price: "From AED 50,000/year",
        cta: "View Offices",
        icon: Building,
        image: "/images/services/private-office.png",
        height: "h-[450px] md:h-[500px]",
        delay: 0,
    },
    {
        title: "Coworking Spaces",
        description: "Flexible desks in a vibrant professional community with all amenities",
        price: "From AED 80/day",
        cta: "Explore Spaces",
        icon: Users,
        image: "/images/services/coworking.png",
        height: "h-[450px] md:h-[600px]",
        delay: 0.2,
    },
    {
        title: "Meeting Rooms",
        description: "High-tech conference facilities with AV equipment and catering options",
        price: "2 hours free daily",
        cta: "Book a Room",
        icon: Presentation,
        image: "/images/services/meeting-rooms.png",
        height: "h-[450px] md:h-[600px]",
        delay: 0.4,
    },
    {
        title: "Virtual Ejari & Setup",
        description: "Complete business formation, licensing, and visa support services",
        price: "Virtual Ejari: AED 8,500/year",
        cta: "Get Started",
        icon: FileCheck,
        image: "/images/services/business-setup.png",
        height: "h-[450px] md:h-[500px]",
        delay: 0.6,
    },
];

const ServicesOverview = () => {
    return (
        <section id="services" className="section-padding bg-white relative overflow-hidden">
            <div className="container-custom relative z-10">
                {/* Header */}
                <div className="text-center mb-16 md:mb-24">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="text-4xl md:text-5xl lg:text-6xl font-display text-navy-900 mb-6 leading-tight"
                    >
                        Your Workspace, Your Way
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        className="text-lg md:text-xl text-gray-500 font-body max-w-2xl mx-auto"
                    >
                        Flexible solutions designed for modern businesses
                    </motion.p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-start">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, delay: service.delay, ease: [0.22, 1, 0.36, 1] }}
                            className={`group relative bg-white rounded-2xl overflow-hidden shadow-navy-sm hover:shadow-luxury-lg transition-all duration-500 flex flex-col min-h-[400px] ${service.height} ${index % 2 !== 0 ? "md:mt-12" : ""
                                } ${index === 2 ? "md:-mt-12" : ""}`}
                        >
                            {/* Image Container */}
                            <div className="relative flex-grow overflow-hidden">
                                <Image
                                    src={service.image}
                                    alt={service.title}
                                    fill
                                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                                />
                                {/* Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/90 via-navy-900/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />

                                {/* Icon Circle */}
                                <div className="absolute top-6 left-6 w-14 h-14 bg-gold-500 rounded-full flex items-center justify-center text-white shadow-lg shadow-gold-500/20 transform -translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                                    <service.icon className="w-7 h-7" />
                                </div>
                            </div>

                            {/* Content */}
                            <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8 pt-8 md:pt-12 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                                    <div className="w-6 sm:w-8 h-[2px] bg-gold-500" />
                                    <span className="text-gold-400 font-body font-medium uppercase tracking-widest text-[10px] sm:text-xs">
                                        Service
                                    </span>
                                </div>
                                <h3 className="text-xl sm:text-2xl md:text-3xl font-display text-white mb-2 sm:mb-3 group-hover:text-gold-400 transition-colors duration-300">
                                    {service.title}
                                </h3>
                                <p className="text-white/70 font-body mb-4 sm:mb-6 text-sm sm:text-base line-clamp-2 group-hover:text-white transition-colors duration-300">
                                    {service.description}
                                </p>
                                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0 mt-auto border-t border-white/10 pt-4 sm:pt-6">
                                    <span className="text-white font-body font-semibold text-sm sm:text-base">
                                        {service.price}
                                    </span>
                                    <button className="flex items-center gap-2 text-gold-500 font-body font-medium text-sm sm:text-base group/btn transition-all duration-300">
                                        <span className="border-b border-transparent group-hover/btn:border-gold-500 transition-all duration-300">
                                            {service.cta}
                                        </span>
                                        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-2" />
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Background Decorative Elements */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[500px] h-[500px] bg-gold-500/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-navy-900/5 rounded-full blur-3xl pointer-events-none" />
        </section>
    );
};

export default ServicesOverview;
