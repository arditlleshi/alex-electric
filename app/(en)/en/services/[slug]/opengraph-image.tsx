import { createSeoImage, seoImageContentType, seoImageSize } from "@/lib/og";
import { getEnglishServicePage } from "@/lib/content/english-services";

export const alt = "English service page preview";
export const size = seoImageSize;
export const contentType = seoImageContentType;

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getEnglishServicePage(slug);

  return createSeoImage({
    eyebrow: "English service",
    title: service?.title ?? "Electrical service in Tirana",
    subtitle:
      service?.metaDescription ??
      "Fast electrical support for Tirana, Durres, and nearby properties.",
    locale: "en",
  });
}
