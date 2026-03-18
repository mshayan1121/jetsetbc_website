import type { Metadata } from 'next';
import PrimeTowerContent from './content';

export const metadata: Metadata = {
    title: "Prime Tower Business Bay - Premium Office Space | Jetset",
    description: "Jetset Business Center at Prime Tower, Business Bay. Premium coworking and private offices for rent in Business Bay with stunning Burj Khalifa views.",
};

export default function PrimeTowerPage() {
    return <PrimeTowerContent />;
}
