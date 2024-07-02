// src/types.ts
export interface Frontmatter {
    title: string;
    description: string;
    pubDate: string;
    author: string;
    image?: {
        url: string;
        alt: string;
        width?: number;
        height?: number;
    };
    tags: string[];
}

export interface Post {
    url: string;
    frontmatter: Frontmatter;
}

// Astro spezifische Typen
export interface MDXInstance<T> {
    url: string;
    frontmatter: T;
}