import alpinejs from "@astrojs/alpinejs";
import lit from "@astrojs/lit";
import markdoc from "@astrojs/markdoc";
import mdx from "@astrojs/mdx";
import prefetch from "@astrojs/prefetch";
import sitemap from "@astrojs/sitemap";
import solidJs from "@astrojs/solid-js";
import svelte from "@astrojs/svelte";
import tailwind from "@astrojs/tailwind";
import vue from "@astrojs/vue";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
	site: "https://ShayKStage.github.io",
	integrations: [
		mdx(),
		vue(),
		solidJs(),
		sitemap(),
		prefetch(),
		markdoc(),
		alpinejs(),
		svelte(),
		lit(),
		tailwind(),
	],
});
