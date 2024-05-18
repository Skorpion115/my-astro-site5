import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import preact from "@astrojs/preact";
import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  prefetch: true,
  server: { port: 4321, host: true },
  
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            return "vendor";
          }
        },
      },
    },
    chunkSizeWarningLimit: 1000, // Grenze für Chunk-Größe
    sourcemap: true,  // Aktiviert die Erstellung von Source Maps
    format: "directory", // Erzeugt `page.html` statt `page/index.html`
  },

  publicDir: "public",

  output: "server", // SSR serverseitiges Rendern

  adapter: netlify({
    functionPerRoute: true,
  }),

  vite: {
    build: {
      sourcemap: true,  // Aktiviert Source Maps in Vite
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
