import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const blog = defineCollection({
  loader: glob({
    pattern: "**/*.md",
    base: "./src/content/blog",
    // Use the post's folder name as its URL slug (e.g. "buck_coverter/buck.md" -> "buck_coverter")
    generateId: ({ entry }) => entry.split("/")[0],
  }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    comments: z.boolean().default(true),
    tags: z.array(z.string()).default([]),
  }),
});

export const collections = { blog };
