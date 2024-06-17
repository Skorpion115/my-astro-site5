import { defineConfig } from "astro/config";
// import sitemap from "@astrojs/sitemap";
import preact from "@astrojs/preact";
import netlify from "@astrojs/netlify";
import { fileURLToPath } from "url";
import { dirname, resolve } from "path";

// Convert import.meta.url to __dirname and __filename
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// https://astro.build/config
export default defineConfig({
  prefetch: true,
  server: { port: 4321, host: true },

  devToolbar: {
    enabled: false,
  },

  build: {
    format: "directory", // Erzeugt `page/index.html` statt `page.html`
    sourcemap: true, // Aktiviert Source Maps in Vite
    chunkSizeWarningLimit: 3420 // Setze hier deine bevorzugte Grenze ein
  },

  vite: {
    resolve: {
      alias: {
        "@scripts": resolve(__dirname, "public/scripts")
      }
      // Weitere Vite-spezifische Konfiguration hier hinzufügen, falls nötig
    }
  },
  
  publicDir: "public",
  
  output: "server", // SSR serverseitiges Rendern
  adapter: netlify({
    functionPerRoute: true,
  }),

  site: "https://www.musicstudio-ziebart.de",

  integrations: [
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
