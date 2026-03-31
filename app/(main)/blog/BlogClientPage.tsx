import Link from 'next/link';
import Image from 'next/image';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { blogPosts, getMustReadPosts, getBlogCategories } from '@/lib/blog-data';
import { getLocalBlogImage } from '@/lib/blog-images';
import PageHero from '@/components/PageHero';

export default function BlogClientPage() {
    const postsWithLocalImages = blogPosts.map((post) => ({
        ...post,
        image: getLocalBlogImage(post.slug) ?? post.image,
    }));
    const mustReadPosts = getMustReadPosts().map((post) => ({
        ...post,
        image: getLocalBlogImage(post.slug) ?? post.image,
    }));
    const categories = getBlogCategories();

    return (
        <main className="min-h-screen">
            {/* Hero Section */}
            <PageHero
                badge="Blog"
                title="Jetset Business Insights Hub"
                subtitle="Explore Our Latest Business Insights & Tips"
            />

            {/* Main Content Section */}
            <section className="bg-white py-16 sm:py-20 md:py-24 lg:py-32">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12">
                        {/* Blog Grid - Left Side (70%) */}
                        <div className="lg:col-span-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                                {postsWithLocalImages.map((post) => (
                                    <Link href={`/blog/${post.slug}`} key={post.slug}>
                                        <Card className="group cursor-pointer h-full bg-white rounded-xl overflow-hidden shadow-luxury-sm hover:shadow-luxury-lg hover:-translate-y-2 transition-all duration-400" padding="none">
                                            {/* Featured Image */}
                                            <div className="relative h-56 overflow-hidden">
                                                <Image
                                                    src={post.image}
                                                    alt={post.title}
                                                    fill
                                                    className="object-cover group-hover:scale-105 transition-transform duration-400"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/40 to-transparent" />
                                                
                                                {/* Category Badge - ON IMAGE */}
                                                <div className="absolute top-4 left-4 z-10">
                                                    <span className="inline-block bg-gold-500/90 backdrop-blur-sm text-navy-900 font-bold uppercase text-xs px-3 py-1.5 rounded-md">
                                                        {post.category}
                                                    </span>
                                                </div>
                                            </div>
                                            
                                            {/* Card Content */}
                                            <div className="p-4 sm:p-6">
                                                {/* Meta Info */}
                                                <div className="flex items-center gap-3 sm:gap-4 text-xs sm:text-sm text-navy-700 mb-2 sm:mb-3">
                                                    <span className="flex items-center gap-1">
                                                        <User className="w-3 h-3 sm:w-4 sm:h-4 text-gold-500" />
                                                        {post.author}
                                                    </span>
                                                    <span className="flex items-center gap-1">
                                                        <Calendar className="w-3 h-3 sm:w-4 sm:h-4 text-gold-500" />
                                                        {post.date}
                                                    </span>
                                                </div>
                                                
                                                {/* Title */}
                                                <h3 className="font-display text-lg sm:text-xl md:text-2xl text-navy-900 mb-2 sm:mb-3 group-hover:text-gold-500 transition-colors line-clamp-2">
                                                    {post.title}
                                                </h3>
                                                
                                                {/* Excerpt */}
                                                <p className="font-body text-sm sm:text-base text-navy-700 mb-3 sm:mb-4 line-clamp-3 leading-relaxed">
                                                    {post.excerpt}
                                                </p>
                                                
                                                {/* Read More - FIX CONTRAST */}
                                                <div className="flex items-center text-navy-900 font-semibold group-hover:text-gold-500 transition-colors">
                                                    Read More
                                                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
                                                </div>
                                            </div>
                                        </Card>
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* Sidebar - Right Side (30%) */}
                        <aside className="lg:col-span-4 space-y-6 sm:space-y-8">
                            {/* Must Read */}
                            <div className="bg-cream-50 rounded-xl p-4 sm:p-6 shadow-luxury-sm">
                                <h3 className="font-display text-xl sm:text-2xl text-navy-900 mb-4 sm:mb-6 pb-3 sm:pb-4 border-b border-navy-900/10">
                                    Must Read
                                </h3>
                                
                                <div className="space-y-4">
                                    {mustReadPosts.map((post) => (
                                        <Link href={`/blog/${post.slug}`} key={post.slug}>
                                            <div className="group flex gap-3 cursor-pointer p-3 rounded-lg hover:bg-white transition-colors">
                                                <div className="relative w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden">
                                                    <Image
                                                        src={post.image}
                                                        alt={post.title}
                                                        fill
                                                        className="object-cover"
                                                    />
                                                </div>
                                                <div className="flex-1">
                                                    <h4 className="font-body font-semibold text-navy-900 text-sm mb-1 line-clamp-2 group-hover:text-gold-500 transition-colors">
                                                        {post.title}
                                                    </h4>
                                                    <span className="text-xs text-navy-700 flex items-center gap-1">
                                                        <Calendar className="w-3 h-3 text-gold-500" />
                                                        {post.date}
                                                    </span>
                                                </div>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                            
                            {/* Categories */}
                            <div className="bg-white rounded-xl p-6 shadow-luxury-sm">
                                <h3 className="font-display text-xl text-navy-900 mb-4 pb-4 border-b border-navy-900/10">
                                    Categories
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {categories.map((category) => (
                                        <span key={category} className="bg-navy-900 text-white px-3 py-1.5 rounded-md text-sm font-medium hover:bg-gold-500 hover:text-navy-900 cursor-pointer transition-colors">
                                            {category}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            
                            {/* Newsletter */}
                            <div className="bg-gradient-luxury rounded-xl p-6 shadow-luxury-sm">
                                <h3 className="font-display text-xl text-white mb-2">
                                    Need Expert Advice?
                                </h3>
                                <p className="font-body text-cream-50 text-sm mb-4">
                                    Our team is ready to help you start your business journey in Dubai.
                                </p>
                                <Button variant="primary" className="w-full" asChild>
                                    <Link href="/contact">Contact Us</Link>
                                </Button>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-gradient-luxury py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="font-display text-4xl md:text-5xl text-white mb-6">
                        Ready to Start Your Business Journey?
                    </h2>
                    <p className="font-body text-xl text-cream-50 mb-8 max-w-2xl mx-auto">
                        Book a same-day tour and experience the Jetset difference
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button variant="primary" size="lg" asChild>
                            <Link href="/book-tour">Book a Tour</Link>
                        </Button>
                        <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-navy-900" asChild>
                            <Link href="/services">Explore Services</Link>
                        </Button>
                    </div>
                </div>
            </section>
        </main>
    );
}

