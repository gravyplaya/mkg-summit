import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
export const revalidate = 0;
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import "../globals.css";
import { getEventSettings } from "@/lib/api";
import type { EventSettings } from "@/payload-types";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateMetadata(): Promise<Metadata> {
  const settings = (await getEventSettings()) as unknown as EventSettings;
  const eventName = settings?.eventName || "Innovators Summit 2026";
  const venueName =
    settings?.venue?.name || "VanDyk Mortgage Muskegon Convention Center";
  const eventDate = settings?.eventDate
    ? new Date(settings.eventDate).toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      })
    : "April 21, 2026";

  const baseUrl =
    process.env.NEXT_PUBLIC_SERVER_URL ||
    "https://muskegoninnovatorssummit.com";

  return {
    metadataBase: new URL(baseUrl),
    title: `${eventName} | Muskegon, Michigan`,
    description: `Join us for an inspiring afternoon of keynotes, networking, and hands-on workshops with Michigan's brightest innovators and entrepreneurs. ${eventDate} at ${venueName}.`,
    keywords: [
      "Innovators Summit",
      "Muskegon",
      "Michigan",
      "Innovation",
      "Entrepreneurship",
      "Conference",
      "2026",
    ],
    authors: [{ name: "Muskegon Innovation Hub" }],
    openGraph: {
      title: `${eventName} | Muskegon, Michigan`,
      description:
        "Where Innovation Meets Opportunity. Join us for an inspiring afternoon of keynotes, networking, and hands-on workshops.",
      type: "website",
      locale: "en_US",
      images: [
        {
          url: "/images/og-image.png",
          width: 1200,
          height: 630,
          alt: `${eventName} Preview`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${eventName} | Muskegon, Michigan`,
      description:
        "Where Innovation Meets Opportunity. Join us for an inspiring afternoon of keynotes, networking, and hands-on workshops.",
      images: ["/images/og-image.png"],
    },
    icons: {
      icon: "/images/favicon.ico",
    },
  };
}

export default async function MarketingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const settings = (await getEventSettings()) as unknown as EventSettings;

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#001133] text-white`}
      >
        <Navigation title={settings?.eventName} />
        <main className="min-h-screen pt-16">{children}</main>
        <Footer settings={settings} />
      </body>
    </html>
  );
}
