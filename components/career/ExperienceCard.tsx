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
        <h2 className="text-lg font-bold" style={{ color: "#166534" }}>{experience.company}</h2>
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

      {/* Roles */}
      <div className="divide-y divide-gray-100">
        {experience.roles.map((role, roleIdx) => (
          <div key={roleIdx} className="p-6 md:p-8">
            {/* Role title + Current Role badge + period */}
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
              <div className="flex flex-wrap items-center gap-2.5">
                <p className="font-bold text-ink leading-snug">{role.title}</p>
                {role.isCurrentRole && (
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-medium border border-accent text-accent">
                    Current Role
                  </span>
                )}
              </div>
              <span className="text-sm text-ink/40 whitespace-nowrap sm:pt-0.5">{role.period}</span>
            </div>

            {/* Summary */}
            <p className="text-sm text-ink/60 leading-relaxed mb-7">{role.summary}</p>

            {/* Categories */}
            <div className="flex flex-col gap-6">
              {role.categories.map((cat) => (
                <div key={cat.label}>
                  {/* Category label */}
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-bold uppercase tracking-widest text-amber-500">
                      {cat.label}
                    </span>
                    <div className="flex-1 h-px bg-gray-100" />
                  </div>

                  {/* Initiatives */}
                  <div className="flex flex-col gap-3">
                    {cat.initiatives.map((init, i) => (
                      <div
                        key={i}
                        className="rounded-lg border border-gray-200 bg-transparent hover:bg-gray-50 transition-colors duration-200 px-5 py-4"
                      >
                        <p className="text-sm leading-relaxed flex gap-2 mb-3 pb-3 border-b border-gray-100">
                          <span className="font-semibold shrink-0 text-gray-800">• Problem:</span>
                          <span className="text-ink/65">{init.problem}</span>
                        </p>
                        <p className="text-sm text-ink/70 leading-relaxed flex gap-2">
                          <span className="font-semibold shrink-0 text-gray-800">• What:</span>
                          {init.what}
                        </p>
                        <p className="text-sm text-ink/70 leading-relaxed flex gap-2 mt-1.5">
                          <span className="font-semibold shrink-0 text-gray-800">• How:</span>
                          {init.how}
                        </p>
                        <div className="mt-3 pl-3 border-l-2" style={{ borderColor: "#166534" }}>
                          <p className="text-sm font-semibold" style={{ color: "#166534" }}>
                            {init.result}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Awards */}
            {role.awards && (
              <div className="flex items-center gap-2.5 mt-6 px-4 py-3 rounded-lg border border-accent/15 bg-accent/8">
                <Trophy size={15} className="flex-shrink-0 text-gray-800" strokeWidth={1.75} />
                <p className="text-sm font-medium text-gray-800">{role.awards}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
