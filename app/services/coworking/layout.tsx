import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Best Co-Working Space in Dubai - Jetset Business Center",
    description: "Find the best co-working space in Dubai at Jetset Business Center. Shared office space in Business Bay with flexible memberships and world-class amenities.",
    alternates: {
        canonical: 'https://jetsetbc.com/services/coworking',
    },
    openGraph: {
        title: "Best Co-Working Space in Dubai - Jetset Business Center",
        description: "Find the best co-working space in Dubai at Jetset Business Center. Shared office space in Business Bay with flexible memberships and world-class amenities.",
        url: 'https://jetsetbc.com/services/coworking',
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
        title: "Best Co-Working Space in Dubai - Jetset Business Center",
        description: "Find the best co-working space in Dubai at Jetset Business Center. Shared office space in Business Bay with flexible memberships and world-class amenities.",
        images: ['https://jetsetbc.com/reception1.jpg'],
    },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return children;
}
