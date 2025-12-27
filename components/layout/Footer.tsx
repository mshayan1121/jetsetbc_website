"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
    Phone,
    Mail,
    MapPin,
    Instagram,
    Facebook,
    Star,
    Award,
    MessageCircle,
    ArrowUpRight
} from "lucide-react";
import { Badge } from "@/components/ui/Badge";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const footerLinks = {
        services: [
            { name: "Private Offices", href: "/services/private-offices" },
            { name: "Coworking Spaces", href: "/services/coworking" },
            { name: "Meeting Rooms", href: "/services/meeting-rooms" },
            { name: "Virtual Ejari & Setup", href: "/services/business-setup" },
        ],
        quickLinks: [
            { name: "About Us", href: "/about" },
            { name: "Location", href: "/locations/prime-tower" },
            { name: "Pricing", href: "/pricing" },
            { name: "Gallery", href: "/gallery" },
            { name: "Blog", href: "/blog" },
            { name: "Book a Tour", href: "/book-tour" },
            { name: "Contact", href: "/contact" },
        ],
        contact: {
            whatsapp: { label: "+971 58 577 9312", href: "https://wa.me/971585779312" },
            phone: { label: "04 665 7555", href: "tel:+97146657555" },
            email: { label: "contact@jetsetbc.com", href: "mailto:contact@jetsetbc.com" },
            address: "Prime Tower, Business Bay, Dubai",
        },
        socials: [
            { icon: Instagram, href: "https://www.instagram.com/jetsetbc_dxb/?igsh=dTE0Z2djM3F0MHIy#", label: "Instagram" },
            { icon: Facebook, href: "https://www.facebook.com/jetsetbc", label: "Facebook" },
        ],
    };

    return (
        <footer className="relative w-full bg-navy-900 text-cream-50 pt-12 sm:pt-16 md:pt-20 pb-8 sm:pb-10 overflow-hidden">
            <div className="container-custom">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 md:gap-12 lg:gap-8 mb-12 sm:mb-16">
                    {/* COLUMN 1 - About */}
                    <div className="space-y-6">
                        <Link href="/" className="inline-block group">
                            <Image
                                src="/logo.png"
                                alt="Jetset Business Center"
                                width={240}
                                height={72}
                                className="h-16 w-auto mb-4 brightness-0 invert"
                            />
                        </Link>

                        <p className="text-cream-200/80 max-w-xs leading-relaxed">
                            Award-Winning Workspace in Dubai. Providing world-class business environments since 2003.
                        </p>

                        <div className="space-y-3">
                            <div className="flex items-center gap-2">
                                <Badge variant="outline" className="border-gold-500/30 text-gold-400 gap-1.5 py-1 px-3 bg-gold-500/5">
                                    <Award className="w-3.5 h-3.5" />
                                    Best Business Center 2024
                                </Badge>
                            </div>
                            <div className="flex items-center gap-2">
                                <Badge variant="outline" className="border-gold-500/30 text-gold-400 gap-1.5 py-1 px-3 bg-gold-500/5">
                                    <Award className="w-3.5 h-3.5" />
                                    Best Newcomer 2023
                                </Badge>
                            </div>
                        </div>

                        <div className="flex items-center gap-3 pt-2">
                            <div className="flex -space-x-1">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <Star key={star} className="w-4 h-4 fill-gold-500 text-gold-500" />
                                ))}
                            </div>
                            <span className="text-sm font-medium">
                                4.9 ★ <span className="text-cream-200/60 font-normal">(162 reviews)</span>
                            </span>
                        </div>
                    </div>

                    {/* COLUMN 2 - Services */}
                    <div>
                        <h3 className="text-xl font-display font-semibold mb-8 relative inline-block group">
                            Services
                            <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gold-500 transition-all group-hover:w-full" />
                        </h3>
                        <ul className="space-y-4">
                            {footerLinks.services.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="group flex items-center py-1.5 text-cream-200/80 hover:text-gold-400 transition-colors"
                                    >
                                        <span className="w-0 overflow-hidden group-hover:w-4 transition-all duration-300">
                                            <ArrowUpRight className="w-3.5 h-3.5 mr-1" />
                                        </span>
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* COLUMN 3 - Quick Links */}
                    <div>
                        <h3 className="text-xl font-display font-semibold mb-8 relative inline-block group">
                            Quick Links
                            <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gold-500 transition-all group-hover:w-full" />
                        </h3>
                        <ul className="space-y-4">
                            {footerLinks.quickLinks.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="group flex items-center py-1.5 text-cream-200/80 hover:text-gold-400 transition-colors"
                                    >
                                        <span className="w-0 overflow-hidden group-hover:w-4 transition-all duration-300">
                                            <ArrowUpRight className="w-3.5 h-3.5 mr-1" />
                                        </span>
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* COLUMN 4 - Contact */}
                    <div>
                        <h3 className="text-xl font-display font-semibold mb-8 relative inline-block group">
                            Get in Touch
                            <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gold-500 transition-all group-hover:w-full" />
                        </h3>
                        <div className="space-y-6">
                            <a
                                href={footerLinks.contact.whatsapp.href}
                                className="flex items-start gap-4 text-cream-200/80 hover:text-gold-400 transition-colors group"
                            >
                                <div className="w-12 h-12 rounded-full bg-navy-800 flex items-center justify-center group-hover:bg-gold-500/10 transition-colors border border-white/5 group-hover:border-gold-500/20">
                                    <MessageCircle className="w-5 h-5" />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-xs text-cream-200/40 uppercase tracking-widest font-medium">WhatsApp</span>
                                    <span className="font-semibold">{footerLinks.contact.whatsapp.label}</span>
                                </div>
                            </a>

                            <a
                                href={footerLinks.contact.phone.href}
                                className="flex items-start gap-4 text-cream-200/80 hover:text-gold-400 transition-colors group"
                            >
                                <div className="w-12 h-12 rounded-full bg-navy-800 flex items-center justify-center group-hover:bg-gold-500/10 transition-colors border border-white/5 group-hover:border-gold-500/20">
                                    <Phone className="w-5 h-5" />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-xs text-cream-200/40 uppercase tracking-widest font-medium">Call Us</span>
                                    <span className="font-semibold">{footerLinks.contact.phone.label}</span>
                                </div>
                            </a>

                            <a
                                href={footerLinks.contact.email.href}
                                className="flex items-start gap-4 text-cream-200/80 hover:text-gold-400 transition-colors group"
                            >
                                <div className="w-12 h-12 rounded-full bg-navy-800 flex items-center justify-center group-hover:bg-gold-500/10 transition-colors border border-white/5 group-hover:border-gold-500/20">
                                    <Mail className="w-5 h-5" />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-xs text-cream-200/40 uppercase tracking-widest font-medium">Email</span>
                                    <span className="font-semibold">{footerLinks.contact.email.label}</span>
                                </div>
                            </a>

                            <div className="flex items-start gap-4 text-cream-200/80">
                                <div className="w-12 h-12 rounded-full bg-navy-800 flex items-center justify-center border border-white/5">
                                    <MapPin className="w-5 h-5" />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-xs text-cream-200/40 uppercase tracking-widest font-medium">Location</span>
                                    <span className="leading-relaxed">{footerLinks.contact.address}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* BOTTOM ROW */}
                <div className="pt-8 sm:pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 sm:gap-6 md:gap-8">
                    <div className="flex flex-col sm:flex-row items-center gap-2 text-xs sm:text-sm text-cream-200/40 italic text-center sm:text-left">
                        <span>© {currentYear} Jetset Business Center.</span>
                        <span className="hidden sm:inline">|</span>
                        <span>Family-run business since 2003.</span>
                    </div>

                    <div className="flex items-center gap-4">
                        {footerLinks.socials.map((social) => {
                            const Icon = social.icon;
                            return (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    className="w-12 h-12 rounded-full bg-navy-800 flex items-center justify-center text-cream-200/60 hover:text-gold-500 hover:bg-gold-500/10 border border-white/5 hover:border-gold-500/30 transition-all duration-300"
                                    aria-label={social.label}
                                >
                                    <Icon className="w-5 h-5" />
                                </a>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* Subtle Background Elements */}
            <div className="absolute bottom-0 right-0 w-88 h-88 bg-gold-500/5 blur-[120px] rounded-full -mr-44 -mb-44 pointer-events-none overflow-hidden" style={{ maxWidth: '100vw' }} />
            <div className="absolute top-0 left-0 w-88 h-88 bg-teal-500/5 blur-[120px] rounded-full -ml-44 -mt-44 pointer-events-none overflow-hidden" style={{ maxWidth: '100vw' }} />
        </footer>
    );
};

export default Footer;
