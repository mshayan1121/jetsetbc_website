
import { Metadata } from 'next'
import { Check, Building2, Users, Briefcase, HelpCircle, ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import CTASection from '@/components/sections/CTASection'
import PricingHero from './PricingHero'

export const metadata: Metadata = {
    title: 'Pricing - Transparent Office & Coworking Rates | Jetset Dubai',
    description: 'Clear pricing for private offices (from AED 50,000/year), coworking (from AED 80/day), and business setup services. No hidden fees.',
}

export default function PricingPage() {
    return (
        <main className="min-h-screen bg-cream-50">
            {/* 1. HERO SECTION */}
            <PricingHero />

            {/* 2. PRIVATE OFFICES SECTION */}
            <section className="py-16 sm:py-20 md:py-24 bg-white">
                <div className="container-custom mx-auto">
                    <div className="text-center mb-12 sm:mb-16">
                        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-navy-900 mb-3 sm:mb-4">Private Offices</h2>
                        <p className="font-body text-base sm:text-lg text-navy-700 max-w-2xl mx-auto px-4">
                            Fully furnished executive suites with stunning views and premium amenities.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
                        {/* Card 1 - Inner Offices */}
                        <Card className="shadow-luxury-sm hover:shadow-luxury-lg hover:shadow-[0_12px_40px_rgba(212,175,55,0.2)] hover:-translate-y-2 transition-all duration-400 h-full flex flex-col">
                            <CardHeader className="pb-4">
                                <CardTitle className="text-xl sm:text-2xl mb-2">Inner Offices</CardTitle>
                                <CardDescription className="text-sm sm:text-base">Perfect for focus and privacy</CardDescription>
                            </CardHeader>
                            <CardContent className="flex-grow">
                                <div className="mb-4 sm:mb-6">
                                    <span className="font-accent text-3xl sm:text-4xl md:text-5xl font-bold text-gold-500">From AED 50,000</span>
                                    <span className="font-body text-navy-700 ml-2 text-sm sm:text-base">/year</span>
                                    <p className="text-xs sm:text-sm text-navy-500 mt-2">3 months minimum commitment</p>
                                </div>

                                <ul className="space-y-4 mb-8">
                                    {privateOfficeFeatures.map((feature, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <Check className="w-5 h-5 text-gold-500 shrink-0 mt-0.5" />
                                            <span className="font-body text-navy-700">{feature}</span>
                                        </li>
                                    ))}
                                    <li className="flex items-start gap-3">
                                        <Check className="w-5 h-5 text-gold-500 shrink-0 mt-0.5" />
                                        <span className="font-body text-navy-700">Glass partitions with privacy frosting</span>
                                    </li>
                                </ul>

                                <div className="mt-auto">
                                    <Button variant="primary" className="w-full" asChild>
                                        <a href="/book-tour">Book a Tour</a>
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Card 2 - Outer Offices */}
                        <Card className="shadow-luxury-sm hover:shadow-luxury-lg hover:-translate-y-2 transition-all duration-400 h-full flex flex-col relative overflow-visible">
                            <div className="absolute top-0 right-0 p-4 sm:p-6 z-10">
                                <Badge variant="gold" className="text-xs sm:text-sm">Premium</Badge>
                            </div>
                            <CardHeader className="pb-4">
                                <CardTitle className="text-xl sm:text-2xl mb-2">Outer Offices</CardTitle>
                                <CardDescription className="text-sm sm:text-base">Breathtaking Burj Khalifa views</CardDescription>
                            </CardHeader>
                            <CardContent className="flex-grow">
                                <div className="mb-4 sm:mb-6">
                                    <span className="font-accent text-3xl sm:text-4xl md:text-5xl font-bold text-gold-500">Custom Pricing</span>
                                    <p className="text-xs sm:text-sm text-navy-500 mt-2">Subject to availability</p>
                                </div>

                                <ul className="space-y-4 mb-8">
                                    {privateOfficeFeatures.map((feature, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <Check className="w-5 h-5 text-gold-500 shrink-0 mt-0.5" />
                                            <span className="font-body text-navy-700">{feature}</span>
                                        </li>
                                    ))}
                                    <li className="flex items-start gap-3">
                                        <Check className="w-5 h-5 text-gold-500 shrink-0 mt-0.5" />
                                        <span className="font-body text-navy-700 font-semibold">Direct views of Burj Khalifa</span>
                                    </li>
                                </ul>

                                <div className="mt-auto">
                                    <Button variant="primary" className="w-full" asChild>
                                        <a href="/contact">Schedule Viewing</a>
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* 3. COWORKING SECTION */}
            <section className="py-16 sm:py-20 md:py-24 bg-cream-50">
                <div className="container-custom mx-auto">
                    <div className="text-center mb-12 sm:mb-16">
                        <h2 className="font-display text-3xl sm:text-4xl font-bold text-navy-900 mb-3 sm:mb-4">Coworking Access</h2>
                        <p className="font-body text-base sm:text-lg text-navy-700 max-w-2xl mx-auto px-4">
                            Flexible desk solutions in our premium open lounge area.
                        </p>
                    </div>

                    <div className="max-w-5xl mx-auto">
                        <Card className="shadow-luxury-sm hover:shadow-luxury-lg transition-all duration-500 relative overflow-hidden group [--hover-delay:150ms]">
                            <CardHeader className="pb-0">
                                <div className="flex items-center justify-between flex-wrap gap-3">
                                    <div>
                                        <CardTitle className="text-2xl sm:text-3xl">Coworking Access</CardTitle>
                                        <CardDescription className="text-sm sm:text-base">
                                            Daily, monthly, and annual options in our premium lounge.
                                        </CardDescription>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Badge variant="gold" className="text-xs sm:text-sm">Popular</Badge>
                                        <Badge variant="teal" className="bg-teal-600 text-white border-none text-xs sm:text-sm">Best Value</Badge>
                                    </div>
                                </div>
                            </CardHeader>
                            <CardContent className="pt-6">
                                <div className="relative min-h-[360px] sm:min-h-[320px]">
                                    <div className="transition-all duration-500 ease-out delay-150 group-hover:opacity-0 group-hover:-translate-y-3 group-hover:pointer-events-none" style={{ transitionDelay: "150ms" }}>
                                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                                            <div className="border border-cream-200 rounded-xl p-5 bg-cream-50/60 sub-card-hover">
                                                <p className="text-xs uppercase tracking-wide text-navy-500 mb-1">Daily Pass</p>
                                                <div className="flex items-end gap-2 mb-3">
                                                    <span className="font-accent text-3xl font-bold text-gold-500">AED 80</span>
                                                    <span className="text-sm text-navy-600">/day</span>
                                                </div>
                                                <ul className="space-y-2">
                                                    <li className="flex items-start gap-2">
                                                        <Check className="w-4 h-4 text-gold-500 shrink-0 mt-0.5" />
                                                        <span className="text-sm text-navy-700">Access 9AM - 6PM</span>
                                                    </li>
                                                    <li className="flex items-start gap-2">
                                                        <Check className="w-4 h-4 text-gold-500 shrink-0 mt-0.5" />
                                                        <span className="text-sm text-navy-700">High-speed Wi-Fi</span>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="border border-gold-500/30 rounded-xl p-5 bg-white shadow-sm sub-card-hover">
                                                <div className="flex items-center justify-between mb-1">
                                                    <p className="text-xs uppercase tracking-wide text-navy-500">Monthly</p>
                                                    <Badge variant="gold" className="text-[10px] sm:text-xs">Popular</Badge>
                                                </div>
                                                <div className="flex items-end gap-2 mb-3">
                                                    <span className="font-accent text-3xl font-bold text-gold-500">AED 1,800</span>
                                                    <span className="text-sm text-navy-600">/month</span>
                                                </div>
                                                <ul className="space-y-2">
                                                    <li className="flex items-start gap-2">
                                                        <Check className="w-4 h-4 text-gold-500 shrink-0 mt-0.5" />
                                                        <span className="text-sm text-navy-700">24/7 Access</span>
                                                    </li>
                                                    <li className="flex items-start gap-2">
                                                        <Check className="w-4 h-4 text-gold-500 shrink-0 mt-0.5" />
                                                        <span className="text-sm text-navy-700">Meeting room credits</span>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="border border-cream-200 rounded-xl p-5 bg-cream-50/60 sub-card-hover">
                                                <div className="flex items-center justify-between mb-1">
                                                    <p className="text-xs uppercase tracking-wide text-navy-500">Annual</p>
                                                    <Badge variant="outline" className="text-green-600 border-green-600/20 bg-green-50 text-[10px] sm:text-xs">Best Value</Badge>
                                                </div>
                                                <div className="flex items-end gap-2 mb-3">
                                                    <span className="font-accent text-3xl font-bold text-gold-500">AED 18,000</span>
                                                    <span className="text-sm text-navy-600">/year</span>
                                                </div>
                                                <ul className="space-y-2">
                                                    <li className="flex items-start gap-2">
                                                        <Check className="w-4 h-4 text-gold-500 shrink-0 mt-0.5" />
                                                        <span className="text-sm text-navy-700">Priority meeting bookings</span>
                                                    </li>
                                                    <li className="flex items-start gap-2">
                                                        <Check className="w-4 h-4 text-gold-500 shrink-0 mt-0.5" />
                                                        <span className="text-sm text-navy-700">Business address included</span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="mt-6">
                                            <Button variant="primary" className="w-full sm:w-auto" asChild>
                                                <a href="/book-tour">Get Started</a>
                                            </Button>
                                        </div>
                                    </div>

                                    <div className="absolute inset-0 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-500 ease-out delay-[150ms]" style={{ transitionDelay: "150ms" }}>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 h-full divide-y sm:divide-y-0 sm:divide-x divide-cream-200">
                                            <div className="p-6 sm:p-8 flex flex-col gap-4 bg-white/95">
                                                <div>
                                                    <p className="text-xs uppercase tracking-wide text-navy-500">Flexi-Desk</p>
                                                    <h3 className="text-xl sm:text-2xl font-display font-semibold text-navy-900">Hot-desking in the premium lounge</h3>
                                                </div>
                                                <div className="space-y-2">
                                                    <div className="flex items-end gap-2">
                                                        <span className="font-accent text-2xl sm:text-3xl font-bold text-gold-500">AED 80</span>
                                                        <span className="text-sm text-navy-600">/day</span>
                                                    </div>
                                                    <div className="flex items-end gap-2">
                                                        <span className="font-accent text-2xl sm:text-3xl font-bold text-gold-500">AED 1,800</span>
                                                        <span className="text-sm text-navy-600">/month</span>
                                                    </div>
                                                    <div className="flex items-end gap-2">
                                                        <span className="font-accent text-2xl sm:text-3xl font-bold text-gold-500">AED 18,000</span>
                                                        <span className="text-sm text-navy-600">/year</span>
                                                    </div>
                                                </div>
                                                <ul className="space-y-2">
                                                    <li className="flex items-start gap-2">
                                                        <Check className="w-4 h-4 text-gold-500 shrink-0 mt-0.5" />
                                                        <span className="text-sm text-navy-700">Access 9AM - 6PM</span>
                                                    </li>
                                                    <li className="flex items-start gap-2">
                                                        <Check className="w-4 h-4 text-gold-500 shrink-0 mt-0.5" />
                                                        <span className="text-sm text-navy-700">High-speed Wi-Fi</span>
                                                    </li>
                                                    <li className="flex items-start gap-2">
                                                        <Check className="w-4 h-4 text-gold-500 shrink-0 mt-0.5" />
                                                        <span className="text-sm text-navy-700">Coffee & Tea included</span>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="p-6 sm:p-8 flex flex-col gap-4 bg-cream-50/60">
                                                <div>
                                                    <p className="text-xs uppercase tracking-wide text-navy-500">Fixed-Desk</p>
                                                    <h3 className="text-xl sm:text-2xl font-display font-semibold text-navy-900">Your own dedicated desk</h3>
                                                </div>
                                                <div className="space-y-2">
                                                    <div className="flex items-end gap-2">
                                                        <span className="font-accent text-2xl sm:text-3xl font-bold text-gold-500">AED 2,400</span>
                                                        <span className="text-sm text-navy-600">/month</span>
                                                    </div>
                                                    <div className="flex items-end gap-2">
                                                        <span className="font-accent text-2xl sm:text-3xl font-bold text-gold-500">AED 24,000</span>
                                                        <span className="text-sm text-navy-600">/year</span>
                                                    </div>
                                                </div>
                                                <ul className="space-y-2">
                                                    <li className="flex items-start gap-2">
                                                        <Check className="w-4 h-4 text-gold-500 shrink-0 mt-0.5" />
                                                        <span className="text-sm text-navy-700">24/7 Access</span>
                                                    </li>
                                                    <li className="flex items-start gap-2">
                                                        <Check className="w-4 h-4 text-gold-500 shrink-0 mt-0.5" />
                                                        <span className="text-sm text-navy-700">Business address included</span>
                                                    </li>
                                                    <li className="flex items-start gap-2">
                                                        <Check className="w-4 h-4 text-gold-500 shrink-0 mt-0.5" />
                                                        <span className="text-sm text-navy-700">Dedicated workstation storage</span>
                                                    </li>
                                                </ul>
                                                <div className="mt-auto pt-2">
                                                    <Button variant="primary" className="w-full" asChild>
                                                        <a href="/book-tour">Get Started</a>
                                                    </Button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* 4. MEETING ROOMS SECTION */}
            <section className="py-16 sm:py-20 md:py-24 bg-white">
                <div className="container-custom mx-auto">
                    <div className="text-center mb-12 sm:mb-16">
                        <h2 className="font-display text-3xl sm:text-4xl font-bold text-navy-900 mb-3 sm:mb-4">Meeting Rooms</h2>
                        <p className="font-body text-base sm:text-lg text-navy-700 max-w-2xl mx-auto px-4">
                            Impress your clients in our state-of-the-art meeting spaces.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
                        <MeetingCard
                            title="Majilis"
                            capacity="9-10 People"
                            icon={<Users className="w-6 h-6 text-gold-500" />}
                            description="VIP/Executive style room for high-stakes meetings and corporate presentations."
                        />
                        <MeetingCard
                            title="Conference Room"
                            capacity="8 People"
                            icon={<Briefcase className="w-6 h-6 text-gold-500" />}
                            description="Boardroom-style setting for important business meetings."
                        />
                        <MeetingCard
                            title="Standard Room"
                            capacity="6 People"
                            icon={<Users className="w-6 h-6 text-gold-500" />}
                            description="Perfect for team meetings and small group collaborations."
                        />
                    </div>
                    <div className="mt-8 text-center">
                        <p className="text-navy-600">
                            <span className="font-bold text-gold-600">* Members enjoy 2 hours free daily.</span> Non-members welcome at hourly rates.
                        </p>
                    </div>
                </div>
            </section>

            {/* 5. BUSINESS SETUP SECTION */}
            <section className="py-16 sm:py-20 md:py-24 bg-cream-50">
                <div className="container-custom mx-auto">
                    <div className="text-center mb-12 sm:mb-16">
                        <h2 className="font-display text-3xl sm:text-4xl font-bold text-navy-900 mb-3 sm:mb-4">Business Setup Services</h2>
                        <p className="font-body text-base sm:text-lg text-navy-700 max-w-2xl mx-auto px-4">
                            Everything you need to establish your presence in Dubai.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
                        <Card className="shadow-luxury-sm hover:shadow-luxury-lg transition-all duration-400">
                            <CardHeader>
                                <CardTitle className="text-2xl flex items-center gap-2">
                                    <Building2 className="w-6 h-6 text-gold-500" />
                                    Virtual Ejari
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="mb-4">
                                    <span className="font-accent text-3xl font-bold text-navy-900">AED 8,500</span>
                                    <span className="text-navy-600">/year</span>
                                </div>
                                <p className="font-body text-navy-700 mb-4">
                                    Registered tenancy contract accepted by government authorities and banks.
                                </p>
                                <ul className="font-body text-sm text-navy-600 mb-6 space-y-2">
                                    <li className="flex items-start gap-2">
                                        <span className="text-gold-500 mt-1">•</span>
                                        <span>Unlimited inspections</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-gold-500 mt-1">•</span>
                                        <span>Same-day processing</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-gold-500 mt-1">•</span>
                                        <span>Government & bank compliant</span>
                                    </li>
                                </ul>
                                <Button variant="outline" className="w-full" asChild>
                                    <a href="/contact?service=ejari">Inquire Now</a>
                                </Button>
                            </CardContent>
                        </Card>

                        <Card className="shadow-luxury-sm hover:shadow-luxury-lg transition-all duration-400">
                            <CardHeader>
                                <CardTitle className="text-2xl flex items-center gap-2">
                                    <Briefcase className="w-6 h-6 text-gold-500" />
                                    Company Formation
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="mb-4">
                                    <span className="font-accent text-3xl font-bold text-navy-900">Custom Pricing</span>
                                </div>
                                <p className="font-body text-navy-700 mb-4">
                                    Step-by-step guidance: Activity selection → Trade Name → Initial Approval → License Issuance.
                                </p>
                                <ul className="font-body text-sm text-navy-600 mb-6 space-y-2">
                                    <li className="flex items-start gap-2">
                                        <span className="text-gold-500 mt-1">•</span>
                                        <span>Mainland (100% foreign ownership where applicable) & Free Zone licenses</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-gold-500 mt-1">•</span>
                                        <span>Visa processing (Investor/Staff)</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-gold-500 mt-1">•</span>
                                        <span>Corporate Bank Account opening support</span>
                                    </li>
                                </ul>
                                <Button variant="primary" className="w-full" asChild>
                                    <a href="/contact?service=formation">Get a Quote</a>
                                </Button>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* 6. FAQ SECTION */}
            <section className="py-16 sm:py-20 md:py-24 bg-white">
                <div className="container-custom mx-auto max-w-3xl">
                    <div className="text-center mb-10 sm:mb-12">
                        <h2 className="font-display text-3xl sm:text-4xl font-bold text-navy-900 mb-3 sm:mb-4">Frequently Asked Questions</h2>
                    </div>

                    <div className="space-y-4">
                        <FAQItem question="What is included in the private office rent?" answer="Our private offices are all-inclusive. This means your rent covers furniture, high-speed internet, DEWA (utilities), air conditioning, daily cleaning, and reception services. There are no hidden monthly fees." />
                        <FAQItem question="Do you require a long-term commitment?" answer="For private offices, we require a minimum commitment of 3 months. For coworking, we offer daily, monthly, and annual plans to suit your flexibility needs." />
                        <FAQItem question="Can I use the meeting rooms if I am not a member?" answer="Yes! Meeting rooms are available for booking by non-members at hourly rates. Members enjoy preferential rates and complimentary hours based on their plan." />
                        <FAQItem question="Is parking available?" answer="Yes, we offer parking solutions for our members. Please inquire with our team about availability and rates for your specific package." />
                    </div>
                </div>
            </section>

            {/* 7. CTA SECTION */}
            <CTASection />
        </main>
    )
}

