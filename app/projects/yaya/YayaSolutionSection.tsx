"use client";

import dynamic from "next/dynamic";

// Screen index map: home=0, onboarding=1, spending=2, recommendations=3, goals=4, learn=5
function makeScreen(index: number) {
  return dynamic(
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    () => import("@/projects/Yaya/Prototype/YayaPrototype"),
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
    label: "Personalized Savings Recommendations",
    description: "Analyzes your spending against similar households in your geography to surface specific, actionable savings opportunities — down to the merchant level.",
    screenLabel: "Home screen",
    screenIndex: 0,
    accent: "#0D9488",
  },
  {
    label: "Spending Alerts",
    description: "Real-time push alerts when predicted budgets are exceeded, paired with contextual guidance to help users course-correct immediately — not at month-end.",
    screenLabel: "Spending screen",
    screenIndex: 2,
    accent: "#ef4444",
  },
  {
    label: "Vetted Financial Products",
    description: "Curated credit cards, loans, and insurance ranked by a personalized fit score — protecting users from predatory offerings while expanding their financial options.",
    screenLabel: "Recommendations screen",
    screenIndex: 3,
    accent: "#6366f1",
  },
  {
    label: "Goal Planning",
    description: "Input a goal, timeline, and cost — the app breaks it into manageable monthly milestones and tracks progress automatically against real spending data.",
    screenLabel: "Goals screen",
    screenIndex: 4,
    accent: "#f59e0b",
  },
  {
    label: "AI-Powered Onboarding",
    description: "Income level, savings targets, and household context — collected in under two minutes and used to cold-start the recommendation engine with zero prior data.",
    screenLabel: "Onboarding screen",
    screenIndex: 1,
    accent: "#8b5cf6",
  },
  {
    label: "Financial Education",
    description: "Curated content partnerships promote financial literacy alongside portfolio growth — so users build knowledge and confidence as their financial health improves.",
    screenLabel: "Learn screen",
    screenIndex: 5,
    accent: "#3b82f6",
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

export default function YayaSolutionSection() {
  return (
    <section className="py-20 bg-paper">
      <div className="max-w-[1200px] mx-auto px-6">
        <p className="text-xs font-semibold text-accent uppercase tracking-widest mb-2">04 — Solution</p>
        <h2 className="text-3xl font-bold text-ink mb-4">Core Features</h2>
        <p className="text-ink/60 max-w-2xl mb-16">
          AI Financial Coach combines real-time spending intelligence, personalized product access, and long-term goal planning — powered by a self-improving data engine.
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
