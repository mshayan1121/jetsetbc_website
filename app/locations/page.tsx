import type { Metadata } from 'next';
import LocationsContent from './content';

export const metadata: Metadata = {
    title: "Offices in Business Bay Dubai | Jetset Business Center",
    description: "Explore Jetset Business Center in Business Bay, Dubai. Flexible coworking, meeting rooms, and office space for rent with premium amenities and Burj Khalifa views. Book a tour today.",
};

export default function LocationsPage() {
    return <LocationsContent />;
}
