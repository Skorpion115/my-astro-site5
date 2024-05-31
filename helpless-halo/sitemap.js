import { writeFileSync, mkdirSync } from 'fs';
import { join } from 'path';
import { create } from 'xmlbuilder2';

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

// Video-Informationen
const videos = [
  
  {
    loc: `${SITE_URL}/banjounterricht/`,
    title: "Flint Hill Special - Banjo Lesson",
    description: "Flint Hill Special - Banjo Lesson",
    content_loc: "https://www.youtube.com/embed/R75ZetEwmtw",
    thumbnail_loc: "https://i.ytimg.com/vi/R75ZetEwmtw/hqdefault.jpg",
    publication_date: "2023-06-17", // Datum hier einfügen
    duration: "PT13M32S" // ISO 8601 Format (z.B., "PT10M0S" für 10 Minuten)
  },
  /*
  {
    loc: "https://www.musicstudio-ziebart.de/banjounterricht/",
    title: "Flint Hill Special - Earl Scruggs",
    description: "Bei diesem Stück erkläre ich den D-Tuner!",
    videoid: "R75ZetEwmtw"
  }, */
  /*
  {
    loc: `${SITE_URL}/banjounterricht/`,
    title: "Train 45 - Bluegrass Banjo",
    description: "Train 45 - Bluegrass Banjo",
    content_loc: "https://www.youtube.com/embed/uo5ojnmRHPo",
    thumbnail_loc: "https://i.ytimg.com/vi/uo5ojnmRHPo/hqdefault.jpg",
  },
  {
    loc: `${SITE_URL}/banjounterricht/`,
    title: "Banjo Beginner Lesson 2",
    description: "Banjo Beginner Lesson 2",
    content_loc: "https://www.youtube.com/embed/WmYlSqvpUkw",
    thumbnail_loc: "https://i.ytimg.com/vi/WmYlSqvpUkw/hqdefault.jpg",
  },
  {
    loc: `${SITE_URL}/e-gitarrenunterricht`,
    title: "Joe Satriani - Ten Words Guitar Lesson+Tab",
    description: "Joe Satriani - Ten Words Guitar Lesson+Tab",
    content_loc: "https://www.youtube.com/embed/vxX0WiQhSUE?si=8ucTzPOBzAo",
    thumbnail_loc: "https://i.ytimg.com/vi/8ucTzPOBzAo/hqdefault.jpg",
  },
  {
    loc: `${SITE_URL}/gitarrenunterricht/`,
    title: "City Of NewOrleans - Arlo Guthrie",
    description: "City Of NewOrleans - Arlo Guthrie",
    content_loc: "https://www.youtube.com/embed/vxX0WiQhSUE?si=yEF6e2ZSZ0k",
    thumbnail_loc: "https://i.ytimg.com/vi/yEF6e2ZSZ0k/hqdefault.jpg",
  },
  {
    loc: `${SITE_URL}/keyboardunterricht/`,
    title: "Hammond Organ - Hammond Flip - Klaus Wunderlich",
    description: "Hammond Organ - Hammond Flip - Klaus Wunderlich",
    content_loc: "https://www.youtube.com/embed/vxX0WiQhSUE?si=244HlpB3JoA",
    thumbnail_loc: "https://i.ytimg.com/vi/y2KtSx3-W3w/hqdefault.jpg",
  },
  {
    loc: `${SITE_URL}/keyboardunterricht/`,
    title: "Hammond Organ Komponist: Klaus Wunderlich Titel: H-schisch",
    description: "Hammond Organ Komponist: Klaus Wunderlich Titel: H-schisch",
    content_loc: "https://www.youtube.com/embed/vxX0WiQhSUE?si=y2KtSx3-W3w",
    thumbnail_loc: "https://i.ytimg.com/vi/y2KtSx3-W3w/hqdefault.jpg",
  },
  {
    loc: `${SITE_URL}/harmonielehre/`,
    title: "Notenschrift",
    description: "Notenschrift",
    content_loc: "https://www.youtube.com/embed/vxX0WiQhSUE?si=Hu4ef1IkuG0",
    thumbnail_loc: "https://i.ytimg.com/vi/Hu4ef1IkuG0/hqdefault.jpg",
  },
  {
    loc: `${SITE_URL}/harmonielehre/`,
    title: "Intervalle",
    description: "Intervalle",
    content_loc: "https://www.youtube.com/embed/vxX0WiQhSUE?si=804rrOOFzAQ",
    thumbnail_loc: "https://i.ytimg.com/vi/804rrOOFzAQ/hqdefault.jpg",
  },
  {
    loc: `${SITE_URL}/harmonielehre/`,
    title: "Dreiklänge",
    description: "Dreiklänge",
    content_loc: "https://www.youtube.com/embed/vxX0WiQhSUE?si=fgzboODvlQ4",
    thumbnail_loc: "https://i.ytimg.com/vi/fgzboODvlQ4/hqdefault.jpg",
  },
  {
    loc: `${SITE_URL}/harmonielehre/`,
    title: "Funktionsthorie",
    description: "Funktionsthorie",
    content_loc: "https://www.youtube.com/embed/vxX0WiQhSUE?si=tCkpok099xw",
    thumbnail_loc: "https://i.ytimg.com/vi/tCkpok099xw/hqdefault.jpg",
  }, */
];

// XML-Dokument erstellen
const doc = create({ version: '1.0', encoding: 'UTF-8' })
  .ele('urlset', {
    xmlns: 'http://www.sitemaps.org/schemas/sitemap/0.9',
    'xmlns:video': 'http://www.google.com/schemas/sitemap-video/1.1'
  });

// Seiten-URLs zur Sitemap hinzufügen
pages.forEach(page => {
  const url = doc.ele('url');
  url.ele('loc').txt(page.url);
  url.ele('changefreq').txt(page.changefreq);
  url.ele('lastmod').txt(page.lastmod.toISOString());
});

// Videos zur Sitemap hinzufügen

videos.forEach(video => {
  const url = doc.ele('url');
  url.ele('loc').txt(video.loc);
  const videoTag = url.ele('video:video');
  videoTag.ele('video:title').txt(video.title);
  videoTag.ele('video:description').txt(video.description);
  videoTag.ele('video:content_loc').txt(video.content_loc);
  videoTag.ele('video:thumbnail_loc').txt(video.thumbnail_loc);
});
// Videos zur Sitemap hinzufügen
/* videos.forEach(video => {
  const url = doc.ele('url');
  url.ele('loc', video.loc);
  const videoTag = url.ele('video:video');
  videoTag.ele('video:thumbnail_loc', `https://img.youtube.com/vi/${video.videoid}/default.jpg`);
  videoTag.ele('video:title', video.title);
  videoTag.ele('video:description', video.description);
  videoTag.ele('video:content_loc', `https://www.youtube.com/watch?v=${video.videoid}`);
  videoTag.ele('video:player_loc', `https://www.youtube.com/embed/${video.videoid}`);
}); */

const xmlString = doc.end({ pretty: true });

// Ordner erstellen und Sitemap speichern
mkdirSync(join(process.cwd(), 'dist'), { recursive: true });
writeFileSync(join(process.cwd(), 'dist', 'sitemap.xml'), xmlString);

console.log('Sitemap successfully created!');

