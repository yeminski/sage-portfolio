"use client";

import { useState } from "react";
import dynamic from "next/dynamic";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const PillEdPrototype = dynamic(() => import("@/projects/PillEd/prototype/PillEdPrototype"), {
  ssr: false,
  loading: () => (
    <div style={{ width: 340, height: 560, background: "#f3f4f6", borderRadius: 20, display: "flex", alignItems: "center", justifyContent: "center", color: "#9ca3af", fontSize: 13 }}>
      Loading…
    </div>
  ),
});

const screens = [
  {
    label: "Home",
    screenIndex: 0,
    accent: "#0D9488",
    title: "Adherence Dashboard",
    description: "A personal home screen that surfaces today's medications, recent adherence history, and one-tap access to scanning and scheduling.",
  },
  {
    label: "Onboarding",
    screenIndex: 1,
    accent: "#6366f1",
    title: "Personalized Onboarding",
    description: "Age, weight, pregnancy status, known allergies — collected once and used throughout the app to tailor every alert and recommendation to the individual.",
  },
  {
    label: "Scan",
    screenIndex: 2,
    accent: "#0D9488",
    title: "OCR Medication Scan",
    description: "Point your camera at any pill or label. Image recognition matches it against a comprehensive drug database at 90%+ accuracy — no manual typing required.",
  },
  {
    label: "Interactions",
    screenIndex: 3,
    accent: "#ef4444",
    title: "Drug Interaction Check",
    description: "Every medication in your profile is checked against the others in real time. Risk levels (High / Medium / Low) are surfaced with plain-language explanations.",
  },
  {
    label: "Drug Info",
    screenIndex: 4,
    accent: "#8b5cf6",
    title: "Drug Info Library",
    description: "Medical jargon translated into plain language. Dosage, storage, side effects, and precautions — readable by anyone regardless of health literacy level.",
  },
  {
    label: "Schedule",
    screenIndex: 5,
    accent: "#3b82f6",
    title: "Medication Schedule",
    description: "Dosing times, snooze support, and adherence tracking — all synced to push notifications so users never miss a dose.",
  },
];

export default function PillEdSolutionSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = screens[activeIndex];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid gap-12" style={{ gridTemplateColumns: "55fr 45fr", alignItems: "flex-start" }}>
          {/* Left column: section header + buttons + feature description */}
          <div className="flex flex-col gap-8">
            {/* Section header */}
            <div>
              <p className="text-xs font-semibold text-accent uppercase tracking-widest mb-2">04 — Solution</p>
              <h2 className="text-3xl font-bold text-ink mb-4">Core Features</h2>
              <p className="text-ink/60 mb-6">
                PillEd integrates six critical capabilities into a single app — a combination no competitor currently offers.
              </p>
              <p className="text-sm text-accent whitespace-nowrap">
                Click a button below to see each feature in action &amp; tap inside the app to explore interactively.
              </p>
            </div>

            {/* Horizontal pill button row — single line, no wrap */}
            <div className="flex gap-1.5" style={{ flexWrap: "nowrap" }}>
              {screens.map((s, i) => (
                <button
                  key={s.label}
                  onClick={() => setActiveIndex(i)}
                  style={{ whiteSpace: "nowrap" }}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors cursor-pointer flex-shrink-0 ${
                    activeIndex === i
                      ? "bg-accent text-white border border-accent"
                      : "text-gray-500 bg-transparent border border-gray-200 hover:text-gray-700 hover:border-gray-300"
                  }`}
                >
                  {s.label}
                </button>
              ))}
            </div>

            {/* Feature description */}
            <div>
              <p
                className="text-xs font-semibold uppercase tracking-widest mb-2"
                style={{ color: active.accent }}
              >
                {active.label}
              </p>
              <h3 className="text-lg font-bold text-ink mb-3">{active.title}</h3>
              <p className="text-sm text-ink/60 leading-relaxed">{active.description}</p>
            </div>
          </div>

          {/* Right column: interactive prototype inside phone shell */}
          <div className="flex justify-center items-start">
            <div
              style={{
                width: 300,
                height: 600,
                borderRadius: 44,
                background: "#111",
                boxShadow: "0 0 0 2px #333, 0 24px 64px rgba(0,0,0,0.30), 0 8px 24px rgba(0,0,0,0.20)",
                flexShrink: 0,
                position: "relative",
                padding: "14px 10px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {/* Notch */}
              <div
                style={{
                  position: "absolute",
                  top: 14,
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: 90,
                  height: 24,
                  background: "#111",
                  borderRadius: "0 0 16px 16px",
                  zIndex: 10,
                }}
              />
              {/* Screen area */}
              <div
                style={{
                  flex: 1,
                  borderRadius: 34,
                  overflow: "hidden",
                  background: "white",
                  position: "relative",
                }}
              >
                <div style={{ width: 320, transform: "scale(0.875)", transformOrigin: "top left" }}>
                  <PillEdPrototype
                    key={activeIndex}
                    initialScreen={active.screenIndex}
                    screenOnly={true}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
