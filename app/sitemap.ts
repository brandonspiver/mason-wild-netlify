import type { MetadataRoute } from "next";
import { JOURNAL_SLUGS, JOURNEY_SLUGS } from "@/lib/site-map";
import { absoluteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes = [
    "/",
    "/about",
    "/enquire",
    "/journeys",
    "/journal",
    "/the-experience",
    "/the-social",
    "/privacy",
    "/terms",
    "/paia",
    "/llms.txt",
    "/llms-full.txt",
  ];

  const journeyRoutes = JOURNEY_SLUGS.map((slug) => `/journeys/${slug}`);
  const journalRoutes = JOURNAL_SLUGS.map((slug) => `/journal/${slug}`);

  const getPriority = (path: string): number => {
    if (path === "/") return 1;
    if (path === "/journeys" || path === "/journal" || path === "/the-experience") return 0.9;
    if (path.startsWith("/journeys/")) return 0.85;
    if (path.startsWith("/journal/")) return 0.8;
    return 0.7;
  };

  const getChangeFrequency = (path: string): "daily" | "weekly" | "monthly" => {
    if (path === "/") return "weekly";
    if (path === "/journal" || path.startsWith("/journal/")) return "weekly";
    return "monthly";
  };

  return [...staticRoutes, ...journeyRoutes, ...journalRoutes].map((path) => ({
    url: absoluteUrl(path),
    lastModified: now,
    changeFrequency: getChangeFrequency(path),
    priority: getPriority(path),
  }));
}

