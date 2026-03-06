"use client";

import { useState } from "react";
import { Trophy } from "lucide-react";
import { type ExperienceItem } from "@/data/experience";

export default function ExperienceCard({ experience }: { experience: ExperienceItem }) {
  const [openCategories, setOpenCategories] = useState<Set<string>>(new Set());

  function toggleCategory(key: string) {
    setOpenCategories((prev) => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });
  }

  const allTags = Array.from(
    new Set(experience.roles.flatMap((r) => r.tags ?? []))
  );

  return (
    <div className="border border-gray-200 rounded-xl bg-paper overflow-hidden">
      {/* Company header */}
      <div className="px-6 py-5 bg-gray-50 border-b border-gray-200">
        <h2 className="text-lg font-bold text-ink">{experience.company}</h2>
        <p className="text-sm text-ink/50 mt-0.5">{experience.location}</p>
        {allTags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mt-3">
            {allTags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-0.5 rounded-full text-xs text-accent/80 bg-accent/8 border border-accent/15"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Roles — stacked vertically, separated by divider */}
      <div className="divide-y divide-gray-100">
        {experience.roles.map((role, roleIdx) => {
          return (
            <div key={roleIdx} className="p-6 md:p-8">
              {/* Role title + period */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-5">
                <p className="font-semibold text-accent">{role.title}</p>
                <span className="text-sm text-ink/40 whitespace-nowrap">{role.period}</span>
              </div>

              {/* Description paragraphs */}
              <div className="space-y-3 mb-6">
                {role.description.map((para, i) => (
                  <p key={i} className="text-sm text-ink/70 leading-relaxed">
                    {para}
                  </p>
                ))}
              </div>

              {/* Awards callout */}
              {role.awards && (
                <div className="flex items-start gap-2.5 mb-5 px-3.5 py-2.5 rounded-lg bg-teal-50 border border-teal-100">
                  <Trophy size={14} className="flex-shrink-0 text-accent mt-0.5" strokeWidth={1.75} />
                  <p className="text-xs text-teal-700 leading-relaxed">{role.awards}</p>
                </div>
              )}

              {/* Category toggle buttons */}
              <div className="flex flex-wrap gap-2 mb-4">
                {role.categories.map((cat) => {
                  const key = `${roleIdx}-${cat.label}`;
                  const isOpen = openCategories.has(key);
                  return (
                    <button
                      key={cat.label}
                      onClick={() => toggleCategory(key)}
                      className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium border transition-all duration-150 cursor-pointer ${
                        isOpen
                          ? "bg-accent text-white border-accent shadow-sm shadow-accent/30"
                          : "bg-accent/10 text-accent border-accent/20 hover:bg-accent/20 hover:border-accent/40 hover:shadow-sm hover:shadow-accent/20"
                      }`}
                    >
                      {cat.label}
                      <svg
                        className={`w-3 h-3 flex-shrink-0 transition-transform duration-150 ${isOpen ? "rotate-180" : ""}`}
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M2 4L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                  );
                })}
              </div>

              {/* Category bullet panels */}
              <div className="space-y-3">
                {role.categories.map((cat) => {
                  const key = `${roleIdx}-${cat.label}`;
                  if (!openCategories.has(key)) return null;
                  return (
                    <div
                      key={cat.label}
                      className="rounded-lg bg-accent/5 border border-accent/15 p-4"
                    >
                      <p className="text-xs font-semibold text-accent uppercase tracking-widest mb-3">
                        {cat.label}
                      </p>
                      <ul className="space-y-2">
                        {cat.bullets.map((bullet, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2.5 text-sm text-ink/70 leading-relaxed"
                          >
                            <span className="mt-2 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                            {bullet}
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                })}
              </div>

            </div>
          );
        })}
      </div>
    </div>
  );
}
