import type { Metadata } from 'next';
import ContactPageClient from '@/components/sections/ContactPageClient';

export const metadata: Metadata = {
    title: 'Contact Jetset Business Center For Coworking Spaces in Dubai',
    description: 'Get in touch with Jetset Business Center – a leading business center in Dubai. Located in Business Bay. Book a tour or enquire about coworking space today.',
    alternates: {
        canonical: 'https://jetsetbc.com/contact',
    },
    openGraph: {
        title: 'Contact Jetset Business Center For Coworking Spaces in Dubai',
        description: 'Get in touch with Jetset Business Center – a leading business center in Dubai. Located in Business Bay. Book a tour or enquire about coworking space today.',
        url: 'https://jetsetbc.com/contact',
        images: ['/images/hero-bg.png'],
    },
    twitter: {
        card: "summary_large_image",
        title: 'Contact Jetset Business Center For Coworking Spaces in Dubai',
        description: 'Get in touch with Jetset Business Center – a leading business center in Dubai. Located in Business Bay. Book a tour or enquire about coworking space today.',
        images: ['/images/hero-bg.png'],
    },
};

export default function ContactPage() {
    return <ContactPageClient />;
}
