"use client";

import Link from "next/link";
import { Trophy } from "lucide-react";
import { type ExperienceItem } from "@/data/experience";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function ExperienceCard({ experience }: { experience: ExperienceItem }) {
  const cardRef = useScrollReveal<HTMLDivElement>({ threshold: 0.1 });

  return (
    <div ref={cardRef} className="reveal-x-left border border-gray-200 rounded-xl bg-white overflow-hidden">
      {/* Company header */}
      <div className="px-6 py-5 bg-gray-50 border-b border-gray-200">
        <h2 className="text-2xl font-bold" style={{ color: "#166534" }}>{experience.company}</h2>
        <p className="text-sm text-ink/50 mt-0.5">{experience.location}</p>
        {experience.tags && experience.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mt-3">
            {experience.tags.map((tag) => (
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

      {/* Role */}
      <div className="p-6 md:p-8">
        {/* Role title + Current Role badge + period */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
          <div className="flex flex-wrap items-center gap-2.5">
            <p className="font-bold text-ink leading-snug">{experience.role}</p>
            {experience.isCurrentRole && (
              <span className="px-2.5 py-0.5 rounded-full text-xs font-medium border border-accent text-accent">
                Current Role
              </span>
            )}
          </div>
          <span className="text-sm text-ink/40 whitespace-nowrap sm:pt-0.5">{experience.period}</span>
        </div>

        {/* Intro */}
        <p className="text-sm text-ink/60 leading-relaxed mb-7">{experience.intro}</p>

        {/* Theme clusters */}
        <div className="flex flex-col gap-6">
          {experience.clusters.map((cluster) => (
            <div key={cluster.theme}>
              {/* Theme label */}
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs font-bold uppercase tracking-widest text-amber-500">
                  {cluster.theme}
                </span>
                <div className="flex-1 h-px bg-gray-100" />
              </div>

              {/* Achievements */}
              <div className="flex flex-col gap-3">
                {cluster.achievements.map((a, i) => (
                  <div
                    key={i}
                    className="rounded-lg border border-gray-200 bg-transparent hover:bg-gray-50 transition-colors duration-200 px-5 py-4"
                  >
                    <p className="text-sm text-ink/70 leading-relaxed">
                      {a.title && <span className="font-semibold text-gray-800">{a.title} · </span>}
                      {a.description}
                    </p>
                    <div className="mt-3 pl-3 border-l-2" style={{ borderColor: "#166534" }}>
                      <p className="text-sm font-semibold" style={{ color: "#166534" }}>
                        {a.impact}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {cluster.link && (
                <Link
                  href={cluster.link.href}
                  className="mt-4 flex items-center rounded-lg px-4 py-3 border border-accent/20 bg-accent/4 hover:bg-accent/8 transition-colors group"
                >
                  <p className="text-xs font-semibold text-accent group-hover:underline leading-snug">
                    {cluster.link.label}
                  </p>
                </Link>
              )}
            </div>
          ))}
        </div>

        {/* Awards */}
        {experience.awards && (
          <div className="flex items-center gap-2.5 mt-6 px-4 py-3 rounded-lg border border-accent/15 bg-accent/8">
            <Trophy size={15} className="flex-shrink-0 text-gray-800" strokeWidth={1.75} />
            <p className="text-sm font-medium text-gray-800">{experience.awards}</p>
          </div>
        )}

        {/* Previous role note */}
        {experience.previousRole && (
          <p className="text-sm text-ink/50 leading-relaxed mt-6">{experience.previousRole}</p>
        )}
      </div>
    </div>
  );
}
