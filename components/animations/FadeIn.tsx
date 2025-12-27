"use client";

import React from "react";
import { motion, HTMLMotionProps, Variants } from "framer-motion";

interface FadeInProps extends HTMLMotionProps<"div"> {
    children: React.ReactNode;
    delay?: number;
    duration?: number;
    direction?: "up" | "down" | "left" | "right" | "none";
    distance?: number;
    stagger?: boolean;
}

const FadeIn = ({
    children,
    delay = 0,
    duration = 0.5,
    direction = "none",
    distance = 20,
    stagger = false,
    className,
    ...props
}: FadeInProps) => {
    const directions = {
        up: { y: distance },
        down: { y: -distance },
        left: { x: distance },
        right: { x: -distance },
        none: { x: 0, y: 0 },
    };

    const variants: Variants = {
        hidden: {
            opacity: 0,
            ...directions[direction],
        },
        visible: {
            opacity: 1,
            x: 0,
            y: 0,
            transition: {
                duration,
                delay,
                ease: [0.21, 0.47, 0.32, 0.98], // Custom premium ease
            },
        },
    };

    return (
        <motion.div
            initial={stagger ? undefined : "hidden"}
            whileInView={stagger ? undefined : "visible"}
            viewport={stagger ? undefined : { once: true, margin: "-50px" }}
            variants={variants}
            className={className}
            {...props}
        >
            {children}
        </motion.div>
    );
};

export default FadeIn;
