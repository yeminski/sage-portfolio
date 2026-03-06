// ─── Types ───────────────────────────────────────────────────────────────────

export interface Project {
  id: string;
  slug: string;
  title: string;
  category: string;
  competition: string;
  year: string;
  problem: string;
  solution?: string;
  myRole: string;
  keyDecisions: string[];
  outcome: string;
  tags: string[];
  detailHref?: string;
}

export interface Capability {
  id: string;
  title: string;
  subtitle: string;
  skills: string[];
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  tenure: string;
  highlights: string[];
  slug: string;
}

export interface FullExperience {
  id: string;
  slug: string;
  company: string;
  role: string;
  tenure: string;
  location: string;
  context: string;
  myRole: string;
  keyDecisions: string[];
  systemsData: string[];
  businessImpact: string[];
  whatILearned: string;
  tags: string[];
}

export interface NavLink {
  label: string;
  href: string;
}

export interface AboutItem {
  id: string;
  title: string;
  description: string;
}

// ─── Navigation ──────────────────────────────────────────────────────────────

export const navLinks: NavLink[] = [
  { label: "About", href: "/#about" },
  { label: "Work", href: "/experience" },
  { label: "Projects", href: "/projects" },
];

// ─── About Me Grid (6 items, 3×2) ────────────────────────────────────────────

export const aboutItems: AboutItem[] = [
  {
    id: "zero-to-one",
    title: "0-to-1 PM",
    description:
      "I've taken products from blank page to shipped, defining MVP scope, aligning cross-functional teams, and making high-conviction calls with incomplete information. I'm most energized when there's no playbook yet.",
  },
  {
    id: "fintech-enthusiast",
    title: "Fintech Enthusiast",
    description:
      "I'm drawn to the infrastructure that makes money move — payments rails, cross-border flows, pricing systems, and the unit economics underneath. I hold CFA Level I and bring financial fluency into every product decision.",
  },
  {
    id: "strategist",
    title: "Strategist",
    description:
      "I connect market signals, customer needs, and business constraints into product strategies that hold up under scrutiny. My MBA sharpened how I frame problems, prioritize ruthlessly, and build narratives that get buy-in.",
  },
  {
    id: "design-thinker",
    title: "Experience Designer",
    description:
      "Combining design thinking with product instinct, I map user flows, prototype solutions, and iterate until every interaction earns its place. Comfortable in Figma and AI-assisted prototyping, with hands-on experience across end-to-end UI/UX design.",
  },
  {
    id: "data-driven",
    title: "Data-Driven",
    description:
      "I anchor decisions in data — defining metrics before building, running A/B tests, and knowing when the data is telling you something versus when it's just noise. Fluent in SQL and experimentation frameworks.",
  },
  {
    id: "ai-native",
    title: "AI Native",
    description:
      "I build with AI, not just alongside it. I prototype using Cursor, Claude Code, and no-code tools to move fast, validate early, and reduce dependency on engineering cycles.",
  },
];

// ─── Hero ─────────────────────────────────────────────────────────────────────

export const hero = {
  name: "Sage",
  tagline: "Product Manager. CFA. Fintech Enthusiast.",
  subHeadline:
    "I bridge the gap between complex financial systems and user-centered product design. Previously leading hardware & service PM at Epson America, now focused on building the next generation of Fintech products.",
  ctaPrimary: { label: "Download Resume", href: "/resume.pdf" },
  ctaSecondary: { label: "View Projects", href: "#projects" },
};

// ─── Core Capabilities ───────────────────────────────────────────────────────

