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
      <Navigation activeSection={activeSection} />
      {children}
      <Footer />
    </>
  );
}
