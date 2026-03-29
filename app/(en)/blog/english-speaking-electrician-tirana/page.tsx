import { buildGuideMetadata, renderGuidePage } from "@/lib/guide-page";

const GUIDE_SLUG = "english-speaking-electrician-tirana";

export function generateMetadata() {
  return buildGuideMetadata(GUIDE_SLUG);
}

export default function EnglishSpeakingElectricianTiranaPage() {
  return renderGuidePage(GUIDE_SLUG, "en-US");
}
