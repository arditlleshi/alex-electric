import { buildGuideMetadata, renderGuidePage } from "@/lib/guide-page";

const GUIDE_SLUG = "electrical-safety-checklist-for-airbnb-hosts-in-tirana";

export function generateMetadata() {
  return buildGuideMetadata(GUIDE_SLUG);
}

export default function AirbnbSafetyChecklistGuidePage() {
  return renderGuidePage(GUIDE_SLUG, "en-US");
}
