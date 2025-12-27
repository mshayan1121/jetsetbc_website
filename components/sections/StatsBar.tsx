"use client";

import React, { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform, useInView } from "framer-motion";
import { Users, Star, Award, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";

interface StatItemProps {
    icon: React.ElementType;
    value: number;
    suffix?: string;
    label: string;
    index: number;
}

const CountUp = ({ value, suffix = "" }: { value: number; suffix?: string }) => {
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, {
        damping: 30,
        stiffness: 100,
    });
    const displayValue = useTransform(springValue, (latest) => {
        // Handle decimal for the rating (4.9)
        if (value % 1 !== 0) {
            return latest.toFixed(1) + suffix;
        }
        return Math.floor(latest) + suffix;
    });

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    useEffect(() => {
        if (isInView) {
            motionValue.set(value);
        }
    }, [isInView, value, motionValue]);

    return <motion.span ref={ref}>{displayValue}</motion.span>;
};

const StatItem = ({ icon: Icon, value, suffix, label, index }: StatItemProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.15, ease: [0.21, 0.47, 0.32, 0.98] }}
            className={cn(
                "flex flex-col items-center justify-center p-8 text-center",
                // Vertical dividers:
                // On mobile, odd items (0, 2) get a right border
                index % 2 === 0 ? "border-r border-gold-500/20" : "",
                // On desktop, all but last get a right border
                "md:border-r md:border-gold-500/20 md:last:border-r-0",
                // Horizontal dividers for mobile (optional but cleans up 2x2)
                index < 2 ? "border-b border-gold-500/20 md:border-b-0" : ""
            )}
        >
            <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                    delay: index * 0.15 + 0.3
                }}
                className="mb-6 text-navy-900/40"
            >
                <Icon size={28} strokeWidth={1.5} />
            </motion.div>

            <div className="mb-2 font-accent text-[48px] font-bold leading-none tracking-tight text-gold-500 md:text-[56px]">
                <CountUp value={value} suffix={suffix} />
            </div>

            <div className="font-body text-[14px] font-semibold tracking-[0.2em] text-navy-900 uppercase">
                {label}
            </div>
        </motion.div>
    );
};

export const StatsBar = () => {
    const stats = [
        {
            icon: Users,
            value: 500,
            suffix: "+",
            label: "Happy Clients",
        },
        {
            icon: Star,
            value: 4.9,
            suffix: "★",
            label: "Google Rating",
        },
        {
            icon: Award,
            value: 20,
            suffix: "+",
            label: "Years Experience",
        },
        {
            icon: MapPin,
            value: 1,
            suffix: "",
            label: "Premium Location",
        },
    ];

    return (
        <section className="w-full bg-cream-50 py-16 lg:py-24">
            <div className="container-custom">
                <div className="grid grid-cols-2 md:grid-cols-4">
                    {stats.map((stat, index) => (
                        <StatItem
                            key={index}
                            icon={stat.icon}
                            value={stat.value}
                            suffix={stat.suffix}
                            label={stat.label}
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StatsBar;
