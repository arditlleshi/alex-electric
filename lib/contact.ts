export type ContactChannel = "phone" | "whatsapp";

export type ContactSource =
  | "navigation"
  | "hero"
  | "contact-section"
  | "footer"
  | "faq-section"
  | "english-page"
  | "service-hub"
  | "service-page"
  | "english-service-page"
  | "guide-page";

export const CONTACT_PHONE_NUMBER = "+355693289443";
export const CONTACT_PHONE_DISPLAY = "355 69 328 9443";
export const CONTACT_PHONE_HREF = `tel:${CONTACT_PHONE_NUMBER}`;

export const CONTACT_WHATSAPP_NUMBER = "355693289443";
export const CONTACT_WHATSAPP_HREF = `https://wa.me/${CONTACT_WHATSAPP_NUMBER}`;
