"use client";

import React from "react";
import { motion, HTMLMotionProps, Variants } from "framer-motion";

interface StaggerContainerProps extends HTMLMotionProps<"div"> {
    children: React.ReactNode;
    staggerDelay?: number;
    delayChildren?: number;
}

const StaggerContainer = ({
    children,
    staggerDelay = 0.1,
    delayChildren = 0,
    className,
    ...props
}: StaggerContainerProps) => {
    const variants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: staggerDelay,
                delayChildren: delayChildren,
            },
        },
    };

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={variants}
            className={className}
            {...props}
        >
            {children}
        </motion.div>
    );
};

export default StaggerContainer;
