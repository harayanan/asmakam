# Campus / Food-Forest layout — design

**Date:** 2026-07-06
**Status:** Approved, implementing

## Goal

Show the physical space (the 15-acre permaculture food forest in Indore) on the
site via a clean illustrated master-plan image, on the homepage and on a new
dedicated Campus page in the top nav.

## Decisions

1. **Image direction** — Clean illustrated master plan. Redraw `layout2.jpeg`
   (the permaculture master plan) as a flat standalone graphic: fix spelling
   slips, declutter labels, drop the desk/pens/compass framing, recolor to the
   site palette (cream / forest / leaf / gold). Generated with nano banana
   (Gemini 3 Pro Image, `gemini-3-pro-image-preview`), using `layout2.jpeg` as
   the reference. Output → `public/images/campus-masterplan.png`.

2. **Homepage `Campus.astro` ("Our Home")** — keep the existing food-forest
   photo and copy; add the master-plan image as a wide element below the
   two-column block, plus an "Explore the campus →" button linking to `/campus`.

3. **New `/campus` page** (`src/pages/campus.astro`):
   - Hero (headline + location "Indore, Central India")
   - Large master-plan illustration
   - Zone legend — each area explained in short copy (new `zones:` list in
     `campus.yaml`)
   - Building technique + natural materials (lime & stone)
   - Features / what's being built
   - CTA to `/contact`

4. **Nav** — add `{ label: "Campus", href: "/campus" }` to `navigation.yaml`,
   ordered Home · About · Campus · Programs · Contact. Flows to desktop `Header`
   and `MobileNav` automatically.

## Zones (from layout2, cleaned)

Permaculture Food Forest (syntropic agriculture), Rotational Silvopasture
(sheep/goats), Water-Harvesting Pond with bio-filtration swales, Existing
Multi-Use Farm Hub, Living quarters, Irrigated Greywater Banana Circle,
Composting Station, Chicken Tractor, Beehives, Windbreak tree lines, Rainwater
Collection Tank, Keyhole Garden, Moringa & Mango plantings.

## Out of scope

- Annotated aerial-photo version (layout1) — not used this round.
- Interactive/zoomable map — static image only.

## Files touched

- `public/images/campus-masterplan.png` (new, generated)
- `src/data/navigation.yaml` (add Campus link)
- `src/data/campus.yaml` (add `zones:`, `masterplanCaption`)
- `src/components/Campus.astro` (add master-plan block + CTA)
- `src/pages/campus.astro` (new page)
