import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { Button } from "@/components/ui/Button";

/**
 * Forms updated to redirect here on success:
 * - `components/sections/JetsetForm.tsx`
 * - `components/sections/QuickInquiryPopup.tsx`
 */

export const metadata: Metadata = {
  title: "Thank You",
  description: "We've received your enquiry and will be in touch shortly.",
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};

export default function ThankYouPage() {
  return (
    <main className="min-h-screen bg-white">
      <PageHero
        title="Thank You"
        subtitle="We've received your enquiry and will be in touch shortly."
      />

      <section className="bg-white py-16 sm:py-20 md:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-body text-base sm:text-lg text-navy-700 leading-relaxed">
            One of our team members will reach out to you within 24 hours. In the
            meantime, feel free to explore our spaces.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" size="lg" asChild>
              <Link href="/">Back to Home</Link>
            </Button>
            <Button variant="primary" size="lg" asChild>
              <Link href="/services">Explore Our Spaces</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}

