"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
    {
        question: "Are there any hidden fees in the rent?",
        answer: "No. Your monthly fee covers DEWA (water/electricity), AC cooling, high-speed internet, maintenance, cleaning, and reception services."
    },
    {
        question: "Can I use this address for my DED Trade License?",
        answer: "Absolutely. We provide the official Ejari and NOC documents required by the Dubai Economic Department to issue or renew your license."
    },
    {
        question: "What are the office access hours?",
        answer: "You have 24/7 biometric access to your office. Work on your schedule, not ours."
    },
    {
        question: "Can you help me register my company in Dubai?",
        answer: "Yes. We offer end-to-end Business Setup services. Whether you need a Mainland or Freezone license, our PRO team manages the entire process—from name reservation to getting your Trade License and Bank Account."
    }
];

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(0);

    const toggleAccordion = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="py-20 sm:py-28 bg-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="font-display text-4xl sm:text-5xl text-navy-900 mb-6">Frequently Asked Questions</h2>
                    <p className="text-lg text-navy-600">
                        Everything you need to know about your new workspace.
                    </p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div 
                            key={index}
                            className="border border-cream-200 rounded-lg overflow-hidden transition-all duration-300 hover:border-gold-500/30"
                        >
                            <button
                                onClick={() => toggleAccordion(index)}
                                className="w-full flex items-center justify-between p-6 text-left bg-white hover:bg-cream-50 transition-colors"
                            >
                                <span className="font-display text-lg text-navy-900 font-medium pr-8">
                                    {faq.question}
                                </span>
                                <span className="shrink-0 text-gold-500">
                                    {activeIndex === index ? (
                                        <Minus className="w-5 h-5" />
                                    ) : (
                                        <Plus className="w-5 h-5" />
                                    )}
                                </span>
                            </button>
                            
                            <AnimatePresence>
                                {activeIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                    >
                                        <div className="p-6 pt-0 text-navy-600 leading-relaxed border-t border-cream-100 bg-cream-50/30">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;