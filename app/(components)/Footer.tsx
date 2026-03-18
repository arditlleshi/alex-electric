import Image from "next/image";
import Link from "next/link";
import { Mail, MessageCircle, Phone } from "lucide-react";
import TrackedContactLink from "./TrackedContactLink";
import { albanianServicePages } from "@/lib/content/albanian-services";
import { englishServicePages } from "@/lib/content/english-services";
import {
  CONTACT_EMAIL_ADDRESS,
  CONTACT_EMAIL_HREF,
  CONTACT_PHONE_DISPLAY,
  CONTACT_PHONE_HREF,
  CONTACT_WHATSAPP_HREF,
} from "@/lib/contact";
import logo from "@/public/main-logo.png";

const quickLinks = [
  { label: "Kreu", href: "/" },
  { label: "Sherbime", href: "/sherbime" },
  { label: "Blog", href: "/blog" },
  { label: "English", href: "/en" },
  { label: "Kontakt", href: "/#contact" },
];

const featuredServiceSlugs = new Set([
  "elektricist-tirane",
  "elektricist-durres",
  "elektricist-urgjent-tirane",
  "karikues-ev-tirane",
]);

const featuredEnglishSlugs = new Set([
  "electrician-tirana",
  "electrician-for-expats",
  "electrician-for-airbnb-hosts",
  "electrician-durres",
]);

export default async function Footer() {
  "use cache";

  const featuredServices = albanianServicePages.filter((service) =>
    featuredServiceSlugs.has(service.slug),
  );
  const featuredEnglishPages = englishServicePages.filter((service) =>
    featuredEnglishSlugs.has(service.slug),
  );

  return (
    <footer className="bg-gray-900 py-12 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
          <div>
            <div className="relative mb-4 h-12 w-28 flex-shrink-0">
              <Image
                src={logo}
                alt="Alex Electric Logo"
                fill
                sizes="112px"
                className="object-contain brightness-0 invert"
              />
            </div>
            <p className="mb-4 text-gray-400">
              Alex Elektrik lidh faqen kryesore, faqet e sherbimeve dhe blogun
              per kerkime lokale ne Tirane dhe Durres.
            </p>
            <p className="text-sm text-gray-400">
              English-speaking support for expats, landlords, Airbnb hosts, and
              small businesses.
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-lg font-semibold">Linqe te shpejta</h4>
            <ul className="space-y-2" aria-label="quick links">
              {quickLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="block text-left text-gray-400 transition-colors hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-lg font-semibold">Faqe kryesore</h4>
            <ul className="space-y-2" aria-label="featured services">
              {featuredServices.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/sherbime/${service.slug}`}
                    className="block text-left text-gray-400 transition-colors hover:text-white">
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-lg font-semibold">English pages</h4>
            <ul className="space-y-2" aria-label="english pages">
              <li>
                <Link
                  href="/en/services"
                  className="block text-left text-gray-400 transition-colors hover:text-white">
                  English services hub
                </Link>
              </li>
              {featuredEnglishPages.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={service.path}
                    className="block text-left text-gray-400 transition-colors hover:text-white">
                    {service.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/blog?lang=en"
                  className="block text-left text-gray-400 transition-colors hover:text-white">
                  English guides
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-lg font-semibold">Na kontaktoni</h4>
            <ul className="mb-6 space-y-4" aria-label="contact items">
              <li className="group flex items-center gap-3">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-gray-800">
                  <Mail className="h-5 w-5 text-gray-400 transition-colors group-hover:text-white" />
                </div>
                <TrackedContactLink
                  href={CONTACT_EMAIL_HREF}
                  channel="email"
                  source="footer"
                  className="break-all leading-tight text-gray-400 transition-colors group-hover:text-white">
                  {CONTACT_EMAIL_ADDRESS}
                </TrackedContactLink>
              </li>
              <li className="group flex items-center gap-3">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-gray-800">
                  <Phone className="h-5 w-5 text-gray-400 transition-colors group-hover:text-white" />
                </div>
                <TrackedContactLink
                  href={CONTACT_PHONE_HREF}
                  channel="phone"
                  source="footer"
                  className="leading-tight text-gray-400 transition-colors group-hover:text-white">
                  {CONTACT_PHONE_DISPLAY}
                </TrackedContactLink>
              </li>
              <li className="group flex items-center gap-3">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-gray-800">
                  <MessageCircle className="h-5 w-5 text-gray-400 transition-colors group-hover:text-white" />
                </div>
                <TrackedContactLink
                  href={CONTACT_WHATSAPP_HREF}
                  channel="whatsapp"
                  source="footer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="leading-tight text-gray-400 transition-colors group-hover:text-white">
                  WhatsApp
                </TrackedContactLink>
              </li>
            </ul>

            <div className="overflow-hidden rounded-lg border border-gray-800">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d11984.564508566873!2d19.81869835!3d41.327544450000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1751892603325!5m2!1sen!2s"
                width="100%"
                height="180"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Alex Elektrik service area"
              />
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-700 pt-6 text-center">
          <p className="text-sm text-gray-400">
            © 2026 Alex Elektrik. Te gjitha te drejtat e rezervuara.
          </p>
        </div>
      </div>
    </footer>
  );
}
