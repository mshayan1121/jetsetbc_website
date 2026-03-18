import type { Metadata } from 'next';
import PrimeTowerContent from './content';
import JsonLd from '@/components/seo/JsonLd';

export const metadata: Metadata = {
    title: "Prime Tower Business Bay - Premium Office Space | Jetset",
    description: "Jetset Business Center at Prime Tower, Business Bay. Premium coworking and private offices for rent in Business Bay with stunning Burj Khalifa views.",
    alternates: {
        canonical: 'https://jetsetbc.com/locations/prime-tower',
    },
    openGraph: {
        title: "Prime Tower Business Bay - Premium Office Space | Jetset",
        description: "Jetset Business Center at Prime Tower, Business Bay. Premium coworking and private offices for rent in Business Bay with stunning Burj Khalifa views.",
        url: 'https://jetsetbc.com/locations/prime-tower',
        images: ['/images/hero-bg.png'],
    },
    twitter: {
        card: "summary_large_image",
        title: "Prime Tower Business Bay - Premium Office Space | Jetset",
        description: "Jetset Business Center at Prime Tower, Business Bay. Premium coworking and private offices for rent in Business Bay with stunning Burj Khalifa views.",
        images: ['/images/hero-bg.png'],
    },
};

export default function PrimeTowerPage() {
    return (
        <>
            <JsonLd
                includeLocalBusiness={false}
                schemas={{
                    "@context": "https://schema.org",
                    "@type": "Place",
                    name: "Prime Tower, Business Bay",
                    url: "https://jetsetbc.com/locations/prime-tower",
                    address: {
                        "@type": "PostalAddress",
                        streetAddress: "Prime Tower, Level 20, Business Bay",
                        addressLocality: "Dubai",
                        addressRegion: "Dubai",
                        addressCountry: "AE",
                    },
                    geo: {
                        "@type": "GeoCoordinates",
                        latitude: 25.1861,
                        longitude: 55.2696,
                    },
                }}
            />
            <PrimeTowerContent />
        </>
    );
}
