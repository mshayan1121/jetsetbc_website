"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
    Target,
    Lightbulb,
    Eye,
    Zap,
    Heart,
    Users,
    Award,
    Star,
    CheckCircle2,
    BadgeCheck,
    HandHeart,
    UsersRound,
    TrendingUp
} from "lucide-react";
import CTASection from "@/components/sections/CTASection";

// Animation Variants
const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" }
    }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

const scaleIn = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.5, ease: "backOut" }
    }
};

// --- Components ---

const HeroSection = () => {
    return (
        <section className="relative h-[60vh] min-h-[500px] w-full overflow-hidden bg-navy-900 flex items-center justify-center">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/hero-bg.png" // Using existing asset
                    alt="Jetset Business Center Office"
                    fill
                    className="object-cover object-center"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-navy-900/95 via-navy-900/80 to-navy-900/60" />
            </div>

            <div className="container-custom relative z-10 text-center">
                {/* Breadcrumb */}
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="mb-6 flex justify-center gap-2 text-sm font-medium uppercase tracking-widest text-gold-500"
                >
                    <span>Home</span>
                    <span className="text-white/50">&gt;</span>
                    <span>About</span>
                </motion.div>

                {/* Headline */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="mx-auto mb-4 sm:mb-6 max-w-4xl font-display text-4xl sm:text-5xl md:text-6xl lg:text-[56px] font-bold leading-tight text-white px-4"
                >
                    Family-Run Excellence <br /> Since 2003
                </motion.h1>

                {/* Subheadline */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="mx-auto max-w-2xl text-base sm:text-lg text-cream-100/90 md:text-xl font-light px-4"
                >
                    Over 20 years of real estate expertise in Dubai's premium business district
                </motion.p>
            </div>
        </section>
    );
};

const OurStorySection = () => {
    return (
        <section className="py-16 sm:py-20 md:py-24 lg:py-32 bg-white overflow-hidden">
            <div className="container-custom">
                <div className="grid gap-8 sm:gap-12 lg:grid-cols-2 lg:gap-20 items-center">
                    {/* Image Side */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={scaleIn}
                        className="relative"
                    >
                        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-[0_8px_32px_rgba(10,24,40,0.15)]">
                            <Image
                                src="/images/primetower/the-prime-tower_g7-03jpg-68baa93d-a624-4786-9e01-b849f775facf.jpg"
                                alt="Jetset Business Center main lounge"
                                fill
                                className="object-cover hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 border-[1px] border-white/20 rounded-2xl m-4 pointer-events-none" />
                        </div>
                        {/* Floating Badge */}
                        <div className="absolute -bottom-6 -right-6 md:-bottom-10 md:-right-10 bg-white p-6 rounded-xl shadow-luxury-md max-w-[200px] border border-gold-100 hidden md:block">
                            <div className="text-4xl font-display font-bold text-gold-600 mb-1">20+</div>
                            <div className="text-sm font-medium text-navy-800 uppercase tracking-wide">Years of Excellence</div>
                        </div>
                    </motion.div>

                    {/* Content Side */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={staggerContainer}
                    >
                        <motion.span variants={fadeIn} className="inline-block text-gold-600 font-semibold tracking-wider uppercase mb-3 sm:mb-4 text-xs sm:text-sm">Our Journey</motion.span>
                        <motion.h2 variants={fadeIn} className="text-3xl sm:text-4xl md:text-[44px] font-display font-bold text-navy-900 mb-4 sm:mb-6 leading-tight">
                            Our Story
                        </motion.h2>
                        <motion.div variants={fadeIn} className="space-y-4 sm:space-y-6 text-navy-700/80 leading-relaxed text-base sm:text-lg">
                            <p>
                                Jetset Business Center began as a father-son initiative to support startups and growing businesses with <span className="text-navy-900 font-medium">premium yet flexible workspace solutions</span>. With over two decades of commercial real estate expertise, we've grown from modest beginnings to become Dubai's award-winning business center.
                            </p>
                            <p>
                                Today, we operate our flagship facility at Prime Tower in Business Bay, serving over <span className="text-navy-900 font-medium">500+ clients</span> ranging from freelance professionals to multinational corporations. What sets us apart is our commitment to combining luxury hospitality with functional corporate infrastructure.
                            </p>
                        </motion.div>

                        {/* Stats Grid */}
                        <motion.div variants={fadeIn} className="grid grid-cols-2 gap-6 mt-10 pt-8 border-t border-cream-200">
                            <div>
                                <div className="text-3xl font-display font-bold text-navy-900 mb-1">500+</div>
                                <div className="text-sm text-navy-600">Happy Clients</div>
                            </div>
                            <div>
                                <div className="text-3xl font-display font-bold text-navy-900 mb-1">4.9★</div>
                                <div className="text-sm text-navy-600">Google Rating</div>
                            </div>
                            <div>
                                <div className="text-3xl font-display font-bold text-navy-900 mb-1">20+</div>
                                <div className="text-sm text-navy-600">Years Experience</div>
                            </div>
                            <div>
                                <div className="text-3xl font-display font-bold text-navy-900 mb-1">1</div>
                                <div className="text-sm text-navy-600">Premium Location</div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

const MissionVisionSection = () => {
    return (
        <section className="py-16 sm:py-20 md:py-24 bg-navy-900 relative overflow-hidden">
            <div className="container-custom relative z-10">
                <div className="grid md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeIn}
                        className="group bg-white p-6 sm:p-8 md:p-10 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                        <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-navy-50 flex items-center justify-center mb-6 sm:mb-8 group-hover:bg-navy-900 transition-colors duration-300">
                            <Target className="w-7 h-7 sm:w-8 sm:h-8 text-navy-900 group-hover:text-gold-500 transition-colors duration-300" />
                        </div>
                        <h3 className="text-xl sm:text-2xl font-display font-bold text-navy-900 mb-3 sm:mb-4">Our Mission</h3>
                        <p className="text-navy-700/80 leading-relaxed">
                            To provide customized solutions for our clients' office and corporate setup requirements. We aim to remove the administrative burden of running an office so business owners can focus purely on revenue and growth.
                        </p>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        variants={fadeIn}
                        className="group bg-white p-10 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                        <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gold-50 flex items-center justify-center mb-6 sm:mb-8 group-hover:bg-gold-500 transition-colors duration-300">
                            <Lightbulb className="w-7 h-7 sm:w-8 sm:h-8 text-gold-600 group-hover:text-white transition-colors duration-300" />
                        </div>
                        <h3 className="text-xl sm:text-2xl font-display font-bold text-navy-900 mb-3 sm:mb-4">Our Vision</h3>
                        <p className="text-navy-700/80 leading-relaxed">
                            To redefine the business center concept in the UAE and GCC by combining luxury, convenience, and community. We envision a future where workspaces are hybrid-friendly, hospitality-driven, and technologically seamless.
                        </p>
                    </motion.div>
                </div>
                <motion.p
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeIn}
                    className="text-white/90 text-center mt-10 max-w-2xl mx-auto font-body text-base sm:text-lg"
                >
                    Family-run since 2003, we combine premium real estate with hospitality-grade service to deliver workspaces that inspire growth.
                </motion.p>
            </div>
        </section>
    );
};

const CoreValuesSection = () => {
    const values = [
        { icon: Eye, title: "Transparency", description: "Clear pricing with no hidden operational costs. What you see is what you get." },
        { icon: TrendingUp, title: "Innovation", description: "Continuously adapting to hybrid and remote work trends to serve you better." },
        { icon: BadgeCheck, title: "Operational Excellence", description: "Reliable operations that keep your business running smoothly and consistently." },
        { icon: HandHeart, title: "Radical Hospitality", description: "Warm, proactive service that makes every client feel truly welcomed." },
        { icon: Heart, title: "Customer Obsession", description: "Treating every client—startup or enterprise—with equal respect and dedication." },
        { icon: Users, title: "Relationship-Driven", description: "We prioritize long-term partnerships over transactional tenancy." },
        { icon: UsersRound, title: "Curated Community", description: "A thoughtful mix of businesses that elevate collaboration and growth." },
        { icon: Zap, title: "Adaptive Agility", description: "Flexible solutions that evolve quickly with your business needs." },
    ];

    return (
        <section className="py-24 bg-white">
            <div className="container-custom">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeIn}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-display font-bold text-navy-900 mb-4">Our Core Values</h2>
                    <div className="w-20 h-1 bg-gold-500 mx-auto rounded-full" />
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {values.map((value, index) => (
                        <motion.div
                            key={index}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={{
                                hidden: { opacity: 0, y: 30 },
                                visible: {
                                    opacity: 1,
                                    y: 0,
                                    transition: { delay: index * 0.1, duration: 0.5 }
                                }
                            }}
                            className="text-center group p-6 rounded-2xl border-2 border-gold-500/40 bg-cream-50 hover:border-gold-500/70 transition-colors duration-300"
                        >
                            <div className="w-16 h-16 mx-auto rounded-full bg-navy-900 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-sm">
                                <value.icon className="w-8 h-8 text-gold-500" />
                            </div>
                            <h3 className="text-xl font-bold text-navy-900 mb-3">{value.title}</h3>
                            <p className="text-navy-600 text-sm leading-relaxed">{value.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const AwardsSection = () => {
    return (
        <section className="py-24 relative overflow-hidden bg-navy-900 text-white">
            <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900" />
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold-500/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="container-custom relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-5xl mx-auto">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeIn}
                        className="text-center lg:text-left"
                    >
                        <span className="text-gold-400 font-medium tracking-widest uppercase text-sm mb-2 block">Excellence Recognized</span>
                        <h2 className="text-4xl md:text-[44px] font-display font-bold text-white mb-8">Recognized for Excellence</h2>

                        <div className="space-y-6 mb-10">
                            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm hover:bg-white/10 transition-colors duration-300">
                                <Award className="w-12 h-12 text-gold-400 mb-4" />
                                <h3 className="text-lg font-bold text-white mb-1">Best Business Center of the Year</h3>
                                <p className="text-cream-200/60 text-sm">Letswork, 2024</p>
                            </div>
                            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm hover:bg-white/10 transition-colors duration-300">
                                <Star className="w-12 h-12 text-gold-400 mb-4" />
                                <h3 className="text-lg font-bold text-white mb-1">Best Newcomer of the Year</h3>
                                <p className="text-cream-200/60 text-sm">Letswork, 2023</p>
                            </div>
                        </div>

                        <div className="inline-flex items-center gap-3 bg-white/10 rounded-full px-6 py-3 border border-white/10">
                            <div className="flex -space-x-1">
                                {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-4 h-4 fill-gold-400 text-gold-400" />)}
                            </div>
                            <span className="text-sm font-medium text-white">4.9/5 customer rating (162+ Reviews)</span>
                        </div>
                    </motion.div>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeIn}
                        className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl"
                    >
                        <Image
                            src="/images/primetower/the-prime-tower_g7-03jpg-68baa93d-a624-4786-9e01-b849f775facf.jpg"
                            alt="Jetset Business Center awards - trophies and certificates"
                            fill
                            className="object-cover"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

const TeamSection = () => {
    // Simple team section as optional placeholder
    const team = [
        { name: "Hannah", role: "Client Relations" },
        { name: "Jessie", role: "Operations Manager" },
        { name: "Pauline", role: "Community Manager" }
    ];

    return (
        <section className="py-16 sm:py-20 md:py-24 bg-cream-50">
            <div className="container-custom text-center">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeIn}
                    className="mb-12"
                >
                    <h2 className="text-3xl font-display font-bold text-navy-900 mb-3">Meet Our Team</h2>
                    <p className="text-navy-600">Dedicated professionals committed to your success</p>
                </motion.div>

                <div className="flex flex-wrap justify-center gap-10">
                    {team.map((member, index) => (
                        <motion.div
                            key={index}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={{
                                hidden: { opacity: 0, scale: 0.9 },
                                visible: {
                                    opacity: 1,
                                    scale: 1,
                                    transition: { delay: index * 0.1 }
                                }
                            }}
                            className="text-center group"
                        >
                            <div className="w-24 h-24 mx-auto rounded-full bg-navy-100 flex items-center justify-center mb-4 border-2 border-white shadow-md group-hover:border-gold-400 transition-colors duration-300">
                                <span className="text-2xl font-display font-bold text-navy-800">{member.name[0]}</span>
                            </div>
                            <h4 className="font-bold text-navy-900">{member.name}</h4>
                            <p className="text-xs text-navy-500 uppercase tracking-wide mt-1">{member.role}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default function AboutClientPage() {
    return (
        <div className="min-h-screen">
            <HeroSection />
            <OurStorySection />
            <MissionVisionSection />
            <CoreValuesSection />
            <AwardsSection />
            <TeamSection />
            <CTASection />
        </div>
    );
}
