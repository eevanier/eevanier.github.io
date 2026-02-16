# Research: Phase 1 — Identity & Hero Rework

## Objective
Rework the homepage hero into a split layout with a personal photo and update the contact page with real details.

## Context
- Current Hero: Single column, centered text.
- Target Hero: Split layout (Text Left, Image Right on Desktop; Stacked on Mobile).
- Assets: Need a placeholder headshot in `public/images/`.

## Design Strategy
### Hero Section
- **Layout**: Use CSS Grid or Flexbox.
  - Desktop (`md:`): `grid-cols-2` or `flex-row`. Text takes 50-60%, Image 40-50%.
  - Mobile: Stacked (`flex-col` or single column grid). Image first or text first? Standard is text first for SEO/context, image second, or image first for personality. Let's go **Text First** on mobile for better readability of the introduction.
- **Typography**: Keep existing "Industrial Minimalist" font stack (`Inter`, `JetBrains Mono`).
- **Image**: Rounded or square with subtle border/shadow to match "technical" aesthetic.

### Contact Page
- **Update**: Replace `hello@example.com` with `eev7147@rit.edu`.
- **mailto**: Ensure `mailto:` link is updated.

## Implementation Details
- **File**: `src/pages/index.astro`
- **File**: `src/pages/contact.astro`
- **Asset**: `public/images/headshot-placeholder.jpg` (200x200 or 400x400).

## Verification
- Visual check on Desktop (Split view).
- Visual check on Mobile (Stacked view).
- Click "Email" link on Contact page.
