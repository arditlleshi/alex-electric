import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "./(components)/Navigation";
import Footer from "./(components)/Footer";
import { Analytics } from "@vercel/analytics/next";
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
  title:
    "Elektricist në Tiranë - Instalime, Riparime & Smart Home | Alex Elektrik",
  description:
    "Ofrojmë instalime elektrike, riparime emergjente, smart home, karikues EV dhe panele diellore në Tiranë dhe Durrës. English-speaking electrician services available.",
  metadataBase: new URL(SITE_URL),
  keywords: [
    "elektricist ne tirane",
    "elektricist tirane",
    "punime elektrike",
    "instalime elektrike ne shtepi",
    "riparime elektrike",
    "smart home tirane",
    "karikues ev tirane",
    "panele diellore tirane",
    "electrician in tirana",
    "emergency electrician albania",
    "ev charger installation albania",
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
  openGraph: {
    title:
      "Elektricist në Tiranë – Instalime, Riparime & Smart Home | Alex Elektrik",
    description:
      "Ofrojmë shërbime të ndryshme si instalime elektrike, riparime emergjente, sisteme smart home, karikues EV dhe panele diellore. Kontakto tani!",
    type: "website",
    locale: "sq_AL",
    alternateLocale: "en_US",
    url: SITE_URL,
    siteName: "Alex Elektrik",
    images: [
      {
        url: `${SITE_URL}/opengraph-image`,
        width: 1200,
        height: 630,
        alt: "Alex Elektrik - Elektricist në Tiranë",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Alex Elektrik | Elektricist në Tiranë",
    description:
      "Shërbime elektrike profesionale për shtëpi, lokale, zyra dhe biznese.",
    images: [`${SITE_URL}/twitter-image`],
  },
  alternates: {
    canonical: SITE_URL,
    languages: {
      "sq-AL": SITE_URL,
      "en-US": `${SITE_URL}/en`,
      "x-default": SITE_URL,
    },
  },
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sq" className="scroll-smooth">
      <body
        className={`${inter.variable} font-sans antialiased`}
        suppressHydrationWarning={true}>
        <div className="min-h-screen bg-white">
          <Navigation />
          {children}
          <Analytics />
          <Footer />
        </div>
      </body>
    </html>
  );
}
