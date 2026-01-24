"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { MapPin, ArrowRight, Building, Construction, Map } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import CTASection from "@/components/sections/CTASection";
import FadeIn from "@/components/animations/FadeIn";
import StaggerContainer from "@/components/animations/StaggerContainer";

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
                                <Card className="group h-full overflow-hidden border-none shadow-luxury-md hover:shadow-luxury-xl transition-all duration-500 bg-white flex flex-col">
                                    {/* Image Area */}
                                    <div className="relative h-72 overflow-hidden bg-navy-100">
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
                                        <h2 className="text-3xl font-display text-navy-900 mb-4 group-hover:text-gold-600 transition-colors duration-300">
                                            {loc.name}
                                        </h2>
                                        <p className="text-navy-600/80 mb-8 font-body leading-relaxed flex-grow">
                                            {loc.description}
                                        </p>

                                        {/* Features */}
                                        <div className="flex flex-wrap gap-3 mb-8">
                                            {loc.features.map((feature, i) => (
                                                <span key={i} className="px-3 py-1 bg-cream-50 text-navy-700 text-xs font-medium rounded-full border border-cream-200">
                                                    {feature}
                                                </span>
                                            ))}
                                        </div>

                                        {/* Action */}
                                        <div className="pt-6 border-t border-cream-100 flex items-center justify-between">
                                            {loc.status === "Available" ? (
                                                <Link href={loc.link} className="w-full">
                                                    <Button variant="outline" className="w-full group-hover:bg-navy-900 group-hover:text-white group-hover:border-navy-900">
                                                        View Details <ArrowRight className="ml-2 w-4 h-4" />
                                                    </Button>
                                                </Link>
                                            ) : (
                                                <Button disabled variant="ghost" className="w-full opacity-60 cursor-not-allowed">
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

            {/* 3. MAP / REACH OUT */}
            <section className="py-24 bg-cream-50">
                <div className="container-custom">
                    <div className="flex flex-col lg:flex-row gap-16 items-center">
                        <FadeIn direction="right" className="w-full lg:w-1/2">
                            <h2 className="text-4xl md:text-5xl font-display text-navy-900 mb-6">
                                Strategically <span className="text-gold-500">Connected</span>
                            </h2>
                            <p className="text-navy-700/80 text-lg font-body leading-relaxed mb-8">
                                Our location is carefully selected to provide maximum convenience and prestige.
                                Being in Business Bay means you are minutes away from Downtown Dubai, DIFC, and major highways.
                            </p>

                            <ul className="space-y-4">
                                <li className="flex items-center gap-4 text-navy-800 font-body">
                                    <div className="w-8 h-8 rounded-full bg-gold-500/10 flex items-center justify-center text-gold-500 flex-shrink-0">
                                        <Map className="w-4 h-4" />
                                    </div>
                                    <span>5 mins to Dubai Mall & Burj Khalifa</span>
                                </li>
                                <li className="flex items-center gap-4 text-navy-800 font-body">
                                    <div className="w-8 h-8 rounded-full bg-gold-500/10 flex items-center justify-center text-gold-500 flex-shrink-0">
                                        <MapPin className="w-4 h-4" />
                                    </div>
                                    <span>10 mins to Dubai International Financial Centre (DIFC)</span>
                                </li>
                                <li className="flex items-center gap-4 text-navy-800 font-body">
                                    <div className="w-8 h-8 rounded-full bg-gold-500/10 flex items-center justify-center text-gold-500 flex-shrink-0">
                                        <Car className="w-4 h-4 text-gold-500" />
                                    </div>
                                    <span>Direct access to Sheikh Zayed Road</span>
                                </li>
                            </ul>
                        </FadeIn>

                        <FadeIn direction="left" className="w-full lg:w-1/2">
                            <Card className="p-2 bg-white shadow-luxury-lg skew-y-1 transform transition-transform hover:skew-y-0 duration-500">
                                {/* Pseudomap placeholder since we don't have a real map component configured yet, or simple image */}
                                <div className="relative h-[400px] w-full bg-navy-100 rounded-lg overflow-hidden flex items-center justify-center group">
                                    <div className="absolute inset-0 opacity-20 bg-[url('https://maps.googleapis.com/maps/api/staticmap?center=25.1855,55.2750&zoom=14&size=600x400')] bg-cover bg-center grayscale" />
                                    <div className="bg-navy-900/50 absolute inset-0 backdrop-blur-[1px]" />

                                    <div className="relative z-10 text-center">
                                        <div className="w-16 h-16 mx-auto bg-gold-500 rounded-full flex items-center justify-center shadow-lg animate-pulse">
                                            <MapPin className="w-8 h-8 text-white" />
                                        </div>
                                        <h3 className="text-white font-display text-2xl mt-4">Business Bay</h3>
                                        <p className="text-gold-200 font-accent uppercase tracking-widest text-xs mt-1">Prime Tower, Level 20</p>
                                    </div>
                                </div>
                            </Card>
                        </FadeIn>
                    </div>
                </div>
            </section>

            <CTASection />
        </main>
    );
}

// Helper for the missing icon import
function Car(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" />
            <circle cx="7" cy="17" r="2" />
            <path d="M9 17h6" />
            <circle cx="17" cy="17" r="2" />
        </svg>
    )
}
