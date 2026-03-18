"use client";

import React from "react";
import ServiceHero from "@/components/sections/ServiceHero";
import PricingTable from "@/components/sections/PricingTable";
import FeaturesList from "@/components/sections/FeaturesList";
import CTASection from "@/components/sections/CTASection";
import FAQ from "@/components/sections/FAQ";
import { privateOfficeFaqs } from "@/lib/faq-data";
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
            name: "Private Offices",
            price: "From AED 50,000",
            period: "/year",
            description: "Fully furnished, move-in-ready suites for privacy and prestige. Starting price for Inner Offices.",
            features: [
                "Starts at AED 50,000 per annum",
                "Minimum 3 months lease",
                "Inner & Outer office configurations",
                "Floor-to-ceiling windows (Outer)",
                "Burj Khalifa views (Outer)",
                "Utilities included",
                "24/7 access",
                "Front desk support",
                "Cleaning services",
                "High-end custom furniture"
            ],
            isPopular: true
        }
    ];

    const officeTypes = [
        {
            title: "Inner Offices",
            description: "Quiet, focused workspaces located in the interior of the building. Perfect for teams that prioritize concentration and value.",
            image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop",
            benefits: ["Exceptional Value", "Distraction-Free", "Full Amenities Access"]
        },
        {
            title: "Outer Offices (Window)",
            description: "Bright, inspiring offices with floor-to-ceiling windows. Enjoy natural light and stunning views of the Dubai skyline.",
            image: "https://images.unsplash.com/photo-1669463829104-14cbc0058a90?w=800&h=600&fit=crop",
            benefits: ["Natural Light", "Iconic City Views", "Spacious Feel"]
        }
    ];

    return (
        <div className="flex flex-col">
            <ServiceHero
                title="Office Space for Rent Dubai"
                subtitle="Your Exclusive Workspace"
                description="Work from a premium work space Dubai teams can rely on—private, fully furnished office space in Dubai designed for focus and growth. Choose an ideal working space Dubai companies love in Business Bay, with flexible terms and Burj Khalifa views available."
                image="/images/services/private-office.png"
                ctaText="Book a Tour"
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

            <PricingTable
                plans={pricingPlans}
                title="Private Office Pricing"
                subtitle="All-inclusive pricing with no hidden costs. Starting price for Inner Offices. Outer Offices with Burj Khalifa views available at custom pricing."
            />

            <FAQ faqs={privateOfficeFaqs} title="Private Office FAQs" />

            <CTASection />
        </div>
    );
};

export default PrivateOfficesPage;
