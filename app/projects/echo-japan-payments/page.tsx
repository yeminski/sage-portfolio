import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RevealSection from "@/components/RevealSection";
import PaymentStateDiagram from "@/components/case-study/PaymentStateDiagram";
import DecisionCards from "@/components/case-study/DecisionCards";

export const metadata: Metadata = {
  title: "Cross-Border Payments | Sage",
  description:
    "Case study: designing an async payment system for Japan market entry — local payment methods, FX handling, reconciliation, and edge case logic.",
};

/* ─── Shared helpers ─────────────────────────────────────────────────────── */

function SectionLabel({ index, children }: { index: string; children: React.ReactNode }) {
  return (
    <p className="text-[10px] font-semibold text-accent uppercase tracking-widest mb-2">
      {index} — {children}
    </p>
  );
}

/* ─── Page ───────────────────────────────────────────────────────────────── */

export default function EchoJapanPaymentsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16 bg-white min-h-screen">
        <PageHero />
        <ContextProblemSection />
        <StateDiagramSection />
        <DecisionsSection />
        <FintechTranslationSection />
        <KeyDecisionsSection />
        <PageNav />
      </main>
      <Footer letsTalkBg="bg-white" />
    </>
  );
}

/* ─── 0. Hero ─────────────────────────────────────────────────────────────── */

const metrics = [
  { value: "+25%", label: "vs. revenue target", sub: "Japan launch" },
  { value: "+30%", label: "vs. penetration target", sub: "Japan market share" },
];

