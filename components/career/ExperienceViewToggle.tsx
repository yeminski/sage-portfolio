"use client";

import { useState } from "react";
import { experiences } from "@/data/experience";
import { projects } from "@/data/content";
import ExperienceCard from "./ExperienceCard";

/* ─── Types ─────────────────────────────────────────────── */
type ExpertiseEntry = {
  company: string;
  roleTitle: string;
  period: string;
  initiatives: { what: string; how: string; result: string }[];
};

type FlatInitiative = {
  company: string;
  roleTitle: string;
  period: string;
  categoryLabel: string;
  what: string;
  how: string;
  result: string;
  tags: string[];
};

/* ─── Expertise grouping ─────────────────────────────────── */
const expertiseGroupMap: Record<string, string> = {
  "0-to-1 MVP": "0-to-1 Product",
  "0-to-1 Mobile App": "0-to-1 Product",
  "UX Optimization": "UX & Experimentation",
  "Web Optimization": "UX & Experimentation",
  "API & Platform": "API & Platform",
  "Personalization": "Personalization",
  "Monetization": "Monetization",
  "Market Expansion": "Market Expansion",
  "B2B Project Management": "B2B & Operations",
  "SaaS Strategy": "SaaS & AI",
};

const expertiseGroups = [
  { key: "0-to-1 Product",      shortLabel: "0-to-1",          description: "Building net-new products from problem definition through scoping, validation, and launch — across mobile, web, and companion apps." },
  { key: "UX & Experimentation", shortLabel: "UX",              description: "Improving user flows through funnel analysis, behavioral data, and iterative A/B testing to drive activation and retention." },
  { key: "API & Platform",       shortLabel: "API",             description: "Connecting internal and external systems through API-driven integrations to automate workflows and enable data-driven product decisions." },
  { key: "Personalization",      shortLabel: "personalization", description: "Building recommendation and ranking systems that surface the right content to the right users at the right moment." },
  { key: "Monetization",         shortLabel: "monetization",    description: "Designing pricing models and monetization systems that balance upfront conversion with long-term revenue growth." },
  { key: "Market Expansion",     shortLabel: "expansion",       description: "Leading international expansion — from market research and GTM strategy to localization, compliance, and payments." },
  { key: "B2B & Operations",     shortLabel: "B2B",             description: "Managing end-to-end B2B project execution across global accounts, from pitch through delivery." },
  { key: "SaaS & AI",            shortLabel: "SaaS & AI",       description: "Translating user needs into AI-driven SaaS feature concepts, validated through financial modeling and executive alignment." },
];

/* ─── Search keyword aliases ─────────────────────────────── */
const keywordAliases: Record<string, string[]> = {
  fintech:        ["payment", "FX", "cross-border", "fintech"],
  ai:             ["AI", "AI/ML", "OCR", "machine learning", "recommendation engine", "personalized"],
  payment:        ["payment", "FX", "cross-border"],
  platform:       ["API", "integration", "system", "pipeline", "dashboard"],
  growth:         ["retention", "activation", "DAU", "CTR", "conversion", "lift"],
  "user research":["interview", "PMF", "qualitative", "user need"],
  startup:        ["early-stage", "runway", "MVP", "0-to-1"],
  data:           ["behavioral", "funnel", "segmentation", "analytics", "metrics"],
  international:  ["Japan", "cross-border", "localization", "FX", "compliance"],
  ecommerce:      ["D2C", "e-commerce", "checkout", "ranking", "recommendation"],
};

const RECOMMENDED = [
  "API", "0-to-1", "onboarding",
  "monetization", "mobile", "personalization", "B2B", "SaaS", "growth", "AI", "payment",
];

/* ─── Helpers ────────────────────────────────────────────── */
function buildFlatList(): FlatInitiative[] {
  const flat: FlatInitiative[] = [];
  for (const exp of experiences) {
    for (const role of exp.roles) {
      for (const cat of role.categories) {
        for (const init of cat.initiatives) {
          flat.push({
            company: exp.company,
            roleTitle: role.title,
            period: role.period,
            categoryLabel: cat.label,
            what: init.what,
            how: init.how,
            result: init.result,
            tags: role.tags ?? [],
          });
        }
      }
    }
  }
  return flat;
}

function expandQuery(query: string): string[] {
  const lower = query.toLowerCase().trim();
  const stemmed = lower.endsWith("s") ? lower.slice(0, -1) : null;
  const aliases = keywordAliases[lower] ?? keywordAliases[stemmed ?? ""] ?? [];
  return [...new Set([lower, ...(stemmed ? [stemmed] : []), ...aliases])];
}

function matchesQuery(item: FlatInitiative, terms: string[]): boolean {
  // Only match against the initiative's own content — not role-level tags
  const haystack = [
    item.categoryLabel,
    item.what,
    item.how,
    item.result,
  ].join(" ").toLowerCase();
  return terms.some((t) => haystack.includes(t.toLowerCase()));
}

