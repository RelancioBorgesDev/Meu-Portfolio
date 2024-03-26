import { z } from "astro/zod";

export const postSchema = z.object({
  title: z.string(),
  description: z.string(),
  author: z.string(),
  tags: z.array(z.string()),
  date: z.date(),
  card_image: z.string(),
  banner_image: z.string(),
  featured: z.boolean(),
});

export const projectSchema = z.object({
  title: z.string(),
  description: z.string(),
  projectType: z.string(),
  video: z.string(),
  tags: z.array(z.string()),
  date: z.date(),
  card_image: z.string(),
  featured: z.boolean(),
});

export const projectType = typeof projectSchema;
