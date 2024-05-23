import { writeFileSync } from 'fs';
import { join } from 'path';
import { create } from 'xmlbuilder';

const SITE_URL = "https://www.musicstudio-ziebart.de";



// Seiten-URLs
const pages = [
  { url: `${SITE_URL}`, changefreq: "weekly", lastmod: new Date() },
  { url: `${SITE_URL}/instrumentenkauf/`, changefreq: "weekly", lastmod: new Date() },
  { url: `${SITE_URL}/blog/`, changefreq: "weekly", lastmod: new Date() },
  { url: `${SITE_URL}/tags/`, changefreq: "weekly", lastmod: new Date() },
  { url: `${SITE_URL}/contact_2/`, changefreq: "weekly", lastmod: new Date() },
  { url: `${SITE_URL}/thankyou/`, changefreq: "weekly", lastmod: new Date() },
  { url: `${SITE_URL}/danke-seite/`, changefreq: "weekly", lastmod: new Date() },
  { url: `${SITE_URL}/contact_4/`, changefreq: "weekly", lastmod: new Date() },
  { url: `${SITE_URL}/honorar/`, changefreq: "weekly", lastmod: new Date() },
  { url: `${SITE_URL}/unterricht/`, changefreq: "weekly", lastmod: new Date() },
  { url: `${SITE_URL}/faq/`, changefreq: "weekly", lastmod: new Date() },
  { url: `${SITE_URL}/download/`, changefreq: "weekly", lastmod: new Date() },
  { url: `${SITE_URL}/harmonielehre/`, changefreq: "weekly", lastmod: new Date() },
  { url: `${SITE_URL}/impressum/`, changefreq: "weekly", lastmod: new Date() },
  { url: `${SITE_URL}/datenschutz/`, changefreq: "weekly", lastmod: new Date() },
  { url: `${SITE_URL}/klavierunterricht/`, changefreq: "weekly", lastmod: new Date() },
  { url: `${SITE_URL}/keyboardunterricht/`, changefreq: "weekly", lastmod: new Date() },
  { url: `${SITE_URL}/gitarrenunterricht/`, changefreq: "weekly", lastmod: new Date() },
  { url: `${SITE_URL}/e-bassunterricht/`, changefreq: "weekly", lastmod: new Date() },
  { url: `${SITE_URL}/e-gitarrenunterricht/`, changefreq: "weekly", lastmod: new Date() },
  { url: `${SITE_URL}/banjounterricht/`, changefreq: "weekly", lastmod: new Date() },
  { url: `${SITE_URL}/akkordeonunterricht/`, changefreq: "weekly", lastmod: new Date() },
  { url: `${SITE_URL}/saxophonunterricht/`, changefreq: "weekly", lastmod: new Date() },
  { url: `${SITE_URL}/querfloetenunterricht/`, changefreq: "weekly", lastmod: new Date() },
  { url: `${SITE_URL}/klarinettenunterricht/`, changefreq: "weekly", lastmod: new Date() },
];

// Konsolenausgabe zur Überprüfung des lastmod-Attributs
/*
pages.forEach((page) => {
  console.log(page.lastmod);
}); */

