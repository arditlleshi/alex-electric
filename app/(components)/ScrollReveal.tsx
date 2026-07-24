interface ScrollRevealProps {
  children: React.ReactNode;
  width?: "fit-content" | "100%";
  className?: string;
  animation?: "fade-up" | "fade-in" | "slide-left" | "slide-right" | "scale-up";
  delay?: number;
  duration?: number;
  once?: boolean;
}

export default function ScrollReveal({
  children,
  width = "fit-content",
  className,
}: ScrollRevealProps) {
  return (
    <div
      style={{ position: "relative", width, overflow: "visible" }}
      className={className}>
      {children}
    </div>
  );
}
