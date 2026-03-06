import { hero } from "@/data/content";

export default function Footer() {
  return (
    <footer className="py-12 bg-ink text-paper/70">
      <div className="max-w-[1200px] mx-auto px-6 flex flex-col items-center gap-4 text-center">
        <p className="text-paper font-semibold">{hero.name}</p>
        <p className="text-sm text-paper/50">{hero.tagline}</p>

        <div className="flex flex-wrap justify-center gap-6 mt-2">
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
          <a
            href="/resume.pdf"
            download
            className="text-sm text-accent hover:text-accent/80 transition-colors"
          >
            Resume Download
          </a>
        </div>

        <p className="text-xs text-paper/30 mt-4">
          © {new Date().getFullYear()} {hero.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
