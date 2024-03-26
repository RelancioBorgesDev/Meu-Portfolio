import { defineCollection } from "astro:content";
import { postSchema, projectSchema } from "../schemas/schemas";

const projectCollection = defineCollection({
  type: "content",
  schema: projectSchema,
});
const postCollection = defineCollection({
  type: "content",
  schema: postSchema,
});

export const collections = {
  "project": projectCollection,
  "post": postCollection,
};
