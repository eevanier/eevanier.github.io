# Phase 3: Core Pages Implementation Plan

## Goal
Implement the primary user-facing pages of the portfolio to complete the "v1.0 MVP" milestone. This includes the Home page, detailed Projects list, About section, and Contact information, all adhering to the "Industrial Minimalist" design language.

## User Review Required
> [!IMPORTANT] 
> I am proposing to add a `featured` boolean field to the Project schema. This allows explicit control over which projects appear on the Home page. If not present, I will fallback to showing the most recent 3 projects.

## Proposed Changes

### Content Schema
#### [MODIFY] [config.ts](file:///c:/Users/Elias/Desktop/portfolio/src/content/config.ts)
- Add optional `featured: z.boolean().optional()` to the `projects` collection schema.

### Pages

#### [NEW] [index.astro](file:///c:/Users/Elias/Desktop/portfolio/src/pages/index.astro)
- **Hero Section**: Strong typographical introduction ("Industrial Minimalist" style).
- **Featured Projects**: strict grid of `ProjectCard` components (filtering by `featured: true` or top 3 by date).
- **Call to Action**: clear path to the About or Contact page.

#### [NEW] [projects/index.astro](file:///c:/Users/Elias/Desktop/portfolio/src/pages/projects/index.astro)
- **Grid Layout**: Display all projects sorted by date (newest first).
- **Metadata**: Simple header explaining the scope of work.

#### [NEW] [about.astro](file:///c:/Users/Elias/Desktop/portfolio/src/pages/about.astro)
- **Bio**: Professional summary.
- **Skills**: Categorized list (e.g., "Design", "Engineering", "Tools").
- **Resume**: Download button/link for PDF resume (placeholder file if needed).

#### [NEW] [contact.astro](file:///c:/Users/Elias/Desktop/portfolio/src/pages/contact.astro)
- **Direct Contact**: Mailto link for email.
- **Form**: Simple HTML form structure ready for Netlify Forms (hidden by default or enabled if preferred).

## Verification Plan

### Automated Tests
- Run `npm run build` to ensure all new pages generatestatically without errors.
- Run `npm run dev` to verify updated logic.

### Manual Verification
1.  **Home Page**: Verify Hero text and that Featured Projects are displaying correctly.
2.  **Projects Index**: Verify all projects are listed and links work.
3.  **About Page**: Check layout responsiveness.
4.  **Contact Page**: Verify email link works.
5.  **Navigation**: Verify Navbar links point to these new pages correctly.
