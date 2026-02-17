---
phase: 2
plan: 1
wave: 1
---

# Plan 2.1: Gather Project Data & Create First 3 Projects

## Objective
Collect project details from the user for 5 portfolio projects, then create the first 3 project content folders with fully populated markdown frontmatter and body content. Remove the sample project.

## Context
- .gsd/SPEC.md
- .gsd/ARCHITECTURE.md
- src/content/config.ts (schema: title, tagline, date, tags, thumbnail, challenge, solution, outcome, role, timeline, gallery, buildLog)
- src/content/projects/sample/index.md (reference for structure)

## Tasks

<task type="checkpoint:decision">
  <name>Gather project details from user</name>
  <files>n/a</files>
  <action>
    Ask the user to provide details for 5 portfolio projects. For each project, request:

    Required:
    - **Title** (project name)
    - **Tagline** (one-sentence summary)
    - **Date** (completion date, YYYY-MM-DD)
    - **Tags** (e.g. CAD, FEA, Python, Robotics, Manufacturing)
    - **Thumbnail image** (user must provide an image file or path — or confirm AI-generated placeholder is acceptable)

    Recommended:
    - **Challenge** (1-2 sentences: what problem were you solving?)
    - **Solution** (1-2 sentences: what approach did you take?)
    - **Outcome** (1-2 sentences: what were the measurable results?)
    - **Role** (e.g. Lead Mechanical Engineer, Solo Designer)
    - **Timeline** (e.g. "August - November 2023")
    - **Build Log stages** (3-5 stages with stage name, date range, and description)
    - **Body content** (longer write-up, features, technical details)

    Optional:
    - **Link** (live project URL)
    - **Repository** (GitHub URL)
    - **Featured** (true/false — for homepage highlights)
    - **Gallery images** (additional images beyond thumbnail)

    If the user provides brief descriptions, expand them into polished, recruiter-appropriate prose that sounds natural (not AI-generated). Match the tone of the sample project.
  </action>
  <verify>User has provided details for all 5 projects.</verify>
  <done>All 5 project briefs collected and documented.</done>
</task>

<task type="auto">
  <name>Remove sample project and create first 3 project folders</name>
  <files>
    src/content/projects/sample/ (DELETE)
    src/content/projects/{project-1-slug}/index.md (NEW)
    src/content/projects/{project-1-slug}/thumbnail.{ext} (NEW)
    src/content/projects/{project-2-slug}/index.md (NEW)
    src/content/projects/{project-2-slug}/thumbnail.{ext} (NEW)
    src/content/projects/{project-3-slug}/index.md (NEW)
    src/content/projects/{project-3-slug}/thumbnail.{ext} (NEW)
  </files>
  <action>
    1. Delete the `src/content/projects/sample/` directory entirely
    2. For each of the first 3 projects, create a folder under `src/content/projects/` using a URL-friendly slug (lowercase, hyphens)
    3. Create `index.md` for each project with:
       - Complete frontmatter matching the config.ts schema
       - All user-provided data populated
       - Body content with a meaningful write-up (## sections for Features, Technical Details, etc.)
    4. For thumbnail images:
       - If the user provides images, copy them into the project folder
       - If not, generate placeholder thumbnails using the generate_image tool

    **Frontmatter template:**
    ```yaml
    ---
    title: "{title}"
    tagline: "{tagline}"
    date: {YYYY-MM-DD}
    tags: [{tags}]
    thumbnail: "./thumbnail.{ext}"
    link: "{url}" # omit if none
    repository: "{repo}" # omit if none
    featured: {true/false}
    challenge: "{challenge}"
    solution: "{solution}"
    outcome: "{outcome}"
    role: "{role}"
    timeline: "{timeline}"
    buildLog:
      - stage: "{stage}"
        date: "{date range}"
        description: "{description}"
    ---
    ```

    **Do NOT:**
    - Leave any required fields blank (title, tagline, date, tags, thumbnail)
    - Use lorem ipsum or obvious placeholder text
    - Break the existing config.ts schema
  </action>
  <verify>npx astro build 2>&1 | Select-String -Pattern "error" -NotMatch | Select-Object -First 5</verify>
  <done>Sample project deleted; 3 project folders created with complete frontmatter + body; `astro build` succeeds with no errors.</done>
</task>

## Success Criteria
- [ ] Sample project (`src/content/projects/sample/`) is deleted
- [ ] 3 project directories created under `src/content/projects/`
- [ ] Each project has `index.md` with valid frontmatter matching config.ts schema
- [ ] Each project has a thumbnail image
- [ ] `npx astro build` completes without errors
- [ ] Projects appear on the /projects index page
