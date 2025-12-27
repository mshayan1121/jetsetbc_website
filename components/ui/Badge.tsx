"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/utils";

const badgeVariants = cva(
    "inline-flex items-center rounded-full border px-2.5 py-0.5 text-[10px] font-bold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 tracking-widest uppercase font-accent",
    {
        variants: {
            variant: {
                gold:
                    "border-gold-500/30 bg-gold-500/10 text-gold-600 shadow-[0_2px_10px_rgba(212,175,55,0.1)]",
                navy:
                    "border-navy-900/20 bg-navy-900/5 text-navy-900",
                teal:
                    "border-teal-500/30 bg-teal-500/10 text-teal-600",
                outline: "border-navy-900/20 text-navy-900 bg-transparent",
            },
        },
        defaultVariants: {
            variant: "navy",
        },
    }
);

export interface BadgeProps
    extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {
    icon?: React.ReactNode;
}

function Badge({ className, variant, icon, children, ...props }: BadgeProps) {
    return (
        <div className={cn(badgeVariants({ variant }), className)} {...props}>
            {icon && <span className="mr-1.5 flex h-3 w-3 items-center justify-center">{icon}</span>}
            {children}
        </div>
    );
}

export { Badge, badgeVariants };
