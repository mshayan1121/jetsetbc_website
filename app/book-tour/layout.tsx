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
    images: ["/images/hero-bg.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Book a Tour | Jetset Business Center Business Bay Dubai",
    description:
      "Book a tour of Jetset Business Center in Business Bay, Dubai. Visit our coworking spaces, private offices, and meeting rooms with Burj Khalifa views.",
    images: ["/images/hero-bg.png"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}

