import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const documentation = defineCollection({
    loader: glob({
        pattern: '**/[^_]*.{md,mdx}',
        base: './src/content',
    }),
    schema: z.object({
        title: z.string(),
    }),
});

export const collections = { documentation };
