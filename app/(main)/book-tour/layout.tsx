import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book a Tour | Jetset Business Center Business Bay Dubai",
  description:
    "Book a tour of Jetset Business Center in Business Bay, Dubai. Visit our coworking spaces, private offices, and meeting rooms with Burj Khalifa views.",
  alternates: {
    canonical: "https://jetsetbc.com/book-tour",
  },
  openGraph: {
    title: "Book a Tour | Jetset Business Center Business Bay Dubai",
    description:
      "Book a tour of Jetset Business Center in Business Bay, Dubai. Visit our coworking spaces, private offices, and meeting rooms with Burj Khalifa views.",
    url: "https://jetsetbc.com/book-tour",
    images: [
      {
        url: "https://jetsetbc.com/reception1.jpg",
        width: 1200,
        height: 630,
        alt: "Jetset Business Center Reception",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Book a Tour | Jetset Business Center Business Bay Dubai",
    description:
      "Book a tour of Jetset Business Center in Business Bay, Dubai. Visit our coworking spaces, private offices, and meeting rooms with Burj Khalifa views.",
    images: ["https://jetsetbc.com/reception1.jpg"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}

