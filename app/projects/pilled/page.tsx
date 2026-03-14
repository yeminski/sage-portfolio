import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PillEdPrototypeCTA from "./PillEdPrototypeCTA";
import PillEdSolutionSection from "./PillEdSolutionSection";
import RevealSection from "@/components/RevealSection";

export const metadata: Metadata = {
  title: "PillEd — Smart Medication Management | Sage",
  description:
    "Product case study: PillEd — solving polypharmacy, medication nonadherence, and poor health literacy through an integrated mobile platform.",
};

export default function PillEdPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16 bg-white">
        <PageHero />
        {/* Try Prototype CTA — below hero */}
        <div className="bg-white border-b border-gray-200 py-12">
          <div className="max-w-[1200px] mx-auto px-6">
            <PillEdPrototypeCTA />
          </div>
        </div>
        <MyRoleSection />
        <ProblemSection />
        <PersonasSection />
        <PillEdSolutionSection />
        <UserJourneySection />
        <ArchSection />
        <CompetitorSection />
        <MarketSection />
        <GTMSection />
      </main>
      <Footer letsTalkBg="bg-white" />
    </>
  );
}

/* ─── Shared helpers ─────────────────────────────────────────────────────── */

function SectionLabel({ index, children }: { index: string; children: React.ReactNode }) {
  return (
    <p className="text-[10px] font-semibold text-accent uppercase tracking-widest mb-2">
      {index} — {children}
    </p>
  );
}

/* ─── 0. Page Hero ───────────────────────────────────────────────────────── */

