export type Initiative = {
  problem: string;
  what: string;
  how: string;
  result: string;
};

export type Category = {
  label: string;
  initiatives: Initiative[];
};

export type Role = {
  title: string;
  period: string;
  isCurrentRole?: boolean;
  summary: string;
  tags?: string[];
  categories: Category[];
  awards?: string;
};

export type ExperienceItem = {
  company: string;
  location: string;
  roles: Role[];
};

export const experiences: ExperienceItem[] = [
  {
    company: "Epson America, Inc.",
    location: "Los Alamitos, CA",
    roles: [
      {
        title: "Associate Product Manager II",
        period: "Aug 2024 – Present",
        isCurrentRole: true,
        summary:
          "Own the product roadmap for Epson's service platform, leading API-driven system integrations, 0-to-1 user-facing feature development, and monetization strategy across the customer lifecycle.",
        tags: [
          "API Integration",
          "0-to-1 Product",
          "Product Strategy",
          "A/B Testing",
          "Cross-functional Leadership",
          "Monetization",
        ],
        awards:
          "Spotlight Award (2025) · Cheers for Peers – Exceptional Work (2025) · MBA Intern Mentor",
        categories: [
          {
            label: "API & Platform",
            initiatives: [
              {
                problem: "LFP was Epson's largest sales channel, but once hardware sold through distributors, visibility into end users dropped to zero, making proactive ESP outreach structurally impossible.",
                what: "Built an API integration connecting distributor data to internal systems (data schema, idempotent ingestion, edge case handling, and reconciliation logic), plus automated warranty-expiry reporting surfaced to the sales team.",
                how: "Diagnosed the blind spot via sales interviews; built the technical and business case to negotiate the distributor integration; defined validation rules and reconciliation alerts for activation mismatches.",
                result: "~60% reduction in manual workload · 8% retention lift · Expanded across hardware categories after proving the model",
              },
              {
                problem: "Service registration was the gateway to downstream monetization, but drop-off was high: customers completing hardware purchases weren't converting, leaving significant revenue on the table.",
                what: "Chained four APIs (Device Info, Registration, Warranty, and CRM/Marketing) so hardware pairing auto-triggered registration, warranty mapping, and lifecycle segmentation with no manual input.",
                how: "Embedded the API chain into hardware setup to eliminate manual registration; layered in-app ESP promotions at pairing and warranty-expiry push notifications on top, shifting the app into a lifecycle monetization hub.",
                result: "11% lift in service registration · in-app and push monetization triggers activated · data foundation for all downstream lifecycle outreach",
              },
            ],
          },
          {
            label: "UX Optimization",
            initiatives: [
              {
                problem: "ESP attach rate and conversion on Epson.com were below target: customers were completing hardware purchases with no exposure to service plans.",
                what: "Designed and launched a cross-sell UI at checkout to surface service plans at the moment of hardware purchase.",
                how: "Pulled funnel analytics to pinpoint drop-off, ran competitor research to identify the gap, defined KPIs upfront, ran A/B tests, and iterated on the UI based on mid-funnel data.",
                result: "4% conversion lift · consistent attach-rate growth post-launch",
              },
              {
                problem: "Activation rates were below benchmark, but the funnel data showed the symptom without explaining the cause, making targeted intervention impossible without deeper diagnostic work.",
                what: "Identified and resolved key activation friction points in the service onboarding flow.",
                how: "Synthesized behavioral data and funnel metrics to surface drop-off causes; led cross-functional alignment to validate hypotheses and ship targeted UX fixes.",
                result: "11% increase in activation rate",
              },
            ],
          },
          {
            label: "Monetization",
            initiatives: [
              {
                problem: "Epson's flat-rate service pricing was leaving money on the table at both ends: price-sensitive buyers churned before converting, while high-value segments were undercharged relative to their willingness to pay.",
                what: "Restructured Epson's service pricing into a 3-tier model to capture a wider range of customer segments.",
                how: "Ran price elasticity and cohort profitability analysis. Established distributor API feeds to capture purchase timing for tier eligibility, with validation + reconciliation checks, a default tier fallback, and a proof-of-purchase exception workflow.",
                result: "9% revenue growth · optimized unit economics across the service line",
              },
            ],
          },
        ],
      },
      {
        title: "Product Management MBA Intern",
        period: "Jun 2023 – Aug 2023",
        summary:
          "Defined the product vision and financial foundation for a new SaaS solution, translating user needs into AI-driven features and securing executive buy-in.",
        tags: ["SaaS", "AI Features", "Financial Modeling"],
        categories: [
          {
            label: "SaaS Strategy",
            initiatives: [
              {
                problem: "An underserved internal user segment lacked adequate tooling, but there was no validated product concept or roadmap to address it, just an open-ended strategic ask with no defined scope.",
                what: "Defined the product vision for a new SaaS solution with AI-driven features targeting an underserved internal user segment.",
                how: "Translated user needs into feature concepts, validated technical feasibility via POC, outlined a prioritized roadmap, and synthesized findings into executive narratives.",
                result: "Executive buy-in secured · prioritized roadmap delivered",
              },
              {
                problem: "Without quantified estimates of revenue impact and resource requirements, MVP scope decisions were being made on intuition, making cross-functional alignment and executive approval difficult.",
                what: "Built a financial model to support MVP prioritization and resource allocation decisions.",
                how: "Developed scenario analyses with Product and Finance teams to quantify revenue impact and operational efficiency gains for proposed features.",
                result: "Guided MVP resource allocation · aligned cross-functional stakeholders on investment priorities",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    company: "ERA",
    location: "Los Angeles, CA",
    roles: [
      {
        title: "Product Manager",
        period: "Sep 2023 – Aug 2024",
        summary:
          "Owned the 0-to-1 product roadmap for a companion mobile app at an early-stage AR startup, grounding every decision in deep user research and tight cross-functional execution.",
        tags: ["0-to-1 Product", "Mobile App", "Product-Market Fit", "User Research", "MVP Delivery", "Startup"],
        categories: [
          {
            label: "0-to-1 MVP",
            initiatives: [
              {
                problem: "The startup was ready to start building, but no one had validated whether target users actually wanted the product, and committing to development without evidence risked burning runway on the wrong solution.",
                what: "Validated product-market fit before committing to full build, using qualitative research to de-risk roadmap decisions.",
                how: "Conducted 100+ user interviews, synthesized qualitative insights into key user needs, and shaped findings into PRDs that guided feature prioritization.",
                result: "PMF validated · MVP delivered ahead of schedule · ~$100K in runway saved",
              },
              {
                problem: "With PMF validated, the team needed a sequenced build plan, but scope was undefined, alignment was loose, and engineering had no clear feature order to execute against.",
                what: "Owned the full 0-to-1 roadmap for the companion app, from scope definition to launch.",
                how: "Defined MVP scope, sequenced feature delivery for maximum learning, and led cross-functional alignment across engineering and design to drive ecosystem integration.",
                result: "MVP shipped on time · foundation established for post-launch retention growth",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    company: "Echo Marketing",
    location: "Seoul, Korea",
    roles: [
      {
        title: "Product Manager, Vanity Table Team",
        period: "Nov 2021 – Jun 2022",
        summary:
          "Joined as one of the first product members on a consumer D2C e-commerce platform, taking full ownership across the product lifecycle: web optimization and experimentation, a 0-to-1 app launch, personalization at scale, and international market expansion into Japan.",
        tags: [
          "0-to-1 Product",
          "Mobile App",
          "D2C E-commerce",
          "Personalization",
          "Growth",
          "Experimentation",
          "Market Expansion",
          "Localization",
          "Cross-border Payments",
        ],
        categories: [
          {
            label: "0-to-1 Mobile App",
            initiatives: [
              {
                problem: "The web experience had hit its ceiling: session depth was dropping and engagement signals showed users weren't returning consistently, pointing to a platform that had outgrown its channel.",
                what: "Owned the end-to-end launch of the platform's first native mobile app as the user base outgrew the web experience.",
                how: "Defined MVP scope, migration strategy, and end-to-end onboarding flows to streamline the web-to-app transition; simplified onboarding to reduce early drop-off.",
                result: "12% growth in DAU · improved early retention",
              },
            ],
          },
          {
            label: "Market Expansion",
            initiatives: [
              {
                problem: "Japan was a structurally different market: different user expectations, content norms, and discovery patterns meant a direct copy-paste expansion would fail.",
                what: "Identified the Japan market opportunity through inbound signals and competitive analysis; led end-to-end go-to-market strategy to scale the platform.",
                how: "Owned end-to-end localization across product, content, and customer experience, adapting the full platform for the Japanese market.",
                result: "Market penetration target exceeded by 30%",
              },
              {
                problem: "Japan required local payment methods not used in the US (Konbini, bank transfer) with async confirmation flows, requiring net-new flow design to handle inventory logic, order status communication, and payment edge cases.",
                what: "Designed the end-to-end async payment flow: inventory logic, 3-stage customer communication, edge case handling, and finance reconciliation alignment.",
                how: "No-hold inventory decision backed by high-LTV customer data; idempotent webhook handling to prevent duplicate fulfillment; bank transfer edge cases defined (partial, overpayment, unmatched); all payment states mapped to finance reconciliation events.",
                result: "Revenue target exceeded by ~25% · payment architecture built to support future market expansion without reworking core flow",
              },
            ],
          },
          {
            label: "Web Optimization",
            initiatives: [
              {
                problem: "The platform was growing users but conversion rates weren't keeping pace; without instrumented funnels, it was unclear where the leakage was happening or which interventions would actually move the needle.",
                what: "Improved the core web experience through feature development, funnel analysis, and behavioral data-driven experimentation.",
                how: "Ran A/B tests to identify drop-off points, shipped targeted feature improvements, and established a repeatable experimentation loop tied to conversion metrics.",
                result: "Laid the growth foundation that scaled revenue and user base, enabling the app launch and Japan expansion that followed",
              },
            ],
          },
          {
            label: "Personalization",
            initiatives: [
              {
                problem: "Product discovery was one-size-fits-all: all users saw the same rankings regardless of behavior, leaving engagement and purchase intent signals completely untapped.",
                what: "Built recommendation and ranking logic to personalize product discovery at scale.",
                how: "Defined segments by purchase frequency, category concentration, and browse vs. search behavior; system re-segmented dynamically as behavior updated. Ran iterative A/B tests measuring CTR, conversion, and funnel-stage performance.",
                result: "Double-digit CTR growth · became the foundational growth system that supported both the Japan expansion and the mobile app launch",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    company: "Intercos Korea",
    location: "Gyeonggi-do, Korea",
    roles: [
      {
        title: "Overseas Sales Associate (Global B2B Project Management)",
        period: "Aug 2019 – Aug 2021",
        summary:
          "Served as end-to-end project owner for international B2B product launches at a global cosmetics ODM manufacturer, managing the full lifecycle from pitch to fulfillment across 20+ projects.",
        tags: [
          "B2B Project Management",
          "Global Accounts",
          "Cross-functional Coordination",
          "Financial Operations",
          "Market Expansion",
        ],
        categories: [
          {
            label: "Project Execution",
            initiatives: [
              {
                problem: "20+ concurrent B2B projects across multiple regions and regulatory environments were managed without a standardized process, creating coordination overhead and delivery risk.",
                what: "Led end-to-end product launches for 20+ B2B projects across European and Asian accounts.",
                how: "Translated client requirements into specs, navigated technical trade-offs and regulatory compliance, and coordinated cross-functionally across R&D, QA, production, procurement, and logistics.",
                result: "Consistent on-time delivery across 20+ concurrent projects · 10%+ YoY account growth",
              },
            ],
          },
          {
            label: "Pricing Strategy",
            initiatives: [
              {
                problem: "Existing client relationships were transactional: accounts weren't growing because pitches weren't tailored to regional market dynamics, leaving significant expansion revenue uncaptured.",
                what: "Grew key accounts by developing tailored pricing and product offerings for each regional market.",
                how: "Led market research, trend analysis, and segment-specific proposals with country-level pricing strategies and compliance with regional regulations; executed pitches across European and Asian accounts.",
                result: "Secured multi-million dollar B2B deals · drove 10%+ YoY growth",
              },
            ],
          },
        ],
      },
    ],
  },
];
