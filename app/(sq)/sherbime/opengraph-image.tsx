import { createSeoImage, seoImageContentType, seoImageSize } from "@/lib/og";

export const alt = "Shërbime elektrike në Tiranë dhe Durrës";
export const size = seoImageSize;
export const contentType = seoImageContentType;

export default function Image() {
  return createSeoImage({
    eyebrow: "Qëndra e shërbimeve",
    title: "Shërbime elektrike në Tiranë dhe Durres",
    subtitle:
      "Faqe për urgjenca, riparime, instalime, EV, solar dhe shërbime për biznese.",
  });
}
