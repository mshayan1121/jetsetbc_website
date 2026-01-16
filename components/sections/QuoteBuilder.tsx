"use client";

import React, { useState, useRef, useEffect } from "react";
import { ChevronDown, ArrowRight, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface ServiceType {
    id: string;
    label: string;
    options: string[];
    template: string;
    secondLabel: string;
}

const services: ServiceType[] = [
    {
        id: "private-office",
        label: "Serviced Private Office",
        options: ["1 Person", "2-4 People", "5+ People"],
        template: "Hi, I am interested in a Private Office for {option} at Prime Tower.",
        secondLabel: "Capacity"
    },
    {
        id: "virtual-office",
        label: "Virtual Office (Ejari)",
        options: ["New Trade License", "License Renewal"],
        template: "Hi, I need a Virtual Office for {option}.",
        secondLabel: "License Type"
    },
    {
        id: "coworking",
        label: "Coworking Desk",
        options: ["Monthly Access", "Daily Pass"],
        template: "Hi, I am interested in a Coworking Desk ({option}).",
        secondLabel: "Duration"
    },
    {
        id: "meeting-room",
        label: "Meeting Room",
        options: ["Hourly", "Full Day"],
        template: "Hi, I would like to book a Meeting Room ({option}).",
        secondLabel: "Duration"
    },
    {
        id: "company-formation",
        label: "Company Formation / PRO",
        options: ["Mainland License", "Freezone License", "Visa Services"],
        template: "Hi, I need assistance with Company Formation ({option}).",
        secondLabel: "Service Type"
    }
];

const QuoteBuilder = () => {
    const [selectedService, setSelectedService] = useState(services[0]);
    const [selectedOption, setSelectedOption] = useState(services[0].options[0]);
    
    const [isServiceOpen, setIsServiceOpen] = useState(false);
    const [isOptionOpen, setIsOptionOpen] = useState(false);

    const serviceRef = useRef<HTMLDivElement>(null);
    const optionRef = useRef<HTMLDivElement>(null);

    // Close dropdowns when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (serviceRef.current && !serviceRef.current.contains(event.target as Node)) {
                setIsServiceOpen(false);
            }
            if (optionRef.current && !optionRef.current.contains(event.target as Node)) {
                setIsOptionOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleServiceSelect = (service: typeof services[0]) => {
        setSelectedService(service);
        setSelectedOption(service.options[0]);
        setIsServiceOpen(false);
    };

    const handleOptionSelect = (option: string) => {
        setSelectedOption(option);
        setIsOptionOpen(false);
    };

    const handleAction = () => {
        const text = selectedService.template.replace("{option}", selectedOption);
        const url = `https://wa.me/971585779312?text=${encodeURIComponent(text)}`;
        window.open(url, "_blank");
    };

    return (
        <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="bg-white rounded-lg shadow-2xl p-4 sm:p-6 w-full max-w-4xl mx-auto mt-8 border border-cream-100"
        >
            <div className="flex flex-col md:flex-row gap-4 items-center">
                
                <div className="w-full md:flex-1 relative" ref={serviceRef}>
                    <div className="space-y-2">
                        <label className="text-xs font-accent font-bold uppercase tracking-widest text-navy-600">
                            I am looking for...
                        </label>
                        <button
                            onClick={() => { setIsServiceOpen(!isServiceOpen); setIsOptionOpen(false); }}
                            className="w-full flex items-center justify-between bg-cream-50 hover:bg-cream-100 border border-cream-200 rounded-md px-4 py-3 text-left transition-colors"
                        >
                            <span className="font-medium text-navy-900 truncate">{selectedService.label}</span>
                            <ChevronDown className={cn("w-4 h-4 text-navy-500 transition-transform", isServiceOpen && "rotate-180")} />
                        </button>
                    </div>

                    <AnimatePresence>
                        {isServiceOpen && (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 10 }}
                                className="absolute bottom-full left-0 right-0 mb-2 bg-white border border-cream-100 rounded-md shadow-luxury-lg z-50 overflow-hidden"
                            >
                                {services.map((service) => (
                                    <button
                                        key={service.id}
                                        onClick={() => handleServiceSelect(service)}
                                        className={cn(
                                            "w-full text-left px-4 py-3 text-sm hover:bg-cream-50 transition-colors flex items-center justify-between",
                                            selectedService.id === service.id ? "text-gold-600 font-medium bg-cream-50/50" : "text-navy-700"
                                        )}
                                    >
                                        {service.label}
                                        {selectedService.id === service.id && <Check className="w-4 h-4" />}
                                    </button>
                                ))}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                <div className="w-full md:flex-1 relative" ref={optionRef}>
                    <div className="space-y-2">
                        <label className="text-xs font-accent font-bold uppercase tracking-widest text-navy-600">
                            {selectedService.secondLabel || "Details"}
                        </label>
                        <button
                            onClick={() => { setIsOptionOpen(!isOptionOpen); setIsServiceOpen(false); }}
                            className="w-full flex items-center justify-between bg-cream-50 hover:bg-cream-100 border border-cream-200 rounded-md px-4 py-3 text-left transition-colors"
                        >
                            <span className="font-medium text-navy-900 truncate">{selectedOption}</span>
                            <ChevronDown className={cn("w-4 h-4 text-navy-500 transition-transform", isOptionOpen && "rotate-180")} />
                        </button>
                    </div>

                    <AnimatePresence>
                        {isOptionOpen && (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 10 }}
                                className="absolute bottom-full left-0 right-0 mb-2 bg-white border border-cream-100 rounded-md shadow-luxury-lg z-50 overflow-hidden"
                            >
                                {selectedService.options.map((option) => (
                                    <button
                                        key={option}
                                        onClick={() => handleOptionSelect(option)}
                                        className={cn(
                                            "w-full text-left px-4 py-3 text-sm hover:bg-cream-50 transition-colors flex items-center justify-between",
                                            selectedOption === option ? "text-gold-600 font-medium bg-cream-50/50" : "text-navy-700"
                                        )}
                                    >
                                        {option}
                                        {selectedOption === option && <Check className="w-4 h-4" />}
                                    </button>
                                ))}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {/* Action Button */}
                <div className="w-full md:w-auto">
                    <div className="space-y-2">
                        {/* Invisible label to align button with inputs */}
                        <label className="text-xs font-accent font-bold uppercase tracking-widest invisible hidden md:block">
                            Capacity
                        </label>
                        <button
                            onClick={handleAction}
                            className="w-full md:w-auto whitespace-nowrap bg-navy-900 text-white hover:bg-navy-800 transition-all duration-300 px-8 py-3 rounded-md font-accent font-bold uppercase tracking-widest flex items-center justify-center gap-2 shadow-navy-sm hover:shadow-navy-md"
                        >
                            Check Availability <ArrowRight className="w-4 h-4" />
                        </button>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default QuoteBuilder;
