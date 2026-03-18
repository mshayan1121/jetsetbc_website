import { MetadataRoute } from 'next';
import { blogPosts } from '@/lib/blog-data';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://jetsetbc.com';

    const routes = [
        '',
        '/gallery',
        '/book-tour',
        '/services',
        '/services/private-offices',
        '/services/coworking',
        '/services/meeting-rooms',
        '/services/business-setup',
        '/locations',
        '/locations/prime-tower',
        '/pricing',
        '/about',
        '/blog',
        '/contact',
    ];

    const staticPages = routes.map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: route === '' ? 1 : route === '/blog' ? 0.9 : 0.8,
    }));

    // Add all blog posts to sitemap
    const blogPages = blogPosts.map((post) => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }));

    return [...staticPages, ...blogPages];
}
