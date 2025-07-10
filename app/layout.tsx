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
};

export const metadata: Metadata = {
  title:
    "Elektricist në Tiranë - Instalime, Riparime & Smart Home | Alex Elektrik",
  description:
    "Elektricist profesionist në Tiranë për instalime elektrike, riparime emergjente, sisteme smart home, karikues EV dhe panele diellore. Kontakto tani!",
  keywords:
    "elektricist ne tirane, punime elektrike, instalime elektrike ne shtepi, instalime elektrike, riparime elektrike, elektricist ne shtëpi",
  authors: [
    {
      name: "Alex Elektrik",
      url: "https://www.alex-electric.com",
    },
  ],
  robots: "index, follow",
  openGraph: {
    title:
      "Elektricist në Tiranë – Instalime, Riparime & Smart Home | Alex Elektrik",
    description:
      "Elektricist profesionist në Tiranë për instalime elektrike, riparime emergjente, sisteme smart home, karikues EV dhe panele diellore. Kontakto tani!",
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
    // creator: "@alex_electric",
    images: ["/logo.png"],
  },

  alternates: {
    canonical: "https://www.alex-electric.com",
  },
  verification: {
    google: "x1JQVuYMIxvh0xQT2X1dw0E6bxcy2k-ajjAHaogtbvk",
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
          <Footer />
        </div>
      </body>
    </html>
  );
}
