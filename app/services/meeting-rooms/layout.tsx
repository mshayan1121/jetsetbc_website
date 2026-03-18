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
        images: [
            {
                url: 'https://jetsetbc.com/reception1.jpg',
                width: 1200,
                height: 630,
                alt: 'Jetset Business Center Reception',
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Book Your Ideal Meeting Space in Dubai – Jetset Business Center",
        description: "Book a professional meeting room in Dubai at Jetset Business Center. Conference rooms with Burj Khalifa views in Business Bay. Affordable rates, full AV setup.",
        images: ['https://jetsetbc.com/reception1.jpg'],
    },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return children;
}
