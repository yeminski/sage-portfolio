"use client";

import { useState } from "react";
import dynamic from "next/dynamic";

const PillEdPrototype = dynamic(
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  () => import("@/projects/PillEd/prototype/PillEdPrototype"),
  {
    ssr: false,
    loading: () => (
      <div className="flex items-center justify-center h-48 text-sm text-ink/40">
        Loading prototype…
      </div>
    ),
  }
);

export default function PillEdPrototypeCTA({
  variant = "link",
}: {
  variant?: "link" | "button";
}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      {variant === "link" ? (
        <button
          onClick={() => setOpen(true)}
          className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:underline transition-colors"
        >
          Try Interactive Prototype →
        </button>
      ) : (
        <button
          onClick={() => setOpen(true)}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-accent text-accent text-sm font-semibold hover:bg-accent hover:text-white transition-colors"
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
          <div className="flex min-h-full items-center justify-center p-6">
          <div className="bg-white rounded-2xl w-full max-w-2xl relative shadow-2xl">
            <button
              onClick={() => setOpen(false)}
              aria-label="Close prototype"
              className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 text-ink/60 hover:text-ink text-xl transition-colors"
            >
              ×
            </button>
            <PillEdPrototype />
          </div>
          </div>
        </div>
      )}
    </>
  );
}
