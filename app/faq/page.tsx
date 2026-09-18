import type { Metadata } from "next";
import FAQSection from "@/components/FAQSection";

export const metadata: Metadata = {
  title: "FAQs | Answers About Torkk Mobility Platform",
  description:
    "Get clear answers to common questions about Torkk: zero-commission rides, safety protocols, driver verification, emergency SOS, and Delhi NCR operations.",
  alternates: {
    canonical: "/faq",
  },
};

export default function FAQPage() {
  return (
    <div className="pt-28 bg-white">
      <FAQSection />
    </div>
  );
}
