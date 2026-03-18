import type { Metadata } from 'next';
import ContactPageClient from '@/components/sections/ContactPageClient';

export const metadata: Metadata = {
    title: 'Contact Jetset Business Center For Coworking Spaces in Dubai',
    description: 'Get in touch with Jetset Business Center – a leading business center in Dubai. Located in Business Bay. Book a tour or enquire about coworking space today.',
};

export default function ContactPage() {
    return <ContactPageClient />;
}