// Video-Informationen
const videos = [
  {
    loc: `${SITE_URL}videos/flint-hill-special`, // URL der Seite, die das Video enthält
    title: "Flint Hill Special - Earl Scruggs",
    description: "Flint Hill Special - Banjo Lesson",
    content_loc: "https://www.youtube.com/embed/R75ZetEwmtw", // URL des eingebetteten Videos
    thumbnail_loc: "https://i.ytimg.com/vi/R75ZetEwmtw/hqdefault.jpg", // URL des Thumbnails
  },
  {
    loc: `${SITE_URL}videos/train-45`, // URL der Seite, die das Video enthält
    title: "Train 45",
    description: "Train 45 - Bluegrass Banjo",
    content_loc: "https://www.youtube.com/embed/uo5ojnmRHPo", // URL des eingebetteten Videos
    thumbnail_loc: "https://i.ytimg.com/vi/uo5ojnmRHPo/hqdefault.jpg", // URL des Thumbnails
  },
  {
    loc: `${SITE_URL}videos/cripple-creek`, // URL der Seite, die das Video enthält
    title: "Cripple Creek",
    description: "Banjo Beginner Lesson",
    content_loc: "https://www.youtube.com/embed/WmYlSqvpUkw", // URL des eingebetteten Videos
    thumbnail_loc: "https://i.ytimg.com/vi/WmYlSqvpUkw/hqdefault.jpg", // URL des Thumbnails
  },
  {
    loc: `${SITE_URL}videos/jo-satriani`, // URL der Seite, die das Video enthält
    title: "Joe Satriani - Ten Words Guitar Lesson+Tab",
    description: "Flint Hill Special - Banjo Lesson",
    content_loc: "https://www.youtube.com/embed/vxX0WiQhSUE?si=8ucTzPOBzAo", // URL des eingebetteten Videos
    thumbnail_loc: "https://i.ytimg.com/vi/8ucTzPOBzAo/hqdefault.jpg", // URL des Thumbnails
  },
  {
    loc: `${SITE_URL}videos/city-of-neworleans`, // URL der Seite, die das Video enthält
    title: "City Of NewOrleans - Arlo Guthrie",
    description: "City Of NewOrleans - Arlo Guthrie",
    content_loc: "https://www.youtube.com/embed/vxX0WiQhSUE?si=yEF6e2ZSZ0k", // URL des eingebetteten Videos
    thumbnail_loc: "https://i.ytimg.com/vi/yEF6e2ZSZ0k/hqdefault.jpg", // URL des Thumbnails
  },
  {
    loc: `${SITE_URL}videos/hammond-orgen-hammond-flip`, // URL der Seite, die das Video enthält
    title: "Hammond Organ - Hammond Flip - Klaus Wunderlich",
    description: "Hammond Organ - Hammond Flip - Klaus Wunderlich",
    content_loc: "https://www.youtube.com/embed/vxX0WiQhSUE?si=244HlpB3JoA", // URL des eingebetteten Videos
    thumbnail_loc: "https://i.ytimg.com/vi/y2KtSx3-W3w/hqdefault.jpg", // URL des Thumbnails
  },
  {
    loc: `${SITE_URL}videos/titel-h-schisch`, // URL der Seite, die das Video enthält
    title: "Hammond Organ Komponist: Klaus Wunderlich Titel: H-schisch",
    description: "Hammond Organ Komponist: Klaus Wunderlich Titel: H-schisch",
    content_loc: "https://www.youtube.com/embed/vxX0WiQhSUE?si=y2KtSx3-W3w", // URL des eingebetteten Videos
    thumbnail_loc: "https://i.ytimg.com/vi/y2KtSx3-W3w/hqdefault.jpg", // URL des Thumbnails
  },
];

const generateSitemap = () => {
  const root = create("urlset", { encoding: "UTF-8" });
  root.attribute("xmlns", "http://www.sitemaps.org/schemas/sitemap/0.9");
  root.attribute("xmlns:video", "http://www.google.com/schemas/sitemap-video/1.1");

  // Seiten zur Sitemap hinzufügen
  pages.forEach(page => {
    const url = root.element("url");
    url.element("loc", page.url);
    url.element("changefreq", page.changefreq);
    url.element("lastmod", page.lastmod.toISOString());
  });

  // Videos zur Sitemap hinzufügen
  videos.forEach(video => {
    const url = root.element("url");
    url.element("loc", video.loc);
    const videoTag = url.element("video:video");
    videoTag.element("video:title", video.title);
    videoTag.element("video:description", video.description);
    videoTag.element("video:content_loc", video.content_loc);
    videoTag.element("video:thumbnail_loc", video.thumbnail_loc);
  });

  const xmlString = root.end({ pretty: true });
  writeFileSync(join(process.cwd(), "public", "sitemap.xml"), xmlString);
};

generateSitemap();
