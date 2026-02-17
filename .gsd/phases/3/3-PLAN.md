---
phase: 3
plan: 1
wave: 1
---

# Plan 3.1: Documentation & Final Verification

## Objective
Finalize the project by creating comprehensive documentation for future maintenance (adding projects) and verifying the site's quality across devices. This ensures the "Code-light" goal is met and documented.

## Context
- `.gsd/SPEC.md`: Defines "Code-light" management and "Professional Showcase" goals.
- `package.json`: Confirms Astro + Tailwind v4 stack.
- `src/content/config.ts`: Defines the project schema (implied availability).

## Tasks

<task type="auto">
  <name>Update README.md</name>
  <files>README.md</files>
  <action>
    Rewrite README.md to be portfolio-specific:
    - Project Title & High-level description.
    - Tech Stack (Astro, Tailwind v4).
    - **How to Add a New Project**:
      - Step 1: Create folder in `src/content/projects/`.
      - Step 2: Add `index.md` with frontmatter (title, date, description, tags, heroImage).
      - Step 3: Add images to the folder.
    - **How to Run Locally**: Standard `npm` commands.
  </action>
  <verify>grep -q "How to Add a New Project" README.md</verify>
  <done>README.md contains clear instructions for content management.</done>
</task>

<task type="auto">
  <name>Verify Mobile Responsiveness</name>
  <files>src/pages/index.astro, src/pages/projects/[...slug].astro</files>
  <action>
    Use browser tool to check:
    - Home page on mobile width (375px).
    - Project Detail page on mobile width.
    - Navigation menu behavior on mobile.
    - Ensure no horizontal scrolling or broken layouts.
  </action>
  <verify>Manual verification via browser tool screenshots.</verify>
  <done>Mobile layout is confirmed to be responsive.</done>
</task>

<task type="auto">
  <name>Verify User Flows</name>
  <files>src/pages/index.astro</files>
  <action>
    Use browser tool to simulate user journey:
    1. Land on Home.
    2. Click a Project Card.
    3. Read Project Details.
    4. Navigate back to Home/Projects.
    Check for 404s or broken transitions.
  </action>
  <verify>Manual verification via browser tool.</verify>
  <done>User flows are smooth and error-free.</done>
</task>

<task type="auto">
  <name>Final Build Check</name>
  <files>package.json</files>
  <action>
    Run `npm run build` to ensure the site compiles for production without errors.
  </action>
  <verify>npm run build</verify>
  <done>Build completes successfully.</done>
</task>

## Success Criteria
- [ ] README.md clearly explains how the user can add new projects without coding.
- [ ] Site looks good on mobile (screenshots).
- [ ] Navigation works seamlessly.
- [ ] Production build passes.
