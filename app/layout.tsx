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
  title: "Alex Electric - Professional Electrician Services | Residential, Commercial & Industrial",
  description: "Professional electrician Alex offers expert electrical services with 15+ years experience. Residential, commercial, industrial wiring, EV chargers, solar panels, emergency repairs. Licensed & insured.",
  keywords: "electrician, electrical services, residential electrical, commercial electrical, industrial electrical, EV charger installation, solar panels, emergency electrical repair, licensed electrician",
  authors: [{ name: "Alex Electric" }],
  robots: "index, follow",
  openGraph: {
    title: "Alex Electric - Professional Electrician Services",
    description: "Expert electrical services for homes, businesses & industry. 15+ years experience, licensed & insured. EV chargers, solar panels, emergency repairs.",
    type: "website",
    locale: "en_US",
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
