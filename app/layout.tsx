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
    "Elektriçist në Tiranë – Instalime & Riparime Elektrike | Alex Elektrik",
  description:
    "Elektriçist profesionist me mbi 15 vite përvojë në instalime, riparime dhe mirëmbajtje elektrike. Ofrojmë shërbime për shtëpi, biznese, panele diellore dhe karikues EV.",
  keywords:
    "elektricist tirane, punime elektrike, elektricist astir, instalime elektrike, riparime elektrike, elektricist shtëpie",
  authors: [
    {
      name: "Alex Elektrik",
      url: "https://www.alex-electric.com",
    },
  ],
  robots: "index, follow",
  openGraph: {
    title:
      "Elektriçist në Tiranë – Instalime & Riparime Elektrike | Alex Elektrik",
    description:
      "Shërbime elektrike profesionale për shtëpi, lokale, zyra dhe biznese.",
    type: "website",
    locale: "sq_AL",
    url: "https://www.alex-electric.com",
    siteName: "Alex Elektrik",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Alex Elektrik – Elektriçist në Tiranë",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Alex Elektrik | Elektriçist në Tiranë",
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
