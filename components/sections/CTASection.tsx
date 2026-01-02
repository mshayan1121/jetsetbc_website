"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "../ui/Button";
import { Phone, Mail, MessageCircle } from "lucide-react";
import Link from "next/link";
import { cn } from "../../lib/utils";

const CTASection = () => {
    const { scrollYProgress } = useScroll();
    const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
    const y2 = useTransform(scrollYProgress, [0, 1], [0, -150]);

    const containerVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut",
                staggerChildren: 0.15,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" },
        },
    };

    const buttonEntryVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 260,
                damping: 20,
            },
        },
    };

    return (
        <section className="relative w-full overflow-hidden bg-navy-900 py-24 md:py-32">
            {/* Background with Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#0A1828] via-[#163a52] to-[#2C5F7C] opacity-95" />

            {/* Subtle Background Texture */}
            <div
                className="absolute inset-0 opacity-10 mix-blend-overlay"
                style={{
                    backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                    backgroundSize: '48px 48px'
                }}
            />

            <motion.div
                className="container-custom relative z-10 mx-auto text-center"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
            >
                {/* Headline */}
                <motion.h2
                    variants={itemVariants}
                    className="mb-6 font-display text-4xl font-bold tracking-tight text-white md:text-6xl lg:text-[56px] lg:leading-tight"
                >
                    Ready to Elevate <br className="hidden md:block" /> Your Business?
                </motion.h2>

                {/* Subheadline */}
                <motion.p
                    variants={itemVariants}
                    className="mx-auto mb-12 max-w-2xl font-body text-lg text-cream-50 md:text-xl opacity-90"
                >
                    Book a same-day tour and experience the Jetset difference
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    variants={itemVariants}
                    className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-8"
                >
                    <motion.div
                        variants={buttonEntryVariants}
                        whileHover={{ scale: 1.05, filter: "brightness(1.1)" }}
                        whileTap={{ scale: 0.95 }}
                        className="w-full sm:w-auto"
                    >
                        <Button
                            variant="primary"
                            size="lg"
                            className="group relative w-full overflow-hidden px-10 py-5 text-lg font-bold shadow-[0_0_20px_rgba(212,175,55,0.3)] transition-all hover:shadow-[0_0_30px_rgba(212,175,55,0.6)] sm:w-auto"
                            asChild
                        >
                            <Link href="/book-tour">
                                Book a Tour
                            </Link>
                        </Button>
                    </motion.div>

                    <motion.div
                        variants={buttonEntryVariants}
                        whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
                        whileTap={{ scale: 0.95 }}
                        className="w-full sm:w-auto"
                    >
                        <Button
                            variant="outline-light"
                            size="lg"
                            className="w-full px-10 py-5 text-lg font-bold sm:w-auto"
                            asChild
                        >
                            <Link href="/contact">
                                Contact Us
                            </Link>
                        </Button>
                    </motion.div>
                </motion.div>

                {/* Contact Info Row */}
                <motion.div
                    variants={itemVariants}
                    className="mt-20 flex flex-wrap justify-center gap-x-12 gap-y-6 border-t border-white/10 pt-10"
                >
                    <a
                        href="https://wa.me/971585779312"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-3 text-sm font-medium text-cream-100/80 transition-colors hover:text-gold-400"
                    >
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 transition-colors group-hover:bg-white/10">
                            <MessageCircle className="h-5 w-5 text-gold-500" />
                        </div>
                        <span>WhatsApp: +971 58 577 9312</span>
                    </a>

                    <a
                        href="tel:+97146657555"
                        className="group flex items-center gap-3 text-sm font-medium text-cream-100/80 transition-colors hover:text-gold-400"
                    >
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 transition-colors group-hover:bg-white/10">
                            <Phone className="h-5 w-5 text-gold-500" />
                        </div>
                        <span>Phone: 04 665 7555</span>
                    </a>

                    <a
                        href="mailto:contact@jetsetbc.com"
                        className="group flex items-center gap-3 text-sm font-medium text-cream-100/80 transition-colors hover:text-gold-400"
                    >
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 transition-colors group-hover:bg-white/10">
                            <Mail className="h-5 w-5 text-gold-500" />
                        </div>
                        <span>Email: contact@jetsetbc.com</span>
                    </a>
                </motion.div>
            </motion.div>

            {/* Decorative Parallax Elements */}
            <motion.div
                style={{ y: y1, maxWidth: '100%' }}
                className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-gold-500/10 blur-[100px] pointer-events-none overflow-hidden"
            />
            <motion.div
                style={{ y: y2, maxWidth: '100%' }}
                className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-teal-500/20 blur-[100px] pointer-events-none overflow-hidden"
            />
        </section>
    );
};

export default CTASection;
