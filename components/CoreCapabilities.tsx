import Link from "next/link";
import { Rocket, Landmark, Compass, Pen, BarChart2, Sparkles, type LucideIcon } from "lucide-react";
import { aboutItems } from "@/data/content";

const iconMap: Record<string, LucideIcon> = {
  "zero-to-one": Rocket,
  "fintech-enthusiast": Landmark,
  "strategist": Compass,
  "design-thinker": Pen,
  "data-driven": BarChart2,
  "ai-native": Sparkles,
};

export default function CoreCapabilities() {
  return (
    <section id="about" className="py-24 bg-gray-100">
      <div className="max-w-[1200px] mx-auto px-6">

        <h2 className="text-3xl font-bold text-ink mb-1">About Me</h2>
        <p className="text-ink/50 mb-14">I build products at the intersection of finance, data, and user experience</p>

        {/* 3 × 2 grid — no card borders, just icon + text */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-12 mb-16">
          {aboutItems.map((item) => {
            const Icon = iconMap[item.id];
            return (
              <div key={item.id}>
                {/* Icon + title row */}
                <div className="flex items-center gap-3 mb-3">
                  {Icon && <Icon size={18} className="flex-shrink-0 text-accent" strokeWidth={1.75} />}
                  <h3 className="font-semibold text-ink">{item.title}</h3>
                </div>
                {/* Description */}
                <p className="text-sm text-ink/60 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="flex justify-center">
          <Link
            href="/experience"
            className="inline-block px-8 py-3 border border-ink/25 rounded text-sm font-medium text-ink hover:bg-gray-50 transition-colors"
          >
            Learn More about Experience
          </Link>
        </div>

      </div>
    </section>
  );
}
