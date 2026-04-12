import type { Metadata } from "next";
import { BRAND_NAME, PRIMARY_POSITIONING_LINE } from "@/lib/constants";

const FALLBACK_SITE_URL = "https://masonandwild.com";
const DEFAULT_OG_IMAGE = "/home/home-hero.jpg";

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
    alternates: {
      canonical: path,
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
    inLanguage: "en",
  };
}

