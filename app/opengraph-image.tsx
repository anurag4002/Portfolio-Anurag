import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { site } from "@/lib/data";

export const alt = "Anurag Mishra, Software Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const font = await readFile(join(process.cwd(), "app/fonts/GeneralSans-Medium.ttf"));

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 64,
          background: "#f4f4f2",
          color: "#121211",
          fontFamily: "General Sans",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 28 }}>
          <div
            style={{
              display: "flex",
              padding: "12px 26px",
              borderRadius: 99,
              background: "#e4e4e0",
            }}
          >
            {site.name}
          </div>
          <div style={{ display: "flex", color: "#6d6c66", alignItems: "center" }}>
            {site.company}
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 132,
              lineHeight: 0.9,
              letterSpacing: -6,
              textTransform: "uppercase",
            }}
          >
            Software
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 132,
              lineHeight: 0.9,
              letterSpacing: -6,
              textTransform: "uppercase",
            }}
          >
            Developer
          </div>
          <div style={{ display: "flex", marginTop: 36, fontSize: 30, color: "#6d6c66" }}>
            Banking frontend in React and TypeScript. Also Java, SQL and SAP ABAP.
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [{ name: "General Sans", data: font, weight: 500, style: "normal" }],
    },
  );
}
