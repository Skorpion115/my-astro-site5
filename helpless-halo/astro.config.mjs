import { defineConfig } from "astro/config";
import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({

    devToolbar: {
        enabled: false,
    },

    build: {
        format: "directory", // Erzeugt `page/index.html` statt `page.html`
        sourcemap: true, // Aktiviert Source Maps in Vite
        chunkSizeWarningLimit: 3420 // Setze hier deine bevorzugte Grenze ein
    },

    output: "hybrid", // Statisches und serverseitiges Rendern
    adapter: netlify({
        functionPerRoute: true, // Falls du Route-spezifische Funktionen verwenden möchtest
  }),

  // Project root directory
  root: ".",

  outDir: "dist", // Ensure this is correctly set

  publicDir: "public",

  site: "https://www.musicstudio-ziebart.de",

  trailingSlash: "always",
  markdown: {
    drafts: true,
    mode: "md",
  },
});
