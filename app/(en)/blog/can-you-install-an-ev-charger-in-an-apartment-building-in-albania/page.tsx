import { buildGuideMetadata, renderGuidePage } from "@/lib/guide-page";

const GUIDE_SLUG =
  "can-you-install-an-ev-charger-in-an-apartment-building-in-albania";

export function generateMetadata() {
  return buildGuideMetadata(GUIDE_SLUG);
}

export default function ApartmentEvGuidePage() {
  return renderGuidePage(GUIDE_SLUG, "en-US");
}
