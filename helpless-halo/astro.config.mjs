import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import preact from "@astrojs/preact";
import netlify from "@astrojs/netlify";
import crypto from "crypto";

function nonceMiddleware(req, res, next) {
  const nonce = crypto.randomBytes(16).toString("base64");

  // Ensure res.locals is an object
  if (!res.locals) {
    res.locals = {};
  }

  res.locals.nonce = nonce;
  res.setHeader(
    "Content-Security-Policy",
    `default-src 'self'; script-src 'self' 'nonce-${nonce}'; style-src 'self' 'nonce-${nonce}'`
  );
  next();
}

// https://astro.build/config
export default defineConfig({
  prefetch: true,
  server: { port: 4321, host: true },

  devToolbar: {
    enabled: false
  },
  
  build: {
    format: "directory", // Erzeugt `page/index.html` statt `page.html`
  },

  publicDir: "public",

  output: "server", // SSR serverseitiges Rendern
  adapter: netlify({
    functionPerRoute: true,
  }),

  vite: {
    plugins: [
      {
        name: 'nonce-middleware',
        configureServer(server) {
          server.middlewares.use(nonceMiddleware);
        },
      },
    ],
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
