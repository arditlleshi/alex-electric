import logo from "@/public/main-logo.png";
import Image from "next/image";
import Link from "next/link";
import {
  Facebook,
  Instagram,
  Mail,
  Phone,
  MapPin,
  MessageCircle,
} from "lucide-react";

export default async function Footer() {
  "use cache"; // Cache footer component (copyright year captured at build time)
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-5 gap-4">
          <div className="">
            <div className="relative w-28 h-12 mb-4 flex-shrink-0">
              <Image
                src={logo}
                alt="Alex Electric Logo"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="filter brightness-0 invert object-contain"
              />
            </div>
            <p className="text-gray-400 mb-4">
              Shërbime elektrike profesionale që mund t&apos;u besoni. Mbi 15
              vite eksperiencë në shërbim të klientëve rezidencialë, komercialë
              dhe industrialë.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Linqe të Shpejta</h4>
            <ul aria-label="quick links" className="space-y-2">
              <li aria-label="Rreth Alex Elektrik">
                <Link
                  href="/#about"
                  className="block text-gray-400 hover:text-white transition-colors text-left">
                  Rreth Alex Elektrik
                </Link>
              </li>
              <li aria-label="Shërbimet">
                <Link
                  href="/#services"
                  className="block text-gray-400 hover:text-white transition-colors text-left">
                  Shërbimet
                </Link>
              </li>
              <li aria-label="Artikuj">
                <Link
                  href="/blog"
                  className="block text-gray-400 hover:text-white transition-colors text-left">
                  Artikuj
                </Link>
              </li>
              <li aria-label="Kontakti">
                <Link
                  href="/#contact"
                  className="block text-gray-400 hover:text-white transition-colors text-left">
                  Kontakti
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Na Kontaktoni</h4>
            <ul aria-label="contact items" className="space-y-4 mb-4">
              {/* Email */}
              <li aria-label="Email" className="flex items-center gap-3 group">
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                </div>
                <Link
                  href="mailto:aleksander.gjoni85@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 group-hover:text-white transition-colors break-all leading-tight">
                  aleksander.gjoni85@gmail.com
                </Link>
              </li>

              {/* Phone */}
              <li
                aria-label="Phone"
                className="flex items-center space-x-3 group">
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                </div>
                <Link
                  href="tel:355693289443"
                  className="text-gray-400 group-hover:text-white transition-colors leading-tight">
                  355 69 328 9443
                </Link>
              </li>

              {/* WhatsApp */}
              <li
                aria-label="WhatsApp"
                className="flex items-center space-x-3 group">
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                </div>
                <Link
                  href="https://wa.me/355693289443"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 group-hover:text-white transition-colors leading-tight">
                  Bisedoni në WhatsApp
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Shërbimet Kryesore
            </h3>
            <ul aria-label="core services" className="space-y-3">
              <li aria-label="Instalime & Riparime">
                <p className="text-gray-400 hover:text-white transition-colors">
                  Instalime & Riparime
                </p>
              </li>
              <li aria-label="Mirëmbajtje Elektrike">
                <p className="text-gray-400 hover:text-white transition-colors">
                  Mirëmbajtje Elektrike
                </p>
              </li>
              <li aria-label="Panele Diellore">
                <p className="text-gray-400 hover:text-white transition-colors">
                  Panele Diellore
                </p>
              </li>
              <li aria-label="Karikues EV">
                <p className="text-gray-400 hover:text-white transition-colors">
                  Karikues EV
                </p>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Vendodhja Jone</h4>
            <div className="overflow-hidden rounded-lg border border-muted-3">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d11984.564508566873!2d19.81869835!3d41.327544450000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1751892603325!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Alex Elektrik Office"
              />
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-700 pt-6 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 Alex Elektrik. Të gjitha të drejtat e rezervuara.
          </p>
        </div>
      </div>
    </footer>
  );
}
