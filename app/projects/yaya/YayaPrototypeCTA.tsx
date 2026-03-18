"use client";

import { useState } from "react";
import dynamic from "next/dynamic";

const YayaPrototype = dynamic(
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  () => import("@/projects/Yaya/Prototype/YayaPrototype"),
  {
    ssr: false,
    loading: () => (
      <div className="flex items-center justify-center h-48 text-sm text-ink/40">
        Loading prototype…
      </div>
    ),
  }
);

export default function YayaPrototypeCTA({
  variant = "link",
}: {
  variant?: "link" | "button" | "text";
}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      {variant === "text" ? (
        <button
          onClick={() => setOpen(true)}
          className="arrow-hover inline-flex items-center gap-2 text-sm font-semibold text-amber-700 hover:text-amber-800 transition-colors"
        >
          Try Prototype
          <span className="arrow">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
          </span>
        </button>
      ) : (
        <button
          onClick={() => setOpen(true)}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-colors duration-200 ease-in-out"
          style={{ border: "1.5px solid #0D9488", color: "#0D9488", background: "transparent" }}
          onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.background = "#0D9488"; (e.currentTarget as HTMLButtonElement).style.color = "white"; }}
          onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.background = "transparent"; (e.currentTarget as HTMLButtonElement).style.color = "#0D9488"; }}
        >
          Try Interactive Prototype →
        </button>
      )}

      {open && (
        <div
          className="fixed inset-0 z-50 overflow-y-auto"
          style={{ background: "rgba(0,0,0,0.6)" }}
          onClick={(e) => {
            if (e.target === e.currentTarget) setOpen(false);
          }}
        >
          <div className="flex min-h-full items-center justify-center p-6" onClick={() => setOpen(false)}>
          <div className="bg-white rounded-2xl w-full max-w-2xl relative shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close prototype"
              className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 text-ink/60 hover:text-ink text-xl transition-colors"
            >
              ×
            </button>
            <YayaPrototype />
          </div>
          </div>
        </div>
      )}
    </>
  );
}
