import type { Metadata } from 'next';
import ContactPageClient from '@/components/sections/ContactPageClient';

export const metadata: Metadata = {
    title: 'Contact Jetset Business Center For Coworking Spaces in Dubai',
    description: 'Contact Jetset Business Center to explore coworking spaces in Business Bay & Downtown Dubai, ideal for startups, freelancers, & businesses of all sizes.',
    alternates: {
        canonical: 'https://jetsetbc.com/contact',
    },
    openGraph: {
        title: 'Contact Jetset Business Center For Coworking Spaces in Dubai',
        description: 'Get in touch with Jetset Business Center – a leading business center in Dubai. Located in Business Bay. Book a tour or enquire about coworking space today.',
        url: 'https://jetsetbc.com/contact',
        images: [
            {
                url: 'https://jetsetbc.com/reception1.jpg',
                width: 1200,
                height: 630,
                alt: 'Jetset Business Center Reception',
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: 'Contact Jetset Business Center For Coworking Spaces in Dubai',
        description: 'Get in touch with Jetset Business Center – a leading business center in Dubai. Located in Business Bay. Book a tour or enquire about coworking space today.',
        images: ['https://jetsetbc.com/reception1.jpg'],
    },
};

export default function ContactPage() {
    return <ContactPageClient />;
}
