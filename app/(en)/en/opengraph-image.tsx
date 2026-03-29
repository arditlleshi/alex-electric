import { createSeoImage, seoImageContentType, seoImageSize } from "@/lib/og";

export const alt = "English electrical services for Tirana and Durres";
export const size = seoImageSize;
export const contentType = seoImageContentType;

export default function Image() {
  return createSeoImage({
    eyebrow: "English services",
    title: "English electrical services for Tirana and Durres",
    subtitle:
      "Electrical help for expats, rentals, emergencies, EV chargers, solar, and property support.",
    locale: "en",
  });
}
