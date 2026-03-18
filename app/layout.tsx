import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
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
    "Alex Elektrik ofron sherbime elektrike ne Tirane dhe Durres per banesa, vila, biznese, emergjenca, EV, solar dhe kliente nderkombetare.",
  metadataBase: new URL(SITE_URL),
  keywords: [
    "sherbime elektrike tirane",
    "sherbime elektrike durres",
    "instalime elektrike",
    "riparime elektrike tirane",
    "smart home tirane",
    "karikues ev tirane",
    "panele diellore tirane",
    "electrician in tirana",
    "electrician durres",
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
    title: "Alex Elektrik | Sherbime elektrike ne Tirane dhe Durres",
    description:
      "Sherbime elektrike per banesa, vila dhe biznese ne Tirane dhe Durres, plus faqe ne anglisht per expats dhe prona me qira.",
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
        alt: "Alex Elektrik - sherbime elektrike ne Tirane dhe Durres",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Alex Elektrik | Sherbime elektrike ne Tirane dhe Durres",
    description:
      "Sherbime elektrike profesionale per banesa, vila, zyra dhe biznese.",
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
        suppressHydrationWarning>
        <div className="min-h-screen bg-white">
          {children}
          <Analytics />
        </div>
      </body>
    </html>
  );
}
