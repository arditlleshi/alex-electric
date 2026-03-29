import { createSeoImage, seoImageContentType, seoImageSize } from "@/lib/og";
import { getAlbanianServicePage } from "@/lib/content/albanian-services";

export const alt = "Sherbim elektrik - Alex Elektrik";
export const size = seoImageSize;
export const contentType = seoImageContentType;

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getAlbanianServicePage(slug);

  return createSeoImage({
    eyebrow: "Sherbim elektrik",
    title: service?.title ?? "Sherbim elektrik ne Tirane",
    subtitle:
      service?.metaDescription ??
      "Riparime, instalime, diagnostikim dhe zgjidhje elektrike ne Tirane dhe Durres.",
  });
}
