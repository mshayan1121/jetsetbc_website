"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "../../lib/utils";

const buttonVariants = cva(
    "inline-flex items-center justify-center whitespace-nowrap rounded-sm text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 tracking-[0.1em] uppercase font-accent",
    {
        variants: {
            variant: {
                primary:
                    "bg-gold-500 text-navy-900 border border-gold-500 hover:bg-gold-600 hover:border-gold-600 shadow-luxury-sm hover:shadow-luxury-md active:shadow-inner",
                secondary:
                    "bg-navy-900 text-white border border-navy-900 hover:bg-navy-800 hover:border-navy-800 shadow-navy-sm hover:shadow-navy-md",
                outline:
                    "bg-transparent text-gold-500 border border-gold-500 hover:bg-gold-500 hover:text-navy-900 active:bg-gold-600",
                "outline-light":
                    "bg-transparent text-white border border-white hover:bg-white hover:text-navy-900 active:bg-cream-100",
                ghost:
                    "bg-transparent text-navy-900 hover:bg-cream-100 hover:text-gold-600",
                "ghost-light":
                    "bg-transparent text-white hover:bg-white/10 hover:text-gold-400",
            },
            size: {
                sm: "h-11 px-6 py-2 text-xs",
                md: "h-12 px-6 py-3 text-sm",
                lg: "h-14 px-10 py-4 text-base",
            },
        },
        defaultVariants: {
            variant: "primary",
            size: "md",
        },
    }
);

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
    asChild?: boolean;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
}

const MotionButton = motion.button;

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, asChild = false, leftIcon, rightIcon, children, ...props }, ref) => {
        if (asChild) {
            return (
                <Slot
                    className={cn(buttonVariants({ variant, size, className }))}
                    ref={ref}
                    {...props}
                >
                    {children}
                </Slot>
            );
        }

        return (
            <motion.button
                className={cn(buttonVariants({ variant, size, className }))}
                ref={ref}
                whileHover={{ scale: variant === "primary" ? 1.05 : 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                {...(props as any)}
            >
                {leftIcon && <span className="mr-2 inline-flex">{leftIcon}</span>}
                {children}
                {rightIcon && <span className="ml-2 inline-flex">{rightIcon}</span>}
            </motion.button>
        );
    }
);
Button.displayName = "Button";

export { Button, buttonVariants };
