import {
  albanianServicePageMap,
  albanianServicePages,
  type AlbanianServicePageEntry,
  type AlbanianServiceSlug,
} from "./albanian-services";
import {
  englishServicePageMap,
  englishServicePages,
  type EnglishServicePageEntry,
  type EnglishServiceSlug,
} from "./english-services";

export type SiteServicePage = AlbanianServicePageEntry | EnglishServicePageEntry;
export type SiteServiceSlug = AlbanianServiceSlug | EnglishServiceSlug;

export const allServicePages = [
  ...albanianServicePages,
  ...englishServicePages,
] as const satisfies readonly SiteServicePage[];

export function getServicePage(slug: string): SiteServicePage | undefined {
  return (
    albanianServicePageMap[slug as AlbanianServiceSlug] ??
    englishServicePageMap[slug as EnglishServiceSlug]
  );
}
