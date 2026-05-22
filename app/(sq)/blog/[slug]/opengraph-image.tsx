import { createSeoImage, seoImageContentType, seoImageSize } from "@/lib/og";
import { getGuidePage } from "@/lib/content/guides";

export const alt = "Alex Elektrik guide preview";
export const size = seoImageSize;
export const contentType = seoImageContentType;

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const guide = getGuidePage(slug);

  return createSeoImage({
    eyebrow: guide?.locale === "en-US" ? "English guide" : "Udhëzues praktik",
    title: guide?.title ?? "Guide elektrik",
    subtitle:
      guide?.description ??
      "Keshilla praktike për shërbime elektrike në Tiranë dhe Durrës.",
    locale: guide?.locale === "en-US" ? "en" : "sq",
  });
}
