import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Book Your Ideal Meeting Space in Dubai – Jetset Business Center",
    description: "Book a professional meeting room in Dubai at Jetset Business Center. Conference rooms with Burj Khalifa views in Business Bay. Affordable rates, full AV setup.",
    alternates: {
        canonical: 'https://jetsetbc.com/services/meeting-rooms',
    },
    openGraph: {
        title: "Book Your Ideal Meeting Space in Dubai – Jetset Business Center",
        description: "Book a professional meeting room in Dubai at Jetset Business Center. Conference rooms with Burj Khalifa views in Business Bay. Affordable rates, full AV setup.",
        url: 'https://jetsetbc.com/services/meeting-rooms',
        images: ['/images/hero-bg.png'],
    },
    twitter: {
        card: "summary_large_image",
        title: "Book Your Ideal Meeting Space in Dubai – Jetset Business Center",
        description: "Book a professional meeting room in Dubai at Jetset Business Center. Conference rooms with Burj Khalifa views in Business Bay. Affordable rates, full AV setup.",
        images: ['/images/hero-bg.png'],
    },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return children;
}
