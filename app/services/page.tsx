"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import {
    ArrowRight,
    Check,
    Wifi,
    Clock,
    Zap,
    Sparkles,
    Phone,
    Coffee,
    Mail,
    Printer,
    CalendarDays,
    UtensilsCrossed
} from "lucide-react";
import WorkspaceGrid from "@/components/sections/WorkspaceGrid";
import CTASection from "@/components/sections/CTASection";

const ServicesPage = () => {
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    const includedFeatures = [
        {
            icon: Wifi,
            title: "High-Speed Wi-Fi",
            description: "Enterprise-grade fiber connection with 99.9% uptime guarantee."
        },
        {
            icon: Clock,
            title: "24/7 Access",
            description: "Round-the-clock access to your workspace."
        },
        {
            icon: Zap,
            title: "Utilities Included",
            description: "Electricity, water, and cooling covered."
        },
        {
            icon: Sparkles,
            title: "Professional Cleaning",
            description: "Daily cleaning and maintenance services."
        },
        {
            icon: Phone,
            title: "Reception Services",
            description: "Professional call management and guest greeting."
        },
        {
            icon: Coffee,
            title: "Complimentary Beverages",
            description: "Unlimited tea, coffee, and water."
        },
        {
            icon: Mail,
            title: "Mail Handling",
            description: "Secure mail and package management."
        },
        {
            icon: Printer,
            title: "Printing & Scanning",
            description: "Free printing and scanning facilities."
        },
        {
            icon: UtensilsCrossed,
            title: "On-site Restaurant",
            description: "In-house dining with curated menu."
        }
    ];

    const comparisonFeatures = [
        { name: "Dedicated Space", privateOffice: true, coworking: true, meetingRoom: false, virtualEjari: false },
        { name: "24/7 Access", privateOffice: true, coworking: true, meetingRoom: false, virtualEjari: false },
        { name: "Business Address", privateOffice: true, coworking: false, meetingRoom: false, virtualEjari: true },
        { name: "Meeting Room Access", privateOffice: true, coworking: true, meetingRoom: true, virtualEjari: false },
        { name: "Printing/Scanning", privateOffice: true, coworking: true, meetingRoom: true, virtualEjari: false },
        { name: "Mail Handling", privateOffice: true, coworking: true, meetingRoom: false, virtualEjari: true },
        { name: "Receptionist Services", privateOffice: true, coworking: true, meetingRoom: false, virtualEjari: true },
        { name: "Minimum Contract", privateOffice: "3 months", coworking: "Daily", meetingRoom: "Hourly", virtualEjari: "1 year" }
    ];

    const usps = [
        "All-Inclusive Pricing",
        "Award-Winning Service",
        "Burj Khalifa Views",
        "Family-Run Excellence",
        "Hospitality-Grade Amenities",
        "Same-Day Tours"
    ];

    const faqs = [
        {
            id: "serviced-packages",
            question: "What is included in your serviced office packages?",
            answer: "Our serviced office packages include fully furnished workspaces, high-speed internet, utilities, cleaning, maintenance, reception services, and access to shared facilities such as meeting rooms and lounge areas."
        },
        {
            id: "transport-parking",
            question: "Is the location easily accessible by public transport and parking facilities?",
            answer: "Yes, our location in Prime Tower, Business Bay is easily accessible via the metro, with public and visitor parking available nearby."
        },
        {
            id: "private-vs-coworking",
            question: "What is the difference between private offices and coworking?",
            answer: "Private offices offer dedicated, enclosed spaces for teams, while coworking provides shared workspaces with flexible seating in a collaborative environment."
        },
        {
            id: "parking-available",
            question: "Is parking available at your location?",
            answer: "Yes, parking is available at Prime Tower, Business Bay."
        }
    ];

    return (
        <>
            {/* Hero Section */}
            <section className="relative bg-navy-900 min-h-[70vh] flex items-center justify-center overflow-hidden">
                {/* Background Image - wide-angle JBC interior */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/hero-bg.png"
                        alt="Jetset Business Center interior"
                        fill
                        className="object-cover"
                        priority
                        sizes="100vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-navy-900/80 via-navy-900/60 to-navy-900/90 z-[1]" />
                </div>
                {/* Background Texture */}
                <div
                    className="absolute inset-0 opacity-10 mix-blend-overlay z-[2]"
                    style={{
                        backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                        backgroundSize: '48px 48px'
                    }}
                />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <Badge className="mb-6" variant="gold">Our Services</Badge>
                        <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-white mb-6">
                            Your Workspace, Your Way
                        </h1>
                        <p className="font-body text-xl md:text-2xl text-cream-50 max-w-3xl mx-auto">
                            Stop settling for standard leases. Secure a serviced workspace tailored to your unique goals. Join Jetset Business Center today and experience business setup and office solutions simplified.
                        </p>
                    </motion.div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-gold-500/10 blur-[100px] z-[1]" />
                <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-teal-500/20 blur-[100px] z-[1]" />
            </section>

            {/* Services Overview Section */}
            <WorkspaceGrid className="bg-white" variant="services" />

            {/* What's Included Section */}
            <section className="bg-cream-50 py-24 md:py-32">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <h2 className="font-display text-4xl md:text-5xl text-navy-900 mb-4">
                            Everything You Need to Thrive
                        </h2>
                        <p className="font-body text-xl text-navy-700 max-w-2xl mx-auto">
                            Premium amenities designed to elevate your business experience
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {includedFeatures.map((feature, index) => (
                            <motion.div
                                key={feature.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.05 }}
                                whileHover={{ y: -6, boxShadow: "0 20px 40px -12px rgba(10, 24, 40, 0.2)" }}
                                className="group h-full rounded-2xl bg-white/90 border border-cream-200 shadow-sm transition-all duration-300 overflow-hidden"
                            >
                                <div className="p-8">
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="w-11 h-11 bg-gold-500/90 rounded-full flex items-center justify-center flex-shrink-0">
                                            <feature.icon className="w-5 h-5 text-navy-900" />
                                        </div>
                                        <h4 className="font-display text-xl md:text-2xl text-navy-900">{feature.title}</h4>
                                    </div>
                                    <p className="font-body text-navy-700 text-base md:text-lg leading-relaxed">
                                        {feature.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <div className="mt-12 flex justify-center">
                        <Button size="lg" asChild>
                            <Link href="/contact">Book a Tour</Link>
                        </Button>
                    </div>
                </div>
            </section>

            {/* Compare Services Section */}
            <section className="bg-white py-24 md:py-32">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <h2 className="font-display text-4xl md:text-5xl text-navy-900 mb-4">
                            Compare Our Services
                        </h2>
                        <p className="font-body text-xl text-navy-700 max-w-2xl mx-auto">
                            Find the perfect solution for your business needs
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="overflow-x-auto -mx-4 sm:-mx-6 lg:mx-0 px-4 sm:px-6 lg:px-0"
                    >
                        <table className="w-full border-collapse">
                            <thead className="bg-navy-900 text-white">
                                <tr>
                                    <th className="p-4 text-left font-display text-lg">Feature</th>
                                    <th className="p-4 text-center font-display text-lg relative border-l border-r border-gold-400/60 shadow-[inset_0_-2px_0_0_rgba(212,175,55,0.6)]">
                                        <div className="flex flex-col items-center gap-2">
                                            <span>Private Office</span>
                                            <span className="inline-flex items-center rounded-full bg-gold-500/90 px-2.5 py-0.5 text-[11px] font-semibold text-navy-900 tracking-wide">
                                                MOST POPULAR
                                            </span>
                                        </div>
                                    </th>
                                    <th className="p-4 text-center font-display text-lg">Coworking</th>
                                    <th className="p-4 text-center font-display text-lg">Meeting Rooms</th>
                                    <th className="p-4 text-center font-display text-lg">Virtual Ejari</th>
                                </tr>
                            </thead>
                            <tbody>
                                {comparisonFeatures.map((feature, index) => (
                                    <tr key={feature.name} className="border-b border-cream-200">
                                        <td className="p-4 font-body text-navy-900">{feature.name}</td>
                                        <td className="p-4 text-center bg-gold-500/5 border-l border-r border-gold-200">
                                            {typeof feature.privateOffice === 'boolean' ? (
                                                feature.privateOffice ? (
                                                    <span className="inline-flex items-center justify-center w-5 h-5">
                                                        <Check className="w-5 h-5 text-emerald-500" />
                                                    </span>
                                                ) : (
                                                    <span className="inline-flex items-center justify-center w-5 h-5 text-navy-300">—</span>
                                                )
                                            ) : (
                                                <span className="font-body text-navy-700">{feature.privateOffice}</span>
                                            )}
                                        </td>
                                        <td className="p-4 text-center">
                                            {typeof feature.coworking === 'boolean' ? (
                                                feature.coworking ? (
                                                    <span className="inline-flex items-center justify-center w-5 h-5">
                                                        <Check className="w-5 h-5 text-emerald-500" />
                                                    </span>
                                                ) : (
                                                    <span className="inline-flex items-center justify-center w-5 h-5 text-navy-300">—</span>
                                                )
                                            ) : (
                                                <span className="font-body text-navy-700">{feature.coworking}</span>
                                            )}
                                        </td>
                                        <td className="p-4 text-center">
                                            {typeof feature.meetingRoom === 'boolean' ? (
                                                feature.meetingRoom ? (
                                                    <span className="inline-flex items-center justify-center w-5 h-5">
                                                        <Check className="w-5 h-5 text-emerald-500" />
                                                    </span>
                                                ) : (
                                                    <span className="inline-flex items-center justify-center w-5 h-5 text-navy-300">—</span>
                                                )
                                            ) : (
                                                <span className="font-body text-navy-700">{feature.meetingRoom}</span>
                                            )}
                                        </td>
                                        <td className="p-4 text-center">
                                            {typeof feature.virtualEjari === 'boolean' ? (
                                                feature.virtualEjari ? (
                                                    <span className="inline-flex items-center justify-center w-5 h-5">
                                                        <Check className="w-5 h-5 text-emerald-500" />
                                                    </span>
                                                ) : (
                                                    <span className="inline-flex items-center justify-center w-5 h-5 text-navy-300">—</span>
                                                )
                                            ) : (
                                                <span className="font-body text-navy-700">{feature.virtualEjari}</span>
                                            )}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </motion.div>
                </div>
            </section>

            {/* Why Choose Jetset Section */}
            <section className="relative bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 py-24 md:py-32 overflow-hidden">
                {/* Background Texture */}
                <div
                    className="absolute inset-0 opacity-10 mix-blend-overlay z-0"
                    style={{
                        backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                        backgroundSize: '48px 48px'
                    }}
                />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Image - lifestyle photo with Burj Khalifa view + subtle gold glow */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative h-[500px] rounded-2xl overflow-hidden"
                        >
                            <Image
                                src="/images/services/private-office.png"
                                alt="Professional working at Jetset Business Center with Burj Khalifa view"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 to-transparent" />
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-gold-500/10 pointer-events-none" />
                            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-gold-500/15 to-transparent pointer-events-none" />
                        </motion.div>

                        {/* Content */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="font-display text-4xl md:text-5xl text-white mb-6">
                                Why Choose Jetset for Your Workspace?
                            </h2>
                            <p className="font-body text-xl text-cream-50 mb-8">
                                Experience the perfect blend of luxury, functionality, and hospitality
                            </p>

                            <ul className="space-y-4 list-none">
                                {[
                                    { bold: "All-Inclusive Pricing", desc: "No hidden fees." },
                                    { bold: "Award-Winning Hospitality", desc: "Service that feels like a 5-star hotel, not a standard office." },
                                    { bold: "Iconic Burj Khalifa Views", desc: "Work every day with Dubai's most famous landmark in sight." },
                                    { bold: "Family-Run Excellence", desc: "Personal dedication that corporate chains can't match." },
                                    { bold: "Hospitality-Grade Amenities", desc: "From artisan coffee to executive lounge access." },
                                    { bold: "Instant Same-Day Tours", desc: "Ready to move? We're ready to show you around today." },
                                ].map((item, index) => (
                                    <motion.li
                                        key={item.bold}
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                        className="flex items-start gap-4"
                                    >
                                        <div className="w-6 h-6 bg-gold-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                            <Check className="w-4 h-4 text-navy-900" />
                                        </div>
                                        <span className="font-body text-lg text-white">
                                            <strong className="font-semibold text-white">{item.bold}:</strong> {item.desc}
                                        </span>
                                    </motion.li>
                                ))}
                            </ul>

                            <div className="mt-10">
                                <Button variant="outline-light" size="lg" asChild>
                                    <Link href="/about">Discover Our Story</Link>
                                </Button>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-gold-500/10 blur-[100px] z-0" />
                <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-teal-500/20 blur-[100px] z-0" />
            </section>

            {/* FAQ Section */}
            <section id="faq" className="bg-cream-50 py-24 md:py-32 scroll-mt-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-10"
                    >
                        <h2 className="font-display text-4xl md:text-5xl text-navy-900 mb-4">
                            Frequently Asked Questions
                        </h2>
                        <p className="font-body text-xl text-navy-700">
                            Everything you need to know about our services
                        </p>
                    </motion.div>

                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <motion.div
                                key={faq.id}
                                id={`faq-${faq.id}`}
                                className="scroll-mt-24"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <Card
                                    className="cursor-pointer"
                                    hoverEffect={false}
                                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                                >
                                    <div className="flex items-center justify-between">
                                        <h3 className="font-display text-xl text-navy-900 pr-8">
                                            {faq.question}
                                        </h3>
                                        <motion.div
                                            animate={{ rotate: openFaq === index ? 180 : 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="flex-shrink-0"
                                        >
                                            <ArrowRight className="w-5 h-5 text-gold-500 transform rotate-90" />
                                        </motion.div>
                                    </div>

                                    <motion.div
                                        initial={false}
                                        animate={{
                                            height: openFaq === index ? "auto" : 0,
                                            opacity: openFaq === index ? 1 : 0
                                        }}
                                        transition={{ duration: 0.3 }}
                                        className="overflow-hidden"
                                    >
                                        <p className="font-body text-navy-700 mt-4 pt-4 border-t border-cream-200">
                                            {faq.answer}
                                        </p>
                                    </motion.div>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <CTASection />
        </>
    );
};

export default ServicesPage;
