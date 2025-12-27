"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, HTMLMotionProps } from "framer-motion";

interface ParallaxSectionProps extends HTMLMotionProps<"div"> {
    children: React.ReactNode;
    speed?: number; // 0.1 to 1 is a good range
    direction?: "up" | "down";
}

const ParallaxSection = ({
    children,
    speed = 0.2,
    direction = "up",
    className,
    ...props
}: ParallaxSectionProps) => {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    const yRange = direction === "up" ? [0, -100 * speed] : [0, 100 * speed];
    const y = useTransform(scrollYProgress, [0, 1], yRange);

    return (
        <motion.div ref={ref} style={{ y }} className={className} {...props}>
            {children}
        </motion.div>
    );
};

export default ParallaxSection;
