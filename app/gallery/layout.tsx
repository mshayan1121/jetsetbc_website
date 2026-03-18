import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jetset Business Center Gallery | Prime Tower Business Bay",
  description:
    "Browse photos of Jetset Business Center in Business Bay, Dubai—coworking spaces, private offices, meeting rooms, and Burj Khalifa views at Prime Tower.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}

