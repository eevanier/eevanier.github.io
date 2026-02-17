# DECISIONS.md

## 2026-02-17 Phase 1 Discussion: Enhanced Project Structure

**Date:** 2026-02-17

### Scope & Structure
-   **Build Logs**: "Option A" - Structured Field within project file.
    -   *Implementation*: A `buildLog` array in the project frontmatter. Each item will represent a stage (Design, Fabrication, Assembly, Testing) and contain text + images.
    -   *Rationale*: Keeps all project data in one file while allowing structured presentation. Supports "text and progress photos at different stages".

### Implementation Approach
-   **Layout**: "Option A" - Tabbed Interface.
    -   *Primary View*: Overview (Standard "project card" details, gallery, challenge/solution/outcome).
    -   *Secondary View*: Build Log (Chronological feed of progress).
-   *Goal*: Separate the "Recruiter summary" from the "Deep dive technical process".

---

## 2026-02-15 Phase 2 Decisions: Content Engine

**Date:** 2026-02-15

### Scope & Schema
-   **Schema Strategy**: "Structured" (Option A).
-   **Fields**: `title`, `tagline`, `date`, `tags`, `thumbnail`, `gallery` (list of images), `videos` (list of URLs).
-   **Video Hosting**: External (YouTube Unlisted).
    -   *Reason*: Keeps the repo size small (`.git` optimization) and allows for higher bitrate/quality without bandwidth costs.

### Implementation Approach
-   **Gallery Component**: Custom grid component that takes a list of image paths.
-   **Video Component**: Use `astro-embed` or simple `iframe` for YouTube embeds.
-   **Inspiration**: "How to Create an Engineering Portfolio" (YouTube). Focus on process and clarity.

---

## 2026-02-15 Phase 1 Decisions: Foundation

**Date:** 2026-02-15

### Scope & Aesthetic
-   **Theme**: "Lab" (Option A) — Clean white/gray background, high contrast black text, clinical/technical feel.
-   **Typography**: `Inter` (Headings/Body) + `JetBrains Mono` (Data/Code). Chosen for maximum readability and technical precision.
-   **Layout**: Top Navigation Bar. chosen to keep the focus on content and ensure standard, frictionless navigation for recruiters.

### Implementation Approach
-   **Base**: `npm create astro@latest -- --template minimal`
-   **Reason**: Avoids blog boilerplate. We start with a blank canvas to build the specific "Industrial" components from scratch.
-   **Styling**: Tailwind CSS + Phosphor Icons (for that technical look).

---

## 2026-02-15 Tech Stack Selection: Astro
-   **Context**: User requested "Code-light" management and high performance.
-   **Decision**: Use Astro.
-   **Rationale**: Astro's Content Collections provide the best dev experience for Markdown-based portfolios without needing a complex CMS. It outputs static HTML for simple hosting on GitHub Pages.

## 2026-02-15 Design Language: Industrial Minimalist
-   **Context**: User is a mechanical engineer.
-   **Decision**: "Option A" - Clean, white/grey/black, structured.
-   **Rationale**: Mirrors the precision of the profession.
