"use client";

import React from "react";
import PricingTable from "@/components/sections/PricingTable";
import FeaturesList from "@/components/sections/FeaturesList";
import CTASection from "@/components/sections/CTASection";
import FAQ from "@/components/sections/FAQ";
import PageHero from "@/components/PageHero";
import { businessSetupFaqs } from "@/lib/faq-data";
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
import JsonLd from "@/components/seo/JsonLd";

const BusinessSetupPage = () => {
    const services = [
        {
            title: "Virtual Ejari",
            description: "Registered tenancy contract with unlimited inspections and same-day processing. Accepted by government authorities and banks.",
            icon: FileText,
        },
        {
            title: "Company Formation",
            description: "Step-by-step guidance for Mainland (100% foreign ownership where applicable) and Free Zone licenses. Includes Visa processing (Investor/Staff) and Corporate Bank Account opening support.",
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
            title: "Activity Selection",
            description: "Select from over 2,000 DED activities that best match your business model.",
            icon: Search
        },
        {
            title: "Trade Name",
            description: "We help you select and reserve a unique trade name that complies with UAE guidelines.",
            icon: Stamp
        },
        {
            title: "Initial Approval",
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
            name: "Virtual Ejari",
            price: "AED 8,500",
            period: "/year",
            description: "Registered tenancy contract accepted by government authorities and banks. Includes unlimited inspections and same-day processing.",
            features: [
                "AED 8,500 per annum",
                "Registered tenancy contract",
                "Unlimited inspections",
                "Same-day processing",
                "Government accepted",
                "Bank accepted",
                "Use Prime Tower address",
                "Legal domicile for license",
                "Compliance guaranteed"
            ],
            isPopular: true
        },
        {
            name: "Company Formation",
            price: "Contact",
            period: "for pricing",
            description: "Step-by-step guidance: Activity selection → Trade Name → Initial Approval → License Issuance.",
            features: [
                "Mainland & Free Zone licenses",
                "100% foreign ownership (where applicable)",
                "Trade name reservation",
                "Initial approval processing",
                "License issuance support",
                "Visa processing (Investor/Staff)",
                "Corporate Bank Account opening support",
                "Complete PRO services"
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
            <JsonLd
                includeLocalBusiness={false}
                schemas={{
                    "@context": "https://schema.org",
                    "@type": "Service",
                    name: "Business Setup Services",
                    provider: { "@id": "https://jetsetbc.com#localbusiness" },
                    areaServed: "Dubai, UAE",
                    url: "https://jetsetbc.com/services/business-setup",
                }}
            />
            <PageHero
                badge="Start Your Journey"
                title="Business Consultant Dubai"
                image="/images/services/business-setup.png"
                subtitle="Get business services Dubai founders rely on—end-to-end new company setup in Dubai with licensing guidance, PRO support, and compliance. We also help with virtual office Ejari Dubai, Ejari services, and Ejari registration online where applicable."
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

            {/* Ready to Submit */}
            <section className="py-24 bg-white relative overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/business-bay/dubai-business-bay-uae-5km-01.jpg"
                        alt="Business Bay skyline background"
                        fill
                        className="object-cover opacity-[0.06]"
                    />
                </div>
                <div className="container-custom relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-20">
                        <div className="lg:w-1/2">
                            <h2 className="text-3xl md:text-5xl font-display text-navy-900 mb-8">Ready to Submit?</h2>
                            <p className="text-navy-600 mb-10 text-lg">
                                To expedite your application, please ensure you have the following documents ready. Our team will review them for compliance before submission.
                            </p>
                            <div className="space-y-4 mb-10">
                                {requiredDocuments.map((doc, idx) => (
                                    <div key={idx} className="flex items-center gap-4 p-5 bg-navy-50/90 rounded-xl">
                                        <div className="w-7 h-7 rounded-full bg-gold-500/20 flex items-center justify-center shrink-0">
                                            <CheckCircle2 className="w-4 h-4 text-gold-500" />
                                        </div>
                                        <span className="text-navy-800 font-semibold text-lg md:text-xl">{doc}</span>
                                    </div>
                                ))}
                            </div>
                            <Button variant="outline" size="lg" className="flex gap-2 items-center">
                                Download Checklist <ArrowRight className="w-4 h-4" />
                            </Button>
                        </div>
                        <div className="lg:w-1/2 relative h-[600px] w-full bg-cream-50 rounded-3xl overflow-hidden shadow-lg">
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
                title="Transparent Service Pricing"
                subtitle="Upfront rates with zero hidden fees. Choose our standard Virtual Ejari plan or contact us for a tailored quote on comprehensive company formation."
                centerCards
                cardShadow
            />

            <section className="py-10 bg-cream-50">
                <div className="container-custom">
                    <div className="max-w-3xl mx-auto text-center">
                        <div className="inline-flex items-center justify-center px-6 py-4 rounded-2xl bg-white shadow-md shadow-navy-900/5 border border-gold-500/20">
                            <p className="text-navy-900 font-display text-lg md:text-2xl">
                                <span className="font-semibold text-gold-600">Over 200 international companies</span>{" "}
                                use Jetset for Ejari and business registration every year.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <FAQ faqs={businessSetupFaqs} title="Business Setup FAQs" />

            <CTASection />
        </div>
    );
};

export default BusinessSetupPage;
