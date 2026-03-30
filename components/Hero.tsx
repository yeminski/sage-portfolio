"use client";
import Image from "next/image";
import RotatingTitle from "@/components/RotatingTitle";
import EmailButton from "@/components/EmailButton";

export default function Hero() {
  return (
    <section id="hero" className="bg-white" style={{ position: "relative", overflow: "hidden", isolation: "isolate" }}>
<div className="max-w-[1200px] mx-auto px-6 w-full py-20" style={{ position: "relative", zIndex: 1 }}>
        <div className="flex flex-col md:flex-row items-center gap-10">

          {/* ── Left: text ── */}
          <div className="flex-1">
            <p className="hero-enter text-sm text-ink/40 font-medium mb-3" style={{ animationDelay: "0ms" }}>Hi There</p>

            <h1 className="hero-enter font-serif text-7xl md:text-8xl font-bold text-ink leading-none tracking-tight mb-4" style={{ animationDelay: "120ms" }}>
              I&apos;m <span style={{ color: "#1C4A2E" }}>Sage</span>
            </h1>

            <p className="hero-enter font-serif text-2xl md:text-3xl font-semibold text-ink leading-none tracking-tight mb-2 whitespace-nowrap" style={{ animationDelay: "240ms" }}>
              Product Manager who&apos;s also a
            </p>
            <div className="hero-enter font-serif text-2xl md:text-3xl font-semibold text-ink leading-none tracking-tight mb-4" style={{ animationDelay: "360ms" }}>
              <RotatingTitle />
            </div>

            <p className="text-base text-ink mb-10">
              Product Manager &nbsp;|&nbsp; MBA &nbsp;|&nbsp; CFA Level I
            </p>

            {/* Social links */}
            <div className="hero-enter flex flex-wrap items-center gap-6" style={{ animationDelay: "500ms" }}>
              <a
                href="https://www.linkedin.com/in/sage-seo/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-ink/60 hover:text-ink transition-colors"
              >
                <LinkedInIcon />
                LinkedIn
              </a>
              <EmailButton />
              <a
                href="/sage-resume.pdf"
                download="Yeji (Sage) Seo - Resume.pdf"
                className="flex items-center gap-2 text-sm text-ink/60 hover:text-ink transition-colors"
              >
                <ResumeIcon />
                Resume
              </a>
            </div>
          </div>

          {/* ── Right: photo ── */}
          <div className="hero-image-enter flex-1 flex justify-center" style={{ animationDelay: "500ms" }}>
            <Image
              src="/hero-image.png"
              alt="Sage, Product Manager"
              width={1024}
              height={1024}
              className="w-full max-w-md h-auto"
              priority
            />
          </div>

        </div>
      </div>
    </section>
  );
}

/* ── Icons ──────────────────────────────────────────────────────────────── */

function LinkedInIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function ResumeIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="8" y1="13" x2="16" y2="13" />
      <line x1="8" y1="17" x2="13" y2="17" />
    </svg>
  );
}
