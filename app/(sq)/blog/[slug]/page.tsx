import type { Metadata } from "next";
import {
  ALBANIAN_GUIDE_SLUGS,
  buildGuideMetadata,
  renderGuidePage,
} from "@/lib/guide-page";

export function generateStaticParams() {
  return ALBANIAN_GUIDE_SLUGS.map((slug) => ({ slug }));
}

export function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  return params.then(({ slug }) => buildGuideMetadata(slug));
}

export default async function GuidePageRoute({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return renderGuidePage(slug, "sq-AL");
}
