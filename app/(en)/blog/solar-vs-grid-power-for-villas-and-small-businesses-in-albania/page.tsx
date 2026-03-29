import { buildGuideMetadata, renderGuidePage } from "@/lib/guide-page";

const GUIDE_SLUG = "solar-vs-grid-power-for-villas-and-small-businesses-in-albania";

export function generateMetadata() {
  return buildGuideMetadata(GUIDE_SLUG);
}

export default function SolarVsGridGuidePage() {
  return renderGuidePage(GUIDE_SLUG, "en-US");
}
