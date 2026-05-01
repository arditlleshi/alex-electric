import Image from "next/image";
import Link from "next/link";
import { FileText, Globe, Home, Phone, Zap } from "lucide-react";
import HomeAnchorLink from "./HomeAnchorLink";
import MobileNavigation from "./MobileNavigation";
import {
  isActiveSection,
  navigationItems,
  type ActiveSection,
  type NavigationIcon,
} from "./navigation-data";
import TrackedContactLink from "./TrackedContactLink";
import { CONTACT_PHONE_DISPLAY, CONTACT_PHONE_HREF } from "@/lib/contact";
import logo from "@/public/main-logo.png";

const iconByName = {
  home: Home,
  services: Zap,
  blog: FileText,
  english: Globe,
  contact: Phone,
} satisfies Record<NavigationIcon, typeof Home>;

function getDesktopLinkClass(active: boolean) {
  return `group relative inline-flex min-h-10 items-center gap-2 rounded-lg px-3 text-sm font-medium transition-[background-color,color,box-shadow] duration-200 lg:px-3.5 ${
    active
      ? "bg-electric-50 text-electric-700 shadow-sm"
      : "text-muted-strong hover:bg-surface-muted hover:text-electric-700"
  }`;
}

export default function Navigation({
  activeSection = "none",
}: {
  activeSection?: ActiveSection;
}) {
  return (
    <nav className="fixed inset-x-0 top-0 z-[9999] border-b border-border/80 bg-background/90 nav-backdrop">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-4">
          <HomeAnchorLink
            href="/#hero"
            aria-label="Alex Elektrik home"
            className="group flex min-w-0 items-center gap-3 rounded-lg py-2 pr-2 transition-colors duration-200 hover:text-electric-700">
            <span className="relative h-10 w-28 shrink-0 sm:w-32">
              <Image
                src={logo}
                alt="Alex Elektrik"
                fill
                priority
                sizes="128px"
                className="object-contain object-left"
              />
            </span>
            <span className="hidden min-w-0 border-l border-border pl-3 text-xs font-medium leading-tight text-muted md:block">
              Tirane & Durres
            </span>
          </HomeAnchorLink>

          <div className="hidden items-center gap-1 md:flex">
            {navigationItems.map((item) => {
              const active = isActiveSection(activeSection, item);
              const Icon = iconByName[item.icon];

              return (
                item.section === "home" ? (
                  <HomeAnchorLink
                    key={item.name}
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={getDesktopLinkClass(active)}>
                    <Icon aria-hidden="true" className="h-4 w-4 shrink-0" />
                    <span>{item.name}</span>
                  </HomeAnchorLink>
                ) : (
                  <Link
                    key={item.name}
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={getDesktopLinkClass(active)}>
                    <Icon aria-hidden="true" className="h-4 w-4 shrink-0" />
                    <span>{item.name}</span>
                  </Link>
                )
              );
            })}
          </div>

          <div className="flex items-center gap-2">
            <TrackedContactLink
              href={CONTACT_PHONE_HREF}
              channel="phone"
              source="navigation"
              className="hidden min-h-10 items-center gap-2 rounded-lg bg-surface-inverse px-3.5 text-sm font-semibold text-white transition-[background-color,box-shadow] duration-200 hover:bg-electric-900 hover:shadow-electric sm:inline-flex">
              <Phone aria-hidden="true" className="h-4 w-4 shrink-0" />
              <span>{CONTACT_PHONE_DISPLAY}</span>
            </TrackedContactLink>

            <MobileNavigation activeSection={activeSection} />
          </div>
        </div>
      </div>
    </nav>
  );
}