export const capabilities: Capability[] = [
  {
    id: "product-strategy",
    title: "Product Strategy & Roadmapping",
    subtitle: "Turning vision into actionable plans",
    skills: [
      "OKR-driven roadmap planning",
      "Competitive landscape analysis",
      "Market sizing & TAM research",
      "Go-to-market strategy",
      "Stakeholder alignment",
      "Product vision definition",
    ],
  },
  {
    id: "fintech-domain",
    title: "Fintech Domain Knowledge",
    subtitle: "Deep financial services expertise",
    skills: [
      "Payments & money movement",
      "Banking-as-a-Service (BaaS)",
      "Regulatory compliance (KYC/AML)",
      "Investment & wealth management",
      "CFA charterholder fundamentals",
      "Financial data modeling",
    ],
  },
  {
    id: "execution",
    title: "Product Execution & Delivery",
    subtitle: "Getting things shipped, on time",
    skills: [
      "Agile / Scrum facilitation",
      "Sprint planning & backlog grooming",
      "Cross-functional team leadership",
      "Hardware & software development cycles",
      "Vendor & partner management",
      "Risk mitigation planning",
    ],
  },
  {
    id: "data-analytics",
    title: "Data & Analytics",
    subtitle: "Decisions grounded in evidence",
    skills: [
      "KPI definition & tracking",
      "A/B testing & experimentation",
      "SQL for product analytics",
      "User funnel analysis",
      "Dashboard design (Tableau / Looker)",
      "Cohort & retention analysis",
    ],
  },
  {
    id: "user-research",
    title: "User Research & Design Thinking",
    subtitle: "Empathy-first product development",
    skills: [
      "User interviews & usability testing",
      "Jobs-to-be-done framework",
      "Persona development",
      "Wireframing & prototyping (Figma)",
      "Journey mapping",
      "Voice-of-customer programs",
    ],
  },
];

// ─── Key Experiences ─────────────────────────────────────────────────────────

export const experiences: Experience[] = [
  {
    id: "epson-hardware",
    company: "Epson America",
    role: "Senior Product Manager — Hardware",
    tenure: "2020 – 2024",
    highlights: [
      "Led end-to-end lifecycle management for a $120M+ printer hardware portfolio across B2B and consumer segments.",
      "Orchestrated cross-functional launches with engineering, supply chain, and marketing, reducing TTM by 15%.",
      "Defined hardware roadmap for next-generation large-format printers, securing executive buy-in for 3-year investment.",
    ],
    slug: "epson-hardware",
  },
  {
    id: "epson-service",
    company: "Epson America",
    role: "Product Manager — Service & Support",
    tenure: "2018 – 2020",
    highlights: [
      "Redesigned service contract offerings, increasing attach rate by 22% and adding $8M in annual recurring revenue.",
      "Built and launched a self-service support portal used by 200K+ customers per quarter.",
      "Partnered with field service teams to reduce average resolution time by 30% through predictive maintenance tooling.",
    ],
    slug: "epson-service",
  },
  {
    id: "fintech-transition",
    company: "Independent Study & CFA Program",
    role: "CFA Candidate & Fintech PM Student",
    tenure: "2024 – Present",
    highlights: [
      "Passed CFA Level I exam; currently preparing for Level II with focus on equity valuation and fixed income.",
      "Completed product management coursework covering Fintech verticals: payments, lending, wealth-tech, and insurtech.",
      "Built side projects exploring open banking APIs and personal finance product design.",
    ],
    slug: "fintech-transition",
  },
];

// ─── Projects ─────────────────────────────────────────────────────────────────

