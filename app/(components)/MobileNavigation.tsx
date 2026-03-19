"use client";

import Link from "next/link";
import { useState } from "react";
import {
  ChevronRight,
  FileText,
  Globe,
  Home,
  Menu,
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

const iconByName = {
  home: Home,
  services: Zap,
  blog: FileText,
  english: Globe,
  contact: Phone,
} satisfies Record<NavigationIcon, typeof Home>;

function getMobileLinkClass(active: boolean) {
  return `flex items-center justify-between rounded-2xl px-4 py-3.5 text-base font-medium transition-colors transition-shadow duration-200 ${
    active
      ? "bg-blue-50 text-blue-700 shadow-sm"
      : "text-slate-700 hover:bg-slate-50 hover:text-blue-700"
  }`;
}

function getMobileChevronClass(active: boolean) {
  return `h-4 w-4 transition-colors duration-200 ${
    active ? "text-blue-600" : "text-gray-400"
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
        className="inline-flex h-11 items-center gap-2 rounded-full border border-slate-200 bg-white/90 px-4 text-sm font-semibold text-slate-800 shadow-sm transition-colors duration-200 hover:bg-slate-50 hover:text-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/70 focus-visible:ring-offset-2">
        {isOpen ? <X className="h-5 w-5 shrink-0" /> : <Menu className="h-5 w-5 shrink-0" />}
        <span>{isOpen ? "Close" : "Menu"}</span>
      </button>

      <div
        id="mobile-navigation"
        aria-hidden={!isOpen}
        className={`absolute right-0 top-[calc(100%+0.75rem)] z-50 w-[24rem] max-w-[calc(100vw-1.5rem)] transition-[opacity,transform] duration-200 ease-out motion-reduce:transition-none ${
          isOpen
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-2 opacity-0"
        }`}>
        <div className="overflow-hidden rounded-[1.5rem] border border-slate-200/80 bg-white/96 shadow-[0_24px_60px_rgba(15,23,42,0.16)] ring-1 ring-black/5">
          <div className="border-b border-slate-100 px-4 py-3">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
              Quick Links
            </p>
          </div>
          <ul className="p-2">
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
                    <span className="inline-flex items-center gap-3">
                      <Icon className="h-4 w-4 shrink-0" />
                      {item.name}
                    </span>
                    <ChevronRight className={getMobileChevronClass(active)} />
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
