"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import logo from "@/public/main-logo.png";
import {
  Home,
  Info,
  Zap,
  FileText,
  Phone,
  Globe,
  Menu,
  X,
  ChevronRight,
} from "lucide-react";

const navigation = [
  { name: "Kreu", href: "/#hero", icon: Home },
  { name: "Rreth Nesh", href: "/#about", icon: Info },
  { name: "Shërbimet", href: "/#services", icon: Zap },
  { name: "Blog", href: "/blog", icon: FileText },
  { name: "English", href: "/en", icon: Globe },
  { name: "Kontakt", href: "/#contact", icon: Phone },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-[9999] nav-backdrop bg-white/88 py-1.5 shadow-lg border-b border-gray-200/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-[3.75rem]">
          <Link
            href={{
              pathname: "/",
              hash: "#hero",
            }}
            className="flex items-center group cursor-pointer">
            <div className="relative w-32 h-12 p-2 flex items-center justify-center rounded-xl transition-all duration-300 group-hover:bg-blue-50 sm:w-36 sm:h-14 sm:p-3">
              <Image
                src={logo}
                alt="Alex Electric Logo"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-contain transform group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          </Link>

          <button
            type="button"
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            aria-label="Toggle navigation menu"
            onClick={() => setIsOpen((prev) => !prev)}
            className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-xl border border-gray-200 bg-white/70 text-gray-700 shadow-sm transition-all duration-300 hover:bg-blue-50 hover:text-blue-700">
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

          <div className="hidden md:flex items-center gap-1 rounded-full border border-gray-200/70 bg-white/70 px-2 py-1 shadow-md">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="relative flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-all duration-300 font-medium group px-3 py-2 rounded-full lg:px-4">
                <item.icon className="w-4 h-4 z-10" />
                <span className="relative z-10">{item.name}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-blue-100 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-95 group-hover:scale-100" />
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div
        id="mobile-navigation"
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-[28rem] opacity-100 pb-3" : "max-h-0 opacity-0"
        }`}>
        <div className="mx-4 rounded-2xl border border-white/40 bg-white/92 shadow-xl backdrop-blur">
          <ul className="p-2">
            {navigation.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-between rounded-xl px-4 py-3 text-base font-medium text-gray-700 transition-all duration-300 hover:bg-blue-50 hover:text-blue-700">
                  <span className="inline-flex items-center gap-3">
                    <item.icon className="w-4 h-4" />
                    {item.name}
                  </span>
                  <ChevronRight className="w-4 h-4 text-gray-400" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
