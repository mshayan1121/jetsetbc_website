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
        title: "Office Work Space in Dubai - Jetset Business Center",
        description: "Rent premium office space in Dubai at Jetset Business Center. Private, fully furnished offices for rent in Business Bay. Ideal working space for teams of all sizes.",
        images: ['https://jetsetbc.com/reception1.jpg'],
    },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return children;
}