function PageHero() {
  return (
    <section className="bg-white border-b border-gray-200">
      <div className="max-w-[1200px] mx-auto px-6 pt-14 pb-16">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-sm text-ink/40 hover:text-ink transition-colors mb-10"
        >
          ← Back to Projects
        </Link>

        <div className="flex flex-wrap gap-2 mb-5 hero-enter" style={{ animationDelay: "0ms" }}>
          {["Product", "Payments", "Market Expansion"].map((t) => (
            <span key={t} className="px-3 py-1 rounded-full text-xs font-medium bg-accent/8 text-accent">
              {t}
            </span>
          ))}
        </div>

        <h1
          className="font-serif text-4xl md:text-5xl font-bold text-ink mb-3 hero-enter"
          style={{ animationDelay: "100ms" }}
        >
          Cross-Border Payments Infrastructure
        </h1>
        <p
          className="text-lg text-ink/50 max-w-2xl mb-12 hero-enter"
          style={{ animationDelay: "220ms" }}
        >
          Designing an async payment system for Japan market entry — local payment methods, FX handling,
          reconciliation, and edge case logic for a K-beauty e-commerce platform.
        </p>

        {/* Meta row */}
        <div
          className="flex flex-wrap gap-8 mb-12 pb-12 border-b border-gray-100 hero-enter"
          style={{ animationDelay: "300ms" }}
        >
          {[
            { label: "Company", value: "K-beauty e-commerce platform" },
            { label: "Role", value: "Product Manager" },
            { label: "Market", value: "US → Japan expansion" },
            { label: "Scope", value: "Payments · Async flows · Reconciliation" },
          ].map(({ label, value }) => (
            <div key={label}>
              <p className="text-xs font-semibold text-ink/40 uppercase tracking-widest mb-1">{label}</p>
              <p className="text-sm font-medium text-ink">{value}</p>
            </div>
          ))}
        </div>

        {/* Metric cards */}
        <div
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 hero-enter"
          style={{ animationDelay: "360ms" }}
        >
          {metrics.map((m) => (
            <div key={m.label} className="border border-gray-200 rounded-xl bg-gray-50 px-6 py-5">
              <p className="text-3xl font-bold font-serif" style={{ color: "#0D9488" }}>
                {m.value}
              </p>
              <p className="text-sm font-medium text-ink mt-1">{m.label}</p>
              <p className="text-xs text-ink/40 mt-0.5">{m.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── 1. Context & Problem ───────────────────────────────────────────────── */

const whatThisBroke = [
  "Inventory logic — hold or not while waiting for async confirmation?",
  "Order status communication — what do we tell the customer before payment clears?",
  "Settlement timing — confirmation events needed idempotent handling to prevent duplicates",
  "Reconciliation — every payment state needed a finance mapping",
];

function ContextProblemSection() {
  return (
    <RevealSection direction="up">
      <section className="py-16 bg-paper border-b border-gray-200">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left: context + core problem */}
            <div>
              <SectionLabel index="01">Background</SectionLabel>
              <h2 className="font-serif text-3xl font-bold text-ink mb-6">Context & Problem</h2>
              <p className="text-ink/65 leading-relaxed mb-8">
                After stabilizing the US platform, we identified Japan as the next expansion target.
                K-beauty had a clear white space at our price point with no direct competitor. But entering
                Japan meant rethinking the payment experience from scratch.
              </p>
              {/* Core problem callout */}
              <div className="border-l-4 border-amber-400 bg-amber-50/50 rounded-r-xl px-6 py-5">
                <p className="text-[10px] font-bold uppercase tracking-widest text-amber-600 mb-2">The Core Problem</p>
                <p className="text-base font-medium text-ink/85 leading-relaxed">
                  Our entire order system was built on synchronous payment confirmation. Konbini and bank
                  transfer — Japan&apos;s dominant payment methods — break that assumption. Confirmation can
                  take hours to days.
                </p>
              </div>
            </div>

            {/* Right: what this broke */}
            <div className="lg:pt-10">
              <p className="text-xs font-bold uppercase tracking-widest text-ink/40 mb-4">What this broke</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-3">
                {whatThisBroke.map((item, i) => (
                  <div
                    key={i}
                    className="flex gap-3 items-start border border-gray-200 rounded-lg bg-white px-4 py-4"
                  >
                    <span
                      className="w-5 h-5 rounded-full text-xs font-bold flex items-center justify-center shrink-0 mt-0.5 text-amber-700"
                      style={{ background: "rgba(251,191,36,0.15)" }}
                    >
                      {i + 1}
                    </span>
                    <p className="text-sm text-ink/65 leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </RevealSection>
  );
}

/* ─── 2. Payment State Diagram ───────────────────────────────────────────── */

function StateDiagramSection() {
  return (
    <RevealSection direction="up">
      <section className="py-16 bg-white border-b border-gray-200">
        <div className="max-w-[1200px] mx-auto px-6">
          <SectionLabel index="02">System Design</SectionLabel>
          <h2 className="font-serif text-3xl font-bold text-ink mb-2">Payment State Diagram</h2>
          <p className="text-sm text-ink/50 mb-10 max-w-xl">
            Every state a payment can reach, and what the system does at each one.
            Click any state to see system actions, customer communication, and edge case handling.
          </p>
          <PaymentStateDiagram />
        </div>
      </section>
    </RevealSection>
  );
}

/* ─── 3. What I Designed ─────────────────────────────────────────────────── */

function DecisionsSection() {
  return (
    <RevealSection direction="up">
      <section className="py-16 bg-paper border-b border-gray-200">
        <div className="max-w-[1200px] mx-auto px-6">
          <SectionLabel index="03">Design Decisions</SectionLabel>
          <h2 className="font-serif text-3xl font-bold text-ink mb-2">What I Designed</h2>
          <p className="text-sm text-ink/50 mb-8">
            Five decisions that shaped the system. Toggle technical detail for the full engineering rationale.
          </p>
          <DecisionCards />
        </div>
      </section>
    </RevealSection>
  );
}

/* ─── 4. Fintech Translation ─────────────────────────────────────────────── */

const fintechMappings = [
  { left: "Konbini / bank transfer async flow", right: "ACH transfer & delayed settlement" },
  { left: "Idempotent webhook handling", right: "Payment retry deduplication" },
  { left: "Partial payment edge cases", right: "Payment failure state management" },
  { left: "Reconciliation event mapping", right: "Real-time AR & ledger entries" },
];

function FintechTranslationSection() {
  return (
    <RevealSection direction="up">
      <section className="py-16 bg-white border-b border-gray-200">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left: heading + explanation */}
            <div>
              <SectionLabel index="04">Domain Connection</SectionLabel>
              <h2 className="font-serif text-3xl font-bold text-ink mb-6">Fintech Translation</h2>
              <p className="text-ink/65 leading-relaxed mb-6">
                The design challenge here is identical to core fintech problems: how do you build a
                reliable, customer-friendly system when payment confirmation isn&apos;t instant?
              </p>
              <div
                className="border-l-4 px-5 py-4 rounded-r-xl"
                style={{ borderColor: "#0D9488", backgroundColor: "rgba(13,148,136,0.04)" }}
              >
                <p className="text-sm leading-relaxed text-ink/70">
                  Async flows, settlement latency, idempotent event processing, and reconciliation logic
                  designed here map directly to how fintech products handle ACH transfers and payment
                  failure state management.
                </p>
              </div>
            </div>

            {/* Right: mapping table */}
            <div className="lg:pt-10">
              <div className="grid grid-cols-2 gap-x-3 gap-y-0 mb-3">
                <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 px-1">This project</p>
                <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 px-1">Fintech equivalent</p>
              </div>
              <div className="flex flex-col gap-2">
                {fintechMappings.map((m, i) => (
                  <div key={i} className="grid grid-cols-2 gap-3 items-center">
                    <div className="bg-gray-50 border border-gray-200 rounded-lg px-4 py-3">
                      <p className="text-sm text-ink/70 leading-snug">{m.left}</p>
                    </div>
                    <div
                      className="rounded-lg px-4 py-3"
                      style={{ backgroundColor: "rgba(13,148,136,0.06)", border: "1px solid rgba(13,148,136,0.15)" }}
                    >
                      <p className="text-sm leading-snug" style={{ color: "#0D9488" }}>{m.right}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </RevealSection>
  );
}

/* ─── 5. Key Decisions ───────────────────────────────────────────────────── */

const keyDecisions = [
  {
    label: "No Inventory Hold",
    description:
      "Customer LTV > inventory efficiency. High repeat-purchase segment validated with cancel rate data that stockout collision risk was within acceptable range.",
  },
  {
    label: "Automation + Human Fallback",
    description:
      "Full automation breaks edge cases. Full manual doesn't scale. Designed automated happy path with explicit CS exception workflows for partial, expired, and unmatched transfers.",
  },
  {
    label: "Reconciliation Mapped Upfront",
    description:
      "Finance alignment at design time, not post-launch cleanup. Every state transition pre-defined as a reconciliation event — real-time AR visibility from day one.",
  },
];

function KeyDecisionsSection() {
  return (
    <RevealSection direction="up">
      <section className="py-16 bg-paper border-b border-gray-200">
        <div className="max-w-[1200px] mx-auto px-6">
          <SectionLabel index="05">Trade-offs</SectionLabel>
          <h2 className="font-serif text-3xl font-bold text-ink mb-8">Key Decisions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {keyDecisions.map((d) => (
              <div key={d.label} className="border border-gray-200 rounded-xl bg-white px-6 py-5">
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center mb-4"
                  style={{ backgroundColor: "rgba(13,148,136,0.08)" }}
                >
                  <span style={{ color: "#0D9488", fontSize: 14, fontWeight: 700 }}>✓</span>
                </div>
                <p className="text-sm font-bold text-ink mb-2">{d.label}</p>
                <p className="text-sm text-ink/60 leading-relaxed">{d.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </RevealSection>
  );
}

/* ─── Nav ─────────────────────────────────────────────────────────────────── */

function PageNav() {
  return (
    <div className="bg-white border-t border-gray-100">
      <div className="max-w-[1200px] mx-auto px-6 py-8 flex items-center justify-between">
        <Link
          href="/projects"
          className="flex items-center gap-2 text-sm font-medium text-ink/40 hover:text-ink transition-colors"
        >
          ← Back to Projects
        </Link>
        <Link
          href="/projects/epson-distributor-api"
          className="flex items-center gap-2 text-sm font-medium text-ink/40 hover:text-ink transition-colors"
        >
          Next: Distributor API Integration →
        </Link>
      </div>
    </div>
  );
}
