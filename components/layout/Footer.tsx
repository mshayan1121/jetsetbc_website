"use client";

import React from "react";
import Link from "next/link";
import { Mail, MapPin, Phone, Instagram, Facebook, ArrowRight, Trophy } from "lucide-react";
import { Button } from "../ui/Button";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        { icon: <Instagram className="w-5 h-5" />, href: "https://www.instagram.com/jetsetbc_dxb/?igsh=dTE0Z2djM3F0MHIy#", label: "Instagram" },
        { icon: <Facebook className="w-5 h-5" />, href: "https://www.facebook.com/jetsetbc", label: "Facebook" },
    ];

    const quickLinks = [
        { name: "About Us", href: "/about" },
        { name: "Our Locations", href: "/locations" },
        { name: "Gallery", href: "/gallery" },
        { name: "Blog", href: "/blog" },
        { name: "Pricing", href: "/pricing" },
        { name: "Contact", href: "/contact" },
    ];

    const servicesLinks = [
        { name: "Serviced Offices", href: "/services/private-offices" },
        { name: "Virtual Office & Ejari", href: "/services/business-setup" },
        { name: "Coworking", href: "/services/coworking" },
        { name: "Meeting Rooms", href: "/services/meeting-rooms" },
        { name: "Business Setup & PRO", href: "/services/business-setup" },
    ];

    return (
        <footer className="w-full bg-navy-900 text-cream-50 pt-20 pb-8 border-t border-white/5 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-500/20 to-transparent"></div>
            
            <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
                    {/* Brand Column */}
                    <div className="space-y-6">
                        <Link href="/" className="inline-block group">
                            <h3 className="text-2xl font-display font-bold text-white uppercase tracking-widest group-hover:text-gold-400 transition-colors duration-300">
                                Jetset <span className="text-gold-500">Business Center</span>
                            </h3>
                        </Link>
                        
                        <div className="space-y-4">
                            <div className="flex items-start gap-3">
                                <Trophy className="w-5 h-5 text-gold-500 shrink-0 mt-1" />
                                <div className="space-y-2">
                                    <p className="text-cream-200/80 leading-relaxed text-sm font-medium">
                                        Award-Winning Workspace in Dubai. Providing world-class business environments since 2003.
                                    </p>
                                    <div className="space-y-1">
                                        <p className="text-gold-400 text-xs font-bold uppercase tracking-wider">Best Business Center 2024</p>
                                        <p className="text-gold-400 text-xs font-bold uppercase tracking-wider">Best Newcomer 2023</p>
                                        <p className="text-xs text-cream-200/60">
                                            Recognized by <a href="https://www.letswork.io/" target="_blank" rel="noopener noreferrer" className="hover:text-gold-500 underline decoration-gold-500/30 underline-offset-2 transition-colors">Letswork</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 pt-2">
                            {socialLinks.map((social, idx) => (
                                <a 
                                    key={idx}
                                    href={social.href}
                                    aria-label={social.label}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-cream-200 hover:bg-gold-500 hover:text-navy-900 transition-all duration-300"
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Services Column */}
                    <div>
                        <h4 className="text-sm font-display font-bold text-gold-500 uppercase tracking-widest mb-6">
                            Solutions
                        </h4>
                        <ul className="space-y-3">
                            {servicesLinks.map((link) => (
                                <li key={link.name}>
                                    <Link 
                                        href={link.href}
                                        className="text-cream-200/70 hover:text-white hover:translate-x-1 transition-all duration-300 text-sm flex items-center gap-2"
                                    >
                                        <span className="w-1 h-1 rounded-full bg-gold-500/50"></span>
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company Column */}
                    <div>
                        <h4 className="text-sm font-display font-bold text-gold-500 uppercase tracking-widest mb-6">
                            Company
                        </h4>
                        <ul className="space-y-3">
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    <Link 
                                        href={link.href}
                                        className="text-cream-200/70 hover:text-white hover:translate-x-1 transition-all duration-300 text-sm flex items-center gap-2"
                                    >
                                        <span className="w-1 h-1 rounded-full bg-gold-500/50"></span>
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Column */}
                    <div className="space-y-6">
                        <h4 className="text-sm font-display font-bold text-gold-500 uppercase tracking-widest mb-6">
                            Get in Touch
                        </h4>
                        
                        <div className="space-y-4 text-cream-200/80 text-sm">
                            <div className="flex items-start gap-3 group">
                                <div className="p-2 rounded bg-white/5 text-gold-500 group-hover:bg-gold-500 group-hover:text-navy-900 transition-colors duration-300 shrink-0">
                                    <MapPin className="w-4 h-4" />
                                </div>
                                <p className="leading-relaxed pt-1">
                                    20th Floor, Prime Tower,<br />
                                    Business Bay, Dubai, UAE
                                </p>
                            </div>
                            
                            <div className="flex items-center gap-3 group">
                                <div className="p-2 rounded bg-white/5 text-gold-500 group-hover:bg-gold-500 group-hover:text-navy-900 transition-colors duration-300 shrink-0">
                                    <Phone className="w-4 h-4" />
                                </div>
                                <a href="tel:+971585779312" className="hover:text-white transition-colors pt-0.5">
                                    +971 58 577 9312
                                </a>
                            </div>

                            <div className="flex items-center gap-3 group">
                                <div className="p-2 rounded bg-white/5 text-gold-500 group-hover:bg-gold-500 group-hover:text-navy-900 transition-colors duration-300 shrink-0">
                                    <Mail className="w-4 h-4" />
                                </div>
                                <a href="mailto:contact@jetsetbc.com" className="hover:text-white transition-colors pt-0.5">
                                    contact@jetsetbc.com
                                </a>
                            </div>
                        </div>

                        <div className="pt-2">
                            <Button 
                                asChild 
                                variant="outline" 
                                className="w-full justify-between group border-white/20 hover:border-gold-500 hover:bg-gold-500 hover:text-navy-900 text-white"
                            >
                                <Link href="/book-tour">
                                    Book a Tour
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Conversion nudges */}
                <div className="pt-8 mt-8 border-t border-white/5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm text-cream-200/80">
                    <p><span className="text-gold-400 font-semibold">Free Consultation</span> — Not sure what you need? Get a free consultation with our workspace advisor.</p>
                    <p><span className="text-gold-400 font-semibold">WhatsApp Instant</span> — Average response time: under 5 minutes.</p>
                    <p><span className="text-gold-400 font-semibold">Free Trial Coworking Day</span> — Try our coworking space for one day — completely free.</p>
                    <p><span className="text-gold-400 font-semibold">Limited availability</span> — Only a few private offices left this month in Business Bay.</p>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 mt-8 border-t border-white/5 flex flex-col md:flex-row justify-center items-center gap-4">
                    <p className="text-xs text-cream-200/40 text-center">
                        © {currentYear} Jetset Business Center. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;