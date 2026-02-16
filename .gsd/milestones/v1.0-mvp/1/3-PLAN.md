---
phase: 1
plan: 1.3
wave: 2 (Depends on 1.1, 1.2)
---

# Plan 1.3: Layout Components

## Objective
Create the reusable Layout, Navbar, and Footer components.

## Context
- .gsd/SPEC.md (Layout requirements)

## Tasks

<task type="auto">
  <name>Create Layout Component</name>
  <files>src/layouts/Layout.astro</files>
  <action>
    Create `src/layouts/Layout.astro`:
    - Props: `title`.
    - Structure: HTML5 boilerplate, `<slot />` for content.
    - Global styles import.
    - Meta tags for viewport, etc.
  </action>
  <verify>test -f src/layouts/Layout.astro</verify>
  <done>Layout component exists.</done>
</task>

<task type="auto">
  <name>Create UI Components</name>
  <files>src/components/Navbar.astro, src/components/Footer.astro</files>
  <action>
    1. Create `Navbar.astro`: Minimalist logo (text) and links.
    2. Create `Footer.astro`: Copyright and social links.
    3. Update `Layout.astro` to include Navbar and Footer.
    4. Update `src/pages/index.astro` to use the Layout.
  </action>
  <verify>grep "Navbar" src/layouts/Layout.astro</verify>
  <done>Layout integrates Navbar and Footer.</done>
</task>

## Success Criteria
- [ ] `npm run build` passes.
- [ ] Index page renders with layout structure.
