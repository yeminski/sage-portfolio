import Link from "next/link";

type TimelineItem = {
  yearLabel: string;
  period: string;
  title: string;
  company: string;
  description: string;
  isCurrent?: boolean;
};

const timelineItems: TimelineItem[] = [
  {
    yearLabel: "NOW",
    period: "Aug 2024 – Present",
    title: "Product Manager",
    company: "Epson America",
    isCurrent: true,
    description:
      "Owning service product strategy and monetization at enterprise scale — pricing architecture, go-to-market for new hardware launches, and driving service attach rate growth across the customer lifecycle.",
  },
  {
    yearLabel: "2025",
    period: "Oct 2025",
    title: "CFA Level I",
    company: "CFA Institute",
    description:
      "Passed CFA Level I while working full-time. Built rigorous fluency in financial analysis and valuation — the domain foundation to work credibly in fintech and speak the language of the finance professionals I build for.",
  },
  {
    yearLabel: "2023",
    period: "Sep 2023 – Aug 2024",
    title: "Product Manager",
    company: "ERA — AR Smart Glasses Startup",
    description:
      "Owned the 0-to-1 roadmap for a companion mobile app. Led 100+ user interviews to validate product-market fit, defined MVP scope, and shipped ahead of schedule — saving ~$100K in runway.",
  },
  {
    yearLabel: "Jun '23",
    period: "Jun – Aug 2023",
    title: "Product Management MBA Intern",
    company: "Epson America",
    description:
      "Defined product vision for a net-new SaaS solution, validated AI-driven features via proof of concept, and built financial models to guide MVP prioritization. Secured executive buy-in through strategic storytelling.",
  },
  {
    yearLabel: "2022",
    period: "2022 – 2024",
    title: "Full-Time MBA",
    company: "UCLA Anderson School of Management",
    description:
      "Pivoted from B2B sales into product management. Focused on product strategy, fintech, and technology management — translating frameworks into real PM practice through internships and case competitions.",
  },
  {
    yearLabel: "2021",
    period: "Nov 2021 – Jun 2022",
    title: "Product Manager, Vanity Table",
    company: "Echo Marketing",
    description:
      "My first formal PM title. Led cross-border payment expansion into Japan, platform localization, and a 0-to-1 mobile app launch at a D2C e-commerce company — exceeding both revenue and adoption targets.",
  },
  {
    yearLabel: "2019",
    period: "Aug 2019 – Aug 2021",
    title: "Overseas Sales Associate",
    company: "Intercos Korea",
    description:
      "Managed end-to-end B2B project execution across 20+ product launches for European and Asian clients at a global cosmetics ODM — my foundation in cross-functional coordination and international business.",
  },
];

function YearBadge({ item, align }: { item: TimelineItem; align: "left" | "right" }) {
  return (
    <div className={`flex ${align === "right" ? "justify-end" : "justify-start"}`}>
      <div
        className={`rounded-2xl px-6 py-3 ${
          item.isCurrent
            ? "bg-accent text-white"
            : "bg-gray-100 text-ink"
        }`}
      >
        <p className="text-2xl font-bold leading-none tracking-tight">{item.yearLabel}</p>
        <p className={`text-[11px] mt-1 font-medium ${item.isCurrent ? "text-white/70" : "text-ink/40"}`}>
          {item.period}
        </p>
      </div>
    </div>
  );
}

function ItemContent({ item, align }: { item: TimelineItem; align: "left" | "right" }) {
  return (
    <div className={align === "right" ? "text-right" : "text-left"}>
      <p className="text-base font-bold text-ink leading-snug">{item.title}</p>
      <p className="text-xs font-medium text-accent mt-1 mb-2">{item.company}</p>
      <p className="text-sm text-ink/60 leading-relaxed">{item.description}</p>
    </div>
  );
}

export default function CareerTimeline() {
  return (
    <section className="bg-paper py-16 border-t border-gray-100">
      <div className="max-w-[1200px] mx-auto px-6">

        <span className="text-xs font-semibold text-accent uppercase tracking-widest">
          Career Journey
        </span>
        <h2 className="text-3xl font-bold text-ink mt-2 mb-1">
          Professional Timeline
        </h2>
        <p className="text-ink/50 mb-14">
          From global B2B to startup to enterprise — the path that shaped how I build products
        </p>

        {/* ── Desktop: alternating zigzag ── */}
        <div className="hidden md:block relative">
          {/* Vertical center line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-3 bottom-3 w-px bg-gray-200" />

          <div className="flex flex-col gap-10">
            {timelineItems.map((item, i) => {
              const contentOnLeft = i % 2 === 0;
              return (
                <div key={i} className="grid grid-cols-[1fr_48px_1fr] items-center gap-0">
                  {/* Left slot */}
                  <div className="pr-5">
                    {contentOnLeft
                      ? <ItemContent item={item} align="right" />
                      : <YearBadge item={item} align="right" />}
                  </div>

                  {/* Center dot */}
                  <div className="flex justify-center relative z-10">
                    <div
                      className={`w-3.5 h-3.5 rounded-full ring-[3px] ring-paper ${
                        item.isCurrent ? "bg-accent" : "bg-accent/50"
                      }`}
                    />
                  </div>

                  {/* Right slot */}
                  <div className="pl-5">
                    {contentOnLeft
                      ? <YearBadge item={item} align="left" />
                      : <ItemContent item={item} align="left" />}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ── Mobile: single column left-line ── */}
        <div className="md:hidden relative">
          <div className="absolute left-[91px] top-2 bottom-2 w-px bg-gray-200" />
          {timelineItems.map((item, i) => (
            <div key={i} className="flex items-start mb-8 last:mb-0">
              <div className="w-[84px] shrink-0 text-right pr-4 pt-1">
                <span className={`text-sm font-bold ${item.isCurrent ? "text-accent" : "text-ink"}`}>
                  {item.yearLabel}
                </span>
                <p className="text-[10px] text-ink/40 mt-0.5 leading-snug">{item.period}</p>
              </div>
              <div className="w-[15px] shrink-0 flex justify-center pt-[7px] relative z-10">
                <div className={`w-2.5 h-2.5 rounded-full ring-[3px] ring-paper ${item.isCurrent ? "bg-accent" : "bg-accent/50"}`} />
              </div>
              <div className="flex-1 pl-5">
                <p className="font-bold text-ink text-sm leading-snug">{item.title}</p>
                <p className="text-xs text-accent mt-0.5 mb-1.5">{item.company}</p>
                <p className="text-sm text-ink/60 leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex justify-center mt-12">
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
