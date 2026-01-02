"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/Button";

const USPs = [
    {
        title: "All-Inclusive Pricing",
        description: "No hidden fees or surprise costs. Everything included upfront.",
    },
    {
        title: "Award-Winning Service",
        description: "Best Business Center 2024 & Best Newcomer 2023",
    },
    {
        title: "Iconic Burj Khalifa Views",
        description: "Panoramic vistas of Dubai's most famous landmark",
    },
    {
        title: "Family-Run Excellence",
        description: "20+ years of real estate expertise and personal service",
    },
    {
        title: "Hospitality-Grade Amenities",
        description: "Complimentary beverages, restaurant, and concierge service",
    },
    {
        title: "Same-Day Tours Available",
        description: "Book and visit today. See the difference yourself.",
    },
];

const WhyJetset = () => {
    const containerRef = useRef<HTMLElement>(null);
    const isInView = useInView(containerRef, { once: true, amount: 0.2 });

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

    return (
        <section
            ref={containerRef}
            className="relative w-full overflow-hidden bg-white"
            id="why-jetset"
        >
            <div className="flex flex-col lg:flex-row min-h-[800px]">
                {/* Left Side: Image with Parallax */}
                <div className="relative w-full lg:w-1/2 h-[400px] lg:h-auto overflow-hidden">
                    <motion.div
                        style={{ y }}
                        className="absolute inset-0 w-full h-[120%]"
                    >
                        <Image
                            src="/office_burj_khalifa_view.png"
                            alt="Luxury Office with Burj Khalifa View"
                            fill
                            className="object-cover"
                            priority
                            sizes="(max-width: 1024px) 100vw, 50vw"
                        />
                        {/* Subtle Overlay */}
                        <div className="absolute inset-0 bg-navy-900/10 mix-blend-multiply" />
                    </motion.div>
                    {/* Mobile Overlay gradient for transition if needed, but the layout is split */}
                </div>

                {/* Right Side: Content */}
                <div className="w-full lg:w-1/2 bg-navy-900 flex items-center justify-center p-8 md:p-16 lg:p-24">
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="max-w-xl w-full"
                    >
                        <div className="mb-12">
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.6, delay: 0.1 }}
                                className="text-4xl md:text-5xl lg:text-[44px] text-white font-display mb-4"
                            >
                                Why Choose Jetset?
                            </motion.h2>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="text-lg md:text-xl text-cream-100 font-body"
                            >
                                More than just an office. A hospitality experience.
                            </motion.p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10 mb-16">
                            {USPs.map((usp, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                                    transition={{
                                        duration: 0.5,
                                        delay: 0.3 + index * 0.15,
                                        ease: "easeOut"
                                    }}
                                    className="flex flex-col gap-3"
                                >
                                    <div className="flex items-center gap-4">
                                        <motion.div
                                            initial={{ scale: 0 }}
                                            animate={isInView ? { scale: 1 } : {}}
                                            transition={{
                                                type: "spring",
                                                stiffness: 260,
                                                damping: 20,
                                                delay: 0.4 + index * 0.15
                                            }}
                                            className="flex-shrink-0"
                                        >
                                            <div className="bg-gold-500/10 p-2 rounded-full">
                                                <Check className="w-6 h-6 text-gold-500 stroke-[3px]" />
                                            </div>
                                        </motion.div>
                                        <h3 className="text-white font-bold text-lg font-body">
                                            {usp.title}
                                        </h3>
                                    </div>
                                    <p className="text-cream-200/80 text-sm leading-relaxed font-body pl-12">
                                        {usp.description}
                                    </p>
                                </motion.div>
                            ))}
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 1.2 }}
                        >
                            <Button
                                variant="outline"
                                size="lg"
                                asChild
                            >
                                <Link href="/about">Discover Our Story</Link>
                            </Button>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default WhyJetset;
