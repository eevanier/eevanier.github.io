# ROADMAP.md

> **Current Phase**: Phase 3: Core Pages
> **Milestone**: v1.0 MVP

## Must-Haves (from SPEC)
- [ ] Responsive Layout (Mobile/Desktop)
- [ ] Project "Card" and Detail View
- [ ] About Me & Resume Section
- [ ] Contact Method
- [ ] "Code-light" Content System

## Phases

### Phase 1: Foundation & Design System
**Status**: ✅ Complete
**Objective**: Initialize the Astro project and establish the "Industrial Minimalist" design language.
**Requirements**: REQ-01, REQ-05
-   [x] Initialize Astro project with Tailwind CSS
-   [x] Define typography (e.g., Inter, JetBrains Mono for data)
-   [x] Define color palette (Monochrome + Technical Accent)
-   [x] Create reusable layout components (Navbar, Footer)

### Phase 2: Content Engine
**Status**: ✅ Complete
**Objective**: Build the "Code-light" system for managing projects.
**Requirements**: REQ-02, REQ-03
-   [x] Configure Astro Content Collections for `projects`
-   [x] Design the Project Markdown schema (frontmatter)
-   [x] Create the "Project Card" component
-   [x] Create the "Project Detail" page template with image/video support

### Phase 3: Core Pages
**Status**: ⬜ Not Started
**Objective**: Implement the primary user-facing pages.
**Requirements**: REQ-01, REQ-04
-   [ ] **Home**: Hero section + Featured Projects grid
-   [ ] **Projects Index**: Filterable list of all work
-   [ ] **About**: Bio, Skills list, Resume download button
-   [ ] **Contact**: Simple email link or Netlify-ready form (if applicable)

### Phase 4: Polish & Interactvity
**Status**: ⬜ Not Started
**Objective**: Add the "freshness" and deploy.
**Requirements**: REQ-06
-   [ ] Implement subtle scroll animations (framer-motion or CSS)
-   [ ] Hover effects for project cards
-   [ ] SEO Optimization (Meta tags, OpenGraph)
-   [ ] GitHub Actions workflow for deployment
