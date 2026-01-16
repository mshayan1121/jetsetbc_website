"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    hoverEffect?: boolean;
    padding?: "none" | "sm" | "md" | "lg";
    glass?: boolean;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
    ({ className, hoverEffect = true, padding = "md", glass = false, children, ...props }, ref) => {
        const paddingClasses = {
            none: "p-0",
            sm: "p-4",
            md: "p-6",
            lg: "p-8",
        };

        return (
            <motion.div
                ref={ref}
                whileHover={hoverEffect ? { y: -8, boxShadow: "0 25px 50px -12px rgba(10, 24, 40, 0.15)" } : {}}
                transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                className={cn(
                    "rounded-[12px] bg-white border border-cream-100 shadow-navy-sm overflow-hidden",
                    glass && "bg-white/80 backdrop-blur-xl border-white/40",
                    paddingClasses[padding],
                    className
                )}
                {...(props as any)}
            >
                {children}
            </motion.div>
        );
    }
);
Card.displayName = "Card";

interface CardImageProps extends React.HTMLAttributes<HTMLDivElement> {
    src: string;
    alt: string;
    overlay?: boolean;
}

const CardImage = ({ src, alt, overlay = true, className, ...props }: CardImageProps) => {
    return (
        <div className={cn("relative overflow-hidden rounded-t-[12px] -mx-4 sm:-mx-6 -mt-4 sm:-mt-6 mb-6", className)} {...props}>
            <img src={src} alt={alt} className="w-full h-48 object-cover transition-transform duration-500 hover:scale-110" />
            {overlay && (
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 to-transparent" />
            )}
        </div>
    );
};

const CardHeader = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
    <div className={cn("flex flex-col space-y-1.5", className)} {...props} />
);

const CardTitle = ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3 className={cn("font-display text-xl font-semibold text-navy-900 leading-none tracking-tight", className)} {...props} />
);

const CardDescription = ({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p className={cn("text-sm text-navy-700 font-body opacity-80", className)} {...props} />
);

const CardContent = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
    <div className={cn("pt-4 font-body text-navy-800", className)} {...props} />
);

const CardFooter = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
    <div className={cn("flex items-center pt-6", className)} {...props} />
);

export { Card, CardImage, CardHeader, CardTitle, CardDescription, CardContent, CardFooter };