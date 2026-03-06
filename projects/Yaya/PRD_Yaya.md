# Project Page Content
# Based on: Yaya — AI-Powered Financial Inclusion Platform

> Use this document as the content blueprint when building a new project page.
> Each section maps 1:1 to a section on the live page at `/projects/[slug]`.
> Follow the same section order, numbering, and field structure below.

---

## PAGE STRUCTURE OVERVIEW

```
Hero
  00 — Hero (metadata, tags, title, subtitle, project meta)
Body (numbered sections)
  01 — My Contribution     ← always first; establishes PM's role before the deep dive
  02 — Problem             ← stat-driven, 6 data points in a 2×3 grid
  03 — Target Users        ← persona cards
  04 — Solution            ← feature cards in a 3×2 grid
  05 — User Journey        ← horizontal step flow
  06 — Technical Architecture ← data flow diagram + tech stack pills
  07 — Competitive Landscape  ← feature comparison matrix
  08 — Market Opportunity  ← SAM/SOM + growth driver stats
  09 — Go-to-Market        ← phased strategy
Footer
  Team credit + navigation links
```

---

## 00 — HERO

| Field | Value |
|---|---|
| **Page slug** | `/projects/yaya` |
| **Tags** (teal pills) | FinTech, Mobile App, Product Management, B2C, Financial Inclusion |
| **Title** | Yaya |
| **Subtitle** | An AI-powered personal finance platform designed to help working mothers of disadvantaged backgrounds achieve economic mobility through personalized, real-time financial guidance. |
| **Role** | Product Manager |
| **Context** | CMU Tepper Tech Innovation Challenge 2022 — Finalist |
| **Year** | November 2022 |
| **Team** | Team Yaya (4 Members) |

---

## 01 — MY CONTRIBUTION

**Section label:** `01 — My Contribution`
**Heading:** What I Did as Product Manager
**Subtext:** As PM on a 4-person team, I led product strategy, user research, and prototyping — translating a complex financial inclusion problem into a concrete, user-centered product vision that took us to the CMU Tepper finals.

### Contribution Cards (2×2 grid)

| # | Icon bg | Title | Description |
|---|---------|-------|-------------|
| 1 | bg-teal-50 | Product Strategy & Roadmap | Defined the product vision, feature prioritization framework, and phased roadmap. Led the MoSCoW-style feature scoring across 4 user segments to align the team on MVP scope. |
| 2 | bg-blue-50 | User Research & Personas | Developed the core user persona ("Monica") through pain-point analysis and demographic research. Mapped the end-to-end user journey from discovery through first financial recommendation. |
| 3 | bg-purple-50 | Prototyping | Built the product prototype illustrating key user flows — spending dashboard, personalized recommendations, and financial product access — used in the final CMU presentation. |
| 4 | bg-amber-50 | Presentation & Storytelling | Co-developed the competition deck with the team, structuring the narrative from problem framing through financials to secure finalist placement at CMU Tepper. |

---

## 02 — PROBLEM

**Section label:** `02 — Problem`
**Heading:** Financial Inequality Hits Working Mothers Hardest
**Subtext:** New mothers, particularly from disadvantaged backgrounds, face sudden expense shocks without the financial literacy or tools to navigate them — trapping families in cycles of debt and missed opportunity.

### Problem Stats (2×3 grid — 6 data points)

| Stat | Label | Color |
|------|-------|-------|
| $12K | Average new childcare expenses in Year 1 alone | teal |
| $230K | Average cost of raising a child to age 17 | teal |
| 25M | Estimated US mothers with children under 18 needing better financial planning | teal |
| ~25% | Higher credit card debt for Americans with 2 children vs. none | red |
| 56% | Childcare expenses as share of African-American family income | red |
| 52% | American households earning under $70K annually | red |

---

## 03 — TARGET USERS

**Section label:** `03 — Target Users`
**Heading:** Who We're Building For
**Subtext:** Yaya is designed for working mothers navigating the financial reality of raising a family on a limited income.

### Persona Cards (single primary persona + 2 supporting segments)

