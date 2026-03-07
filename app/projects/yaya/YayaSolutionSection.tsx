"use client";

import dynamic from "next/dynamic";
import FeatureCarousel, { FeatureItem } from "@/components/FeatureCarousel";

const YayaPrototype = dynamic(
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  () => import("@/projects/Yaya/Prototype/YayaPrototype"),
  {
    ssr: false,
    loading: () => (
      <div
        style={{
          height: 640,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#999",
          fontSize: 14,
        }}
      >
        Loading…
      </div>
    ),
  }
);

const features: FeatureItem[] = [
  {
    emoji: "💡",
    title: "Personalized Savings Recommendations",
    bg: "bg-teal-50",
    description:
      "Analyzes spending patterns against similar user profiles in the same geography to surface specific, actionable savings opportunities at the merchant level.",
  },
  {
    emoji: "🔔",
    title: "Spending Alerts",
    bg: "bg-blue-50",
    description:
      "Real-time alerts when users exceed predicted budgets, paired with contextual guidance to help course-correct immediately.",
  },
  {
    emoji: "🏦",
    title: "Access to Approved Financial Products",
    bg: "bg-purple-50",
    description:
      "Curated, vetted financial products (credit cards, loans, insurance) ranked by personalized fit score — protecting users from predatory offerings.",
  },
  {
    emoji: "📈",
    title: "Auto-Investment",
    bg: "bg-amber-50",
    description:
      "Identifies low-risk investment opportunities to put idle savings to work with minimal user intervention.",
  },
  {
    emoji: "🎯",
    title: "Long-Term Goal Planning",
    bg: "bg-rose-50",
    description:
      "Ingests financial goals, timelines, and projected costs to build manageable, step-by-step plans for major milestones like buying a car or saving for college.",
  },
  {
    emoji: "📚",
    title: "Financial Education",
    bg: "bg-gray-100",
    description:
      "Promotes financial literacy through curated content partnerships, helping users build knowledge alongside their financial health.",
  },
];

export default function YayaSolutionSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-[1200px] mx-auto px-6">
        <p className="text-xs font-semibold text-accent uppercase tracking-widest mb-2">
          04 — Solution
        </p>
        <h2 className="text-3xl font-bold text-ink mb-4">Core Features</h2>
        <p className="text-ink/60 max-w-2xl mb-12">
          AI Financial Coach combines real-time spending intelligence, personalized financial product access, and
          long-term goal planning in one platform — powered by a self-improving data engine.
        </p>

        <div className="flex gap-12 items-start">
          {/* Left: feature carousel — 60% */}
          <div className="flex-[3] min-w-0">
            <FeatureCarousel features={features} />
          </div>

          {/* Right: embedded phone mockup — 40% */}
          <div className="flex-[2] justify-center hidden md:flex">
            <div style={{ position: "sticky", top: 120 }}>
              <div
                style={{
                  width: 320,
                  borderRadius: 44,
                  background: "#111",
                  overflow: "hidden",
                  boxShadow: "0 25px 60px rgba(0,0,0,0.35)",
                }}
              >
                <YayaPrototype />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
