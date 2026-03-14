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

interface Props {
  projectId: string;
  alt: string;
  href?: string;
  className?: string;
}

export default function ProjectThumbnail({ projectId, alt, href, className = "" }: Props) {
  const screens = projectScreens[projectId];
  const bg = projectThemeBg[projectId] ?? "#F0FAFA";

  const inner = screens ? (
    <PhoneCascade screens={screens} alt={alt} />
  ) : (
    // eslint-disable-next-line @next/next/no-img-element
    <img src="" alt={alt} style={{ width: "100%", height: "100%", objectFit: "contain" }} />
  );

  const containerStyle = { background: bg, padding: "24px 16px" };

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
