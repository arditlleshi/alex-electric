import Image from "next/image";
import Link from "next/link";
import { FileText, Globe, Home, Phone, Zap } from "lucide-react";
import MobileNavigation from "./MobileNavigation";
import {
  isActiveSection,
  navigationItems,
  type ActiveSection,
  type NavigationIcon,
} from "./navigation-data";
import logo from "@/public/main-logo.png";

const iconByName = {
  home: Home,
  services: Zap,
  blog: FileText,
  english: Globe,
  contact: Phone,
} satisfies Record<NavigationIcon, typeof Home>;

function getDesktopLinkClass(active: boolean) {
  return `group relative flex items-center gap-2 rounded-full px-3 py-2 font-medium transition-all duration-300 lg:px-4 ${
    active
      ? "bg-gradient-to-r from-blue-50 to-blue-100 text-blue-700 shadow-sm"
      : "text-gray-700 hover:text-blue-600"
  }`;
}

function getDesktopBackgroundClass(active: boolean) {
  return `absolute inset-0 rounded-full bg-gradient-to-r from-blue-50 to-blue-100 transition-all duration-300 ${
    active
      ? "scale-100 opacity-100"
      : "scale-95 opacity-0 group-hover:scale-100 group-hover:opacity-100"
  }`;
}

export default function Navigation({
  activeSection = "none",
}: {
  activeSection?: ActiveSection;
}) {
  return (
    <nav className="fixed left-0 right-0 top-0 z-[9999] border-b border-gray-200/30 bg-white/88 py-1.5 shadow-lg nav-backdrop">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-14 items-center justify-between sm:h-[3.75rem]">
          <Link href="/" className="group flex items-center">
            <div className="relative flex h-12 w-32 items-center justify-center rounded-xl p-2 transition-all duration-300 group-hover:bg-blue-50 sm:h-14 sm:w-36 sm:p-3">
              <Image
                src={logo}
                alt="Alex Electric Logo"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          </Link>

          <MobileNavigation activeSection={activeSection} />

          <div className="hidden items-center gap-1 rounded-full border border-gray-200/70 bg-white/70 px-2 py-1 shadow-md md:flex">
            {navigationItems.map((item) => {
              const active = isActiveSection(activeSection, item);
              const Icon = iconByName[item.icon];

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={getDesktopLinkClass(active)}>
                  <Icon className="relative z-10 h-4 w-4" />
                  <span className="relative z-10">{item.name}</span>
                  <div className={getDesktopBackgroundClass(active)} />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}
