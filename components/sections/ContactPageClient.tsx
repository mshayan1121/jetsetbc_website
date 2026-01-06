"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Mail, MapPin, Clock, ArrowRight, CheckCircle2, ChevronDown, MessageSquare } from "lucide-react";

import { Button } from "@/components/ui/Button";
import CTASection from "@/components/sections/CTASection";
import JetsetForm from "@/components/sections/JetsetForm";

// --- Components ---

const ContactCard = ({ icon: Icon, title, value, link, label }: { icon: any, title: string, value: string, link?: string, label: string }) => (
    <div className="bg-white rounded-xl p-6 sm:p-8 shadow-luxury-lg hover:shadow-luxury-xl transition-all duration-400 hover:-translate-y-2 text-center group">
        <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gold-500/10 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
            <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-gold-500" />
        </div>
        <h3 className="font-display text-lg sm:text-xl text-navy-900 mb-2">{title}</h3>
        {link ? (
            <a href={link} className="font-body text-sm sm:text-base text-navy-700 hover:text-gold-500 transition-colors break-words">
                {value}
            </a>
        ) : (
            <p className="font-body text-sm sm:text-base text-navy-700 break-words">{value}</p>
        )}
    </div>
);

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-cream-200 last:border-0">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex w-full items-center justify-between py-6 text-left focus:outline-none group"
            >
                <span className="font-display text-lg font-medium text-navy-900 group-hover:text-gold-600 transition-colors">
                    {question}
                </span>
                <ChevronDown
                    className={`w-5 h-5 text-gold-500 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                />
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                    >
                        <p className="pb-6 font-body text-navy-700/80 leading-relaxed">
                            {answer}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default function ContactPageClient() {

    return (
        <main className="flex flex-col w-full bg-white">
            {/* 1. HERO SECTION - Taller, matching homepage */}
            <section className="relative bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 min-h-[60vh] sm:min-h-[70vh] md:min-h-[80vh] flex items-center justify-center overflow-visible py-20 sm:py-28 md:py-32 lg:py-40">
                {/* Background Gradients */}
                <div className="absolute inset-0 bg-gradient-to-r from-navy-900 via-navy-900/80 to-transparent z-10" />
                <div className="absolute inset-0 bg-gradient-to-b from-navy-900/40 via-transparent to-navy-900/60 z-10" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-3xl mx-auto"
                    >
                        <div className="flex items-center justify-center gap-2 mb-4 sm:mb-6">
                            <span className="h-px w-8 sm:w-12 bg-gold-500"></span>
                            <span className="text-gold-500 font-accent uppercase tracking-widest text-xs sm:text-sm">Contact Us</span>
                            <span className="h-px w-8 sm:w-12 bg-gold-500"></span>
                        </div>
                        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl text-white mb-4 sm:mb-6 px-4">
                            Contact Us
                        </h1>
                        <p className="font-body text-lg sm:text-xl text-cream-50 max-w-2xl mx-auto px-4">
                            Get in touch with us about your requirements and our team will get back to you within 1 business day
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* 2. QUICK CONTACT CARDS - Overlapping Hero with proper spacing */}
            <section className="relative -mt-16 sm:-mt-20 z-20 pb-12 sm:pb-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
                    >
                        <ContactCard
                            icon={Phone}
                            title="Phone"
                            value="+971 58 577 9312"
                            label="Call us"
                            link="tel:+971585779312"
                        />
                        <ContactCard
                            icon={Mail}
                            title="Email"
                            value="contact@jetsetbc.com"
                            label="Email us"
                            link="mailto:contact@jetsetbc.com"
                        />
                        <ContactCard
                            icon={MessageSquare}
                            title="WhatsApp"
                            value="+971 58 577 9312"
                            label="Chat with us"
                            link="https://wa.me/971585779312"
                        />
                        <ContactCard
                            icon={MapPin}
                            title="Visit Us"
                            value="Prime Tower, Level 20, Business Bay"
                            label="Get Directions"
                            link="https://share.google/PorP2aIgEQ7L2B2RQ"
                        />
                    </motion.div>
                </div>
            </section>

            {/* 3. CONTACT FORM SECTION - White Background with homepage spacing */}
            <section className="bg-white py-16 sm:py-20 md:py-24 lg:py-32">
                <div className="container-custom mx-auto">
                    <div className="w-full max-w-5xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="flex flex-col items-center justify-center"
                        >
                            <div className="mb-6 sm:mb-8 md:mb-10 text-center w-full">
                                <h2 className="text-3xl sm:text-4xl font-display font-bold text-navy-900 mb-3 sm:mb-4">Send us a Message</h2>
                                <p className="text-navy-700/80 font-body text-base sm:text-lg max-w-2xl mx-auto">
                                    Fill out the form below and our team will get back to you within 1 business day
                                </p>
                            </div>

                            {/* Jetset Official Form */}
                            <div className="bg-white rounded-2xl border border-cream-200 shadow-sm w-full max-w-5xl" style={{ height: 'auto', display: 'block', padding: '1rem' }}>
                                <JetsetForm />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 3.5. CONTACT INFO SECTION - Separate section for better layout */}
            <section className="bg-cream-50 py-16 sm:py-20 md:py-24">
                <div className="container-custom mx-auto">
                    <div className="max-w-4xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-cream-200 shadow-sm">
                                <h3 className="font-display text-xl sm:text-2xl font-semibold text-navy-900 mb-6 sm:mb-8 text-center">Contact Information</h3>

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
                                    <div className="text-center">
                                        <div className="w-12 h-12 rounded-full bg-gold-500/10 flex items-center justify-center mx-auto mb-4 text-gold-500">
                                            <MapPin className="w-6 h-6" />
                                        </div>
                                        <h4 className="font-bold text-navy-900 mb-2">Visit Us</h4>
                                        <p className="text-navy-700 font-body text-sm leading-relaxed">
                                            Jetset Business Center<br />
                                            Prime Tower, Level 20<br />
                                            Business Bay, Dubai, UAE
                                        </p>
                                    </div>

                                    <div className="text-center">
                                        <div className="w-12 h-12 rounded-full bg-gold-500/10 flex items-center justify-center mx-auto mb-4 text-gold-500">
                                            <Clock className="w-6 h-6" />
                                        </div>
                                        <h4 className="font-bold text-navy-900 mb-2">Office Hours</h4>
                                        <div className="text-navy-700 font-body text-sm space-y-1">
                                            <div>Monday to Friday: 9am-8pm</div>
                                            <div>Saturday: 10am-7pm</div>
                                            <div className="text-red-500">Sunday: Closed</div>
                                            <p className="pt-2 text-xs text-gold-600 font-semibold uppercase tracking-wider">
                                                * 24/7 Access for Members
                                            </p>
                                        </div>
                                    </div>

                                    <div className="text-center">
                                        <div className="w-12 h-12 rounded-full bg-gold-500/10 flex items-center justify-center mx-auto mb-4 text-gold-500">
                                            <Phone className="w-6 h-6" />
                                        </div>
                                        <h4 className="font-bold text-navy-900 mb-2">Contact</h4>
                                        <div className="text-navy-700 font-body text-sm space-y-1 flex flex-col">
                                            <a href="tel:+971585779312" className="hover:text-gold-500 transition-colors">+971 58 577 9312</a>
                                            <a href="mailto:contact@jetsetbc.com" className="hover:text-gold-500 transition-colors">contact@jetsetbc.com</a>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-8 pt-8 border-t border-cream-200 text-center">
                                    <Button variant="secondary" asChild>
                                        <a href="https://share.google/PorP2aIgEQ7L2B2RQ" target="_blank" rel="noreferrer">
                                            Get Directions <ArrowRight className="ml-2 w-4 h-4" />
                                        </a>
                                    </Button>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 5. MAP SECTION - Full-width like homepage sections */}
            <section className="py-12 sm:py-16 md:py-24 bg-white">
                <div className="w-full h-[300px] sm:h-[400px] md:h-[500px] relative grayscale hover:grayscale-0 transition-all duration-500">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14441.934976462304!2d55.2416935871582!3d25.18690400000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f697de05c6e1f%3A0x9f530a5a77a5f1d2!2sJetset%20Business%20Center%20-%20Prime%20Tower!5e0!3m2!1sen!2sae!4v1766833326629!5m2!1sen!2sae"
                        width="100%"
                        height="100%"
                        allowFullScreen={false}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="border-0 w-full h-full"
                    ></iframe>
                </div>
            </section>

            {/* 6. FAQ SECTION - Alternating background like homepage */}
            <section className="bg-cream-50 py-24 md:py-32">
                <div className="container-custom max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-display font-bold text-navy-900 mb-4">Frequently Asked Questions</h2>
                        <p className="text-navy-700/80 font-body text-lg">Everything you need to know about our services.</p>
                    </div>

                    <div className="bg-white rounded-2xl p-8 shadow-sm border border-cream-100">
                        <FAQItem
                            question="What are your office hours?"
                            answer="Our reception is staffed Monday to Friday from 9am-8pm, and Saturday from 10am-7pm. However, members have 24/7 secure access to their private offices and common areas."
                        />
                        <FAQItem
                            question="Is parking available?"
                            answer="Yes, Prime Tower offers ample parking space. We can also arrange valid parking for your guests upon request."
                        />
                        <FAQItem
                            question="Can I upgrade my office space as my team grows?"
                            answer="Absolutely! Jetset is designed to scale with your business. You can easily move to a larger office or add more desks as your team expands, with flexible contract terms."
                        />
                        <FAQItem
                            question="Do you provide business setup services?"
                            answer="Yes, we offer comprehensive business setup assistance, including trade licensing, visa processing, and bank account opening support."
                        />
                    </div>
                </div>
            </section>

            {/* 7. CTA */}
            <CTASection />
        </main>
    );
}
