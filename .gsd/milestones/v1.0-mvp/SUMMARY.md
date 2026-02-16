# Milestone: v1.0 MVP

## Completed: 2026-02-15

## Deliverables
- ✅ Responsive Layout (Mobile/Desktop) — Mobile hamburger menu, fluid grid, responsive typography
- ✅ Project "Card" and Detail View — Content Collections-powered cards with gallery/video support
- ✅ About Me & Resume Section — Bio, skills list, resume download button
- ✅ Contact Method — Simple contact section with email link
- ✅ "Code-light" Content System — Markdown-based project management via Astro Content Collections

## Phases Completed
1. **Phase 1: Foundation & Design System** — Astro project init, Inter/JetBrains Mono typography, monochrome palette, Navbar/Footer components
2. **Phase 2: Content Engine** — Content Collections for `projects`, frontmatter schema, ProjectCard + ProjectDetail components
3. **Phase 3: Core Pages** — Home (hero + featured projects), Projects Index, About, Contact pages
4. **Phase 4: Polish & Interactivity** — Scroll animations, hover effects, SEO/OpenGraph meta tags, GitHub Actions deploy workflow

## Metrics
- Total commits: 15
- Files changed: 129
- Duration: 1 day (2026-02-15)

## Tech Stack
- **Framework**: Astro (static site generator)
- **Styling**: Tailwind CSS
- **Typography**: Inter + JetBrains Mono
- **Icons**: Phosphor Icons
- **Hosting**: GitHub Pages
- **CI/CD**: GitHub Actions

## Lessons Learned

### From DECISIONS.md
- **Astro was the right choice** — Content Collections provided the ideal "code-light" management experience without a CMS
- **"Lab" aesthetic** — Clean white/gray/black palette mirrors the precision of mechanical engineering
- **Structured schema** — Using typed frontmatter (title, tagline, date, tags, thumbnail, gallery, videos) over freeform content kept things organized
- **External video hosting** — YouTube Unlisted keeps repo size small and avoids bandwidth costs

### From JOURNAL.md
- **Spec-first approach worked** — Defining the "Industrial Minimalist" direction upfront prevented scope creep and kept all phases aligned
