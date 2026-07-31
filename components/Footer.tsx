import { hero } from "@/data/content";
import LetsTalk from "@/components/LetsTalk";

export default function Footer({ letsTalkBg }: { letsTalkBg?: string }) {
  return (
    <>
    <LetsTalk className={letsTalkBg} />
    <footer className="py-12 bg-ink text-paper/70">
      <div className="max-w-[1200px] mx-auto px-6 flex flex-col items-center text-center">
        <p className="text-sm text-paper">Sage Seo &nbsp;|&nbsp; Product Manager &nbsp;|&nbsp; MBA &nbsp;|&nbsp; CFA Level 1</p>

        <div className="flex flex-wrap justify-center gap-6" style={{ marginTop: "8px" }}>
          <a
            href="mailto:sage.yeji.seo@gmail.com"
            className="text-sm text-accent hover:text-accent/80 transition-colors"
          >
            Email
          </a>
          <a
            href="https://www.linkedin.com/in/sage-seo/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-accent hover:text-accent/80 transition-colors"
          >
            LinkedIn
          </a>
        </div>

        <p className="text-xs text-paper/60" style={{ marginTop: "15px" }}>
          Designed, built, and iterated by Sage, using Claude Code and Cursor as development tools.
        </p>
        <p className="text-xs text-paper/60" style={{ marginTop: "6px" }}>
          © {new Date().getFullYear()} {hero.name}. All rights reserved.
        </p>
      </div>
    </footer>
    </>
  );
}
