"use client";

import dynamic from "next/dynamic";
import FeatureCarousel, { FeatureItem } from "@/components/FeatureCarousel";

const PillEdPrototype = dynamic(
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  () => import("@/projects/PillEd/prototype/PillEdPrototype"),
  {
    ssr: false,
    loading: () => (
      <div
        style={{
          height: 620,
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
    emoji: "📷",
    title: "OCR Medication Scan",
    bg: "bg-teal-50",
    description:
      "Point your camera at any medication to instantly identify it. Image recognition matches pills against a comprehensive drug database at 90%+ accuracy.",
  },
  {
    emoji: "⚠️",
    title: "Drug Interaction Alerts",
    bg: "bg-rose-50",
    description:
      "Automatic drug-drug interaction checking with risk level classification (High/Medium/Low). Real-time contraindication warnings based on user profile.",
  },
  {
    emoji: "⏰",
    title: "Smart Scheduling",
    bg: "bg-blue-50",
    description:
      "Personalized dosing schedules with push notifications, snooze support, dose tracking history, and adherence analytics.",
  },
  {
    emoji: "📖",
    title: "Digestible Drug Info",
    bg: "bg-purple-50",
    description:
      "Medical jargon translated into plain language. Dosage, storage, side effects, and precautions presented for users with any literacy level.",
  },
  {
    emoji: "💰",
    title: "Price Comparison",
    bg: "bg-amber-50",
    description:
      "Compare prices across retail pharmacy partners, add to a wishlist, and purchase directly through in-app integrations.",
  },
  {
    emoji: "👤",
    title: "Personalized Profile",
    bg: "bg-gray-100",
    description:
      "Age, gender, weight, pregnancy status, and allergies — all factored into personalized contraindication alerts and recommendations.",
  },
];

export default function PillEdSolutionSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-[1200px] mx-auto px-6">
        <p className="text-xs font-semibold text-accent uppercase tracking-widest mb-2">
          04 — Solution
        </p>
        <h2 className="text-3xl font-bold text-ink mb-4">Core Features</h2>
        <p className="text-ink/60 max-w-2xl mb-12">
          PillEd integrates six critical capabilities into a single app — a combination no competitor currently offers.
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
                <PillEdPrototype />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
