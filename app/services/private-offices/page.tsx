"use client";

import React from "react";
import ServiceHero from "@/components/sections/ServiceHero";
import PricingTable from "@/components/sections/PricingTable";
import FeaturesList from "@/components/sections/FeaturesList";
import CTASection from "@/components/sections/CTASection";
import {
    Shield,
    Coffee,
    Wifi,
    Users,
    Clock,
    Zap,
    Maximize,
    Wind,
    Sun,
    Lock
} from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/Button";

const PrivateOfficesPage = () => {
    const features = [
        {
            title: "Fully Furnished",
            description: "High-end ergonomic furniture and premium finishes ready for your team.",
            icon: Shield,
        },
        {
            title: "24/7 Access",
            description: "Work on your terms with secure, round-the-clock access to your office.",
            icon: Clock,
        },
        {
            title: "High-Speed Internet",
            description: "Enterprise-grade fiber optic internet with redundant backup systems.",
            icon: Wifi,
        },
        {
            title: "Reception Support",
            description: "Dedicated front-desk team to handle your mail and welcome your guests.",
            icon: Users,
        },
        {
            title: "Refreshments",
            description: "Unlimited premium coffee, tea, and filtered water for you and your guests.",
            icon: Coffee,
        },
        {
            title: "Daily Cleaning",
            description: "Professional housekeeping services to keep your workspace pristine.",
            icon: Zap,
        },
    ];

    const pricingPlans = [
        {
            name: "Standard Office",
            price: "AED 5,000",
            period: "/month",
            description: "Perfect for startups and small teams looking for a professional base.",
            features: [
                "Accommodates 1-2 people",
                "Fully furnished",
                "Utilities included",
                "Mail handling",
                "5 hours meeting room/mo"
            ]
        },
        {
            name: "Executive Suite",
            price: "AED 9,500",
            period: "/month",
            description: "Spacious offices with premium views for growing businesses.",
            features: [
                "Accommodates 3-5 people",
                "Herman Miller furniture",
                "Burj Khalifa views",
                "Dedicated phone line",
                "15 hours meeting room/mo"
            ],
            isPopular: true
        },
        {
            name: "Corporate Floor",
            price: "Custom",
            period: "",
            description: "Entire wings or floors tailored to your enterprise requirements.",
            features: [
                "10+ people capacity",
                "Custom layout options",
                "Private server room",
                "Dedicated account manager",
                "Unlimited meeting room use"
            ]
        }
    ];

    const officeTypes = [
        {
            title: "Inner Offices",
            description: "Quiet, focused workspaces located in the interior of the building. Perfect for teams that prioritize concentration and value.",
            image: "/images/services/private-office.png", // Reusing for now
            benefits: ["Exceptional Value", "Distraction-Free", "Full Amenities Access"]
        },
        {
            title: "Outer Offices (Window)",
            description: "Bright, inspiring offices with floor-to-ceiling windows. Enjoy natural light and stunning views of the Dubai skyline.",
            image: "/images/services/private-office.png", // Reusing for now
            benefits: ["Natural Light", "Iconic City Views", "Spacious Feel"]
        }
    ];

    return (
        <div className="flex flex-col">
            <ServiceHero
                title="Premium Private Offices"
                subtitle="Your Exclusive Workspace"
                description="Secure, fully-furnished office suites designed for teams that value privacy, productivity, and professional prestige in Dubai's Business Bay."
                image="/images/services/private-office.png"
            />

            <FeaturesList
                title="Everything Included"
                subtitle="Focus on your business while we take care of the rest."
                features={features}
            />

            {/* Office Types Section */}
            <section className="py-24 bg-navy-900 text-white">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-display mb-4">Choose Your View</h2>
                        <p className="text-cream-200/60 max-w-2xl mx-auto">Different layouts designed to match your specific work style.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {officeTypes.map((type, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: idx === 0 ? -20 : 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                                viewport={{ once: true }}
                                className="group"
                            >
                                <div className="relative h-80 mb-8 overflow-hidden rounded-2xl">
                                    <Image
                                        src={type.image}
                                        alt={type.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-navy-900/40 group-hover:bg-navy-900/20 transition-colors duration-300" />
                                </div>
                                <h3 className="text-2xl font-display mb-4 text-gold-500">{type.title}</h3>
                                <p className="text-cream-100/80 mb-6 leading-relaxed">{type.description}</p>
                                <ul className="space-y-3">
                                    {type.benefits.map((benefit, bIdx) => (
                                        <li key={bIdx} className="flex items-center gap-3">
                                            <div className="w-1.5 h-1.5 rounded-full bg-gold-500" />
                                            <span className="text-cream-100 text-sm font-accent uppercase tracking-wider">{benefit}</span>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Virtual Tour Section Placeholder */}
            <section className="py-24 bg-white">
                <div className="container-custom">
                    <div className="bg-navy-50 rounded-[40px] overflow-hidden flex flex-col lg:flex-row">
                        <div className="lg:w-1/2 p-12 lg:p-24 flex flex-col justify-center">
                            <h2 className="text-3xl md:text-5xl font-display text-navy-900 mb-6">Experience It Virtually</h2>
                            <p className="text-navy-600 mb-10 leading-relaxed text-lg">
                                Take a 360° tour of our premium suites and common areas from the comfort of your office. See why Jetset is the preferred choice for Dubai's top enterprises.
                            </p>
                            <Button variant="outline" size="lg" className="w-fit">
                                Start Virtual Tour
                            </Button>
                        </div>
                        <div className="lg:w-1/2 relative min-h-[400px]">
                            <Image
                                src="/images/hero-bg.png"
                                alt="Virtual Tour Preview"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <motion.div
                                    animate={{ scale: [1, 1.1, 1] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                    className="w-20 h-20 bg-gold-500 rounded-full flex items-center justify-center cursor-pointer shadow-2xl"
                                >
                                    <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[18px] border-l-white border-b-[10px] border-b-transparent ml-1" />
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <PricingTable
                plans={pricingPlans}
                title="Flexible Office Solutions"
                subtitle="All-inclusive pricing with no hidden costs. Scale your business as you grow."
            />

            <CTASection />
        </div>
    );
};

export default PrivateOfficesPage;
