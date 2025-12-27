import type { Metadata } from 'next';
import ContactPageClient from '@/components/sections/ContactPageClient';

export const metadata: Metadata = {
    title: 'Contact Us - Jetset Business Center Dubai | Book a Tour',
    description: 'Contact Jetset for premium office space. Call +971 58 577 9312, WhatsApp, or book a tour of Business Bay facilities.',
};

export default function ContactPage() {
    return <ContactPageClient />;
}
