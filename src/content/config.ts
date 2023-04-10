import {defineCollection} from "astro:content";
import {projectSchema} from "../schemas/projects";
import {authorSchema} from "../schemas/authors";

const projectCollection = defineCollection({ schema: projectSchema });
const authorCollection = defineCollection({ schema: authorSchema });

export const collections = {
    'projects': projectCollection,
    'authors': authorCollection,
};