"use client";
import { useState } from "react";
import Link from "next/link";
import { projects } from "@/data/content";
import ProjectThumbnail from "@/components/ProjectThumbnail";
import PillEdPrototypeCTA from "@/app/projects/pilled/PillEdPrototypeCTA";
import YayaPrototypeCTA from "@/app/projects/yaya/YayaPrototypeCTA";

const PrototypeCTA: Record<string, React.ReactNode> = {
  pilled: <PillEdPrototypeCTA variant="text" />,
  yaya: <YayaPrototypeCTA variant="text" />,
};

const solutionColors: Record<string, { border: string; label: string }> = {
  "echo-japan-payments": { border: "border-teal-600",   label: "text-teal-600"   },
  "cross-border-payments": { border: "border-indigo-500", label: "text-indigo-500" },
  pilled: { border: "border-teal-600",   label: "text-teal-600"   },
  yaya:   { border: "border-amber-700",  label: "text-amber-700"  },
};

const FEATURED_IDS  = ["echo-japan-payments", "cross-border-payments"];
const CASE_COMP_IDS = ["pilled", "yaya"];

function ProjectSlide({
  projectIds,
  categoryLabel,
}: {
  projectIds: string[];
  categoryLabel: string;
}) {
  const [active, setActive] = useState(0);
  const [visible, setVisible] = useState(true);

  const items = projects
    .filter((p) => projectIds.includes(p.id))
    .sort((a, b) => projectIds.indexOf(a.id) - projectIds.indexOf(b.id));

  function goTo(i: number) {
    const next = ((i % items.length) + items.length) % items.length;
    if (next === active) return;
    setVisible(false);
    setTimeout(() => {
      setActive(next);
      setVisible(true);
    }, 160);
  }

  const project = items[active];
  const sc = solutionColors[project.id] ?? { border: "border-teal-600", label: "text-teal-600" };

  return (
    <div>
      {/* Category header row */}
      <div className="flex items-center justify-between mb-8">
        <span className="text-[10px] font-semibold text-accent uppercase tracking-widest">
          {categoryLabel}
        </span>

        <div className="flex items-center gap-3">
          {/* Dot indicators */}
          <div className="flex gap-1.5">
            {items.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                aria-label={`Go to project ${i + 1}`}
                className={`w-1.5 h-1.5 rounded-full transition-colors ${
                  i === active ? "bg-accent" : "bg-ink/15"
                }`}
              />
            ))}
          </div>

          {/* Arrow buttons */}
          <div className="flex gap-1">
            <button
              onClick={() => goTo(active - 1)}
              aria-label="Previous project"
              className="w-7 h-7 flex items-center justify-center rounded border border-ink/15 text-ink/35 hover:text-ink hover:border-ink/30 transition-colors"
            >
              <ChevronLeft />
            </button>
            <button
              onClick={() => goTo(active + 1)}
              aria-label="Next project"
              className="w-7 h-7 flex items-center justify-center rounded border border-ink/15 text-ink/35 hover:text-ink hover:border-ink/30 transition-colors"
            >
              <ChevronRight />
            </button>
          </div>
        </div>
      </div>

      {/* Slide content */}
      <div
        style={{ opacity: visible ? 1 : 0, transition: "opacity 0.16s ease" }}
        className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-start"
      >
        <ProjectThumbnail
          projectId={project.id}
          alt={project.title}
          href={project.detailHref}
        />

        <div className="flex flex-col pt-2">
          <h3 className="text-2xl md:text-3xl font-bold text-ink leading-tight mb-6">
            {project.detailHref ? (
              <Link
                href={project.detailHref}
                className="hover:text-accent transition-colors"
              >
                {project.title}
              </Link>
            ) : (
              project.title
            )}
          </h3>

          <div className="border-l-[3px] border-accent pl-4 mb-5">
            <p className="text-[10px] font-bold text-accent uppercase tracking-widest mb-1.5">
              Problem
            </p>
            <p className="text-sm text-ink/60 leading-relaxed">{project.problem}</p>
          </div>

          {project.solution && (
            <div className={`border-l-[3px] ${sc.border} pl-4 mb-6`}>
              <p className={`text-[10px] font-bold ${sc.label} uppercase tracking-widest mb-1.5`}>
                Solution
              </p>
              <p className="text-sm text-ink/60 leading-relaxed">{project.solution}</p>
            </div>
          )}

          <div className="flex flex-wrap gap-x-4 gap-y-1 mb-6">
            {project.tags.map((tag) => (
              <span key={tag} className="text-xs text-ink/40 font-medium">
                {tag}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-8">
            {project.detailHref && (
              <Link
                href={project.detailHref}
                className="arrow-hover inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-teal-600 transition-colors"
              >
                View Project Details
                <span className="arrow">
                  <ExternalLinkIcon />
                </span>
              </Link>
            )}
            {PrototypeCTA[project.id]}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ProjectsPreview() {
  return (
    <section
      id="projects"
      className="bg-white py-16 border-t border-gray-200"
      style={{ position: "relative", overflow: "hidden", isolation: "isolate" }}
    >
      <div
        className="max-w-[1200px] mx-auto px-6"
        style={{ position: "relative", zIndex: 1 }}
      >
        <span className="text-[10px] font-semibold text-accent uppercase tracking-widest">
          Selected Work
        </span>
        <h2 className="font-serif text-3xl font-bold text-ink mt-2 mb-1">Projects</h2>
        <p className="text-ink/50 mb-14">What I build beyond 9-5</p>

        <div className="flex flex-col gap-16">
          <ProjectSlide projectIds={FEATURED_IDS} categoryLabel="Featured Work" />
          <div className="border-t border-gray-100" />
          <ProjectSlide
            projectIds={CASE_COMP_IDS}
            categoryLabel="Case Competition · Interactive Prototype"
          />
        </div>

        <div className="flex justify-center mt-14">
          <Link
            href="/projects"
            className="arrow-hover inline-flex items-center gap-2 px-8 py-3 border border-ink/25 rounded text-sm font-medium text-ink hover:bg-gray-50 transition-colors"
          >
            View all projects <span className="arrow">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ── Icons ─────────────────────────────────────────────────────────────────── */

function ChevronLeft() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <polyline points="8 2 4 6 8 10" />
    </svg>
  );
}

function ChevronRight() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <polyline points="4 2 8 6 4 10" />
    </svg>
  );
}

function ExternalLinkIcon() {
  return (
    <svg
      width="13"
      height="13"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}
