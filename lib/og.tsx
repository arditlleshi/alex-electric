import { ImageResponse } from "next/og";
import { ORGANIZATION_NAME } from "./seo";

export const seoImageSize = {
  width: 1200,
  height: 630,
};

export const seoImageContentType = "image/png";

type SeoImageOptions = {
  eyebrow: string;
  title: string;
  subtitle: string;
  locale?: "sq" | "en";
};

export function createSeoImage({
  eyebrow,
  title,
  subtitle,
  locale = "sq",
}: SeoImageOptions) {
  const badgeText = locale === "en" ? "Tirana and Durres" : "Tirane dhe Durres";
  const footerText =
    locale === "en"
      ? "Fast electrical support, diagnostics, repairs, EV, solar"
      : "Sherbim i shpejte elektrik, diagnostikim, riparime, EV, solar";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background:
            "radial-gradient(circle at top left, #0f172a 0%, #1d4ed8 40%, #020617 100%)",
          color: "white",
          padding: "56px 64px",
          fontFamily: "Arial, sans-serif",
        }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 16,
              fontSize: 30,
              fontWeight: 700,
            }}>
            <div
              style={{
                width: 18,
                height: 18,
                display: "flex",
                borderRadius: 999,
                background: "#f59e0b",
              }}
            />
            {ORGANIZATION_NAME}
          </div>
          <div
            style={{
              display: "flex",
              borderRadius: 999,
              background: "rgba(255,255,255,0.12)",
              padding: "12px 20px",
              fontSize: 20,
              color: "#dbeafe",
            }}>
            {badgeText}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div
            style={{
              display: "flex",
              fontSize: 22,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "#93c5fd",
            }}>
            {eyebrow}
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 60,
              fontWeight: 800,
              lineHeight: 1.08,
              maxWidth: "92%",
            }}>
            {title}
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 28,
              lineHeight: 1.35,
              color: "#e2e8f0",
              maxWidth: "88%",
            }}>
            {subtitle}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 22,
            color: "#cbd5e1",
          }}>
          <div style={{ display: "flex" }}>{footerText}</div>
          <div style={{ display: "flex", color: "#93c5fd" }}>alex-electric.com</div>
        </div>
      </div>
    ),
    seoImageSize,
  );
}
