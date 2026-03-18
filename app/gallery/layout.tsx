import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jetset Business Center Gallery | Prime Tower Business Bay",
  description:
    "Browse photos of Jetset Business Center in Business Bay, Dubai—coworking spaces, private offices, meeting rooms, and Burj Khalifa views at Prime Tower.",
  alternates: {
    canonical: "https://jetsetbc.com/gallery",
  },
  openGraph: {
    title: "Jetset Business Center Gallery | Prime Tower Business Bay",
    description:
      "Browse photos of Jetset Business Center in Business Bay, Dubai—coworking spaces, private offices, meeting rooms, and Burj Khalifa views at Prime Tower.",
    url: "https://jetsetbc.com/gallery",
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
    title: "Jetset Business Center Gallery | Prime Tower Business Bay",
    description:
      "Browse photos of Jetset Business Center in Business Bay, Dubai—coworking spaces, private offices, meeting rooms, and Burj Khalifa views at Prime Tower.",
    images: ["https://jetsetbc.com/reception1.jpg"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}

