# Phase 2 Research: Hobbies & Interests

## 1. Icon Strategy
The "Minimalist Industrial" aesthetic requires clean, consistent iconography.

### Candidates
1.  **SVG Assets**: Manual management. Cons: Maintenance heavy, inconsistent line weights if not careful.
2.  **`lucide-astro`**: Standard library, highly consistent 24px grid, clean strokes. Pros: Fits aesthetic perfectly, easy integration.
3.  **FontAwesome**: Heavy, often looks "generic".

### Recommendation
**Use `lucide-astro`**.
-   Run `npm install lucide-astro`.
-   Consistent stroke width matches the "technical" feel.

## 2. UI/UX Design

### The "Beyond Engineering" Section
This section should be distinct but subordinate to the professional work.

**Visuals**:
-   **Layout**: 3-column grid (responsive).
-   **Cards**: minimalist "feature" blocks.
    -   Icon (top left or centered).
    -   Title (Sans-serif, bold).
    -   Short description (Serif/Mono mix).
-   **Interactions**: Subtle hover effect (border color change or slight lift).

### `HobbyCard` Component
Encapsulate the design in `src/components/HobbyCard.astro`.

**Props**:
-   `title`: string
-   `desc`: string
-   `icon`: string (passed as a component or name)

## 3. Implementation Details

-   **Data Source**: Define the hobbies array directly in `src/pages/about.astro` frontmatter. No need for a content collection for just 3 static items.
-   **CSS**: Use Tailwind grid + flexbox.
