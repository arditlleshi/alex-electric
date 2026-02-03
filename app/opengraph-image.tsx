import { ImageResponse } from "next/og";

export const alt = "Alex Elektrik - Elektricist ne Tirane";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          background:
            "linear-gradient(135deg, #0f172a 0%, #1e3a8a 45%, #0f172a 100%)",
          color: "white",
          padding: 80,
        }}>
        <div style={{ fontSize: 72, fontWeight: 800, letterSpacing: -1 }}>
          Alex Elektrik
        </div>
        <div
          style={{
            fontSize: 40,
            marginTop: 12,
            color: "#bfdbfe",
            fontWeight: 600,
          }}>
          Elektricist Profesionist
        </div>
        <div
          style={{
            fontSize: 28,
            marginTop: 24,
            color: "#e2e8f0",
            lineHeight: 1.3,
          }}>
          Instalime | Riparime | Smart Home | Karikues EV | Panele Diellore
        </div>
        <div style={{ fontSize: 22, marginTop: 32, color: "#93c5fd" }}>
          Shërbim 24/7 - Tiranë, Durrës dhe zonat perreth
        </div>
      </div>
    ),
    { ...size }
  );
}
