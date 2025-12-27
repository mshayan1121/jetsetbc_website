"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import {
    Check,
    Wifi,
    Car,
    PhoneCall,
    Coffee,
    Utensils,
    ChevronDown,
    Users,
    Star,
    Building,
    Presentation,
    ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Card, CardContent } from "@/components/ui/Card";
import Testimonials, { defaultTestimonials } from "@/components/sections/Testimonials";
import CTASection from "@/components/sections/CTASection";

// --- Data ---

const primeTowerStats = [
    { label: "Level 20 Views", icon: <Building className="w-4 h-4" /> },
    { label: "Premium Address", icon: <Star className="w-4 h-4 fill-gold-500" /> },
    { label: "Luxury Amenities", icon: <Coffee className="w-4 h-4" /> },
];

const locationFeatures = [
    { title: "Burj Khalifa Views", description: "Panoramic floor-to-ceiling views of the world's tallest tower." },
    { title: "High-Speed Access", description: "8 high-speed elevators and seamless building access control." },
    { title: "Dedicated Parking", description: "Allocated parking spaces for you and your executive team." },
    { title: "24/7 Security", description: "Round-the-clock security and CCTV monitoring for peace of mind." },
    { title: "Metro Access", description: "Just a 2-minute walk to the Business Bay Metro station." },
    { title: "Central Location", description: "Minutes away from Downtown Dubai, Dubai Mall, and DIFC." },
];

const amenities = [
    { name: "High-Speed Internet", icon: Wifi, desc: "Enterprise-grade fiber with redundant backups." },
    { name: "Meeting Rooms", icon: Presentation, desc: "Fully equipped with 4K screens and video conferencing." },
    { name: "Dedicated Parking", icon: Car, desc: "Private parking spots available for members." },
    { name: "Reception Service", icon: PhoneCall, desc: "Professional call answering and guest management." },
    { name: "Premium Beverages", icon: Coffee, desc: "Unlimited premium coffee, tea, and infused water." },
    { name: "In-House Restaurant", icon: Utensils, desc: "Chef-curated menu for convenient, healthy dining." },
];

const availableSpaces = [
    {
        title: "Private Offices",
        description: "Fully furnished suites on Level 20 with stunning views.",
        price: "From AED 50,000/year",
        cta: "View Availability",
        image: "/images/services/private-office.png",
        icon: Building,
    },
    {
        title: "Coworking Access",
        description: "Flexible desks in our premium lounge. Perfect for agile work.",
        price: "From AED 80/day",
        cta: "Book Day Pass",
        image: "/images/services/coworking.png",
        icon: Users,
    },
    {
        title: "Meeting Rooms",
        description: "Impress clients in our high-tech boardrooms.",
        price: "2 hours free for members",
        cta: "Book a Room",
        image: "/images/services/meeting-rooms.png",
        icon: Presentation,
    },
];

const locationTestimonials = defaultTestimonials.filter(t =>
    t.name === "MANELYN" || t.name === "SUNAINA"
);

