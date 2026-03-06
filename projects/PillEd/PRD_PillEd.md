# Project Page Content Template
# Based on: PillEd — Smart Medication Management

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
  03 — Target Users        ← 3 persona cards with quote
  04 — Solution            ← 6 feature cards in a 3×2 grid
  05 — User Journey        ← horizontal step flow (5–8 steps)
  06 — Technical Architecture ← layered arch diagram + tech stack pills
  07 — Competitive Landscape  ← feature comparison matrix
  08 — Market Opportunity  ← TAM/SAM/SOM funnel + growth driver stats
  09 — Go-to-Market        ← vertical timeline of phases
Footer
  Team credit + navigation links
```

---

## 00 — HERO

| Field | PillEd Value | Your Value |
|---|---|---|
| **Page slug** | `/projects/pilled` | `/projects/[slug]` |
| **Tags** (teal pills) | HealthTech, Mobile App, Product Management, B2C, HIPAA | — |
| **Title** | PillEd | — |
| **Subtitle** | A user-friendly mobile platform tackling polypharmacy, medication nonadherence, and poor health literacy — making medication management safer, smarter, and simpler. | — |
| **Role** | Product Manager | — |
| **Context** | Anderson Product Innovation Challenge | — |
| **Year** | November 2022 | — |
| **Team** | 5 Members (MD/MBA + MBA) | — |

---

## 01 — MY CONTRIBUTION

> Lead with your role. The reader (recruiter/PM) should immediately know what YOU did.

**Section label:** `01 — My Contribution`
**Heading:** What I Did as [Your Title]
**Subtext:** 1–2 sentence summary of overall ownership and team context.

### Contribution Cards (2×2 grid)

Each card has: emoji icon, colored icon background, bold title, 2–3 sentence description.

| # | Icon bg | Title | Description |
|---|---------|-------|-------------|
| 1 | bg-teal-50 | Product Strategy | Defined product vision, roadmap, and phased GTM. Led competitive analysis that identified the core differentiator. |
| 2 | bg-blue-50 | Market Analysis | TAM/SAM/SOM sizing across target segments. Validated opportunity through demographic and market trend data. |
| 3 | bg-purple-50 | User Research & Segmentation | Developed personas through pain-point analysis. Mapped end-to-end user journey from onboarding through core use case. |
| 4 | bg-amber-50 | Financial Modeling | Built revenue projections across monetization streams. Structured operating cost analysis. |

> Customize titles and descriptions to match your actual contributions. Keep to 4 cards max.

---

## 02 — PROBLEM

**Section label:** `02 — Problem`
**Heading:** [Descriptive problem framing title]
**Subtext:** 2–3 sentences summarizing the systemic issue.

### Problem Stats (2×3 grid — 6 data points)

Each card: large bold number (teal for neutral, red for alarming) + short label.

| Stat | Label | Color |
|------|-------|-------|
| 50% | Adults nonadherent to medications as prescribed | teal |
| 30% | Adults 60+ report polypharmacy (5+ medications) | teal |
| 12% | Adults considered proficient in health literacy | teal |
| $50B | Annual healthcare cost attributed to medication misuse | red |
| 5th | Leading cause of death in the US from adverse drug interactions | red |
| 30% | Of all hospital admissions linked to drug interactions | red |

> Rule of thumb: first 3 stats = scale of the problem (teal), last 3 = severity/urgency (red).

---

## 03 — TARGET USERS

**Section label:** `03 — Target Users`
**Heading:** Who We're Building For
**Subtext:** One sentence describing the shared need across segments.

### Persona Cards (3-column grid)

Each card: emoji avatar, persona name in quotes, role descriptor, italic pull quote.

| Persona | Emoji | Role | Quote |
|---------|-------|------|-------|
| "Mother" | pregnant | Pregnant · Seeking medication safety | "Will my baby be ok if I take Advil?" |
| "Caregiver" | handshake | Adult · No medical training · Managing elderly parent | "My dad is on 9 medications. Is it safe for him to take Benadryl?" |
| "Healthcare Provider" | stethoscope | Physicians · Hospital staff | "Why do I spend so much time reviewing meds with my patients?" |

> Avatar background colors: rose-50 / teal-50 / blue-50 by default. Adjust to match product context.

---

## 04 — SOLUTION

**Section label:** `04 — Solution`
**Heading:** Core Features
**Subtext:** 1 sentence on the product's differentiating integration.

### Feature Cards (3×2 grid — 6 features)

Each card: colored icon box (emoji), bold title, 2-sentence description. Teal accent bar appears on hover.

| # | Emoji | Icon bg | Title | Description |
|---|-------|---------|-------|-------------|
| 1 | camera | bg-teal-50 | OCR Medication Scan | Point camera at any medication to instantly identify it. Matches against comprehensive drug database at 90%+ accuracy. |
| 2 | warning | bg-rose-50 | Drug Interaction Alerts | Automatic drug-drug interaction checking with risk classification (High/Medium/Low). Real-time contraindication warnings. |
| 3 | alarm | bg-blue-50 | Smart Scheduling | Personalized dosing schedules with push notifications, snooze, dose history, and adherence analytics. |
| 4 | book | bg-purple-50 | Digestible Drug Info | Medical jargon translated into plain language. Dosage, storage, side effects for users at any literacy level. |
| 5 | money | bg-amber-50 | Price Comparison | Compare prices across retail pharmacy partners. Add to wishlist and purchase through in-app integrations. |
| 6 | person | bg-gray-100 | Personalized Profile | Age, gender, weight, pregnancy, allergies — all factored into contraindication alerts and recommendations. |

---

## 05 — USER JOURNEY

**Section label:** `05 — User Journey`
**Heading:** End-to-End Experience Flow
**Subtext:** 1 sentence framing the end-to-end experience.

### Journey Steps (horizontal scrolling flow, 5–8 steps)

Each step: numbered teal circle, bold step name, short description below.

| Step | Title | Description |
|------|-------|-------------|
| 1 | Sign Up | Create profile with health details |
| 2 | Scan Meds | Camera OCR to add medications |
| 3 | DI Check | Auto drug interaction screening |
| 4 | Review Info | Digestible drug details |
| 5 | Schedule | Set dosing times & alarms |
| 6 | Get Reminded | Push notifications at dose time |
| 7 | Track & Shop | History, compare prices, buy |

> Keep step descriptions to 4–6 words. The flow reads left → right with arrow separators.

---

## 06 — TECHNICAL ARCHITECTURE

**Section label:** `06 — Technical Architecture`
**Heading:** System Overview
**Subtext:** 1–2 sentences on the architectural philosophy (modularity, scalability, etc.)

### Architecture Layers (top → bottom, separated by ↓ arrows)

| Layer | Label | Components | Color |
|-------|-------|------------|-------|
| Presentation | Presentation Layer | Mobile App (iOS / Android) | teal-50 |
| Processing | Processing Layer | OCR Module, DI Module, Notification Engine, Image Recognition | blue-50 |
| Data | Data Layer | User DB, Meds DB, Medicine DB, DI DB, Schedule DB, Bio DB | purple-50 |
| External | External Sources | FDA Drug Data, Research Web, Corporate Partners, Retail APIs | amber-50 |

### Tech Stack (2×3 grid or 6-column row)

Each pill: emoji + short label. Background gray-50, border gray-200, hover teal border.

| Emoji | Label |
|-------|-------|
| cloud | Azure Servers ×4 |
| box | AWS S3 Storage |
| robot | AI/ML OCR Engine |
| camera | Image Recognition |
| bell | Push Notifications |
| lock | HIPAA Compliant |

---

## 07 — COMPETITIVE LANDSCAPE

**Section label:** `07 — Competitive Landscape`
**Heading:** Feature Comparison Matrix
**Subtext:** 1 sentence on the whitespace your product fills.

### Comparison Table

**Columns:** Your product (teal-highlighted) + 3 competitors
**Rows:** 5–7 key features

| Feature | [Your Product] | Competitor A | Competitor B | Competitor C |
|---------|---------------|--------------|--------------|--------------|
| Drug-Drug Interaction Checker | ✓ | ✗ | ✗ | ✗ |
| Contraindication Alerts | ✓ | ✗ | ✗ | ✗ |
| Automation of Alerts | ✓ | ✗ | ✗ | ✗ |
| Drug Scheduling | ✓ | ✓ | ✗ | ✓ |
| Camera Identification (OCR) | ✓ | ✗ | ✗ | ✗ |
| Understandable Drug Info | ✓ | ✗ | ✓ | ✗ |

> Your product column is always col 1, highlighted with `bg-accent/5` and `text-accent`.

---

## 08 — MARKET OPPORTUNITY

**Section label:** `08 — Market Opportunity`
**Heading:** Market Sizing
**Subtext:** 1 sentence identifying the primary segments and monetization model.

### TAM / SAM / SOM Funnel (stacked horizontal bars)

| Level | Value | Sub-label | Bar width | Color |
|-------|-------|-----------|-----------|-------|
| TAM | $565B | Total market: 11.3M users × $50/yr subscription | 100% | teal (accent) |
| SAM | $200.5B | 30% caregivers + 40% pregnant willing to download | 70% | blue-500 |
| SOM | $16M | 10% caregivers + 5% pregnant actually subscribe | 35% | purple-500 |

### Growth Drivers (3 stat cards)

| Stat | Label |
|------|-------|
| 90M | Projected adults 65+ by 2050 (up from 46M today) |
| 4,000% | Telemedicine visit growth from 2018 to 2019 |
| $219B | Preventative health market size (2022 projection) |

---

## 09 — GO-TO-MARKET

**Section label:** `09 — Go-to-Market Strategy`
**Heading:** Phased Market Entry
**Subtext:** 1 sentence on the entry strategy rationale (e.g. B2B-first to build credibility).

### Timeline Phases (vertical timeline, left accent line)

Each phase: teal dot on left line, date label (teal, uppercase), bold phase title, 2-sentence description.

| Date | Phase | Description |
|------|-------|-------------|
| Q1 2023 | Hospital Partnerships | Partner with hospitals to optimize medication reconciliation and build legitimacy within the medical community before consumer launch. |
| Q2 2023 | Clinical Channel Expansion | Partner with skilled nursing facilities, obstetricians, and geriatricians — targeting under-resourced settings with high polypharmacy prevalence. |
| Q4 2023 | B2B Healthcare Retail | Partner with healthcare retail chains to distribute pharmaceutical promotion coupons, attracting price-sensitive new users at scale. |
| Q1 2025 | Product Launch | Full public launch with established medical community trust, validated retail partnerships, and confirmed product-market fit across both primary personas. |

---

## FOOTER / TEAM CREDIT

Appears at the bottom of the last section (Architecture).

| Field | PillEd Value |
|-------|-------------|
| **Team label** | "TEAM" (uppercase, muted) |
| **Team members** | Tommy Jiang · Michelle Li · **Sage Seo** · Tae Jun Jeon · Yonghwan Choi |
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
| Section bg alternating | `bg-paper` / `bg-gray-50` (alternates each section) |
| Max content width | `max-w-[1200px] mx-auto px-6` |
| Journey step dot | `w-10 h-10 rounded-full bg-accent text-white font-bold text-sm` |
| Timeline dot | `w-3 h-3 rounded-full bg-accent ring-4 ring-gray-50` |
| Arch box — teal | `bg-teal-50 text-teal-700 border border-teal-200 px-4 py-2 rounded-lg text-sm font-medium` |
| Arch box — blue | `bg-blue-50 text-blue-700 border border-blue-200` |
| Arch box — purple | `bg-purple-50 text-purple-700 border border-purple-200` |
| Arch box — amber | `bg-amber-50 text-amber-700 border border-amber-200` |

---

*Template derived from the PillEd project page. Replicate the file at `app/projects/[slug]/page.tsx` and populate each section with project-specific content.*
