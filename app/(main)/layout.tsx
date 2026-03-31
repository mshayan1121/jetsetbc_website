import Header from "@/components/layout/Header";
import MainContent from "@/components/layout/MainContent";
import Footer from "@/components/layout/Footer";
import JsonLd from "@/components/seo/JsonLd";
import QuickInquiryPopup from "@/components/sections/QuickInquiryPopup";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full overflow-x-hidden">
      <JsonLd />
      <Header />
      <MainContent>{children}</MainContent>
      <Footer />
      <QuickInquiryPopup />
    </div>
  );
}
