import { createSeoImage, seoImageContentType, seoImageSize } from "@/lib/og";

export const alt = "Sherbime elektrike ne Tirane dhe Durres";
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
