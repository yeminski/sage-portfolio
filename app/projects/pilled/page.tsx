import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "PillEd — Smart Medication Management | Sage",
  description:
    "Product case study: PillEd — solving polypharmacy, medication nonadherence, and poor health literacy through an integrated mobile platform.",
};

export default function PillEdPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16 bg-paper">
        <PageHero />
        <ProblemSection />
        <PersonasSection />
        <SolutionSection />
        <CompetitorSection />
        <MarketSection />
        <GTMSection />
        <MyRoleSection />
      </main>
      <Footer />
    </>
  );
}

/* ─── Shared helpers ─────────────────────────────────────────────────────── */

function SectionLabel({ index, children }: { index: string; children: React.ReactNode }) {
  return (
    <p className="text-xs font-semibold text-accent uppercase tracking-widest mb-2">
      {index} — {children}
    </p>
  );
}

/* ─── 1. Page Hero ───────────────────────────────────────────────────────── */

function PageHero() {
  const tags = ["HealthTech", "Mobile App", "Product Management", "B2C", "HIPAA"];
  const meta = [
    { label: "Role", value: "Product Manager" },
    { label: "Context", value: "Anderson Product Innovation Challenge" },
    { label: "Year", value: "November 2022" },
    { label: "Team", value: "5 Members (MD/MBA + MBA)" },
  ];

  return (
    <div className="bg-gray-50 border-b border-gray-200">
      <div className="max-w-[1200px] mx-auto px-6 py-16">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-sm text-ink/40 hover:text-ink transition-colors mb-8"
        >
          ← Back to Projects
        </Link>

        <div className="flex flex-wrap gap-2 mb-5">
          {tags.map((t) => (
            <span key={t} className="px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent">
              {t}
            </span>
          ))}
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-ink mb-2">PillEd</h1>
        <p className="text-xl text-ink/60 mb-10 max-w-2xl">
          A user-friendly mobile platform tackling polypharmacy, medication nonadherence,
          and poor health literacy — making medication management safer, smarter, and simpler.
        </p>

        <div className="flex flex-wrap gap-10">
          {meta.map(({ label, value }) => (
            <div key={label}>
              <p className="text-xs font-semibold text-ink/40 uppercase tracking-widest mb-1">{label}</p>
              <p className="text-sm font-medium text-ink">{value}</p>
            </div>
          ))}
        </div>

        <div className="mt-8">
          <a
            href="/pilled-deck.pdf"
            download
            className="inline-flex items-center gap-2 text-sm font-medium text-accent border border-accent/30 px-4 py-2 rounded hover:bg-accent/5 transition-colors"
          >
            <DownloadIcon /> Download Pitch Deck
          </a>
        </div>
      </div>
    </div>
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
    <section className="py-20 bg-paper">
      <div className="max-w-[1200px] mx-auto px-6">
        <SectionLabel index="01">Problem</SectionLabel>
        <h2 className="text-3xl font-bold text-ink mb-4">Pharmaceuticals &amp; the American Consumer</h2>
        <p className="text-ink/60 max-w-2xl mb-12">
          Millions of Americans face serious health risks from medication mismanagement. The data reveals
          a systemic crisis at the intersection of polypharmacy, nonadherence, and low health literacy.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
          {problemStats.map((s) => (
            <div
              key={s.label}
              className="border border-gray-200 rounded-xl p-6 hover:border-accent transition-colors"
            >
              <p className={`text-4xl font-bold mb-2 ${s.warning ? "text-red-500" : "text-accent"}`}>
                {s.number}
              </p>
              <p className="text-sm text-ink/60 leading-relaxed">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
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
    <section className="py-20 bg-gray-50">
      <div className="max-w-[1200px] mx-auto px-6">
        <SectionLabel index="02">Target Users</SectionLabel>
        <h2 className="text-3xl font-bold text-ink mb-4">Who We&apos;re Building For</h2>
        <p className="text-ink/60 max-w-2xl mb-12">
          Three distinct user segments with a shared need: reliable, understandable medication guidance.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {personas.map((p) => (
            <div
              key={p.name}
              className="bg-paper border border-gray-200 rounded-xl p-6 text-center hover:border-accent transition-colors"
            >
              <div className={`w-16 h-16 ${p.avatarBg} rounded-full flex items-center justify-center text-3xl mx-auto mb-4`}>
                {p.emoji}
              </div>
              <h3 className="font-bold text-ink mb-1">{p.name}</h3>
              <p className="text-xs text-ink/50 mb-5">{p.role}</p>
              <div className="bg-gray-50 rounded-lg p-4 text-left border-l-4 border-accent">
                <p className="text-sm italic text-ink/70">&ldquo;{p.quote}&rdquo;</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── 4. Solution ────────────────────────────────────────────────────────── */

const features = [
  { emoji: "📷", title: "OCR Medication Scan", bg: "bg-teal-50", description: "Point your camera at any medication to instantly identify it. Image recognition matches pills against a comprehensive drug database at 90%+ accuracy." },
  { emoji: "⚠️", title: "Drug Interaction Alerts", bg: "bg-rose-50", description: "Automatic drug-drug interaction checking with risk level classification (High/Medium/Low). Real-time contraindication warnings based on user profile." },
  { emoji: "⏰", title: "Smart Scheduling", bg: "bg-blue-50", description: "Personalized dosing schedules with push notifications, snooze support, dose tracking history, and adherence analytics." },
  { emoji: "📖", title: "Digestible Drug Info", bg: "bg-purple-50", description: "Medical jargon translated into plain language. Dosage, storage, side effects, and precautions presented for users with any literacy level." },
  { emoji: "💰", title: "Price Comparison", bg: "bg-amber-50", description: "Compare prices across retail pharmacy partners, add to a wishlist, and purchase directly through in-app integrations." },
  { emoji: "👤", title: "Personalized Profile", bg: "bg-gray-100", description: "Age, gender, weight, pregnancy status, and allergies — all factored into personalized contraindication alerts and recommendations." },
];

function SolutionSection() {
  return (
    <section className="py-20 bg-paper">
      <div className="max-w-[1200px] mx-auto px-6">
        <SectionLabel index="03">Solution</SectionLabel>
        <h2 className="text-3xl font-bold text-ink mb-4">Core Features</h2>
        <p className="text-ink/60 max-w-2xl mb-12">
          PillEd integrates six critical capabilities into a single app — a combination no competitor currently offers.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="group border border-gray-200 rounded-xl p-6 hover:border-accent transition-colors relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-accent scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
              <div className={`w-10 h-10 ${f.bg} rounded-xl flex items-center justify-center text-xl mb-4`}>
                {f.emoji}
              </div>
              <h3 className="font-semibold text-ink mb-2">{f.title}</h3>
              <p className="text-sm text-ink/60 leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── 5. Competitive Matrix ──────────────────────────────────────────────── */

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
    <section className="py-20 bg-gray-50">
      <div className="max-w-[1200px] mx-auto px-6">
        <SectionLabel index="04">Competitive Landscape</SectionLabel>
        <h2 className="text-3xl font-bold text-ink mb-4">Feature Comparison Matrix</h2>
        <p className="text-ink/60 max-w-2xl mb-12">
          Existing solutions address fragments of the problem. PillEd is the only platform covering all critical capabilities.
        </p>

        <div className="overflow-x-auto rounded-xl border border-gray-200 bg-paper">
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
  );
}

/* ─── 6. Market ──────────────────────────────────────────────────────────── */

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
    <section className="py-20 bg-paper">
      <div className="max-w-[1200px] mx-auto px-6">
        <SectionLabel index="05">Market Opportunity</SectionLabel>
        <h2 className="text-3xl font-bold text-ink mb-4">Market Sizing</h2>
        <p className="text-ink/60 max-w-2xl mb-12">
          Targeting the &ldquo;Mother&rdquo; (4.0M) and &ldquo;Caregiver&rdquo; (7.3M) segments with a $50/year freemium subscription model.
        </p>

        {/* TAM/SAM/SOM funnel */}
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

        {/* Growth drivers */}
        <h3 className="font-bold text-ink mb-6">Growth Drivers</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {drivers.map((d) => (
            <div key={d.label} className="border border-gray-200 rounded-xl p-6">
              <p className="text-4xl font-bold text-accent mb-2">{d.number}</p>
              <p className="text-sm text-ink/60 leading-relaxed">{d.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── 7. Go-to-Market ────────────────────────────────────────────────────── */

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
    <section className="py-20 bg-gray-50">
      <div className="max-w-[1200px] mx-auto px-6">
        <SectionLabel index="06">Go-to-Market Strategy</SectionLabel>
        <h2 className="text-3xl font-bold text-ink mb-4">Phased Market Entry</h2>
        <p className="text-ink/60 max-w-2xl mb-12">
          A B2B-first approach to build medical credibility before scaling to consumers — reducing CAC by leveraging
          distribution channels that already have patient trust.
        </p>

        <div className="relative pl-8">
          <div className="absolute left-0 top-2 bottom-2 w-px bg-gray-200" />
          <div className="flex flex-col gap-10">
            {phases.map((phase) => (
              <div key={phase.date} className="relative">
                <div className="absolute left-[-1.625rem] top-1 w-3 h-3 rounded-full bg-accent ring-4 ring-gray-50" />
                <p className="text-xs font-bold text-accent uppercase tracking-widest mb-1">{phase.date}</p>
                <h3 className="font-semibold text-ink mb-1">{phase.title}</h3>
                <p className="text-sm text-ink/60 leading-relaxed max-w-2xl">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── 8. My Role ─────────────────────────────────────────────────────────── */

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
    <section className="py-20 bg-paper">
      <div className="max-w-[1200px] mx-auto px-6">
        <SectionLabel index="07">My Contribution</SectionLabel>
        <h2 className="text-3xl font-bold text-ink mb-4">What I Did as Product Manager</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {contributions.map((c) => (
            <div
              key={c.title}
              className="border border-gray-200 rounded-xl p-6 hover:border-accent transition-colors"
            >
              <div className={`w-10 h-10 ${c.bg} rounded-xl flex items-center justify-center text-xl mb-4`}>
                {c.emoji}
              </div>
              <h3 className="font-semibold text-ink mb-2">{c.title}</h3>
              <p className="text-sm text-ink/60 leading-relaxed">{c.description}</p>
            </div>
          ))}
        </div>

        {/* Team credit + nav */}
        <div className="border-t border-gray-100 pt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <p className="text-xs font-semibold text-ink/40 uppercase tracking-widest mb-1">Team</p>
            <p className="text-sm text-ink/60">
              Tommy Jiang · Michelle Li · <strong className="text-ink">Sage Seo</strong> · Tae Jun Jeon · Yonghwan Choi
            </p>
          </div>
          <div className="flex items-center gap-6">
            <a
              href="/pilled-deck.pdf"
              download
              className="text-sm font-medium text-accent hover:underline"
            >
              Download Deck →
            </a>
            <Link href="/projects" className="text-sm font-medium text-ink/50 hover:text-ink transition-colors">
              ← All Projects
            </Link>
          </div>
        </div>
      </div>
    </section>
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
