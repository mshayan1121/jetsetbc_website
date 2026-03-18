import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Components Demo",
  description: "Internal UI components demo for Jetset Business Center.",
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}

