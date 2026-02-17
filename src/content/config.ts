import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
    type: 'content',
    schema: ({ image }) => z.object({
        title: z.string(),
        tagline: z.string(),
        date: z.date(),
        tags: z.array(z.string()),
        thumbnail: image(),
        link: z.string().url().optional(),
        repository: z.string().url().optional(),
        featured: z.boolean().optional(),
        // New fields for enhanced project structure
        challenge: z.string().optional(), // The "What"
        solution: z.string().optional(),  // The "How"
        outcome: z.string().optional(),   // The "Results"
        role: z.string().optional(),
        timeline: z.string().optional(),
        gallery: z.array(image()).optional(),
        buildLog: z.array(z.object({
            stage: z.string(),
            date: z.string().optional(),
            description: z.string(),
            images: z.array(image()).optional(),
        })).optional(),
    }),
});

export const collections = { projects };
