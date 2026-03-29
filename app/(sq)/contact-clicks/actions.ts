"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import {
  CONTACT_CLICK_VIEWER_COOKIE_NAME,
  CONTACT_CLICK_VIEWER_PATH,
  createContactClickViewerSession,
  getContactClickViewerSecret,
  isMatchingViewerSecret,
} from "@/lib/contact-click-viewer";

export async function unlockContactClicks(formData: FormData) {
  const secret = String(formData.get("secret") ?? "").trim();
  const configuredSecret = getContactClickViewerSecret();

  if (!configuredSecret) {
    redirect(`${CONTACT_CLICK_VIEWER_PATH}?status=not-configured`);
  }

  if (!isMatchingViewerSecret(secret)) {
    redirect(`${CONTACT_CLICK_VIEWER_PATH}?status=invalid`);
  }

  const cookieStore = await cookies();

  cookieStore.set({
    name: CONTACT_CLICK_VIEWER_COOKIE_NAME,
    value: createContactClickViewerSession(configuredSecret),
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: CONTACT_CLICK_VIEWER_PATH,
    maxAge: 60 * 60 * 12,
  });

  redirect(CONTACT_CLICK_VIEWER_PATH);
}

export async function lockContactClicks() {
  const cookieStore = await cookies();

  cookieStore.delete({
    name: CONTACT_CLICK_VIEWER_COOKIE_NAME,
    path: CONTACT_CLICK_VIEWER_PATH,
  });

  redirect(CONTACT_CLICK_VIEWER_PATH);
}
