"use client";

import { useState } from "react";
import dynamic from "next/dynamic";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const YayaPrototype = dynamic(() => import("@/projects/Yaya/Prototype/YayaPrototype"), {
  ssr: false,
  loading: () => (
    <div style={{ width: 300, height: 600, background: "#f3f4f6", borderRadius: 20, display: "flex", alignItems: "center", justifyContent: "center", color: "#9ca3af", fontSize: 13 }}>
      Loading…
    </div>
  ),
});

// Natural user flow order
const screens = [
  {
    label: "Home",
    screenIndex: 0,
    accent: "#0D9488",
    title: "Personalized Savings Dashboard",
    description: "Analyzes your spending against similar households in your geography to surface specific, actionable savings opportunities — down to the merchant level.",
  },
  {
    label: "Onboarding",
    screenIndex: 1,
    accent: "#8b5cf6",
    title: "AI-Powered Onboarding",
    description: "Income level, savings targets, and household context — collected in under two minutes and used to cold-start the recommendation engine with zero prior data.",
  },
  {
    label: "Spending",
    screenIndex: 2,
    accent: "#ef4444",
    title: "Spending Alerts",
    description: "Real-time push alerts when predicted budgets are exceeded, paired with contextual guidance to help users course-correct immediately — not at month-end.",
  },
  {
    label: "Recommendations",
    screenIndex: 3,
    accent: "#6366f1",
    title: "Vetted Financial Products",
    description: "Curated credit cards, loans, and insurance ranked by a personalized fit score — protecting users from predatory offerings while expanding their financial options.",
  },
  {
    label: "Goals",
    screenIndex: 4,
    accent: "#f59e0b",
    title: "Goal Planning",
    description: "Input a goal, timeline, and cost — the app breaks it into manageable monthly milestones and tracks progress automatically against real spending data.",
  },
  {
    label: "Learn",
    screenIndex: 5,
    accent: "#3b82f6",
    title: "Financial Education",
    description: "Curated content partnerships promote financial literacy alongside portfolio growth — so users build knowledge and confidence as their financial health improves.",
  },
];

export default function YayaSolutionSection() {
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
                AI Financial Coach combines real-time spending intelligence, personalized product access, and long-term goal planning — powered by a self-improving data engine.
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
                  <YayaPrototype
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
