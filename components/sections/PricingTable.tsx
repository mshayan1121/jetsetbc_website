"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

interface PricingPlan {
    name: string;
    price: string;
    period: string;
    description: string;
    features: string[];
    isPopular?: boolean;
    ctaText?: string;
}

interface PricingTableProps {
    plans: PricingPlan[];
    title?: string;
    subtitle?: string;
}

const PricingTable = ({ plans, title = "Select Your Plan", subtitle = "Choose the perfect workspace solution for your team" }: PricingTableProps) => {
    return (
        <section id="pricing" className="py-24 bg-cream-50">
            <div className="container-custom">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-display text-navy-900 mb-4">{title}</h2>
                    <p className="text-navy-600 max-w-2xl mx-auto">{subtitle}</p>
                </div>

                <div className={`
                    grid gap-8 overflow-visible
                    ${plans.length === 1 
                        ? 'grid-cols-1 max-w-lg mx-auto' 
                        : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
                    }
                `}>
                    {plans.map((plan, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <Card
                                padding="none"
                                className={`h-full flex flex-col transition-all duration-300 overflow-visible ${plan.isPopular
                                        ? "border-2 border-gold-500 shadow-xl scale-105 relative z-10 bg-white"
                                        : "border-navy-100 hover:border-gold-300 bg-white/50"
                                    } ${plan.isPopular ? "pt-12" : "pt-8"} px-8 pb-8`}
                            >
                                {plan.isPopular && (
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                                        <Badge className="bg-gold-500 text-navy-900 font-semibold px-6 py-2 text-sm uppercase tracking-wide shadow-lg whitespace-nowrap border-none">
                                            Most Popular
                                        </Badge>
                                    </div>
                                )}
                                <div className="mb-8">
                                    <h3 className="text-xl font-display text-navy-900 mb-2">{plan.name}</h3>
                                    <div className="flex items-baseline gap-1 mb-4">
                                        <span className="text-3xl font-accent text-navy-900">{plan.price}</span>
                                        <span className="text-navy-500 text-sm">{plan.period}</span>
                                    </div>
                                    <p className="text-navy-600 text-sm leading-relaxed">{plan.description}</p>
                                </div>

                                <div className="flex-grow mb-8">
                                    <ul className="space-y-4">
                                        {plan.features.map((feature, fIdx) => (
                                            <li key={fIdx} className="flex items-start gap-3">
                                                <Check className="w-5 h-5 text-gold-500 shrink-0 mt-0.5" />
                                                <span className="text-navy-700 text-sm">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <Button
                                    variant={plan.isPopular ? "primary" : "outline"}
                                    className="w-full"
                                    asChild
                                >
                                    <Link href="/book-tour">
                                        {plan.ctaText || "Get Started"}
                                    </Link>
                                </Button>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PricingTable;
