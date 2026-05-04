import { createSeoImage, seoImageContentType, seoImageSize } from "@/lib/og";

export const alt = "Keshilla elektrike dhe udhezues praktik";
export const size = seoImageSize;
export const contentType = seoImageContentType;

export default function Image() {
  return createSeoImage({
    eyebrow: "Keshilla elektrike",
    title: "Udhezues praktik per urgjenca, instalime, EV dhe solar",
    subtitle:
      "Keshilla te dobishme qe lidhen me sherbimet elektrike ne Tirane dhe Durres.",
  });
}
