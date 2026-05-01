import type { Metadata } from "next";
import {
  buildGuideMetadata,
  renderGuidePage,
} from "@/lib/guide-page";
import { guidePageSlugs } from "@/lib/content/guides";

export function generateStaticParams() {
  return guidePageSlugs.map((slug) => ({ slug }));
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
  return renderGuidePage(slug);
}
