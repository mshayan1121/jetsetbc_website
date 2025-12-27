import { Metadata } from 'next';
import BlogClientPage from './BlogClientPage';

export const metadata: Metadata = {
    title: 'Business Insights & Tips - Jetset Business Center Blog',
    description: 'Expert insights on business setup, office spaces, and entrepreneurship in Dubai from Jetset Business Center.',
    openGraph: {
        title: 'Business Insights & Tips - Jetset Business Center Blog',
        description: 'Expert insights on business setup, office spaces, and entrepreneurship in Dubai from Jetset Business Center.',
        images: ['/images/blog/blog-hero.jpg'],
    },
};

export default function BlogPage() {
    return <BlogClientPage />;
}
