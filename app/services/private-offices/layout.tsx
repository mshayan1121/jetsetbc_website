import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Office Work Space in Dubai - Jetset Business Center",
    description: "Rent premium office space in Dubai at Jetset Business Center. Private, fully furnished offices for rent in Business Bay. Ideal working space for teams of all sizes.",
    alternates: {
        canonical: 'https://jetsetbc.com/services/private-offices',
    },
    openGraph: {
        title: "Office Work Space in Dubai - Jetset Business Center",
        description: "Rent premium office space in Dubai at Jetset Business Center. Private, fully furnished offices for rent in Business Bay. Ideal working space for teams of all sizes.",
        url: 'https://jetsetbc.com/services/private-offices',
        images: ['/images/hero-bg.png'],
    },
    twitter: {
        card: "summary_large_image",
        title: "Office Work Space in Dubai - Jetset Business Center",
        description: "Rent premium office space in Dubai at Jetset Business Center. Private, fully furnished offices for rent in Business Bay. Ideal working space for teams of all sizes.",
        images: ['/images/hero-bg.png'],
    },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return children;
}
