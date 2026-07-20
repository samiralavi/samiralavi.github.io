export const SITE_TITLE = "Amir Alavi";
export const SITE_TAGLINE = "Engineer & Artist";
export const SITE_LOCALE = "en_GB";
export const SITE_DESCRIPTION =
  "My name is Amir. I frequently publish articles about IoT, control systems, and embedded software development on this website based on my latest research experience.";
export const SITE_URL = "https://samiralavi.github.io";
export const AUTHOR = "Amir Alavi";
export const EMAIL = "amir.alavi@linuscent.com";

// Company
export const COMPANY = {
  name: "Linuscent",
  url: "https://linuscent.com",
};

// Google Analytics
export const GA_MEASUREMENT_ID = "G-NL4RPWEYBQ";

// Giscus comments
export const GISCUS = {
  repo: "samiralavi/samiralavi.github.io",
  repoId: "MDEwOlJlcG9zaXRvcnkxNzMzNTgyMjY=",
  category: "Announcements",
  categoryId: "DIC_kwDOClU8ks4CVJJR",
};

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/activities", label: "Activities" },
  { href: "/interests", label: "Interests" },
  { href: "/publications", label: "Publications" },
  { href: "/teaching", label: "Teaching" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

/**
 * Map a page pathname to its generated social-card (OG image) URL.
 * e.g. "/"            -> "/og/index.png"
 *      "/blog/foo/"   -> "/og/blog/foo.png"
 */
export function ogImageForPath(pathname: string): string {
  const clean = pathname.replace(/^\/+|\/+$/g, "");
  const key = clean === "" ? "index" : clean;
  return `/og/${key}.png`;
}

export const SOCIAL_LINKS = [
  { label: "GitHub", href: "https://github.com/samiralavi", icon: "github" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/seyed-amir-alavi/",
    icon: "linkedin",
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@amiralavi_real",
    icon: "youtube",
  },
  { label: "X", href: "https://x.com/samiralavi_real", icon: "x" },
];
