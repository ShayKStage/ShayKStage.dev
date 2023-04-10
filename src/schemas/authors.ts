import {z} from "astro:content";

// Authors must NOT contain a slug field, because they have to be algorithmically findable by their name using the following:
// authorName.toLowerCase().replace(/ /g, "-");
export const authorSchema = z.object({
    name: z.string(),
    description: z.string(),
    alias: z.string().optional(),
});