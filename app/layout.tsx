import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "../styles/globals.css";
import { NavBar } from "@/components/layout/NavBar";
import { Footer } from "@/components/layout/Footer";
import { CookieBanner } from "@/components/layout/CookieBanner";
import { PRIMARY_POSITIONING_LINE, BRAND_NAME } from "@/lib/constants";
import { JsonLd } from "@/lib/jsonld";
import { getOrganizationSchema, getSiteUrl, getWebsiteSchema } from "@/lib/seo";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
  preload: true,
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400"],
  variable: "--font-sans",
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: {
    template: `%s  -  ${BRAND_NAME}`,
    default:  `${BRAND_NAME} | Private African Journeys for LGBTQ+ Travellers`,
  },
  description: PRIMARY_POSITIONING_LINE,
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [{ url: "/icon.png", type: "image/png" }],
    apple: [{ url: "/apple-icon.png", type: "image/png" }],
    shortcut: ["/icon.png"],
  },
  openGraph: {
    siteName:  BRAND_NAME,
    locale:    "en_US",
    type:      "website",
    images: [{
      url:    "/home/home-hero.jpg",
      width:  1200,
      height: 630,
      alt:    BRAND_NAME,
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${BRAND_NAME} | Private African Journeys for LGBTQ+ Travellers`,
    description: PRIMARY_POSITIONING_LINE,
    images: ["/home/home-hero.jpg"],
  },
  robots: {
    index:  true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${dmSans.variable}`}
    >
      <head>
        <link rel="alternate" type="text/plain" href="/llms.txt" title="LLMs.txt" />
        <link rel="alternate" type="text/plain" href="/llms-full.txt" title="LLMs Full" />
      </head>
      <body>
        <JsonLd data={[getOrganizationSchema(), getWebsiteSchema()]} />
        <NavBar />
        <main>{children}</main>
        <CookieBanner />
        <Footer />
      </body>
    </html>
  );
}

