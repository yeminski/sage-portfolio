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
    <section id="about" className="pt-14 pb-12 bg-paper">
      <div className="max-w-[1200px] mx-auto px-6">

        <span className="text-[10px] font-semibold text-accent uppercase tracking-widest block mb-2">About</span>
        <h2 className="font-serif text-3xl font-bold text-ink mb-1">About Me</h2>
        <p className="text-ink/50 mb-10">I build products at the intersection of finance, data, and user experience</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-10">
          {aboutItems.map((item) => {
            const Icon = iconMap[item.id];
            return (
              <div key={item.id} className="border-t border-ink/10 pt-5 pb-6">
                {/* Icon + title row */}
                <div className="flex items-center gap-3 mb-2.5">
                  {Icon && <Icon size={16} className="flex-shrink-0 text-accent" strokeWidth={1.75} />}
                  <h3 className="text-base font-semibold text-ink">{item.title}</h3>
                </div>
                {/* Description */}
                <p className="text-sm text-ink/55 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
