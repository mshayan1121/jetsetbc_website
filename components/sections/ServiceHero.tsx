"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import Image from "next/image";

interface ServiceHeroProps {
    title: string;
    subtitle: string;
    description: string;
    image: string;
    ctaText?: string;
    secondaryCtaText?: string;
}

const ServiceHero = ({
    title,
    subtitle,
    description,
    image,
    ctaText = "Book a Tour",
    secondaryCtaText = "View Pricing"
}: ServiceHeroProps) => {
    return (
        <section className="relative h-[70vh] min-h-[600px] w-full flex items-center overflow-hidden bg-navy-900">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-r from-navy-900 via-navy-900/60 to-transparent z-10" />
                <Image
                    src={image}
                    alt={title}
                    fill
                    priority
                    sizes="100vw"
                    className="object-cover object-center"
                />
            </div>

            {/* Content Container */}
            <div className="container-custom relative z-20 w-full pt-20">
                <div className="max-w-3xl">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-gold-500 font-accent tracking-[0.3em] uppercase text-sm mb-4 block"
                    >
                        {subtitle}
                    </motion.span>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-white text-4xl md:text-6xl lg:text-7xl font-display mb-6"
                    >
                        {title}
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-cream-100 text-lg md:text-xl mb-10 max-w-2xl font-body leading-relaxed"
                    >
                        {description}
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="flex flex-wrap gap-4"
                    >
                        <Button
                            variant="primary"
                            size="lg"
                            className="px-8"
                            onClick={() => {
                                const element = document.getElementById('contact-form');
                                element?.scrollIntoView({ behavior: 'smooth' });
                            }}
                        >
                            {ctaText}
                        </Button>
                        <Button
                            variant="outline"
                            size="lg"
                            className="px-8 border-white/30 text-white hover:border-gold-500 hover:text-gold-500"
                            onClick={() => {
                                const element = document.getElementById('pricing');
                                element?.scrollIntoView({ behavior: 'smooth' });
                            }}
                        >
                            {secondaryCtaText}
                        </Button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ServiceHero;
