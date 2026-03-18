"use client";

import React from "react";
import FeaturesList from "@/components/sections/FeaturesList";
import CTASection from "@/components/sections/CTASection";
import FAQ from "@/components/sections/FAQ";
import PageHero from "@/components/PageHero";
import { meetingRoomsFaqs } from "@/lib/faq-data";
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
import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
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
            name: "Standard Room",
            capacity: "6 Persons",
            description: "Perfect for team meetings and small group collaborations.",
            features: [
                "Smart TV for hybrid meetings",
                "High-speed secure Wi-Fi",
                "Professional boardroom setup",
                "Climate control"
            ],
            image: "/images/gallery/Conference Room.jpg"
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
            image: "/images/gallery/Conference Room(1).jpg"
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
            image: "/images/gallery/Majilis.jpg"
        }
    ];

    return (
        <div className="flex flex-col">
            <PageHero
                badge="Imperial Boardrooms"
                title="Meeting Room Rental Dubai"
                image="/images/services/Conference Room.jpg"
                subtitle="Book a meeting room rental Dubai teams trust—professional conference room rental Dubai options with modern AV. Host clients in a conference room Burj Khalifa Dubai views in Business Bay, with a meeting room Dubai affordable price for flexible bookings."
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
                                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                                className="group flex flex-col h-full bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-luxury-lg transition-all duration-300 hover:bg-gold-500"
                            >
                                <div className="relative h-64 overflow-hidden rounded-t-xl">
                                    <Image
                                        src={room.image}
                                        alt={room.name}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute top-4 left-4">
                                        <Badge className="bg-navy-900/90 backdrop-blur-sm text-white group-hover:bg-white/20 group-hover:text-white" icon={<Users className="w-4 h-4" />}>
                                            {room.capacity}
                                        </Badge>
                                    </div>
                                    <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-navy-900/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center">
                                        <Button variant="primary" size="sm" className="bg-gold-500 hover:bg-gold-600 text-navy-900 font-semibold" asChild>
                                            <Link href="/book-tour">BOOK NOW</Link>
                                        </Button>
                                    </div>
                                </div>
                                <div className="p-6 flex flex-col flex-grow transition-colors duration-300 group-hover:bg-gold-500 group-hover:text-white">
                                    <h3 className="font-display text-2xl text-navy-900 group-hover:text-white mb-3 transition-colors duration-300">{room.name}</h3>
                                    <p className="text-navy-700 group-hover:text-white/95 mb-6 leading-relaxed flex-grow transition-colors duration-300">{room.description}</p>
                                    <ul className="space-y-2 mb-6">
                                        {room.features.map((feature, fIdx) => (
                                            <li key={fIdx} className="flex items-start gap-2 text-navy-700 group-hover:text-white/95 transition-colors duration-300">
                                                <Check className="w-5 h-5 text-gold-500 group-hover:text-white flex-shrink-0 mt-0.5 transition-colors duration-300" />
                                                <span className="text-sm">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <Button variant="primary" className="w-full bg-gold-500 hover:bg-gold-600 text-navy-900 font-semibold mt-auto group-hover:bg-white group-hover:text-navy-900 transition-colors duration-300" asChild>
                                        <Link href="/book-tour">BOOK NOW</Link>
                                    </Button>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Member Benefit - gradient navy to gold */}
                    <div className="mt-12 rounded-2xl overflow-hidden bg-gradient-to-br from-navy-900 via-navy-800 to-gold-500/20 border border-gold-500/20 p-8 text-center">
                        <div className="flex items-center justify-center gap-3 mb-4">
                            <Clock className="w-6 h-6 text-gold-500" />
                            <h3 className="font-display text-2xl text-white">
                                Member Benefit
                            </h3>
                        </div>
                        <p className="text-lg text-white/95">
                            All members enjoy <span className="font-semibold text-gold-400">2 hours of complimentary meeting room access per day</span>
                        </p>
                    </div>
                </div>
            </section>

            <FeaturesList
                title="Advanced Technology"
                subtitle="Integrated solutions that make every meeting seamless and professional."
                features={techSpecs}
                className="pt-12 pb-24"
            />

            <FAQ faqs={meetingRoomsFaqs} title="Meeting Rooms FAQs" />

            <CTASection />
        </div>
    );
};

export default MeetingRoomsPage;
