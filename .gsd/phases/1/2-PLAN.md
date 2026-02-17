---
phase: 1
plan: 2
wave: 2
---

# Plan 1.2: Tabbed Project Detail Page

## Objective
Rebuild the project detail page (`[...slug].astro`) with a tabbed interface that separates the "Overview" (What/How/Results, gallery, links) from the "Build Log" (chronological progress feed). This implements the key UX decision from DECISIONS.md: recruiters see a polished summary, while peers can dive into the engineering process.

## Context
- .gsd/DECISIONS.md (Tabbed Interface — Option A)
- .gsd/ARCHITECTURE.md
- src/pages/projects/[...slug].astro
- src/layouts/ProjectLayout.astro
- src/content/config.ts (schema with buildLog field — created in Plan 1.1)

## Tasks

<task type="auto">
  <name>Build the tabbed project detail page</name>
  <files>src/pages/projects/[...slug].astro</files>
  <action>
    Rewrite `[...slug].astro` to implement a two-tab layout. Keep the existing `getStaticPaths` and `project.render()` logic intact.

    **Tab structure:**
    - Tab 1: "Overview" (default active)
    - Tab 2: "Build Log" (only shown if `project.data.buildLog` exists and has entries)

    **Tab switching:**
    Use vanilla JS with a `<script>` block. Each tab button gets a `data-tab` attribute. Clicking toggles visibility of the corresponding panel via class toggling (add/remove `hidden`). Active tab gets a visual indicator (e.g., amber underline or bold).

    **Overview tab content (in order):**
    1. Title (h1) and tagline
    2. Meta row: tags, role (if present), timeline (if present)
    3. Hero image (thumbnail — existing)
    4. Action buttons (Visit Project, View Code — existing)
    5. What / How / Results section:
       - Three-column grid on desktop, stacked on mobile
       - Each card: heading ("The Challenge" / "The Approach" / "The Results"), paragraph from `challenge` / `solution` / `outcome`
       - Only render if at least one of the three fields is present
    6. Gallery section (if `gallery` has images):
       - Grid layout with rounded corners, hover-to-zoom
    7. Markdown body content (`<Content />`)

    **Build Log tab content:**
    - Vertical timeline layout
    - Each entry: stage name as label, date as subtitle, description as paragraph
    - Use a left-border line or dot indicator for the timeline visual
    - If `buildLog` entry has `images`, render them in a small inline grid below the description

    **Styling requirements:**
    - Use existing Tailwind classes consistent with the rest of the site
    - Tab bar: `border-b border-zinc-200`, tabs use `font-mono text-sm`, active tab `border-b-2 border-amber-500 text-zinc-900`
    - What/How/Results cards: `bg-zinc-50 border border-zinc-200 rounded-lg p-6`
    - Build log timeline: left border `border-l-2 border-zinc-200`, dots `bg-amber-500 rounded-full`
    - All hover states use `transition-all duration-300`

    **Do NOT:**
    - Import any React/Vue/Svelte — this is pure Astro + vanilla JS
    - Remove any existing functionality (links, tags, thumbnail)
    - Use client:load or any island hydration — tabs work via vanilla JS in a `<script>` tag
  </action>
  <verify>npx astro build 2>&1 | Select-String -Pattern "error" -NotMatch | Select-Object -First 3</verify>
  <done>Project detail page builds successfully with two-tab interface; Overview shows What/How/Results grid; Build Log shows timeline.</done>
</task>

<task type="auto">
  <name>Update ProjectLayout for enhanced display</name>
  <files>src/layouts/ProjectLayout.astro</files>
  <action>
    Update `ProjectLayout.astro` to use a wider container for the enhanced project pages.

    Changes:
    - Increase `max-w-4xl` to `max-w-5xl` to give the tabbed content more breathing room
    - Add `py-12` instead of `py-8` for more generous vertical spacing

    Keep the "Back to Projects" link and all existing markup intact.
  </action>
  <verify>npx astro build 2>&1 | Select-String -Pattern "error" -NotMatch | Select-Object -First 3</verify>
  <done>ProjectLayout uses `max-w-5xl` and `py-12`; build succeeds.</done>
</task>

<task type="checkpoint:human-verify">
  <name>Visual verification of tabbed project page</name>
  <files>src/pages/projects/[...slug].astro</files>
  <action>
    Run `npm run dev` and navigate to the sample project page.

    Ask the user to verify:
    1. Two tabs ("Overview" and "Build Log") are visible
    2. Tab switching works smoothly
    3. What/How/Results section renders correctly
    4. Build Log shows a timeline with staged entries
    5. Overall styling matches the "Industrial Minimalist" aesthetic
  </action>
  <verify>User confirms visual appearance is acceptable.</verify>
  <done>User approves the tabbed project detail page.</done>
</task>

## Success Criteria
- [ ] Project detail page has a functional two-tab interface (Overview + Build Log)
- [ ] What/How/Results renders as a structured grid (not just raw markdown)
- [ ] Build Log tab displays a visual timeline with stage, date, and description
- [ ] Tabs work with pure vanilla JS (no framework hydration)
- [ ] Build Log tab is conditionally hidden when no buildLog data exists
- [ ] `npx astro build` completes without errors
