import Image from "next/image";
import { Phone } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.ico' },
    ],
    apple: '/apple-touch-icon.png',
  },
};

export default function LpLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-white" style={{ fontSize: "23px" }}>
      <header className="w-full border-b border-cream-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
          <a href="/" aria-label="Jetset Business Center">
            <Image
              src="/logo.png"
              alt="Jetset Business Center"
              width={160}
              height={48}
              className="h-10 sm:h-12 w-auto"
              priority
            />
          </a>
          <a
            href="tel:+971585779312"
            className="flex items-center gap-2 text-navy-900 font-accent font-semibold text-sm sm:text-base hover:text-gold-600 transition-colors"
          >
            <Phone className="w-4 h-4 text-gold-500" />
            <span>+971 58 577 9312</span>
          </a>
        </div>
      </header>
      <main className="flex-grow">{children}</main>
    </div>
  );
}
