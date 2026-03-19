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
  return `group relative flex items-center gap-2 rounded-full px-3 py-2 font-medium transition-colors transition-shadow duration-300 lg:px-4 ${
    active
      ? "bg-gradient-to-r from-blue-50 to-blue-100 text-blue-700 shadow-sm"
      : "text-gray-700 hover:text-blue-600"
  }`;
}

function getDesktopBackgroundClass(active: boolean) {
  return `absolute inset-0 rounded-full bg-gradient-to-r from-blue-50 to-blue-100 transition-[opacity,transform] duration-300 ${
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
    <nav className="fixed left-0 right-0 top-0 z-[9999] border-b border-slate-200/70 bg-white/92 shadow-[0_8px_30px_rgba(15,23,42,0.08)] nav-backdrop">
      <div className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between gap-3 sm:h-[4.25rem]">
          <Link href="/" className="group flex min-w-0 items-center">
            <div className="relative flex h-11 w-28 items-center justify-center rounded-xl p-1.5 transition-colors duration-300 group-hover:bg-blue-50 sm:h-14 sm:w-36 sm:p-3">
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

          <div className="hidden items-center gap-1 rounded-full border border-gray-200/70 bg-white/75 px-2 py-1 shadow-md md:flex">
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
