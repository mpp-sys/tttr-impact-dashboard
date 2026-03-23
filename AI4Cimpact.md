# AI4C Impact Dashboard — Build Instructions

## 1. WHAT YOU ARE BUILDING

A standalone, single-file interactive HTML impact dashboard for AI for Changemakers (AI4C) — a flagship programme by Tech To The Rescue (TTTR). This is not a prototype. It must be production-quality, shareable as a link, and credible to a sophisticated funder audience (Google.org, AWS).

Primary audiences:
* Google.org and AWS (existing funders — treat as accountability/stewardship report, not a pitch)
* Internal TTTR leadership team

The one thing the dashboard must communicate:
**AI4C is the most rigorous AI enablement programme for social impact organisations in the sector.**

Tone: Movement framing — grounded in evidence. Not "look how many orgs we helped." More: "we are building the infrastructure for AI-powered social change, and here is what that looks like in practice." Sharp, warm, precise. No fluff. Short sentences. Confident.

---

## 2. TECHNICAL REQUIREMENTS

* Single HTML file — all CSS and JS inline. No build step, no dependencies to install.
* No framework required — vanilla HTML/CSS/JS only. Keep it portable.
* External resources allowed: Google Fonts via CDN, Chart.js via CDN (cdnjs.cloudflare.com only).
* Must work when opened directly in a browser from a file or served as a static link.
* Responsive — must work on laptop/desktop. Mobile is secondary but should not break.
* No backend, no API calls — all data is hardcoded from the datasets below.

---

## 3. BRAND & VISUAL IDENTITY

### Colours (strict — do not deviate)

```css
--purple:        #6C00F0;   /* Primary hero colour */
--purple-light:  #AA80FF;   /* Secondary purple, labels */
--purple-dim:    #3D0880;   /* Dark purple surfaces */
--purple-faint:  rgba(108,0,240,0.12);
--teal:          #8AFFE3;   /* Accent — quotes, highlights, CTAs */
--teal-dim:      #4ECBA8;
--teal-faint:    rgba(138,255,227,0.08);
--navy:          #050024;   /* Page background */
--navy-mid:      #0D0040;   /* Card backgrounds */
--white:         #FFFFFF;
--off-white:     #FCFBF3;
--text-muted:    #7A6FAA;
--text-mid:      #C5B2FF;
--border:        rgba(108,0,240,0.25);
--border-teal:   rgba(138,255,227,0.2);
```

### Typography

* Headings: Space Grotesk (Google Fonts) — Bold (700) for hero and section titles, Medium (500) for subheadings
* Body: DM Sans (Google Fonts) — Regular (400) for body text, Medium (500) for labels
* Load both from Google Fonts at top of `<head>`

### Visual style

* Dark navy background throughout (`#050024`)
* Subtle grid background pattern (lines at `rgba(108,0,240,0.06)`) on hero section
* Radial gradient glow behind hero content (purple, not centred — offset right)
* Cards: dark surfaces (`#0D0040` or `rgba(108,0,240,0.12)`), 1px border at `--border`, border-radius 12px
* Stat cards: left-top accent bar (3px, solid purple) on each
* Teal (`#8AFFE3`) used ONLY for: quotes, key highlights, accent elements, hover states — not for backgrounds
* Photos: use the TTTR mosaic/clipped card style (angled/rotated containers) in the hero
* No gradients on text. No glow effects on text. Flat and intentional.
* Thin 1px borders, generous whitespace, no shadows

### Hero section

The hero should reference the AI4C brand image visual language:
* Three portrait-style image placeholders in angled/clipped containers (mosaic style) — use colored placeholder divs with initials if no real images
* Large bold headline: "AI for Changemakers" with teal accent on key words
* Subheadline in `--text-mid` colour
* Animated pulsing teal dot next to a "Live Programme Data" tag
* TTTR logo mark (SVG circle with cross — the lifesaver icon) top left
* "by Tech To The Rescue" in small caps

---

## 4. STRUCTURE — 3 TABS

Do NOT use more than 3 tabs. Navigation sits below the hero, above content.

| Tab | Content |
|---|---|
| Tab 1: Overview | Programme scale + MEL outcomes |
| Tab 2: Impact Stories | 4 deep-dive case studies |
| Tab 3: Methodology | Theory of Change + MEL framework |

