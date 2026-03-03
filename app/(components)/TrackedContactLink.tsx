"use client";

import type { ComponentPropsWithoutRef, MouseEvent } from "react";
import type { ContactChannel, ContactSource } from "@/lib/contact";

const TRACK_ENDPOINT = "/api/contact-click";

type TrackedContactLinkProps = Omit<ComponentPropsWithoutRef<"a">, "href"> & {
  href: string;
  channel: ContactChannel;
  source: ContactSource;
};

function sendContactClick(payload: {
  channel: ContactChannel;
  source: ContactSource;
  path: string;
}) {
  const body = JSON.stringify(payload);

  if (
    typeof navigator !== "undefined" &&
    typeof navigator.sendBeacon === "function"
  ) {
    const blob = new Blob([body], { type: "application/json" });

    if (navigator.sendBeacon(TRACK_ENDPOINT, blob)) {
      return;
    }
  }

  void fetch(TRACK_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body,
    cache: "no-store",
    keepalive: true,
  }).catch(() => undefined);
}

export default function TrackedContactLink({
  channel,
  source,
  href,
  onClick,
  ...props
}: TrackedContactLinkProps) {
  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(event);

    if (event.defaultPrevented) {
      return;
    }

    sendContactClick({
      channel,
      source,
      path:
        typeof window === "undefined"
          ? "/"
          : `${window.location.pathname}${window.location.search}`,
    });
  };

  return <a href={href} onClick={handleClick} {...props} />;
}
