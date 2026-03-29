"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";
import { type Project } from "@/data/content";
import ProjectThumbnail from "@/components/ProjectThumbnail";

interface Props {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: Props) {
  const imageLeft = index % 2 === 0;
  const cardRef = useRef<HTMLElement>(null);
  const revealClass = index === 0 ? "reveal-x-left" : "reveal-x-right";

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-visible");

          // Trigger tag-pop items after card is visible
          const tags = Array.from(el.querySelectorAll<HTMLElement>(".tag-pop-item"));
          tags.forEach((tag, i) => {
            setTimeout(() => {
              tag.classList.add("is-visible");
            }, 200 + i * 60);
          });

          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <article ref={cardRef} id={project.slug} className={`${revealClass} bg-white rounded-xl border border-gray-200 px-8 py-10 mb-6 last:mb-0`}>
      <div className={`flex flex-col md:flex-row items-center gap-10 ${imageLeft ? "" : "md:flex-row-reverse"}`}>

        {/* Image — 40% width */}
        <div className="w-full md:w-[40%] flex-shrink-0">
          <ProjectThumbnail
            projectId={project.id}
            alt={project.title}
            href={project.detailHref}
          />
        </div>

        {/* Text — 60% width */}
        <div className="flex-1 flex flex-col gap-6">
          <ProjectInfo project={project} />
        </div>

      </div>
    </article>
  );
}

function ProjectInfo({ project }: { project: Project }) {
  const href = project.detailHref ?? `/projects#${project.slug}`;

  return (
    <>
      {/* Label + Title */}
      <div>
        <p className="text-[10px] font-semibold text-accent tracking-widest uppercase mb-2">
          Featured Project
        </p>
        <h2 className="text-2xl md:text-3xl font-bold text-ink leading-snug">
          {project.detailHref ? (
            <Link href={project.detailHref} className="hover:text-accent transition-colors">
              {project.title}
            </Link>
          ) : (
            project.title
          )}
        </h2>
      </div>

      {/* Problem */}
      <div className="border-l-2 border-gray-200 pl-4">
        <p className="text-xs font-semibold text-accent uppercase tracking-widest mb-2">Problem</p>
        <p className="text-sm text-ink/55 leading-relaxed">{project.problem}</p>
      </div>

      {/* Solution */}
      {project.solution && (
        <div className="border-l-2 border-accent pl-4">
          <p className="text-xs font-semibold text-accent uppercase tracking-widest mb-2">Solution</p>
          <p className="text-sm text-ink/80 leading-relaxed">{project.solution}</p>
        </div>
      )}

      {/* Tags — plain text, spaced */}
      <div className="flex flex-wrap gap-x-5 gap-y-1">
        {project.tags.map((tag, i) => (
          <span
            key={tag}
            className="tag-pop-item tag-pop text-sm text-ink/50 font-medium"
            style={{ transitionDelay: `${i * 60}ms` }}
          >
            {tag}
          </span>
        ))}
      </div>

      {/* CTA */}
      <Link
        href={href}
        className="arrow-hover inline-flex items-center gap-2 text-sm font-medium text-ink/40 hover:text-accent transition-colors group"
        aria-label={`View ${project.title}`}
      >
        {project.detailHref && (
          <span className="text-accent group-hover:underline">
            View Project Details
          </span>
        )}
        <span className="arrow"><ExternalLinkIcon /></span>
      </Link>
    </>
  );
}

function ImageBlock({ image, title }: { image?: string; title: string }) {
  return (
    <div className="img-zoom w-full aspect-[4/3] rounded-2xl overflow-hidden bg-teal-50 flex items-center justify-center">
      {image ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={`${image}?v=2`}
          alt={title}
          className="w-full h-full object-contain"
        />
      ) : (
        <div className="flex flex-col items-center gap-3">
          <ScreenshotIcon />
          <span className="text-sm text-gray-400 font-medium">
            Prototype screenshot coming soon
          </span>
        </div>
      )}
    </div>
  );
}

function ExternalLinkIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
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

function ScreenshotIcon() {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#d1d5db"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <circle cx="8.5" cy="8.5" r="1.5" />
      <polyline points="21 15 16 10 5 21" />
    </svg>
  );
}
