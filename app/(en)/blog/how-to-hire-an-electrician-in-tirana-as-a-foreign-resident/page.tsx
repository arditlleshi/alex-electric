import { buildGuideMetadata, renderGuidePage } from "@/lib/guide-page";

const GUIDE_SLUG = "how-to-hire-an-electrician-in-tirana-as-a-foreign-resident";

export function generateMetadata() {
  return buildGuideMetadata(GUIDE_SLUG);
}

export default function HowToHireElectricianGuidePage() {
  return renderGuidePage(GUIDE_SLUG, "en-US");
}
