---
phase: 1
plan: 1.2
wave: 1
---

# Plan 1.2: Design System Setup

## Objective
Implement the "Industrial Minimalist" design system including typography and color palette.

## Context
- .gsd/phases/1/RESEARCH.md (Contains palette and font choices)

## Tasks

<task type="auto">
  <name>Install Fonts</name>
  <files>package.json, src/styles/global.css</files>
  <action>
    1. Install fonts: `npm install @fontsource/inter @fontsource/jetbrains-mono`.
    2. Create `src/styles/global.css`.
    3. Import fonts in `src/styles/global.css` or the main Layout.
    4. Define utility classes or base styles if needed.
  </action>
  <verify>npm list @fontsource/inter</verify>
  <done>Fonts are installed.</done>
</task>

<task type="auto">
  <name>Configure Tailwind Theme</name>
  <files>tailwind.config.mjs</files>
  <action>
    Update `tailwind.config.mjs` (or equivalent) to extend the theme:
    - Fonts: Sans = Inter, Mono = JetBrains Mono.
    - Colors:
      - `industrial-a`: #FAFAFA (bg)
      - `industrial-b`: #09090B (dark bg)
      - `technical`: #FF3600 (International Orange)
    - Add `src/styles/global.css` import to `astro.config.mjs` or Layout if not auto-injected.
  </action>
  <verify>grep "International Orange" tailwind.config.mjs || grep "FF3600" tailwind.config.mjs</verify>
  <done>Tailwind config reflects the Industrial Minimalist palette.</done>
</task>

## Success Criteria
- [ ] Tailwind classes for custom colors generate correct CSS.
- [ ] Fonts load correctly.
