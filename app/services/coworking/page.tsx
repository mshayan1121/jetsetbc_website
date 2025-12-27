"use client";

import React from "react";
import ServiceHero from "@/components/sections/ServiceHero";
import PricingTable from "@/components/sections/PricingTable";
import FeaturesList from "@/components/sections/FeaturesList";
import CTASection from "@/components/sections/CTASection";
import {
    Wifi,
    Coffee,
    Users,
    Printer,
    Zap,
    Globe,
    Briefcase,
    Heart,
    Rocket
} from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Card } from "@/components/ui/Card";

const CoworkingPage = () => {
    const amenities = [
        {
            title: "Ultra-Fast WiFi",
            description: "Synchronous high-speed connection for seamless video calls and heavy uploads.",
            icon: Wifi,
        },
        {
            title: "Artisan Coffee",
            description: "Bottomless specialty coffee, tea, and infused water to keep you fueled.",
            icon: Coffee,
        },
        {
            title: "Business Support",
            description: "Access to professional printing, scanning, and technical assistance.",
            icon: Printer,
        },
        {
            title: "Global Community",
            description: "Network with local and international professionals in regular social events.",
            icon: Users,
        },
        {
            title: "Dynamic Workspace",
            description: "Ergonomic seating and diverse work zones for every mood.",
            icon: Zap,
        },
        {
            title: "Prestigious Address",
            description: "Use our business address for your professional correspondence.",
            icon: Globe,
        },
    ];

    const pricingPlans = [
        {
            name: "Day Pass",
            price: "AED 150",
            period: "/day",
            description: "Flexible access for digital nomads and travelers visiting Dubai.",
            features: [
                "Hot desk access",
                "High-speed WiFi",
                "Unlimited refreshments",
                "9 AM - 6 PM access",
                "Communal lockers"
            ]
        },
        {
            name: "Hot Desk",
            price: "AED 1,800",
            period: "/month",
            description: "The ideal balance of flexibility and community for solo professionals.",
            features: [
                "Any desk in common area",
                "24/7 building access",
                "Business address",
                "AED 200 print credit",
                "2 hours meeting room/mo"
            ],
            isPopular: true
        },
        {
            name: "Dedicated Desk",
            price: "AED 2,500",
            period: "/month",
            description: "Your own permanent spot with added privacy and security.",
            features: [
                "Fixed desk with locker",
                "Ergonomic chair",
                "Professional mail handling",
                "AED 500 print credit",
                "5 hours meeting room/mo"
            ]
        }
    ];

    const communityBenefits = [
        {
            title: "Regular Networking",
            description: "Weekly mixers and industry-specific workshops to help you grow your circle.",
            icon: Briefcase
        },
        {
            title: "Lounge Areas",
            description: "Sophisticated chill-out zones designed for informal meetings and relaxation.",
            icon: Heart
        },
        {
            title: "Growth Support",
            description: "Partnerships with local services to provide discounted business consulting.",
            icon: Rocket
        }
    ];

    return (
        <div className="flex flex-col">
            <ServiceHero
                title="Dynamic Coworking Spaces"
                subtitle="Collaborate & Grow"
                description="Join an elite community of entrepreneurs and innovators in Dubai's most inspiring shared workspace environment."
                image="/images/services/coworking.png"
                ctaText="Join Now"
                secondaryCtaText="Explore Plans"
            />

            <FeaturesList
                title="Designed for Productivity"
                subtitle="Maximize your output with premium amenities and a supportive environment."
                features={amenities}
            />

            {/* Community Section */}
            <section className="py-24 bg-cream-50">
                <div className="container-custom">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="lg:w-1/2">
                            <h2 className="text-3xl md:text-5xl font-display text-navy-900 mb-8">More Than Just a Desk</h2>
                            <div className="space-y-8">
                                {communityBenefits.map((benefit, idx) => (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: idx * 0.1 }}
                                        viewport={{ once: true }}
                                        className="flex gap-6"
                                    >
                                        <div className="shrink-0 w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center">
                                            <benefit.icon className="w-6 h-6 text-gold-500" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-display text-navy-900 mb-2">{benefit.title}</h3>
                                            <p className="text-navy-600 leading-relaxed">{benefit.description}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                        <div className="lg:w-1/2 relative h-[500px] w-full rounded-[40px] overflow-hidden shadow-2xl">
                            <Image
                                src="/images/services/coworking.png"
                                alt="Community Events"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <PricingTable
                plans={pricingPlans}
                title="Membership Options"
                subtitle="Choose the level of access that matches your lifestyle and business needs."
            />

            {/* Comparison Table (Visual Representation) */}
            <section className="py-24 bg-white">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-display text-navy-900 mb-4">Membership Comparison</h2>
                        <p className="text-navy-600">Find the right fit for your workflow</p>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse min-w-[600px]">
                            <thead>
                                <tr className="border-b border-navy-100 italic">
                                    <th className="py-6 font-display text-navy-900">Features</th>
                                    <th className="py-6 font-display text-navy-900 text-center">Day Pass</th>
                                    <th className="py-6 font-display text-navy-900 text-center text-gold-500">Hot Desk</th>
                                    <th className="py-6 font-display text-navy-900 text-center">Dedicated Desk</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    { feature: "Access Hours", day: "9 AM - 6 PM", hot: "24/7", ded: "24/7" },
                                    { feature: "Business Address", day: "No", hot: "Yes", ded: "Yes" },
                                    { feature: "Meeting Room Credits", day: "None", hot: "2 hrs/mo", ded: "5 hrs/mo" },
                                    { feature: "Mail Handling", day: "No", hot: "No", ded: "Yes" },
                                    { feature: "Lockers", day: "Communal", hot: "Available", ded: "Included" }
                                ].map((row, idx) => (
                                    <tr key={idx} className="border-b border-navy-50">
                                        <td className="py-6 font-medium text-navy-700">{row.feature}</td>
                                        <td className="py-6 text-center text-navy-500">{row.day}</td>
                                        <td className="py-6 text-center text-navy-800 bg-gold-50/30">{row.hot}</td>
                                        <td className="py-6 text-center text-navy-500">{row.ded}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            <CTASection />
        </div>
    );
};

export default CoworkingPage;
