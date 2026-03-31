import { Metadata } from 'next';
import BlogClientPage from './BlogClientPage';

export const metadata: Metadata = {
    title: 'Business Insights & Tips - Jetset Business Center Blog',
    description: 'Expert insights on business setup, office spaces, and entrepreneurship in Dubai from Jetset Business Center.',
    alternates: {
        canonical: 'https://jetsetbc.com/blog',
    },
    openGraph: {
        title: 'Business Insights & Tips - Jetset Business Center Blog',
        description: 'Expert insights on business setup, office spaces, and entrepreneurship in Dubai from Jetset Business Center.',
        url: 'https://jetsetbc.com/blog',
        images: ['/images/blog/blog-hero.jpg'],
    },
    twitter: {
        card: "summary_large_image",
        title: 'Business Insights & Tips - Jetset Business Center Blog',
        description: 'Expert insights on business setup, office spaces, and entrepreneurship in Dubai from Jetset Business Center.',
        images: ['/images/blog/blog-hero.jpg'],
    },
};

export default function BlogPage() {
    return <BlogClientPage />;
}