function PageHero() {
  const tags = ["HealthTech", "Mobile App", "Product Management", "B2C", "HIPAA"];
  const meta = [
    { label: "Role", value: "Product Manager" },
    { label: "Context", value: "Anderson Product Innovation Challenge" },
    { label: "Year", value: "November 2022" },
    { label: "Team", value: "5 Members (MD/MBA + MBA)" },
  ];

  return (
    <div className="bg-white">
      <div className="max-w-[1200px] mx-auto px-6 pt-16 pb-12">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-sm text-ink/40 hover:text-ink transition-colors mb-8"
        >
          ← Back to Projects
        </Link>

        <div className="flex flex-wrap gap-2 mb-5 hero-enter" style={{ animationDelay: "0ms" }}>
          {tags.map((t) => (
            <span key={t} className="px-3 py-1 rounded-full text-xs font-medium bg-accent/8 text-accent">
              {t}
            </span>
          ))}
        </div>

        <h1 className="font-serif text-4xl md:text-5xl font-bold text-ink mb-2 hero-enter" style={{ animationDelay: "100ms" }}>PillEd</h1>
        <p className="text-xl text-ink/50 mb-10 max-w-3xl hero-enter" style={{ animationDelay: "220ms" }}>
          A user-friendly mobile platform tackling polypharmacy, medication nonadherence,
          and poor health literacy — making medication management safer, smarter, and simpler.
        </p>

        <div className="flex flex-wrap gap-10 hero-enter" style={{ animationDelay: "360ms" }}>
          {meta.map(({ label, value }) => (
            <div key={label}>
              <p className="text-xs font-semibold text-ink/40 uppercase tracking-widest mb-1">{label}</p>
              <p className="text-sm font-medium text-ink">{value}</p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

/* ─── 1. My Role ─────────────────────────────────────────────────────────── */

const contributions = [
  {
    emoji: "🎯",
    bg: "bg-teal-50",
    title: "Product Strategy",
    description: "Defined product vision, roadmap, and phased go-to-market strategy. Led competitive analysis that identified the unique OCR + DI + health literacy combination as the primary differentiator.",
  },
  {
    emoji: "📊",
    bg: "bg-blue-50",
    title: "Market Analysis",
    description: "Conducted TAM/SAM/SOM sizing across the Caregiver and Mother segments. Validated market opportunity through demographic trends and telemedicine growth data.",
  },
  {
    emoji: "👥",
    bg: "bg-purple-50",
    title: "User Research & Segmentation",
    description: "Developed three core personas through pain-point analysis. Mapped the end-to-end user journey from onboarding through daily medication management and price comparison.",
  },
  {
    emoji: "💵",
    bg: "bg-amber-50",
    title: "Financial Modeling",
    description: "Built 5-year revenue projection across three monetization streams (subscription, advertising, transaction fees). Structured cost analysis at $1.2M/year operating budget.",
  },
];

function MyRoleSection() {
  return (
    <RevealSection direction="left" stagger>
      <section className="py-16 bg-paper border-b border-gray-200">
        <div className="max-w-[1200px] mx-auto px-6">
          <SectionLabel index="01">My Contribution</SectionLabel>
          <h2 className="font-serif text-3xl font-bold text-ink mb-2">What I Did as Product Manager</h2>
          <p className="text-ink/50 max-w-3xl mb-10">
            As Product Manager and Strategist, I owned problem framing, product vision, and cross-functional coordination across a 5-person team of MD/MBA and MBA candidates.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {contributions.map((c) => (
              <div
                key={c.title}
                className="stagger-item reveal border-t border-ink/10 pt-5 pb-6"
              >
                <div className="text-xl mb-3">
                  {c.emoji}
                </div>
                <h3 className="font-semibold text-ink mb-2">{c.title}</h3>
                <p className="text-sm text-ink/50 leading-relaxed">{c.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </RevealSection>
  );
}

/* ─── 2. Problem ─────────────────────────────────────────────────────────── */

const problemStats = [
  { number: "50%", label: "Adults nonadherent to medications as prescribed", warning: false },
  { number: "30%", label: "Adults 60+ report polypharmacy (5+ medications)", warning: false },
  { number: "12%", label: "Adults considered proficient in health literacy", warning: false },
  { number: "$50B", label: "Annual healthcare cost attributed to medication misuse", warning: true },
  { number: "5th", label: "Leading cause of death in the US from adverse drug interactions", warning: true },
  { number: "30%", label: "Of all hospital admissions linked to drug interactions", warning: true },
];

function ProblemSection() {
  return (
    <RevealSection direction="up" stagger>
      <section className="py-16 bg-white border-t border-gray-200">
        <div className="max-w-[1200px] mx-auto px-6">
          <SectionLabel index="02">Problem</SectionLabel>
          <h2 className="font-serif text-3xl font-bold text-ink mb-4">Pharmaceuticals &amp; the American Consumer</h2>
          <p className="text-ink/50 max-w-3xl mb-10">
            Millions of Americans face serious health risks from medication mismanagement. The data reveals
            a systemic crisis at the intersection of polypharmacy, nonadherence, and low health literacy.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
            {problemStats.map((s) => (
              <div
                key={s.label}
                className="stagger-item reveal border-t border-ink/10 pt-4 pb-4"
              >
                <p className={`text-4xl font-bold mb-2 ${s.warning ? "text-orange-700" : "text-accent"}`}>
                  {s.number}
                </p>
                <p className="text-sm text-ink/50 leading-relaxed">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </RevealSection>
  );
}

/* ─── 3. Personas ────────────────────────────────────────────────────────── */

const personas = [
  {
    emoji: "🤰",
    name: '"Mother"',
    role: "Pregnant · Seeking medication safety",
    quote: "Will my baby be ok if I take Advil?",
    avatarBg: "bg-rose-50",
  },
  {
    emoji: "🧑‍🤝‍🧑",
    name: '"Caregiver"',
    role: "Adult · No medical training · Managing elderly parent",
    quote: "My dad is on 9 medications. Is it safe for him to take Benadryl?",
    avatarBg: "bg-teal-50",
  },
  {
    emoji: "🩺",
    name: '"Healthcare Provider"',
    role: "Physicians · Hospital staff",
    quote: "Why do I spend so much time reviewing meds with my patients?",
    avatarBg: "bg-blue-50",
  },
];

function PersonasSection() {
  return (
    <RevealSection direction="right" stagger>
      <section className="py-16 bg-paper border-t border-gray-200">
        <div className="max-w-[1200px] mx-auto px-6">
          <SectionLabel index="03">Target Users</SectionLabel>
          <h2 className="font-serif text-3xl font-bold text-ink mb-4">Who We&apos;re Building For</h2>
          <p className="text-ink/50 max-w-3xl mb-10">
            Three distinct user segments with a shared need: reliable, understandable medication guidance.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {personas.map((p) => (
              <div
                key={p.name}
                className="stagger-item reveal border-t border-ink/10 pt-5 pb-6 text-center"
              >
                <div className={`w-16 h-16 ${p.avatarBg} rounded-full flex items-center justify-center text-3xl mx-auto mb-4`}>
                  {p.emoji}
                </div>
                <h3 className="font-bold text-ink mb-1">{p.name}</h3>
                <p className="text-xs text-ink/50 mb-5">{p.role}</p>
                <div className="border-l-[3px] border-accent pl-4 mt-4 text-left">
                  <p className="text-sm italic text-ink/70">&ldquo;{p.quote}&rdquo;</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </RevealSection>
  );
}

/* ─── 5. User Journey ────────────────────────────────────────────────────── */

const journeySteps = [
  { step: "1", title: "Onboard", description: "Create health profile with medications, conditions, and allergies" },
  { step: "2", title: "Scan Meds", description: "Camera OCR to add medications" },
  { step: "3", title: "Interaction Check", description: "Auto-screen full medication list for drug-drug conflicts" },
  { step: "4", title: "Review Drug Info", description: "Digestible drug details, dosage, and side effects" },
  { step: "5", title: "Set Schedule", description: "Set dosing times & alarms" },
  { step: "6", title: "Receive Reminders", description: "Push notifications at dose time" },
  { step: "7", title: "Track & Shop", description: "History, compare prices, buy" },
];

function UserJourneySection() {
  return (
    <RevealSection direction="left">
      <section className="py-16 bg-paper border-t border-gray-200">
        <div className="max-w-[1200px] mx-auto px-6">
          <SectionLabel index="05">User Journey</SectionLabel>
          <h2 className="font-serif text-3xl font-bold text-ink mb-4">End-to-End Experience Flow</h2>
          <p className="text-ink/50 max-w-3xl mb-10">
            From onboarding to daily medication management — a seamless, guided experience designed for users with low health literacy.
          </p>

          <div className="overflow-x-auto pb-4">
            <div className="flex items-start gap-0 min-w-max">
              {journeySteps.map((s, i) => (
                <div key={s.step} className="flex items-start">
                  <div className="flex flex-col items-center w-36 text-center">
                    <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-white font-bold text-sm mb-3">
                      {s.step}
                    </div>
                    <p className="text-sm font-semibold text-ink mb-1">{s.title}</p>
                    <p className="text-xs text-ink/50 leading-snug px-2">{s.description}</p>
                  </div>
                  {i < journeySteps.length - 1 && (
                    <div className="mt-5 text-gray-300 text-lg px-1">→</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </RevealSection>
  );
}

/* ─── 6. Competitive Matrix ──────────────────────────────────────────────── */

const competitorFeatures = [
  "Drug-Drug Interaction Checker",
  "Contraindication Alerts",
  "Automation of Alerts",
  "Drug Scheduling",
  "Camera Identification (OCR)",
  "Understandable Drug Info",
];
const competitors = ["PillEd", "MediSafe / Dosecast", "UpToDate / Medscape", "Drugs.com / Epocrates"];
const matrix = [
  [true, false, false, false],
  [true, false, false, false],
  [true, false, false, false],
  [true, true, false, true],
  [true, false, false, false],
  [true, false, true, false],
];

function CompetitorSection() {
  return (
    <RevealSection direction="right">
      <section className="py-16 bg-paper border-t border-gray-200">
        <div className="max-w-[1200px] mx-auto px-6">
          <SectionLabel index="07">Competitive Landscape</SectionLabel>
          <h2 className="font-serif text-3xl font-bold text-ink mb-4">Feature Comparison Matrix</h2>
          <p className="text-ink/50 max-w-3xl mb-10">
            Existing solutions address fragments of the problem. PillEd is the only platform covering all critical capabilities.
          </p>

          <div className="overflow-x-auto rounded-lg border border-gray-200 bg-white">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="text-left p-4 font-semibold text-ink">Feature</th>
                  {competitors.map((c, i) => (
                    <th
                      key={c}
                      className={`text-left p-4 font-semibold whitespace-nowrap ${i === 0 ? "text-accent bg-accent/5" : "text-ink/60"}`}
                    >
                      {c}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {competitorFeatures.map((feat, fi) => (
                  <tr key={feat} className="border-b border-gray-100 last:border-0">
                    <td className="p-4 font-medium text-ink">{feat}</td>
                    {matrix[fi].map((has, ci) => (
                      <td key={ci} className={`p-4 ${ci === 0 ? "bg-accent/5" : ""}`}>
                        {has ? (
                          <span className="text-accent font-bold text-base">✓</span>
                        ) : (
                          <span className="text-gray-300 text-base">✗</span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </RevealSection>
  );
}

/* ─── 7. Market ──────────────────────────────────────────────────────────── */

function MarketSection() {
  const funnel = [
    { label: "TAM — $565B", sub: "Total market: 11.3M users × $50/yr subscription", widthClass: "w-full", color: "bg-accent" },
    { label: "SAM — $200.5B", sub: "30% caregivers + 40% pregnant willing to download", widthClass: "w-[70%]", color: "bg-blue-500" },
    { label: "SOM — $16M", sub: "10% caregivers + 5% pregnant actually subscribe", widthClass: "w-[35%]", color: "bg-purple-500" },
  ];

  const drivers = [
    { number: "90M", label: "Projected adults 65+ by 2050 (up from 46M today)" },
    { number: "4,000%", label: "Telemedicine visit growth from 2018 to 2019" },
    { number: "$219B", label: "Preventative health market size (2022 projection)" },
  ];

  return (
    <RevealSection direction="up" stagger>
      <section className="py-16 bg-white border-t border-gray-200">
        <div className="max-w-[1200px] mx-auto px-6">
          <SectionLabel index="08">Market Opportunity</SectionLabel>
          <h2 className="font-serif text-3xl font-bold text-ink mb-4">Market Sizing</h2>
          <p className="text-ink/50 max-w-3xl mb-10">
            Targeting the &ldquo;Mother&rdquo; (4.0M) and &ldquo;Caregiver&rdquo; (7.3M) segments with a $50/year freemium subscription model.
          </p>

          <div className="max-w-2xl space-y-4 mb-16">
            {funnel.map(({ label, sub, widthClass, color }) => (
              <div key={label} className="flex items-center gap-5">
                <div className={`h-12 ${widthClass} ${color} rounded-lg flex items-center px-5 flex-shrink-0 min-w-0`}>
                  <span className="text-white font-bold text-sm truncate">{label}</span>
                </div>
                <span className="text-sm text-ink/50 flex-shrink-0">{sub}</span>
              </div>
            ))}
          </div>

          <h3 className="font-bold text-ink mb-6">Growth Drivers</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {drivers.map((d) => (
              <div key={d.label} className="stagger-item reveal border-t border-ink/10 pt-4 pb-4">
                <p className="text-4xl font-bold text-accent mb-2">{d.number}</p>
                <p className="text-sm text-ink/50 leading-relaxed">{d.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </RevealSection>
  );
}

/* ─── 8. Go-to-Market ────────────────────────────────────────────────────── */

const phases = [
  {
    date: "Q1 2023",
    title: "Hospital Partnerships",
    description: "Partner with hospitals to optimize medication reconciliation and build legitimacy within the medical community before consumer launch.",
  },
  {
    date: "Q2 2023",
    title: "Clinical Channel Expansion",
    description: "Partner with skilled nursing facilities, obstetricians, and geriatricians to promote app downloads — targeting under-resourced settings with high polypharmacy prevalence.",
  },
  {
    date: "Q4 2023",
    title: "B2B Healthcare Retail",
    description: "Partner with healthcare retail chains to distribute pharmaceutical promotion coupons, attracting price-sensitive new users at scale.",
  },
  {
    date: "Q1 2025",
    title: "Product Launch",
    description: "Full public launch with established medical community trust, validated retail partnerships, and confirmed product-market fit across both primary personas.",
  },
];

function GTMSection() {
  return (
    <RevealSection direction="left" stagger>
      <section className="py-16 bg-paper border-t border-gray-200">
        <div className="max-w-[1200px] mx-auto px-6">
          <SectionLabel index="09">Go-to-Market Strategy</SectionLabel>
          <h2 className="font-serif text-3xl font-bold text-ink mb-4">Phased Market Entry</h2>
          <p className="text-ink/50 max-w-3xl mb-10">
            A B2B-first approach to build medical credibility before scaling to consumers — reducing CAC by leveraging
            distribution channels that already have patient trust.
          </p>

          <div className="relative pl-8">
            <div className="absolute left-0 top-2 bottom-2 w-px bg-ink/10" />
            <div className="flex flex-col gap-10">
              {phases.map((phase) => (
                <div key={phase.date} className="stagger-item reveal relative">
                  <div className="absolute left-[-1.625rem] top-1 w-3 h-3 rounded-full bg-accent ring-4 ring-paper" />
                  <p className="text-xs font-bold text-accent uppercase tracking-widest mb-1">{phase.date}</p>
                  <h3 className="font-semibold text-ink mb-1">{phase.title}</h3>
                  <p className="text-sm text-ink/50 leading-relaxed max-w-3xl">{phase.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </RevealSection>
  );
}

/* ─── 9. System Architecture + Tech Stack ────────────────────────────────── */

const archLayers = [
  {
    label: "Data Sources",
    boxStyle: { background: "#E6F7F5", border: "1px solid #0D9488", color: "#0A7268" },
    boxes: ["FDA Drug Database", "NIH / PubMed Research", "Retail Pharmacy APIs", "Corporate Partner Data"],
  },
  {
    label: "Data Ingestion",
    boxStyle: { background: "#E6F0FB", border: "1px solid #3B82C4", color: "#1E5A9C" },
    boxes: ["REST API Gateway", "FHIR / HL7 Adapter", "OCR Scan Pipeline", "Image Recognition Module"],
  },
  {
    label: "Processing Engine",
    boxStyle: { background: "#EDE6FB", border: "1px solid #7C3AED", color: "#5B21B6" },
    boxes: ["Drug Interaction (DI) Engine", "Contraindication Analyzer", "Drug Info Translator", "Notification Scheduler", "Auth & HIPAA Layer"],
  },
  {
    label: "Data Storage",
    boxStyle: { background: "#E6F4EA", border: "1px solid #16A34A", color: "#166534" },
    boxes: ["User DB", "Medication DB", "Drug Interaction DB", "Schedule DB", "Bio Profile DB", "AWS S3 Media"],
  },
  {
    label: "Presentation Layer",
    boxStyle: { background: "#E6F7F5", border: "1px solid #0D9488", color: "#0A7268" },
    boxes: ["Mobile App (iOS / Android)", "Push Notifications (APNs / FCM)", "Medication Dashboard", "Price Comparison UI"],
  },
];

const techStack = [
  { emoji: "☁️", label: "Azure App Services" },
  { emoji: "📦", label: "AWS S3 Storage" },
  { emoji: "🤖", label: "TensorFlow OCR Engine" },
  { emoji: "🔔", label: "APNs / FCM Push" },
  { emoji: "🔒", label: "HIPAA + FHIR / HL7" },
  { emoji: "🔐", label: "Auth0 / JWT Auth" },
  { emoji: "🗄️", label: "PostgreSQL + Redis" },
  { emoji: "💊", label: "FDA Drug API" },
];

function ArchSection() {
  return (
    <RevealSection direction="right">
      <section className="py-16 bg-white border-t border-gray-200">
        <div className="max-w-[1200px] mx-auto px-6">
          <SectionLabel index="06">Technical Architecture</SectionLabel>
          <h2 className="font-serif text-3xl font-bold text-ink mb-4">System Overview</h2>
          <p className="text-ink/50 max-w-3xl mb-10">
            Modular architecture designed for scalability — dedicated processing modules for OCR, drug interaction analysis,
            and notification delivery, fed by a multi-source external data layer.
          </p>

          {/* Architecture diagram */}
          <div className="border border-gray-200 rounded-lg p-6 bg-white overflow-x-auto mb-14">
            <div className="flex flex-col gap-5 min-w-[560px]">
              {archLayers.map((layer, i) => (
                <div key={layer.label}>
                  <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#1a1a1a" }}>{layer.label}</p>
                  <div className="flex flex-wrap gap-3">
                    {layer.boxes.map((text) => (
                      <div key={text} className="px-4 py-2 rounded-lg text-sm font-medium" style={layer.boxStyle}>
                        {text}
                      </div>
                    ))}
                  </div>
                  {i < archLayers.length - 1 && (
                    <div className="mt-4 pl-2 font-semibold" style={{ color: "#1a1a1a", fontSize: "18px" }}>↓</div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Tech stack */}
          <h3 className="font-bold text-ink mb-6">Tech Stack</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            {techStack.map((t) => (
              <div
                key={t.label}
                className="border-t border-ink/10 pt-4 pb-4 text-center"
              >
                <span className="text-2xl block mb-2">{t.emoji}</span>
                <span className="text-xs font-medium text-ink/60">{t.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </RevealSection>
  );
}

/* ─── Icons ──────────────────────────────────────────────────────────────── */

function DownloadIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  );
}
