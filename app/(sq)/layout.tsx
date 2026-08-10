import type { Metadata } from "next";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Alex Elektrik",
  description:
    "Shërbime elektrike në Tiranë për urgjenca, riparime, instalime, EV, solar dhe suport në anglisht.",
  metadataBase: new URL(SITE_URL),
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
  return children;
}
