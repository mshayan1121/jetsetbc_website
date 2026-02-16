"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { MapPin, ArrowRight, Building, Construction, Eye, Train, Building2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import CTASection from "@/components/sections/CTASection";
import FadeIn from "@/components/animations/FadeIn";
import StaggerContainer from "@/components/animations/StaggerContainer";

const locationFeatureIcons: Record<string, React.ElementType> = {
    "Burj Khalifa Views": Eye,
    "Metro Access": Train,
    "Level 20": Building2,
};

const locations = [
    {
        id: "prime-tower",
        name: "Prime Tower",
        area: "Business Bay",
        status: "Available",
        description: "Our flagship headquarters featuring panoramic Burj Khalifa views, premium amenities, and Level 20 exclusivity.",
        image: "/images/primetower/the-prime-tower_g7-03jpg-68baa93d-a624-4786-9e01-b849f775facf.jpg",
        link: "/locations/prime-tower",
        features: ["Burj Khalifa Views", "Metro Access", "Level 20"],
    },
];

export default function LocationsContent() {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 200]);

    return (
        <main className="w-full overflow-hidden bg-white">
            {/* 1. HERO SECTION */}
            <section className="relative h-[60vh] min-h-[500px] w-full flex items-center overflow-hidden bg-navy-900">
                <motion.div style={{ y: y1 }} className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-navy-900/60 z-10" />
                    <Image
                        src="/images/hero-bg.png"
                        alt="Jetset Locations"
                        fill
                        priority
                        className="object-cover object-center scale-110"
                    />
                </motion.div>

                <div className="container-custom relative z-20 w-full pt-10">
                    <div className="max-w-4xl">
                        <FadeIn delay={0.2} direction="up">
                            <Badge variant="gold" className="bg-gold-500/20 text-gold-400 border-gold-500/30 px-4 py-1.5 mb-6 backdrop-blur-md">
                                <MapPin className="w-3.5 h-3.5 mr-2" />
                                Strategic Addresses
                            </Badge>
                        </FadeIn>

                        <FadeIn delay={0.4} direction="up">
                            <h1 className="text-white text-5xl md:text-6xl font-display mb-6">
                                Our Premium <br />
                                <span className="text-gold-500">Location</span>
                            </h1>
                        </FadeIn>

                        <FadeIn delay={0.6} direction="up">
                            <p className="text-cream-50 text-lg md:text-xl max-w-2xl font-body leading-relaxed">
                                Discover our flagship business center in Business Bay, Dubai.
                                Strategically located for maximum connectivity, prestige, and convenience.
                            </p>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* 2. LOCATIONS LIST */}
            <section className="py-24 bg-white relative">
                <div className="container-custom">
                    <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        {locations.map((loc) => (
                            <FadeIn key={loc.id} stagger direction="up" className="h-full">
                                <Card className="group h-full overflow-hidden border-none shadow-luxury-md hover:shadow-luxury-xl transition-all duration-500 bg-navy-900 flex flex-col">
                                    {/* Image Area */}
                                    <div className="relative h-72 overflow-hidden bg-navy-800">
                                        {loc.image ? (
                                            <Image
                                                src={loc.image}
                                                alt={loc.name}
                                                fill
                                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                                            />
                                        ) : (
                                            <div className="absolute inset-0 flex items-center justify-center bg-navy-900">
                                                <Construction className="w-16 h-16 text-navy-700" />
                                                <div className="absolute inset-0 bg-pattern-grid opacity-5" />
                                            </div>
                                        )}

                                        {/* Overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-navy-900/90 via-navy-900/20 to-transparent opacity-80" />

                                        {/* Status Badge */}
                                        <div className="absolute top-6 right-6">
                                            <Badge
                                                variant={loc.status === "Available" ? "gold" : "outline"}
                                                className={loc.status === "Available"
                                                    ? "bg-gold-500 text-white border-none shadow-lg"
                                                    : "bg-white/10 text-cream-50 border-cream-50/20 backdrop-blur-md"
                                                }
                                            >
                                                {loc.status}
                                            </Badge>
                                        </div>

                                        {/* Area Label */}
                                        <div className="absolute bottom-6 left-6">
                                            <div className="flex items-center gap-2 text-gold-400 font-accent uppercase tracking-widest text-xs font-semibold">
                                                <MapPin className="w-3.5 h-3.5" />
                                                {loc.area}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Content Area */}
                                    <div className="p-8 flex flex-col flex-grow relative">
                                        <h2 className="text-3xl font-display text-white mb-4 group-hover:text-gold-400 transition-colors duration-300">
                                            {loc.name}
                                        </h2>
                                        <p className="text-cream-200/80 mb-8 font-body leading-relaxed flex-grow">
                                            {loc.description}
                                        </p>

                                        {/* Features - minimalist gold-line icons */}
                                        <div className="flex flex-wrap gap-4 mb-8">
                                            {loc.features.map((feature, i) => {
                                                const Icon = locationFeatureIcons[feature] || MapPin;
                                                return (
                                                    <div key={i} className="flex items-center gap-2 text-gold-400/90">
                                                        <div className="w-8 h-8 rounded-full flex items-center justify-center border border-gold-500/50 [&>svg]:w-4 [&>svg]:h-4 [&>svg]:stroke-[1.5]" aria-hidden>
                                                            <Icon className="text-gold-400" strokeWidth={1.5} />
                                                        </div>
                                                        <span className="text-sm font-medium text-cream-100">{feature}</span>
                                                    </div>
                                                );
                                            })}
                                        </div>

                                        {/* Action */}
                                        <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                                            {loc.status === "Available" ? (
                                                <Link href={loc.link} className="w-full">
                                                    <Button variant="outline" className="w-full border-gold-500/50 text-gold-400 hover:bg-gold-500 hover:text-navy-900 hover:border-gold-500">
                                                        View Details <ArrowRight className="ml-2 w-4 h-4" />
                                                    </Button>
                                                </Link>
                                            ) : (
                                                <Button disabled variant="ghost" className="w-full opacity-60 cursor-not-allowed text-cream-200">
                                                    Coming Soon
                                                </Button>
                                            )}
                                        </div>
                                    </div>
                                </Card>
                            </FadeIn>
                        ))}
                    </StaggerContainer>
                </div>
            </section>

            {/* 3. INTERACTIVE MAP - Find Us in the Heart of Business Bay */}
            <section className="py-24 bg-cream-50">
                <div className="container-custom">
                    <div className="text-center mb-10">
                        <h2 className="text-4xl md:text-5xl font-display text-navy-900 mb-4">
                            Find Us in the Heart of Business Bay
                        </h2>
                        <p className="text-navy-600 max-w-2xl mx-auto font-body">
                            Prime Tower, Level 20 — minutes from Dubai Mall, Burj Khalifa, DIFC, and metro access.
                        </p>
                    </div>
                    <div className="rounded-2xl overflow-hidden shadow-luxury-lg border border-cream-200 aspect-video max-w-5xl mx-auto">
                        <iframe
                            title="Jetset Business Center - Prime Tower, Business Bay"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.0!2d55.275!3d25.1855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f682cbfe6f2b9%3A0x2d2d2d2d2d2d2d2d!2sBusiness%20Bay%20-%20Dubai!5e0!3m2!1sen!2sae!4v=1"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="min-h-[400px] w-full"
                        />
                    </div>
                </div>
            </section>

            <CTASection />
        </main>
    );
}
