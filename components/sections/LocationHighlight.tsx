"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

const LocationHighlight = () => {
    return (
        <section id="location" className="relative py-20 sm:py-28 bg-navy-50 overflow-hidden">
            <div className="absolute inset-0 w-full h-full opacity-10 pointer-events-none">
                <Image
                    src="/images/hero-bg.png"
                    alt="Jetset Business Center background texture"
                    fill
                    className="object-cover grayscale"
                />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="space-y-6"
                    >
                        <h2 className="font-display text-3xl sm:text-4xl text-navy-900">
                            Exclusive 20th Floor, Prime Tower
                        </h2>
                        <p className="text-navy-600 text-lg leading-relaxed">
                            Located in Prime Tower, Business Bay, just minutes from Dubai Mall, Burj Khalifa, and DIFC. An office your clients remember and your team loves.
                        </p>
                        <Button variant="primary" className="group" asChild>
                            <Link href="/locations" className="inline-flex items-center gap-2">
                                Explore Our Location <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                            </Link>
                        </Button>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative rounded-2xl overflow-hidden shadow-2xl min-h-[400px]"
                    >
                        <Link href="/locations" className="block">
                            <Image
                                src="/images/primetower/the-prime-tower_g7-03jpg-68baa93d-a624-4786-9e01-b849f775facf.jpg"
                                alt="Prime Tower, Business Bay"
                                fill
                                className="object-cover hover:scale-[1.02] transition-transform duration-500"
                            />
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default LocationHighlight;