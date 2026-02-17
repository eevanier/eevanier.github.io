---
phase: 2
plan: 2
wave: 2
---

# Plan 2.2: Create Remaining 2 Projects & Final Verification

## Objective
Create the final 2 project content folders and verify all 5 projects render correctly across the projects index page and individual detail pages.

## Context
- .gsd/SPEC.md
- src/content/config.ts
- src/content/projects/ (3 projects created in Plan 2.1)

## Tasks

<task type="auto">
  <name>Create remaining 2 project folders</name>
  <files>
    src/content/projects/{project-4-slug}/index.md (NEW)
    src/content/projects/{project-4-slug}/thumbnail.{ext} (NEW)
    src/content/projects/{project-5-slug}/index.md (NEW)
    src/content/projects/{project-5-slug}/thumbnail.{ext} (NEW)
  </files>
  <action>
    For each of the remaining 2 projects:
    1. Create folder under `src/content/projects/` using URL-friendly slug
    2. Create `index.md` with complete frontmatter and body content (same pattern as Plan 2.1)
    3. Add thumbnail image (user-provided or generated)

    Follow the exact same formatting standards established in Plan 2.1. Ensure consistency in writing tone and frontmatter structure across all 5 projects.

    **Do NOT:**
    - Leave any required fields blank
    - Use different formatting conventions than the first 3 projects
  </action>
  <verify>npx astro build 2>&1 | Select-String -Pattern "error" -NotMatch | Select-Object -First 5</verify>
  <done>5 total project directories exist under `src/content/projects/`; all build successfully.</done>
</task>

<task type="checkpoint:human-verify">
  <name>Visual verification of all 5 projects</name>
  <files>src/pages/projects/index.astro, src/pages/projects/[...slug].astro</files>
  <action>
    Run `npm run dev` and ask user to verify:

    1. Navigate to `/projects` — all 5 projects display with thumbnails, titles, and tags
    2. Click into each project — detail page loads with:
       - Title, tagline, meta row (tags, role, timeline)
       - Thumbnail hero image
       - Overview tab: Challenge/Approach/Results cards render
       - Build Log tab (if project has buildLog): timeline entries display
    3. Projects are sorted by date (newest first)
    4. No broken images or layout issues
  </action>
  <verify>User confirms all 5 projects render correctly.</verify>
  <done>User approves all 5 project pages — content, images, and layout verified.</done>
</task>

## Success Criteria
- [ ] 5 total project directories exist in `src/content/projects/`
- [ ] All 5 projects visible on `/projects` index with thumbnails and tags
- [ ] Each project detail page renders Overview tab correctly
- [ ] Projects with build logs show Build Log tab with timeline
- [ ] `npx astro build` completes without errors
- [ ] User confirms visual quality matches expectations
