import type { Metadata } from 'next';
import LocationsContent from './content';

export const metadata: Metadata = {
    title: "Offices in Business Bay Dubai | Jetset Business Center",
    description: "Explore Jetset Business Center in Business Bay, Dubai. Flexible coworking, meeting rooms, and office space for rent with premium amenities and Burj Khalifa views. Book a tour today.",
    alternates: {
        canonical: 'https://jetsetbc.com/locations',
    },
    openGraph: {
        title: "Offices in Business Bay Dubai | Jetset Business Center",
        description: "Explore Jetset Business Center in Business Bay, Dubai. Flexible coworking, meeting rooms, and office space for rent with premium amenities and Burj Khalifa views. Book a tour today.",
        url: 'https://jetsetbc.com/locations',
        images: ['/images/hero-bg.png'],
    },
    twitter: {
        card: "summary_large_image",
        title: "Offices in Business Bay Dubai | Jetset Business Center",
        description: "Explore Jetset Business Center in Business Bay, Dubai. Flexible coworking, meeting rooms, and office space for rent with premium amenities and Burj Khalifa views. Book a tour today.",
        images: ['/images/hero-bg.png'],
    },
};

export default function LocationsPage() {
    return <LocationsContent />;
}
