import type { Metadata, Viewport } from "next";
import "../styles/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { OrganizationSchema, WebSiteSchema } from "@/components/StructuredData";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0A0E27",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://torkk.in"),
  title: {
    default: "Torkk | Smart, Fair & Safer Everyday Mobility India",
    template: "%s | Torkk Mobility",
  },
  description:
    "Torkk is India's next-generation urban mobility ecosystem by BlackOriginX, built for fair, safe, and sustainable daily transit across cities.",
  keywords: [
    "Torkk",
    "Torkk mobility",
    "Torkk India",
    "Torkk Delhi NCR",
    "Torkk mobility company",
    "Torkk transportation",
    "Torkk BlackOriginX",
    "zero commission cab",
    "safe urban transit",
    "verified drivers ride hailing",
  ],
  authors: [{ name: "BlackOriginX Private Limited" }],
  creator: "BlackOriginX Private Limited",
  publisher: "BlackOriginX Private Limited",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://torkk.in",
    siteName: "Torkk Mobility",
    title: "Torkk | Smart, Fair & Safer Everyday Mobility India",
    description:
      "Torkk is India's next-generation urban mobility ecosystem by BlackOriginX, built for fair, safe, and sustainable daily transit across cities.",
    images: [
      {
        url: "/images/DISPLAY.png",
        width: 1200,
        height: 630,
        alt: "Torkk - The Future of Mobility is Fair & Safe",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@torkkofficial",
    creator: "@torkkofficial",
    title: "Torkk | Smart, Fair & Safer Everyday Mobility India",
    description:
      "Torkk is India's next-generation urban mobility ecosystem by BlackOriginX, built for fair, safe, and sustainable daily transit across cities.",
    images: ["/images/DISPLAY.png"],
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
    icon: "/images/Frame 6.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased bg-[#F8FAFC] text-slate-900 min-h-screen flex flex-col font-sans">
        <OrganizationSchema />
        <WebSiteSchema />
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
