import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
    // Resolves to the "./foo" directory in your current working directory
    root: 'foo',
    // Resolves to the "./foo/public" directory in your current working directory
    publicDir: 'public',
    // static oder server SSR serverseitiges rändern
    output: 'static',
    // Die endgültige Seite bei deinem Hostanbieter
    site: 'https://www.musicstudio-ziebart.de/',
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
            entryLimit: 10000,
            lastmod: new Date('2023-01-06'),
        })
    ],
    // Beispiel: Erfordere abschließende Schrägstriche
    // in Seiten-URLs während der Entwicklung
    trailingSlash: 'always',
    build: {
    // Beispiel: Erzeuge `page.html` statt `page/index.html`
    // während des Build-Prozesses.
        format: 'directory'
    },
    vite: {
        ssr: {
          // Beispiel: Erzwinge das Überspringen eines defekten Pakets
          // bei der SSR-Verarbeitung, falls erforderlich
          external: ['defektes-npm-paket'],
        }
    },
});
