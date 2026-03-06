import Image from "next/image";
import RotatingTitle from "@/components/RotatingTitle";
import EmailButton from "@/components/EmailButton";

export default function Hero() {
  return (
    <section id="hero" className="bg-paper">
      <div className="max-w-[1200px] mx-auto px-6 w-full py-20">
        <div className="flex flex-col md:flex-row items-center gap-16">

          {/* ── Left: text ── */}
          <div className="flex-1">
            <p className="text-sm text-ink/40 mb-3">Hi There</p>

            <h1 className="text-7xl md:text-8xl font-bold text-ink leading-none tracking-tight mb-3">
              I&apos;m Sage
            </h1>

            <div className="text-3xl md:text-4xl font-semibold text-ink leading-none tracking-tight mb-3">
              <RotatingTitle />
            </div>

            <p className="text-base text-ink/40 mb-10">
              Product Manager. CFA Level I. MBA
            </p>

            {/* Social links */}
            <div className="flex flex-wrap items-center gap-6">
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
          <div className="flex-shrink-0 w-full max-w-sm md:max-w-md">
            <Image
              src="/sage-pm-character.png"
              alt="Sage — Product Manager"
              width={600}
              height={600}
              className="w-full h-auto"
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
