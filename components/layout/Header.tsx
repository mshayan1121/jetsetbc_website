"use client";

import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import { Button } from "../ui/Button";
import WhatsAppIcon from "../ui/WhatsAppIcon";
import { cn } from "../../lib/utils";

const navLinks = [
    { name: "Home", href: "/" },
    {
        name: "Services",
        href: "/services",
        dropdown: [
            { name: "Private Offices", href: "/services/private-offices" },
            { name: "Coworking", href: "/services/coworking" },
            { name: "Meeting Rooms", href: "/services/meeting-rooms" },
            { name: "Business Setup", href: "/services/business-setup" },
        ],
    },
    { name: "Location", href: "/locations/prime-tower" },
    { name: "Pricing", href: "/pricing" },
    { name: "About", href: "/about" },
    { name: "Gallery", href: "/gallery" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
];

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
    const [mounted, setMounted] = useState(false);
    const [isShortScreen, setIsShortScreen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        setMounted(true);
        
        // Check if screen height is short
        const checkScreenHeight = () => {
            setIsShortScreen(window.innerHeight <= 700);
        };
        
        checkScreenHeight();
        window.addEventListener('resize', checkScreenHeight);
        window.addEventListener('orientationchange', checkScreenHeight);
        
        return () => {
            window.removeEventListener('resize', checkScreenHeight);
            window.removeEventListener('orientationchange', checkScreenHeight);
        };
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            // Save current scroll position
            const scrollY = window.scrollY;
            // Apply styles to lock scroll
            document.body.style.position = "fixed";
            document.body.style.top = `-${scrollY}px`;
            document.body.style.width = "100%";
            document.body.style.overflow = "hidden";
            
            return () => {
                // Restore scroll position
                document.body.style.position = "";
                document.body.style.top = "";
                document.body.style.width = "";
                document.body.style.overflow = "";
                window.scrollTo(0, scrollY);
            };
        }
    }, [isMobileMenuOpen]);

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out w-full",
                isScrolled
                    ? "bg-white shadow-md border-b border-cream-200 py-2 sm:py-3"
                    : "bg-white/80 backdrop-blur-md border-b border-white/20 py-3 sm:py-4 md:py-5"
            )}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center">
                    <Image
                        src="/logo.png"
                        alt="Jetset Business Center"
                        width={180}
                        height={54}
                        className="h-10 sm:h-12 md:h-14 w-auto"
                        priority
                    />
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden lg:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <div
                            key={link.name}
                            className="relative group"
                            onMouseEnter={() => link.dropdown && setActiveDropdown(link.name)}
                            onMouseLeave={() => setActiveDropdown(null)}
                        >
                            <Link
                                href={link.href}
                                className={cn(
                                    "text-sm font-accent font-medium uppercase tracking-widest text-navy-900/80 hover:text-navy-900 transition-colors duration-300 flex items-center gap-1 py-2",
                                    pathname === link.href && "text-gold-600"
                                )}
                            >
                                {link.name}
                                {link.dropdown && (
                                    <ChevronDown className={cn("w-4 h-4 transition-transform duration-300", activeDropdown === link.name && "rotate-180")} />
                                )}
                                {pathname === link.href && (
                                    <motion.div
                                        layoutId="underline"
                                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold-500"
                                    />
                                )}
                            </Link>

                            {/* Dropdown Menu */}
                            {link.dropdown && (
                                <AnimatePresence>
                                    {activeDropdown === link.name && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: 10 }}
                                            transition={{ duration: 0.2 }}
                                            className="absolute top-full left-0 w-56 bg-white shadow-luxury-md border border-cream-100 rounded-sm py-4 mt-2"
                                        >
                                            {link.dropdown.map((item) => (
                                                <Link
                                                    key={item.name}
                                                    href={item.href}
                                                    className="block px-6 py-3.5 text-xs font-accent uppercase tracking-wider text-navy-800 hover:bg-cream-50 hover:text-gold-600 transition-all duration-200"
                                                >
                                                    {item.name}
                                                </Link>
                                            ))}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            )}
                        </div>
                    ))}
                </nav>

                {/* Right Actions */}
                <div className="flex items-center space-x-4 md:space-x-6">
                    <div className="hidden sm:flex items-center space-x-4 text-navy-900">
                        <a href="tel:+971585779312" className="hover:text-gold-500 transition-colors">
                            <Phone className="w-5 h-5" />
                        </a>
                        <a href="https://wa.me/971585779312" className="hover:text-gold-500 transition-colors">
                            <WhatsAppIcon className="w-5 h-5" />
                        </a>
                    </div>

                    <Button variant="primary" size="sm" className="hidden md:flex" asChild>
                        <Link href="/book-tour">Book a Tour</Link>
                    </Button>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="lg:hidden text-navy-900 focus:outline-none"
                        onClick={() => {
                            setIsMobileMenuOpen(!isMobileMenuOpen);
                            if (isMobileMenuOpen) {
                                setMobileServicesOpen(false);
                            }
                        }}
                    >
                        {isMobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay - Rendered via portal at document body level */}
            {mounted && createPortal(
                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <>
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onClick={() => {
                                    setIsMobileMenuOpen(false);
                                    setMobileServicesOpen(false);
                                }}
                                className="fixed inset-0 top-0 h-[100dvh] bg-navy-900/90 z-[60] lg:hidden"
                            />
                            <motion.div
                                initial={{ x: "100%" }}
                                animate={{ x: 0 }}
                                exit={{ x: "100%" }}
                                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                                className={cn(
                                    "fixed top-0 right-0 h-[100dvh] w-[80%] max-w-sm bg-white z-[70] lg:hidden shadow-2xl flex flex-col",
                                    isShortScreen && "mobile-menu-short"
                                )}
                            >
                                <div className="flex flex-col h-full">
                                    {/* Header */}
                                    <div className="flex items-center justify-between px-6 pt-4 pb-3 border-b border-cream-200 flex-shrink-0">
                                        <span className="text-xl font-display font-bold text-navy-900 uppercase">Menu</span>
                                        <button 
                                            onClick={() => {
                                                setIsMobileMenuOpen(false);
                                                setMobileServicesOpen(false);
                                            }}
                                            className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-cream-100 transition-colors"
                                        >
                                            <X className="w-6 h-6 text-navy-900" />
                                        </button>
                                    </div>

                                    {/* Navigation Links */}
                                    <nav className="flex flex-col space-y-1.5 px-6 py-4 flex-shrink-0">
                                        {navLinks.map((link) => (
                                            <div key={link.name} className="flex flex-col">
                                                {link.dropdown ? (
                                                    <>
                                                        <button
                                                            onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                                                            className="text-base mobile-menu-link font-accent font-semibold uppercase tracking-widest text-navy-900 flex items-center justify-between py-2.5 px-4 hover:bg-cream-50 rounded-lg transition-colors group"
                                                        >
                                                            {link.name}
                                                            <ChevronDown className={cn("w-4 h-4 transition-transform duration-300", mobileServicesOpen && "rotate-180")} />
                                                        </button>
                                                        {mobileServicesOpen && (
                                                            <div className="mt-1.5 ml-4 space-y-1 bg-cream-50 rounded-lg p-2">
                                                                {link.dropdown.map((item) => (
                                                                    <Link
                                                                        key={item.name}
                                                                        href={item.href}
                                                                        onClick={() => {
                                                                            setIsMobileMenuOpen(false);
                                                                            setMobileServicesOpen(false);
                                                                        }}
                                                                        className="block py-2 px-4 text-xs font-accent uppercase tracking-wider text-navy-700 hover:text-navy-900 hover:bg-white rounded transition-colors"
                                                                    >
                                                                        {item.name}
                                                                    </Link>
                                                                ))}
                                                            </div>
                                                        )}
                                                    </>
                                                ) : (
                                                    <Link
                                                        href={link.href}
                                                        onClick={() => setIsMobileMenuOpen(false)}
                                                        className="text-base mobile-menu-link font-accent font-semibold uppercase tracking-widest text-navy-900 py-2.5 px-4 hover:bg-cream-50 rounded-lg transition-colors"
                                                    >
                                                        {link.name}
                                                    </Link>
                                                )}
                                            </div>
                                        ))}
                                    </nav>

                                    {/* Spacer - Pushes bottom actions down */}
                                    <div className="flex-grow" />

                                    {/* Bottom Actions - Pinned to Bottom */}
                                    <div className="flex-shrink-0 px-6 pt-4 pb-4 space-y-4 border-t border-cream-200" style={{ paddingBottom: 'max(1rem, env(safe-area-inset-bottom, 1rem))' }}>
                                        <div className="flex items-center space-x-6 justify-center text-navy-900">
                                            <a href="tel:+971585779312" className="flex items-center gap-2 font-accent text-xs mobile-menu-action uppercase tracking-widest hover:text-gold-500 transition-colors py-1.5">
                                                <Phone className="w-4 h-4 mobile-menu-icon" /> Call
                                            </a>
                                            <a href="https://wa.me/971585779312" className="flex items-center gap-2 font-accent text-xs mobile-menu-action uppercase tracking-widest hover:text-gold-500 transition-colors py-1.5">
                                                <WhatsAppIcon className="w-4 h-4 mobile-menu-icon" /> WhatsApp
                                            </a>
                                        </div>
                                        <Button variant="primary" size="lg" className="w-full mobile-menu-button" asChild>
                                            <Link href="/book-tour" onClick={() => setIsMobileMenuOpen(false)}>Book a Tour</Link>
                                        </Button>
                                    </div>
                                </div>
                            </motion.div>
                        </>
                    )}
                </AnimatePresence>,
                document.body
            )}
        </header>
    );
};

export default Header;
