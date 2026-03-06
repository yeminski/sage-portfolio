"use client";

import { useEffect, useRef, useState } from "react";

const TITLES = [
  "0-to-1 PM",
  "Fintech Enthusiast",
  "Strategist",
  "Design Thinker",
  "Data-Driven",
  "AI Native",
];

const HOLD_MS = 3000;
const SLIDE_MS = 550;
const EASING = "cubic-bezier(0.4, 0, 0.2, 1)";

export default function RotatingTitle() {
  const [current, setCurrent] = useState(0);
  const [next, setNext] = useState<number | null>(null);
  const [sliding, setSliding] = useState(false);
  const reducedMotion = useRef(false);

  useEffect(() => {
    reducedMotion.current = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      const nextIdx = (current + 1) % TITLES.length;

      if (reducedMotion.current) {
        setCurrent(nextIdx);
        return;
      }

      setNext(nextIdx);
      // Double rAF: ensure the "next" span renders at translateY(110%) before we add the transition
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setSliding(true);
          setTimeout(() => {
            setCurrent(nextIdx);
            setNext(null);
            setSliding(false);
          }, SLIDE_MS);
        });
      });
    }, HOLD_MS);

    return () => clearInterval(timer);
  }, [current]);

  return (
    <div
      className="relative overflow-hidden"
      style={{ height: "1.3em" }}
      aria-live="polite"
      aria-atomic="true"
    >
      {/* Current title — slides out upward when sliding */}
      <span
        className="absolute inset-0 flex items-start"
        style={{
          transform: sliding ? "translateY(-110%)" : "translateY(0%)",
          transition: sliding
            ? `transform ${SLIDE_MS}ms ${EASING}`
            : "none",
          willChange: "transform",
        }}
      >
        <Highlight>{TITLES[current]}</Highlight>
      </span>

      {/* Next title — slides in from below */}
      {next !== null && (
        <span
          className="absolute inset-0 flex items-start"
          style={{
            transform: sliding ? "translateY(0%)" : "translateY(110%)",
            transition: sliding
              ? `transform ${SLIDE_MS}ms ${EASING}`
              : "none",
            willChange: "transform",
          }}
        >
          <Highlight>{TITLES[next]}</Highlight>
        </span>
      )}
    </div>
  );
}

function Highlight({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="inline-block px-2 rounded-sm"
      style={{
        backgroundColor: "rgba(180, 160, 210, 0.18)",
        padding: "3px 5px",
        marginTop: "5px",
        marginBottom: "5px",
      }}
    >
      {children}
    </span>
  );
}
