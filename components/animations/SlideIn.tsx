"use client";

import React from "react";
import { motion, HTMLMotionProps, Variants } from "framer-motion";

interface SlideInProps extends HTMLMotionProps<"div"> {
    children: React.ReactNode;
    direction?: "up" | "down" | "left" | "right";
    distance?: number;
    delay?: number;
    duration?: number;
    stagger?: boolean;
}

const SlideIn = ({
    children,
    direction = "up",
    distance = 50,
    delay = 0,
    duration = 0.6,
    stagger = false,
    className,
    ...props
}: SlideInProps) => {
    const directions = {
        up: { y: distance },
        down: { y: -distance },
        left: { x: distance },
        right: { x: -distance },
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
                ease: [0.25, 1, 0.5, 1], // Smooth out ease
            },
        },
    };

    return (
        <motion.div
            initial={stagger ? undefined : "hidden"}
            whileInView={stagger ? undefined : "visible"}
            viewport={stagger ? undefined : { once: true, margin: "-100px" }}
            variants={variants}
            className={className}
            {...props}
        >
            {children}
        </motion.div>
    );
};

export default SlideIn;
