"use client";

import { Trophy } from "lucide-react";
import { type ExperienceItem } from "@/data/experience";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function ExperienceCard({ experience }: { experience: ExperienceItem }) {
  const cardRef = useScrollReveal<HTMLDivElement>({ threshold: 0.1 });

  const allTags = Array.from(
    new Set(experience.roles.flatMap((r) => r.tags ?? []))
  );

  return (
    <div ref={cardRef} className="reveal-x-left border border-gray-200 rounded-xl bg-white overflow-hidden">
      {/* Company header */}
      <div className="px-6 py-5 bg-gray-50 border-b border-gray-200">
        <h2 className="text-lg font-bold text-ink">{experience.company}</h2>
        <p className="text-sm text-ink/50 mt-0.5">{experience.location}</p>
        {allTags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mt-3">
            {allTags.map((tag) => (
              <span
                key={tag}
                className="tag-pill px-2.5 py-0.5 rounded-full text-xs text-accent/80 bg-accent/8 border border-accent/15"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Roles */}
      <div className="divide-y divide-gray-100">
        {experience.roles.map((role, roleIdx) => (
          <div key={roleIdx} className="role-block p-6 md:p-8">

            {/* Role title + period */}
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
              <div className="flex flex-wrap items-center gap-2.5">
                <p className="font-bold text-ink leading-snug">{role.title}</p>
                {role.isCurrentRole && (
                  <span
                    className="px-2 py-0.5 rounded-full font-medium border border-accent text-accent"
                    style={{ fontSize: "11px" }}
                  >
                    Current Role
                  </span>
                )}
              </div>
              <span className="text-sm text-ink/40 whitespace-nowrap sm:pt-0.5">{role.period}</span>
            </div>

            {/* One-line summary */}
            <p className="text-sm text-ink/60 leading-relaxed mb-4">{role.summary}</p>

            {/* Always-visible bullets */}
            <ul className="space-y-2 mb-5">
              {role.bullets.map((bullet, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm text-ink/70 leading-relaxed">
                  <span className="mt-[7px] w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                  {bullet}
                </li>
              ))}
            </ul>

            {/* Awards callout */}
            {role.awards && (
              <div className="flex items-start gap-2.5 px-3.5 py-2.5 rounded-lg bg-accent/5 border border-accent/15">
                <Trophy size={14} className="flex-shrink-0 text-accent mt-0.5" strokeWidth={1.75} />
                <p className="text-xs text-accent leading-relaxed">{role.awards}</p>
              </div>
            )}

          </div>
        ))}
      </div>
    </div>
  );
}
