import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// One Markdown file per Lab Note in src/content/notes/. Files starting with _ are ignored.
const notes = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/notes' }),
  schema: z.object({
    title: z.string(),
    number: z.number().int().positive(),
    date: z.coerce.date(),
    description: z.string(),
    hero: z.string(),
    heroAlt: z.string(),
    topic: z.string().optional(),
    linkedin: z.string().url().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { notes };
