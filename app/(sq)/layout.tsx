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
  title: "Alex Elektrik",
  description:
    "Sherbime elektrike ne Tirane dhe Durres per urgjenca, riparime, instalime, EV, solar dhe mbeshtetje ne shqip e anglisht.",
  metadataBase: new URL(SITE_URL),
  keywords: [
    "sherbime elektrike tirane",
    "sherbime elektrike durres",
    "instalime elektrike",
    "riparime elektrike tirane",
    "smart home tirane",
    "karikues ev tirane",
    "panele diellore tirane",
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
  other: {
    "geo.region": "AL-11",
    "geo.placename": "Tirana",
    "geo.position": "41.3275;19.8187",
    ICBM: "41.3275, 19.8187",
  },
};

export default function AlbanianRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sq" className="scroll-smooth">
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
