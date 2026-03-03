import { createHash, timingSafeEqual } from "node:crypto";

export const CONTACT_CLICK_VIEWER_COOKIE_NAME = "contact-click-viewer";
export const CONTACT_CLICK_VIEWER_PATH = "/contact-clicks";

function toBuffer(value: string) {
  return Buffer.from(value, "utf8");
}

export function getContactClickViewerSecret() {
  return process.env.CONTACT_CLICK_VIEWER_SECRET?.trim() ?? "";
}

export function isContactClickViewerConfigured() {
  return getContactClickViewerSecret().length > 0;
}

export function createContactClickViewerSession(secret: string) {
  return createHash("sha256")
    .update(`${secret}:contact-click-viewer`)
    .digest("hex");
}

export function isMatchingViewerSecret(secret: string) {
  const configuredSecret = getContactClickViewerSecret();

  if (!configuredSecret) {
    return false;
  }

  const providedBuffer = toBuffer(secret);
  const configuredBuffer = toBuffer(configuredSecret);

  if (providedBuffer.length !== configuredBuffer.length) {
    return false;
  }

  return timingSafeEqual(providedBuffer, configuredBuffer);
}

export function isAuthorizedViewerSession(sessionValue: string | undefined) {
  const configuredSecret = getContactClickViewerSecret();

  if (!configuredSecret || !sessionValue) {
    return false;
  }

  const expectedSession = createContactClickViewerSession(configuredSecret);
  const sessionBuffer = toBuffer(sessionValue);
  const expectedBuffer = toBuffer(expectedSession);

  if (sessionBuffer.length !== expectedBuffer.length) {
    return false;
  }

  return timingSafeEqual(sessionBuffer, expectedBuffer);
}
