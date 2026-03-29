import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "../globals.css";
import { SITE_URL } from "@/lib/site";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#2563eb",
};

export const metadata: Metadata = {
  title: "Alex Electric",
  description:
    "English electrical services in Tirana and Durres for emergencies, rentals, expat support, EV chargers, solar projects, and property maintenance.",
  metadataBase: new URL(SITE_URL),
  keywords: [
    "electrician in tirana",
    "english speaking electrician tirana",
    "electrician durres",
    "emergency electrician tirana",
    "ev charger installation tirana",
    "solar panel installation tirana",
  ],
  authors: [
    {
      name: "Alex Elektrik",
      url: SITE_URL,
    },
  ],
  category: "Home Services",
  robots: "index, follow",
  verification: {
    google: "x1JQVuYMIxvh0xQT2X1dw0E6bxcy2k-ajjAHaogtbvk",
  },
};

export default function EnglishRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} font-sans antialiased`}
        suppressHydrationWarning>
        <div className="min-h-screen bg-white">
          {children}
          <Analytics />
        </div>
      </body>
    </html>
  );
}
