---
phase: 2
plan: 2.1
wave: 1
autonomous: true
files_modified:
  - src/content/config.ts
  - src/content/projects/sample/index.md
  - src/content/projects/sample/thumbnail.png
must_haves:
  truths:
    - "Project collection schema is enforced"
    - "Sample project data exists"
    - "Thumbnail image exists and is valid"
  artifacts:
    - "src/content/config.ts exists"
---

# Plan 2.1: Content Engine Core

## Objective
Configure the Astro Content Collections to support the Project data type as defined in SPEC/ARCHITECTURE.

## Context
- .gsd/SPEC.md
- .gsd/ARCHITECTURE.md

## Tasks

<task type="auto">
  <name>Configure Project Collection</name>
  <files>src/content/config.ts</files>
  <action>
    Create `src/content/config.ts`.
    1. Import `defineCollection` and `z` from `astro:content`.
    2. Define `projects` collection with schema:
       - `title`: string
       - `tagline`: string
       - `date`: date
       - `tags`: array of strings
       - `thumbnail`: image()
    3. Export `collections` object containing `projects`.
  </action>
  <verify>test -f src/content/config.ts</verify>
  <done>Config file exists with proper schema definition</done>
</task>

<task type="auto">
  <name>Create Sample Project Content</name>
  <files>src/content/projects/sample/index.md, src/content/projects/sample/thumbnail.png</files>
  <action>
    1. Create directory `src/content/projects/sample`.
    2. Generate a valid placeholder image at `src/content/projects/sample/thumbnail.png` (use generate_image or create a simple valid PNG).
    3. Create `src/content/projects/sample/index.md` with:
       - Valid frontmatter matching the schema (referencing the thumbnail).
       - Sample Markdown body content (headers, paragraphs).
  </action>
  <verify>test -f src/content/projects/sample/index.md && test -f src/content/projects/sample/thumbnail.png</verify>
  <done>Sample project directory created with valid MD and image</done>
</task>
