// next-sitemap.config.js
/** @type {import('next-sitemap').IConfig} */
function getPriority(path) {
  if (path === "/") {
    return 1.0;
  }

  if (
    path === "/sherbime" ||
    path === "/blog" ||
    path === "/en" ||
    path === "/en/services"
  ) {
    return 0.9;
  }

  if (path.startsWith("/sherbime/") || path.startsWith("/en/services/")) {
    return 0.85;
  }

  if (path.startsWith("/blog/")) {
    return 0.75;
  }

  return 0.7;
}

function getChangeFrequency(path) {
  if (path.startsWith("/blog/")) {
    return "monthly";
  }

  return "weekly";
}

module.exports = {
  siteUrl: "https://alex-electric.com",
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  sitemapSize: 5000,
  changefreq: "weekly",
  priority: 0.7,
  exclude: [
    "/contact-clicks",
    "/contact-clicks/data",
    "/opengraph-image",
    "/twitter-image",
    "/sitemap.xml",
  ],
  transform: async (config, path) => ({
    loc: path,
    changefreq: getChangeFrequency(path),
    priority: getPriority(path),
    lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
    alternateRefs: config.alternateRefs ?? [],
  }),
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/contact-clicks", "/contact-clicks/data"],
      },
    ],
  },
};
