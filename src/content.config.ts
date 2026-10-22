import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    tagline: z.string(),
    role: z.string(),
    tech: z.array(z.string()),
    // Lower numbers show first on the home page.
    order: z.number(),
    status: z.enum(['live', 'in-progress', 'client-work']).optional(),
    links: z.array(z.object({ label: z.string(), href: z.url() })).default([]),
    // Shown when there is no public link, e.g. "Demo available on request".
    note: z.string().optional(),
  }),
});

export const collections = { projects };
