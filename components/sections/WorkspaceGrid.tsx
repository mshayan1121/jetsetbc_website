"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Users, Video, Briefcase, Globe, FileText, Building, Presentation, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const services = [
    {
        title: "Co-working Spaces",
        description: "Work from premium coworking spaces & lounges with a single membership.",
        image: "/images/services/Co-working Area.jpg",
        icon: Users,
        link: "/services/coworking",
        cta: "Learn More",
        className: "md:col-span-2 min-h-[320px] md:min-h-[400px]",
    },
    {
        title: "Private Offices",
        description: "Move your team into a ready-to-use, fully serviced private workspace.",
        image: "/images/services/private-office.png",
        icon: Building,
        link: "/services/private-offices",
        cta: "Learn More",
        className: "md:col-span-2 min-h-[320px] md:min-h-[400px]",
    },
    {
        title: "Meeting Rooms",
        description: "Book private rooms instantly for calls, workshops or team discussions.",
        image: "/images/services/Conference Room.jpg",
        icon: Presentation,
        link: "/services/meeting-rooms",
        cta: "Learn More",
        className: "md:col-span-2 min-h-[320px]",
    },
    {
        title: "Virtual Ejari",
        description: "Get your official Ejari contract instantly for business licensing.",
        image: "/images/blog/virtual-office.jpg",
        icon: FileText,
        link: "/services/business-setup",
        cta: "Learn More",
        className: "md:col-span-1 min-h-[320px]",
    },
    {
        title: "Business Setup",
        description: "Complete assistance with company formation and licensing.",
        image: "/images/services/business-setup.png",
        icon: Briefcase,
        link: "/services/business-setup",
        cta: "Learn More",
        className: "md:col-span-1 min-h-[320px]",
    }
];

const WorkspaceGrid = ({ className = "" }: { className?: string }) => {
    return (
        <section className={cn("py-20 sm:py-28 bg-cream-50 overflow-hidden", className)}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-12 text-center md:text-left">
                    <h2 className="font-display text-4xl sm:text-5xl text-navy-900 mb-6">Explore Our Services</h2>
                    <p className="text-lg text-navy-600 max-w-2xl">
                        Premium solutions for every stage of your business growth.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6">
                    {services.map((service, index) => {
                        const Icon = service.icon;
                        return (
                            <motion.div
                                key={service.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className={`group relative rounded-3xl overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col ${service.className}`}
                            >
                                {/* Background Image */}
                                <div className="absolute inset-0 w-full h-full">
                                    <Image
                                        src={service.image}
                                        alt={service.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    {/* Glassmorphism/Gradient Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-navy-900/90 via-navy-900/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
                                </div>

                                {/* Content Overlay */}
                                <div className="relative z-10 flex flex-col h-full p-6 md:p-8">
                                    {/* Icon Badge */}
                                    <div className="w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl flex items-center justify-center mb-auto group-hover:bg-white/20 transition-all duration-300">
                                        <Icon className="w-6 h-6 text-white" />
                                    </div>

                                    <div className="mt-4">
                                        <h3 className="font-display text-2xl md:text-3xl text-white mb-2 group-hover:text-gold-400 transition-colors">
                                            {service.title}
                                        </h3>
                                        
                                        <p className="text-white/80 mb-6 line-clamp-3 text-sm md:text-base">
                                            {service.description}
                                        </p>

                                        <Link 
                                            href={service.link}
                                            className="inline-flex items-center gap-2 text-white font-medium group-hover:gap-3 transition-all duration-300"
                                        >
                                            <span className="border-b border-white/30 pb-0.5 group-hover:border-gold-400 group-hover:text-gold-400 transition-colors">
                                                {service.cta}
                                            </span>
                                            <ArrowRight className="w-4 h-4 group-hover:text-gold-400 transition-colors" />
                                        </Link>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default WorkspaceGrid;
