# ARCHITECTURE.md

> **Status**: `PROPOSED`

## Tech Stack

### Core
-   **Framework**: [Astro](https://astro.build) v5+
    -   *Why?* Best-in-class performance for content-heavy sites. "Islands architecture" allows us to mix static HTML with interactive components only where needed. Excellent Markdown support.
-   **Language**: TypeScript
-   **Package Manager**: `npm`

### Styling
-   **Engine**: Tailwind CSS
    -   *Why?* Rapid development, easy to maintain consistency, small bundle size.
-   **Icons**: Lucide React or Phosphor Icons (clean, technical look).

### Content Management
-   **System**: Astro Content Collections
-   **Format**: Markdown (`.md`) or MDX (`.mdx`)
-   **Structure**:
    ```
    src/
      content/
        projects/
          robot-arm/
            index.md
            image1.jpg
            demo.mp4
    ```

### Deployment
-   **Platform**: GitHub Pages
-   **CI/CD**: GitHub Actions (Astro standard workflow)

## Key Components
1.  **`ProjectCard`**: Displays thumbnail, title, rigid tags, and brief summary.
2.  **`Hero`**: Impactful introduction with typographic focus.
3.  **`Gallery`**: Grid system that adapts to image aspect ratios.

## Data Schema (Project)
```typescript
interface Project {
  title: string;
  tagline: string;
  date: Date;
  tags: string[]; // e.g., ["CAD", "Mechatronics", "Python"]
  thumbnail: ImageMetadata;
  // Body content is freeform Markdown
}
```
