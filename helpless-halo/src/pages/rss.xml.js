import rss, { pagesGlobToRssItems } from '@astrojs/rss';

export async function GET() {
  return rss({
    title: 'Musicstudio Ziebart | Blog',
    description: 'Meine Reise zum Erlernen von Astro.',
    site: 'https://www.musicstudio-ziebart.de',
    items: await pagesGlobToRssItems(import.meta.glob('./**/*.mdx')),
    customData: `<language>de</language>`,
  });
}