"use client";

import { useRef, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { slugify, type HeadingBlock } from "@/lib/blog-content";
import { TableOfContents } from "@/components/blog/TableOfContents";

interface BlogContentProps {
    content: string;
    headings?: HeadingBlock[];
}

type MdastNode = { type?: string; value?: string; children?: MdastNode[] };

function getTextFromNode(node: MdastNode | null): string {
    if (!node) return "";
    if (node.type === "text" && node.value) return node.value;
    if (node.children?.length) return node.children.map(getTextFromNode).join("");
    return "";
}

export function BlogContent({ content, headings = [] }: BlogContentProps) {
    // Use server-extracted heading ids by index so TOC anchor links match exactly
    const headingIndexRef = useRef(0);
    const slugCountsRef = useRef(new Map<string, number>());

    useEffect(() => {
        headingIndexRef.current = 0;
        slugCountsRef.current.clear();
    }, [content]);

    function nextHeadingId(node: MdastNode | null): string {
        if (headings.length > 0 && headingIndexRef.current < headings.length) {
            const id = headings[headingIndexRef.current].id;
            headingIndexRef.current += 1;
            return id;
        }
        const text = getTextFromNode(node);
        const baseId = slugify(text || "section");
        const count = slugCountsRef.current.get(baseId) ?? 0;
        slugCountsRef.current.set(baseId, count + 1);
        return count === 0 ? baseId : `${baseId}-${count + 1}`;
    }

    return (
        <div className="font-body text-lg text-navy-900 leading-relaxed">
            {headings.length > 0 && (
                <div className="lg:hidden">
                    <TableOfContents headings={headings} />
                </div>
            )}

            <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={{
                    h1: ({ children }) => (
                        <h1 className="font-display text-3xl font-bold mt-8 mb-4 text-navy-900 border-b border-cream-200 pb-2">
                            {children}
                        </h1>
                    ),
                    h2: ({ node, children }) => {
                        const id = nextHeadingId(node as MdastNode);
                        return (
                            <h2
                                id={id}
                                className="font-display text-2xl md:text-3xl text-navy-900 mt-12 mb-4 pb-2 border-b border-cream-200 scroll-mt-24"
                            >
                                {children}
                            </h2>
                        );
                    },
                    h3: ({ node, children }) => {
                        const id = nextHeadingId(node as MdastNode);
                        return (
                            <h3
                                id={id}
                                className="font-display text-xl md:text-2xl text-navy-900 mt-8 mb-3 scroll-mt-24"
                            >
                                {children}
                            </h3>
                        );
                    },
                    p: ({ children }) => (
                        <p className="font-body text-base text-navy-800 leading-relaxed mb-5">
                            {children}
                        </p>
                    ),
                    ul: ({ children }) => (
                        <ul className="list-disc list-outside text-navy-800 space-y-4 mb-6 pl-6 [&_li]:pl-1 [&_li>p]:inline [&_li>p]:mb-0">
                            {children}
                        </ul>
                    ),
                    ol: ({ children }) => (
                        <ol className="list-decimal list-outside text-navy-800 space-y-4 mb-6 pl-6 [&_li]:pl-1 [&_li>p]:inline [&_li>p]:mb-0">
                            {children}
                        </ol>
                    ),
                    li: ({ children }) => (
                        <li className="leading-relaxed text-base">{children}</li>
                    ),
                    strong: ({ children }) => (
                        <strong className="text-navy-900 font-semibold">
                            {children}
                        </strong>
                    ),
                    blockquote: ({ children }) => (
                        <blockquote className="border-l-4 border-gold-500 pl-4 italic text-navy-700 my-6">
                            {children}
                        </blockquote>
                    ),
                    hr: () => <hr className="border-cream-200 my-8" />,
                    a: ({ href, children }) => (
                        <a
                            href={href}
                            className="text-gold-500 hover:text-gold-600 underline font-medium"
                            target={href?.startsWith("http") ? "_blank" : undefined}
                            rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
                        >
                            {children}
                        </a>
                    ),
                    code: ({ className, children }) =>
                        className ? (
                            <code className={className}>{children}</code>
                        ) : (
                            <code className="bg-cream-100 text-navy-800 px-1.5 py-0.5 rounded text-sm">
                                {children}
                            </code>
                        ),
                    pre: ({ children }) => (
                        <pre className="bg-navy-900 text-cream-100 p-4 rounded-xl overflow-x-auto mb-5">
                            {children}
                        </pre>
                    ),
                    table: ({ children }) => (
                        <div className="overflow-x-auto mb-5">
                            <table className="min-w-full border border-cream-200 rounded-lg">
                                {children}
                            </table>
                        </div>
                    ),
                    th: ({ children }) => (
                        <th className="border border-cream-200 bg-cream-50 px-4 py-2 text-left font-semibold text-navy-900">
                            {children}
                        </th>
                    ),
                    td: ({ children }) => (
                        <td className="border border-cream-200 px-4 py-2 text-navy-800">
                            {children}
                        </td>
                    ),
                }}
            >
                {content}
            </ReactMarkdown>
        </div>
    );
}
