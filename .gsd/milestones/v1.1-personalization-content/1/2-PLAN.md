---
phase: 1
plan: 2
wave: 1
---

# Plan 1.2: Contact Page Verification & Bio Polish

## Objective
Verify the contact page is fully correct and polish the About page bio to be more personal and specific to Elias.

## Context
- .gsd/SPEC.md
- src/pages/contact.astro
- src/pages/about.astro

## Tasks

<task type="auto">
  <name>Verify and polish contact page</name>
  <files>src/pages/contact.astro</files>
  <action>
    1. Confirm `eev7147@rit.edu` appears in both the mailto href and visible text (already done — verify only)
    2. If the contact form uses `data-netlify="true"` but we're on GitHub Pages (not Netlify), remove or comment out the Netlify form attributes to avoid confusion
       - GitHub Pages is a static host and cannot process Netlify forms
       - Replace with a note or just keep the direct email link
    - Do NOT remove the email link section
    - Do NOT change the page layout
  </action>
  <verify>Select-String -Path src/pages/contact.astro -Pattern "eev7147@rit.edu"</verify>
  <done>Contact page shows eev7147@rit.edu with working mailto link; no misleading Netlify form on a GitHub Pages site</done>
</task>

<task type="auto">
  <name>Personalize About page bio</name>
  <files>src/pages/about.astro</files>
  <action>
    1. Update the bio paragraphs to reference Elias specifically:
       - Mention being a student at RIT (Rochester Institute of Technology)
       - Reference specific interests: mechanical design, robotics, manufacturing
       - Keep it concise (2-3 paragraphs max)
    2. Keep the skills grid and resume section unchanged
    - Do NOT modify the skills array or layout structure
    - Maintain the "Industrial Minimalist" tone
  </action>
  <verify>Select-String -Path src/pages/about.astro -Pattern "RIT|Elias"</verify>
  <done>About page bio mentions Elias and RIT; text feels personal rather than generic</done>
</task>

## Success Criteria
- [ ] Contact page email is correct and functional
- [ ] No misleading Netlify form attributes on a GitHub Pages-hosted site
- [ ] About bio references Elias and RIT
- [ ] All pages build without errors
