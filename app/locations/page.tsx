import type { Metadata } from 'next';
import LocationsContent from './content';

export const metadata: Metadata = {
    title: "Our Location - Luxury Business Center in Dubai | Jetset",
    description: "Explore Jetset Business Center location in Dubai. Prime Tower Business Bay offers premium offices with Burj Khalifa views.",
};

export default function LocationsPage() {
    return <LocationsContent />;
}
