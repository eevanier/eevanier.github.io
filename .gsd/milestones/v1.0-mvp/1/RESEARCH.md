# RESEARCH.md — Phase 1: Foundation

> **Status**: APPROVED
> **Date**: 2026-02-15

## 1. Technical Stack (Astro v5)
**Decision**: Use standard Astro integration for Tailwind.
- **Command**: `npx astro add tailwind`
- **Config**: Auto-generates `tailwind.config.mjs`.
- **Note**: Astro 5.2+ uses `@tailwindcss/vite` by default. This is acceptable and preferred for performance.

## 2. Design System ("Industrial Minimalist")

### Typography
- **Headings/Body**: `Inter` (Clean, legible, reliable).
  - Source: `@fontsource/inter`
- **Monospace (Technical Data)**: `JetBrains Mono` (Engineering aesthetic).
  - Source: `@fontsource/jetbrains-mono`

### Color Palette
**Constraint**: Monochrome + Technical Accent.

**Selected Palette**:
- **Background**: `#FAFAFA` (Off-White for paper-like feel) or `#09090B` (Dark Mode - "Carbon").
- **Surface**: `#FFFFFF` (Card background).
- **Text Primary**: `#18181B` (Zinc-950).
- **Text Secondary**: `#71717A` (Zinc-500).
- **Accent**: `#FF3600` (International Orange - Engineering/Safety).
- **Border/Line**: `#E4E4E7` (Zinc-200) for subtle grid lines.

### Layout Structure
- **Navbar**: Minimal. Logo (Left) + Links (Right). 
- **Footer**: Simple copyright + Social links.
- **Container**: Max-width `65ch` to `80ch` for readability, or `1200px` for grid.
