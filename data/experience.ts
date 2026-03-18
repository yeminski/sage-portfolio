export type Initiative = {
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
                what: "Built API-driven internal dashboards and automated reporting pipelines connecting external distributor data with internal systems.",
                how: "Established data mapping logic across cross-system APIs, designed automated lifecycle outreach triggers, and replaced manual reporting processes end-to-end.",
                result: "~60% reduction in manual workload · 8% retention lift via targeted outreach",
              },
              {
                what: "Redesigned the service registration experience by connecting distributor EDI data with Epson's service platform via cross-system API integration.",
                how: "Embedded real-time registration into hardware pairing flows, mapping data across systems to eliminate manual steps and reduce friction at the highest drop-off point.",
                result: "11% lift in service registration · unlocked downstream service monetization",
              },
            ],
          },
          {
            label: "UX Optimization",
            initiatives: [
              {
                what: "Launched cross-sell features from 0 to 1, enabling upsell at key purchase decision moments in the service flow.",
                how: "Defined KPIs, designed A/B test frameworks, and iterated on purchase decision flows based on conversion data to optimize cross-sell placement and timing.",
                result: "4% conversion lift · consistent attach-rate growth",
              },
              {
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
                what: "Restructured Epson's service pricing into a 3-tier model to capture a wider range of customer segments.",
                how: "Conducted price elasticity analysis and profitability modeling; balanced upfront conversion incentives with higher-margin deferred purchase options across the service line.",
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
                what: "Defined the product vision for a new SaaS solution with AI-driven features targeting an underserved internal user segment.",
                how: "Translated user needs into feature concepts, validated technical feasibility via POC, outlined a prioritized roadmap, and synthesized findings into executive narratives.",
                result: "Executive buy-in secured · prioritized roadmap delivered",
              },
              {
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
                what: "Validated product-market fit before committing to full build, using qualitative research to de-risk roadmap decisions.",
                how: "Conducted 100+ user interviews, synthesized qualitative insights into key user needs, and shaped findings into PRDs that guided feature prioritization.",
                result: "PMF validated · MVP delivered ahead of schedule · ~$100K in runway saved",
              },
              {
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
          "Joined as one of the first product members on a consumer D2C e-commerce platform, taking full ownership across the product lifecycle — from web optimization and experimentation to a 0-to-1 app launch, personalization at scale, and international market expansion into Japan.",
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
                what: "Owned the end-to-end launch of the platform's first native mobile app as the user base outgrew the web experience.",
                how: "Defined MVP scope, migration strategy, and onboarding and retention flows to streamline the web-to-app transition and reduce early drop-off.",
                result: "12% growth in DAU · improved early retention",
              },
            ],
          },
          {
            label: "Market Expansion",
            initiatives: [
              {
                what: "Led market research and go-to-market strategy to scale the platform into Japan.",
                how: "Owned end-to-end localization across UX, content, and checkout — adapting the full customer experience for the Japanese market.",
                result: "Market penetration target exceeded by 30%",
              },
              {
                what: "Expanded payment infrastructure to support compliant cross-border transactions in Japan.",
                how: "Localized payment methods, FX display, and checkout flows in compliance with Japanese regulations; coordinated across product, legal, and engineering.",
                result: "Revenue target exceeded by ~25%",
              },
            ],
          },
          {
            label: "Web Optimization",
            initiatives: [
              {
                what: "Improved the core web experience through feature development, funnel analysis, and behavioral data-driven experimentation.",
                how: "Ran A/B tests to identify drop-off points, shipped targeted feature improvements, and established a repeatable experimentation loop tied to conversion metrics.",
                result: "Laid the growth foundation that scaled revenue and user base — enabling the app launch and Japan expansion that followed",
              },
            ],
          },
          {
            label: "Personalization",
            initiatives: [
              {
                what: "Built recommendation and ranking logic to personalize product discovery at scale.",
                how: "Collaborated with engineering and data science; applied behavioral segmentation and iterative experimentation to refine targeting and surface the right products to the right users.",
                result: "Double-digit CTR growth · increased time-on-site and user engagement across key surfaces",
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
