"use client";

export default function ScrollButton({
  sectionId,
  children,
  ...props
}: {
  sectionId: string;
  children: React.ReactNode;
  props?: React.ButtonHTMLAttributes<HTMLButtonElement>;
} & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <button onClick={() => scrollToSection(sectionId)} {...props}>
      {children}
    </button>
  );
}
