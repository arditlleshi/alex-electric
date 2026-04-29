import Footer from "./Footer";
import Navigation from "./Navigation";
import type { ActiveSection } from "./navigation-data";

export default function SiteShell({
  activeSection,
  children,
}: Readonly<{
  activeSection: ActiveSection;
  children: React.ReactNode;
}>) {
  return (
    <>
      <a
        href="#main-content"
        className="fixed left-4 top-4 z-[10000] -translate-y-20 rounded-lg bg-surface-inverse px-4 py-2 text-sm font-semibold text-white shadow-medium transition-transform duration-200 focus-visible:translate-y-0">
        Kalo te permbajtja
      </a>
      <Navigation activeSection={activeSection} />
      {children}
      <Footer />
    </>
  );
}
