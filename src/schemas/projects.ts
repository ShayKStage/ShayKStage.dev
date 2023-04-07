import {z} from "astro:content";

export const projectSchema = z.object({
    title: z.string(),
    author: z.string(),
});