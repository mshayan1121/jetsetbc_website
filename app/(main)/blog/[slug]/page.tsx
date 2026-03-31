import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Calendar, Clock, User, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { ShareButton } from '@/components/ui/ShareButton';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { BlogContent } from '@/components/blog/BlogContent';
import { TableOfContents } from '@/components/blog/TableOfContents';
import { getBlogPost, getRelatedPosts, blogPosts } from '@/lib/blog-data';
import { extractHeadings } from '@/lib/blog-content';
import { getLocalBlogImage, getResolvedBlogImageMap } from '@/lib/blog-images';

// Generate static params for all blog posts
export async function generateStaticParams() {
    const resolvedImages = getResolvedBlogImageMap();
    blogPosts.forEach((post) => {
        console.log(`[blog-image] ${post.slug} -> ${resolvedImages.get(post.slug) ?? 'null'}`);
    });

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
    
    const coverImage = getLocalBlogImage(post.slug);

    return {
        title: post.title,
        description: post.excerpt,
        alternates: {
            canonical: `https://jetsetbc.com/blog/${slug}`,
        },
        openGraph: {
            title: post.title,
            description: post.excerpt,
            url: `https://jetsetbc.com/blog/${slug}`,
            ...(coverImage ? { images: [coverImage] } : {}),
        },
        twitter: {
            card: coverImage ? 'summary_large_image' : 'summary',
            title: post.title,
            description: post.excerpt,
            ...(coverImage ? { images: [coverImage] } : {}),
        },
    };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = getBlogPost(slug);
    
    if (!post) {
        notFound();
    }
    
    const coverImage = getLocalBlogImage(post.slug);

    // Get related posts
    const relatedPosts = getRelatedPosts(post.slug, post.category);
    const headings = extractHeadings(post.content);
    
    return (
        <main className="bg-white">
            {/* 1. Dark navy header */}
            <section className="bg-navy-900 pt-32 pb-12">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Link href="/blog" className="inline-flex items-center gap-2 text-cream-100/70 hover:text-gold-500 transition-colors mb-8 text-sm font-medium">
                        <ArrowLeft className="w-4 h-4" />
                        Back to Blog
                    </Link>
                    <div className="mb-4">
                        <span className="inline-block bg-gold-500/10 text-gold-500 text-xs font-semibold uppercase tracking-widest px-3 py-1.5 rounded-md">
                            {post.category}
                        </span>
                    </div>
                    <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-8">
                        {post.title}
                    </h1>
                    <div className="flex flex-wrap items-center gap-6 text-cream-100/70 text-sm">
                        <span className="flex items-center gap-2">
                            <User className="w-4 h-4 text-gold-500" />
                            {post.author}
                        </span>
                        <span className="flex items-center gap-2">
                            <Calendar className="w-4 h-4 text-gold-500" />
                            {post.date}
                        </span>
                        <span className="flex items-center gap-2">
                            <Clock className="w-4 h-4 text-gold-500" />
                            {post.readTime} min read
                        </span>
                    </div>
                </div>
            </section>

            {/* 2. Cover image */}
            {coverImage && (
                <div className="relative w-full h-[400px] md:h-[500px] overflow-hidden">
                    <Image
                        src={coverImage}
                        alt={post.title}
                        fill
                        className="object-cover"
                        sizes="100vw"
                        quality={95}
                        priority
                    />
                </div>
            )}

            {/* MAIN CONTENT */}
            <article className="bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-5 lg:px-6">
                    {/* 3. Breadcrumb */}
                    <div className="pt-10 mb-10">
                        <nav className="flex items-center gap-2 text-sm text-navy-700">
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
                    </div>
                    
                    {/* 4. 3-column content grid */}
                    <div className="mb-16">
                        <div className="py-16">
                            <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr_260px] gap-10 items-start">
                                {/* LEFT — Table of Contents */}
                                <div className="hidden lg:block">
                                    <TableOfContents headings={headings} />
                                </div>

                                {/* CENTER — Article content */}
                                <div className="min-w-0">
                                    {/* Mobile TOC accordion at top */}
                                    <div className="lg:hidden mb-8">
                                        <TableOfContents headings={headings} />
                                    </div>
                                    <BlogContent content={post.content} headings={headings} />
                                </div>

                                {/* RIGHT — Sticky CTA sidebar */}
                                <div className="hidden lg:block">
                                    <div className="sticky top-[calc(var(--header-offset,96px)+1rem)] z-20 bg-navy-900 rounded-2xl p-6 text-center">
                                        <h3 className="font-display text-xl text-white mb-2">
                                            Ready to Set Up?
                                        </h3>
                                        <p className="font-body text-sm text-cream-100/70 mb-6">
                                            Our team guides you through every step in Dubai.
                                        </p>
                                        <div className="flex flex-col gap-3">
                                            <Link href="/book-tour">
                                                <Button variant="primary" className="w-full">
                                                    Book a Free Tour
                                                </Button>
                                            </Link>
                                            <Link href="/contact">
                                                <Button variant="outline" className="w-full border-white/30 text-white hover:bg-white hover:text-navy-900">
                                                    Talk to an Expert
                                                </Button>
                                            </Link>
                                        </div>
                                        <div className="mt-6 pt-6 border-t border-white/10">
                                            <p className="text-xs text-cream-100/50 mb-2">Or call us directly</p>
                                            <a href="tel:+971585779312" className="text-gold-500 font-semibold text-sm hover:text-gold-400 transition-colors">
                                                +971 58 577 9312
                                            </a>
                                        </div>
                                    </div>
                                </div>
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
                                
                                {/* Share Button */}
                                <ShareButton title={post.title} excerpt={post.excerpt} />
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
                                {relatedPosts.map((relatedPost) => {
                                    const relatedCoverImage = getLocalBlogImage(relatedPost.slug);

                                    return (
                                        <Link key={relatedPost.slug} href={`/blog/${relatedPost.slug}`}>
                                            <Card className="group cursor-pointer h-full hover:-translate-y-2 transition-all duration-400" padding="none">
                                                {relatedCoverImage ? (
                                                    <div className="relative h-48 overflow-hidden rounded-t-xl">
                                                        <Image
                                                            src={relatedCoverImage}
                                                            alt={relatedPost.title}
                                                            fill
                                                            className="object-cover group-hover:scale-105 transition-transform duration-400"
                                                        />
                                                        <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 to-transparent" />

                                                        <div className="absolute top-4 left-4">
                                                            <Badge className="bg-gold-500/95 backdrop-blur-sm text-navy-900 font-semibold text-xs">
                                                                {relatedPost.category}
                                                            </Badge>
                                                        </div>
                                                    </div>
                                                ) : null}

                                                {/* Content */}
                                                <div className="p-6">
                                                    {!relatedCoverImage ? (
                                                        <div className="mb-3">
                                                            <Badge className="bg-gold-500/10 text-navy-900 font-semibold text-xs">
                                                                {relatedPost.category}
                                                            </Badge>
                                                        </div>
                                                    ) : null}

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
                                    );
                                })}
                            </div>
                        </div>
                    )}
                </div>
            </article>
            
            {/* CTA SECTION */}
            <section className="bg-navy-900 py-24">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <span className="inline-block bg-gold-500/10 text-gold-500 text-sm font-semibold uppercase tracking-widest px-4 py-2 rounded-md mb-6">
                        Get Started
                    </span>
                    <h2 className="font-display text-4xl md:text-5xl text-white mb-4">
                        Ready to Set Up in Dubai?
                    </h2>
                    <p className="font-body text-lg text-cream-100 mb-10 max-w-xl mx-auto">
                        Our team at Jetset Business Center will guide you through every step — from licensing to your first day in the office.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/book-tour">
                            <Button variant="primary" size="lg">Book a Free Tour</Button>
                        </Link>
                        <Link href="/contact">
                            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-navy-900">
                                Talk to an Expert
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
