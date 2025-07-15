import Image from "next/image";
import Link from "next/link";
import logo from "@/public/main-logo.png";

const navigation = [
  { name: "Kreu", href: "/#hero" },
  { name: "Rreth Nesh", href: "/#about" },
  { name: "Shërbimet", href: "/#services" },
  { name: "Blog", href: "/#articles" },
  { name: "Kontakt", href: "/#contact" },
];

export default function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-[9999] nav-backdrop bg-white/90 py-2 shadow-lg border-b border-gray-200/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center md:justify-between items-center h-16">
          <Link
            href={{
              pathname: "/",
              hash: "#hero",
            }}
            className="flex items-center group cursor-pointer">
            <div className="relative w-36 h-14 p-3 flex items-center justify-center rounded-xl transition-all duration-300 group-hover:bg-blue-50">
              <Image
                src={logo}
                alt="Alex Electric Logo"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-contain transform group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          </Link>

          <div className="hidden md:flex space-x-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="relative text-gray-700 hover:text-blue-600 transition-all duration-300 font-medium group px-4 py-2 rounded-lg">
                <span className="relative z-10">{item.name}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-95 group-hover:scale-100" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
