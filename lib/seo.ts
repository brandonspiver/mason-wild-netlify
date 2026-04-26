import type { Metadata } from "next";
import { BRAND_NAME, PRIMARY_POSITIONING_LINE } from "@/lib/constants";

const FALLBACK_SITE_URL = "https://masonandwild.com";
const DEFAULT_OG_IMAGE = "/home/home-hero.jpg";
const DEFAULT_AUTHOR = "Zannon James";

export const SITE_KEYWORDS = [
  "luxury african travel",
  "private african journeys",
  "lgbtq luxury travel",
  "southern africa luxury safari",
  "eastern africa luxury safari",
  "botswana safari",
  "zambia safari",
  "tanzania safari",
  "south africa luxury travel",
  "mozambique luxury travel",
] as const;

export function getSiteUrl(): string {
  const raw = process.env.NEXT_PUBLIC_SITE_URL?.trim() || FALLBACK_SITE_URL;
  return raw.endsWith("/") ? raw.slice(0, -1) : raw;
}

export function absoluteUrl(path: string = "/"): string {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${getSiteUrl()}${normalizedPath}`;
}

type BuildPageMetadataInput = {
  title: string;
  description?: string;
  path?: string;
  image?: string;
  type?: "website" | "article";
};

export function buildPageMetadata({
  title,
  description = PRIMARY_POSITIONING_LINE,
  path = "/",
  image = DEFAULT_OG_IMAGE,
  type = "website",
}: BuildPageMetadataInput): Metadata {
  return {
    title,
    description,
    keywords: [...SITE_KEYWORDS],
    authors: [{ name: DEFAULT_AUTHOR }],
    creator: DEFAULT_AUTHOR,
    publisher: BRAND_NAME,
    category: "Luxury Travel",
    alternates: {
      canonical: path,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    openGraph: {
      title,
      description,
      url: absoluteUrl(path),
      siteName: BRAND_NAME,
      locale: "en_US",
      type,
      images: [
        {
          url: image,
          alt: title,
          width: 1200,
          height: 630,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: BRAND_NAME,
    url: absoluteUrl("/"),
    description: PRIMARY_POSITIONING_LINE,
    email: "hello@masonandwild.com",
    areaServed: ["Southern Africa", "Eastern Africa", "United States"],
    knowsAbout: [
      "Private luxury travel",
      "LGBTQ+ travel intelligence",
      "African safari design",
      "Journey curation",
    ],
    inLanguage: "en-US",
  };
}

export function getWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: BRAND_NAME,
    url: absoluteUrl("/"),
    description: PRIMARY_POSITIONING_LINE,
    publisher: {
      "@type": "Organization",
      name: BRAND_NAME,
    },
    about: [
      "Private African travel",
      "LGBTQ+ luxury journeys",
      "Southern Africa and Eastern Africa route design",
    ],
    keywords: [...SITE_KEYWORDS],
    inLanguage: "en-US",
  };
}
