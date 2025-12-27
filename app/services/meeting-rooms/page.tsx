"use client";

import React from "react";
import ServiceHero from "@/components/sections/ServiceHero";
import FeaturesList from "@/components/sections/FeaturesList";
import CTASection from "@/components/sections/CTASection";
import {
    Monitor,
    Wifi,
    Video,
    Mic,
    FileText,
    Coffee,
    Users,
    Check,
    Clock
} from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Badge } from "@/components/ui/Badge";

const MeetingRoomsPage = () => {
    const techSpecs = [
        {
            title: "4K Displays",
            description: "High-resolution LED screens for crystal clear presentations and video.",
            icon: Monitor,
        },
        {
            title: "Fast Connection",
            description: "Dedicated high-bandwidth WiFi and ethernet ports in every room.",
            icon: Wifi,
        },
        {
            title: "Video Conferencing",
            description: "Integrated Logitech systems compatible with Zoom, Teams, and Google Meet.",
            icon: Video,
        },
        {
            title: "Premium Audio",
            description: "Ceiling-mounted microphones and speakers for uniform sound coverage.",
            icon: Mic,
        },
        {
            title: "Collaboration Tools",
            description: "Digital whiteboards and high-quality stationery for brainstorming sessions.",
            icon: FileText,
        },
        {
            title: "Catering Options",
            description: "Gourmet food and beverage packages available upon request.",
            icon: Coffee,
        },
    ];

    const roomTypes = [
        {
            name: "Standard Room",
            capacity: "6 Persons",
            description: "Perfect for team meetings and small group collaborations.",
            features: [
                "Smart TV for hybrid meetings",
                "High-speed secure Wi-Fi",
                "Professional boardroom setup",
                "Climate control"
            ],
            image: "/images/services/meeting-rooms.png"
        },
        {
            name: "Conference Room",
            capacity: "8 Persons",
            description: "Boardroom-style setting for important business meetings.",
            features: [
                "Smart TV for presentations",
                "High-speed secure Wi-Fi",
                "Boardroom configuration",
                "Professional environment"
            ],
            image: "/images/services/meeting-rooms.png"
        },
        {
            name: "Majilis",
            capacity: "9-10 Persons",
            description: "VIP/Executive style room for high-stakes meetings and corporate presentations.",
            features: [
                "Premium VIP/Executive setting",
                "Smart TV for hybrid meetings",
                "High-speed secure Wi-Fi",
                "Luxury seating"
            ],
            image: "/images/services/meeting-rooms.png"
        }
    ];

    return (
        <div className="flex flex-col">
            <ServiceHero
                title="Professional Meeting Spaces"
                subtitle="Imperial Boardrooms"
                description="Impress your clients and boost team collaboration with our tech-enabled meeting rooms in the heart of Business Bay."
                image="/images/services/meeting-rooms.png"
                ctaText="Book Now"
                secondaryCtaText="See Pricing"
            />

            {/* Room Showcase */}
            <section className="py-24 bg-white text-navy-900">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-display mb-4">Space for Every Occasion</h2>
                        <p className="text-navy-600 max-w-2xl mx-auto">Professional meeting rooms designed for success, from team collaborations to executive presentations.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {roomTypes.map((room, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                viewport={{ once: true }}
                                className="group flex flex-col h-full bg-navy-50 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-400"
                            >
                                <div className="relative h-64 overflow-hidden rounded-t-xl">
                                    <Image
                                        src={room.image}
                                        alt={room.name}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-400"
                                    />
                                    <div className="absolute top-4 left-4">
                                        <Badge className="bg-navy-900/90 backdrop-blur-sm text-white" icon={<Users className="w-4 h-4" />}>
                                            {room.capacity}
                                        </Badge>
                                    </div>
                                </div>
                                <div className="p-6 flex flex-col flex-grow">
                                    <h3 className="font-display text-2xl text-navy-900 mb-3">{room.name}</h3>
                                    <p className="text-navy-700 mb-6 leading-relaxed flex-grow">{room.description}</p>
                                    <ul className="space-y-2">
                                        {room.features.map((feature, fIdx) => (
                                            <li key={fIdx} className="flex items-start gap-2 text-navy-700">
                                                <Check className="w-5 h-5 text-gold-500 flex-shrink-0 mt-0.5" />
                                                <span className="text-sm">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Member Benefit Callout */}
                    <div className="mt-12 bg-gold-500/10 border border-gold-500/20 rounded-xl p-8 text-center">
                        <div className="flex items-center justify-center gap-3 mb-4">
                            <Clock className="w-6 h-6 text-gold-500" />
                            <h3 className="font-display text-2xl text-navy-900">
                                Member Benefit
                            </h3>
                        </div>
                        <p className="text-lg text-navy-700">
                            All members enjoy <span className="font-semibold text-gold-600">2 hours of complimentary meeting room access per day</span>
                        </p>
                    </div>
                </div>
            </section>

            <FeaturesList
                title="Advanced Technology"
                subtitle="Integrated solutions that make every meeting seamless and professional."
                features={techSpecs}
            />

            <CTASection />
        </div>
    );
};

export default MeetingRoomsPage;
