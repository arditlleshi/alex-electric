import { createSeoImage, seoImageContentType, seoImageSize } from "@/lib/og";

export const alt = "English electrical service pages for Tirana";
export const size = seoImageSize;
export const contentType = seoImageContentType;

export default function Image() {
  return createSeoImage({
    eyebrow: "Service hub",
    title: "English electrical service pages for Tirana",
    subtitle:
      "Choose the right page for emergencies, rentals, expat support, EV, solar, and business properties.",
    locale: "en",
  });
}
