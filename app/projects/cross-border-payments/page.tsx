import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RevealSection from "@/components/RevealSection";
import PaymentFlowDiagram from "@/components/case-study/PaymentFlowDiagram";

export const metadata: Metadata = {
  title: "Cross-Border Payment Infrastructure | Sage",
  description:
    "A PM's deep dive into cross-border payment infrastructure — FX mechanics, local payment methods, settlement timing, and what it means for product decisions.",
};

const cx = "max-w-5xl mx-auto px-6 sm:px-10 lg:px-16";

function SectionLabel({ index, children }: { index: string; children: React.ReactNode }) {
  return (
    <p className="text-[10px] font-semibold text-accent uppercase tracking-widest mb-2">
      {index} — {children}
    </p>
  );
}

function PmInsight({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="border-l-4 rounded-r-xl px-5 py-4 mt-6"
      style={{ borderColor: "#0D9488", backgroundColor: "rgba(13,148,136,0.05)" }}
    >
      <p className="text-[10px] font-bold uppercase tracking-widest mb-2" style={{ color: "#0D9488" }}>
        💡 PM Insight
      </p>
      <p className="text-sm leading-relaxed text-ink/70">{children}</p>
    </div>
  );
}

function DccWarning({ children }: { children: React.ReactNode }) {
  return (
    <div className="border-l-4 border-amber-400 bg-amber-50 rounded-r-xl px-5 py-4">
      <p className="text-[10px] font-bold uppercase tracking-widest text-amber-700 mb-2">⚠ Watch Out: DCC</p>
      <div className="text-sm leading-relaxed text-ink/70">{children}</div>
    </div>
  );
}

/* ─── Page ───────────────────────────────────────────────────────────────── */

export default function CrossBorderPaymentsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16 bg-white min-h-screen">
        <PageHero />
        <IntroSection />
        <PlayersSection />
        <LocalPaymentMethodsSection />   {/* 02 — moved up */}
        <CrossBorderLayerSection />       {/* 03 — moved down */}
        <PmLensSection />
        <PageNav />
      </main>
      <Footer letsTalkBg="bg-white" />
    </>
  );
}

/* ─── Hero ────────────────────────────────────────────────────────────────── */

