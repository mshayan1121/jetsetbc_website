import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Calendar, Clock, User, ArrowLeft, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { getBlogPost, getRelatedPosts, blogPosts } from '@/lib/blog-data';

// Generate static params for all blog posts
export async function generateStaticParams() {
    return blogPosts.map((post) => ({
        slug: post.slug,
    }));
}

// Generate metadata for SEO
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const post = getBlogPost(slug);
    
    if (!post) {
        return {
            title: 'Blog Post Not Found',
        };
    }
    
    return {
        title: `${post.title} | Jetset Business Center Blog`,
        description: post.excerpt,
        openGraph: {
            title: post.title,
            description: post.excerpt,
            images: [post.image],
        },
    };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = getBlogPost(slug);
    
    if (!post) {
        notFound();
    }
    
    // Get related posts
    const relatedPosts = getRelatedPosts(post.slug, post.category);
    
    return (
        <main className="bg-white">
            {/* HERO SECTION WITH FEATURED IMAGE */}
            <div className="relative h-[60vh] w-full overflow-hidden">
                <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                    priority
                />
                {/* Gradient overlay for better text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/50 to-transparent" />
                
                {/* Back to Blog button - floating on image */}
                <div className="absolute top-8 left-8 z-20">
                    <Link href="/blog">
                        <Button variant="outline" className="bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/20">
                            <ArrowLeft className="w-4 h-4 mr-2" />
                            Back to Blog
                        </Button>
                    </Link>
                </div>
            </div>

            {/* MAIN CONTENT */}
            <article className="bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    
                    {/* ARTICLE HEADER - Overlapping the hero image */}
                    <div className="-mt-40 relative z-10 mb-16">
                        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-luxury-xl">
                            
                            {/* Breadcrumb */}
                            <nav className="flex items-center gap-2 text-sm text-navy-700 mb-6">
                                <Link href="/" className="hover:text-gold-500 transition-colors">
                                    Home
                                </Link>
                                <span>/</span>
                                <Link href="/blog" className="hover:text-gold-500 transition-colors">
                                    Blog
                                </Link>
                                <span>/</span>
                                <span className="text-navy-900 font-medium line-clamp-1">
                                    {post.title}
                                </span>
                            </nav>
                            
                            {/* Category Badge */}
                            <div className="mb-6">
                                <Badge className="bg-gold-500 text-navy-900 font-semibold">
                                    {post.category}
                                </Badge>
                            </div>
                            
                            {/* Title */}
                            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-navy-900 mb-8 leading-tight">
                                {post.title}
                            </h1>
                            
                            {/* Meta Information */}
                            <div className="flex flex-wrap items-center gap-6 text-navy-700 pb-8 border-b border-cream-200">
                                <div className="flex items-center gap-2">
                                    <div className="w-10 h-10 bg-gold-500/10 rounded-full flex items-center justify-center">
                                        <User className="w-5 h-5 text-gold-500" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-navy-600">Written by</p>
                                        <p className="font-semibold text-navy-900">{post.author}</p>
                                    </div>
                                </div>
                                
                                <div className="flex items-center gap-2">
                                    <Calendar className="w-5 h-5 text-gold-500" />
                                    <div>
                                        <p className="text-sm text-navy-600">Published</p>
                                        <p className="font-semibold text-navy-900">{post.date}</p>
                                    </div>
                                </div>
                                
                                <div className="flex items-center gap-2">
                                    <Clock className="w-5 h-5 text-gold-500" />
                                    <div>
                                        <p className="text-sm text-navy-600">Read time</p>
                                        <p className="font-semibold text-navy-900">{post.readTime} min</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/* ARTICLE CONTENT */}
                    <div className="mb-16">
                        <div className="prose prose-lg max-w-none">
                            {/* Format the content properly */}
                            <div className="font-body text-lg text-navy-900 leading-relaxed space-y-6">
                                {post.content.split('\n\n').map((paragraph, index) => {
                                    if (!paragraph.trim()) return null;
                                    
                                    return (
                                        <p key={index} className="text-navy-800 leading-loose">
                                            {paragraph}
                                        </p>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                    
                    {/* ARTICLE FOOTER - Share & Author */}
                    <div className="mb-16">
                        <div className="bg-cream-50 rounded-2xl p-8 md:p-10">
                            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                                
                                {/* Author Info */}
                                <div className="flex items-center gap-4">
                                    <div className="w-16 h-16 bg-gold-500 rounded-full flex items-center justify-center flex-shrink-0">
                                        <span className="font-display text-2xl text-navy-900">
                                            {post.author.charAt(0)}
                                        </span>
                                    </div>
                                    <div>
                                        <p className="text-sm text-navy-600 mb-1">Written by</p>
                                        <h3 className="font-display text-xl text-navy-900">
                                            {post.author}
                                        </h3>
                                        <p className="text-sm text-navy-700">
                                            Jetset Business Center Expert
                                        </p>
                                    </div>
                                </div>
                                
                                {/* Share Button (placeholder for now) */}
                                <Button variant="outline" className="border-navy-900 text-navy-900 hover:bg-navy-900 hover:text-white">
                                    <Share2 className="w-4 h-4 mr-2" />
                                    Share Article
                                </Button>
                            </div>
                        </div>
                    </div>
                    
                    {/* RELATED POSTS */}
                    {relatedPosts.length > 0 && (
                        <div className="mb-16">
                            <h2 className="font-display text-3xl md:text-4xl text-navy-900 mb-8">
                                Related Articles
                            </h2>
                            
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                {relatedPosts.map((relatedPost) => (
                                    <Link key={relatedPost.slug} href={`/blog/${relatedPost.slug}`}>
                                        <Card className="group cursor-pointer h-full hover:-translate-y-2 transition-all duration-400" padding="none">
                                            
                                            {/* Image */}
                                            <div className="relative h-48 overflow-hidden rounded-t-xl">
                                                <Image
                                                    src={relatedPost.image}
                                                    alt={relatedPost.title}
                                                    fill
                                                    className="object-cover group-hover:scale-105 transition-transform duration-400"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 to-transparent" />
                                                
                                                {/* Category badge on image */}
                                                <div className="absolute top-4 left-4">
                                                    <Badge className="bg-gold-500/95 backdrop-blur-sm text-navy-900 font-semibold text-xs">
                                                        {relatedPost.category}
                                                    </Badge>
                                                </div>
                                            </div>
                                            
                                            {/* Content */}
                                            <div className="p-6">
                                                <h3 className="font-display text-lg text-navy-900 mb-3 line-clamp-2 group-hover:text-gold-500 transition-colors">
                                                    {relatedPost.title}
                                                </h3>
                                                
                                                <div className="flex items-center gap-4 text-sm text-navy-700">
                                                    <span className="flex items-center gap-1">
                                                        <Clock className="w-4 h-4 text-gold-500" />
                                                        {relatedPost.readTime} min
                                                    </span>
                                                    <span className="flex items-center gap-1">
                                                        <Calendar className="w-4 h-4 text-gold-500" />
                                                        {relatedPost.date}
                                                    </span>
                                                </div>
                                            </div>
                                        </Card>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </article>
            
            {/* CTA SECTION */}
            <section className="bg-gradient-luxury py-24 md:py-32">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="font-display text-4xl md:text-5xl text-white mb-6">
                        Ready to Start Your Business Journey?
                    </h2>
                    <p className="font-body text-xl md:text-2xl text-cream-50 mb-8 max-w-2xl mx-auto">
                        Book a same-day tour and experience the Jetset difference
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button variant="primary" size="lg" asChild>
                            <Link href="/contact">Book a Tour</Link>
                        </Button>
                        <Button 
                            variant="outline" 
                            size="lg" 
                            className="border-white text-white hover:bg-white hover:text-navy-900"
                            asChild
                        >
                            <Link href="/pricing">View Pricing</Link>
                        </Button>
                    </div>
                </div>
            </section>
        </main>
    );
}
