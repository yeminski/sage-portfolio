export type Achievement = {
  title?: string;
  description: string;
  impact: string;
};

export type Cluster = {
  theme: string;
  achievements: Achievement[];
  link?: { label: string; href: string };
};

export type ExperienceItem = {
  company: string;
  location: string;
  role: string;
  period: string;
  isCurrentRole?: boolean;
  intro: string;
  tags?: string[];
  clusters: Cluster[];
  awards?: string;
  previousRole?: string;
};

export const experienceSummary =
  "Product manager connecting customer-facing growth experiences with the platform systems, automation, and business logic that power them across B2B and consumer products.";

export const experiences: ExperienceItem[] = [
  {
    company: "Epson America, Inc.",
    location: "Los Alamitos, CA",
    role: "Associate Product Manager II",
    period: "Aug 2024 – Present",
    isCurrentRole: true,
    intro:
      "Own Epson's service platform end-to-end, from the backend systems that power pricing and eligibility to the customer-facing flows that drive conversion and retention.",
    tags: ["API Integration", "Monetization", "AI Features", "A/B Testing", "SaaS"],
    clusters: [
      {
        theme: "Systems & Automation",
        achievements: [
          {
            title: "AI-Assisted Audit Workflow",
            description:
              "Built the team's first AI-driven workflow, auditing 5,000+ B2B service SKUs against eligibility, pricing, and compliance requirements. Scoped where AI added value (unstructured language review) versus where deterministic rules were more reliable (pricing, eligibility).",
            impact: "~90% of checks auto-cleared · manual review to exception-only",
          },
          {
            title: "Distributor API Integration",
            description:
              "Connected distributor and internal systems, aligning engineering, operations, and external partners on shared schemas and validation logic; extended it into a dashboard and automated sales reporting and outreach system.",
            impact: "~60% less manual work · 8% retention lift",
          },
          {
            title: "3-Tier Pricing Model",
            description:
              "Restructured flat pricing into time-based tiers using price elasticity and cohort profitability, backed by distributor API feeds for tier eligibility.",
            impact: "9% revenue growth · optimized unit economics",
          },
        ],
      },
      {
        theme: "Conversion & Lifecycle",
        achievements: [
          {
            title: "Registration Redesign",
            description:
              "Folded registration into the device pairing flow via a 4-API chain, eliminating manual serial entry and surfacing eligible ESP plans plus warranty-based push.",
            impact: "11% registration lift · foundation for downstream monetization",
          },
          {
            title: "Checkout Cross-Sell",
            description:
              "Launched a service-plan cross-sell at add-to-cart, A/B testing placement and plan-count with hardware conversion as a guardrail.",
            impact: "4% conversion lift · hardware conversion held stable",
          },
          {
            title: "Activation Optimization",
            description:
              "Translated behavioral and funnel data into targeted UX fixes; led cross-functional alignment to validate and ship.",
            impact: "13% activation lift",
          },
        ],
      },
    ],
    awards:
      "Spotlight Award (2025) · Cheers for Peers – Exceptional Work (2025) · MBA Intern Mentor",
    previousRole:
      "Previously, as a Product Management MBA Intern (Jun 2023 – Aug 2023), defined the vision and roadmap for an AI-enabled SaaS solution and built the financial model used to guide MVP prioritization and secure executive buy-in.",
  },
  {
    company: "ERA",
    location: "Los Angeles, CA",
    role: "Product Manager",
    period: "Sep 2023 – Aug 2024",
    intro: "Early-stage AR smart-glasses startup building a companion app for cyclists.",
    tags: ["0-to-1 Product", "User Research", "MVP Delivery"],
    clusters: [
      {
        theme: "0-to-1 Product Validation & MVP",
        achievements: [
          {
            description:
              "Owned the 0-to-1 roadmap for the companion app from discovery through launch, defining MVP scope via rapid prototyping, managing the backlog, and leading sprint planning. Validated product-market fit through 100+ user interviews and shipped ahead of schedule.",
            impact: "MVP delivered early · ~$100K runway preserved",
          },
        ],
      },
    ],
  },
  {
    company: "Echo Marketing",
    location: "Seoul, Korea",
    role: "Product Manager, Vanity Table Team",
    period: "Nov 2021 – Jun 2022",
    intro:
      "Joined as one of the first product members on a D2C e-commerce platform with broad ownership across growth, monetization, and market expansion.",
    tags: ["Payments", "Market Expansion", "Growth", "Personalization"],
    clusters: [
      {
        theme: "Japan Market Expansion",
        achievements: [
          {
            title: "Cross-Border Payment Infrastructure",
            description:
              "Designed the end-to-end async payment flow for Konbini and bank transfer: payment-state logic, no-hold inventory with a 2-day cancel window, idempotent confirmation, edge-case handling, and finance reconciliation.",
            impact: "exceeded 90-day revenue target by ~25%",
          },
          {
            title: "Go-to-Market & Localization",
            description:
              "Identified the opportunity through inbound signals and competitive analysis; led end-to-end localization across product, content, and CX.",
            impact: "exceeded market penetration target by 30%",
          },
        ],
        link: {
          label: "View Japan Payments Case Study →",
          href: "/projects/echo-japan-payments",
        },
      },
      {
        theme: "Growth & Retention",
        achievements: [
          {
            title: "0-to-1 Mobile App Launch",
            description:
              "Owned MVP scope, web-to-app migration strategy, and onboarding; instrumented the full activation funnel (login to push opt-in to first purchase).",
            impact: "12% DAU growth · improved early retention",
          },
          {
            title: "Personalization Engine",
            description:
              "Built dynamic behavioral segmentation and ranking logic for product discovery; iterated through A/B tests on CTR, conversion, and funnel-stage performance.",
            impact: "double-digit CTR growth · scaled into CRM and push",
          },
        ],
      },
    ],
  },
  {
    company: "Intercos Korea",
    location: "Gyeonggi-do, Korea",
    role: "Overseas Sales Associate (Global B2B Project Management)",
    period: "Aug 2019 – Aug 2021",
    intro: "Global cosmetics ODM, end-to-end owner for international B2B product launches.",
    tags: ["B2B", "Global Accounts", "Pricing Strategy"],
    clusters: [
      {
        theme: "Global B2B Product Execution",
        achievements: [
          {
            description:
              "Led 20+ B2B launches end-to-end, from pitch through delivery, across European and Asian accounts, translating client requirements into specs and coordinating across R&D, QA, production, and logistics; grew key accounts through segment-specific pricing and regionally compliant proposals.",
            impact: "consistent on-time delivery · 10%+ YoY account growth · secured multi-million-dollar B2B deals",
          },
          {
            description:
              "Partnered with Finance on cross-border payment workflows (TT wire, LC settlements) and AR/AP cycles for global accounts.",
            impact: "supported multi-million-dollar cross-border settlements · early foundation in payment operations",
          },
        ],
      },
    ],
  },
];
