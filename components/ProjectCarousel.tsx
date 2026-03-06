"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { projects } from "@/data/content";

export default function ProjectCarousel() {
  const [active, setActive] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerW, setContainerW] = useState(1000);

  useEffect(() => {
    const update = () => {
      if (containerRef.current) setContainerW(containerRef.current.offsetWidth);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  // Card width: 85% of container on mobile, capped at 600px on desktop
  const cardW = Math.min(Math.round(containerW * 0.85), 600);
  const gap = 24;
  const trackOffset = containerW / 2 - active * (cardW + gap) - cardW / 2;

  const prev = () => setActive((a) => Math.max(0, a - 1));
  const next = () => setActive((a) => Math.min(projects.length - 1, a + 1));

  return (
    <div ref={containerRef} className="relative select-none">

      {/* ── Track ── */}
      <div className="overflow-hidden">
        <div
          className="flex"
          style={{
            gap,
            transform: `translateX(${trackOffset}px)`,
            transition: "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
            willChange: "transform",
          }}
        >
          {projects.map((project, i) => {
            const isActive = i === active;
            return (
              <div
                key={project.id}
                style={{
                  width: cardW,
                  flexShrink: 0,
                  transform: `scale(${isActive ? 1 : 0.9})`,
                  transition: "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                  transformOrigin: "center top",
                  cursor: project.id === "coming-soon" ? "default" : isActive ? "default" : "pointer",
                  position: "relative",
                }}
                onClick={() => project.id !== "coming-soon" && !isActive && setActive(i)}
              >
                {/* Card */}
                {project.id === "coming-soon" ? (
                  <div className="rounded-2xl overflow-hidden bg-gray-50 border border-dashed border-gray-300">
                    <div className="w-full aspect-[16/10] flex flex-col items-center justify-center gap-3">
                      <span className="text-3xl">🔒</span>
                      <p className="text-sm font-medium text-ink/40">Case Study Coming Soon</p>
                      <p className="text-xs text-ink/25">Currently being documented</p>
                    </div>
                  </div>
                ) : (
                <div
                  className="rounded-2xl overflow-hidden bg-paper border border-gray-200"
                  style={{
                    boxShadow: isActive
                      ? "0 20px 60px rgba(0,0,0,0.12)"
                      : "none",
                    transition: "box-shadow 0.5s",
                  }}
                >
                  {/* Product image */}
                  <div className="w-full aspect-[16/10] bg-gray-100 border-b border-gray-200 overflow-hidden flex items-center justify-center">
                    {project.image ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={`${project.image}?v=2`}
                        alt={project.title}
                        className="w-full h-full object-contain"
                      />
                    ) : (
                      <>
                        <ScreenshotIcon />
                        <span className="text-xs text-gray-400">
                          Prototype screenshot coming soon
                        </span>
                      </>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <p className="text-xs font-semibold text-accent tracking-widest uppercase mb-1">
                      {project.category} · {project.year}
                    </p>
                    <h3 className="text-xl font-bold text-ink mb-4 leading-snug">
                      {project.title}
                    </h3>

                    {/* Problem */}
                    <p className="text-sm text-ink/55 leading-relaxed line-clamp-2 mb-3">
                      {project.problem}
                    </p>

                    {/* Problem → Solution bridge */}
                    {project.solution && (
                      <>
                        <div className="flex items-center gap-2 mb-3">
                          <div className="flex-1 h-px bg-gray-100" />
                          <span className="text-gray-300 text-xs">↓</span>
                          <div className="flex-1 h-px bg-gray-100" />
                        </div>
                        {/* Solution */}
                        <div className="border-l-2 border-accent bg-accent/5 rounded-r-lg px-3 py-2 mb-4">
                          <p className="text-sm text-ink/70 leading-relaxed line-clamp-2">
                            {project.solution}
                          </p>
                        </div>
                      </>
                    )}

                    {/* Tags */}
                    <div className="flex flex-wrap gap-x-4 gap-y-1 mb-5">
                      {project.tags.map((tag) => (
                        <span key={tag} className="text-xs text-ink/40 font-medium">
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* CTA */}
                    {project.detailHref ? (
                      <Link
                        href={project.detailHref}
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:underline"
                      >
                        View Case Study
                        <ExternalLinkIcon />
                      </Link>
                    ) : (
                      <span className="text-xs text-ink/30">Case study coming soon</span>
                    )}
                  </div>
                </div>
                )}

                {/* Inactive overlay */}
                {!isActive && (
                  <div
                    className="absolute inset-0 rounded-2xl"
                    style={{
                      background: "rgba(245,245,245,0.75)",
                      transition: "opacity 0.4s",
                      pointerEvents: "none",
                    }}
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* ── Arrows ── */}
      <button
        onClick={prev}
        disabled={active === 0}
        aria-label="Previous project"
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-paper border border-gray-200 shadow-sm text-ink/40 hover:text-ink disabled:opacity-20 transition-all"
      >
        <ChevronLeft />
      </button>
      <button
        onClick={next}
        disabled={active === projects.length - 1}
        aria-label="Next project"
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-paper border border-gray-200 shadow-sm text-ink/40 hover:text-ink disabled:opacity-20 transition-all"
      >
        <ChevronRight />
      </button>

      {/* ── Dot indicators ── */}
      <div className="flex justify-center items-center gap-2 mt-6">
        {projects.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            aria-label={`Go to project ${i + 1}`}
            style={{
              height: 7,
              width: i === active ? 24 : 7,
              borderRadius: 99,
              background: i === active ? "#0D9488" : "rgba(15,15,15,0.18)",
              transition: "width 0.3s cubic-bezier(0.4,0,0.2,1), background 0.3s",
            }}
          />
        ))}
      </div>

    </div>
  );
}

/* ── Icons ──────────────────────────────────────────────────────────────── */

function ScreenshotIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#d1d5db" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <circle cx="8.5" cy="8.5" r="1.5" />
      <polyline points="21 15 16 10 5 21" />
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

function ChevronLeft() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="15 18 9 12 15 6" />
    </svg>
  );
}

function ChevronRight() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="9 18 15 12 9 6" />
    </svg>
  );
}