export default function PrimeTowerContent() {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 200]);

    // Refs for scroll animations
    const overviewRef = useRef<HTMLElement>(null);
    const isOverviewInView = useInView(overviewRef, { once: true, amount: 0.2 });

    const amenitiesRef = useRef<HTMLElement>(null);

    return (
        <main className="flex flex-col w-full bg-white">

            {/* 1. HERO SECTION */}
            <section className="relative min-h-screen w-full flex items-center overflow-hidden bg-navy-900">
                {/* Background Image with Parallax */}
                <motion.div style={{ y: y1 }} className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-navy-900/60 z-10" />
                    <Image
                        src="/images/hero-bg.png"
                        alt="Prime Tower View"
                        fill
                        priority
                        className="object-cover object-center scale-110"
                    />
                </motion.div>

                {/* Content */}
                <div className="container-custom relative z-20 w-full pt-20">
                    <div className="max-w-4xl">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <Badge variant="gold" className="bg-gold-500/20 text-gold-400 border-gold-500/30 px-4 py-1.5 mb-8 backdrop-blur-md">
                                Headquarters Location
                            </Badge>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="text-white text-6xl md:text-7xl lg:text-[80px] leading-[1.1] mb-6 font-display"
                        >
                            Prime Tower <br /> <span className="text-gold-500">Business Bay</span>
                        </motion.h1>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.8 }}
                            className="flex flex-wrap items-center gap-8 md:gap-12 mb-12"
                        >
                            {primeTowerStats.map((stat, idx) => (
                                <div key={idx} className="flex items-center gap-3">
                                    <span className="text-gold-500">{stat.icon}</span>
                                    <span className="text-white font-accent font-medium tracking-wider text-sm md:text-base uppercase">
                                        {stat.label}
                                    </span>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5, duration: 1 }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
                >
                    <span className="text-gold-500/60 text-[10px] uppercase tracking-[0.3em] font-accent">Explore Location</span>
                    <motion.div
                        animate={{ y: [0, 8, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    >
                        <ChevronDown className="w-6 h-6 text-gold-500" />
                    </motion.div>
                </motion.div>
            </section>

            {/* 2. LOCATION OVERVIEW */}
            <section ref={overviewRef} className="relative w-full overflow-hidden bg-white py-24">
                <div className="container-custom">
                    <div className="flex flex-col lg:flex-row gap-16 items-center">
                        {/* Left: Image Gallery */}
                        <div className="w-full lg:w-1/2 relative">
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                animate={isOverviewInView ? { opacity: 1, x: 0 } : {}}
                                transition={{ duration: 0.8 }}
                                className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl"
                            >
                                <Image
                                    src="/office_burj_khalifa_view.png"
                                    alt="Prime Tower Office"
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gold-500/10 rounded-full blur-2xl z-[-1]" />
                            </motion.div>
                        </div>

                        {/* Right: Content */}
                        <div className="w-full lg:w-1/2">
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                animate={isOverviewInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.6 }}
                                className="text-4xl md:text-5xl font-display text-navy-900 mb-6"
                            >
                                Level 20, <br /><span className="text-gold-500">Prime Tower.</span>
                            </motion.h2>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={isOverviewInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.6, delay: 0.1 }}
                                className="text-lg text-navy-700 font-body mb-8 leading-relaxed"
                            >
                                Situated in the heart of Business Bay, our headquarters offers an unparalleled business environment. With direct access to Sheikh Zayed Road and panoramic views of the Dubai Canal and Burj Khalifa, accessibility meets prestige.
                            </motion.p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {locationFeatures.map((feature, idx) => (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={isOverviewInView ? { opacity: 1, y: 0 } : {}}
                                        transition={{ duration: 0.5, delay: 0.2 + idx * 0.1 }}
                                        className="flex items-start gap-3"
                                    >
                                        <div className="mt-1 flex-shrink-0">
                                            <div className="w-5 h-5 rounded-full bg-gold-500/10 flex items-center justify-center">
                                                <Check className="w-3 h-3 text-gold-500" />
                                            </div>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-navy-900 text-sm font-body">{feature.title}</h4>
                                            <p className="text-sm text-navy-600/80 font-body">{feature.description}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. AMENITIES GRID */}
            <section ref={amenitiesRef} className="py-24 bg-cream-50">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-display text-navy-900 mb-4">World-Class Amenities</h2>
                        <p className="text-navy-600 max-w-2xl mx-auto text-lg font-body">Everything you need to work efficiently and comfortably.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {amenities.map((item, idx) => (
                            <Card key={idx} hoverEffect className="border-none shadow-sm bg-white h-full">
                                <CardContent className="flex flex-col items-center text-center p-8 h-full">
                                    <div className="w-16 h-16 rounded-full bg-gold-500/5 flex items-center justify-center mb-6 group-hover:bg-gold-500 transition-colors duration-300">
                                        <item.icon className="w-7 h-7 text-gold-500 group-hover:text-white transition-colors duration-300" />
                                    </div>
                                    <h3 className="text-xl font-display text-navy-900 mb-3">{item.name}</h3>
                                    <p className="text-navy-600/80 text-sm font-body leading-relaxed">{item.desc}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. AVAILABLE SPACES */}
            <section className="py-24 bg-white">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-display text-navy-900 mb-4">Available Spaces</h2>
                        <p className="text-navy-600 max-w-2xl mx-auto text-lg font-body">Choose the perfect workspace solution for your business.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {availableSpaces.map((space, idx) => (
                            <Card key={idx} className="group overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300 p-0 bg-white">
                                <div className="relative h-64 overflow-hidden">
                                    <Image
                                        src={space.image}
                                        alt={space.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-navy-900/90 via-navy-900/40 to-transparent" />
                                    <div className="absolute top-4 left-4 w-10 h-10 bg-gold-500 rounded-full flex items-center justify-center text-white shadow-lg">
                                        <space.icon className="w-5 h-5" />
                                    </div>
                                </div>
                                <div className="p-8">
                                    <h3 className="text-2xl font-display text-navy-900 mb-2">{space.title}</h3>
                                    <p className="text-navy-600/80 mb-6 text-sm font-body h-[40px]">{space.description}</p>
                                    <div className="flex items-center justify-between border-t border-cream-200 pt-6">
                                        <span className="font-semibold text-navy-900 font-body">{space.price}</span>
                                        <Button variant="ghost" size="sm" className="text-gold-500 p-0 hover:bg-transparent hover:text-gold-600 group-hover:translate-x-1 transition-transform">
                                            {space.cta} <ArrowRight className="ml-2 w-4 h-4" />
                                        </Button>
                                    </div>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. TESTIMONIALS */}
            <Testimonials testimonialsData={locationTestimonials} />

            {/* 6. CTA SECTION */}
            <CTASection />

        </main>
    );
}
