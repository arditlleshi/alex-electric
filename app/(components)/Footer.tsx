import Image from "next/image";
import Link from "next/link";
import logo from "@/public/main-logo.png";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-5 gap-8">
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
            <div className="space-y-2">
              <Link
                href="/#about"
                className="block text-gray-400 hover:text-white transition-colors text-left">
                Rreth Alex Elektrik
              </Link>
              <Link
                href="/#services"
                className="block text-gray-400 hover:text-white transition-colors text-left">
                Shërbimet
              </Link>
              <Link
                href="/blog"
                className="block text-gray-400 hover:text-white transition-colors text-left">
                Artikuj
              </Link>
              <Link
                href="/#contact"
                className="block text-gray-400 hover:text-white transition-colors text-left">
                Kontakti
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Na Kontaktoni</h4>
            <div className="space-y-4 mb-4">
              {/* Email */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-gray-400">
                    <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                  </svg>
                </div>
                <Link
                  href="mailto:aleksander.gjoni85@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors break-all leading-tight">
                  aleksander.gjoni85@gmail.com
                </Link>
              </div>

              {/* Phone */}
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-gray-400">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <Link
                  href="tel:355693289443"
                  className="text-gray-400 hover:text-white transition-colors leading-tight">
                  +355 69 328 9443
                </Link>
              </div>

              {/* WhatsApp */}
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-5 h-5 text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.085" />
                  </svg>
                </div>
                <Link
                  href="https://wa.me/355693289443"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors leading-tight">
                  Bisedoni në WhatsApp
                </Link>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Shërbimet Kryesore
            </h3>
            <div className="space-y-3">
              <p className="text-gray-400 hover:text-white transition-colors">
                Instalime & Riparime
              </p>
              <p className="text-gray-400 hover:text-white transition-colors">
                Mirëmbajtje Elektrike
              </p>
              <p className="text-gray-400 hover:text-white transition-colors">
                Panele Diellore
              </p>
              <p className="text-gray-400 hover:text-white transition-colors">
                Karikues EV
              </p>
            </div>
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
            © {new Date().getFullYear()} Alex Elektrik. Të gjitha të drejtat e
            rezervuara.
          </p>
        </div>
      </div>
    </footer>
  );
}
