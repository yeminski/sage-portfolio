"use client";
import Link from "next/link";

// Per-project screen configs: [left, center, right]
export const projectScreens: Record<string, [string, string, string]> = {
  pilled: [
    "/projects/pilled/IMG_7770.jpg",
    "/projects/pilled/IMG_7769.jpg",
    "/projects/pilled/IMG_7771.jpg",
  ],
  yaya: [
    "/projects/yaya/IMG_7806.jpg",
    "/projects/yaya/IMG_7802.jpg",
    "/projects/yaya/IMG_7805.jpg",
  ],
};

export const projectThemeBg: Record<string, string> = {
  pilled: "#F0FAFA",
  yaya: "#FAF7F2",
  "echo-japan-payments": "#F0FDFC",
  "cross-border-payments": "#F0F4FF",
};

function PhoneCascade({ screens, alt }: { screens: [string, string, string]; alt: string }) {
  const W = 155;
  const H = 336;
  const centerLeft = 103;

  const phones = [
    { img: screens[0], transform: "translateX(-70px) rotate(-8deg) scale(0.7)", opacity: 0.7, zIndex: 1 },
    { img: screens[1], transform: "none",                                        opacity: 1,   zIndex: 3 },
    { img: screens[2], transform: "translateX(70px) rotate(8deg) scale(0.7)",   opacity: 0.7, zIndex: 2 },
  ];

  return (
    <div style={{ position: "relative", width: 360, height: 360, flexShrink: 0 }}>
      {phones.map((p, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            left: centerLeft,
            top: 12,
            width: W,
            height: H,
            transform: p.transform,
            opacity: p.opacity,
            zIndex: p.zIndex,
            borderRadius: 40,
            overflow: "hidden",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={p.img}
            alt={i === 1 ? alt : ""}
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
          />
        </div>
      ))}
    </div>
  );
}

