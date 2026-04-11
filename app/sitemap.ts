import type { MetadataRoute } from "next";
import { JOURNAL_SLUGS, JOURNEY_SLUGS } from "@/lib/site-map";
import { absoluteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes = [
    "/",
    "/about",
    "/inquire",
    "/journeys",
    "/journal",
    "/the-experience",
    "/the-social",
  ];

  const journeyRoutes = JOURNEY_SLUGS.map((slug) => `/journeys/${slug}`);
  const journalRoutes = JOURNAL_SLUGS.map((slug) => `/journal/${slug}`);

  return [...staticRoutes, ...journeyRoutes, ...journalRoutes].map((path) => ({
    url: absoluteUrl(path),
    lastModified: now,
    changeFrequency: "weekly",
    priority: path === "/" ? 1 : 0.8,
  }));
}
