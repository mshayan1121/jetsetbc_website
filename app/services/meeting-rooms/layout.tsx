import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Meeting Rooms & Boardrooms | Jetset Business Center",
    description: "Book state-of-the-art meeting rooms and boardrooms in Dubai. Equipped with 4K displays, video conferencing tech, and premium catering options.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return children;
}
