import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "New Company Setup in Dubai | Hassle-Free Business Solutions",
    description: "Setting up a new company in Dubai? Our expert consultants guide you through every step, ensuring a smooth and successful launch. Read more!",
    alternates: {
        canonical: 'https://jetsetbc.com/services/business-setup',
    },
    openGraph: {
        title: "New Company Setup in Dubai | Hassle-Free Business Solutions",
        description: "Set up your company in Dubai with ease. Jetset Business Center offers expert business consultant services, ejari registration, and end-to-end new company setup in Dubai.",
        url: 'https://jetsetbc.com/services/business-setup',
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
        title: "New Company Setup in Dubai | Hassle-Free Business Solutions",
        description: "Set up your company in Dubai with ease. Jetset Business Center offers expert business consultant services, ejari registration, and end-to-end new company setup in Dubai.",
        images: ['https://jetsetbc.com/reception1.jpg'],
    },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return children;
}
