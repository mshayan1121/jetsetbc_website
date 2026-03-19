import 'server-only';
import fs from 'node:fs';
import path from 'node:path';
import { blogPosts } from '@/lib/blog-data';

const BLOG_IMAGES_ROOT = path.join(process.cwd(), 'public', 'blog-images');
const IMAGE_EXTENSIONS = new Set(['.jpg', '.jpeg', '.png', '.webp', '.avif', '.gif']);

let cachedResolvedBlogImages: Map<string, string> | null = null;

function normalizeForMatch(value: string): string {
    return value.toLowerCase().replace(/[^a-z0-9]/g, '');
}

function tokenizeForMatch(value: string): string[] {
    return value
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, ' ')
        .split(' ')
        .map((token) => token.trim())
        .filter((token) => token.length > 2);
}

function getFolderCoverImage(folderName: string): string | null {
    const folderPath = path.join(BLOG_IMAGES_ROOT, folderName);
    const files = fs
        .readdirSync(folderPath, { withFileTypes: true })
        .filter((entry) => entry.isFile())
        .map((entry) => entry.name)
        .filter((fileName) => IMAGE_EXTENSIONS.has(path.extname(fileName).toLowerCase()));

    if (files.length === 0) {
        return null;
    }

    // Pick the largest file as cover image. In this dataset, very small JPG exports
    // are often low-quality thumbnails while larger PNG/JPG files are sharper.
    const bestFile = files
        .map((fileName) => ({
            fileName,
            size: fs.statSync(path.join(folderPath, fileName)).size,
        }))
        .sort((a, b) => {
            if (b.size !== a.size) {
                return b.size - a.size;
            }

            return a.fileName.localeCompare(b.fileName);
        })[0]?.fileName;

    if (!bestFile) {
        return null;
    }

    return `/blog-images/${encodeURIComponent(folderName)}/${encodeURIComponent(bestFile)}`;
}

function getTokenOverlapScore(postTokens: string[], folderTokens: string[]): number {
    if (postTokens.length === 0 || folderTokens.length === 0) {
        return 0;
    }

    const postSet = new Set(postTokens);
    let overlap = 0;

    for (const token of folderTokens) {
        if (postSet.has(token)) {
            overlap += 1;
        }
    }

    return overlap;
}

function getMatchScore(postSlug: string, postTitle: string, folderName: string): number {
    const slug = normalizeForMatch(postSlug);
    const title = normalizeForMatch(postTitle);
    const folder = normalizeForMatch(folderName);

    if (!folder) {
        return 0;
    }

    if (slug === folder) {
        return 1000;
    }

    if (title === folder) {
        return 950;
    }

    const slugContains = slug.includes(folder) || folder.includes(slug);
    const titleContains = title.includes(folder) || folder.includes(title);

    if (slugContains) {
        return 800 - Math.abs(slug.length - folder.length);
    }

    if (titleContains) {
        return 700 - Math.abs(title.length - folder.length);
    }

    const postTokens = [...tokenizeForMatch(postSlug), ...tokenizeForMatch(postTitle)];
    const folderTokens = tokenizeForMatch(folderName);
    const overlap = getTokenOverlapScore(postTokens, folderTokens);

    if (overlap > 0) {
        return 500 + overlap * 10;
    }

    return 0;
}

function listBlogImageFolders(): string[] {
    if (!fs.existsSync(BLOG_IMAGES_ROOT)) {
        return [];
    }

    return fs
        .readdirSync(BLOG_IMAGES_ROOT, { withFileTypes: true })
        .filter((entry) => entry.isDirectory())
        .map((entry) => entry.name);
}

export function getResolvedBlogImageMap(): Map<string, string> {
    if (cachedResolvedBlogImages) {
        return cachedResolvedBlogImages;
    }

    const folders = listBlogImageFolders();
    const assignments = new Map<string, string>();
    const usedFolders = new Set<string>();

    const candidates = blogPosts
        .flatMap((post) =>
            folders
                .map((folder) => ({
                    slug: post.slug,
                    folder,
                    score: getMatchScore(post.slug, post.title, folder),
                }))
                .filter((candidate) => candidate.score > 0)
        )
        .sort((a, b) => {
            if (b.score !== a.score) {
                return b.score - a.score;
            }

            return a.slug.localeCompare(b.slug);
        });

    for (const candidate of candidates) {
        if (assignments.has(candidate.slug) || usedFolders.has(candidate.folder)) {
            continue;
        }

        const image = getFolderCoverImage(candidate.folder);
        if (!image) {
            continue;
        }

        assignments.set(candidate.slug, image);
        usedFolders.add(candidate.folder);
    }

    // Ensure every post gets a local image from the blog-images folder if possible.
    for (const post of blogPosts) {
        if (assignments.has(post.slug)) {
            continue;
        }

        const fallbackFolder = folders.find((folder) => !usedFolders.has(folder) && getFolderCoverImage(folder));
        if (!fallbackFolder) {
            continue;
        }

        const fallbackImage = getFolderCoverImage(fallbackFolder);
        if (!fallbackImage) {
            continue;
        }

        assignments.set(post.slug, fallbackImage);
        usedFolders.add(fallbackFolder);
    }

    cachedResolvedBlogImages = assignments;
    return assignments;
}

export function getLocalBlogImage(slug: string): string | null {
    return getResolvedBlogImageMap().get(slug) ?? null;
}