Tab switching must be smooth (CSS transition, no page reload). Active tab has bottom border in purple. Default: Overview active.

---

## 5. DATA — HARDCODE ALL OF THIS

### 5a. Headline Stats (hero / Overview top row)

| Stat | Value | Label |
|---|---|---|
| 1 | 115 | Unique NGOs enabled across 6 cohort themes |
| 2 | 172 | Projects in pipeline from concept to at-scale |
| 3 | 99 | Matched with tech partners pro-bono engagements |
| 4 | 30+ | Countries represented across 6 continents |
| 5 | 81% | Plan to expand AI further post-programme survey |
| 6 | 3.8/5 | AI competence score self-assessed, post-bootcamp |

### 5b. Solution Status Pipeline (Overview — horizontal pipeline or donut)

| Stage | Count | Colour |
|---|---|---|
| Implemented at scale | 2 | #85F600 |
| Piloting / Testing | 9 | #FFD874 |
| In Development | 6 | #85A5FF |
| In Concept / Design | 10 | #C5B2FF |
| Matching / In progress | 4 | #FA4E4B |

### 5c. Cohort Breakdown (Overview — bar or donut chart)

| Cohort | Projects |
|---|---|
| Health | 41 |
| Education | 35 |
| Climate | 43 |
| Disaster Management | 32 |
| Economic Opportunity | 21 |

### 5d. MEL Outcomes (Overview — progress bars)

| Metric | Value |
|---|---|
| Leadership directly engaged in programme | 74% |
| Improved AI competence post-bootcamp | 84% |
| Successfully matched with tech partner | 87% |
| Actively tracking impact of AI solution | 58% |
| Responsible AI framework in place | 52% |
| Talked to donors about AI tools | 55% |
| Plan to expand AI to other org areas | 81% |

### 5e. Geographic reach (Overview — regional bar chart, horizontal)

| Region | NGOs |
|---|---|
| North America | 21 |
| Europe | 18 |
| South Asia | 14 |
| Africa | 13 |
| Latin America | 9 |
| Southeast Asia | 6 |
| Middle East | 4 |
| Global/Other | 7 |

NOTE: Show geography but do not lead with it. It appears below the headline stats, not before them.

### 5f. Challenge acknowledgement (Overview — single sentence, styled)

Render this as a small callout card, not a section:

> "Not every partnership succeeded on the first attempt — we learned from each one, and have improved our vetting, onboarding, and project management support as a result."

Style it with a left teal border, italic text, muted background. No further detail.

---

## 6. TAB 2 — IMPACT STORIES

Four case studies. Each card must include:
* Organisation name + country flag emoji
* The problem they brought to AI4C (1–2 sentences)
* What they built (the solution name + 1–2 sentences)
* Current status (badge: "Piloting", "At Scale", etc.)
* One direct quote from their MEL survey response (in quotation marks, italicised, teal accent)
* A metric or stat if available

Layout: 2×2 grid on desktop, single column on mobile. Cards are tall, not wide. Clicking a card expands it slightly or reveals a "read more" section inline (CSS only, no JS required — use checkbox hack or details/summary).

---

### Story 1 — Life From Water Foundation 🇪🇬

**Country:** Egypt / Kenya
**Problem:** No reliable way to monitor water treatment units in remote communities without manual, on-site visits — leading to missed failures and unsafe water.
**Solution:** Water Eye — a computer vision system that reads water treatment unit meters via camera and sends readings automatically. Built on AWS with Omdena. Scaling from 1 unit to ~15 units, each serving 2,000+ people.
**Status badge:** Piloting
**Quote:** "We realised that an AI solution is not just about having a smart chatbot. For it to be adopted, it has to fit into their existing workflow — not attempt to change them from day one."
**Stat:** Scaling to 15 units · 2,000+ people per unit

---

### Story 2 — STEAM for Vietnam 🇻🇳

