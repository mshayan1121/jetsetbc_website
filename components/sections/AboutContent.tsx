"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import {
    Star,
    Award,
    Users,
    Crown,
    Gem,
    Heart,
    TrendingUp,
    Shield,
    ChevronDown,
    BadgeCheck,
    HandHeart,
    UsersRound,
    Zap,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Card, CardContent } from "@/components/ui/Card";
import CTASection from "@/components/sections/CTASection";
import FadeIn from "@/components/animations/FadeIn";
import StaggerContainer from "@/components/animations/StaggerContainer";
import CountUp from "@/components/animations/CountUp";

export default function AboutContent() {
    // --- Parallax Logic ---
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 200]);

    // Refs for specific scroll interactions that need manual control (like the image parallax side)
    const storyRef = useRef(null);
    const isStoryInView = useInView(storyRef, { once: true, amount: 0.2 });

    const coreValues = [
        {
            title: "Transparency",
            description: "Clear pricing with no hidden operational costs. We believe in honest partnerships.",
            icon: Shield,
            bgClass: "bg-amber-50",
        },
        {
            title: "Innovation",
            description: "Continuously adapting to hybrid and remote work trends with cutting-edge tech.",
            icon: TrendingUp,
            bgClass: "bg-amber-50",
        },
        {
            title: "Operational Excellence",
            description: "Reliable operations that keep your business running smoothly and consistently.",
            icon: BadgeCheck,
            bgClass: "bg-amber-50",
        },
        {
            title: "Radical Hospitality",
            description: "Warm, proactive service that makes every client feel truly welcomed.",
            icon: HandHeart,
            bgClass: "bg-amber-50",
        },
        {
            title: "Customer Obsession",
            description: "Treating every client—startup or enterprise—with equal respect and dedication.",
            icon: Heart,
            bgClass: "bg-amber-50",
        },
        {
            title: "Relationship-Driven",
            description: "We prioritize long-term partnerships over transactional tenancy.",
            icon: Users,
            bgClass: "bg-amber-50",
        },
        {
            title: "Curated Community",
            description: "A thoughtful mix of businesses that elevate collaboration and growth.",
            icon: UsersRound,
            bgClass: "bg-amber-50",
        },
        {
            title: "Adaptive Agility",
            description: "Flexible solutions that evolve quickly with your business needs.",
            icon: Zap,
            bgClass: "bg-amber-50",
        },
    ];

    return (
        <main className="w-full overflow-hidden bg-white">
            {/* 1. HERO SECTION */}
            <section className="relative min-h-[90vh] w-full flex items-center overflow-hidden bg-navy-900">
                {/* Background Parallax */}
                <motion.div
                    style={{ y: y1 }}
                    className="absolute inset-0 z-0"
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-navy-900 via-navy-900/80 to-transparent z-10" />
                    <div className="absolute inset-0 bg-gradient-to-b from-navy-900/40 via-transparent to-navy-900 z-10" />
                    <Image
                        src="/images/hero-bg.png"
                        alt="About Jetset Business Center"
                        fill
                        priority
                        className="object-cover object-center scale-110"
                    />
                </motion.div>

                {/* Hero Content */}
                <div className="container-custom relative z-20 w-full pt-20">
                    <div className="max-w-4xl">
                        <FadeIn delay={0.2} direction="up" distance={20}>
                            <Badge
                                variant="gold"
                                className="bg-gold-500/20 text-gold-400 border-gold-500/30 px-4 py-1.5 mb-8 backdrop-blur-md"
                            >
                                <Users className="w-3.5 h-3.5 mr-2" />
                                Family-Run Business Since 2003
                            </Badge>
                        </FadeIn>

                        <FadeIn delay={0.4} direction="up" distance={30}>
                            <h1 className="text-white text-5xl md:text-6xl lg:text-[72px] leading-[1.1] mb-6 font-display">
                                Redefining Workspace <br />
                                <span className="text-gold-500">Excellence</span>
                            </h1>
                        </FadeIn>

                        <FadeIn delay={0.6} direction="up" distance={30}>
                            <p className="text-cream-50 text-lg md:text-xl max-w-2xl font-body leading-relaxed mb-10">
                                From a father-son initiative to Dubai's award-winning business center.
                                Discover the story behind Jetset.
                            </p>
                        </FadeIn>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <FadeIn delay={1.5} duration={1} className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20">
                    <div className="flex flex-col items-center gap-2">
                        <span className="text-gold-500/60 text-[10px] uppercase tracking-[0.3em] font-accent">Scroll to Explore</span>
                        <motion.div
                            animate={{ y: [0, 8, 0] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        >
                            <ChevronDown className="w-6 h-6 text-gold-500" />
                        </motion.div>
                    </div>
                </FadeIn>
            </section>

            {/* 2. OUR STORY SECTION */}
            <section ref={storyRef} className="relative w-full py-20 lg:py-32 bg-white overflow-hidden">
                <div className="container-custom">
                    <div className="flex flex-col lg:flex-row gap-16 items-center">
                        {/* Left: Image */}
                        <FadeIn direction="right" distance={30} className="w-full lg:w-1/2">
                            <div className="relative h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl group">
                                <Image
                                    src="/images/services/Co-working Area.jpg"
                                    alt="Jetset Business Center main lounge interior"
                                    fill
                                    className="object-cover hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-navy-900/10 mix-blend-multiply" />
                            </div>
                        </FadeIn>

                        {/* Right: Content */}
                        <div className="w-full lg:w-1/2 space-y-8">
                            <StaggerContainer staggerDelay={0.2} delayChildren={0.2}>
                                <FadeIn stagger direction="up">
                                    <h2 className="text-4xl md:text-5xl font-display text-navy-900 mb-6">Our Story</h2>
                                </FadeIn>
                                <FadeIn stagger direction="up">
                                    <p className="text-navy-800/80 text-lg leading-relaxed mb-6 font-body">
                                        Jetset Business Center began as a father-son initiative to support startups and growing businesses with premium yet flexible workspace solutions. With over two decades of commercial real estate expertise, we've grown from modest beginnings to become Dubai's award-winning business center.
                                    </p>
                                </FadeIn>
                                <FadeIn stagger direction="up">
                                    <p className="text-navy-800/80 text-lg leading-relaxed font-body">
                                        Today, we operate our flagship facility at Prime Tower in Business Bay, serving over 500+ clients ranging from freelance professionals to multinational corporations. What sets us apart is our commitment to combining luxury hospitality with functional corporate infrastructure.
                                    </p>
                                </FadeIn>
                            </StaggerContainer>

                            {/* Stats Display */}
                            <StaggerContainer staggerDelay={0.1} delayChildren={0.5} className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-gray-100">
                                <FadeIn stagger direction="up" className="space-y-1">
                                    <div className="text-3xl font-accent font-bold text-gold-500">
                                        <CountUp end={500} suffix="+" />
                                    </div>
                                    <div className="text-xs uppercase tracking-widest text-navy-900 font-semibold">Clients</div>
                                </FadeIn>
                                <FadeIn stagger direction="up" className="space-y-1">
                                    <div className="text-3xl font-accent font-bold text-gold-500">
                                        <CountUp end={4.9} decimals={1} suffix="★" />
                                    </div>
                                    <div className="text-xs uppercase tracking-widest text-navy-900 font-semibold">Rating</div>
                                </FadeIn>
                                <FadeIn stagger direction="up" className="space-y-1">
                                    <div className="text-3xl font-accent font-bold text-gold-500">
                                        <CountUp end={20} suffix="+" />
                                    </div>
                                    <div className="text-xs uppercase tracking-widest text-navy-900 font-semibold">Years</div>
                                </FadeIn>
                                <FadeIn stagger direction="up" className="space-y-1">
                                    <div className="text-3xl font-accent font-bold text-gold-500">
                                        <CountUp end={1} />
                                    </div>
                                    <div className="text-xs uppercase tracking-widest text-navy-900 font-semibold">Location</div>
                                </FadeIn>
                            </StaggerContainer>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. MISSION & VISION */}
            <section className="py-20 bg-[#0A1828]">
                <div className="container-custom">
                    <StaggerContainer staggerDelay={0.2} className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Mission */}
                        <FadeIn stagger direction="up">
                            <Card
                                hoverEffect
                                glass
                                className="bg-white border border-gold-500/40 group h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-gold-500/15 hover:border-gold-500/70"
                            >
                                <CardContent className="p-10 space-y-6">
                                    <div className="w-14 h-14 rounded-full bg-gold-500/10 flex items-center justify-center text-gold-500 mb-4 group-hover:bg-gold-500 group-hover:text-white transition-colors duration-300">
                                        <Crown className="w-7 h-7" />
                                    </div>
                                    <h3 className="text-2xl font-display font-bold text-navy-900">Our Mission</h3>
                                    <p className="text-navy-800/80 leading-relaxed font-body">
                                        To provide customized solutions for our clients' office and corporate setup requirements. We aim to remove the administrative burden of running an office so business owners can focus purely on revenue and growth.
                                    </p>
                                </CardContent>
                            </Card>
                        </FadeIn>

                        {/* Vision */}
                        <FadeIn stagger direction="up">
                            <Card
                                hoverEffect
                                glass
                                className="bg-white border border-gold-500/40 group h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-gold-500/15 hover:border-gold-500/70"
                            >
                                <CardContent className="p-10 space-y-6">
                                    <div className="w-14 h-14 rounded-full bg-gold-500/10 flex items-center justify-center text-gold-500 mb-4 group-hover:bg-gold-500 group-hover:text-white transition-colors duration-300">
                                        <Gem className="w-7 h-7" />
                                    </div>
                                    <h3 className="text-2xl font-display font-bold text-navy-900">Our Vision</h3>
                                    <p className="text-navy-800/80 leading-relaxed font-body">
                                        To redefine the business center concept in the UAE and GCC by combining luxury, convenience, and community. We envision a future where workspaces are hybrid-friendly, hospitality-driven, and technologically seamless.
                                    </p>
                                </CardContent>
                            </Card>
                        </FadeIn>
                    </StaggerContainer>
                    <p className="mt-10 text-center text-sm md:text-base text-white font-body">
                        Guided by these principles, we have successfully supported 500+ businesses in the heart of Business Bay.
                    </p>
                </div>
            </section>

            {/* 4. CORE VALUES */}
            <section className="py-24 bg-white relative overflow-hidden">
                <div className="container-custom relative z-10">
                    <FadeIn direction="up" className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-display text-navy-900 mb-4">
                            Our Core Values
                        </h2>
                        <div className="w-20 h-1 bg-gold-500 mx-auto rounded-full" />
                    </FadeIn>

                    <StaggerContainer staggerDelay={0.15} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                        {coreValues.map((value, idx) => (
                            <FadeIn key={value.title} stagger direction="up">
                                <Card
                                    hoverEffect
                                    className={`h-full border border-gold-500/40 bg-cream-50 hover:border-gold-500/70 transition-colors duration-300 ${value.bgClass}`}
                                >
                                    <div className="p-8 flex flex-col h-full items-center text-center">
                                        <div className="w-16 h-16 rounded-full bg-navy-900 flex items-center justify-center text-gold-500 mb-6 shadow-navy-sm">
                                            <value.icon className="w-8 h-8" />
                                        </div>
                                        <h3 className="text-xl font-display font-bold text-navy-900 mb-3">{value.title}</h3>
                                        <p className="text-navy-700/80 text-sm leading-relaxed font-body">
                                            {value.description}
                                        </p>
                                    </div>
                                </Card>
                            </FadeIn>
                        ))}
                    </StaggerContainer>
                </div>
            </section>

            {/* 5. AWARDS SECTION */}
            <section className="py-24 bg-gradient-to-br from-navy-900 to-navy-800 text-white overflow-hidden relative">
                {/* Awards photo background */}
                <div className="absolute inset-0 z-0 opacity-[0.10] pointer-events-none">
                    <Image
                        src="/images/about/awards.jpg"
                        alt="Jetset Business Center awards – trophies and certificates on display"
                        fill
                        className="object-cover object-center"
                    />
                </div>
                {/* Background Decor */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500/10 rounded-full blur-[100px] pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-500/10 rounded-full blur-[100px] pointer-events-none" />

                <div className="container-custom relative z-10">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
                        <FadeIn direction="right" className="lg:w-1/2">
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display mb-8">
                                Recognized for <br />
                                <span className="text-gold-500">Excellence</span>
                            </h2>
                            <StaggerContainer className="space-y-6">
                                <FadeIn stagger direction="up" className="flex items-start gap-4">
                                    <Award className="w-10 h-10 text-gold-500 flex-shrink-0 mt-1" />
                                    <div>
                                        <h3 className="text-xl font-bold font-display">Best Business Center of the Year</h3>
                                        <p className="text-cream-100/60 font-body">Letswork Awards, 2024</p>
                                    </div>
                                </FadeIn>
                                <FadeIn stagger direction="up" className="flex items-start gap-4">
                                    <Award className="w-10 h-10 text-gold-500 flex-shrink-0 mt-1" />
                                    <div>
                                        <h3 className="text-xl font-bold font-display">Best Newcomer of the Year</h3>
                                        <p className="text-cream-100/60 font-body">Letswork Awards, 2023</p>
                                    </div>
                                </FadeIn>
                            </StaggerContainer>
                        </FadeIn>

                        <FadeIn delay={0.3} className="lg:w-1/2 flex items-center justify-center">
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                className="relative p-10 border border-gold-500/30 rounded-2xl bg-white/5 backdrop-blur-sm text-center"
                            >
                                <div className="flex justify-center gap-1 mb-4">
                                    {[1, 2, 3, 4, 5].map(i => (
                                        <Star key={i} className="w-8 h-8 fill-gold-500 text-gold-500" />
                                    ))}
                                </div>
                                <div className="text-6xl font-accent font-bold text-white mb-2">
                                    <CountUp end={4.9} decimals={1} suffix="/5" />
                                </div>
                                <div className="text-cream-100/80 font-body uppercase tracking-widest text-sm mb-6">Customer Rating</div>
                                <Badge variant="outline" className="border-gold-500 text-gold-500 mx-auto">
                                    162+ Verified Reviews
                                </Badge>
                            </motion.div>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* 6. CTA SECTION */}
            <CTASection />
        </main>
    );
}
