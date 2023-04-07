import {defineCollection} from "astro:content";
import {projectSchema} from "../schemas/projects";

const projectCollection = defineCollection({ schema: projectSchema });

export const collections = {
    'projects': projectCollection,
};