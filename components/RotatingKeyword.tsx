"use client";

import { useEffect, useState } from "react";

const KEYWORDS = [
  "0-to-1 PM",
  "Fintech Enthusiast",
  "Strategist",
  "Design Thinker",
  "Data-Driven",
  "AI Native",
];

const HOLD_MS = 2600;
const FADE_MS = 380;

export default function RotatingKeyword() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIndex((i) => (i + 1) % KEYWORDS.length);
        setVisible(true);
      }, FADE_MS);
    }, HOLD_MS + FADE_MS);

    return () => clearInterval(timer);
  }, []);

  return (
    <span
      className="text-accent font-semibold"
      style={{
        transition: `opacity ${FADE_MS}ms ease`,
        opacity: visible ? 1 : 0,
        display: "inline-block",
        minWidth: "9ch",
      }}
      aria-live="polite"
      aria-atomic="true"
    >
      {KEYWORDS[index]}
    </span>
  );
}