export const projects: Project[] = [
  {
    id: "pilled",
    slug: "pilled",
    title: "PillEd — Smart Medication Management",
    category: "Product Case Study",
    competition: "Anderson Product Innovation Challenge",
    year: "2022",
    problem:
      "Medication nonadherence affects 50% of US adults and costs the healthcare system $50B annually — yet most patients lack the tools to manage complex drug regimens safely.",
    solution:
      "PillEd is a mobile app that uses OCR scanning, automated drug interaction alerts, and plain-language drug information to make medication management safer and simpler for every patient.",
    myRole:
      "Product Manager & Strategist — defined product vision, roadmap, and phased go-to-market strategy. Led competitive analysis, TAM/SAM/SOM market sizing across the Caregiver and Mother segments, user persona development, and 5-year revenue modeling across three monetization streams.",
    keyDecisions: [
      "Integrated OCR scanning + drug interaction checking + plain-language drug info into one app — no competitor offers all three, making the combination the primary and defensible differentiator.",
      "Chose a B2B-first GTM through hospital partnerships before consumer launch — to build clinical credibility and reduce CAC by leveraging the medical community as a distribution channel.",
      "Freemium model with $50/year subscription gated behind real-time pharmacist consultations — keeping core safety features free to maximize adoption while monetizing the highest-value use case.",
      "Prioritized 'Caregiver' (7.3M) and 'Mother' (4.0M) as primary personas over 'Healthcare Provider' — higher urgency, lower health literacy, and a more accessible consumer GTM.",
    ],
    outcome:
      "Presented at Anderson Product Innovation Challenge, November 2022. The integrated OCR + DI + health literacy combination was cited as a uniquely defensible product position by the panel. Team of 5 (MD/MBA + MBA candidates).",
    tags: [
      "HealthTech",
      "Mobile App",
      "B2C",
      "Product Strategy",
      "Market Sizing",
      "User Research",
      "HIPAA",
    ],
    detailHref: "/projects/pilled",
  },
  {
    id: "yaya",
    slug: "yaya",
    title: "Yaya — AI-Powered Financial Inclusion Platform",
    category: "Case Competition",
    competition: "CMU Tepper Tech Innovation Challenge 2022",
    year: "2022",
    problem:
      "Millions of underbanked Americans lack the financial tools and literacy to manage everyday expenses, avoid predatory products, and build toward long-term goals.",
    solution:
      "Yaya is an AI-powered mobile platform that delivers personalized spending insights, vetted financial product recommendations, and goal-based planning — helping low-income families achieve economic mobility.",
    myRole:
      "Product Manager — led product strategy, user research, persona development, and prototyping. Structured the competition narrative from problem framing through financials, securing finalist placement at CMU Tepper.",
    keyDecisions: [
      "Built a self-improving model outcome flywheel as Yaya's core moat — recommendations get smarter with every user outcome, creating a defensible edge competitors cannot quickly replicate.",
      "Prioritized 'Monica' (new working mother, $70K HHI) as the primary persona over broader segments — highest urgency, most acute expense shock, and clearest product-market fit.",
      "Chose B2C-first GTM through referral and digital channels before layering in B2B partnerships — to seed the flywheel with real user data before institutional distribution.",
      "Scoped MVP to two features only (Savings Recommendations + Spending Alerts) — enough to demonstrate immediate value and start the data flywheel without overbuilding.",
    ],
    outcome:
      "Finalist at CMU Tepper Tech Innovation Challenge 2022. Judges cited the model outcome flywheel as the most defensible moat in the cohort. Projected $173M incremental revenue for PNC over 5 years.",
    tags: ["FinTech", "Financial Inclusion", "AI/ML", "B2C", "Mobile App", "User Research"],
    detailHref: "/projects/yaya",
  },
];

// ─── Full Experiences (Experience Page) ──────────────────────────────────────