function PageHero() {
  return (
    <section className="bg-white border-b border-gray-200">
      <div className={`${cx} pt-14 pb-16`}>
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-sm text-ink/40 hover:text-ink transition-colors mb-10"
        >
          ← Back to Projects
        </Link>

        <div className="flex flex-wrap gap-2 mb-5 hero-enter" style={{ animationDelay: "0ms" }}>
          {["Payments", "Infrastructure", "Cross-Border", "Deep Dive"].map((t) => (
            <span key={t} className="px-3 py-1 rounded-full text-xs font-medium bg-accent/8 text-accent">
              {t}
            </span>
          ))}
        </div>

        <h1
          className="font-serif text-4xl md:text-5xl font-bold text-ink mb-3 hero-enter"
          style={{ animationDelay: "100ms" }}
        >
          A PM&apos;s Deep Dive:{" "}
          <br className="hidden sm:block" />
          Cross-Border Payment Infrastructure
        </h1>
        <p className="text-lg text-ink/50 mb-12 hero-enter" style={{ animationDelay: "220ms" }}>
          From Echo Japan&apos;s async payment challenge to understanding the global rails that move money —
          FX mechanics, local payment methods, and what it means for product decisions.
        </p>

        <div className="flex flex-wrap gap-8 hero-enter" style={{ animationDelay: "300ms" }}>
          {[
            { label: "Type", value: "Personal Research" },
            { label: "Role", value: "Product Manager" },
            { label: "Scope", value: "Payments · Infrastructure · Cross-Border" },
          ].map(({ label, value }) => (
            <div key={label}>
              <p className="text-xs font-semibold text-ink/40 uppercase tracking-widest mb-1">{label}</p>
              <p className="text-sm font-medium text-ink">{value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── 00 — Intro ─────────────────────────────────────────────────────────── */

function IntroSection() {
  return (
    <RevealSection direction="up">
      <section className="py-16 bg-paper border-b border-gray-200">
        <div className={cx}>
          <SectionLabel index="00">Intro</SectionLabel>
          <h2 className="font-serif text-3xl font-bold text-ink mb-8">What started this</h2>
          <div className="space-y-5">
            <p className="text-ink/65 leading-relaxed">
              Working on Japan market entry at Echo, I had to design around Konbini and bank transfer flows
              — async payment methods that broke every assumption our sync order system was built on. We
              solved the product problem. But the experience left me curious about what was actually
              happening underneath.
            </p>
            <p className="text-ink/65 leading-relaxed">
              Why does cross-border payment confirmation take days? Why does the same card work in Tokyo and
              Paris but the fees look completely different? Why did we need a local payment method at all?
            </p>
            <p className="text-ink/65 leading-relaxed">
              This is my attempt to answer those questions — not as a textbook, but as a PM trying to
              understand the infrastructure well enough to make better product decisions.
            </p>
            <p className="text-sm text-ink/50">
              →{" "}
              <Link
                href="/projects/echo-japan-payments"
                className="underline underline-offset-2 hover:text-ink transition-colors"
                style={{ color: "#0D9488" }}
              >
                Read the Echo Japan case study
              </Link>
            </p>
          </div>
        </div>
      </section>
    </RevealSection>
  );
}

/* ─── 01 — The Players ───────────────────────────────────────────────────── */

function PlayersSection() {
  return (
    <RevealSection direction="up">
      <section className="py-16 bg-white border-b border-gray-200">
        <div className={cx}>
          <SectionLabel index="01">The Players</SectionLabel>
          <h2 className="font-serif text-3xl font-bold text-ink mb-2">Who&apos;s in the room</h2>
          <p className="text-sm text-ink/50 mb-8">
            Before getting into cross-border specifics, it helps to know who&apos;s involved in any card
            payment — domestic or international.
          </p>

          <PaymentFlowDiagram />

          <div className="mt-8 bg-gray-50 border border-gray-200 rounded-xl px-6 py-5">
            <p className="text-[10px] font-bold uppercase tracking-widest text-ink/40 mb-2">Example</p>
            <p className="text-sm text-ink/65 leading-relaxed">
              When Sage pays $6 at Starbucks with her Chase Visa: the POS sends a tokenized payment request
              via Stripe → Visa routes it to Chase → Chase approves → confirmation travels back in seconds.
              No money has moved yet.
            </p>
          </div>

          <PmInsight>
            PSP choice isn&apos;t just a technical decision. It determines which markets you can enter, how
            FX risk is handled, and whether local payment methods are even available. Stripe and Adyen serve
            fundamentally different customers — not just different sizes.
          </PmInsight>
        </div>
      </section>
    </RevealSection>
  );
}

/* ─── 02 — Local Payment Methods ─────────────────────────────────────────── */

const localMethods = [
  {
    flag: "🇯🇵",
    country: "Japan",
    method: "Konbini + PayPay",
    type: "Async cash · QR wallet",
    characteristic: "Konbini: pay at 7-Eleven/FamilyMart with a payment slip — confirmation in hours to days. PayPay (60M+ users) is Japan's dominant QR wallet.",
    pmNote:
      "Two separate integrations. Konbini requires full async state machine design. PayPay is instant but needs QR-based checkout flow, not a card form.",
  },
  {
    flag: "🇰🇷",
    country: "Korea",
    method: "Kakao Pay · Naver Pay · 통신사 결제",
    type: "Super-app wallet · Carrier billing",
    characteristic: "Kakao Pay: auth via KakaoTalk push (95%+ app penetration). Naver Pay: dominant for e-commerce. 통신사 소액결제: charge to monthly phone bill via SKT/KT/LGU+.",
    pmNote:
      "Carrier billing settles monthly — completely different reconciliation cycle. KakaoTalk Business verification takes weeks. Skipping Kakao Pay means missing the auth method embedded in the app nearly every Korean opens daily.",
  },
  {
    flag: "🇨🇳",
    country: "China",
    method: "WeChat Pay · Alipay",
    type: "Super-app ecosystem",
    characteristic: "QR-code-first (not NFC). WeChat Pay embedded in 1.3B-user super-app. Alipay backed by Ant Group / Alibaba ecosystem.",
    pmNote:
      "You're not integrating a payment method — you're integrating into an ecosystem. Separate merchant portals, mini-program frameworks, platform-managed dispute resolution. Cards are largely irrelevant for domestic consumers.",
  },
  {
    flag: "🇮🇳",
    country: "India",
    method: "UPI",
    type: "Instant bank transfer",
    characteristic: "VPA (Virtual Payment Address) instead of card number. Interoperable across all banks. Zero MDR mandated by RBI.",
    pmNote:
      "If your revenue model depends on interchange, UPI breaks it — zero merchant fee is law. Checkout UX is QR or VPA entry, not a card form. A completely different product surface.",
  },
  {
    flag: "🇧🇷",
    country: "Brazil",
    method: "Pix",
    type: "Instant bank transfer",
    characteristic: "Central Bank mandated. Operates 24/7/365 including holidays. Settlement in seconds. Free for consumers.",
    pmNote:
      "Pix QR codes have configurable expiry. Lower fraud risk than cards (bank auth required). Now dominant — card-first checkout underperforms significantly.",
  },
  {
    flag: "🇳🇱",
    country: "Netherlands",
    method: "iDEAL",
    type: "Direct bank transfer",
    characteristic: "~70% of Dutch online payments. Bank redirect-based: user authenticates in their own bank's app.",
    pmNote:
      "Card-only checkout will underperform significantly. The redirect UX requires careful handling — users leave your checkout to their bank app and return.",
  },
  {
    flag: "🇩🇪",
    country: "Germany",
    method: "SEPA Direct Debit",
    type: "Bank transfer",
    characteristic: "Cultural aversion to credit. SEPA mandate-based: customer authorizes recurring or one-time debit from bank account.",
    pmNote:
      "Requires a signed SEPA mandate upfront — adds a step before first payment. T+1 to T+2 settlement. Chargeback window is 8 weeks for unauthorized transactions.",
  },
];

const designPatterns = [
  {
    pattern: "Async Confirmation",
    examples: "Konbini (Japan) · SEPA (Germany/EU)",
    timing: "Hours → Days",
    changes: [
      "Order state machine: Pending → Confirmed / Expired / Partial",
      "Inventory hold decision: hold = stockout risk; no-hold = fulfillment risk",
      "Customer comms at every state transition",
      "Idempotent webhook handling (providers retry — duplicates happen)",
    ],
    pmExample: {
      label: "Echo Japan",
      text: "No inventory hold, backed by LTV data showing repeat-purchase collision rate was within acceptable range. All 5 payment states mapped to finance reconciliation events before engineering started.",
    },
    accent: false,
  },
  {
    pattern: "Ecosystem Wallet",
    examples: "Kakao Pay · Naver Pay (KR) · WeChat Pay · Alipay (CN)",
    timing: "Instant (in-app)",
    changes: [
      "SDK integration, not just API — checkout is inside their ecosystem",
      "Auth via the platform's own flow (KakaoTalk push, WeChat payment password)",
      "Platform-managed disputes, not standard chargebacks",
      "Korea carrier billing: charges monthly phone bill; T+30 settlement, separate integration per telecom (SKT, KT, LGU+)",
    ],
    pmExample: {
      label: "Korea launch",
      text: "KakaoTalk Business verification takes weeks — it's not a same-day API key. If you're planning a Korean launch, start the merchant account process months before target date. Miss it and you're excluding the auth method in the app 95% of Koreans open every day.",
    },
    accent: true,
  },
  {
    pattern: "Instant Bank Transfer",
    examples: "UPI (India) · Pix (Brazil)",
    timing: "Seconds",
    changes: [
      "Different checkout surface: QR code or VPA/alias, not a card form",
      "Different failure modes: bank server unavailable ≠ card declined",
      "UPI: zero MDR mandated — interchange-dependent revenue models don't work",
      "Pix QR codes expire — must handle regeneration in checkout",
    ],
    pmExample: {
      label: "India entry",
      text: "For a fintech product with a revenue model built on interchange rebates, UPI is a structural problem. The pricing model has to be redesigned before launch — not patched after. This is a pre-roadmap decision, not a post-launch optimization.",
    },
    accent: false,
  },
];

function LocalPaymentMethodsSection() {
  return (
    <RevealSection direction="up">
      <section className="py-16 bg-paper border-b border-gray-200">
        <div className={cx}>
          <SectionLabel index="02">Local Payment Methods</SectionLabel>
          <h2 className="font-serif text-3xl font-bold text-ink mb-2">The payment method is the market</h2>
          <p className="text-sm text-ink/55 mb-10">
            Living across Japan, Korea, and the US — and working on a Japan market entry — made this visceral.
            The same product needs completely different payment infrastructure in each country. And the infrastructure
            shapes the product design, not the other way around.
          </p>

          {/* Country cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
            {localMethods.map((m) => (
              <div
                key={m.country}
                className="bg-white border border-gray-200 rounded-xl px-5 py-5 flex flex-col gap-2"
              >
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xl">{m.flag}</span>
                  <span className="text-xs font-bold uppercase tracking-widest text-ink/40">{m.country}</span>
                </div>
                <p className="text-sm font-semibold text-ink">{m.method}</p>
                <span className="self-start px-2 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-ink/50">
                  {m.type}
                </span>
                <p className="text-xs text-ink/55 leading-relaxed">{m.characteristic}</p>
                <p
                  className="text-xs leading-relaxed mt-1 pt-3 border-t border-gray-100"
                  style={{ color: "#0D9488" }}
                >
                  <span className="font-bold">PM:</span> {m.pmNote}
                </p>
              </div>
            ))}
          </div>

          {/* Design pattern breakdown */}
          <div className="mb-10">
            <h3 className="font-serif text-xl font-bold text-ink mb-1">
              How payment type shapes product design
            </h3>
            <p className="text-sm text-ink/50 mb-6">
              Local payment methods aren&apos;t interchangeable. Each type demands fundamentally different
              product architecture decisions — before engineering starts.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
              {designPatterns.map((p) => (
                <div
                  key={p.pattern}
                  className="bg-white border rounded-xl px-5 py-5 flex flex-col gap-3"
                  style={
                    p.accent
                      ? { borderColor: "rgba(13,148,136,0.3)" }
                      : { borderColor: "#e5e7eb" }
                  }
                >
                  <div>
                    <p
                      className="text-[10px] font-bold uppercase tracking-widest mb-1"
                      style={p.accent ? { color: "#0D9488" } : { color: "rgba(15,15,15,0.4)" }}
                    >
                      {p.pattern}
                    </p>
                    <p className="text-xs text-ink/45 mb-1">{p.examples}</p>
                    <span className="inline-block text-xs font-semibold px-2 py-0.5 rounded-full bg-gray-100 text-ink/50">
                      {p.timing}
                    </span>
                  </div>

                  <ul className="space-y-1.5">
                    {p.changes.map((c, i) => (
                      <li key={i} className="flex gap-2 text-xs text-ink/60 leading-relaxed">
                        <span className="shrink-0 mt-0.5 text-ink/25">—</span>
                        {c}
                      </li>
                    ))}
                  </ul>

                  <div
                    className="mt-auto pt-3 border-t"
                    style={{ borderColor: p.accent ? "rgba(13,148,136,0.15)" : "#f3f4f6" }}
                  >
                    <p
                      className="text-[10px] font-bold uppercase tracking-widest mb-1"
                      style={p.accent ? { color: "#0D9488" } : { color: "rgba(15,15,15,0.35)" }}
                    >
                      Example: {p.pmExample.label}
                    </p>
                    <p className="text-xs text-ink/55 leading-relaxed">{p.pmExample.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Stripe vs Adyen */}
          <div className="bg-white border border-gray-200 rounded-xl p-5 mb-6">
            <p className="text-[10px] font-bold uppercase tracking-widest text-ink/40 mb-4">
              PSP choice determines what&apos;s even possible
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="border border-gray-100 rounded-lg px-4 py-4">
                <p className="text-sm font-bold text-ink mb-2">Stripe</p>
                <ul className="space-y-1 text-xs text-ink/60 mb-3">
                  <li>Strong card infrastructure</li>
                  <li>Growing local method support</li>
                  <li>Best for: startups, SMBs, developers</li>
                </ul>
                <p className="text-xs text-ink/40">
                  <span className="font-semibold text-ink/50">Limitation:</span> local method coverage thinner outside core markets — Konbini, carrier billing, WeChat Pay often require separate integrations
                </p>
              </div>
              <div
                className="border rounded-lg px-4 py-4"
                style={{ borderColor: "rgba(13,148,136,0.2)", backgroundColor: "rgba(13,148,136,0.03)" }}
              >
                <p className="text-sm font-bold text-ink mb-2">Adyen</p>
                <ul className="space-y-1 text-xs text-ink/60 mb-3">
                  <li>150+ local payment methods</li>
                  <li>Direct Acquirer licenses in major markets</li>
                  <li>Best for: enterprise, global-first products</li>
                </ul>
                <p className="text-xs text-ink/45">
                  <span className="font-semibold text-ink/55">Why Uber and Netflix use Adyen:</span> one platform, every market — FX + local methods + acquiring in one stack
                </p>
              </div>
            </div>
          </div>

          <PmInsight>
            PSP selection upstream determines whether local payment support is even possible. The Echo Japan
            decision to support Konbini and bank transfer wasn&apos;t a feature addition — it was a market
            entry requirement. Make the PSP decision based on where you&apos;re going, not just where you are.
          </PmInsight>
        </div>
      </section>
    </RevealSection>
  );
}

/* ─── 03 — Cross-Border Layer ────────────────────────────────────────────── */

function CrossBorderLayerSection() {
  return (
    <RevealSection direction="up">
      <section className="py-16 bg-white border-b border-gray-200">
        <div className={cx}>
          <SectionLabel index="03">Cross-Border Layer</SectionLabel>
          <h2 className="font-serif text-3xl font-bold text-ink mb-2">What changes when money crosses borders</h2>
          <p className="text-sm text-ink/50 mb-10">
            Add a cross-border transaction and three things happen that don&apos;t exist in domestic
            payments: currency conversion, additional fees, and settlement timing risk. Each one has product
            implications.
          </p>

          <FxConversionBlock />
          <CrossBorderFeeBlock />
          <DccBlock />
          <SettlementMismatchBlock />
        </div>
      </section>
    </RevealSection>
  );
}

/* FX Conversion */
function FxConversionBlock() {
  return (
    <div className="mb-12">
      <h3 className="font-serif text-xl font-bold text-ink mb-4">FX Conversion</h3>

      <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 mb-5">
        <p className="text-sm text-ink/65 leading-relaxed mb-5">
          When Sage pays €100 at a Paris café with her Korean Shinhan Visa card, Visa converts EUR → KRW
          at that day&apos;s spot rate, then adds a spread.
        </p>
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left py-2 pr-6 text-[10px] font-bold uppercase tracking-widest text-ink/40 w-44"></th>
              <th className="text-left py-2 pr-6 text-[10px] font-bold uppercase tracking-widest text-ink/40">Domestic</th>
              <th className="text-left py-2 text-[10px] font-bold uppercase tracking-widest text-ink/40">Cross-Border</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["FX conversion", "None", "Visa spot rate + 0.5–1% spread"],
              ["Cross-border fee", "None", "Issuer adds 1–3%"],
              ["Settlement currency", "Same", "May differ"],
            ].map(([label, domestic, cross]) => (
              <tr key={label} className="border-b border-gray-100">
                <td className="py-3 pr-6 font-medium text-ink/70">{label}</td>
                <td className="py-3 pr-6 text-ink/45">{domestic}</td>
                <td className="py-3 text-ink/70">{cross}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <p className="text-sm text-ink/60 leading-relaxed mt-4">
          <span className="font-semibold text-ink/80">Why Visa&apos;s rate beats a bank branch:</span>{" "}
          Visa processes hundreds of millions of transactions daily — banks offer wholesale rates that
          individuals can never access. Even with the spread, it&apos;s better than most retail FX options.
        </p>
      </div>

      <p className="text-xs font-bold uppercase tracking-widest text-ink/40 mb-3">
        Spot vs. Guaranteed Rate — merchant&apos;s choice
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="border border-gray-200 rounded-xl bg-white px-5 py-5">
          <p className="text-xs font-bold uppercase tracking-widest text-ink/40 mb-3">Spot Rate</p>
          <ul className="space-y-2 text-sm text-ink/65 mb-4">
            <li>Rate floats with market</li>
            <li>Lower fee</li>
          </ul>
          <p className="text-xs text-ink/40">
            <span className="font-semibold text-ink/60">Best when:</span> low volume or stable currency
          </p>
        </div>
        <div
          className="border rounded-xl px-5 py-5"
          style={{ borderColor: "rgba(13,148,136,0.2)", backgroundColor: "rgba(13,148,136,0.04)" }}
        >
          <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#0D9488" }}>
            Guaranteed Rate
          </p>
          <ul className="space-y-2 text-sm text-ink/65 mb-4">
            <li>PSP locks rate via forward contracts</li>
            <li>Predictability, pays a premium</li>
            <li className="text-xs text-ink/45">€100 → $108 fixed vs. $105–$112 at spot</li>
          </ul>
          <p className="text-xs text-ink/40">
            <span className="font-semibold text-ink/60">Best when:</span> high volume, volatile pairs
          </p>
        </div>
        <div className="bg-gray-50 border border-gray-200 rounded-xl px-5 py-5">
          <p className="text-xs font-bold uppercase tracking-widest text-ink/40 mb-2">Volume-based negotiation</p>
          <p className="text-sm text-ink/60 leading-relaxed">
            Enterprise merchants (Uber, Netflix) negotiate FX margins directly with PSPs. Small merchants take
            standard pricing. PSP selection matters more as you scale globally.
          </p>
        </div>
      </div>
    </div>
  );
}

/* Cross-Border Fee */
function CrossBorderFeeBlock() {
  return (
    <div className="mb-12">
      <h3 className="font-serif text-xl font-bold text-ink mb-4">Cross-Border Fee</h3>
      <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
        <p className="text-sm text-ink/65 leading-relaxed mb-4">
          This is the &ldquo;foreign transaction fee&rdquo; on your card statement. Charged by the
          Issuer — not Visa — for three reasons:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {[
            { n: "1", title: "Fraud risk", body: "Cross-border transactions are harder to verify. If fraud occurs, the Issuer absorbs it." },
            { n: "2", title: "FX hedging cost", body: "The Issuer converts currency and carries exchange rate exposure until settlement." },
            { n: "3", title: "Infrastructure", body: "Routing through global networks costs more than domestic rails." },
          ].map((item) => (
            <div key={item.n} className="bg-white border border-gray-200 rounded-lg px-4 py-4 flex gap-3">
              <span
                className="w-5 h-5 rounded-full text-xs font-bold flex items-center justify-center shrink-0 mt-0.5 text-ink/50"
                style={{ background: "rgba(0,0,0,0.06)" }}
              >
                {item.n}
              </span>
              <p className="text-sm text-ink/65 leading-relaxed">
                <span className="font-semibold text-ink/80">{item.title}</span> — {item.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* DCC */
function DccBlock() {
  return (
    <div className="mb-12">
      <h3 className="font-serif text-xl font-bold text-ink mb-4">DCC — The Trap</h3>
      <DccWarning>
        <p className="mb-3">
          DCC (Dynamic Currency Conversion) happens when a terminal abroad asks: &ldquo;Pay in KRW?&rdquo;
          It sounds convenient. It isn&apos;t.
        </p>
        <div className="space-y-1 mb-3">
          <p><span className="font-semibold text-ink/70">Normal flow:</span> €100 → Visa spot rate → Issuer converts → billed in KRW</p>
          <p><span className="font-semibold text-ink/70">DCC flow:</span> Terminal pre-converts at their rate → adds 2–3% fee → billed in KRW</p>
        </div>
        <p className="text-xs text-amber-700/70 mb-2">The merchant and their Acquirer split the DCC fee. That&apos;s why they offer it.</p>
        <p className="font-bold text-ink/80">Always choose local currency.</p>
      </DccWarning>
    </div>
  );
}

/* Settlement Mismatch */
function SettlementMismatchBlock() {
  return (
    <div className="mb-4">
      <h3 className="font-serif text-xl font-bold text-ink mb-4">Settlement Currency Mismatch</h3>
      <p className="text-sm text-ink/60 leading-relaxed mb-5">
        The gap between payment capture and actual settlement (T+1 to T+2) creates FX exposure.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
        <div className="bg-gray-50 border border-gray-200 rounded-xl px-5 py-5">
          <p className="text-[10px] font-bold uppercase tracking-widest text-ink/40 mb-3">Example</p>
          <div className="space-y-2 text-sm">
            <div className="flex gap-3 items-start">
              <span className="text-xs font-mono bg-white border border-gray-200 px-2 py-0.5 rounded shrink-0 mt-0.5">Day 0</span>
              <p className="text-ink/65">€100 captured. EUR/USD = 1.10 → $110 expected</p>
            </div>
            <div className="flex gap-3 items-start">
              <span className="text-xs font-mono bg-amber-100 text-amber-800 px-2 py-0.5 rounded shrink-0 mt-0.5">Day 2</span>
              <p className="text-ink/65">EUR/USD = 1.05 → $105 received</p>
            </div>
            <div className="flex gap-3 items-start">
              <span className="text-xs font-mono bg-red-100 text-red-700 px-2 py-0.5 rounded shrink-0 mt-0.5">Result</span>
              <p className="text-ink/65 font-medium">$5 lost to rate movement</p>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 border border-gray-200 rounded-xl px-5 py-5">
          <p className="text-[10px] font-bold uppercase tracking-widest text-ink/40 mb-3">Three ways to handle it</p>
          <div className="space-y-3">
            {[
              { label: "Absorb it", body: "Rate floats. Fine at low volume, painful at scale.", accent: false },
              { label: "PSP hedges it", body: "PSP locks a forward rate at capture. Upside capped, downside protected.", accent: false },
              { label: "Adyen's approach", body: "150+ currency pools. Issuer sends €, Adyen pays $ from its own pool. FX risk eliminated, not just managed.", accent: true },
            ].map((opt) => (
              <div key={opt.label} className="flex gap-3">
                <span
                  className="w-1.5 h-1.5 rounded-full shrink-0 mt-2"
                  style={{ backgroundColor: opt.accent ? "#0D9488" : "#d1d5db" }}
                />
                <p className="text-sm text-ink/65 leading-snug">
                  <span className="font-semibold text-ink/80">{opt.label}:</span> {opt.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <PmInsight>
        FX strategy directly affects unit economics. A product that works domestically can become
        margin-negative internationally if FX handling isn&apos;t designed into the payment architecture.
        This is a PM decision, not just a finance one.
      </PmInsight>
    </div>
  );
}

/* ─── 04 — PM Lens ───────────────────────────────────────────────────────── */

const pmInsights = [
  {
    n: "1",
    title: "PSP selection has long-term lock-in risk",
    body: "Switching PSPs mid-scale is expensive. FX contracts, local payment integrations, and reconciliation pipelines all need to be rebuilt. Choose based on where you're going, not just where you are.",
  },
  {
    n: "2",
    title: "FX is a unit economics variable",
    body: "Most P&L models for international expansion underestimate FX drag. Spot rate variance, cross-border fees, and hedging premiums can swing margins by 2–4% per transaction. Model it before launch, not after.",
  },
  {
    n: "3",
    title: "Local payment methods determine market entry feasibility",
    body: "In some markets, card-only checkout means the product literally doesn't work for most users. This is a go/no-go input, not a post-launch optimization.",
  },
  {
    n: "4",
    title: "Async payment flows require product architecture decisions upfront",
    body: "Konbini and bank transfer taught me this directly. Inventory hold logic, order state communication, idempotency handling, and reconciliation mapping all need to be designed before engineering starts — not discovered during QA.",
  },
  {
    n: "5",
    title: "Compliance and licensing are moats",
    body: "Adyen's strength isn't technology — it's the years spent acquiring banking licenses and local payment network memberships in 150+ markets. PSP selection is partly a bet on whose compliance infrastructure you want to sit on.",
  },
];

function PmLensSection() {
  return (
    <RevealSection direction="up">
      <section className="py-16 bg-paper border-b border-gray-200">
        <div className={cx}>
          <SectionLabel index="04">PM Lens</SectionLabel>
          <h2 className="font-serif text-3xl font-bold text-ink mb-2">What this means for product decisions</h2>
          <p className="text-sm text-ink/50 mb-10">
            Payment infrastructure decisions aren&apos;t made by engineers. They&apos;re made by PMs who
            understand what the infrastructure can and can&apos;t do — and what it costs to find out the
            hard way.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
            {pmInsights.map((insight) => (
              <div key={insight.n} className="border border-gray-200 rounded-xl bg-white px-6 py-5">
                <div
                  className="w-7 h-7 rounded-lg flex items-center justify-center mb-4 text-xs font-bold"
                  style={{ backgroundColor: "rgba(13,148,136,0.08)", color: "#0D9488" }}
                >
                  {insight.n}
                </div>
                <p className="text-sm font-bold text-ink mb-2">{insight.title}</p>
                <p className="text-sm text-ink/60 leading-relaxed">{insight.body}</p>
              </div>
            ))}
          </div>

          <div className="text-center border border-gray-200 rounded-xl bg-white px-8 py-8">
            <p className="text-base font-medium text-ink/70 leading-relaxed max-w-2xl mx-auto">
              &ldquo;The checkout button is the surface. Everything covered here is what makes it work — or
              not — when your customer is 6,000 miles away.&rdquo;
            </p>
          </div>
        </div>
      </section>
    </RevealSection>
  );
}

/* ─── Page Nav ────────────────────────────────────────────────────────────── */

function PageNav() {
  return (
    <div className="bg-white border-t border-gray-100">
      <div className={`${cx} py-8 flex items-center justify-between`}>
        <Link
          href="/projects"
          className="flex items-center gap-2 text-sm font-medium text-ink/40 hover:text-ink transition-colors"
        >
          ← Back to Projects
        </Link>
        <Link
          href="/projects/echo-japan-payments"
          className="flex items-center gap-2 text-sm font-medium text-ink/40 hover:text-ink transition-colors"
        >
          See: Echo Japan Case Study →
        </Link>
      </div>
    </div>
  );
}
