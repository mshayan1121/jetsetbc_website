import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Best Co-Working Space in Dubai - Jetset Business Center",
    description: "Find the best co-working space in Dubai at Jetset Business Center. Shared office space in Business Bay with flexible memberships and world-class amenities.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return children;
}
