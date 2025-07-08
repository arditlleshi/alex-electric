import Footer from "../(components)/Footer";
import Navigation from "../(components)/Navigation";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-white">
      <Navigation />
      <main>{children}</main>
      <Footer />
    </div>
  );
} 