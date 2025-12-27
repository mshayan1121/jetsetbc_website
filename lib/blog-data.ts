import blogData from '../jetset_blogs.json';

export interface BlogPost {
    slug: string;
    title: string;
    excerpt: string;
    content: string;
    author: string;
    date: string;
    readTime: number;
    image: string;
    category: string;
    featured?: boolean;
}

// Helper function to assign different placeholder images
function getDefaultImage(index: number): string {
    const images = [
        'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop', // Business/documents
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop', // Analytics
        'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop', // Office space
        'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&h=600&fit=crop', // Coworking
        'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&h=600&fit=crop', // Dubai skyline
        'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&h=600&fit=crop', // Meeting room
    ];
    return images[index % images.length];
}

// Helper function to categorize posts based on title keywords
function getCategoryFromTitle(title: string): string {
    const lowerTitle = title.toLowerCase();
    
    if (lowerTitle.includes('business setup') || lowerTitle.includes('business registration') || lowerTitle.includes('company')) {
        return 'Business Setup';
    } else if (lowerTitle.includes('office') || lowerTitle.includes('workspace')) {
        return 'Office Spaces';
    } else if (lowerTitle.includes('coworking') || lowerTitle.includes('shared')) {
        return 'Coworking';
    } else if (lowerTitle.includes('meeting room') || lowerTitle.includes('conference')) {
        return 'Meeting Rooms';
    } else if (lowerTitle.includes('ejari')) {
        return 'Virtual Ejari';
    } else if (lowerTitle.includes('dubai')) {
        return 'Dubai Business';
    } else {
        return 'Business Insights';
    }
}

// Transform the JSON data to match our BlogPost interface
export const blogPosts: BlogPost[] = blogData.map((post: any, index: number) => ({
    slug: post.slug,
    title: post.title,
    excerpt: post.excerpt || '',
    content: post.content || '',
    author: post.author || 'Jetset Business Team',
    date: post.date || 'December 2024',
    readTime: post.readTime || 5,
    image: post.image || getDefaultImage(index),
    category: post.category || getCategoryFromTitle(post.title),
    featured: index < 3 // First 3 posts are featured
}));

// Get a single blog post by slug
export function getBlogPost(slug: string): BlogPost | undefined {
    return blogPosts.find(post => post.slug === slug);
}

// Get featured posts (for "Must Read" sidebar)
export function getMustReadPosts(): BlogPost[] {
    return blogPosts.filter(post => post.featured).slice(0, 5);
}

// Get all unique categories
export function getCategories(): string[] {
    const categories = blogPosts.map(post => post.category);
    return [...new Set(categories)];
}

// Alias for backward compatibility
export function getBlogCategories(): string[] {
    return getCategories();
}

// Get posts by category
export function getPostsByCategory(category: string): BlogPost[] {
    return blogPosts.filter(post => post.category === category);
}

// Get related posts (same category, excluding current post)
export function getRelatedPosts(currentSlug: string, category: string, limit: number = 3): BlogPost[] {
    return blogPosts
        .filter(post => post.slug !== currentSlug && post.category === category)
        .slice(0, limit);
}
