"use client";

import Link from "next/link";
import { useState } from "react";
import {
  ChevronRight,
  FileText,
  Globe,
  Home,
  Menu,
  MessageCircle,
  Phone,
  X,
  Zap,
} from "lucide-react";
import {
  isActiveSection,
  navigationItems,
  type ActiveSection,
  type NavigationIcon,
} from "./navigation-data";
import TrackedContactLink from "./TrackedContactLink";
import {
  CONTACT_PHONE_DISPLAY,
  CONTACT_PHONE_HREF,
  CONTACT_WHATSAPP_HREF,
} from "@/lib/contact";

const iconByName = {
  home: Home,
  services: Zap,
  blog: FileText,
  english: Globe,
  contact: Phone,
} satisfies Record<NavigationIcon, typeof Home>;

function getMobileLinkClass(active: boolean) {
  return `flex min-h-12 items-center justify-between rounded-lg px-3 text-base font-medium transition-[background-color,color] duration-200 ${
    active
      ? "bg-electric-50 text-electric-700"
      : "text-muted-strong hover:bg-surface-muted hover:text-electric-700"
  }`;
}

export default function MobileNavigation({
  activeSection,
}: {
  activeSection: ActiveSection;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative md:hidden">
      <button
        type="button"
        aria-expanded={isOpen}
        aria-controls="mobile-navigation"
        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        onClick={() => setIsOpen((prev) => !prev)}
        className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-surface text-foreground shadow-sm transition-[background-color,color,border-color] duration-200 hover:border-border-strong hover:bg-surface-muted hover:text-electric-700">
        {isOpen ? (
          <X aria-hidden="true" className="h-5 w-5" />
        ) : (
          <Menu aria-hidden="true" className="h-5 w-5" />
        )}
      </button>

      <div
        id="mobile-navigation"
        aria-hidden={!isOpen}
        className={`absolute right-0 top-[calc(100%+0.75rem)] z-50 w-[22rem] max-w-[calc(100vw-2rem)] transition-[opacity,transform] duration-200 ease-out motion-reduce:transition-none ${
          isOpen
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-2 opacity-0"
        }`}>
        <div className="overflow-hidden rounded-lg border border-border bg-surface shadow-medium">
          <div className="border-b border-border px-4 py-3">
            <p className="text-xs font-semibold uppercase text-muted">
              Navigim
            </p>
          </div>

          <ul className="p-2" aria-label="mobile navigation">
            {navigationItems.map((item) => {
              const active = isActiveSection(activeSection, item);
              const Icon = iconByName[item.icon];

              return (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    onClick={() => setIsOpen(false)}
                    tabIndex={isOpen ? 0 : -1}
                    className={getMobileLinkClass(active)}>
                    <span className="inline-flex min-w-0 items-center gap-3">
                      <Icon aria-hidden="true" className="h-4 w-4 shrink-0" />
                      <span className="truncate">{item.name}</span>
                    </span>
                    <ChevronRight
                      aria-hidden="true"
                      className="h-4 w-4 shrink-0 text-muted"
                    />
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="grid gap-2 border-t border-border p-3">
            <TrackedContactLink
              href={CONTACT_PHONE_HREF}
              channel="phone"
              source="navigation"
              tabIndex={isOpen ? 0 : -1}
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-surface-inverse px-4 text-sm font-semibold text-white transition-[background-color,box-shadow] duration-200 hover:bg-electric-900 hover:shadow-electric">
              <Phone aria-hidden="true" className="h-4 w-4" />
              {CONTACT_PHONE_DISPLAY}
            </TrackedContactLink>
            <TrackedContactLink
              href={CONTACT_WHATSAPP_HREF}
              channel="whatsapp"
              source="navigation"
              target="_blank"
              rel="noopener noreferrer"
              tabIndex={isOpen ? 0 : -1}
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-border bg-surface px-4 text-sm font-semibold text-muted-strong transition-[background-color,border-color,color] duration-200 hover:border-teal-500 hover:bg-surface-muted hover:text-teal-700">
              <MessageCircle aria-hidden="true" className="h-4 w-4" />
              WhatsApp
            </TrackedContactLink>
          </div>
        </div>
      </div>
    </div>
  );
}