export const fullExperiences: FullExperience[] = [
  {
    id: "epson-spm-hardware",
    slug: "epson-spm-hardware",
    company: "Epson America",
    role: "Senior Product Manager — Hardware",
    tenure: "2020 – 2024",
    location: "Long Beach, CA",
    context:
      "Epson America's hardware division generates $350M+ in annual North American revenue across large-format printers, office inkjets, and point-of-sale devices. I owned the large-format and office hardware portfolio — 12+ active SKUs across 3 product lines — serving both enterprise B2B accounts (schools, architecture firms, retailers) and consumer channels (Amazon, Best Buy, Costco).",
    myRole:
      "End-to-end lifecycle owner: 3-year roadmap definition, stage-gate management, Japan engineering liaison, channel pricing, and cross-functional launch leadership across supply chain, marketing, legal, and field sales. Managed a portfolio contributing ~$120M in annual revenue.",
    keyDecisions: [
      "Consolidated 4 overlapping product lines into 2 focused families after a SKU audit revealed 40% of the catalog drove <5% of revenue — simplifying supply chain and improving gross margin by ~3pp.",
      "Shifted roadmap investment toward B2B large-format over consumer inkjet after modeling showed 3× higher customer LTV for commercial accounts despite lower unit volume.",
      "Championed a cloud-connected ink monitoring feature over engineering objections — it required a firmware rearchitecture but became a decisive differentiator in enterprise RFP responses within 18 months of launch.",
      "Introduced a modular accessory strategy (media trays, cutter attachments) to open post-purchase revenue streams and increase account expansion within existing B2B installs.",
    ],
    systemsData: [
      "Used Salesforce CRM data to model B2B pipeline velocity and SKU-level attach rates, identifying which product configurations correlated with upsell into service contracts.",
      "Pulled SAP inventory data weekly to spot SKUs trending toward 90-day supply excess and initiated EOL/markdown recommendations early enough to avoid writedowns.",
      "Built Excel-based scenario models for hardware margin analysis across 6 regional pricing variants, used directly in executive pricing reviews.",
      "Partnered with the data team to track sell-through velocity from NPD and internal POS feeds to calibrate production forecasts against real demand signals.",
    ],
    businessImpact: [
      "Reduced portfolio SKU count by 28%, recovering ~3pp of gross margin through supply simplification.",
      "Cut new-hardware time-to-market by 15% by redesigning the stage-gate process and eliminating two redundant sign-off steps.",
      "Secured $12M capex approval for the next-generation large-format platform through a market-sizing model presented to the North American GM.",
      "Cloud ink monitoring feature contributed to a 19% increase in B2B account renewal rate in the first year post-launch.",
    ],
    whatILearned:
      "Hardware PM taught me to think in full systems — a decision made in engineering ripples immediately into supply chain lead times, retail pricing, service costs, and customer support load. I learned to hold 18-month and 3-year horizons simultaneously, make confident sourcing calls with incomplete information, and translate between Japanese engineering culture and North American commercial urgency. The biggest growth was developing margin discipline: every feature request gets evaluated not just on customer value but on landed cost, service cost, and end-of-life implications.",
    tags: [
      "Hardware PM",
      "Roadmapping",
      "B2B",
      "Supply Chain",
      "P&L Ownership",
      "Go-to-Market",
      "Salesforce",
      "SAP",
    ],
  },
  {
    id: "epson-pm-service",
    slug: "epson-pm-service",
    company: "Epson America",
    role: "Product Manager — Service & Support",
    tenure: "2018 – 2020",
    location: "Long Beach, CA",
    context:
      "Epson's North American service division managed extended warranty programs, repair depot operations, and customer-facing support tooling for a 5M+ active device base. The business ran on thin margins and faced rising Tier-1 support contact costs as the product portfolio expanded.",
    myRole:
      "Owned two distinct product tracks: (1) service contract packaging and channel distribution — pricing, SKU design, and retail/OEM partner go-to-market; (2) digital self-service — a 0→1 build of a web support portal to deflect phone and chat contacts. This was my first role with direct P&L responsibility.",
    keyDecisions: [
      "Redesigned service contract packaging from 3 generic tiers to 5 customer-segment-specific plans after research showed SMB and enterprise buyers had fundamentally different coverage needs — increased attach rate without raising cost.",
      "Prioritized a web-first self-service portal over mobile app using contact-source data showing 78% of support interactions originated from desktop/laptop environments.",
      "Built the portal's diagnostic flow around the top 20 product issue types, which data showed accounted for 65% of total contact volume — maximizing deflection with minimum build scope.",
      "Held off on integrating live chat until the portal's deflection rate validated demand — avoided premature scaling of support headcount.",
    ],
    systemsData: [
      "Analyzed 18 months of Salesforce Service Cloud ticket data to identify the highest-volume, most-deflectable contact reasons and sequence portal feature development accordingly.",
      "Used NPS and CSAT survey data to segment satisfied vs. struggling customers and inform in-portal guidance copy and escalation triggers.",
      "Built a cost-per-contact model (fully-loaded Tier-1 agent cost vs. self-service cost) to quantify the P&L impact of each portal feature shipped — used in every sprint prioritization review.",
    ],
    businessImpact: [
      "Service contract attach rate grew from 18% → 22% within 12 months of packaging redesign.",
      "Self-service portal reached 200K+ monthly visits within 6 months of launch, deflecting an estimated $1.2M in annual Tier-1 support costs.",
      "Portal CSAT scored 4.3/5 in the first quarterly survey — above the 4.0 internal benchmark for digital support experiences.",
    ],
    whatILearned:
      "Service products taught me that the product isn't the software or the contract — it's the customer's experience in a moment of frustration. Every second of unnecessary friction has a calculable cost. I also learned the power of data sequencing: it's not enough to have good data, you have to know which question to ask first. Owning a P&L for the first time gave me a commercial instinct I now apply instinctively — I can't evaluate a feature request without also asking what it costs to support.",
    tags: [
      "Service Products",
      "0→1 Build",
      "P&L Ownership",
      "Self-Service",
      "B2B & B2C",
      "Salesforce Service Cloud",
      "NPS / CSAT",
    ],
  },
  {
    id: "epson-apm",
    slug: "epson-apm",
    company: "Epson America",
    role: "Associate Product Manager — Consumer Inkjet",
    tenure: "2016 – 2018",
    location: "Long Beach, CA",
    context:
      "The consumer inkjet division shipped 20+ SKUs per year into high-velocity retail channels — Amazon, Best Buy, Costco, Walmart — competing directly with HP and Canon on price, features, and in-store placement. I joined as Epson's first formal APM, supporting 3 senior PMs.",
    myRole:
      "Supported competitive teardowns, go-to-market planning, and retail channel data analysis across the full consumer inkjet portfolio. By the end of my first year, I independently owned project management for 2 product launches.",
    keyDecisions: [
      "Proposed and secured approval to integrate Amazon Dash Replenishment into Epson's consumer inkjet lineup — Epson's first connected-replenishment feature — by building a business case showing expected ink cartridge repurchase lift.",
      "Identified a retail pricing anomaly where one SKU was cannibalizing a higher-margin adjacent model; built a price repositioning proposal adopted by senior PM that recovered ~$400K in annual margin.",
      "Designed a reusable competitive analysis framework (feature matrix + pricing ladder + channel positioning) that became the team standard and was used across 8+ subsequent launches.",
    ],
    systemsData: [
      "Built weekly sell-through dashboards using NPD market data and internal POS feeds to compare sell-in forecasts against actual retail velocity — flagging overstocked SKUs before they required markdown.",
      "Used Excel pivot models to analyze product-mix shifts across price tiers and surface margin risk when consumers traded down.",
      "Conducted 15+ in-person consumer interviews to inform packaging copy, out-of-box experience improvements, and setup flow redesign.",
    ],
    businessImpact: [
      "Amazon Dash Replenishment integration drove a 9% lift in ink cartridge repurchase rate on enrolled devices within the first 6 months.",
      "Retail pricing repositioning recovered ~$400K in annual gross margin on the affected SKU pair.",
      "Competitive framework reduced time spent on new launch teardowns by ~30% across the team.",
    ],
    whatILearned:
      "Being an APM taught me influence without authority — the only way to move senior PMs and cross-functional partners was to do the analysis they didn't have time for and make it undeniable. I also developed deep retail channel literacy: understanding how products are priced, placed, and sold at shelf is a fundamentally different problem from building them. The Amazon Dash project was my first experience turning a data insight into a cross-functional initiative, and it instilled an instinct I still rely on — start with the customer behavior, then work backward to the feature.",
    tags: [
      "Consumer Products",
      "Retail Channels",
      "Go-to-Market",
      "Competitive Analysis",
      "Amazon",
      "Data Analysis",
    ],
  },
  {
    id: "cfa-independent",
    slug: "cfa-independent",
    company: "Independent — CFA Program & Fintech Study",
    role: "CFA Candidate & Fintech PM Transition",
    tenure: "2024 – Present",
    location: "Remote",
    context:
      "A deliberate, structured career transition year. After 8 years in hardware and service PM at Epson, I recognized that my skills in systems thinking, margin discipline, and cross-functional execution were highly transferable to Fintech — but I needed to close a domain knowledge gap and build a visible portfolio of Fintech product work.",
    myRole:
      "Self-directed curriculum design and execution: CFA Level I/II preparation, Fintech product coursework, case competition participation, and portfolio project development. Treated the transition itself as a product problem — defined the target user (Fintech PM hiring managers), identified the gap, sequenced the work, and tracked leading indicators.",
    keyDecisions: [
      "Chose CFA over MBA as the primary credential investment: better domain signal for Fintech PM, lower opportunity cost (18 months vs. 2 years), and direct relevance to investor-facing and finance-team conversations.",
      "Targeted case competitions over side-project coding to build portfolio work that showcases PM skills (problem framing, prioritization, stakeholder management) rather than engineering execution.",
      "Focused on payments and wealth-tech as primary verticals after analyzing 200+ Fintech PM job postings to identify the highest-frequency required domain knowledge.",
      "Structured weekly learning blocks to mirror a PM sprint: define the week's learning goal on Monday, synthesize and reflect on Friday — avoiding passive consumption in favor of output-oriented study.",
    ],
    systemsData: [
      "Used Plaid and MX sandbox APIs to understand account aggregation data flows, OAuth handshakes, and the real-world constraints that shape personal finance product decisions.",
      "Built DCF and LBO models in Excel as part of CFA curriculum — developed fluency in the financial language used by the business stakeholders Fintech PMs work alongside.",
      "Conducted product teardowns of Robinhood, Chime, Betterment, and Stripe — mapping feature evolution against regulatory milestones and funding rounds to understand how compliance constraints shape product roadmaps.",
    ],
    businessImpact: [
      "Passed CFA Level I (top quartile score); currently studying for Level II (June 2026 sitting).",
      "Won 1st place at USC Marshall FinovateX Product Challenge (Verdant ESG Robo-Advisor).",
      "Placed 2nd at UCLA Anderson Fintech Case Competition (ClearPath Embedded Wallet).",
    ],
    whatILearned:
      "Transitioning intentionally is harder than it looks — the instinct is to move faster than the market will allow. I learned to reframe my hardware background not as a liability but as a rare combination: I understand systems, I've owned margins, and I know what it means to ship physical and digital products at scale. The CFA curriculum also changed how I read business problems — I now default to thinking about unit economics and capital allocation before features. The biggest surprise was how much case competitions accelerated my Fintech instincts. Nothing sharpens domain knowledge faster than having to defend a product decision in front of practitioners.",
    tags: [
      "Career Transition",
      "CFA",
      "Fintech",
      "Payments",
      "Wealth Tech",
      "Open Banking",
      "Self-Directed Learning",
    ],
  },
];

