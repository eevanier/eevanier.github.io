---
phase: 2
plan: 1
wave: 1
---

# Plan 2.1: Implement Hobbies & Interests Section

## Objective
Add a "Beyond Engineering" section to the About page to showcase the user's personality and hobbies (Skateboarding, Snowboarding, Tricking). This aligns with the "Industrial Minimalist" aesthetic using clean iconography.

## Context
- .gsd/SPEC.md (Goal 1: Professional Showcase, Goal 3: Modern Experience)
- .gsd/ROADMAP.md (Phase 2)
- src/pages/about.astro (Target file)
- src/components/HobbyCard.astro (New component)
- src/styles/global.css (Global styles)

## Tasks

<task type="auto">
  <name>Install Icon Library</name>
  <files>package.json</files>
  <action>
    Install `lucide-astro` to provide consistent, lightweight icons for the hobby cards.
    Run: `npm install lucide-astro`
  </action>
  <verify>grep "lucide-astro" package.json</verify>
  <done>Package installed and listed in dependencies</done>
</task>

<task type="auto">
  <name>Create HobbyCard Component</name>
  <files>src/components/HobbyCard.astro</files>
  <action>
    Create a reusable `HobbyCard` component.
    - Props: `title` (string), `description` (string), `icon` (string/component).
    - Styling: Minimalist card with subtle border/hover effect. Use Tailwind classes.
    - Icons: Import distinct icons from `lucide-astro` (e.g., `Activity`, `Mountain`, `Zap`).
  </action>
  <verify>test -f src/components/HobbyCard.astro</verify>
  <done>Component exists and accepts props</done>
</task>

<task type="auto">
  <name>Update About Page</name>
  <files>src/pages/about.astro</files>
  <action>
    Add the "Beyond Engineering" section to `src/pages/about.astro`.
    - Import `HobbyCard` and icons from `lucide-astro`.
    - Define hobbies data:
      1. Skateboarding (Icon: Activity/Zap)
      2. Snowboarding (Icon: Mountain)
      3. Tricking (Icon: RotateCcw/Flip)
    - Layout: Responsive grid (1 col mobile, 3 col desktop).
    - Visuals: Section header "Beyond Engineering" with technical accent.
  </action>
  <verify>npm run build</verify>
  <done>Build succeeds and section is present in markup</done>
</task>

## Success Criteria
- [ ] `lucide-astro` installed.
- [ ] `HobbyCard` component created.
- [ ] About page displays 3 hobbies in a responsive grid.
- [ ] Build passes with no errors.
