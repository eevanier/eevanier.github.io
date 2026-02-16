
# Phase 4 Plan: Polish & Interactivity

> **Goal**: Add the "freshness" and deploy.
> **Status**: `PLANNING`

## Objectives
1.  **Visual Polish**: Add subtle animations and interactions to make the site feel "alive" and "premium".
2.  **SEO**: Ensure the site is discoverable and looks good when shared.
3.  **Deployment**: Automate deployment to GitHub Pages.
4.  **Responsiveness**: Verify and fix mobile layout issues.

## Proposed Changes

### 1. Animations (CSS/JS)
-   **Scroll Revelations**: Implement a simple `IntersectionObserver` script to fade-in elements as they scroll into view.
    -   Target: Project cards, Section headers, Skills list.
    -   Effect: `opacity: 0 -> 1`, `translateY: 20px -> 0`.
-   **Project Card Hover**:
    -   Effect: Scale up slightly (`1.02`), enhance shadow, maybe border color change to verify "technical" feel.
-   **Navigation**:
    -   Add active state indication.
    -   Smooth scroll behavior for anchor links (if any).

### 2. SEO & Metadata
-   **Component**: Create `Seo.astro` component (or update `Layout.astro`).
-   **Tags**:
    -   `title` (dynamic based on page/project).
    -   `description`.
    -   `og:image`, `og:title`, `og:description` (Open Graph).
    -   `twitter:card`.
-   **Sitemap**: Install `@astrojs/sitemap` to auto-generate `sitemap.xml`.

### 3. Responsiveness Check
-   **Mobile Menu**: Verify the navigation works on mobile (hamburger menu or valid alternative).
-   **Grid Layouts**: Ensure `grid-cols-1` on mobile, `grid-cols-2/3` on desktop.
-   **Typography**: Adjust font sizes for smaller screens if necessary.

### 4. Deployment Pipeline
-   **File**: `.github/workflows/deploy.yml`.
-   **Action**: `withastro/action` or standard `pnpm build && deploy`.
-   **Trigger**: Push to `main`.

## Verification Plan

### Automated
-   [ ] **Build**: Run `npm run build` to ensure no errors with new SEO components.
-   [ ] **Lint**: Run `npm run lint` (if available) or check console for errors.

### Manual
-   [ ] **Responsiveness**:
    -   Open Chrome DevTools -> Device Toolbar.
    -   Check iPhone SE, iPhone 12 Pro, iPad Air dimensions.
    -   Verify no horizontal scrolling (overflow).
-   [ ] **Interactions**:
    -   Scroll down: Verify elements fade in.
    -   Hover cards: Verify scale/shadow effect.
-   [ ] **SEO**:
    -   Inspect `<head>` to verify `og:` tags.
    -   Check `sitemap.xml` in build output.
-   [ ] **Deployment**:
    -   Push to `main`.
    -   Watch GitHub Actions tab for success.
    -   Verify live site.

## Task List
-   [ ] Install `@astrojs/sitemap` <!-- id: 0 -->
-   [ ] Create/Update `Layout.astro` with SEO tags <!-- id: 1 -->
-   [ ] Create `deploy.yml` workflow <!-- id: 2 -->
-   [ ] Implement Scroll Animation Script <!-- id: 3 -->
-   [ ] Add Hover Effects to Cards <!-- id: 4 -->
-   [ ] Verify Mobile Responsiveness <!-- id: 5 -->
