import type { Metadata } from "next";
import "./globals.css";

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
