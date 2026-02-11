"use client";

import React, { useState, useRef, useEffect } from "react";
import { ChevronDown, ArrowRight, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const WORKSPACE_TYPES = [
    { id: "private-office", label: "Private Office" },
    { id: "coworking", label: "Coworking" },
    { id: "meeting-room", label: "Meeting Room" },
    { id: "virtual-office", label: "Virtual Office" },
] as const;

const TEAM_SIZES = ["1", "2-5", "6-10", "11-20", "21+"];

function buildWhatsAppMessage(workspaceType: string, teamSize: string): string {
    const typeLabel = WORKSPACE_TYPES.find((w) => w.id === workspaceType)?.label ?? workspaceType;
    if (workspaceType === "virtual-office") {
        return `Hi, I'm looking for a ${typeLabel} at Prime Tower. Please share availability and pricing.`;
    }
    const peopleText = teamSize === "1" ? "1 person" : `${teamSize} people`;
    return `Hi, I'm looking for a ${typeLabel} for ${peopleText} at Prime Tower. Please share availability and pricing.`;
}

const QuoteBuilder = () => {
    const [workspaceType, setWorkspaceType] = useState<(typeof WORKSPACE_TYPES)[number]>(WORKSPACE_TYPES[0]);
    const [teamSize, setTeamSize] = useState(TEAM_SIZES[0]);
    const [isTypeOpen, setIsTypeOpen] = useState(false);
    const [isSizeOpen, setIsSizeOpen] = useState(false);
    const typeRef = useRef<HTMLDivElement>(null);
    const sizeRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (typeRef.current && !typeRef.current.contains(event.target as Node)) setIsTypeOpen(false);
            if (sizeRef.current && !sizeRef.current.contains(event.target as Node)) setIsSizeOpen(false);
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleAction = () => {
        const text = buildWhatsAppMessage(workspaceType.id, teamSize);
        window.open(`https://wa.me/971585779312?text=${encodeURIComponent(text)}`, "_blank");
    };

    const showTeamSize = workspaceType.id !== "virtual-office";

    return (
        <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="bg-white rounded-lg shadow-2xl p-4 sm:p-6 w-full max-w-4xl mx-auto mt-8 border border-cream-100"
        >
            <div className="flex flex-col md:flex-row gap-4 items-end">
                <div className="w-full md:flex-1 relative" ref={typeRef}>
                    <label className="text-xs font-accent font-bold uppercase tracking-widest text-navy-600 block mb-2">
                        I am looking for
                    </label>
                    <button
                        onClick={() => { setIsTypeOpen(!isTypeOpen); setIsSizeOpen(false); }}
                        className="w-full flex items-center justify-between bg-cream-50 hover:bg-cream-100 border border-cream-200 rounded-md px-4 py-3 text-left transition-colors"
                    >
                        <span className="font-medium text-navy-900 truncate">{workspaceType.label}</span>
                        <ChevronDown className={cn("w-4 h-4 text-navy-500 transition-transform", isTypeOpen && "rotate-180")} />
                    </button>
                    <AnimatePresence>
                        {isTypeOpen && (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 10 }}
                                className="absolute top-full left-0 right-0 mt-2 bg-white border border-cream-100 rounded-md shadow-luxury-lg z-50 overflow-hidden"
                            >
                                {WORKSPACE_TYPES.map((w) => (
                                    <button
                                        key={w.id}
                                        onClick={() => { setWorkspaceType(w); setIsTypeOpen(false); }}
                                        className={cn(
                                            "w-full text-left px-4 py-3 text-sm hover:bg-cream-50 transition-colors flex items-center justify-between",
                                            workspaceType.id === w.id ? "text-gold-600 font-medium bg-cream-50/50" : "text-navy-700"
                                        )}
                                    >
                                        {w.label}
                                        {workspaceType.id === w.id && <Check className="w-4 h-4" />}
                                    </button>
                                ))}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {showTeamSize && (
                    <div className="w-full md:flex-1 relative" ref={sizeRef}>
                        <label className="text-xs font-accent font-bold uppercase tracking-widest text-navy-600 block mb-2">
                            Team size
                        </label>
                        <button
                            onClick={() => { setIsSizeOpen(!isSizeOpen); setIsTypeOpen(false); }}
                            className="w-full flex items-center justify-between bg-cream-50 hover:bg-cream-100 border border-cream-200 rounded-md px-4 py-3 text-left transition-colors"
                        >
                            <span className="font-medium text-navy-900 truncate">{teamSize} {teamSize === "1" ? "person" : "people"}</span>
                            <ChevronDown className={cn("w-4 h-4 text-navy-500 transition-transform", isSizeOpen && "rotate-180")} />
                        </button>
                        <AnimatePresence>
                            {isSizeOpen && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 10 }}
                                    className="absolute top-full left-0 right-0 mt-2 bg-white border border-cream-100 rounded-md shadow-luxury-lg z-50 overflow-hidden"
                                >
                                    {TEAM_SIZES.map((size) => (
                                        <button
                                            key={size}
                                            onClick={() => { setTeamSize(size); setIsSizeOpen(false); }}
                                            className={cn(
                                                "w-full text-left px-4 py-3 text-sm hover:bg-cream-50 transition-colors flex items-center justify-between",
                                                teamSize === size ? "text-gold-600 font-medium bg-cream-50/50" : "text-navy-700"
                                            )}
                                        >
                                            {size} {size === "1" ? "person" : "people"}
                                            {teamSize === size && <Check className="w-4 h-4" />}
                                        </button>
                                    ))}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                )}

                <div className="w-full md:w-auto">
                    <label className="text-xs font-accent font-bold uppercase tracking-widest invisible hidden md:block mb-2">
                        Action
                    </label>
                    <button
                        onClick={handleAction}
                        className="w-full md:w-auto whitespace-nowrap bg-navy-900 text-white hover:bg-navy-800 transition-all duration-300 px-8 py-3 rounded-md font-accent font-bold uppercase tracking-widest flex items-center justify-center gap-2 shadow-navy-sm hover:shadow-navy-md"
                    >
                        Check Availability <ArrowRight className="w-4 h-4" />
                    </button>
                </div>
            </div>
        </motion.div>
    );
};

export default QuoteBuilder;
