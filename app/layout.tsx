import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "./(components)/Navigation";
import Footer from "./(components)/Footer";

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
    "Ofrojmë shërbime të ndryshme si instalime elektrike, riparime emergjente, sisteme smart home, karikues EV dhe panele diellore. Kontakto tani!",
  keywords:
    "elektricist ne tirane, elektricist tirane, punime elektrike, instalime elektrike ne shtepi, instalime elektrike, riparime elektrike, elektricist ne shtepi, smart home tirane, panele diellore tirane",
  authors: [
    {
      name: "Alex Elektrik",
      url: "https://www.alex-electric.com",
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
    url: "https://www.alex-electric.com",
    siteName: "Alex Elektrik",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Alex Elektrik – Elektricist në Tiranë",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Alex Elektrik | Elektricist në Tiranë",
    description:
      "Shërbime elektrike profesionale për shtëpi, lokale, zyra dhe biznese.",
    images: ["/logo.png"],
  },
  alternates: {
    canonical: "https://www.alex-electric.com",
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

import { faqData } from "./(components)/FAQSection";

const localBusinessSchema = {
  "@type": "LocalBusiness",
  name: "Alex Elektrik",
  image: "https://www.alex-electric.com/logo.png",
  "@id": "https://www.alex-electric.com",
  url: "https://www.alex-electric.com",
  telephone: "+355693289443",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Tiranë",
    addressLocality: "Tiranë",
    postalCode: "1001",
    addressCountry: "AL",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 41.3275,
    longitude: 19.8187,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    opens: "00:00",
    closes: "23:59",
  },
  sameAs: [
    "https://www.facebook.com/alexelectric",
    "https://www.instagram.com/alexelectric",
  ],
  priceRange: "$$",
};

const faqSchema = {
  "@type": "FAQPage",
  mainEntity: faqData.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer.replace(/<[^>]+>/g, ""),
    },
  })),
};

const breadcrumbSchema = {
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Kreu",
      item: "https://www.alex-electric.com",
    },
  ],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [localBusinessSchema, faqSchema, breadcrumbSchema],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <div className="min-h-screen bg-white">
          <Navigation />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
