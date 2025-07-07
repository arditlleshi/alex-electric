import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-inter',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Alex Electric – Shërbime Profesionale Elektrike | Rezidenciale, Komerciale & Industriale",
  description: "Elektriçisti profesionist qe ofron shërbime elektrike me përvojë mbi 15 vjet. Instalime elekrike për shtëpi, dyqane, lokale zyra etj, karikues për makina elektrike, panele diellore dhe riparime urgjente.",
  keywords: "elektriçist, shërbime elektrike, instalime elektrike, karikues për makina elektrike, panele diellore, riparime urgjente, elektriçist i autorizuar",
  authors: [{ name: "Alex Electric" }],
  robots: "index, follow",
  openGraph: {
    title: "Alex Electric – Shërbime Profesionale Elektrike | Rezidenciale, Komerciale & Industriale",
    description: "Elektriçisti profesionist qe ofron shërbime elektrike me përvojë mbi 15 vjet. Instalime elekrike per shtepi, dyqane, lokalem zyra etj, karikues për makina elektrike, panele diellore dhe riparime urgjente.",
    type: "website",
    locale: "sq_AL",
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
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`} suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  );
}
