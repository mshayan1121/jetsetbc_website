export type ContentBlock =
    | { type: "h2"; text: string; id: string }
    | { type: "h3"; text: string; id: string }
    | { type: "paragraph"; text: string };

export type HeadingBlock = {
    id: string;
    text: string;
    type: "h2" | "h3";
};

export function slugify(text: string): string {
    const slug = text
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9\s-]/g, "")
        .replace(/\s+/g, "-")
        .replace(/-+/g, "-")
        .replace(/^-|-$/g, "");

    return slug || "section";
}

function isFaqOrQaBlock(text: string): boolean {
    const normalized = text.trim();
    if (!normalized) return false;

    return (
        normalized.startsWith("**FAQ**") ||
        /^q:/i.test(normalized) ||
        normalized.endsWith("?")
    );
}

export function parseContent(content: string): ContentBlock[] {
    const blocks = content
        .split("\n\n")
        .map((block) => block.trim())
        .filter(Boolean);

    const slugCounts = new Map<string, number>();

    return blocks.map((block): ContentBlock => {
        if (block.startsWith("###")) {
            const text = block.replace(/^###\s*/, "").trim();
            const baseId = slugify(text);
            const count = slugCounts.get(baseId) ?? 0;
            slugCounts.set(baseId, count + 1);
            const id = count === 0 ? baseId : `${baseId}-${count + 1}`;
            return { type: "h3", text, id };
        }

        if (block.startsWith("##")) {
            const text = block.replace(/^##\s*/, "").trim();
            const baseId = slugify(text);
            const count = slugCounts.get(baseId) ?? 0;
            slugCounts.set(baseId, count + 1);
            const id = count === 0 ? baseId : `${baseId}-${count + 1}`;
            return { type: "h2", text, id };
        }

        if (isFaqOrQaBlock(block)) {
            return { type: "paragraph", text: block };
        }

        return { type: "paragraph", text: block };
    });
}

export function extractHeadings(content: string): HeadingBlock[] {
    return parseContent(content)
        .filter((block): block is Extract<ContentBlock, { type: "h2" | "h3" }> =>
            block.type === "h2" || block.type === "h3"
        )
        .map(({ id, text, type }) => ({ id, text, type }));
}
