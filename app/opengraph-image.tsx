import { createSeoImage, seoImageContentType, seoImageSize } from "@/lib/og";

export const alt = "Alex Elektrik - shërbime elektrike në Tiranë dhe Durrës";
export const size = seoImageSize;
export const contentType = seoImageContentType;

export default function Image() {
  return createSeoImage({
    eyebrow: "Shërbime elektrike",
    title: "Elektricist në Tiranë dhe Durrës",
    subtitle:
      "Emergjenca, riparime, instalime, EV, solar dhe support dhe në anglisht.",
  });
}
