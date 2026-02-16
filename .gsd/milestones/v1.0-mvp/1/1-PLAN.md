---
phase: 1
plan: 1.1
wave: 1
---

# Plan 1.1: Project Initialization

## Objective
Initialize the Astro project and install the core Tailwind CSS integration.

## Context
- .gsd/SPEC.md
- .gsd/ARCHITECTURE.md
- .gsd/phases/1/RESEARCH.md

## Tasks

<task type="auto">
  <name>Initialize Astro Project</name>
  <files>package.json, astro.config.mjs</files>
  <action>
    Run `npm create astro@latest . -- --template minimal --install --no-git --typescript strict --skip-houston` in the root directory.
    - Ensure dependencies are installed.
    - Do NOT initialize a new git repository (already exists).
  </action>
  <verify>test -f astro.config.mjs</verify>
  <done>Astro project structure exists and package.json is present.</done>
</task>

<task type="auto">
  <name>Install Tailwind CSS</name>
  <files>astro.config.mjs, tailwind.config.mjs</files>
  <action>
    Run `npx astro add tailwind --yes`.
    - This will install tailwindcss and @astrojs/tailwind (or @tailwindcss/vite).
    - It will update astro.config.mjs.
  </action>
  <verify>grep "tailwind" astro.config.mjs</verify>
  <done>Tailwind integration is configured in Astro config.</done>
</task>

## Success Criteria
- [ ] `npm run dev` starts the server (manual check later).
- [ ] `npm run build` succeeds.
