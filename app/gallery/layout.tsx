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
    images: ["/images/hero-bg.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jetset Business Center Gallery | Prime Tower Business Bay",
    description:
      "Browse photos of Jetset Business Center in Business Bay, Dubai—coworking spaces, private offices, meeting rooms, and Burj Khalifa views at Prime Tower.",
    images: ["/images/hero-bg.png"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}

