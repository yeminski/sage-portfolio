"use client";

import { useState } from "react";

export interface FeatureItem {
  emoji: string;
  title: string;
  bg: string;
  description: string;
}

export default function FeatureCarousel({
  features,
  ctaSlot,
}: {
  features: FeatureItem[];
  ctaSlot?: React.ReactNode;
}) {
  const [active, setActive] = useState(0);
  const f = features[active];
  const total = features.length;

  return (
    <div className="max-w-2xl mx-auto">
      {/* Card */}
      <div className="relative bg-paper border border-gray-200 rounded-2xl p-8 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-accent" />
        <span className="absolute top-5 right-6 text-xs font-medium text-ink/30">
          {active + 1} / {total}
        </span>
        <div
          className={`w-12 h-12 ${f.bg} rounded-xl flex items-center justify-center text-2xl mb-5`}
        >
          {f.emoji}
        </div>
        <h3 className="text-lg font-semibold text-ink mb-3">{f.title}</h3>
        <p className="text-sm text-ink/60 leading-relaxed">{f.description}</p>
      </div>

      {/* Nav row */}
      <div className="flex items-center justify-between mt-5 px-1">
        {/* Arrows */}
        <div className="flex gap-2">
          <button
            onClick={() => setActive((a) => Math.max(0, a - 1))}
            disabled={active === 0}
            aria-label="Previous feature"
            className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-200 text-ink/40 hover:text-ink hover:border-accent disabled:opacity-20 transition-all"
          >
            ←
          </button>
          <button
            onClick={() => setActive((a) => Math.min(total - 1, a + 1))}
            disabled={active === total - 1}
            aria-label="Next feature"
            className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-200 text-ink/40 hover:text-ink hover:border-accent disabled:opacity-20 transition-all"
          >
            →
          </button>
        </div>

        {/* Dot indicators */}
        <div className="flex items-center gap-1.5">
          {features.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              aria-label={`Go to feature ${i + 1}`}
              style={{
                height: 6,
                width: i === active ? 20 : 6,
                borderRadius: 99,
                background:
                  i === active ? "#0D9488" : "rgba(15,15,15,0.15)",
                transition: "all 0.3s cubic-bezier(0.4,0,0.2,1)",
                border: "none",
                padding: 0,
                cursor: "pointer",
              }}
            />
          ))}
        </div>
      </div>

      {/* Optional CTA slot */}
      {ctaSlot && (
        <div className="mt-8 flex justify-center">{ctaSlot}</div>
      )}
    </div>
  );
}
