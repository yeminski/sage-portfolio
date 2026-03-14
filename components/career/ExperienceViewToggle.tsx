"use client";

import { useState } from "react";
import { experiences } from "@/data/experience";
import ExperienceCard from "./ExperienceCard";

export default function ExperienceViewToggle() {
  const [view, setView] = useState<"resume" | "expertise">("resume");

  return (
    <div>
      {/* Toggle */}
      <div className="flex gap-2 mb-8">
        {(["resume", "expertise"] as const).map((v) => (
          <button
            key={v}
            onClick={() => setView(v)}
            className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors cursor-pointer ${
              view === v
                ? "bg-accent text-white border-accent"
                : "text-gray-500 bg-transparent border-gray-200 hover:text-gray-700 hover:border-gray-300"
            }`}
          >
            {v === "resume" ? "Resume View" : "By Expertise"}
          </button>
        ))}
      </div>

      {view === "resume" ? (
        <div className="flex flex-col gap-12">
          {experiences.map((exp) => (
            <ExperienceCard key={exp.company} experience={exp} />
          ))}
        </div>
      ) : (
        <ExpertiseView />
      )}
    </div>
  );
}

const expertiseDescriptions: Record<string, string> = {
  "0-to-1 Product Building":
    "From problem definition and ideation through scoping, technical validation, and launch — shipping net-new products across mobile, web, and SaaS.",
  "Payments & Monetization":
    "Designing pricing models, payment flows, and monetization systems that balance upfront conversion with long-term revenue growth.",
  "Growth & Experimentation":
    "Running A/B tests, analyzing funnels, and iterating on features to drive activation, retention, and sustainable revenue growth.",
  "API & Systems Integration":
    "Connecting internal and external systems through API-driven integrations to automate workflows and enable data-driven product decisions.",
  "Business Case & Financial Modeling":
    "Building financial models and scenario analyses to quantify impact, support strategic prioritization, and secure executive alignment.",
  "B2B Sales & Project Management":
    "Leading end-to-end project execution across global B2B accounts — from pitch and contract through fulfillment and account growth.",
  "Financial Operations Exposure":
    "Hands-on exposure to B2B invoicing, AP/AR tracking, and cross-border payment workflows in international commerce contexts.",
};

function ExpertiseView() {
  // Build a map: category label → list of { company, role, period, bullets }
  const categoryMap = new Map<
    string,
    { company: string; role: string; period: string; bullets: string[] }[]
  >();

  for (const exp of experiences) {
    for (const role of exp.roles) {
      for (const cat of role.categories) {
        if (!categoryMap.has(cat.label)) categoryMap.set(cat.label, []);
        categoryMap.get(cat.label)!.push({
          company: exp.company,
          role: role.title,
          period: role.period,
          bullets: cat.bullets,
        });
      }
    }
  }

  const order = [
    "0-to-1 Product Building",
    "API & Systems Integration",
    "Growth & Experimentation",
    "Payments & Monetization",
    "Business Case & Financial Modeling",
    "B2B Sales & Project Management",
    "Financial Operations Exposure",
  ];
  const sorted = order.flatMap((label) =>
    categoryMap.has(label) ? [[label, categoryMap.get(label)!] as const] : []
  );

  return (
    <div className="flex flex-col gap-8">
      {sorted.map(([label, entries]) => (
        <div key={label} className="border border-gray-200 rounded-xl bg-white overflow-hidden">
          {/* Expertise header */}
          <div className="px-6 py-5 bg-gray-50 border-b border-gray-200">
            <h2 className="text-lg font-bold text-ink">{label}</h2>
            {expertiseDescriptions[label] && (
              <p className="text-sm text-ink/60 mt-1.5 leading-relaxed">
                {expertiseDescriptions[label]}
              </p>
            )}
          </div>

          {/* One block per company/role that contributed to this expertise */}
          <div className="divide-y divide-gray-100">
            {entries.map((entry, i) => (
              <div key={i} className="px-6 py-4">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-3">
                  <p className="font-semibold text-accent">{entry.company}</p>
                  <span className="text-xs text-ink/40 whitespace-nowrap">{entry.role} · {entry.period}</span>
                </div>
                <ul className="space-y-2.5">
                  {entry.bullets.map((bullet, j) => (
                    <li key={j} className="flex items-start gap-2.5 text-sm text-ink/70 leading-relaxed">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