/* ─── Initiative card (shared between Expertise & Search views) ── */
function InitiativeCard({ init }: { init: { what: string; how: string; result: string } }) {
  return (
    <div className="rounded-lg border border-gray-200 bg-transparent hover:bg-gray-50 transition-colors duration-200 px-5 py-4">
      <p className="text-sm text-ink/70 leading-relaxed flex gap-2">
        <span className="font-semibold shrink-0 text-gray-800">• What:</span>
        {init.what}
      </p>
      <p className="text-sm text-ink/70 leading-relaxed flex gap-2 mt-1.5">
        <span className="font-semibold shrink-0 text-gray-800">• How:</span>
        {init.how}
      </p>
      <div className="mt-3 pl-3 border-l-2" style={{ borderColor: "#166534" }}>
        <p className="text-sm font-semibold" style={{ color: "#166534" }}>{init.result}</p>
      </div>
    </div>
  );
}

/* ─── Main toggle ────────────────────────────────────────── */
type View = "standard" | "expertise" | "search";

export default function ExperienceViewToggle() {
  const [view, setView] = useState<View>("standard");

  const tabs: { key: View; label: string }[] = [
    { key: "standard",  label: "Standard" },
    { key: "expertise", label: "By Expertise" },
    { key: "search",    label: "Search" },
  ];

  return (
    <div>
      {/* Toggle */}
      <div className="flex gap-2 mb-4">
        {tabs.map(({ key, label }) => (
          <button
            key={key}
            onClick={() => setView(key)}
            className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors cursor-pointer ${
              view === key
                ? "bg-accent text-white border-accent"
                : "text-gray-500 bg-transparent border-gray-400 hover:text-gray-700 hover:border-gray-500"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {view === "standard"  && <StandardView />}
      {view === "expertise" && <ExpertiseView />}
      {view === "search"    && <SearchView />}
    </div>
  );
}

/* ─── Standard view ──────────────────────────────────────── */
function StandardView() {
  return (
    <div className="flex flex-col gap-8">
      {experiences.map((exp) => (
        <ExperienceCard key={exp.company} experience={exp} />
      ))}
    </div>
  );
}

/* ─── Expertise view ─────────────────────────────────────── */
function ExpertiseView() {
  const [selected, setSelected] = useState<string | null>(null);

  const groupMap = new Map<string, ExpertiseEntry[]>();
  for (const exp of experiences) {
    for (const role of exp.roles) {
      for (const cat of role.categories) {
        const group = expertiseGroupMap[cat.label];
        if (!group) continue;
        if (!groupMap.has(group)) groupMap.set(group, []);
        groupMap.get(group)!.push({
          company: exp.company,
          roleTitle: role.title,
          period: role.period,
          initiatives: cat.initiatives,
        });
      }
    }
  }

  const available = expertiseGroups.filter((g) => groupMap.has(g.key));
  const sorted = selected ? available.filter((g) => g.key === selected) : available;

  return (
    <div>
      {/* Filter strip */}
      <div className="flex flex-wrap gap-2 mb-4">
        {available.map(({ key, shortLabel }) => {
          const isActive = selected === key;
          return (
            <button
              key={key}
              onClick={() => setSelected(isActive ? null : key)}
              className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-colors cursor-pointer ${
                isActive
                  ? "bg-accent text-white border-accent"
                  : "text-ink/60 border-gray-200 hover:border-accent/40 hover:text-accent"
              }`}
            >
              {shortLabel}
            </button>
          );
        })}
      </div>

    <div className="flex flex-col gap-8">
      {sorted.map(({ key, description }) => {
        const entries = groupMap.get(key)!;
        return (
          <div key={key} className="border border-gray-200 rounded-xl bg-white overflow-hidden">
            <div className="px-6 py-5 bg-gray-50 border-b border-gray-200">
              <h2 className="text-lg font-bold" style={{ color: "#166534" }}>{key}</h2>
              <p className="text-sm text-ink/50 mt-1 leading-relaxed">{description}</p>
            </div>
            <div className="divide-y divide-gray-100">
              {entries.map((entry, i) => (
                <div key={i} className="p-6 md:p-8">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-5">
                    <p className="font-bold text-ink">{entry.company}</p>
                    <span className="text-xs text-ink/40 whitespace-nowrap">
                      {entry.roleTitle} · {entry.period}
                    </span>
                  </div>
                  <div className="flex flex-col gap-3">
                    {entry.initiatives.map((init, j) => (
                      <InitiativeCard key={j} init={init} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
    </div>
  );
}

/* ─── Search view ────────────────────────────────────────── */
function SearchView() {
  const [query, setQuery] = useState("");
  const flat = buildFlatList();

  const terms = query.trim() ? expandQuery(query) : [];

  // Match experience initiatives
  const expResults = terms.length ? flat.filter((item) => matchesQuery(item, terms)) : [];

  // Match projects (search title, tags, problem, solution)
  const projResults = terms.length
    ? projects.filter((p) => {
        const haystack = [p.title, p.category, ...(p.tags ?? []), p.problem ?? "", p.solution ?? ""]
          .join(" ")
          .toLowerCase();
        return terms.some((t) => haystack.includes(t.toLowerCase()));
      })
    : [];

  const hasResults = expResults.length > 0 || projResults.length > 0;

  // Group experience results by company
  const grouped = new Map<string, { roleTitle: string; period: string; items: FlatInitiative[] }>();
  for (const item of expResults) {
    const key = `${item.company}::${item.roleTitle}`;
    if (!grouped.has(key)) {
      grouped.set(key, { roleTitle: item.roleTitle, period: item.period, items: [] });
    }
    grouped.get(key)!.items.push(item);
  }

  return (
    <div>
      {/* Search input */}
      <div className="relative mb-4">
        <svg
          className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400"
          width="16" height="16" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
        >
          <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
        </svg>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search by skill, keyword, or industry…"
          className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 bg-white text-sm text-ink placeholder:text-ink/30 focus:outline-none focus:border-accent transition-colors"
        />
        {query && (
          <button
            onClick={() => setQuery("")}
            className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 cursor-pointer"
          >
            ✕
          </button>
        )}
      </div>

      {/* Recommended keywords */}
      <div className="mb-8">
        <p className="text-xs text-ink/40 mb-2.5 font-medium uppercase tracking-widest">Recommended</p>
        <div className="flex flex-wrap gap-2">
          {RECOMMENDED.map((kw) => (
            <button
              key={kw}
              onClick={() => setQuery(kw)}
              className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-colors cursor-pointer ${
                query.toLowerCase() === kw.toLowerCase()
                  ? "bg-accent text-white border-accent"
                  : "text-ink/60 border-gray-200 hover:border-accent/40 hover:text-accent"
              }`}
            >
              {kw}
            </button>
          ))}
        </div>
      </div>

      {/* Results */}
      {query.trim() === "" ? (
        <p className="text-sm text-ink/40 text-center py-12">
          Enter a keyword above to search across all experiences.
        </p>
      ) : !hasResults ? (
        <p className="text-sm text-ink/40 text-center py-12">
          No matches for &ldquo;{query}&rdquo;. Try a different keyword.
        </p>
      ) : (
        <div className="flex flex-col gap-8">
          {/* Work Experience first */}
          {grouped.size > 0 && (
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-ink/30 mb-4">Work Experience</p>
              <div className="flex flex-col gap-4">
                {Array.from(grouped.entries()).map(([key, { roleTitle, period, items }]) => {
                  const company = key.split("::")[0];
                  return (
                    <div key={key} className="border border-gray-200 rounded-xl bg-white overflow-hidden">
                      <div className="px-6 py-4 bg-gray-50 border-b border-gray-200">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                          <p className="font-bold" style={{ color: "#166534" }}>{company}</p>
                          <span className="text-xs text-ink/40 whitespace-nowrap">{roleTitle} · {period}</span>
                        </div>
                      </div>
                      <div className="p-6 flex flex-col gap-3">
                        {items.map((item, i) => (
                          <div key={i}>
                            <p className="text-[11px] font-semibold uppercase tracking-widest text-amber-500 mb-2">
                              {item.categoryLabel}
                            </p>
                            <InitiativeCard init={item} />
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Case Competition Projects last */}
          {projResults.length > 0 && (
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-ink/30 mb-4">Case Competition Projects</p>
              <div className="flex flex-col gap-4">
                {projResults.map((proj) => (
                  <a
                    key={proj.id}
                    href={proj.detailHref}
                    className="block border border-gray-200 rounded-xl bg-white hover:bg-gray-50 transition-colors duration-200 overflow-hidden"
                  >
                    <div className="px-6 py-4 border-b border-gray-100">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                        <p className="font-bold" style={{ color: "#166534" }}>{proj.title}</p>
                        <span className="text-xs text-ink/40 whitespace-nowrap">{proj.competition} · {proj.year}</span>
                      </div>
                    </div>
                    <div className="px-6 py-4">
                      <p className="text-sm text-ink/60 leading-relaxed mb-3">{proj.problem}</p>
                      {proj.aiNote && (
                        <div className="mb-3 pl-3 border-l-2" style={{ borderColor: "#166534" }}>
                          <p className="text-xs font-semibold uppercase tracking-widest mb-1.5" style={{ color: "#166534" }}>AI Usage</p>
                          <p className="text-sm text-ink/70 leading-relaxed">{proj.aiNote}</p>
                        </div>
                      )}
                      <div className="flex flex-wrap gap-1.5">
                        {proj.tags?.map((tag) => (
                          <span key={tag} className="px-2.5 py-0.5 rounded-full text-xs text-accent/80 bg-accent/8 border border-accent/15">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
