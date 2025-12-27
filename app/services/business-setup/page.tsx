"use client";

import React from "react";
import ServiceHero from "@/components/sections/ServiceHero";
import PricingTable from "@/components/sections/PricingTable";
import FeaturesList from "@/components/sections/FeaturesList";
import CTASection from "@/components/sections/CTASection";
import {
    FileText,
    Globe,
    Shield,
    CheckCircle2,
    Building2,
    UserCheck,
    ArrowRight,
    Search,
    Stamp,
    CreditCard
} from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

const BusinessSetupPage = () => {
    const services = [
        {
            title: "Virtual Ejari",
            description: "Legally compliant tenancy contracts for DED license applications and renewals.",
            icon: FileText,
        },
        {
            title: "Company Formation",
            description: "End-to-end support for Mainland, Free Zone, and Offshore setups.",
            icon: Building2,
        },
        {
            title: "PRO Services",
            description: "Handling of visa processing, Emirates ID, and all government liaison.",
            icon: UserCheck,
        },
        {
            title: "Trademark Registration",
            description: "Protecting your intellectual property and brand identity in the UAE.",
            icon: Shield,
        },
        {
            title: "Bank Account Opening",
            description: "Assistance with documentation and introductions to leading UAE banks.",
            icon: CreditCard,
        },
        {
            title: "Vat & Accounting",
            description: "Ongoing compliance support to keep your business running smoothly.",
            icon: Globe,
        },
    ];

    const steps = [
        {
            title: "Choosing Business Activity",
            description: "Select from over 2,000 DED activities that best match your business model.",
            icon: Search
        },
        {
            title: "Trade Name Reservation",
            description: "We help you select and reserve a unique name that complies with UAE guidelines.",
            icon: Stamp
        },
        {
            title: "Document Submission",
            description: "Drafting the MOA and submitting initial approval applications to authorities.",
            icon: FileText
        },
        {
            title: "License Issuance",
            description: "Finalizing the tenancy contract (Ejari) and receiving your trade license.",
            icon: CheckCircle2
        }
    ];

    const pricingPlans = [
        {
            name: "Virtual Office (Ejari)",
            price: "AED 3,500",
            period: "/year",
            description: "Required for DED license renewal or new company registration without physical space.",
            features: [
                "Official Tenancy Contract",
                "DED Approved Address",
                "Mail Management",
                "4 Hours meeting room access",
                "Inspection assistance"
            ]
        },
        {
            name: "Mainland Setup",
            price: "AED 12,000",
            period: "+ govt fees",
            description: "Complete mainland company formation with dedicated PRO support.",
            features: [
                "Name Reservation",
                "Initial Approval",
                "MOA Drafting",
                "Virtual Ejari included",
                "Bank assistance"
            ],
            isPopular: true
        },
        {
            name: "Free Zone Package",
            price: "AED 15,000",
            period: "/inclusive",
            description: "Fast-track your business in Dubai's most prestigious free zones.",
            features: [
                "100% Ownership",
                "Tax Exemptions",
                "Visa processing",
                "Digital license",
                "Shared desk access"
            ]
        }
    ];

    const requiredDocuments = [
        "Passport copy (valid for 6+ months)",
        "Entry stamp or visa copy",
        "3 Trade name options",
        "Business activity details",
        "Emirates ID (if resident)"
    ];

    return (
        <div className="flex flex-col">
            <ServiceHero
                title="Business Setup & Formation"
                subtitle="Start Your Journey"
                description="Navigate the UAE's regulatory landscape with ease. We provide comprehensive solutions for company formation, licensing, and compliance."
                image="/images/services/business-setup.png"
                ctaText="Start Now"
                secondaryCtaText="View Packages"
            />

            <FeaturesList
                title="Tailored Solutions"
                subtitle="Everything you need to establish and grow your business in Dubai."
                features={services}
            />

            {/* Step by Step Guide */}
            <section className="py-24 bg-navy-900 text-white overflow-hidden">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-display mb-4">Launch in 4 Simple Steps</h2>
                        <p className="text-cream-200/60 max-w-2xl mx-auto">Our streamlined process takes you from idea to fully operational in record time.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
                        {/* Connecting Line (Desktop) */}
                        <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-gold-500/20 -translate-y-1/2 z-0" />

                        {steps.map((step, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                viewport={{ once: true }}
                                className="relative z-10 bg-navy-800 p-8 rounded-3xl border border-white/10 hover:border-gold-500/50 transition-colors group"
                            >
                                <div className="w-12 h-12 bg-gold-500 rounded-2xl flex items-center justify-center mb-6 text-navy-900 font-bold group-hover:scale-110 transition-transform">
                                    {idx + 1}
                                </div>
                                <h3 className="text-xl font-display mb-4 text-white">{step.title}</h3>
                                <p className="text-cream-100/70 text-sm leading-relaxed">{step.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Documents Section */}
            <section className="py-24 bg-white">
                <div className="container-custom">
                    <div className="flex flex-col lg:flex-row items-center gap-20">
                        <div className="lg:w-1/2">
                            <h2 className="text-3xl md:text-5xl font-display text-navy-900 mb-8">Ready to Submit?</h2>
                            <p className="text-navy-600 mb-10 text-lg">
                                To expedite your application, please ensure you have the following documents ready. Our team will review them for compliance before submission.
                            </p>
                            <div className="space-y-4 mb-10">
                                {requiredDocuments.map((doc, idx) => (
                                    <div key={idx} className="flex items-center gap-4 p-4 bg-navy-50 rounded-xl">
                                        <div className="w-6 h-6 rounded-full bg-gold-500/20 flex items-center justify-center">
                                            <CheckCircle2 className="w-4 h-4 text-gold-500" />
                                        </div>
                                        <span className="text-navy-800 font-medium">{doc}</span>
                                    </div>
                                ))}
                            </div>
                            <Button variant="outline" size="lg" className="flex gap-2 items-center">
                                Download Checklist <ArrowRight className="w-4 h-4" />
                            </Button>
                        </div>
                        <div className="lg:w-1/2 relative h-[600px] w-full bg-cream-50 rounded-[40px] overflow-hidden">
                            <Image
                                src="/images/services/business-setup.png"
                                alt="Documentation Review"
                                fill
                                className="object-cover"
                            />
                            {/* Floating Card */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                className="absolute bottom-8 right-8 bg-white p-6 rounded-2xl shadow-2xl max-w-xs border border-navy-50"
                            >
                                <p className="text-navy-900 font-display italic mb-2">"Jetset made my Dubai mainland setup seamless. I had my license in 3 days!"</p>
                                <p className="text-gold-500 text-sm font-accent uppercase">— Sarah J., Tech founder</p>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            <PricingTable
                plans={pricingPlans}
                title="Transparent Setup Fees"
                subtitle="Clear pricing structures designed to help you budget with confidence."
            />

            <CTASection />
        </div>
    );
};

export default BusinessSetupPage;
