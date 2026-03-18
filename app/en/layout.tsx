import SiteShell from "../(components)/SiteShell";

export default function EnglishLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <SiteShell activeSection="english">{children}</SiteShell>;
}
