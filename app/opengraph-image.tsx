import { createSeoImage, seoImageContentType, seoImageSize } from "@/lib/og";

export const alt = "Alex Elektrik - sherbime elektrike ne Tirane dhe Durres";
export const size = seoImageSize;
export const contentType = seoImageContentType;

export default function Image() {
  return createSeoImage({
    eyebrow: "Sherbime elektrike",
    title: "Elektricist ne Tirane dhe Durres",
    subtitle:
      "Emergjenca, riparime, instalime, EV, solar dhe mbeshtetje ne shqip e anglisht.",
  });
}
