import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Private Offices | Jetset Business Center",
    description: "Secure, fully-furnished private office suites in Business Bay, Dubai. Inner and outer offices available with Burj Khalifa views.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return children;
}
