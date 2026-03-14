"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { projects } from "@/data/content";

export default function ProjectCarousel() {
  const [active, setActive] = useState(0);
  const [visible, setVisible] = useState(true);
  const touchStartX = useRef<number | null>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-visible");
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  function goTo(i: number) {
    const next = ((i % projects.length) + projects.length) % projects.length;
    if (next === active) return;
    setVisible(false);
    setTimeout(() => {
      setActive(next);
      setVisible(true);
    }, 180);
  }

  function handleTouchStart(e: React.TouchEvent) {
    touchStartX.current = e.touches[0].clientX;
  }

  function handleTouchEnd(e: React.TouchEvent) {
    if (touchStartX.current === null) return;
    const delta = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(delta) > 50) delta > 0 ? goTo(active + 1) : goTo(active - 1);
    touchStartX.current = null;
  }

  const project = projects[active];

  return (
    <div
      ref={cardRef}
      className="reveal relative"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      style={{ opacity: visible ? 1 : 0, transition: "opacity 0.18s ease" }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-start">

        {/* Image + flanking arrows anchored to image */}
        <div className="relative">
          <div className="img-zoom rounded-2xl overflow-hidden bg-teal-50 aspect-[4/3] flex items-center justify-center">
            {project.image ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={`${project.image}?v=2`}
                alt={project.title}
                className="w-full h-full object-contain p-6"
              />
            ) : (
              <div className="flex flex-col items-center gap-2 text-ink/25">
                <PlaceholderIcon />
                <span className="text-xs">Screenshot coming soon</span>
              </div>
            )}
          </div>

          {/* Left arrow — anchored to image center */}
          <button
            onClick={() => goTo(active - 1)}
            aria-label="Previous project"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-full pl-0 pr-3 flex items-center justify-center text-ink/20 hover:text-navy transition-colors"
          >
            <LargeChevron direction="left" />
          </button>

        </div>

        {/* Content */}
        <div className="flex flex-col justify-center">

          <p className="text-[10px] font-semibold text-navy uppercase tracking-widest mb-3">
            Featured Project
          </p>

          <h3 className="text-2xl md:text-3xl font-bold text-ink leading-tight mb-6">
            {project.title}
          </h3>

          <div className="border-l-[3px] border-accent pl-4 mb-5">
            <p className="text-[10px] font-bold text-accent uppercase tracking-widest mb-1.5">Problem</p>
            <p className="text-sm text-ink/60 leading-relaxed">{project.problem}</p>
          </div>

          {project.solution && (
            <div className="border-l-[3px] border-amber-500 pl-4 mb-6">
              <p className="text-[10px] font-bold text-amber-500 uppercase tracking-widest mb-1.5">Solution</p>
              <p className="text-sm text-ink/60 leading-relaxed">{project.solution}</p>
            </div>
          )}

          <div className="flex flex-wrap gap-x-4 gap-y-1 mb-6">
            {project.tags.map((tag) => (
              <span key={tag} className="text-xs text-ink/40 font-medium">{tag}</span>
            ))}
          </div>

          {project.detailHref && (
            <Link
              href={project.detailHref}
              className="arrow-hover inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-teal-600 transition-colors"
            >
              View Project Details
              <span className="arrow"><ExternalLinkIcon /></span>
            </Link>
          )}

        </div>
      </div>

      {/* Right arrow — anchored to right edge of full card */}
      <button
        onClick={() => goTo(active + 1)}
        aria-label="Next project"
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full pl-3 flex items-center justify-center text-ink/20 hover:text-navy transition-colors"
      >
        <LargeChevron direction="right" />
      </button>

    </div>
  );
}

/* ── Icons ──────────────────────────────────────────────────────────────── */

function LargeChevron({ direction }: { direction: "left" | "right" }) {
  return (
    <svg
      width="20"
      height="40"
      viewBox="0 0 20 40"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {direction === "left"
        ? <polyline points="14 4 4 20 14 36" />
        : <polyline points="6 4 16 20 6 36" />}
    </svg>
  );
}

function ExternalLinkIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

function PlaceholderIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <circle cx="8.5" cy="8.5" r="1.5" />
      <polyline points="21 15 16 10 5 21" />
    </svg>
  );
}
