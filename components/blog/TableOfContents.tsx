"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

type Heading = {
    id: string;
    text: string;
    type: "h2" | "h3";
};

interface TableOfContentsProps {
    headings: Heading[];
}

const demoHeadings: Heading[] = [
    { id: "overview", text: "Overview", type: "h2" },
    { id: "requirements", text: "Requirements", type: "h2" },
    { id: "step-by-step", text: "Step by Step", type: "h2" },
    { id: "costs", text: "Costs & Fees", type: "h2" },
    { id: "faq", text: "FAQ", type: "h2" },
];

export function TableOfContents({ headings }: TableOfContentsProps) {
    const [activeId, setActiveId] = useState<string>("");
    const [isOpen, setIsOpen] = useState(false);
    const hasRealHeadings = headings.length > 0;
    const displayHeadings = hasRealHeadings ? headings : demoHeadings;

    useEffect(() => {
        if (!hasRealHeadings) return;

        const observer = new IntersectionObserver(
            (entries) => {
                const visible = entries
                    .filter((entry) => entry.isIntersecting)
                    .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

                if (visible.length > 0) {
                    setActiveId(visible[0].target.id);
                }
            },
            {
                rootMargin: "-20% 0px -60% 0px",
                threshold: [0.1, 0.5, 1],
            }
        );

        headings.forEach((heading) => {
            const element = document.getElementById(heading.id);
            if (element) observer.observe(element);
        });

        return () => observer.disconnect();
    }, [headings, hasRealHeadings]);

    return (
        <>
            <div className="lg:hidden mb-8">
                <div className="border border-cream-200 rounded-xl overflow-hidden">
                    <button
                        type="button"
                        onClick={() => setIsOpen((prev) => !prev)}
                        className="w-full px-5 py-4 bg-cream-50 text-left font-display text-navy-900 flex items-center justify-between"
                    >
                        <span>In This Article</span>
                        <span className={cn("transition-transform", isOpen ? "rotate-180" : "")}>▾</span>
                    </button>

                    {isOpen && (
                        <div className="px-5 py-4 bg-white">
                            <nav className="max-h-[70vh] overflow-y-auto space-y-2">
                                {displayHeadings.map((heading) => (
                                    <a
                                        key={heading.id}
                                        href={`#${heading.id}`}
                                        className={cn(
                                            "block transition-colors text-navy-800 hover:text-gold-500",
                                            heading.type === "h2" ? "font-semibold text-base" : "pl-4 text-sm",
                                            activeId === heading.id ? "text-gold-500" : ""
                                        )}
                                    >
                                        {heading.text}
                                    </a>
                                ))}
                            </nav>
                            {!hasRealHeadings && (
                                <p className="mt-3 text-xs text-navy-400 italic">
                                    Full navigation available once headings are added
                                </p>
                            )}
                        </div>
                    )}
                </div>
            </div>

            <aside className="hidden lg:block sticky top-[calc(var(--header-offset,96px)+1rem)] self-start z-20">
                <div className="bg-white border border-cream-200 rounded-xl p-6 shadow-luxury-sm">
                    <h3 className="font-display text-navy-900 text-xl mb-4">In This Article</h3>
                    <nav className="max-h-[70vh] overflow-y-auto space-y-2 pr-1">
                        {displayHeadings.map((heading) => (
                            <a
                                key={heading.id}
                                href={`#${heading.id}`}
                                className={cn(
                                    "block transition-colors text-navy-800 hover:text-gold-500",
                                    heading.type === "h2" ? "font-semibold text-base" : "pl-4 text-sm",
                                    activeId === heading.id ? "text-gold-500" : ""
                                )}
                            >
                                {heading.text}
                            </a>
                        ))}
                    </nav>
                    {!hasRealHeadings && (
                        <p className="mt-3 text-xs text-navy-400 italic">
                            Full navigation available once headings are added
                        </p>
                    )}
                </div>
            </aside>
        </>
    );
}
