"use client";

import { useState, useMemo } from "react";
import { searchIndex, type SearchEntry } from "@/data/content";

export default function SearchBar() {
  const [query, setQuery] = useState("");

  const results = useMemo<SearchEntry[]>(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return searchIndex.filter((entry) =>
      entry.text.toLowerCase().includes(q)
    );
  }, [query]);

  const hasQuery = query.trim().length > 0;

  return (
    <section id="search" className="py-20 bg-gray-50">
      <div className="max-w-[1200px] mx-auto px-6">
        <h2 className="text-3xl font-bold text-ink mb-2">
          Search My Portfolio
        </h2>
        <p className="text-ink/60 mb-8">
          Find skills, experiences, or projects by keyword.
        </p>

        {/* Input */}
        <div className="relative max-w-xl mx-auto mb-8">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-ink/30">
            <SearchIcon />
          </span>
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="e.g. payments, roadmap, CFA, Agile…"
            className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 bg-paper text-ink placeholder-ink/30 focus:outline-none focus:border-accent transition-colors"
          />
        </div>

        {/* Results */}
        {hasQuery && (
          <div className="max-w-xl mx-auto">
            {results.length === 0 ? (
              <p className="text-center text-ink/50 text-sm py-6">
                No matches for &ldquo;{query}&rdquo;
              </p>
            ) : (
              <ul className="space-y-3">
                {results.map((entry) => (
                  <li key={entry.id}>
                    <a
                      href={entry.anchor}
                      className="block border border-gray-200 rounded-lg p-4 bg-paper hover:border-accent transition-colors group"
                    >
                      <span className="text-xs font-semibold text-accent uppercase tracking-wide">
                        {entry.section}
                      </span>
                      <p className="mt-1 text-sm text-ink/80 group-hover:text-ink transition-colors">
                        {highlightMatch(entry.text, query)}
                      </p>
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}
      </div>
    </section>
  );
}

/** Wraps the matched substring in a <mark> element */
function highlightMatch(text: string, query: string) {
  const idx = text.toLowerCase().indexOf(query.toLowerCase());
  if (idx === -1) return text;
  return (
    <>
      {text.slice(0, idx)}
      <mark className="bg-accent/20 text-ink rounded px-0.5">
        {text.slice(idx, idx + query.length)}
      </mark>
      {text.slice(idx + query.length)}
    </>
  );
}

function SearchIcon() {
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
    >
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  );
}
