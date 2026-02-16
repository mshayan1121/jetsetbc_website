"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Users, FileText, Briefcase, Building, Presentation, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const services = [
    {
        title: "Private Serviced Offices in Business Bay",
        description: "Fully equipped office suites in Business Bay, Dubai, tailored for teams seeking privacy, efficiency, and a prestigious business address.",
        image: "/images/services/private-office.png",
        icon: Building,
        link: "/services/private-offices",
        cta: "Book a Tour",
        className: "md:col-span-2 min-h-[320px] md:min-h-[400px]",
        trustSignal: null,
    },
    {
        title: "Modern Shared Workspaces",
        description: "Join a community of innovators, entrepreneurs, and industry leaders in Dubai's vibrant coworking spaces.",
        image: "/images/services/Co-working Area.jpg",
        icon: Users,
        link: "/services/coworking",
        cta: "View Coworking Plans",
        className: "md:col-span-2 min-h-[320px] md:min-h-[400px]",
        trustSignal: "Join a community of 300+ active members from tech, finance, consulting, and creative industries.",
    },
    {
        title: "Professional Meeting Spaces",
        description: "Host important meetings in Business Bay's premium, fully furnished meeting rooms and collaboration spaces.",
        image: "/images/services/Conference Room.jpg",
        icon: Presentation,
        link: "/services/meeting-rooms",
        cta: "Book a Meeting Room →",
        className: "md:col-span-2 min-h-[320px]",
        trustSignal: null,
    },
    {
        title: "Virtual Office & Ejari in Dubai",
        description: "Get a prestigious Business Bay address and official Ejari documentation without renting physical space. Ideal for trade license issuance and renewals.",
        image: "/images/blog/virtual-office.jpg",
        icon: FileText,
        link: "/services/business-setup",
        cta: "Secure a Virtual Office →",
        className: "md:col-span-1 min-h-[320px]",
        trustSignal: "Over 200 international companies use Jetset for Ejari and business registration every year.",
    },
    {
        title: "Company Formation & PRO Services",
        description: "Start your Dubai business with expert guidance. We provide end-to-end solutions for company formation, licensing, and business compliance.",
        image: "/images/services/business-setup.png",
        icon: Briefcase,
        link: "/services/business-setup",
        cta: "Free Consultation →",
        className: "md:col-span-1 min-h-[320px]",
        trustSignal: null,
    },
];

const WorkspaceGrid = ({ className = "", variant }: { className?: string; variant?: "home" | "services" }) => {
    return (
        <section id="services" className={cn("py-20 sm:py-28 bg-cream-50 overflow-hidden", className)}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-12 text-center md:text-left">
                    <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-navy-900 mb-6">Our Services</h2>
                    <p className="text-lg text-navy-600 max-w-2xl">
                        Flexible offices, coworking, virtual services, and complete business support — designed to help you grow, all under one roof.
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
                                <div className="absolute inset-0 w-full h-full">
                                    <Image
                                        src={service.image}
                                        alt={service.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-navy-900/92 via-navy-900/50 to-transparent opacity-90 group-hover:opacity-95 transition-opacity duration-300" />
                                </div>

                                <div className="relative z-10 flex flex-col h-full p-6 md:p-8">
                                    <div className="w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl flex items-center justify-center mb-auto group-hover:bg-white/20 transition-all duration-300">
                                        <Icon className="w-6 h-6 text-white" />
                                    </div>

                                    <div className="mt-4">
                                        <h3 className="font-display text-xl md:text-2xl lg:text-3xl text-white mb-2 group-hover:text-gold-400 transition-colors">
                                            {service.title}
                                        </h3>
                                        <p className="text-white/85 mb-4 line-clamp-3 text-sm md:text-base">
                                            {service.description}
                                        </p>
                                        {service.trustSignal && variant !== "services" && (
                                            <p className="text-white/70 text-xs mb-4 italic">
                                                {service.trustSignal}
                                            </p>
                                        )}
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