**Country:** Vietnam
**Problem:** 2 million teachers across Vietnam lack time, tools, and support to create high-quality, personalised lesson plans — especially in under-resourced provinces.
**Solution:** OctoAI — an AI-powered lesson plan generator, quiz creator, and learning analytics platform, localised in Vietnamese and aligned to the national curriculum. Built for teachers by teachers.
**Status badge:** At Scale
**Quote:** "We became much better at explaining AI to non-technical stakeholders — teachers, ministries, donors, and partners. AI4C helped us reframe OctoAI from a tool into a systemic solution."
**Stat:** Supports 2M teachers · 24M students in reach

---

### Story 3 — Emergency Medicine Kenya Foundation 🇰🇪

**Country:** Kenya
**Problem:** During a medical emergency, people cannot read a static first aid guide while their hands are occupied. Language barriers further limit who can access help. Over 5,000 Kenyans use the Casualty App — but it was passive and text-only.
**Solution:** AI-powered Swahili voice guidance integrated into the Casualty App — hands-free, multilingual, real-time first aid instructions. Built with Miquido.
**Status badge:** Piloting
**Quote:** "The structured approach to identifying ethical risks allowed us to immediately prioritise AI-powered translation for Swahili and speech-based interaction — ensuring all citizens could access lifesaving guidance."
**Stat:** ~5,000 active users · Swahili + English

---

### Story 4 — Sevamob 🇮🇳

**Country:** India
**Problem:** Frontline health workers in underserved communities lack point-of-care diagnostic tools — leading to delayed detection of treatable conditions.
**Solution:** 8 AI-powered medical devices built using computer vision and the latest ML techniques, enabling frontline workers to screen for new conditions on-site. 5 pilot customers active.
**Status badge:** Piloting
**Quote:** "The guidance received during technical consulting and mentorship helped us develop more AI-based medical devices using the latest technologies."
**Stat:** 8 AI medical devices · 5 B2B pilot customers · 25% of org staff using AI

---

## 7. TAB 3 — METHODOLOGY

This tab is for programme officers who want to understand the rigour. It must feel like a serious document, not a brochure.

### Section 1: Theory of Change (brief)

**Title:** "How AI4C creates change"

Render as a horizontal flow (arrows between boxes) on desktop, stacked on mobile:

```
[SIOs with proven interventions]
  → [AI Impact Lab: 7-week bootcamp]
  → [Pro-bono tech matching]
  → [AI Impact Scaling Program]
  → [Competence + Connections + Implementation]
  → [Impact Multiplication]
```

Each box: small label, brief description (1 line). Arrow connectors in purple.

### Section 2: What We Measure (MEL Framework)

Four rows, each with a colour-coded left border:

