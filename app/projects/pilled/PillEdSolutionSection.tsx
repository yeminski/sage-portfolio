"use client";

import dynamic from "next/dynamic";

// Screen index map: home=0, onboarding=1, scan=2, alert=3, info=4, schedule=5
function makeScreen(index: number) {
  return dynamic(
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    () => import("@/projects/PillEd/prototype/PillEdPrototype"),
    {
      ssr: false,
      loading: () => (
        <div style={{ width: 260, height: 420, background: "#f3f4f6", borderRadius: 20, display: "flex", alignItems: "center", justifyContent: "center", color: "#9ca3af", fontSize: 13 }}>
          Loading…
        </div>
      ),
    }
  );
}

// One dynamic component per screen so Next.js can bundle them independently
const Screen0 = makeScreen(0);
const Screen1 = makeScreen(1);
const Screen2 = makeScreen(2);
const Screen3 = makeScreen(3);
const Screen4 = makeScreen(4);
const Screen5 = makeScreen(5);

const SCREEN_COMPONENTS = [Screen0, Screen1, Screen2, Screen3, Screen4, Screen5];

interface FeatureRow {
  label: string;
  description: string;
  screenLabel: string;
  screenIndex: number;
  accent: string;
}

const rows: FeatureRow[] = [
  {
    label: "OCR Medication Scan",
    description: "Point your camera at any pill or label. Image recognition matches it against a comprehensive drug database at 90%+ accuracy — no manual typing required.",
    screenLabel: "Scan screen",
    screenIndex: 2,
    accent: "#0D9488",
  },
  {
    label: "Drug Interaction Check",
    description: "Every medication in your profile is checked against the others in real time. Risk levels (High / Medium / Low) are surfaced with plain-language explanations.",
    screenLabel: "Interactions screen",
    screenIndex: 3,
    accent: "#ef4444",
  },
  {
    label: "Personalized Onboarding",
    description: "Age, weight, pregnancy status, known allergies — collected once and used throughout the app to tailor every alert and recommendation to the individual.",
    screenLabel: "Onboarding screen",
    screenIndex: 1,
    accent: "#6366f1",
  },
  {
    label: "Medication Schedule",
    description: "Dosing times, snooze support, and adherence tracking — all synced to push notifications so users never miss a dose.",
    screenLabel: "Schedule screen",
    screenIndex: 5,
    accent: "#3b82f6",
  },
  {
    label: "Drug Info Library",
    description: "Medical jargon translated into plain language. Dosage, storage, side effects, and precautions — readable by anyone regardless of health literacy level.",
    screenLabel: "Drug Info screen",
    screenIndex: 4,
    accent: "#8b5cf6",
  },
  {
    label: "Adherence Dashboard",
    description: "A personal home screen that surfaces today's medications, recent adherence history, and one-tap access to scanning and scheduling.",
    screenLabel: "Home screen",
    screenIndex: 0,
    accent: "#0D9488",
  },
];

function ScreenCard({ screenIndex }: { screenIndex: number }) {
  const ScreenComponent = SCREEN_COMPONENTS[screenIndex] as React.ComponentType<{ initialScreen: number; screenOnly: boolean }>;
  return (
    <div
      style={{
        width: 260,
        height: 420,
        borderRadius: 20,
        overflow: "hidden",
        boxShadow: "0 8px 32px rgba(0,0,0,0.12), 0 2px 8px rgba(0,0,0,0.06)",
        flexShrink: 0,
        position: "relative",
        background: "white",
      }}
    >
      <div style={{ width: 320, transform: "scale(0.8125)", transformOrigin: "top left" }}>
        <ScreenComponent initialScreen={screenIndex} screenOnly={true} />
      </div>
    </div>
  );
}

export default function PillEdSolutionSection() {
  return (
    <section className="py-20 bg-paper">
      <div className="max-w-[1200px] mx-auto px-6">
        <p className="text-xs font-semibold text-accent uppercase tracking-widest mb-2">04 — Solution</p>
        <h2 className="text-3xl font-bold text-ink mb-4">Core Features</h2>
        <p className="text-ink/60 max-w-2xl mb-16">
          PillEd integrates six critical capabilities into a single app — a combination no competitor currently offers.
        </p>

        <div className="flex flex-col">
          {rows.map((row, i) => {
            const isEven = i % 2 === 1;
            const bg = isEven ? "bg-gray-50" : "bg-white";
            return (
              <div
                key={row.label}
                className={`${bg} rounded-2xl`}
                style={{ marginBottom: 2 }}
              >
                <div
                  className={`flex flex-col md:flex-row items-center gap-10 px-8 py-10 ${isEven ? "md:flex-row-reverse" : ""}`}
                >
                  {/* Text side */}
                  <div className="flex-1 min-w-0">
                    <div
                      className="pl-4 mb-5"
                      style={{ borderLeft: `3px solid ${row.accent}` }}
                    >
                      <p
                        className="text-xs font-semibold uppercase tracking-widest mb-1"
                        style={{ color: row.accent }}
                      >
                        {row.screenLabel}
                      </p>
                      <h3 className="text-xl font-bold text-ink mb-3">{row.label}</h3>
                      <p className="text-sm text-ink/60 leading-relaxed">{row.description}</p>
                    </div>
                  </div>

                  {/* Screen card */}
                  <div className="flex-shrink-0">
                    <ScreenCard screenIndex={row.screenIndex} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
