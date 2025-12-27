"use client";

import React from "react";
import ServiceHero from "@/components/sections/ServiceHero";
import PricingTable from "@/components/sections/PricingTable";
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
    Table,
    Settings
} from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

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
            name: "Huddle Room",
            capacity: "2-4 Persons",
            description: "Intimate space designed for quick brainstorms and private interviews.",
            features: ["43\" 4K Display", "Glass Whiteboard", "Privacy Soundproofing"],
            image: "/images/services/meeting-rooms.png"
        },
        {
            name: "Executive Boardroom",
            capacity: "10-14 Persons",
            description: "Prestigious setting for high-stakes meetings and corporate presentations.",
            features: ["85\" 4K Display", "VC System", "Leather Seating", "Buffet Area"],
            image: "/images/services/meeting-rooms.png"
        },
        {
            name: "Training Suite",
            capacity: "25+ Persons",
            description: "Versatile layout perfect for workshops, seminars, and product launches.",
            features: ["Dual Projectors", "PA System", "Flexible Furniture", "Climate Control"],
            image: "/images/services/meeting-rooms.png"
        }
    ];

    const pricingPlans = [
        {
            name: "Hourly Rental",
            price: "From AED 150",
            period: "/hour",
            description: "Flexible booking for short meetings and quick catch-ups.",
            features: [
                "Technical support",
                "Refreshments included",
                "High-speed WiFi",
                "Presentation equipment",
                "Easy online booking"
            ]
        },
        {
            name: "Half-Day Package",
            price: "AED 500",
            period: "/4 hours",
            description: "Ideal for workshops or morning/afternoon strategy sessions.",
            features: [
                "4-hour room access",
                "Gourmet coffee break",
                "Flipcharts/Whiteboard",
                "Stationery provided",
                "Priority booking"
            ],
            isPopular: true
        },
        {
            name: "Full-Day Intensive",
            price: "AED 900",
            period: "/8 hours",
            description: "Complete immersion for leadership teams and corporate training.",
            features: [
                "8-hour room access",
                "Full-day technical support",
                "Lunch catering options",
                "Reception assistance",
                "Dedicated lounge access"
            ]
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
                        <p className="text-navy-600 max-w-2xl mx-auto">From intimate huddles to corporate board meetings, our rooms are built for success.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {roomTypes.map((room, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                viewport={{ once: true }}
                                className="group flex flex-col h-full bg-navy-50 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
                            >
                                <div className="relative h-60">
                                    <Image
                                        src={room.image}
                                        alt={room.name}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                                    />
                                    <div className="absolute top-4 left-4 bg-navy-900/80 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs font-accent uppercase tracking-wider flex items-center gap-2">
                                        <Users className="w-3 h-3 text-gold-500" />
                                        {room.capacity}
                                    </div>
                                </div>
                                <div className="p-8 flex flex-col flex-grow">
                                    <h3 className="text-2xl font-display mb-3">{room.name}</h3>
                                    <p className="text-navy-600 text-sm mb-6 leading-relaxed flex-grow">{room.description}</p>
                                    <div className="space-y-3 mb-8">
                                        {room.features.map((feature, fIdx) => (
                                            <div key={fIdx} className="flex items-center gap-3">
                                                <div className="w-1 h-1 rounded-full bg-gold-500" />
                                                <span className="text-navy-500 text-xs uppercase tracking-widest">{feature}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <Button variant="outline" className="w-full">Select Room</Button>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <FeaturesList
                title="Advanced Technology"
                subtitle="Integrated solutions that make every meeting seamless and professional."
                features={techSpecs}
            />

            {/* Booking Calendar Placeholder */}
            <section className="py-24 bg-navy-900 text-white overflow-hidden relative">
                <div className="container-custom relative z-10">
                    <div className="flex flex-col lg:flex-row gap-16 items-center">
                        <div className="lg:w-1/2">
                            <h2 className="text-3xl md:text-5xl font-display mb-6">Real-Time Availability</h2>
                            <p className="text-cream-100/70 mb-10 text-lg leading-relaxed">
                                Our integrated booking system allows you to secure your space in seconds. Check availability, choose your equipment, and order catering all in one place.
                            </p>
                            <div className="grid grid-cols-2 gap-6 mb-10">
                                <div className="flex items-center gap-3">
                                    <Settings className="text-gold-500 w-5 h-5" />
                                    <span className="text-sm font-accent uppercase tracking-wider">Self Service</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Table className="text-gold-500 w-5 h-5" />
                                    <span className="text-sm font-accent uppercase tracking-wider">Layout Options</span>
                                </div>
                            </div>
                            <Button variant="primary" size="lg">Open Booking Portal</Button>
                        </div>
                        <div className="lg:w-1/2 w-full">
                            <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-3xl relative overflow-hidden">
                                <div className="flex items-center justify-between mb-8 border-b border-white/10 pb-4">
                                    <span className="font-display">December 2025</span>
                                    <div className="flex gap-2">
                                        <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center cursor-pointer">←</div>
                                        <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center cursor-pointer">→</div>
                                    </div>
                                </div>
                                <div className="grid grid-cols-7 gap-4 text-center mb-6">
                                    {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((day, i) => (
                                        <span key={i} className="text-[10px] text-white/50">{day}</span>
                                    ))}
                                    {Array.from({ length: 31 }).map((_, i) => (
                                        <div
                                            key={i}
                                            className={`h-8 w-full flex items-center justify-center rounded-lg text-xs cursor-pointer transition-colors ${i + 1 === 27 ? 'bg-gold-500 text-navy-900 font-bold' : 'hover:bg-white/10'
                                                }`}
                                        >
                                            {i + 1}
                                        </div>
                                    ))}
                                </div>
                                <div className="space-y-4">
                                    <div className="flex justify-between items-center text-xs p-3 bg-white/5 rounded-xl border border-white/5">
                                        <div className="flex gap-3 items-center">
                                            <div className="w-2 h-2 rounded-full bg-red-400" />
                                            <span>09:00 - 11:00 Executive Boardroom</span>
                                        </div>
                                        <span className="text-white/40">Booked</span>
                                    </div>
                                    <div className="flex justify-between items-center text-xs p-3 bg-green-500/20 rounded-xl border border-green-500/20">
                                        <div className="flex gap-3 items-center">
                                            <div className="w-2 h-2 rounded-full bg-green-400" />
                                            <span>13:00 - 15:00 Training Suite</span>
                                        </div>
                                        <span className="text-green-400">Available</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Decoration */}
                <div className="absolute top-1/2 left-0 w-full h-full pointer-events-none">
                    <div className="absolute -top-1/4 -right-1/4 w-1/2 h-1/2 bg-gold-500/10 blur-[120px] rounded-full" />
                </div>
            </section>

            <PricingTable
                plans={pricingPlans}
                title="Simple Room Rates"
                subtitle="Transparent pricing with no setup fees or hidden charges."
            />

            <CTASection />
        </div>
    );
};

export default MeetingRoomsPage;
