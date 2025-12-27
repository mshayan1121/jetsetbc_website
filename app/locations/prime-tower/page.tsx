import type { Metadata } from 'next';
import PrimeTowerContent from './content';

export const metadata: Metadata = {
    title: "Prime Tower Business Bay - Premium Office Space | Jetset",
    description: "Luxury offices on Level 20 of Prime Tower, Business Bay. Burj Khalifa views, metro access, and world-class amenities.",
};

export default function PrimeTowerPage() {
    return <PrimeTowerContent />;
}
