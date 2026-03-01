# HANDOVER — asmakam

> Marketing website for Asmakam Life University — YAML-driven, nature/forest theme

## Status: PRODUCTION-READY (Deployed)

**Version:** 1.0.0 | **Commits:** 7 | **Last Updated:** February 6, 2026

## Tech Stack

- **Framework:** Astro 5.7.10 (static site, React islands)
- **UI:** Tailwind CSS 3.4.17 + custom animations
- **Typography:** Playfair Display (headings) + Inter (body)
- **Data:** YAML files parsed with js-yaml at build time
- **Integrations:** @astrojs/react, @astrojs/tailwind, @astrojs/sitemap
- **Deployment:** Vercel (asmakam.org)

## Content Architecture (9 YAML Files)

All content lives in `src/data/`:
- `site.yaml` — Organization name, tagline, contact, social links
- `navigation.yaml` — Menu structure
- `programs.yaml` — 6 program types + 4 special programs
- `pillars.yaml` — Sustainability, Wellness, Lifelong Learning
- `team.yaml` — 6 team members + advisors (with photos)
- `cocreators.yaml` — 5 featured + 14 other initiatives
- `mentors.yaml` — 13 global mentors
- `campus.yaml` — 15-acre permaculture food forest, Indore
- `vision.yaml` — "Phygital modern gurukul" + 10 paradigm shifts

## Source Structure

```
src/
├── pages/                      # 7 pages
│   ├── index.astro             # Home (Hero, Pillars, Vision, Campus, Programs)
│   ├── about.astro             # Team, Co-creators, Mentors
│   ├── programs.astro          # Programs + Paradigm Shifts
│   ├── contact.astro           # Contact + Google Maps
│   ├── events.astro            # Events (content collection)
│   └── blog/                   # Blog listing + [slug] pages
├── components/                 # 14 Astro + 1 React (MobileNav.tsx)
├── layouts/                    # BaseLayout + BlogLayout
├── content/
│   ├── blog/welcome.md         # 1 blog post
│   └── events/sample-retreat.md
├── data/                       # 9 YAML files (see above)
└── styles/global.css           # 205 lines (8 animations, utilities)

public/images/                  # 17 images (team photos, campus, logo)
```

## Design System

- **Colors:** Forest green palette (forest, leaf, lime, earth, sand, cream, saffron, gold)
- **Animations:** fadeInUp, float, shimmer, pulseGlow, gentleSpin
- **Effects:** Glass-morphism cards, wave dividers, organic blob shapes
- **SEO:** JSON-LD (EducationalOrganization), Open Graph, sitemap

## Quick Start

```bash
npm install
npm run dev          # Astro dev server
npm run build        # Static build to dist/
npm run preview      # Preview built site
```

## Environment Variables

**None required.** Fully static, content-driven site.

## Key People

- Archana Parsai Gehlot (Co-Founder, ex-Oracle)
- Manish Gehlot (Co-Founder, ex-Infosys)
- Maitreyee Gehlot (Co-Founder, product/entrepreneur)
- Harish Narayanan (Advisor, CMO HDFC AMC)

## Shadow Pages (Not in Navigation)

- `/meeting-feb-2026` — Summary of the first founding team meeting (Feb 28, 2026). AI-transcribed from audio recording. Contains discussion points, takeaways, action items, quotes, and open questions. Accessible by direct URL only.

## Known Gaps

- Only 1 blog post and 1 sample event (content library needs growth)
- No form submission backend (contact form intentionally removed)
- No testing framework

## Session Log

### 2026-02-28
- Added shadow page `/meeting-feb-2026` — first founders' meeting summary
- Audio (m4a) downloaded from Google Drive, converted to mp3, transcribed via Gemini 2.0 Flash
- Page styled to match site theme (forest/sand/cream), not added to navigation.yaml
- Deployed to Vercel production

---
*Last reviewed: 2026-02-28*
