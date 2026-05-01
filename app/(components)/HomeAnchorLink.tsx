"use client";

import Link, { type LinkProps } from "next/link";
import { usePathname } from "next/navigation";

type HomeAnchorLinkProps = LinkProps &
  Omit<React.ComponentProps<typeof Link>, "href"> & {
    href?: string;
  };

export default function HomeAnchorLink({
  href = "/#hero",
  onClick,
  ...props
}: HomeAnchorLinkProps) {
  const pathname = usePathname();

  return (
    <Link
      {...props}
      href={href}
      onClick={(event) => {
        onClick?.(event);

        if (event.defaultPrevented || pathname !== "/") {
          return;
        }

        event.preventDefault();

        const hero = document.getElementById("hero");

        if (hero) {
          hero.scrollIntoView({ behavior: "smooth", block: "start" });
        } else {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }

        window.history.replaceState(null, "", "/#hero");
      }}
    />
  );
}
