import Link from "next/link";
import { type Project } from "@/data/content";

interface Props {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: Props) {
  const imageLeft = index % 2 === 0;

  return (
    <article id={project.slug} className="py-16 border-b border-gray-100 last:border-b-0">

      {/* ── Mobile: stacked. Desktop: side-by-side with overlap ── */}
      <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-8 md:gap-0">

        {imageLeft ? (
          <>
            {/* Image — cols 1-8 */}
            <div className="md:col-start-1 md:col-span-8 md:row-start-1">
              <ImageBlock />
            </div>
            {/* Text — cols 6-12 (overlaps image at cols 6-8) */}
            <div className="md:col-start-6 md:col-span-7 md:row-start-1 z-10 flex flex-col gap-6 md:py-10 md:pl-10">
              <ProjectInfo project={project} />
            </div>
          </>
        ) : (
          <>
            {/* Text — cols 1-7 */}
            <div className="md:col-start-1 md:col-span-7 md:row-start-1 z-10 flex flex-col gap-6 md:py-10 md:pr-10 order-2 md:order-1">
              <ProjectInfo project={project} />
            </div>
            {/* Image — cols 5-12 (overlaps text at cols 5-7) */}
            <div className="md:col-start-5 md:col-span-8 md:row-start-1 order-1 md:order-2">
              <ImageBlock />
            </div>
          </>
        )}

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
        <p className="text-xs font-semibold text-accent tracking-widest uppercase mb-2">
          Featured Project
        </p>
        <h2 className="text-2xl md:text-3xl font-bold text-ink leading-snug">
          {project.title}
        </h2>
      </div>

      {/* Dark description box */}
      <div className="bg-neutral-900 rounded-xl p-6 shadow-xl">
        <p className="text-sm text-white leading-relaxed">
          {project.problem}
        </p>
        {project.solution && (
          <>
            <div className="my-4 h-px bg-white/10" />
            <p className="text-sm text-white leading-relaxed">
              {project.solution}
            </p>
          </>
        )}
      </div>

      {/* Tags — plain text, spaced */}
      <div className="flex flex-wrap gap-x-5 gap-y-1">
        {project.tags.map((tag) => (
          <span key={tag} className="text-sm text-ink/50 font-medium">
            {tag}
          </span>
        ))}
      </div>

      {/* CTA */}
      <Link
        href={href}
        className="inline-flex items-center gap-2 text-sm font-medium text-ink/40 hover:text-accent transition-colors group"
        aria-label={`View ${project.title}`}
      >
        {project.detailHref && (
          <span className="text-accent group-hover:underline">
            View Case Study
          </span>
        )}
        <ExternalLinkIcon />
      </Link>
    </>
  );
}

function ImageBlock() {
  return (
    <div className="w-full aspect-[16/11] bg-gray-100 rounded-2xl border border-gray-200 flex flex-col items-center justify-center gap-3">
      <ScreenshotIcon />
      <span className="text-sm text-gray-400 font-medium">
        Prototype screenshot coming soon
      </span>
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
