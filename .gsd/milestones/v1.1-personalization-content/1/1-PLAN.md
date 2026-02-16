---
phase: 1
plan: 1
wave: 1
---

# Plan 1.1: Headshot Asset & Hero Personalization

## Objective
Add the missing headshot placeholder image and personalize the hero section text so the homepage feels like Elias's real portfolio, not a template.

## Context
- .gsd/SPEC.md
- .gsd/ARCHITECTURE.md
- src/pages/index.astro
- .gsd/phases/1/RESEARCH.md

## Tasks

<task type="auto">
  <name>Create headshot placeholder image</name>
  <files>public/images/headshot-placeholder.jpg</files>
  <action>
    1. Create `public/images/` directory
    2. Generate a professional placeholder headshot image (400x400) using the generate_image tool
       - Use a professional, clean portrait-style placeholder with a neutral background
       - Save as `public/images/headshot-placeholder.jpg`
    3. Verify the image file exists and is referenced correctly in `index.astro`
  </action>
  <verify>Test-Path public/images/headshot-placeholder.jpg</verify>
  <done>headshot-placeholder.jpg exists at public/images/ and is ≥1KB</done>
</task>

<task type="auto">
  <name>Personalize hero text and bio</name>
  <files>src/pages/index.astro</files>
  <action>
    1. Update the hero headline from generic "Precision Engineering." to something more personal to Elias
       - Example: "Elias Evanier" as the main name, with a subtitle like "Mechanical Engineer & Designer"
       - Keep the "Industrial Minimalist" aesthetic — tight tracking, bold weight
    2. Update the hero subtitle paragraph to reference Elias's specific interests (robotics, CAD design, hands-on fabrication)
    3. Keep the existing CTA buttons ("View Projects", "About Me") unchanged
    - Do NOT change the layout structure (grid-cols-2 split is already correct)
    - Do NOT change the monospace label above the headline
  </action>
  <verify>Select-String -Path src/pages/index.astro -Pattern "Elias"</verify>
  <done>Hero section contains Elias's name and a personalized subtitle; no generic placeholder text remains</done>
</task>

## Success Criteria
- [ ] `public/images/headshot-placeholder.jpg` exists and is a valid image
- [ ] Hero headline references Elias by name
- [ ] Hero subtitle is personalized (not generic template text)
- [ ] Page still renders correctly (no broken layout)
