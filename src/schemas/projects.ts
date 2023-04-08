import {z} from "astro:content";

export const projectSchema = z.object({
    title: z.string(),
    description: z.string(),
    author: z.string(),
});