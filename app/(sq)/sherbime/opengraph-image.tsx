import { createSeoImage, seoImageContentType, seoImageSize } from "@/lib/og";

export const alt = "Sherbime elektrike ne Tirane dhe Durres";
export const size = seoImageSize;
export const contentType = seoImageContentType;

export default function Image() {
  return createSeoImage({
    eyebrow: "Qendra e sherbimeve",
    title: "Sherbime elektrike ne Tirane dhe Durres",
    subtitle:
      "Faqe per urgjenca, riparime, instalime, EV, solar dhe sherbime per biznese.",
  });
}
