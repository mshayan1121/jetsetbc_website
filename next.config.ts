import type { NextConfig } from "next";
import path from "path";

const tailwindcssPath = path.resolve(process.cwd(), "node_modules", "tailwindcss");

const wordpressRedirects = [
  // ─── PAGE REDIRECTS ───────────────────────────────────────────────────────
  {
    source: "/co-working-space1",
    destination: "/services/coworking",
    permanent: true,
  },
  {
    source: "/co-working-space1/",
    destination: "/services/coworking",
    permanent: true,
  },
  {
    source: "/office-space-1",
    destination: "/services/private-offices",
    permanent: true,
  },
  {
    source: "/office-space-1/",
    destination: "/services/private-offices",
    permanent: true,
  },
  {
    source: "/meeting-room-1",
    destination: "/services/meeting-rooms",
    permanent: true,
  },
  {
    source: "/meeting-room-1/",
    destination: "/services/meeting-rooms",
    permanent: true,
  },
  {
    source: "/business-setup-1",
    destination: "/services/business-setup",
    permanent: true,
  },
  {
    source: "/business-setup-1/",
    destination: "/services/business-setup",
    permanent: true,
  },
  {
    source: "/virtual-ejari-1",
    destination: "/services/business-setup",
    permanent: true,
  },
  {
    source: "/virtual-ejari-1/",
    destination: "/services/business-setup",
    permanent: true,
  },
  {
    source: "/prime-tower-1",
    destination: "/locations/prime-tower",
    permanent: true,
  },
  {
    source: "/prime-tower-1/",
    destination: "/locations/prime-tower",
    permanent: true,
  },
  {
    source: "/contact-1",
    destination: "/contact",
    permanent: true,
  },
  {
    source: "/contact-1/",
    destination: "/contact",
    permanent: true,
  },
  {
    source: "/about-us-1",
    destination: "/about",
    permanent: true,
  },
  {
    source: "/about-us-1/",
    destination: "/about",
    permanent: true,
  },

  // ─── BLOG POST REDIRECTS ──────────────────────────────────────────────────
  // Old: /<slug>/ → New: /blog/<slug>
  {
    source: "/how-to-fast-track-your-dubai-business-setup-the-all-inclusive-office-advantage",
    destination: "/blog/how-to-fast-track-your-dubai-business-setup-the-all-inclusive-office-advantage",
    permanent: true,
  },
  {
    source: "/how-to-fast-track-your-dubai-business-setup-the-all-inclusive-office-advantage/",
    destination: "/blog/how-to-fast-track-your-dubai-business-setup-the-all-inclusive-office-advantage",
    permanent: true,
  },
  {
    source: "/business-registration-in-dubai-for-foreigners-full-guide-for-non-uae-residents",
    destination: "/blog/business-registration-in-dubai-for-foreigners-full-guide-for-non-uae-residents",
    permanent: true,
  },
  {
    source: "/business-registration-in-dubai-for-foreigners-full-guide-for-non-uae-residents/",
    destination: "/blog/business-registration-in-dubai-for-foreigners-full-guide-for-non-uae-residents",
    permanent: true,
  },
  {
    source: "/office-rental-dubai-legal-requirements-setup-process",
    destination: "/blog/office-rental-dubai-legal-requirements-setup-process",
    permanent: true,
  },
  {
    source: "/office-rental-dubai-legal-requirements-setup-process/",
    destination: "/blog/office-rental-dubai-legal-requirements-setup-process",
    permanent: true,
  },
  {
    source: "/how-a-business-bay-address-can-boost-your-brand-credibility",
    destination: "/blog/how-a-business-bay-address-can-boost-your-brand-credibility",
    permanent: true,
  },
  {
    source: "/how-a-business-bay-address-can-boost-your-brand-credibility/",
    destination: "/blog/how-a-business-bay-address-can-boost-your-brand-credibility",
    permanent: true,
  },
  {
    source: "/coworking-vs-private-office-at-prime-tower-which-is-right-for-your-business",
    destination: "/blog/coworking-vs-private-office-at-prime-tower-which-is-right-for-your-business",
    permanent: true,
  },
  {
    source: "/coworking-vs-private-office-at-prime-tower-which-is-right-for-your-business/",
    destination: "/blog/coworking-vs-private-office-at-prime-tower-which-is-right-for-your-business",
    permanent: true,
  },
  {
    source: "/how-a-business-bay-address-can-help-you-attract-high-value-clients",
    destination: "/blog/how-a-business-bay-address-can-help-you-attract-high-value-clients",
    permanent: true,
  },
  {
    source: "/how-a-business-bay-address-can-help-you-attract-high-value-clients/",
    destination: "/blog/how-a-business-bay-address-can-help-you-attract-high-value-clients",
    permanent: true,
  },
  {
    source: "/beyond-four-walls-the-modern-entrepreneurs-shortcut-to-a-dubai-trade-license",
    destination: "/blog/beyond-four-walls-the-modern-entrepreneurs-shortcut-to-a-dubai-trade-license",
    permanent: true,
  },
  {
    source: "/beyond-four-walls-the-modern-entrepreneurs-shortcut-to-a-dubai-trade-license/",
    destination: "/blog/beyond-four-walls-the-modern-entrepreneurs-shortcut-to-a-dubai-trade-license",
    permanent: true,
  },
  {
    source: "/conference-room-near-burj-khalifa-dubai-affordable-meeting-rooms-that-impress",
    destination: "/blog/conference-room-near-burj-khalifa-dubai-affordable-meeting-rooms-that-impress",
    permanent: true,
  },
  {
    source: "/conference-room-near-burj-khalifa-dubai-affordable-meeting-rooms-that-impress/",
    destination: "/blog/conference-room-near-burj-khalifa-dubai-affordable-meeting-rooms-that-impress",
    permanent: true,
  },
  {
    source: "/what-to-look-for-in-a-conference-room-rental-in-dubai-7-must-have-features",
    destination: "/blog/what-to-look-for-in-a-conference-room-rental-in-dubai-7-must-have-features",
    permanent: true,
  },
  {
    source: "/what-to-look-for-in-a-conference-room-rental-in-dubai-7-must-have-features/",
    destination: "/blog/what-to-look-for-in-a-conference-room-rental-in-dubai-7-must-have-features",
    permanent: true,
  },
  {
    source: "/is-dubai-the-best-location-for-shared-office-space-in-the-middle-east",
    destination: "/blog/is-dubai-the-best-location-for-shared-office-space-in-the-middle-east",
    permanent: true,
  },
  {
    source: "/is-dubai-the-best-location-for-shared-office-space-in-the-middle-east/",
    destination: "/blog/is-dubai-the-best-location-for-shared-office-space-in-the-middle-east",
    permanent: true,
  },
  {
    source: "/looking-for-a-meeting-room-rental-in-dubai-heres-what-you-need-to-know",
    destination: "/blog/looking-for-a-meeting-room-rental-in-dubai-heres-what-you-need-to-know",
    permanent: true,
  },
  {
    source: "/looking-for-a-meeting-room-rental-in-dubai-heres-what-you-need-to-know/",
    destination: "/blog/looking-for-a-meeting-room-rental-in-dubai-heres-what-you-need-to-know",
    permanent: true,
  },
  {
    source: "/looking-to-rent-an-office-in-business-bay-heres-what-you-should-know",
    destination: "/blog/looking-to-rent-an-office-in-business-bay-heres-what-you-should-know",
    permanent: true,
  },
  {
    source: "/looking-to-rent-an-office-in-business-bay-heres-what-you-should-know/",
    destination: "/blog/looking-to-rent-an-office-in-business-bay-heres-what-you-should-know",
    permanent: true,
  },
  {
    source: "/how-to-get-ejari-online-in-dubai-easy-process-explained",
    destination: "/blog/how-to-get-ejari-online-in-dubai-easy-process-explained",
    permanent: true,
  },
  {
    source: "/how-to-get-ejari-online-in-dubai-easy-process-explained/",
    destination: "/blog/how-to-get-ejari-online-in-dubai-easy-process-explained",
    permanent: true,
  },
  {
    source: "/the-future-of-business-setup-in-dubai-trends-to-watch-in-2025",
    destination: "/blog/the-future-of-business-setup-in-dubai-trends-to-watch-in-2025",
    permanent: true,
  },
  {
    source: "/the-future-of-business-setup-in-dubai-trends-to-watch-in-2025/",
    destination: "/blog/the-future-of-business-setup-in-dubai-trends-to-watch-in-2025",
    permanent: true,
  },
  {
    source: "/top-benefits-of-choosing-business-centers-in-business-bay-for-your-startup",
    destination: "/blog/top-benefits-of-choosing-business-centers-in-business-bay-for-your-startup",
    permanent: true,
  },
  {
    source: "/top-benefits-of-choosing-business-centers-in-business-bay-for-your-startup/",
    destination: "/blog/top-benefits-of-choosing-business-centers-in-business-bay-for-your-startup",
    permanent: true,
  },
  {
    source: "/rental-of-meeting-rooms-for-remote-teams-a-growing-trend",
    destination: "/blog/rental-of-meeting-rooms-for-remote-teams-a-growing-trend",
    permanent: true,
  },
  {
    source: "/rental-of-meeting-rooms-for-remote-teams-a-growing-trend/",
    destination: "/blog/rental-of-meeting-rooms-for-remote-teams-a-growing-trend",
    permanent: true,
  },
  {
    source: "/how-to-start-your-business-in-dubai-easy-steps-and-expert-help",
    destination: "/blog/how-to-start-your-business-in-dubai-easy-steps-and-expert-help",
    permanent: true,
  },
  {
    source: "/how-to-start-your-business-in-dubai-easy-steps-and-expert-help/",
    destination: "/blog/how-to-start-your-business-in-dubai-easy-steps-and-expert-help",
    permanent: true,
  },
  {
    source: "/coworking-space-in-dubai-the-future-of-flexible-office-solutions-at-prime-regal-towers",
    destination: "/blog/coworking-space-in-dubai-the-future-of-flexible-office-solutions-at-prime-regal-towers",
    permanent: true,
  },
  {
    source: "/coworking-space-in-dubai-the-future-of-flexible-office-solutions-at-prime-regal-towers/",
    destination: "/blog/coworking-space-in-dubai-the-future-of-flexible-office-solutions-at-prime-regal-towers",
    permanent: true,
  },
  {
    source: "/a-practical-guide-to-business-setup-costs-in-dubai-for-new-entrepreneurs",
    destination: "/blog/a-practical-guide-to-business-setup-costs-in-dubai-for-new-entrepreneurs",
    permanent: true,
  },
  {
    source: "/a-practical-guide-to-business-setup-costs-in-dubai-for-new-entrepreneurs/",
    destination: "/blog/a-practical-guide-to-business-setup-costs-in-dubai-for-new-entrepreneurs",
    permanent: true,
  },
  {
    source: "/what-documents-are-required-for-ejari-everything-you-need-to-know-about-ejari-renewal",
    destination: "/blog/what-documents-are-required-for-ejari-everything-you-need-to-know-about-ejari-renewal",
    permanent: true,
  },
  {
    source: "/what-documents-are-required-for-ejari-everything-you-need-to-know-about-ejari-renewal/",
    destination: "/blog/what-documents-are-required-for-ejari-everything-you-need-to-know-about-ejari-renewal",
    permanent: true,
  },
  {
    source: "/what-to-consider-before-choosing-an-office-for-rent-in-business-bay",
    destination: "/blog/what-to-consider-before-choosing-an-office-for-rent-in-business-bay",
    permanent: true,
  },
  {
    source: "/what-to-consider-before-choosing-an-office-for-rent-in-business-bay/",
    destination: "/blog/what-to-consider-before-choosing-an-office-for-rent-in-business-bay",
    permanent: true,
  },
  {
    source: "/avoid-these-common-mistakes-when-setting-up-a-new-company-in-dubai",
    destination: "/blog/avoid-these-common-mistakes-when-setting-up-a-new-company-in-dubai",
    permanent: true,
  },
  {
    source: "/avoid-these-common-mistakes-when-setting-up-a-new-company-in-dubai/",
    destination: "/blog/avoid-these-common-mistakes-when-setting-up-a-new-company-in-dubai",
    permanent: true,
  },
  {
    source: "/how-to-choose-and-book-the-right-meeting-or-conference-room-in-dubai",
    destination: "/blog/how-to-choose-and-book-the-right-meeting-or-conference-room-in-dubai",
    permanent: true,
  },
  {
    source: "/how-to-choose-and-book-the-right-meeting-or-conference-room-in-dubai/",
    destination: "/blog/how-to-choose-and-book-the-right-meeting-or-conference-room-in-dubai",
    permanent: true,
  },
  {
    source: "/why-business-bay-is-the-best-location-for-coworking-spaces-in-dubai",
    destination: "/blog/why-business-bay-is-the-best-location-for-coworking-spaces-in-dubai",
    permanent: true,
  },
  {
    source: "/why-business-bay-is-the-best-location-for-coworking-spaces-in-dubai/",
    destination: "/blog/why-business-bay-is-the-best-location-for-coworking-spaces-in-dubai",
    permanent: true,
  },
];

const nextConfig: NextConfig = {
  async redirects() {
    return wordpressRedirects;
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'source.unsplash.com',
        pathname: '/**',
      },
    ],
  },
  // Force tailwindcss to resolve from project node_modules (fixes resolve from wrong cwd e.g. Desktop)
  webpack: (config) => {
    config.resolve ??= {};
    config.resolve.alias ??= {};
    config.resolve.alias["tailwindcss"] = tailwindcssPath;
    return config;
  },
  turbopack: {
    resolveAlias: {
      tailwindcss: tailwindcssPath,
    },
  },
};

export default nextConfig;
