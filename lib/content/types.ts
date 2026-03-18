export type PageLocale = "sq-AL" | "en-US";

export type FAQItem = {
  question: string;
  answer: string;
};

export type ProofItem = {
  id: string;
  eyebrow: string;
  title: string;
  city: string;
  propertyType: string;
  summary: string;
  bullets: string[];
  outcome: string;
};

export type ServicePage = {
  slug: string;
  locale: PageLocale;
  title: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  hero: string;
  summary: string;
  primaryKeyword: string;
  secondaryKeywords: readonly string[];
  serviceAreas: readonly string[];
  whenToCall: readonly string[];
  problems: readonly string[];
  processSteps: readonly string[];
  proof: {
    title: string;
    city: string;
    propertyType: string;
    problem: string;
    fix: string;
    turnaround: string;
    outcome: string;
    evidenceHint?: string;
  };
  faqs: readonly FAQItem[];
  relatedServiceSlugs: readonly string[];
  relatedGuideSlugs: readonly string[];
  callToAction: string;
  alternateSlug?: string;
};

export type GuideSection = {
  title: string;
  paragraphs: string[];
  bullets?: string[];
};

export type GuidePage = {
  slug: string;
  locale: PageLocale;
  title: string;
  metaTitle: string;
  metaDescription: string;
  excerpt: string;
  eyebrow: string;
  date: string;
  primaryKeyword: string;
  secondaryKeywords: readonly string[];
  audience?: string;
  city?: string;
  sections: readonly GuideSection[];
  faqs: readonly FAQItem[];
  primaryServiceSlug: string;
  secondaryServiceSlug: string;
  proofId: string;
  featured?: boolean;
};
