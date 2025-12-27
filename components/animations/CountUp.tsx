"use client";

import React, { useEffect, useRef, useState } from "react";
import { useInView, animate } from "framer-motion";

interface CountUpProps {
    end: number;
    duration?: number;
    suffix?: string;
    prefix?: string;
    className?: string;
    decimals?: number;
}

const CountUp = ({
    end,
    duration = 2,
    suffix = "",
    prefix = "",
    className = "",
    decimals = 0,
}: CountUpProps) => {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    useEffect(() => {
        if (isInView) {
            const controls = animate(0, end, {
                duration,
                ease: "easeOut",
                onUpdate: (value) => {
                    setCount(value);
                },
            });

            return () => controls.stop();
        }
    }, [isInView, end, duration]);

    return (
        <span ref={ref} className={className}>
            {prefix}
            {count.toLocaleString(undefined, {
                minimumFractionDigits: decimals,
                maximumFractionDigits: decimals,
            })}
            {suffix}
        </span>
    );
};

export default CountUp;
