import { createSeoImage, seoImageContentType, seoImageSize } from "@/lib/og";

export const alt = "English electrical service pages for Tirana and Durres";
export const size = seoImageSize;
export const contentType = seoImageContentType;

export default function Image() {
  return createSeoImage({
    eyebrow: "Service hub",
    title: "English electrical service pages for Tirana and Durres",
    subtitle:
      "Choose the right page for emergencies, rentals, expat support, EV, solar, and business properties.",
    locale: "en",
  });
}
