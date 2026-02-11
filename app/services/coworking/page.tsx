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
                                src="/images/services/Co-working Area.jpg"
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
                title="Coworking Membership Options"
                subtitle="Flexible pricing to match your needs. All plans include access to hot desks, dedicated desks, and private cabins (subject to availability)."
            />

            {/* Comparison Table (Visual Representation) */}
            <section className="py-24 bg-white">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-display text-navy-900 mb-4">Membership Comparison</h2>
                        <p className="text-navy-600">Find the right fit for your workflow</p>
                    </div>

                    <div className="overflow-x-auto -mx-4 sm:-mx-6 lg:mx-0 px-4 sm:px-6 lg:px-0">
                        <table className="w-full text-left border-collapse min-w-[600px]">
                            <thead>
                                <tr className="border-b border-navy-100 italic">
                                    <th className="py-6 font-display text-navy-900">Features</th>
                                    <th className="py-6 font-display text-navy-900 text-center">Daily</th>
                                    <th className="py-6 font-display text-navy-900 text-center text-gold-500">Monthly</th>
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
                                ].map((row, idx) => (
                                    <tr key={idx} className="border-b border-navy-50">
                                        <td className="py-6 font-medium text-navy-700">{row.feature}</td>
                                        <td className="py-6 text-center text-navy-500">{row.daily}</td>
                                        <td className="py-6 text-center text-navy-800 bg-gold-50/30">{row.monthly}</td>
                                        <td className="py-6 text-center text-navy-500">{row.annual}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            <FAQ faqs={coworkingFaqs} title="Coworking FAQs" />

            <CTASection />
        </div>
    );
};

export default CoworkingPage;
