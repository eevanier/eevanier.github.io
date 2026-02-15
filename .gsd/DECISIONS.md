# DECISIONS.md

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
