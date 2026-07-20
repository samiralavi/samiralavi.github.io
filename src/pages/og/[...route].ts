import { OGImageRoute } from "astro-og-canvas";
import { getCollection } from "astro:content";
import { SITE_TITLE, SITE_TAGLINE, SITE_DESCRIPTION } from "../../consts";

const posts = await getCollection("blog");

// Static pages that get their own social card.
const staticPages: Record<string, { title: string; description: string }> = {
  index: { title: SITE_TITLE, description: SITE_DESCRIPTION },
  activities: {
    title: "Professional Activities",
    description: SITE_TITLE,
  },
  interests: { title: "Research Interests", description: SITE_TITLE },
  publications: { title: "Publications", description: SITE_TITLE },
  teaching: { title: "Teaching", description: SITE_TITLE },
  contact: { title: "Contact", description: SITE_TITLE },
  "privacy-policy": { title: "Privacy Policy", description: SITE_TITLE },
  blog: {
    title: "Blog",
    description:
      "Articles about IoT, control systems, embedded software, and electronics.",
  },
};

// Build the full page map: static pages + one card per blog post.
const pages: Record<string, { title: string; description: string }> = {
  ...staticPages,
};

for (const post of posts) {
  pages[`blog/${post.id}`] = {
    title: post.data.title,
    description: post.data.description ?? SITE_TAGLINE,
  };
}

export const { getStaticPaths, GET } = await OGImageRoute({
  param: "route",
  pages,
  getImageOptions: (_path, page) => ({
    title: page.title,
    description: page.description,
    logo: {
      path: "./public/images/favicon.png",
      size: [80],
    },
    bgGradient: [
      [11, 13, 18],
      [22, 26, 34],
    ],
    border: { color: [129, 140, 248], width: 12, side: "inline-start" },
    padding: 60,
    font: {
      title: {
        color: [242, 244, 248],
        size: 64,
        weight: "Bold",
        lineHeight: 1.2,
      },
      description: {
        color: [150, 160, 176],
        size: 30,
        lineHeight: 1.4,
      },
    },
  }),
});
