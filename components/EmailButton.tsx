"use client";

import { useState, useRef, useEffect } from "react";

const EMAIL = "sage.yeji.seo@gmail.com";

export default function EmailButton() {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    if (open) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  function handleCopy() {
    navigator.clipboard.writeText(EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-2 text-sm text-ink/60 hover:text-ink transition-colors"
      >
        <EmailIcon />
        Email
      </button>

      {open && (
        <div className="absolute left-0 top-full mt-2 z-50 bg-gray-100 rounded-xl shadow-lg overflow-hidden"
          style={{ animation: "popIn 0.15s ease-out" }}>

          {/* Email address */}
          <div className="px-4 pt-3.5 pb-3 border-b border-ink/8">
            <p className="text-[9px] uppercase tracking-widest text-ink/50 mb-1">Email</p>
            <p className="text-xs text-ink font-medium whitespace-nowrap">{EMAIL}</p>
          </div>

          {/* Actions — side by side */}
          <div className="flex divide-x divide-ink/8">
            <button
              onClick={handleCopy}
              className="flex-1 flex items-center justify-center gap-1.5 px-4 py-2.5 text-xs text-ink/70 hover:text-ink hover:bg-ink/5 transition-colors"
            >
              {copied ? <CheckIcon /> : <CopyIcon />}
              {copied ? "Copied!" : "Copy"}
            </button>
            <a
              href={`mailto:${EMAIL}`}
              className="flex-1 flex items-center justify-center gap-1.5 px-4 py-2.5 text-xs text-ink/70 hover:text-ink hover:bg-ink/5 transition-colors"
            >
              <SendIcon />
              Send
            </a>
          </div>
        </div>
      )}

      <style>{`
        @keyframes popIn {
          from { opacity: 0; transform: translateY(4px) scale(0.97); }
          to   { opacity: 1; transform: translateY(0)   scale(1); }
        }
      `}</style>
    </div>
  );
}

function EmailIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function CopyIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="9" y="9" width="13" height="13" rx="2" />
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function SendIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="22" y1="2" x2="11" y2="13" />
      <polygon points="22 2 15 22 11 13 2 9 22 2" />
    </svg>
  );
}