// ─── Search Index ─────────────────────────────────────────────────────────────

export interface SearchEntry {
  id: string;
  section: string;
  text: string;
  anchor: string;
}

export const searchIndex: SearchEntry[] = [
  // Projects (including PillEd detail page)
  ...projects.flatMap((proj) => [
    {
      id: `proj-title-${proj.id}`,
      section: "Projects",
      text: `${proj.title} — ${proj.competition} (${proj.year})`,
      anchor: `/projects#${proj.slug}`,
    },
    {
      id: `proj-problem-${proj.id}`,
      section: "Projects",
      text: proj.problem,
      anchor: `/projects#${proj.slug}`,
    },
    ...proj.tags.map((tag, i) => ({
      id: `proj-tag-${proj.id}-${i}`,
      section: "Projects",
      text: tag,
      anchor: `/projects#${proj.slug}`,
    })),
  ]),
  // Capabilities
  ...capabilities.flatMap((cap) => [
    {
      id: `cap-title-${cap.id}`,
      section: "Core Capabilities",
      text: `${cap.title} — ${cap.subtitle}`,
      anchor: "#capabilities",
    },
    ...cap.skills.map((skill, i) => ({
      id: `cap-skill-${cap.id}-${i}`,
      section: "Core Capabilities",
      text: skill,
      anchor: "#capabilities",
    })),
  ]),
  // Experiences (landing page summary)
  ...experiences.flatMap((exp) => [
    {
      id: `exp-title-${exp.id}`,
      section: "Key Experiences",
      text: `${exp.company} — ${exp.role} (${exp.tenure})`,
      anchor: "#experience",
    },
    ...exp.highlights.map((h, i) => ({
      id: `exp-highlight-${exp.id}-${i}`,
      section: "Key Experiences",
      text: h,
      anchor: "#experience",
    })),
  ]),
  // Full experiences (experience page)
  ...fullExperiences.flatMap((exp) => [
    {
      id: `full-exp-title-${exp.id}`,
      section: "Experience",
      text: `${exp.company} — ${exp.role} (${exp.tenure})`,
      anchor: `/experience#${exp.slug}`,
    },
    {
      id: `full-exp-context-${exp.id}`,
      section: "Experience",
      text: exp.context,
      anchor: `/experience#${exp.slug}`,
    },
    ...exp.tags.map((tag, i) => ({
      id: `full-exp-tag-${exp.id}-${i}`,
      section: "Experience",
      text: tag,
      anchor: `/experience#${exp.slug}`,
    })),
    ...exp.businessImpact.map((item, i) => ({
      id: `full-exp-impact-${exp.id}-${i}`,
      section: "Experience",
      text: item,
      anchor: `/experience#${exp.slug}`,
    })),
  ]),
];
