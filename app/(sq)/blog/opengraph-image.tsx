import { createSeoImage, seoImageContentType, seoImageSize } from "@/lib/og";

export const alt = "Blog elektrik dhe guides praktike";
export const size = seoImageSize;
export const contentType = seoImageContentType;

export default function Image() {
  return createSeoImage({
    eyebrow: "Blog elektrik",
    title: "Guides praktike per urgjenca, instalime, EV dhe solar",
    subtitle:
      "Artikuj qe lidhen drejtperdrejt me faqet e sherbimit ne Tirane dhe Durres.",
  });
}
