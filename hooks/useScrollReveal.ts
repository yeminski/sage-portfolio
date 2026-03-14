"use client";
import { useEffect, useRef } from "react";

interface Options {
  threshold?: number;
  delay?: number;
  className?: string;
}

export function useScrollReveal<T extends HTMLElement>(options: Options = {}) {
  const { threshold = 0.15, delay = 0, className = "reveal" } = options;
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (delay) el.style.transitionDelay = `${delay}ms`;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-visible");
          observer.disconnect();
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, delay, className]);

  return ref;
}
