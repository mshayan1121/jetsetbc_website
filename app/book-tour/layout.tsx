import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book a Tour | Jetset Business Center Business Bay Dubai",
  description:
    "Book a tour of Jetset Business Center in Business Bay, Dubai. Visit our coworking spaces, private offices, and meeting rooms with Burj Khalifa views.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}

