import { buildGuideMetadata, renderGuidePage } from "@/lib/guide-page";

const GUIDE_SLUG =
  "what-to-check-before-buying-an-apartment-in-tirana-electrical-system-edition";

export function generateMetadata() {
  return buildGuideMetadata(GUIDE_SLUG);
}

export default function ApartmentBuyingElectricalGuidePage() {
  return renderGuidePage(GUIDE_SLUG, "en-US");
}
