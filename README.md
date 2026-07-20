# samiralavi.github.io

Personal website of Amir Alavi, built with [Astro](https://astro.build/).

## Tech stack

- **Framework:** Astro (static site generation)
- **Content:** Markdown blog posts via Astro Content Collections
- **Styling:** Custom CSS with a modern light/dark theme
- **Comments:** [Giscus](https://giscus.app/)
- **Deploy:** GitHub Actions → GitHub Pages

## Development

```sh
npm install      # install dependencies
npm run dev      # start the dev server at http://localhost:4321
npm run build    # build the production site to ./dist
npm run preview  # preview the production build locally
```

## Project structure

```
public/                 Static assets (favicon, ads.txt, images used in HTML)
src/
  assets/               Images optimized by Astro
  components/           Reusable UI components
  content/blog/         Blog posts (Markdown) + their images
  layouts/              Page and blog-post layouts
  pages/                Routes (static pages, blog index, dynamic post route, RSS)
  consts.ts             Site-wide configuration
  content.config.ts     Blog content collection schema
  styles/global.css     Global styles and theme variables
```

## Writing a blog post

Create a folder under `src/content/blog/<post-slug>/` containing a Markdown file
with frontmatter:

```md
---
title: My Post Title
pubDate: 2024-08-05
description: A short summary shown in listings and social previews.
tags: ["Tag1", "Tag2"]
comments: true
---

Post content here. Reference local images with `![alt](./images/pic.png)`.
```

The folder name becomes the URL slug (`/blog/<post-slug>`).
