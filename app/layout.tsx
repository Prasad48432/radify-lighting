import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://radifylighting.in"),
  title: {
    default: "Radify Lighting | Premium Architectural & Smart Lighting",
    template: "%s | Radify Lighting",
  },
  description:
    "Radify Lighting provides premium architectural, decorative and smart lighting solutions for modern homes and commercial spaces.",
  keywords: [
    "architectural lighting",
    "smart lighting",
    "LED lighting solutions",
    "commercial lighting",
    "modern lighting design",
  ],
  openGraph: {
    title: "Radify Lighting",
    description: "Premium architectural & smart lighting solutions.",
    url: "https://radifylighting.in",
    siteName: "Radify Lighting",
    images: [
      {
        url: "/radify_og.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Radify Lighting",
    description: "Premium architectural & smart lighting solutions.",
    images: ["/radify_og.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