| Persona | Emoji | Role | Quote |
|---------|-------|------|-------|
| "Monica" | 🤱 | New mother · Assistant Store Manager · $70K household income · Philadelphia suburb | "I make the same amount of money but have pretty much doubled my expenses overnight. This just isn't sustainable." |
| "The Planner" | 📋 | Existing mother · Children ages 5–12 · Focused on college savings and credit improvement | "I want to put money away for my daughter's college, but I just seem to be spending faster than I earn." |
| "The Climber" | 🚗 | Single mother · Rebuilding credit · Seeking better loan options | "I want to buy a safer car with more space for a car seat, but my credit score is too low." |

---

## 04 — SOLUTION

**Section label:** `04 — Solution`
**Heading:** Core Features
**Subtext:** Yaya combines real-time spending intelligence, personalized financial product access, and long-term goal planning in one platform — powered by a self-improving data engine.

### Feature Cards (3×2 grid — 6 features)

| # | Emoji | Icon bg | Title | Description |
|---|-------|---------|-------|-------------|
| 1 | 💡 | bg-teal-50 | Personalized Savings Recommendations | Analyzes spending patterns against similar user profiles in the same geography to surface specific, actionable savings opportunities at the merchant level. |
| 2 | 🔔 | bg-blue-50 | Spending Alerts | Real-time alerts when users exceed predicted budgets, paired with contextual guidance to help course-correct immediately. |
| 3 | 🏦 | bg-purple-50 | Access to Approved Financial Products | Curated, vetted financial products (credit cards, loans, insurance) ranked by personalized fit score — protecting users from predatory offerings. |
| 4 | 📈 | bg-amber-50 | Auto-Investment | Identifies low-risk investment opportunities to put idle savings to work with minimal user intervention. |
| 5 | 🎯 | bg-rose-50 | Long-Term Goal Planning | Ingests financial goals, timelines, and projected costs to build manageable, step-by-step plans for major milestones like buying a car or saving for college. |
| 6 | 📚 | bg-gray-100 | Financial Education | Promotes financial literacy through curated content partnerships, helping users build knowledge alongside their financial health. |

---

## 05 — USER JOURNEY

**Section label:** `05 — User Journey`
**Heading:** End-to-End Experience Flow
**Subtext:** From first download to first personalized recommendation — Yaya is designed to deliver immediate, tangible value.

### Journey Steps (horizontal scrolling flow, 7 steps)

| Step | Title | Description |
|------|-------|-------------|
| 1 | Download | Discover Yaya via referral, social, or partner |
| 2 | Onboard | Complete profile with income and goals |
| 3 | Connect | Link bank accounts via Plaid integration |
| 4 | Analyze | Yaya ingests spending and builds baseline |
| 5 | Recommend | First personalized savings recommendation |
| 6 | Plan | Set long-term financial goals with guided plans |
| 7 | Improve | Model flywheel learns from outcomes over time |

---

## 06 — TECHNICAL ARCHITECTURE

**Section label:** `06 — Technical Architecture`
**Heading:** Yaya's Model Outcome Flywheel
**Subtext:** Yaya's strategic moat is its data engine — a self-improving flywheel that gets smarter with every user outcome, creating recommendations competitors cannot replicate.

### Architecture Layers (top → bottom)

| Layer | Label | Components | Color |
|-------|-------|------------|-------|
| External Data | Data Sources | Empirical Research, Professional Financial Planners, Existing PNC Customer Data | amber-50 |
| Integration | Data Ingestion | Customer External Bank Data → Plaid Integration | blue-50 |
| Core | Yaya Backend Engine | Model Outcome Flywheel · Recommendation Engine | teal-50 |
| Output | Customer-Facing | Personalized Recommendations → Source New Model Outcomes | purple-50 |

### Tech Stack Pills

| Emoji | Label |
|-------|-------|
| 🔗 | Plaid API Integration |
| 🤖 | AI/ML Recommendation Engine |
| 📊 | Behavioral Data Analytics |
| 🔄 | Model Outcome Flywheel |
| 🔒 | Bank-grade Data Security |
| ☁️ | Cloud Infrastructure |

---

## 07 — COMPETITIVE LANDSCAPE

**Section label:** `07 — Competitive Landscape`
**Heading:** Feature Comparison Matrix
**Subtext:** Yaya is the only platform combining bank-level data access, cross-institution spending visibility, and a self-improving recommendation engine — all tailored to an underserved segment.

### Comparison Table

