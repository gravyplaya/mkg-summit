import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import "../globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Innovators Summit 2026 | Muskegon, Michigan",
  description: "Join us for an inspiring afternoon of keynotes, networking, and hands-on workshops with Michigan's brightest innovators and entrepreneurs. April 21st, 2026 at Muskegon Convention Center.",
  keywords: ["Innovators Summit", "Muskegon", "Michigan", "Innovation", "Entrepreneurship", "Conference", "2026"],
  authors: [{ name: "Muskegon Innovation Hub" }],
  openGraph: {
    title: "Innovators Summit 2026 | Muskegon, Michigan",
    description: "Where Innovation Meets Opportunity. Join us for an inspiring afternoon of keynotes, networking, and hands-on workshops.",
    type: "website",
    locale: "en_US",
  },
  icons: {
    icon: "/images/favicon.ico",
  },
};

export default function MarketingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#001133] text-white`}
      >
        <Navigation />
        <main className="min-h-screen pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
