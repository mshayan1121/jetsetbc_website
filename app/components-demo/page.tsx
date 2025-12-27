"use client";

import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardImage, CardTitle } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import Header from "@/components/layout/Header";
import { Award, ChevronRight, Star, Tag, Info } from "lucide-react";

export default function ComponentsDemo() {
    return (
        <div className="min-h-screen bg-cream-50">
            <Header />

            <main className="p-8 md:p-16 pt-32 space-y-16">
                <section>
                    <h1 className="text-4xl font-display text-navy-900 mb-8 border-b border-gold-500 pb-4">Premium UI Components</h1>

                    <div className="space-y-12">
                        {/* Buttons Section */}
                        <div>
                            <h2 className="text-2xl font-display text-navy-900 mb-6">Buttons</h2>
                            <div className="flex flex-wrap gap-4 items-end">
                                <Button variant="primary" size="lg" rightIcon={<ChevronRight />}>
                                    Primary Button
                                </Button>
                                <Button variant="secondary" size="md" leftIcon={<Star className="w-4 h-4" />}>
                                    Secondary Button
                                </Button>
                                <Button variant="outline" size="md">
                                    Outline Button
                                </Button>
                                <Button variant="ghost" size="sm">
                                    Ghost Button
                                </Button>
                            </div>
                        </div>

                        {/* Badges Section */}
                        <div>
                            <h2 className="text-2xl font-display text-navy-900 mb-6">Badges</h2>
                            <div className="flex flex-wrap gap-4">
                                <Badge variant="gold" icon={<Award className="w-3 h-3" />}>
                                    Luxury Award
                                </Badge>
                                <Badge variant="navy" icon={<Tag className="w-3 h-3" />}>
                                    Business Category
                                </Badge>
                                <Badge variant="teal" icon={<Info className="w-3 h-3" />}>
                                    Online Status
                                </Badge>
                            </div>
                        </div>

                        {/* Cards Section */}
                        <div>
                            <h2 className="text-2xl font-display text-navy-900 mb-6">Cards</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                <Card>
                                    <CardImage
                                        src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800"
                                        alt="Premium Office"
                                    />
                                    <CardHeader>
                                        <div className="flex justify-between items-start">
                                            <CardTitle>Executive Suite</CardTitle>
                                            <Badge variant="gold">Premium</Badge>
                                        </div>
                                        <CardDescription>Experience unmatched luxury in the heart of Dubai.</CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <ul className="text-sm space-y-2 opacity-80">
                                            <li>• Fully furnished 24/7 access</li>
                                            <li>• High-speed fiber internet</li>
                                            <li>• Dedicated reception service</li>
                                        </ul>
                                    </CardContent>
                                    <CardFooter>
                                        <Button variant="outline" className="w-full">Book Now</Button>
                                    </CardFooter>
                                </Card>

                                <Card glass>
                                    <CardHeader>
                                        <CardTitle>Membership Plans</CardTitle>
                                        <CardDescription>Flexible options for your business growth.</CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-3xl font-display text-navy-900">$299<span className="text-sm font-body opacity-60">/month</span></p>
                                        <p className="mt-4 text-sm opacity-80">Ideal for entrepreneurs and growing teams looking for a prestigious address.</p>
                                    </CardContent>
                                    <CardFooter>
                                        <Button variant="primary" className="w-full">Get Started</Button>
                                    </CardFooter>
                                </Card>

                                <Card hoverEffect={false}>
                                    <CardHeader>
                                        <CardTitle>No Hover Effect</CardTitle>
                                        <CardDescription>This card stays stationary.</CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-sm opacity-80">Sometimes you want a simple card without animations.</p>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            {/* Spacer to allow for scroll testing */}
            <div className="h-[200vh]" />
        </div>
    );
}
