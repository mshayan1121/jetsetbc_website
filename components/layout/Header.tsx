"use client";

import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Briefcase, Building2, CalendarDays, ChevronDown, Menu, Phone, Users, X } from "lucide-react";
import WhatsAppIcon from "../ui/WhatsAppIcon";
import { cn } from "../../lib/utils";

type NavLink = {
    name: string;
    href: string;
    dropdown?: { name: string; href: string }[];
};

const navLinks: NavLink[] = [
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

const serviceMeta: Record<
    string,
    {
        icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
        description: string;
    }
> = {
    "Private Offices": {
        icon: Building2,
        description: "Dedicated suites with concierge-style support.",
    },
    Coworking: {
        icon: Users,
        description: "Flexible desks in a premium business lounge.",
    },
    "Meeting Rooms": {
        icon: CalendarDays,
        description: "Book-ready spaces for clients and teams.",
    },
    "Business Setup": {
        icon: Briefcase,
        description: "Support for licensing, admin, and launch.",
    },
};

const Header = () => {
    const headerRef = useRef<HTMLElement | null>(null);
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

    // Keep a CSS variable in sync with the *actual* fixed header offset (responsive + scroll-state aware)
    useEffect(() => {
        const el = headerRef.current;
        if (!el) return;

        let raf = 0;
        const updateHeaderOffset = () => {
            if (raf) cancelAnimationFrame(raf);
            raf = requestAnimationFrame(() => {
                const rect = el.getBoundingClientRect();
                // Use the element's actual height (not viewport top offset).
                const offset = Math.max(0, Math.ceil(rect.height));
                document.documentElement.style.setProperty("--header-offset", `${offset}px`);
            });
        };

        updateHeaderOffset();

        const ro = new ResizeObserver(updateHeaderOffset);
        ro.observe(el);
        window.addEventListener("resize", updateHeaderOffset);
        window.addEventListener("orientationchange", updateHeaderOffset);
        window.addEventListener("scroll", updateHeaderOffset, { passive: true });

        return () => {
            ro.disconnect();
            window.removeEventListener("resize", updateHeaderOffset);
            window.removeEventListener("orientationchange", updateHeaderOffset);
            window.removeEventListener("scroll", updateHeaderOffset);
            if (raf) cancelAnimationFrame(raf);
        };
    }, [isScrolled]);

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
            ref={headerRef}
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out border-b",
                isScrolled
                    ? "bg-white/95 backdrop-blur-xl shadow-[0_2px_20px_rgba(10,24,40,0.08)] border-cream-200/80 py-2 sm:py-3"
                    : "bg-white border-cream-200 py-3 sm:py-4 md:py-5"
            )}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center">
                    <Image
                        src="/logo.png"
                        alt="Jetset Business Center"
                        width={200}
                        height={60}
                        className="h-12 sm:h-14 md:h-16 w-auto transition-all duration-500"
                        priority
                    />
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden lg:flex items-center gap-1">
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
                                    "relative px-3 py-2 rounded-full transition-all duration-500 flex items-center gap-1",
                                    "text-[11px] font-accent font-semibold uppercase tracking-[0.12em]",
                                    "text-navy-900/70 hover:text-navy-900 hover:bg-cream-100/80",
                                    pathname === link.href && "text-navy-900"
                                )}
                            >
                                {link.name}
                                {link.dropdown && (
                                    <ChevronDown className={cn("w-4 h-4 transition-transform duration-300", activeDropdown === link.name && "rotate-180")} />
                                )}
                                {pathname === link.href && (
                                    <motion.div
                                        layoutId="navDot"
                                        className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-gold-500"
                                    />
                                )}
                            </Link>

                            {/* Dropdown Menu */}
                            {link.dropdown && (
                                <AnimatePresence>
                                    {activeDropdown === link.name && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                            animate={{ opacity: 1, y: 0, scale: 1 }}
                                            exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                            transition={{ duration: 0.2, ease: "easeOut" }}
                                            className={cn(
                                                "absolute top-full left-0 min-w-[320px] bg-white/95 backdrop-blur-xl border border-white/60 rounded-xl mt-3 overflow-hidden",
                                                "filter drop-shadow-[0_22px_60px_rgba(10,23,46,0.18)]"
                                            )}
                                        >
                                            {/* caret */}
                                            <div className="absolute -top-1.5 left-8 w-3 h-3 rotate-45 bg-white/95 border-l border-t border-white/60" />
                                            {/* gold accent */}
                                            <div className="h-0.5 bg-gradient-to-r from-gold-500/60 via-gold-400 to-gold-500/60" />
                                            {link.dropdown.map((item) => (
                                                <Link
                                                    key={item.name}
                                                    href={item.href}
                                                    className={cn(
                                                        "flex items-start gap-3 px-5 py-4 transition-all duration-300 whitespace-nowrap",
                                                        "hover:bg-cream-50/80"
                                                    )}
                                                >
                                                    {(() => {
                                                        const meta = serviceMeta[item.name];
                                                        const Icon = meta?.icon;
                                                        return (
                                                            <>
                                                                <div className="mt-0.5 w-9 h-9 rounded-lg bg-cream-100/80 flex items-center justify-center text-gold-600">
                                                                    {Icon ? <Icon className="w-4 h-4" /> : null}
                                                                </div>
                                                                <div className="flex flex-col">
                                                                    <span className="text-[11px] font-accent font-bold uppercase tracking-[0.12em] text-navy-900">
                                                                        {item.name}
                                                                    </span>
                                                                    <span className="mt-1 text-[12px] leading-snug text-navy-900/60">
                                                                        {meta?.description ?? ""}
                                                                    </span>
                                                                </div>
                                                            </>
                                                        );
                                                    })()}
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
                <div className="flex items-center gap-4">
                    <div className="hidden lg:flex items-center gap-4 mr-2">
                        <a
                            href="tel:+971585779312"
                            className={cn(
                                "w-8 h-8 rounded-full flex items-center justify-center transition-all duration-500",
                                "text-navy-900/60 hover:text-navy-900 hover:bg-cream-100/80"
                            )}
                            aria-label="Call Us"
                        >
                            <Phone className="w-4 h-4" />
                        </a>
                        <a
                            href="https://wa.me/971585779312"
                            className={cn(
                                "w-8 h-8 rounded-full flex items-center justify-center transition-all duration-500",
                                "text-navy-900/60 hover:text-navy-900 hover:bg-cream-100/80"
                            )}
                            aria-label="WhatsApp Us"
                        >
                            <WhatsAppIcon className="w-4 h-4" />
                        </a>
                    </div>

                    <Link
                        href="/book-tour"
                        className={cn(
                            "hidden md:inline-flex items-center justify-center rounded-full px-5 py-2 transition-all duration-500",
                            "text-[11px] font-accent font-bold uppercase tracking-[0.12em]",
                            "hover:-translate-y-px",
                            "bg-navy-900 text-white shadow-[0_14px_40px_rgba(10,23,46,0.35)] hover:shadow-[0_18px_55px_rgba(10,23,46,0.45)]"
                        )}
                    >
                        Book a Tour
                    </Link>

                    {/* Mobile Menu Toggle */}
                    <button
                        className={cn(
                            "lg:hidden focus:outline-none transition-colors duration-500",
                            "text-navy-900"
                        )}
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
                                    "fixed top-0 right-0 h-[100dvh] w-[80%] max-w-sm bg-navy-900 z-[70] lg:hidden shadow-2xl flex flex-col",
                                    isShortScreen && "mobile-menu-short"
                                )}
                            >
                                <div className="flex flex-col h-full">
                                    <div className="h-0.5 bg-gradient-to-r from-gold-500/60 via-gold-400 to-gold-500/60 flex-shrink-0" />
                                    {/* Header */}
                                    <div className="flex items-center justify-between px-6 pt-4 pb-3 border-b border-white/10 flex-shrink-0">
                                        <Link
                                            href="/"
                                            onClick={() => {
                                                setIsMobileMenuOpen(false);
                                                setMobileServicesOpen(false);
                                            }}
                                            className="flex items-center"
                                            aria-label="Home"
                                        >
                                            <Image
                                                src="/logo.png"
                                                alt="Jetset Business Center"
                                                width={180}
                                                height={54}
                                                className="h-12 w-auto brightness-0 invert"
                                                priority
                                            />
                                        </Link>
                                        <button 
                                            onClick={() => {
                                                setIsMobileMenuOpen(false);
                                                setMobileServicesOpen(false);
                                            }}
                                            className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/15 transition-colors"
                                        >
                                            <X className="w-5 h-5 text-white" />
                                        </button>
                                    </div>

                                    {/* Navigation Links */}
                                    <nav className="flex-1 overflow-y-auto space-y-1.5 px-6 py-4 scroll-smooth">
                                        {navLinks.map((link) => (
                                            <div key={link.name} className="flex flex-col">
                                                {link.dropdown ? (
                                                    <>
                                                        <button
                                                            onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                                                            className="text-base mobile-menu-link font-accent font-semibold uppercase tracking-widest text-white/75 flex items-center justify-between py-2.5 px-4 hover:bg-white/8 hover:text-white rounded-lg transition-colors group"
                                                        >
                                                            {link.name}
                                                            <ChevronDown className={cn("w-4 h-4 transition-transform duration-300", mobileServicesOpen && "rotate-180")} />
                                                        </button>
                                                        <AnimatePresence>
                                                            {mobileServicesOpen && (
                                                                <motion.div
                                                                    initial={{ height: 0, opacity: 0 }}
                                                                    animate={{ height: "auto", opacity: 1 }}
                                                                    exit={{ height: 0, opacity: 0 }}
                                                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                                                    className="overflow-hidden"
                                                                >
                                                                    <div className="mt-1.5 ml-4 space-y-1 border-l border-gold-500/30 pl-3 py-2">
                                                                        {link.dropdown.map((item) => (
                                                                            <Link
                                                                                key={item.name}
                                                                                href={item.href}
                                                                                onClick={() => {
                                                                                    setIsMobileMenuOpen(false);
                                                                                    setMobileServicesOpen(false);
                                                                                }}
                                                                                className="flex items-center gap-2 py-2 px-3 text-xs font-accent uppercase tracking-wider text-white/70 hover:text-white hover:bg-white/8 rounded-lg transition-colors"
                                                                            >
                                                                                {(() => {
                                                                                    const meta = serviceMeta[item.name];
                                                                                    const Icon = meta?.icon;
                                                                                    return (
                                                                                        <>
                                                                                            {Icon ? <Icon className="w-4 h-4 text-gold-500/70" /> : null}
                                                                                            <span>{item.name}</span>
                                                                                        </>
                                                                                    );
                                                                                })()}
                                                                            </Link>
                                                                        ))}
                                                                    </div>
                                                                </motion.div>
                                                            )}
                                                        </AnimatePresence>
                                                    </>
                                                ) : (
                                                    <Link
                                                        href={link.href}
                                                        onClick={() => setIsMobileMenuOpen(false)}
                                                        className={cn(
                                                            "text-base mobile-menu-link font-accent font-semibold uppercase tracking-widest py-2.5 px-4 rounded-lg transition-colors",
                                                            pathname === link.href
                                                                ? "text-gold-400 bg-white/8"
                                                                : "text-white/75 hover:text-white hover:bg-white/8"
                                                        )}
                                                    >
                                                        {link.name}
                                                    </Link>
                                                )}
                                            </div>
                                        ))}
                                    </nav>

                                    {/* Bottom Actions - Pinned to Bottom */}
                                    <div className="flex-shrink-0 px-6 pt-4 pb-4 space-y-4 border-t border-white/10 bg-navy-900 z-10" style={{ paddingBottom: 'max(1rem, env(safe-area-inset-bottom, 1rem))' }}>
                                        <div className="flex items-center justify-center">
                                            <a href="tel:+971585779312" className="flex items-center gap-2 font-accent text-xs mobile-menu-action uppercase tracking-widest text-white/60 hover:text-gold-400 transition-colors py-1.5">
                                                <Phone className="w-4 h-4 mobile-menu-icon" /> Call
                                            </a>
                                            <div className="mx-5 h-5 w-px bg-white/10" />
                                            <a href="https://wa.me/971585779312" className="flex items-center gap-2 font-accent text-xs mobile-menu-action uppercase tracking-widest text-white/60 hover:text-gold-400 transition-colors py-1.5">
                                                <WhatsAppIcon className="w-4 h-4 mobile-menu-icon" /> WhatsApp
                                            </a>
                                        </div>
                                        <Link
                                            href="/book-tour"
                                            onClick={() => setIsMobileMenuOpen(false)}
                                            className={cn(
                                                "w-full mobile-menu-button inline-flex items-center justify-center rounded-full px-5 py-3 transition-all",
                                                "bg-gold-500 text-navy-900 shadow-[0_16px_55px_rgba(217,169,72,0.35)] hover:shadow-[0_22px_70px_rgba(217,169,72,0.5)] hover:-translate-y-px",
                                                "text-[11px] font-accent font-bold uppercase tracking-[0.12em]"
                                            )}
                                        >
                                            Book a Tour
                                        </Link>
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