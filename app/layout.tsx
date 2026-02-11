import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Bricolage_Grotesque, Lexend } from "next/font/google";

export async function generateMetadata(): Promise<Metadata> {
  return {
    metadataBase: new URL("https://radifylighting.in"),
    title: "Radify Lighting Solutions | Premium Architectural & Smart Lighting",
    description:
      "Radify Lighting provides premium architectural, decorative and smart lighting solutions for modern homes and commercial spaces.",
    icons: {
      icon: "/favicon.ico",
    },
    openGraph: {
      title: "Radify Lighting Solutions",
      description:
        "Radify Lighting provides premium architectural, decorative and smart lighting solutions for modern homes and commercial spaces.",
      url: "https://radifylighting.in",
      images: [
        {
          url: "https://radifylighting.in/og_image.png", // ✅ FULL URL
          width: 1200,
          height: 630,
          alt: "Radify Lighting Solutions OpenGraph Image",
        },
      ],
      siteName: "Radify Lighting Solutions",
    },
    twitter: {
      card: "summary_large_image",
      title: "Radify Lighting Solutions",
      description:
        "Radify Lighting provides premium architectural, decorative and smart lighting solutions for modern homes and commercial spaces.",
      images: ["https://radifylighting.in/og_image.png"], // ✅ FULL URL
    },
  };
}

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
});

const lexend = Lexend({
  variable: "--font-lexend",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${bricolage.variable} ${lexend.variable} lexend text-foreground bg-background bricolage`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
