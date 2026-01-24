"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, Car, Train } from "lucide-react";
import { Button } from "@/components/ui/Button";

const LocationHighlight = () => {
    return (
        <section className="relative py-20 sm:py-28 bg-navy-50 overflow-hidden">
            {/* Map Background Image */}
            <div className="absolute inset-0 w-full h-full opacity-10 pointer-events-none">
                 {/* In a real scenario, use a map image or an actual map embed */}
                 <Image
                    src="/images/hero-bg.png" 
                    alt="Map Background"
                    fill
                    className="object-cover grayscale"
                 />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Floating Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="bg-white p-8 sm:p-12 rounded-lg shadow-luxury-xl border border-cream-100 max-w-xl"
                    >
                        <h2 className="font-display text-3xl sm:text-4xl text-navy-900 mb-6">
                            The Address That Says "Success"
                        </h2>
                        <p className="text-navy-600 mb-8 leading-relaxed">
                            Located on the 20th floor of The Prime Tower, we place you at the center of Dubai’s commercial hub.
                        </p>

                        <div className="space-y-6 mb-10">
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full bg-gold-500/10 flex items-center justify-center shrink-0 text-gold-600">
                                    <MapPin className="w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="font-display text-lg text-navy-900 mb-1">Prime Location</h4>
                                    <p className="text-sm text-navy-600">5 Minutes to Burj Khalifa & Dubai Mall</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full bg-gold-500/10 flex items-center justify-center shrink-0 text-gold-600">
                                    <Train className="w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="font-display text-lg text-navy-900 mb-1">Metro Access</h4>
                                    <p className="text-sm text-navy-600">Easy access to Business Bay Metro</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full bg-gold-500/10 flex items-center justify-center shrink-0 text-gold-600">
                                    <Car className="w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="font-display text-lg text-navy-900 mb-1">Parking</h4>
                                    <p className="text-sm text-navy-600">Ample Visitor Parking available</p>
                                </div>
                            </div>
                        </div>

                        <Button variant="primary" className="w-full sm:w-auto" asChild>
                            <a href="https://maps.google.com/?q=Jetset+Business+Center+Prime+Tower" target="_blank" rel="noopener noreferrer">
                                Get Directions on Google Maps
                            </a>
                        </Button>
                    </motion.div>

                    {/* Right side - Could be an image or just empty space to show background */}
                    <div className="hidden lg:block h-full min-h-[500px] relative rounded-2xl overflow-hidden shadow-2xl">
                         <Image
                            src="/images/primetower/the-prime-tower_g7-03jpg-68baa93d-a624-4786-9e01-b849f775facf.jpg"
                            alt="View from Prime Tower"
                            fill
                            className="object-cover"
                         />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LocationHighlight;