| Level | Colour | What we track |
|---|---|---|
| Outputs | Purple | SIOs enrolled, bootcamp NPS, pro-bono value unlocked, matches made |
| Outcomes | Teal | AI competence improvement, implementation progress, connections made, donor visibility |
| Impact | Yellow (#FFD874) | Beneficiaries reached, deployment scale, 5× impact multiplication evidence |
| Movement | Green (#85F600) | Spread of pro-bono AI culture, ecosystem growth, replication by others |

### Section 3: Programme Design

Three columns:

**AI Impact Lab**
7-week cohort-based bootcamp. Hands-on AI literacy, design thinking (IDEO), responsible AI framework, use-case mapping, prototype development, and pitch day.

**Pro-Bono Matching**
Each NGO is matched with a vetted tech company partner. TTTR facilitates, structures, and monitors the collaboration. Partners include global software agencies, AI startups, and specialist firms.

**AI Impact Scaling Program**
Long-term enablement beyond the bootcamp. Ongoing pro-bono matching, mentors, community of practice, specialised workshops (data readiness, cybersecurity, responsible AI).

### Section 4: Responsible AI Commitment

Four small cards in 2×2 grid:

* **Transparent** — All AI decisions explainable to beneficiaries and stakeholders
* **Inclusive** — Solutions built with and for the communities they serve
* **Sustainable** — Tech partners transfer knowledge so orgs can maintain solutions independently
* **Accountable** — Impact is monitored and orgs are supported to evaluate their own results

---

## 8. NAVIGATION & UX DETAILS

* Tab bar sits between hero and content. Sticky on scroll (sticks to top of viewport when hero scrolls out of view).
* Tab animation: content fades in on tab switch (opacity 0→1, 200ms ease).
* Stat cards: animate count up from 0 to final value on page load using JS (IntersectionObserver — only animate when in view). Duration: 1200ms, easing: ease-out.
* Progress bars: animate width from 0 to final % on scroll into view.
* Pipeline/status chart: use Chart.js doughnut. No legend from Chart.js — build custom HTML legend below chart.
* Geography chart: use Chart.js horizontal bar. Bars in purple, hover state in teal.
* Story cards: subtle hover state — border brightens to purple, slight `translateY(-2px)`. Smooth 200ms transition.
* Scroll to content: clicking a tab scrolls the page to the tab content area smoothly.
* Footer: TTTR logo + "AI for Changemakers" + "© 2025 Tech To The Rescue" + "techtotherescue.org" as a text link. No funder logos.

---

## 9. HERO IMAGE PLACEHOLDERS

Since real photography is not embedded, create three image placeholder cards in the hero using the TTTR mosaic/angled style:

* Three divs, each rotated slightly (e.g., -3deg, 0deg, +2deg), clipped with `overflow: hidden`
* Each placeholder: purple or teal gradient background, with a subtle icon or initial letter
* Represent: a woman in a design session, a man at a laptop, a woman studying — describe them in `aria-label`s
* Stack them slightly overlapping, positioned right-of-centre in the hero layout

If the hero layout becomes too complex, render a single full-width tinted banner with the three portrait placeholders side by side in the angled TTTR card style.

---

## 10. FOOTER CTA

At the bottom of the page (below all tabs):

> "Want to bring AI to your organisation?"
> [Apply to AI4C →]   [Partner with us →]

Both buttons: outlined style (1px border, purple), hover fills with purple. Link to https://techtotherescue.org (both, for now).

Small note below: "Data reflects AI4C Cohort 1 MEL outcomes (Nov–Dec 2025) and full programme portfolio as of February 2026."

---

## 11. ACCESSIBILITY

* All interactive elements must have focus states (`outline: 2px solid var(--teal)`)
* Colour contrast: all body text against dark backgrounds must pass WCAG AA
* Use semantic HTML: `<nav>`, `<main>`, `<section>`, `<article>`, `<h1>`–`<h3>`, `<button>`
* All charts must have `aria-label` descriptions
* Image placeholders must have descriptive `alt` text

---

## 12. COMMON MISTAKES TO AVOID

* Do NOT use Inter, Roboto, or system fonts — use Space Grotesk + DM Sans only
* Do NOT use purple-on-purple text — teal on navy is the contrast pair
* Do NOT show cancelled projects (12 total) as a headline stat
* Do NOT show funder logos (Google.org, AWS) anywhere on the dashboard
* Do NOT fabricate quotes — use only the exact quotes listed in Section 6 above
* Do NOT build more than 3 tabs
* Do NOT use `position: fixed` for modals or overlays — breaks iframe contexts
* Do NOT use localStorage or sessionStorage
* Do NOT load fonts or scripts from any CDN other than cdnjs.cloudflare.com, fonts.googleapis.com, or fonts.gstatic.com
* Do NOT round numbers inconsistently — integers for counts, one decimal for scores

---

## 13. DELIVERABLE

One file: `AI4C_Impact_Dashboard.html`

Test checklist before delivering:
* Opens in browser with no errors in console
* All 3 tabs switch correctly
* All charts render with correct data
* Count-up animations fire on load
* Progress bars animate on scroll
* Responsive at 1280px, 1024px, and 768px widths
* All 4 story cards visible and expand correctly
* Footer renders with correct text and links
* No funder logos present
* No fabricated data — all numbers match this document

---

## 14. REFERENCE SOURCES (for Claude Code context)

The data in this document comes from:
1. MEL Impact Check-In survey (Nov–Dec 2025) — 31 organisations responded
2. All AI4C Projects spreadsheet (Feb 2026) — 172 projects, 115 NGOs, 6 cohort sheets
3. TTTR Theory of Change (Dec 2025)
4. TTTR Brand Book (March 2025)
5. AI4C programme image — purple hero with teal accent, mosaic photo style, TTTR lifesaver logo

**The single most important sentence: AI4C is the most rigorous AI enablement programme for social impact organisations in the sector.**

Every design and content decision should serve that claim.
