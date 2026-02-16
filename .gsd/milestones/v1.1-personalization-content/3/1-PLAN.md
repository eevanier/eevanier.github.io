# Phase 3: Final Polish & Deploy

## Goal
Execute the final polish of the portfolio, including setting up the resume, social links, favicon, performing a QA pass, and deploying to GitHub Pages.

## User Decisions
-   **Social Links**:
    -   LinkedIn: `https://www.linkedin.com/in/elias-vanier-deafllc`
    -   GitHub: `https://github.com/eevanier`
-   **Resume**: Keep existing filename `Elias_Vanier_Resume.pdf`.
-   **Favicon**: Generate a custom one (Industrial Minimalist "EV" monogram).

## Proposed Changes

### Configuration & Assets
#### [MODIFY] [Footer.astro](file:///c:/Users/Elias/Desktop/portfolio/src/components/Footer.astro)
-   Update `href` for LinkedIn: `https://www.linkedin.com/in/elias-vanier-deafllc`
-   Update `href` for GitHub: `https://github.com/eevanier`
-   Update `href` for Email: `mailto:eev7147@rit.edu`

#### [NEW] [favicon.svg](file:///c:/Users/Elias/Desktop/portfolio/public/favicon.svg)
-   Generate a new SVG favicon: Stylized "EV" monogram or mechanical element, dark grey/black, sharp lines.

#### [MODIFY] [Navbar.astro](file:///c:/Users/Elias/Desktop/portfolio/src/components/Navbar.astro)
-   Ensure "Resume" link points to `/Elias_Vanier_Resume.pdf`.

#### [MODIFY] [Layout.astro](file:///c:/Users/Elias/Desktop/portfolio/src/layouts/Layout.astro)
-   Ensure favicon links point to the new `favicon.svg`.
-   Add metadata (OpenGraph) if missing (using `og-default.png` if available, or generate one).

### Polish
-   [ ] Verify "About" page has the "Beyond Engineering" section (Phase 2).
-   [ ] Verify "Contact" page email.
-   [ ] Check mobile responsiveness for all pages.

## Verification Plan

### Automated
-   Run `npm run build` to verify the build succeeds.

### Manual
-   **Visual QA**:
    -   Open the site locally (`npm run dev`).
    -   Check Home, About, Projects, Contact pages on Desktop and Mobile.
    -   **Verify Links**: Click LinkedIn, GitHub, Email, and Resume links to ensure they open correctly.
    -   **Favicon**: Verify it appears in the browser tab.
-   **Deployment**:
    -   Push to `main`.
    -   Check GitHub Actions tab.
    -   Visit `https://eevanier.github.io/` to confirm live site.
