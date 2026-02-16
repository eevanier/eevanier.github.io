---
phase: 2
plan: 2.2
wave: 2
autonomous: true
files_modified:
  - src/components/ProjectCard.astro
  - src/pages/projects/[...slug].astro
  - src/layouts/ProjectLayout.astro
must_haves:
  truths:
    - "ProjectCard renders project data correctly"
    - "Detail page renders Markdown content and metadata"
  artifacts:
    - "src/projects/[...slug].astro exists"
---

# Plan 2.2: Content Engine UI

## Objective
Create the visual components to display project data: the summary card (for lists) and the detail page (for deep dives).

## Context
- .gsd/SPEC.md
- .gsd/ARCHITECTURE.md
- src/content/config.ts (Schema)

## Tasks

<task type="auto">
  <name>Create Project Card Component</name>
  <files>src/components/ProjectCard.astro</files>
  <action>
    Create `src/components/ProjectCard.astro`.
    1. Props: `project` (CollectionEntry<'projects'>).
    2. Layout:
       - Thumbnail (aspect-video, cover).
       - Title (h3).
       - Tagline (p, muted).
       - Tags (badge list).
    3. Styling: Use Tailwind. Industrial minimalist (borders, monospaced fonts for tags).
    4. Link: Wrap in `<a>` pointing to `/projects/[slug]`.
  </action>
  <verify>test -f src/components/ProjectCard.astro</verify>
  <done>Component exists and accepts Project props</done>
</task>

<task type="auto">
  <name>Create Project Detail Page</name>
  <files>src/pages/projects/[...slug].astro, src/layouts/ProjectLayout.astro</files>
  <action>
    1. Create `src/layouts/ProjectLayout.astro` (if needed for specific styling, otherwise reuse main Layout).
       - Should include "Back to Projects" link.
    2. Create `src/pages/projects/[...slug].astro`.
       - `getStaticPaths()`: Query `getCollection('projects')`.
       - Render:
         - Hero section with Title, Date, Tags, Thumbnail.
         - `<Content />` component for the markdown body.
         - Prose styling (typography plugin or custom CSS) for the markdown content.
  </action>
  <verify>test -f src/pages/projects/[...slug].astro</verify>
  <done>Dynamic route exists and renders content</done>
</task>
