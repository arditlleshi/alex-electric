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
  return `flex items-center justify-between rounded-xl px-4 py-3 text-base font-medium transition-all duration-300 ${
    active
      ? "bg-blue-50 text-blue-700"
      : "text-gray-700 hover:bg-blue-50 hover:text-blue-700"
  }`;
}

function getMobileChevronClass(active: boolean) {
  return `h-4 w-4 transition-colors ${
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
    <>
      <button
        type="button"
        aria-expanded={isOpen}
        aria-controls="mobile-navigation"
        aria-label="Toggle navigation menu"
        onClick={() => setIsOpen((prev) => !prev)}
        className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-gray-200 bg-white/70 text-gray-700 shadow-sm transition-all duration-300 hover:bg-blue-50 hover:text-blue-700 md:hidden">
        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>

      <div
        id="mobile-navigation"
        className={`overflow-hidden transition-all duration-300 md:hidden ${
          isOpen ? "max-h-[28rem] pb-3 opacity-100" : "max-h-0 opacity-0"
        }`}>
        <div className="mx-4 rounded-2xl border border-white/40 bg-white/92 shadow-xl backdrop-blur">
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
                    className={getMobileLinkClass(active)}>
                    <span className="inline-flex items-center gap-3">
                      <Icon className="h-4 w-4" />
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
    </>
  );
}
