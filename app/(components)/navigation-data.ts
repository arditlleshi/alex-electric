export type ActiveSection = "home" | "services" | "blog" | "english" | "none";

export type NavigationIcon = "home" | "services" | "blog" | "english" | "contact";

export type NavigationItem = {
  name: string;
  href: string;
  icon: NavigationIcon;
  section: ActiveSection;
};

export const navigationItems: readonly NavigationItem[] = [
  { name: "Kreu", href: "/", icon: "home", section: "home" },
  {
    name: "Sherbime",
    href: "/sherbime",
    icon: "services",
    section: "services",
  },
  { name: "Blog", href: "/blog", icon: "blog", section: "blog" },
  { name: "English", href: "/en", icon: "english", section: "english" },
  { name: "Kontakt", href: "/#contact", icon: "contact", section: "none" },
] as const;

export function isActiveSection(
  activeSection: ActiveSection,
  item: NavigationItem,
): boolean {
  return item.section !== "none" && activeSection === item.section;
}