function EchoJapanVisual() {
  const outcomes = [
    { label: "CONFIRMED", color: "#0D9488", bg: "#F0FDFA", border: "#0D9488" },
    { label: "PARTIAL", color: "#B45309", bg: "#FFFBEB", border: "#F59E0B" },
    { label: "EXPIRED", color: "#6B7280", bg: "#F9FAFB", border: "#D1D5DB" },
    { label: "+REFUND", color: "#0D9488", bg: "#F0FDFA", border: "#0D9488" },
  ];
  return (
    <div style={{ width: 300, padding: "8px 0", fontFamily: "inherit" }}>
      {/* Header label */}
      <div style={{ textAlign: "center", marginBottom: 20 }}>
        <span style={{ fontSize: 9, fontWeight: 700, letterSpacing: "0.1em", color: "#0D9488", textTransform: "uppercase" }}>
          Async Payment Flow
        </span>
      </div>
      {/* PENDING node */}
      <div style={{ display: "flex", justifyContent: "center", marginBottom: 4 }}>
        <div style={{ border: "2px solid #F59E0B", borderRadius: 8, padding: "8px 24px", background: "#FFFBEB", color: "#92400E", fontSize: 11, fontWeight: 700, letterSpacing: "0.08em" }}>
          PENDING
        </div>
      </div>
      {/* Stem */}
      <div style={{ display: "flex", justifyContent: "center", marginBottom: 0 }}>
        <div style={{ width: 1, height: 12, background: "#D1D5DB" }} />
      </div>
      {/* Branch bar */}
      <div style={{ position: "relative", height: 12, margin: "0 28px" }}>
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, borderTop: "1px solid #D1D5DB" }} />
        {[12.5, 37.5, 62.5, 87.5].map((l) => (
          <div key={l} style={{ position: "absolute", left: `${l}%`, top: 0, width: 1, height: "100%", background: "#D1D5DB" }} />
        ))}
      </div>
      {/* Outcome nodes */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: 5, margin: "0 4px" }}>
        {outcomes.map((s) => (
          <div key={s.label} style={{ border: `1.5px solid ${s.border}`, borderRadius: 6, padding: "6px 4px", background: s.bg, color: s.color, fontSize: 8, fontWeight: 700, letterSpacing: "0.04em", textAlign: "center" }}>
            {s.label}
          </div>
        ))}
      </div>
      {/* Metrics */}
      <div style={{ display: "flex", justifyContent: "center", gap: 24, marginTop: 24 }}>
        {[{ value: "+25%", label: "revenue target" }, { value: "+30%", label: "penetration" }].map((m) => (
          <div key={m.label} style={{ textAlign: "center" }}>
            <div style={{ fontSize: 18, fontWeight: 700, color: "#0D9488" }}>{m.value}</div>
            <div style={{ fontSize: 9, color: "#9CA3AF", marginTop: 2 }}>{m.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function CrossBorderVisual() {
  const currencies = [
    { code: "USD", flag: "🇺🇸" },
    { code: "EUR", flag: "🇪🇺" },
    { code: "KRW", flag: "🇰🇷" },
    { code: "JPY", flag: "🇯🇵" },
  ];
  const methods = ["Konbini", "iDEAL", "Pix", "UPI"];

  return (
    <div style={{ width: 280, fontFamily: "inherit", padding: "2px 0" }}>
      <div style={{ textAlign: "center", marginBottom: 10 }}>
        <span style={{ fontSize: 9, fontWeight: 700, letterSpacing: "0.1em", color: "#4F46E5", textTransform: "uppercase" }}>
          Cross-Border Payment Rails
        </span>
      </div>

      {/* Currency flow */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 4, marginBottom: 10 }}>
        {currencies.map((c, i) => (
          <div key={c.code} style={{ display: "flex", alignItems: "center", gap: 4 }}>
            <div style={{
              border: "1.5px solid #C7D2FE",
              borderRadius: 8,
              padding: "4px 7px",
              background: "#EEF2FF",
              textAlign: "center",
              minWidth: 44,
            }}>
              <div style={{ fontSize: 12 }}>{c.flag}</div>
              <div style={{ fontSize: 9, fontWeight: 700, color: "#4338CA", letterSpacing: "0.05em" }}>{c.code}</div>
            </div>
            {i < currencies.length - 1 && (
              <div style={{ fontSize: 9, color: "#A5B4FC", fontWeight: 700 }}>→</div>
            )}
          </div>
        ))}
      </div>

      {/* FX label */}
      <div style={{ textAlign: "center", marginBottom: 10 }}>
        <span style={{ fontSize: 8, color: "#6366F1", background: "#E0E7FF", borderRadius: 4, padding: "2px 8px", fontWeight: 600, letterSpacing: "0.06em" }}>
          Visa spot rate + 0.5–1% spread
        </span>
      </div>

      {/* Local methods row */}
      <div style={{ display: "flex", gap: 5, justifyContent: "center", flexWrap: "wrap" }}>
        {methods.map((m) => (
          <span key={m} style={{
            fontSize: 8,
            fontWeight: 600,
            color: "#6B7280",
            background: "#F3F4F6",
            border: "1px solid #E5E7EB",
            borderRadius: 4,
            padding: "3px 7px",
            letterSpacing: "0.04em",
          }}>
            {m}
          </span>
        ))}
      </div>

      {/* Bottom label */}
      <div style={{ textAlign: "center", marginTop: 10 }}>
        <span style={{ fontSize: 8, color: "#9CA3AF" }}>7 markets · FX · Settlement · Local methods</span>
      </div>
    </div>
  );
}

interface Props {
  projectId: string;
  alt: string;
  href?: string;
  className?: string;
}

export default function ProjectThumbnail({ projectId, alt, href, className = "" }: Props) {
  const screens = projectScreens[projectId];
  const bg = projectThemeBg[projectId] ?? "#F0FAFA";

  const inner = projectId === "cross-border-payments" ? (
    <CrossBorderVisual />
  ) : projectId === "echo-japan-payments" ? (
    <EchoJapanVisual />
  ) : screens ? (
    <PhoneCascade screens={screens} alt={alt} />
  ) : (
    // eslint-disable-next-line @next/next/no-img-element
    <img src="" alt={alt} style={{ width: "100%", height: "100%", objectFit: "contain" }} />
  );

  const containerStyle = {
    background: bg,
    padding: (projectId === "echo-japan-payments" || projectId === "cross-border-payments") ? "12px 16px" : "24px 16px",
  };

  if (href) {
    return (
      <Link
        href={href}
        className={`rounded-2xl flex items-center justify-center overflow-hidden cursor-pointer ${className}`}
        style={containerStyle}
      >
        {inner}
      </Link>
    );
  }

  return (
    <div
      className={`rounded-2xl flex items-center justify-center overflow-hidden ${className}`}
      style={containerStyle}
    >
      {inner}
    </div>
  );
}
