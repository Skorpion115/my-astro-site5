import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import preact from "@astrojs/preact";
import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  prefetch: true,
  server: { port: 4321, host: true },
  
  build: {
    format: "directory", // Erzeugt `page/index.html` statt `page.html`
  },

  publicDir: "public",

  output: "server", // SSR serverseitiges Rendern

  adapter: netlify({
    functionPerRoute: true,
  }),

  vite: {
    build: {
      sourcemap: true,  // Aktiviert Source Maps in Vite
      chunkSizeWarningLimit: 3420, // Setze hier deine bevorzugte Grenze ein
    },
  },
  site: "https://www.musicstudio-ziebart.de/",
  integrations: [
    sitemap({
      filter: (page) =>
        page !== "https://www.musicstudio-ziebart.de/pupils-download/",
      changefreq: "weekly",
      entryLimit: 10000,
      lastmod: new Date("2024-02-21"),
    }),
    preact({
      include: ["**/preact/*"],
    }),
  ],
  trailingSlash: "always",
  markdown: {
    drafts: true,
    mode: "md",
  },
});
