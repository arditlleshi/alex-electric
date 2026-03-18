import SiteShell from "../(components)/SiteShell";

export default function ServicesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <SiteShell activeSection="services">{children}</SiteShell>;
}
