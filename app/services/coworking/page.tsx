"use client";

import React from "react";
import ServiceHero from "@/components/sections/ServiceHero";
import PricingTable from "@/components/sections/PricingTable";
import FeaturesList from "@/components/sections/FeaturesList";
import CTASection from "@/components/sections/CTASection";
import FAQ from "@/components/sections/FAQ";
import { coworkingFaqs } from "@/lib/faq-data";
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
            name: "Daily Pass",
            price: "AED 80",
            period: "/day",
            description: "Pay-as-you-go flexibility for visiting professionals.",
            features: [
                "Hot desk access",
                "High-speed WiFi",
                "Complimentary beverages",
                "Access from 9AM - 6PM",
                "Community events access"
            ]
        },
        {
            name: "Monthly Membership",
            price: "AED 1,800",
            period: "/month",
            description: "Perfect balance of flexibility and value for regular professionals.",
            features: [
                "Hot Desks available",
                "24/7 access",
                "High-speed Wi-Fi",
                "Complimentary beverages",
                "2 hours meeting room access/day",
                "Community events",
                "Printing included"
            ],
            isPopular: true
        },
        {
            name: "Annual Membership",
            price: "AED 18,000",
            period: "/year",
            description: "Best value with maximum savings for committed professionals.",
            features: [
                "All Monthly benefits",
                "Save 17% vs monthly",
                "Priority meeting bookings",
                "Dedicated Desks available",
                "Private Cabins available",
                "Business address included",
                "Priority support"
            ]
        }
    ];

    const communityBenefits = [
        {
            title: "Strategic Networking",
            description: "Weekly mixers and workshops designed to connect you with Dubai's top entrepreneurs.",
            icon: Briefcase
        },
        {
            title: "Lounge Zones",
            description: "Premium chill-out areas perfect for impressive informal meetings and relaxation.",
            icon: Heart
        },
        {
            title: "Growth Support",
            description: "Exclusive local partnerships that provide discounted business consulting and setup services.",
            icon: Rocket
        },
        {
            title: "Iconic Business Bay Address",
            description: "Instantly elevate your brand by hosting clients in a space with world-class views.",
            icon: Globe
        }
    ];

    return (
        <div className="flex flex-col">
            <ServiceHero
                title="Modern Shared Workspaces"
                subtitle="Collaborate & Grow"
                description="Join a community of innovators, entrepreneurs, and industry leaders in Dubai's vibrant coworking spaces."
                image="/images/services/Co-working Area.jpg"
                ctaText="View Coworking Plans"
                secondaryCtaText="Explore Plans"
            />

            <FeaturesList
                title="Designed for Productivity"
                subtitle="Maximize your output with premium amenities and a supportive environment."
                features={amenities}
            />

            {/* More Than Just a Desk - center-shot wide-angle coworking */}
            <section className="py-24 bg-cream-50">
                <div className="container-custom">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="lg:w-1/2 order-2 lg:order-1">
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
                        <div className="lg:w-1/2 relative h-[400px] lg:h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl order-1 lg:order-2">
                            <Image
                                src="/images/gallery/Co-working(1).jpg"
                                alt="Coworking area center-shot - collaborative workspace at Jetset Business Center"
                                fill
                                className="object-cover object-center"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <PricingTable
                plans={pricingPlans}
                title="Coworking Membership Options"
                subtitle="Flexible pricing to match your needs. All plans include access to hot desks, dedicated desks, and private cabins (subject to availability)."
            />

            {/* Membership Comparison Table */}
            <section className="py-24 bg-white">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-display text-navy-900 mb-4">Membership Comparison</h2>
                        <p className="text-navy-600">Find the right fit for your workflow</p>
                    </div>

                    <div className="overflow-x-auto -mx-4 sm:-mx-6 lg:mx-0 px-4 sm:px-6 lg:px-0">
                        <table className="w-full text-left border-collapse min-w-[600px]">
                            <thead>
                                <tr className="border-b border-navy-100">
                                    <th className="py-6 font-display text-[#0A1828]">Features</th>
                                    <th className="py-6 font-display text-navy-900 text-center">Daily</th>
                                    <th className="py-6 font-display text-navy-900 text-center relative">
                                        <span className="inline-block">Monthly</span>
                                        <span className="absolute -top-1 left-1/2 -translate-x-1/2 inline-flex items-center rounded-full bg-[#D4AF37] px-2.5 py-0.5 text-[10px] font-semibold text-navy-900 tracking-wide whitespace-nowrap">Most Popular</span>
                                    </th>
                                    <th className="py-6 font-display text-navy-900 text-center">Annual</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    { feature: "Access Hours", daily: "9 AM - 6 PM", monthly: "24/7", annual: "24/7" },
                                    { feature: "Desk Options", daily: "Hot Desks", monthly: "Hot, Dedicated, Private", annual: "Hot, Dedicated, Private" },
                                    { feature: "Meeting Room Access", daily: "None", monthly: "2 hrs/day", annual: "2 hrs/day" },
                                    { feature: "Business Address", daily: "No", monthly: "Available", annual: "Included" },
                                    { feature: "Complimentary Beverages", daily: "Yes", monthly: "Yes", annual: "Yes" }
                                ].map((row, idx) => {
                                    const isPositive = (val: string) => ["Yes", "Included", "24/7", "Hot, Dedicated, Private", "2 hrs/day", "Available"].includes(val);
                                    return (
                                        <tr key={idx} className="border-b border-navy-50">
                                            <td className="py-6 font-semibold text-[#0A1828]">{row.feature}</td>
                                            <td className="py-6 text-center bg-gold-50/20">
                                                {isPositive(row.daily) ? <span className="text-[#D4AF37] font-semibold">{row.daily === "Yes" ? "Included" : row.daily}</span> : <span className="text-navy-700">{row.daily}</span>}
                                            </td>
                                            <td className="py-6 text-center bg-gold-50/30">
                                                {isPositive(row.monthly) ? <span className="text-[#D4AF37] font-semibold">{row.monthly === "Yes" ? "Included" : row.monthly}</span> : <span className="text-navy-700">{row.monthly}</span>}
                                            </td>
                                            <td className="py-6 text-center">
                                                {isPositive(row.annual) ? <span className="text-[#D4AF37] font-semibold">{row.annual === "Yes" ? "Included" : row.annual}</span> : <span className="text-navy-700">{row.annual}</span>}
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>

                    <div className="mt-10 w-full bg-gradient-to-r from-[#0A1828] via-[#0A1828] to-[#D4AF37]/90 py-6 px-6 rounded-xl text-center border-2 border-[#D4AF37]/30">
                        <p className="text-white font-bold text-lg md:text-xl">
                            Join a community of 300+ active members from tech, finance, consulting, and creative industries.
                        </p>
                    </div>
                </div>
            </section>

            <FAQ faqs={coworkingFaqs} title="Coworking FAQs" />

            <CTASection />
        </div>
    );
};

export default CoworkingPage;
