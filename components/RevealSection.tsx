"use client";
import { useEffect, useRef, type ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
  direction?: "up" | "left" | "right";
  stagger?: boolean;
}

export default function RevealSection({
  children,
  className = "",
  direction = "left",
  stagger = false,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-visible");
          if (stagger) {
            const items = el.querySelectorAll<HTMLElement>(".stagger-item");
            items.forEach((item, i) => {
              setTimeout(() => item.classList.add("is-visible"), 300 + i * 80);
            });
          }
          observer.disconnect();
        }
      },
      { threshold: 0.07 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [stagger]);

  const revealClass =
    direction === "up"
      ? "reveal"
      : direction === "left"
      ? "reveal-x-left"
      : "reveal-x-right";

  return (
    <div ref={ref} className={`${revealClass} ${className}`}>
      {children}
    </div>
  );
}
