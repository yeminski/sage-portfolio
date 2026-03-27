"use client";
import Link from "next/link";
import { projects } from "@/data/content";
import PillEdPrototypeCTA from "@/app/projects/pilled/PillEdPrototypeCTA";
import YayaPrototypeCTA from "@/app/projects/yaya/YayaPrototypeCTA";
import ProjectThumbnail from "@/components/ProjectThumbnail";

const PrototypeCTA: Record<string, React.ReactNode> = {
  pilled: <PillEdPrototypeCTA variant="text" />,
  yaya: <YayaPrototypeCTA variant="text" />,
};

// Solution section accent colors per project
const solutionColors: Record<string, { border: string; label: string }> = {
  pilled: { border: "border-teal-600", label: "text-teal-600" },
  yaya:   { border: "border-amber-700", label: "text-amber-700" },
};

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

        <div className="flex flex-col gap-20">
          {projects.map((project, index) => {
            const imageFirst = index % 2 === 0;

            const imageCol = (
              <ProjectThumbnail
                projectId={project.id}
                alt={project.title}
                href={project.detailHref}
                className="self-stretch"
              />
            );

            const textCol = (
              <div className="flex flex-col justify-center py-4">
                <p className="text-[10px] font-semibold text-navy uppercase tracking-widest mb-3">
                  Featured Project
                </p>
                <h3 className="text-2xl md:text-3xl font-bold text-ink leading-tight mb-6">
                  {project.title}
                </h3>
                <div className="border-l-[3px] border-accent pl-4 mb-5">
                  <p className="text-[10px] font-bold text-accent uppercase tracking-widest mb-1.5">
                    Problem
                  </p>
                  <p className="text-sm text-ink/60 leading-relaxed">{project.problem}</p>
                </div>
                {project.solution && (() => {
                  const sc = solutionColors[project.id] ?? { border: "border-teal-600", label: "text-teal-600" };
                  return (
                    <div className={`border-l-[3px] ${sc.border} pl-4 mb-6`}>
                      <p className={`text-[10px] font-bold ${sc.label} uppercase tracking-widest mb-1.5`}>
                        Solution
                      </p>
                      <p className="text-sm text-ink/60 leading-relaxed">{project.solution}</p>
                    </div>
                  );
                })()}
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
            );

            return (
              <div
                key={project.id}
                className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-stretch"
              >
                {imageFirst ? (
                  <>
                    {imageCol}
                    {textCol}
                  </>
                ) : (
                  <>
                    <div className="order-2 md:order-1">{textCol}</div>
                    <div className="order-1 md:order-2 self-start mt-[76px]">{imageCol}</div>
                  </>
                )}
              </div>
            );
          })}
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
