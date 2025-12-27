import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Coworking Space | Jetset Business Center",
    description: "Premium coworking space in Dubai offering hot desks and dedicated desks. Enjoy high-speed WiFi, networking events, and luxury amenities.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return children;
}
