import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import JsonLd from "@/components/seo/JsonLd";
import QuickInquiryPopup from "@/components/sections/QuickInquiryPopup";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair-display",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#D4AF37",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://jetsetbusinesscenter.com"),
  title: {
    default: "Jetset Business Center | Premium Workspace in Business Bay Dubai",
    template: "%s | Jetset Business Center",
  },
  description:
    "Award-winning coworking and private offices in Business Bay, Dubai. Flexible workspace solutions with Burj Khalifa views at Prime Tower.",
  keywords: [
    "Business Center Dubai",
    "Private Office Dubai",
    "Coworking Space Business Bay",
    "Luxury Workspace",
    "Meeting Rooms Dubai",
    "Serviced Offices",
    "Virtual Office",
  ],
  authors: [{ name: "Jetset Business Center" }],
  creator: "Jetset Business Center",
  openGraph: {
    type: "website",
    locale: "en_AE",
    url: "https://jetsetbusinesscenter.com",
    title: "Jetset Business Center | Premium Workspace in Business Bay Dubai",
    description:
      "Award-winning coworking and private offices in Business Bay, Dubai. Flexible workspace solutions with Burj Khalifa views at Prime Tower.",
    siteName: "Jetset Business Center",
    images: [
      {
        url: "/images/hero-bg.png",
        width: 1200,
        height: 630,
        alt: "Jetset Business Center Luxury Workspace",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jetset Business Center | Premium Workspace in Business Bay Dubai",
    description:
      "Award-winning coworking and private offices in Business Bay, Dubai. Flexible workspace solutions with Burj Khalifa views at Prime Tower.",
    images: ["/images/hero-bg.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${playfair.variable} ${spaceGrotesk.variable} antialiased min-h-screen flex flex-col font-body text-navy-900 bg-white selection:bg-gold-500/30 selection:text-navy-900 overflow-x-hidden`}
      >
        <JsonLd />
        <div className="w-full overflow-hidden">
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
          <QuickInquiryPopup />
        </div>
      </body>
    </html>
  );
}