| Feature | Yaya | Traditional Banks | Mint / Advisory Apps |
|---------|------|-------------------|----------------------|
| Solution customizable to individual user | ✓ | ✗ | ✗ |
| Visibility to cross-institution spending data | ✓ | ✗ | ✓ |
| Directly integrated bank services | ✓ | ✓ | ✗ |
| Designed to improve over time (flywheel) | ✓ | ✗ | ✗ |
| Personalized financial product recommendations | ✓ | ✗ | ✗ |
| Targeted for underserved / low-income segment | ✓ | ✗ | ✗ |

---

## 08 — MARKET OPPORTUNITY

**Section label:** `08 — Market Opportunity`
**Heading:** Market Sizing
**Subtext:** Targeting working mothers with household incomes under $70K — a 25M-person segment that is underserved by existing financial tools and highly motivated to adopt better solutions.

### SAM / SOM (stacked horizontal bars)

| Level | Value | Sub-label | Bar width | Color |
|-------|-------|-----------|-----------|-------|
| SAM | 25M | Working mothers with children under 18 needing financial planning support | 100% | teal (accent) |
| SOM (Y5) | 1.5M | Projected serviceable obtainable market by Year 5 at 3% penetration | 35% | purple-500 |

### Revenue Projections (3 stat cards)

| Stat | Label |
|------|-------|
| $173M | Projected incremental revenue for PNC over 5 years |
| $110 | Incremental annual revenue per Yaya customer |
| 20% | Share of Yaya users projected to become net new PNC customers |

---

## 09 — GO-TO-MARKET

**Section label:** `09 — Go-to-Market Strategy`
**Heading:** Phased Market Entry
**Subtext:** B2C-first through referral and digital channels, with B2B partnerships layered in to accelerate adoption and build institutional trust.

### Timeline Phases (vertical timeline)

| Phase | Title | Description |
|-------|-------|-------------|
| MVP Launch | Core Value Delivery | Launch with two flagship features: Personalized Savings Recommendations and Spending Alerts. Objective: demonstrate immediate, tangible value and seed the model outcome flywheel. |
| Growth | Build the User Base | Drive acquisition through incentivized referrals, targeted digital advertising, influencer marketing on TikTok and YouTube, and in-person sign-up partnerships. |
| Monetization | Activate Revenue Streams | Introduce affiliate marketing for vetted financial products. Sell anonymized consortium data insights to partners. Offer 3-month interest-free promotions through distribution partners. |
| Long-term | Generational Retention | Encourage mothers to open PNC accounts for their children — creating a generational retention flywheel and expanding Yaya's addressable market over time. |

---

## FOOTER / TEAM CREDIT

| Field | Value |
|-------|-------|
| **Team label** | "TEAM YAYA" |
| **Team members** | 4 Members — UCLA Anderson School of Management |
| **Context** | CMU Tepper Tech Innovation Challenge 2022 · Finalist |
| **Nav links** | ← All Projects |

---

## STYLING REFERENCE

| Element | Tailwind Classes |
|---------|-----------------|
| Section label | `text-xs font-semibold text-accent uppercase tracking-widest mb-2` |
| Section heading | `text-3xl font-bold text-ink mb-4` |
| Section subtext | `text-ink/60 max-w-2xl mb-12` |
| Stat card number (teal) | `text-4xl font-bold text-accent mb-2` |
| Stat card number (red) | `text-4xl font-bold text-red-500 mb-2` |
| Feature card | `border border-gray-200 rounded-xl p-6 hover:border-accent transition-colors` |
| Persona card | `bg-paper border border-gray-200 rounded-xl p-6 text-center hover:border-accent` |
| Teal pill tag | `px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent` |
| Section bg alternating | `bg-paper` / `bg-gray-50` |
| Max content width | `max-w-[1200px] mx-auto px-6` |
| Journey step dot | `w-10 h-10 rounded-full bg-accent text-white font-bold text-sm` |
| Timeline dot | `w-3 h-3 rounded-full bg-accent ring-4 ring-gray-50` |
| Arch box — teal | `bg-teal-50 text-teal-700 border border-teal-200 px-4 py-2 rounded-lg text-sm font-medium` |
| Arch box — blue | `bg-blue-50 text-blue-700 border border-blue-200` |
| Arch box — purple | `bg-purple-50 text-purple-700 border border-purple-200` |
| Arch box — amber | `bg-amber-50 text-amber-700 border border-amber-200` |

---

*Replicate the file at `app/projects/yaya/page.tsx` and populate each section with the content above. Follow the same component structure used in the PillEd project page.*