function MeetingCard({ title, capacity, icon, description }: { title: string, capacity: string, icon: React.ReactNode, description: string }) {
    return (
        <Card className="shadow-luxury-sm hover:shadow-luxury-lg hover:-translate-y-2 transition-all duration-400">
            <CardHeader>
                <div className="mb-4 p-3 bg-gold-500/10 rounded-full w-fit">
                    {icon}
                </div>
                <CardTitle className="text-xl">{title}</CardTitle>
                <CardDescription>{capacity}</CardDescription>
            </CardHeader>
            <CardContent>
                <p className="font-body text-navy-700 mb-6 min-h-[3rem]">{description}</p>
                <Button variant="outline" className="w-full" asChild>
                    <a href="/contact?type=meeting">Inquire</a>
                </Button>
            </CardContent>
        </Card>
    )
}

function FAQItem({ question, answer }: { question: string, answer: string }) {
    return (
        <details className="group border border-cream-200 rounded-xl bg-cream-50 open:bg-white open:shadow-luxury-sm transition-all duration-300">
            <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                <h3 className="font-display text-lg font-semibold text-navy-900 group-hover:text-gold-600 transition-colors">
                    {question}
                </h3>
                <span className="p-2 rounded-full bg-white group-open:bg-navy-900 transition-colors">
                    <ChevronDown className="w-5 h-5 text-navy-900 group-open:text-white group-open:rotate-180 transition-all duration-300" />
                </span>
            </summary>
            <div className="px-6 pb-6 pt-0">
                <p className="font-body text-navy-700 leading-relaxed border-t border-cream-100 pt-4">
                    {answer}
                </p>
            </div>
        </details>
    )
}

const privateOfficeFeatures = [
    "Premium furniture included",
    "24/7 Secure access",
    "High-speed Wi-Fi & LAN",
    "Utilities included (DEWA & AC)",
    "Daily cleaning service",
    "Receptionist support",
    "Complimentary coffee & tea",
    "Pantry & Lounge access"
];
