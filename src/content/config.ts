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
    }),
});

export const collections = { projects };
