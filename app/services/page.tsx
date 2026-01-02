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
    Building2,
    Users,
    Presentation,
    FileCheck,
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
import CTASection from "@/components/sections/CTASection";

const ServicesPage = () => {
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    const services = [
        {
            id: "private-offices",
            icon: Building2,
            title: "Private Offices",
            description: "Fully furnished, move-in ready suites with panoramic Burj Khalifa views and 24/7 access.",
            price: "From AED 50,000/year",
            image: "/images/private-office.jpg",
            link: "/services/private-offices"
        },
        {
            id: "coworking",
            icon: Users,
            title: "Coworking Spaces",
            description: "Flexible desks in a vibrant professional community with all amenities included.",
            price: "From AED 80/day",
            image: "/images/coworking.jpg",
            link: "/services/coworking"
        },
        {
            id: "meeting-rooms",
            icon: Presentation,
            title: "Meeting Rooms",
            description: "High-tech conference facilities with AV equipment, whiteboards, and catering options.",
            price: "2 hours free daily",
            image: "/images/meeting-room.jpg",
            link: "/services/meeting-rooms"
        },
        {
            id: "business-setup",
            icon: FileCheck,
            title: "Business Setup Services",
            description: "Complete business formation, licensing, Virtual Ejari, and visa support services.",
            price: "Contact for pricing",
            image: "/images/business-setup.jpg",
            link: "/services/business-setup"
        }
    ];

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
            icon: CalendarDays,
            title: "Community Events",
            description: "Networking events and professional development."
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
            question: "Can I upgrade from coworking to a private office?",
            answer: "Yes! You can upgrade anytime. We'll prorate the difference and make the transition seamless."
        },
        {
            question: "What's the minimum contract period?",
            answer: "Private offices: 3 months. Coworking: Daily, monthly, or annual options. Meeting rooms: Book by the hour."
        },
        {
            question: "Are utilities included in the price?",
            answer: "Absolutely. All our prices include electricity, water, Wi-Fi, cleaning, and complimentary beverages."
        },
        {
            question: "Can I use your address for my business license?",
            answer: "Yes, with our Virtual Ejari service at AED 8,500/year, you get a registered tenancy contract accepted by government authorities and banks."
        },
        {
            question: "Do you help with business setup?",
            answer: "Yes! We provide complete support for company formation, licensing, visas, and bank account opening."
        }
    ];

    return (
        <>
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 min-h-[70vh] flex items-center justify-center overflow-hidden">
                {/* Background Texture */}
                <div
                    className="absolute inset-0 opacity-10 mix-blend-overlay"
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
                            Flexible solutions designed for modern businesses. From private offices
                            to complete business setup support.
                        </p>
                    </motion.div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-gold-500/10 blur-[100px]" />
                <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-teal-500/20 blur-[100px]" />
            </section>

            {/* Services Overview Section */}
            <section className="bg-white py-24 md:py-32">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {services.map((service, index) => (
                            <motion.div
                                key={service.id}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                            >
                                <Link href={service.link}>
                                    <Card className="group cursor-pointer h-full" padding="none" hoverEffect={true}>
                                        <div className="relative h-64 overflow-hidden rounded-t-xl">
                                            <Image
                                                src={service.image}
                                                alt={service.title}
                                                fill
                                                className="object-cover group-hover:scale-105 transition-transform duration-400"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 to-transparent" />
                                            <div className="absolute top-4 left-4">
                                                <div className="w-12 h-12 bg-gold-500 rounded-full flex items-center justify-center">
                                                    <service.icon className="w-6 h-6 text-navy-900" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="p-6">
                                            <h3 className="font-display text-2xl text-navy-900 mb-3">{service.title}</h3>
                                            <p className="font-body text-navy-700 mb-4">
                                                {service.description}
                                            </p>
                                            <div className="flex items-center justify-between">
                                                <span className="font-accent text-gold-500 text-lg">{service.price}</span>
                                                <ArrowRight className="w-5 h-5 text-gold-500 group-hover:translate-x-2 transition-transform" />
                                            </div>
                                        </div>
                                    </Card>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

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
                            What's Included in All Services
                        </h2>
                        <p className="font-body text-xl text-navy-700 max-w-2xl mx-auto">
                            Premium amenities designed to elevate your business experience
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        {includedFeatures.map((feature, index) => (
                            <motion.div
                                key={feature.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.05 }}
                                className="flex items-start gap-4"
                            >
                                <div className="w-8 h-8 bg-gold-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                    <feature.icon className="w-4 h-4 text-navy-900" />
                                </div>
                                <div>
                                    <h4 className="font-display text-xl text-navy-900 mb-2">{feature.title}</h4>
                                    <p className="font-body text-navy-700">
                                        {feature.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
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
                                    <th className="p-4 text-center font-display text-lg">Private Office</th>
                                    <th className="p-4 text-center font-display text-lg">Coworking</th>
                                    <th className="p-4 text-center font-display text-lg">Meeting Rooms</th>
                                    <th className="p-4 text-center font-display text-lg">Virtual Ejari</th>
                                </tr>
                            </thead>
                            <tbody>
                                {comparisonFeatures.map((feature, index) => (
                                    <tr key={feature.name} className="border-b border-cream-200">
                                        <td className="p-4 font-body text-navy-900">{feature.name}</td>
                                        <td className="p-4 text-center">
                                            {typeof feature.privateOffice === 'boolean' ? (
                                                feature.privateOffice ? (
                                                    <Check className="w-5 h-5 text-gold-500 mx-auto" />
                                                ) : (
                                                    <span className="text-navy-400">—</span>
                                                )
                                            ) : (
                                                <span className="font-body text-navy-700">{feature.privateOffice}</span>
                                            )}
                                        </td>
                                        <td className="p-4 text-center">
                                            {typeof feature.coworking === 'boolean' ? (
                                                feature.coworking ? (
                                                    <Check className="w-5 h-5 text-gold-500 mx-auto" />
                                                ) : (
                                                    <span className="text-navy-400">—</span>
                                                )
                                            ) : (
                                                <span className="font-body text-navy-700">{feature.coworking}</span>
                                            )}
                                        </td>
                                        <td className="p-4 text-center">
                                            {typeof feature.meetingRoom === 'boolean' ? (
                                                feature.meetingRoom ? (
                                                    <Check className="w-5 h-5 text-gold-500 mx-auto" />
                                                ) : (
                                                    <span className="text-navy-400">—</span>
                                                )
                                            ) : (
                                                <span className="font-body text-navy-700">{feature.meetingRoom}</span>
                                            )}
                                        </td>
                                        <td className="p-4 text-center">
                                            {typeof feature.virtualEjari === 'boolean' ? (
                                                feature.virtualEjari ? (
                                                    <Check className="w-5 h-5 text-gold-500 mx-auto" />
                                                ) : (
                                                    <span className="text-navy-400">—</span>
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
                    className="absolute inset-0 opacity-10 mix-blend-overlay"
                    style={{
                        backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                        backgroundSize: '48px 48px'
                    }}
                />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Image */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative h-[500px] rounded-2xl overflow-hidden"
                        >
                            <Image
                                src="/images/private-office.jpg"
                                alt="Jetset Business Center"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 to-transparent" />
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

                            <div className="space-y-4">
                                {usps.map((usp, index) => (
                                    <motion.div
                                        key={usp}
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                        className="flex items-center gap-4"
                                    >
                                        <div className="w-6 h-6 bg-gold-500 rounded-full flex items-center justify-center flex-shrink-0">
                                            <Check className="w-4 h-4 text-navy-900" />
                                        </div>
                                        <span className="font-body text-lg text-white">{usp}</span>
                                    </motion.div>
                                ))}
                            </div>

                            <div className="mt-10">
                                <Button variant="outline-light" size="lg" asChild>
                                    <Link href="/about">Discover Our Story</Link>
                                </Button>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-gold-500/10 blur-[100px]" />
                <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-teal-500/20 blur-[100px]" />
            </section>

            {/* FAQ Section */}
            <section className="bg-cream-50 py-24 md:py-32">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
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
                                key={index}
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
