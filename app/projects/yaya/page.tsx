import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FeatureCarousel from "@/components/FeatureCarousel";
import YayaPrototypeCTA from "./YayaPrototypeCTA";

export const metadata: Metadata = {
  title: "AI Financial Coach — AI-Powered Financial Inclusion Platform | Sage",
  description:
    "Product case study: AI Financial Coach — helping working mothers of disadvantaged backgrounds achieve economic mobility through personalized, AI-driven financial guidance.",
};

export default function AIFinancialCoachPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16 bg-paper">
        <PageHero />
        {/* Try Prototype CTA — below hero */}
        <div className="bg-gray-50 border-b border-gray-100 py-3">
          <div className="max-w-[1200px] mx-auto px-6 flex justify-center">
            <YayaPrototypeCTA />
          </div>
        </div>
        <MyRoleSection />
        <ProblemSection />
        <PersonasSection />
        <SolutionSection />
        <UserJourneySection />
        <ArchSection />
        <CompetitorSection />
        <MarketSection />
        <GTMSection />
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

/* ─── 00. Page Hero ──────────────────────────────────────────────────────── */

function PageHero() {
  const tags = ["FinTech", "Mobile App", "Product Management", "B2C", "Financial Inclusion"];
  const meta = [
    { label: "Role", value: "Product Manager" },
    { label: "Context", value: "CMU Tepper Tech Innovation Challenge 2022" },
    { label: "Year", value: "November 2022" },
    { label: "Team", value: "Team Yaya (4 Members)" },
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

        <h1 className="text-4xl md:text-5xl font-bold text-ink mb-2">AI Financial Coach</h1>
        <p className="text-xl text-ink/60 mb-10 max-w-2xl">
          An AI-powered personal finance platform designed to help underbanked, low-income
          Americans achieve economic mobility through personalized, real-time financial guidance.
        </p>

        <div className="flex flex-wrap gap-10">
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

/* ─── 01. My Contribution ────────────────────────────────────────────────── */

const contributions = [
  {
    emoji: "🎯",
    bg: "bg-teal-50",
    title: "Product Strategy & Roadmap",
    description:
      "Defined the product vision, feature prioritization framework, and phased roadmap. Led MoSCoW-style feature scoring across 4 user segments to align the team on MVP scope.",
  },
  {
    emoji: "👥",
    bg: "bg-blue-50",
    title: "User Research & Personas",
    description:
      'Developed the core user persona ("Monica") through pain-point analysis and demographic research. Mapped the end-to-end user journey from discovery through first financial recommendation.',
  },
  {
    emoji: "📱",
    bg: "bg-purple-50",
    title: "Prototyping",
    description:
      "Built the product prototype illustrating key user flows — spending dashboard, personalized recommendations, and financial product access — used in the final CMU presentation.",
  },
  {
    emoji: "🎤",
    bg: "bg-amber-50",
    title: "Presentation & Storytelling",
    description:
      "Co-developed the competition deck, structuring the narrative from problem framing through financials to secure finalist placement at CMU Tepper Tech Innovation Challenge.",
  },
];

function MyRoleSection() {
  return (
    <section className="py-16 bg-paper border-b border-gray-100">
      <div className="max-w-[1200px] mx-auto px-6">
        <SectionLabel index="01">My Contribution</SectionLabel>
        <h2 className="text-3xl font-bold text-ink mb-2">What I Did as Product Manager</h2>
        <p className="text-ink/60 max-w-2xl mb-10">
          As PM on a 4-person team, I led product strategy, user research, and prototyping —
          translating a complex financial inclusion problem into a concrete, user-centered product
          vision that took us to the CMU Tepper finals.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
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
      </div>
    </section>
  );
}

/* ─── 02. Problem ────────────────────────────────────────────────────────── */

const problemStats = [
  { number: "$12K", label: "Average new childcare expenses in Year 1 alone", warning: false },
  { number: "$230K", label: "Average cost of raising a child to age 17", warning: false },
  { number: "25M", label: "US mothers with children under 18 needing better financial planning", warning: false },
  { number: "~25%", label: "Higher credit card debt for Americans with 2 children vs. none", warning: true },
  { number: "56%", label: "Childcare expenses as share of African-American family income", warning: true },
  { number: "52%", label: "American households earning under $70K annually", warning: true },
];

function ProblemSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-[1200px] mx-auto px-6">
        <SectionLabel index="02">Problem</SectionLabel>
        <h2 className="text-3xl font-bold text-ink mb-4">Millions Are Left Behind by the Financial System</h2>
        <p className="text-ink/60 max-w-2xl mb-12">
          Underbanked, low-income Americans lack the financial tools and literacy to manage everyday expenses,
          avoid predatory products, and build toward long-term goals — trapping families in cycles of debt
          across generations.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
          {problemStats.map((s) => (
            <div
              key={s.label}
              className="border border-gray-200 rounded-xl p-6 bg-paper hover:border-accent transition-colors"
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

/* ─── 03. Target Users ───────────────────────────────────────────────────── */

const personas = [
  {
    emoji: "🤱",
    name: '"Monica"',
    role: "Assistant Store Manager · $70K household income · Two bank accounts, low financial literacy",
    quote: "I make the same amount of money but my expenses keep climbing. I don't know where to start.",
    avatarBg: "bg-rose-50",
  },
  {
    emoji: "🎯",
    name: '"The Planner"',
    role: "Hourly worker · Focused on building credit and saving for long-term goals",
    quote: "I want to save for a car and my kids' future, but I just seem to be spending faster than I earn.",
    avatarBg: "bg-teal-50",
  },
  {
    emoji: "📈",
    name: '"The Climber"',
    role: "Gig worker · Rebuilding credit · Seeking vetted loan options to avoid predatory lenders",
    quote: "I need a loan but I don't know which offers are safe. My credit score isn't where it needs to be.",
    avatarBg: "bg-blue-50",
  },
];

function PersonasSection() {
  return (
    <section className="py-20 bg-paper">
      <div className="max-w-[1200px] mx-auto px-6">
        <SectionLabel index="03">Target Users</SectionLabel>
        <h2 className="text-3xl font-bold text-ink mb-4">Who We&apos;re Building For</h2>
        <p className="text-ink/60 max-w-2xl mb-12">
          AI Financial Coach is designed for underbanked, low-income Americans who lack the tools and literacy to navigate financial decisions on their own.
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

/* ─── 04. Solution ───────────────────────────────────────────────────────── */

const features = [
  {
    emoji: "💡",
    title: "Personalized Savings Recommendations",
    bg: "bg-teal-50",
    description:
      "Analyzes spending patterns against similar user profiles in the same geography to surface specific, actionable savings opportunities at the merchant level.",
  },
  {
    emoji: "🔔",
    title: "Spending Alerts",
    bg: "bg-blue-50",
    description:
      "Real-time alerts when users exceed predicted budgets, paired with contextual guidance to help course-correct immediately.",
  },
  {
    emoji: "🏦",
    title: "Access to Approved Financial Products",
    bg: "bg-purple-50",
    description:
      "Curated, vetted financial products (credit cards, loans, insurance) ranked by personalized fit score — protecting users from predatory offerings.",
  },
  {
    emoji: "📈",
    title: "Auto-Investment",
    bg: "bg-amber-50",
    description:
      "Identifies low-risk investment opportunities to put idle savings to work with minimal user intervention.",
  },
  {
    emoji: "🎯",
    title: "Long-Term Goal Planning",
    bg: "bg-rose-50",
    description:
      "Ingests financial goals, timelines, and projected costs to build manageable, step-by-step plans for major milestones like buying a car or saving for college.",
  },
  {
    emoji: "📚",
    title: "Financial Education",
    bg: "bg-gray-100",
    description:
      "Promotes financial literacy through curated content partnerships, helping users build knowledge alongside their financial health.",
  },
];

function SolutionSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-[1200px] mx-auto px-6">
        <SectionLabel index="04">Solution</SectionLabel>
        <h2 className="text-3xl font-bold text-ink mb-4">Core Features</h2>
        <p className="text-ink/60 max-w-2xl mb-12">
          AI Financial Coach combines real-time spending intelligence, personalized financial product access, and
          long-term goal planning in one platform — powered by a self-improving data engine.
        </p>

        <FeatureCarousel
          features={features}
          ctaSlot={<YayaPrototypeCTA variant="button" />}
        />
      </div>
    </section>
  );
}

/* ─── 05. User Journey ───────────────────────────────────────────────────── */

const journeySteps = [
  { step: "1", title: "Download", description: "Discover AI Financial Coach via referral, social, or partner" },
  { step: "2", title: "Onboard", description: "Complete profile with income and goals" },
  { step: "3", title: "Connect", description: "Link bank accounts via Plaid integration" },
  { step: "4", title: "Analyze", description: "AI Financial Coach ingests spending and builds baseline" },
  { step: "5", title: "Recommend", description: "First personalized savings recommendation" },
  { step: "6", title: "Plan", description: "Set long-term financial goals with guided plans" },
  { step: "7", title: "Improve", description: "Model flywheel learns from outcomes over time" },
];

function UserJourneySection() {
  return (
    <section className="py-20 bg-paper">
      <div className="max-w-[1200px] mx-auto px-6">
        <SectionLabel index="05">User Journey</SectionLabel>
        <h2 className="text-3xl font-bold text-ink mb-4">End-to-End Experience Flow</h2>
        <p className="text-ink/60 max-w-2xl mb-12">
          From first download to first personalized recommendation — AI Financial Coach is designed to deliver
          immediate, tangible value.
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
  );
}

/* ─── 06. Technical Architecture ─────────────────────────────────────────── */

const archLayers = [
  {
    label: "Data Sources",
    boxes: [
      { text: "Empirical Research", style: "bg-amber-50 text-amber-700 border border-amber-200" },
      { text: "Professional Financial Planners", style: "bg-amber-50 text-amber-700 border border-amber-200" },
      { text: "Existing PNC Customer Data", style: "bg-amber-50 text-amber-700 border border-amber-200" },
    ],
  },
  {
    label: "Data Ingestion",
    boxes: [
      { text: "Customer External Bank Data", style: "bg-blue-50 text-blue-700 border border-blue-200" },
      { text: "Plaid Integration", style: "bg-blue-50 text-blue-700 border border-blue-200" },
    ],
  },
  {
    label: "AI Financial Coach Backend Engine",
    boxes: [
      { text: "Model Outcome Flywheel", style: "bg-teal-50 text-teal-700 border border-teal-200" },
      { text: "Recommendation Engine", style: "bg-teal-50 text-teal-700 border border-teal-200" },
    ],
  },
  {
    label: "Customer-Facing Output",
    boxes: [
      { text: "Personalized Recommendations", style: "bg-purple-50 text-purple-700 border border-purple-200" },
      { text: "Source New Model Outcomes", style: "bg-purple-50 text-purple-700 border border-purple-200" },
    ],
  },
];

const techStack = [
  { emoji: "🔗", label: "Plaid API Integration" },
  { emoji: "🤖", label: "AI/ML Recommendation Engine" },
  { emoji: "📊", label: "Behavioral Data Analytics" },
  { emoji: "🔄", label: "Model Outcome Flywheel" },
  { emoji: "🔒", label: "Bank-grade Data Security" },
  { emoji: "☁️", label: "Cloud Infrastructure" },
];

function ArchSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-[1200px] mx-auto px-6">
        <SectionLabel index="06">Technical Architecture</SectionLabel>
        <h2 className="text-3xl font-bold text-ink mb-4">AI Financial Coach&apos;s Model Outcome Flywheel</h2>
        <p className="text-ink/60 max-w-2xl mb-12">
          AI Financial Coach&apos;s strategic moat is its data engine — a self-improving flywheel that gets smarter with
          every user outcome, creating recommendations competitors cannot replicate.
        </p>

        <div className="border border-gray-200 rounded-xl p-8 bg-paper overflow-x-auto mb-14">
          <div className="flex flex-col gap-5 min-w-[560px]">
            {archLayers.map((layer, i) => (
              <div key={layer.label}>
                <p className="text-xs font-semibold text-ink/40 uppercase tracking-widest mb-3">{layer.label}</p>
                <div className="flex flex-wrap gap-3">
                  {layer.boxes.map((box) => (
                    <div key={box.text} className={`px-4 py-2 rounded-lg text-sm font-medium ${box.style}`}>
                      {box.text}
                    </div>
                  ))}
                </div>
                {i < archLayers.length - 1 && (
                  <div className="mt-4 text-gray-300 text-sm pl-2">↓</div>
                )}
              </div>
            ))}
          </div>
        </div>

        <h3 className="font-bold text-ink mb-6">Tech Stack</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {techStack.map((t) => (
            <div
              key={t.label}
              className="bg-gray-50 border border-gray-200 rounded-xl p-4 text-center hover:border-accent transition-colors"
            >
              <span className="text-2xl block mb-2">{t.emoji}</span>
              <span className="text-xs font-medium text-ink/60">{t.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── 07. Competitive Landscape ──────────────────────────────────────────── */

const competitorFeatures = [
  "Solution customizable to individual user",
  "Visibility to cross-institution spending data",
  "Directly integrated bank services",
  "Designed to improve over time (flywheel)",
  "Personalized financial product recommendations",
  "Targeted for underserved / low-income segment",
];
const competitors = ["AI Financial Coach", "Traditional Banks", "Mint / Advisory Apps"];
const matrix = [
  [true, false, false],
  [true, false, true],
  [true, true, false],
  [true, false, false],
  [true, false, false],
  [true, false, false],
];

function CompetitorSection() {
  return (
    <section className="py-20 bg-paper">
      <div className="max-w-[1200px] mx-auto px-6">
        <SectionLabel index="07">Competitive Landscape</SectionLabel>
        <h2 className="text-3xl font-bold text-ink mb-4">Feature Comparison Matrix</h2>
        <p className="text-ink/60 max-w-2xl mb-12">
          AI Financial Coach is the only platform combining bank-level data access, cross-institution spending
          visibility, and a self-improving recommendation engine — all tailored to an underserved segment.
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

/* ─── 08. Market Opportunity ─────────────────────────────────────────────── */

function MarketSection() {
  const funnel = [
    {
      label: "SAM — 25M",
      sub: "Working mothers with children under 18 needing financial planning support",
      widthClass: "w-full",
      color: "bg-accent",
    },
    {
      label: "SOM (Y5) — 1.5M",
      sub: "Projected serviceable obtainable market by Year 5 at 3% penetration",
      widthClass: "w-[35%]",
      color: "bg-purple-500",
    },
  ];

  const revenueStats = [
    { number: "$173M", label: "Projected incremental revenue for PNC over 5 years" },
    { number: "$110", label: "Incremental annual revenue per AI Financial Coach customer" },
    { number: "20%", label: "Share of AI Financial Coach users projected to become net new PNC customers" },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-[1200px] mx-auto px-6">
        <SectionLabel index="08">Market Opportunity</SectionLabel>
        <h2 className="text-3xl font-bold text-ink mb-4">Market Sizing</h2>
        <p className="text-ink/60 max-w-2xl mb-12">
          Targeting working mothers with household incomes under $70K — a 25M-person segment
          underserved by existing financial tools and highly motivated to adopt better solutions.
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

        <h3 className="font-bold text-ink mb-6">Revenue Projections</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {revenueStats.map((d) => (
            <div key={d.label} className="border border-gray-200 rounded-xl p-6 bg-paper">
              <p className="text-4xl font-bold text-accent mb-2">{d.number}</p>
              <p className="text-sm text-ink/60 leading-relaxed">{d.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── 09. Go-to-Market ───────────────────────────────────────────────────── */

const phases = [
  {
    phase: "MVP Launch",
    title: "Core Value Delivery",
    description:
      "Launch with two flagship features: Personalized Savings Recommendations and Spending Alerts. Objective: demonstrate immediate, tangible value and seed the model outcome flywheel.",
  },
  {
    phase: "Growth",
    title: "Build the User Base",
    description:
      "Drive acquisition through incentivized referrals, targeted digital advertising, influencer marketing on TikTok and YouTube, and in-person sign-up partnerships.",
  },
  {
    phase: "Monetization",
    title: "Activate Revenue Streams",
    description:
      "Introduce affiliate marketing for vetted financial products. Sell anonymized consortium data insights to partners. Offer 3-month interest-free promotions through distribution partners.",
  },
  {
    phase: "Long-term",
    title: "Generational Retention",
    description:
      "Encourage mothers to open PNC accounts for their children — creating a generational retention flywheel and expanding AI Financial Coach's addressable market over time.",
  },
];

function GTMSection() {
  return (
    <section className="py-20 bg-paper">
      <div className="max-w-[1200px] mx-auto px-6">
        <SectionLabel index="09">Go-to-Market Strategy</SectionLabel>
        <h2 className="text-3xl font-bold text-ink mb-4">Phased Market Entry</h2>
        <p className="text-ink/60 max-w-2xl mb-12">
          B2C-first through referral and digital channels, with B2B partnerships layered in
          to accelerate adoption and build institutional trust.
        </p>

        <div className="relative pl-8">
          <div className="absolute left-0 top-2 bottom-2 w-px bg-gray-200" />
          <div className="flex flex-col gap-10">
            {phases.map((phase) => (
              <div key={phase.phase} className="relative">
                <div className="absolute left-[-1.625rem] top-1 w-3 h-3 rounded-full bg-accent ring-4 ring-paper" />
                <p className="text-xs font-bold text-accent uppercase tracking-widest mb-1">{phase.phase}</p>
                <h3 className="font-semibold text-ink mb-1">{phase.title}</h3>
                <p className="text-sm text-ink/60 leading-relaxed max-w-2xl">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team credit + nav */}
        <div className="border-t border-gray-100 mt-16 pt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <p className="text-xs font-semibold text-ink/40 uppercase tracking-widest mb-1">Team</p>
            <p className="text-sm text-ink/60">
              Team Yaya · UCLA Anderson School of Management ·{" "}
              <strong className="text-ink">Sage Seo</strong>
            </p>
            <p className="text-xs text-ink/40 mt-1">CMU Tepper Tech Innovation Challenge 2022 · Finalist</p>
          </div>
          <Link href="/projects" className="text-sm font-medium text-ink/50 hover:text-ink transition-colors">
            ← All Projects
          </Link>
        </div>
      </div>
    </section>
  );
}
