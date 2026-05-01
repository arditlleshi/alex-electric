import type { Metadata } from "next";
import { SITE_URL } from "@/lib/site";

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
  return children;
}
