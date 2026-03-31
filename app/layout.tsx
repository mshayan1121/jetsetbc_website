import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display, Space_Grotesk } from "next/font/google";
import Script from "next/script";
import "./globals.css";

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
  metadataBase: new URL("https://jetsetbc.com"),
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
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_AE",
    url: "https://jetsetbc.com",
    title: "Jetset Business Center | Premium Workspace in Business Bay Dubai",
    description:
      "Award-winning coworking and private offices in Business Bay, Dubai. Flexible workspace solutions with Burj Khalifa views at Prime Tower.",
    siteName: "Jetset Business Center",
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
    title: "Jetset Business Center | Premium Workspace in Business Bay Dubai",
    description:
      "Award-winning coworking and private offices in Business Bay, Dubai. Flexible workspace solutions with Burj Khalifa views at Prime Tower.",
    images: ["https://jetsetbc.com/reception1.jpg"],
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
  verification: {
    google: "Jzq25pQkylPpIULYFHJaByzxyIHteCs9mXS-DT_MuR4",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Google Tag Manager */}
        <Script id="gtm" strategy="beforeInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-K68RNZ6K');`}
        </Script>
      </head>
      <body
        className={`${inter.variable} ${playfair.variable} ${spaceGrotesk.variable} antialiased min-h-screen flex flex-col font-body text-navy-900 bg-white selection:bg-gold-500/30 selection:text-navy-900 overflow-x-hidden`}
      >
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-K68RNZ6K"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {children}
      </body>
    </html>
  );
}