"use client";

import { useEffect, useRef, type CSSProperties } from "react";

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
  animation = "fade-up",
  delay = 0,
  duration = 0.45,
  once = true,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;

    if (!node) {
      return;
    }

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    node.dataset.revealState = "hidden";

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          node.dataset.revealState = "visible";

          if (once) {
            observer.disconnect();
          }
        } else if (!once) {
          node.dataset.revealState = "hidden";
        }
      },
      {
        rootMargin: "0px 0px -8% 0px",
        threshold: 0.08,
      },
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [once]);

  const style = {
    position: "relative",
    width,
    overflow: "visible",
    "--reveal-delay": `${delay}s`,
    "--reveal-duration": `${duration}s`,
  } as CSSProperties;

  return (
    <div
      ref={ref}
      style={style}
      className={`scroll-reveal ${className ?? ""}`}
      data-reveal-animation={animation}
      data-reveal-state="visible">
      <div className="scroll-reveal__content">{children}</div>
    </div>
  );
}
