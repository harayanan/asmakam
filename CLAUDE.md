# CLAUDE.md - asmakam

## Project Purpose

Marketing website for Asmakam Life University — an educational institution. Content-driven site with programs, events, blog, team, and campus information. Deployed at asmakam.org.

**Started**: January 2026 | **Commits**: 6 | **Status**: Active

## Tech Stack

- **Framework**: Astro 5.7 (static site generator)
- **UI**: React (islands), Tailwind CSS, Lucide icons
- **Content**: YAML data files + Astro Content Collections (Markdown)
- **Deployment**: Vercel

## Architecture

```
src/
├── pages/
│   ├── index.astro        # Homepage
│   ├── about.astro        # About page
│   ├── programs.astro     # Programs listing
│   ├── events.astro       # Events page
│   ├── contact.astro      # Contact page
│   └── blog/              # Blog pages
├── components/            # Astro + React components
├── layouts/               # Page layouts
├── content/
│   ├── blog/              # Blog posts (Markdown)
│   ├── events/            # Event entries
│   └── config.ts          # Content collection schemas
└── data/                  # YAML data files
    ├── site.yaml          # Site metadata
    ├── navigation.yaml    # Nav menu structure
    ├── programs.yaml      # Academic programs
    ├── pillars.yaml       # Institutional pillars
    ├── team.yaml          # Team members
    ├── mentors.yaml       # Mentor profiles
    ├── cocreators.yaml    # Co-creator profiles
    ├── campus.yaml        # Campus information
    └── vision.yaml        # Vision statement
```

## Key Files

- `src/data/*.yaml` — All site content is YAML-driven (9 data files)
- `src/content/config.ts` — Astro Content Collection schemas for blog and events
- `src/pages/index.astro` — Homepage with hero, programs, pillars sections
- `astro.config.mjs` — Astro config with React and Tailwind integrations

## Features

- YAML-driven content (easy non-developer editing)
- Astro Content Collections for blog and events
- React islands for interactive components
- Static site generation (fast, SEO-friendly)
- Responsive design

## Development

```bash
npm run dev           # Astro dev server
npm run build         # Static site build
npm run preview       # Preview built site
```

No environment variables required.
