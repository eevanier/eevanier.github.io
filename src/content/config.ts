import { defineCollection, z } from 'astro:content';

/*
 * Project format — see README.md ("Adding or editing a project").
 *
 * Each project is one file: src/content/projects/<slug>.md
 * Its photos live in:      src/assets/projects/<slug>/
 * Image paths are written from the site root, e.g.
 *   "/src/assets/projects/pursuit-drone/frame.png"
 *
 * Everything except title / tagline / date / tags / thumbnail is optional,
 * so a project can start small and grow.
 */

const projects = defineCollection({
    type: 'content',
    schema: ({ image }) => {
        // A photo with an optional caption. Used by highlights and the gallery.
        const photo = z.object({
            src: image(),
            caption: z.string().optional(),
        });

        return z.object({
            title: z.string(),
            tagline: z.string(),
            date: z.date(),
            tags: z.array(z.string()),
            thumbnail: image(),
            featured: z.boolean().optional(),
            link: z.string().url().optional(),
            repository: z.string().url().optional(),

            // One or two sentences: what the project is, in plain language.
            summary: z.string().optional(),

            // "What I did that's unique" — short, punchy bullet points.
            contributions: z.array(z.string()).optional(),

            // Key numbers / specs shown as a compact table.
            specs: z.array(z.object({
                label: z.string(),
                value: z.string(),
            })).optional(),

            // The technical deep-dives. Each one is a heading, a write-up
            // (markdown allowed) and the photos that explain it.
            highlights: z.array(z.object({
                title: z.string(),
                body: z.string(),
                images: z.array(photo).optional(),
            })).optional(),

            // Extra photos that don't belong to a specific highlight.
            gallery: z.array(photo).optional(),
        });
    },
});

export const collections = { projects };
