export type ExperienceItem = {
  company: string;
  location: string;
  roles: Role[];
};

export type Role = {
  title: string;
  period: string;
  description: string[];
  tags?: string[];
  categories: Category[];
  awards?: string;
};

export type Category = {
  label: string;
  bullets: string[];
};

export const experiences: ExperienceItem[] = [
  {
    company: "Epson America, Inc.",
    location: "Los Alamitos, CA",
    roles: [
      {
        title: "Associate Product Manager II",
        period: "Aug 2024 – Present",
        tags: [
          "Product Strategy",
          "Monetization",
          "API Integration",
          "Pricing Architecture",
          "A/B Testing",
          "Go-to-Market",
          "Cross-functional Leadership",
        ],
        description: [
          "At Epson, I own the product strategy and roadmap for the company's service business, defining pricing architecture, shaping go-to-market plans for new hardware launches, and driving attach rate and service revenue growth across the customer lifecycle. My work focuses on building monetization systems that balance upfront conversion with long-term service revenue while improving the overall customer experience.",
          "Beyond product strategy, I lead platform-level initiatives that connect customer experiences with the underlying systems that support them. This includes redesigning the service registration experience using distributor EDI data and developing API-driven internal dashboards to streamline reporting and operational workflows. These projects sit at the intersection of customer experience, monetization, and operational infrastructure, requiring close collaboration across engineering, sales, and operations while translating technical constraints into product decisions.",
          "Outside my core scope, I mentor MBA interns and support recruiting initiatives, and have been recognized with two internal awards for cross-functional collaboration and product impact.",
        ],
        awards:
          "Spotlight Award (2025) · Cheers for Peers – Exceptional Work (2025) · MBA Intern Mentor",
        categories: [
          {
            label: "API & Systems Integration",
            bullets: [
              "Led API-driven data integration across external and internal systems, establishing data mapping logic and automating reporting pipelines; reduced manual workload by ~60% and drove an 8% retention lift via targeted lifecycle outreach.",
              "Designed a seamless registration experience by integrating cross-system APIs and embedding real-time registration into pairing flows; reduced friction, driving an 11% lift in registration and enabling downstream service monetization.",
            ],
          },
          {
            label: "Payments & Monetization",
            bullets: [
              "Restructured monetization by launching a 3-tier pricing model informed by price elasticity and profitability; drove 9% revenue growth and optimized unit economics by balancing upfront conversion with higher-margin deferred purchases.",
            ],
          },
          {
            label: "Growth & Experimentation",
            bullets: [
              "Championed end-to-end rollout of cross-sell features, defining KPIs and running A/B tests to optimize purchase decision flows; drove incremental revenue through a 4% conversion lift and consistent attach-rate growth.",
              "Streamlined the onboarding flow by synthesizing behavioral data and funnel metrics to prioritize key friction points; led cross-functional alignment to validate hypotheses and implement targeted fixes, increasing activation by 11%.",
            ],
          },
        ],
      },
      {
        title: "Product Management MBA Intern",
        period: "Jun 2023 – Aug 2023",
        tags: [
          "0-to-1 Product",
          "SaaS",
          "AI Features",
          "Financial Modeling",
          "Executive Storytelling",
        ],
        description: [
          "As a PM intern at Epson, I defined the product vision for a new SaaS solution, translating user needs into AI-driven feature concepts and validating technical feasibility through a proof of concept. I outlined a prioritized roadmap and synthesized findings into strategic narratives that secured executive buy-in.",
          "To support prioritization decisions, I built a financial model with scenario analyses to quantify the revenue impact and operational efficiency gains of proposed features, aligning inputs with Product and Finance teams to guide MVP resource allocation.",
        ],
        categories: [
          {
            label: "0-to-1 Product Building",
            bullets: [
              "Defined product vision for a SaaS solution, translating user needs into AI-driven features, validating feasibility via POC, and outlining a prioritized roadmap; synthesized findings into strategic narratives that secured executive buy-in.",
            ],
          },
          {
            label: "Business Case & Financial Modeling",
            bullets: [
              "Built a financial model with scenario analyses to quantify revenue impact and operational efficiency for proposed SaaS features; aligned inputs with Product and Finance to drive informed prioritization and guide MVP resource allocation.",
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
        tags: [
          "0-to-1 Product",
          "Mobile App",
          "User Research",
          "MVP Delivery",
          "Startup",
        ],
        description: [
          "At ERA, an early-stage startup developing AR smart glasses and a companion mobile app for cyclists, I owned the 0-to-1 product roadmap for the companion app, balancing rapid MVP delivery with long-term scalability.",
          "My work centered on grounding product decisions in real user needs — leading extensive customer discovery to validate product-market fit and translate qualitative insights into clear product requirements. This process kept the team aligned around the most critical user problems while enabling fast, focused execution.",
          "Operating in a resource-constrained startup environment sharpened my ability to make high-conviction product decisions with incomplete information, coordinating closely with engineering and design to keep execution tight without sacrificing product quality.",
        ],
        categories: [
          {
            label: "0-to-1 Product Building",
            bullets: [
              "Owned the 0-to-1 roadmap for the companion app — defining MVP scope, feature prioritization, and release sequencing across engineering and design.",
              "Conducted 100+ user interviews to validate product-market fit; synthesized findings into PRDs that guided MVP development and delivered ahead of schedule, saving ~$100K in runway.",
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
        tags: [
          "Cross-border Payments",
          "Platform Expansion",
          "Mobile App",
          "Growth & Experimentation",
          "Localization",
          "D2C E-commerce",
        ],
        description: [
          "At Echo Marketing, a performance marketing company operating a multi-market D2C e-commerce platform, I led product initiatives spanning cross-border payments, platform expansion, and mobile product development.",
          "One of my core initiatives was expanding the platform into Japan by localizing checkout flows, payment methods, and FX display in compliance with local regulations. This required close coordination across product, engineering, and legal teams, and ultimately helped the business exceed revenue targets by ~25%. Alongside this, I led the broader US-to-Japan platform expansion, including market research, go-to-market strategy, and customer experience localization, surpassing the market penetration target by 30%.",
          "I also spearheaded a 0-to-1 mobile app launch, defining MVP scope, migration strategy, and onboarding flows to streamline the web-to-app transition, driving a 12% increase in DAU and improving early user retention.",
        ],
        categories: [
          {
            label: "Payments & Monetization",
            bullets: [
              "Led cross-border payment expansion to Japan by localizing checkout flows, payment methods, and FX display in line with local regulations; streamlined payment operations across US and Japan, overachieving revenue target by ~25%.",
            ],
          },
          {
            label: "Growth & Experimentation",
            bullets: [
              "Built recommendation and ranking logic in collaboration with engineering and data science; leveraged behavioral segmentation and iterative experimentation to improve targeting precision and drive double-digit CTR growth.",
              "Scaled e-commerce platform from the US to Japan, leading market research, go-to-market strategy and localization across customer experience; accelerated adoption and surpassed the market penetration target by 30%.",
            ],
          },
          {
            label: "0-to-1 Product Building",
            bullets: [
              "Spearheaded a 0-to-1 mobile app launch by owning MVP scope, migration strategy, and end-to-end onboarding; drove 12% growth in DAU and early retention by streamlining the web-to-app transition and simplifying onboarding flows.",
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
        tags: [
          "B2B Project Management",
          "Global Accounts",
          "Cross-functional Coordination",
          "Financial Operations",
          "Market Expansion",
        ],
        description: [
          "I began my career at Intercos Korea, a global B2B cosmetics ODM manufacturer. Although my title was in sales, the role functioned much closer to end-to-end project management — I served as the primary point of contact for international clients throughout the entire product lifecycle.",
          "My involvement started at the pitch stage, crafting sales and marketing proposals for prospective clients across Europe and Asia. Once a project was secured, I owned execution from product testing and formula development through procurement and final fulfillment, coordinating closely with R&D, production, and logistics to ensure each launch met client specifications, regulatory requirements, and timeline commitments. This cross-functional ownership across 20+ product launches helped drive 10%+ YoY growth across key accounts.",
          "Beyond client-facing work, I partnered with Finance and Procurement to support B2B invoicing, AP/AR tracking, and revenue recognition for global accounts — giving me early, hands-on exposure to the financial workflows and cross-border payment dynamics that underpin international commerce.",
        ],
        categories: [
          {
            label: "B2B Sales & Project Management",
            bullets: [
              "Led market research, trend analysis, and client needs assessment to develop strategic pitch decks and product proposals; converted prospects into projects across European and Asian accounts.",
              "Owned end-to-end project execution from contract to delivery — coordinating across R&D, QA/QC, production, procurement, and logistics to ensure each launch met client specs, regulatory requirements, and timeline commitments across 20+ product launches.",
              "Accelerated account growth across Europe and Asia by developing segment-specific pricing and product offerings in compliance with regional regulations; secured multi-million dollar B2B deals, driving 10%+ YoY growth.",
            ],
          },
          {
            label: "Financial Operations Exposure",
            bullets: [
              "Collaborated with Finance and Procurement to support B2B invoicing, AP/AR tracking, and revenue recognition for global accounts; gained hands-on exposure to financial operations and cross-border payment workflows.",
            ],
          },
        ],
      },
    ],
  },
];
