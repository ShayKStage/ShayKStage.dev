import { defineConfig } from 'astro/config';
import vue from "@astrojs/vue";
import solidJs from "@astrojs/solid-js";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import prefetch from "@astrojs/prefetch";
import markdoc from "@astrojs/markdoc";

import alpinejs from "@astrojs/alpinejs";

// https://astro.build/config
export default defineConfig({
  site: 'https://314shadepi.github.io',
  integrations: [mdx(), vue(), solidJs(), sitemap(), prefetch(), markdoc(), alpinejs()]
});