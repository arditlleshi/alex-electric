import SiteShell from "@/app/(components)/SiteShell";

export default function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <SiteShell activeSection="blog">{children}</SiteShell>;
}
