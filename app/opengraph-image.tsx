import { ImageResponse } from "next/og";

export const alt = "Michelle Handoko — AI + Operations";
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
          background: "#ffffff",
          color: "#18181b",
          padding: "96px",
        }}
      >
        <div
          style={{
            fontSize: 30,
            fontWeight: 600,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "#52525b",
          }}
        >
          Michelle Handoko · AI + Operations
        </div>
        <div
          style={{
            fontSize: 58,
            fontWeight: 600,
            letterSpacing: "-0.02em",
            lineHeight: 1.18,
            marginTop: 28,
            maxWidth: 1000,
          }}
        >
          I build AI-powered tools and the operational systems that make them
          work.
        </div>
        <div
          style={{
            fontSize: 28,
            color: "#52525b",
            marginTop: 24,
          }}
        >
          My background spans tech, healthcare, go-to-market, and operations.
        </div>
        <div
          style={{
            display: "flex",
            marginTop: "auto",
            alignItems: "center",
            gap: 24,
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 28,
              fontWeight: 500,
              color: "#ffffff",
              background: "#18181b",
              borderRadius: 10,
              padding: "16px 28px",
            }}
          >
            View the work →
          </div>
          <div style={{ display: "flex", fontSize: 26, color: "#a1a1aa" }}>
            michellehandoko.vercel.app
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
