import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import preact from "@astrojs/preact";
// import netlify from "@astrojs/netlify/functions";
import netlify from "@astrojs/netlify";
import yaml from "@rollup/plugin-yaml";

// https://astro.build/config
export default defineConfig({

  server: { port: 4321, host: true},
  
  build: {
    // Passe die Chunk-Größenwarnungsgrenze an
    chunkSizeWarningLimit: 1000, // Setze hier deine bevorzugte Grenze ein
  },

  optimize: {
    // Konfiguriere die Optimierung für Skripte
    script: {
      // Benutzerdefinierter Skript-Loader
      async process(content, { attributes }) {
        // Prüfe, ob das Skript ein Modul ist
        if (attributes.type === 'module') {
          // Verwende dynamischen Import für Module
          return content.replace(
            // Ersetze den Standardimport durch dynamischen Import
            /import\s+(\w+)\s+from\s+['"](.*)['"]/g,
            'const $1 = await import("$2")'
          );
        }
        // Wenn das Skript kein Modul ist, gebe es einfach zurück
        return { code: content };
      },
    },
  },
  build: {
    rollupOptions: {
      // Aktiviere die Erstellung von Quellzuordnungen
      sourcemap: true,
    },
  },
  // Resolves to the "./foo" directory in your current working directory
  
  root: "foo",
  // Resolves to the "./foo/public" directory in your current working directory
  publicDir: "public",
  // static oder server SSR serverseitiges rändern
  output: "server",
  adapter: netlify({
    functionPerRoute: true,
  }),
  // Die endgültige Seite bei deinem Hostanbieter
  site: "https://www.musicstudio-ziebart.de/",
  // Sitemap intergrieren, Eine Seite aufnehmen die nicht mit Astro erstellt wurde stillgelegt!!!
  /*
  integrations: [sitemap({
      customPages: ['https://www.musikstudio-ziebart.de/contact.html', 'https://www.musikstudio-ziebart.de/thanks.html'],
      entryLimit: 10000,
      lastmod: new Date('2022-11-24'),
  })], */
  // Sitemap intergrieren
  integrations: [
    // Beispiel: Argumente an eine Integration übergeben
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
  // Beispiel: Erfordere abschließende Schrägstriche
  // in Seiten-URLs während der Entwicklung
  trailingSlash: "always",
  build: {
    // Beispiel: Erzeuge `page.html` statt `page/index.html`
    // während des Build-Prozesses.
    format: "directory",
  },
  //server: { port: 3000, host: true },
  markdown: {
    // Beispiel: Alle Entwürfe in den endgültigen Build einbeziehen
    drafts: true,
  },
  markdown: {
    // Beispiel: Verarbeite Markdown-Dateien ohne MDX
    mode: "md",
  },
  vite: {
    plugins: [yaml()],
  },
});
