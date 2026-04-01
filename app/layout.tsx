import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "../styles/globals.css";
import { NavBar } from "@/components/layout/NavBar";
import { Footer } from "@/components/layout/Footer";
import { PRIMARY_POSITIONING_LINE, BRAND_NAME } from "@/lib/constants";

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
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://masonwild.com"
  ),
  title: {
    template: `%s  -  ${BRAND_NAME}`,
    default:  `${BRAND_NAME} | Private African Journeys for LGBTQ+ Travelers`,
  },
  description: PRIMARY_POSITIONING_LINE,
  openGraph: {
    siteName:  BRAND_NAME,
    locale:    "en_GB",
    type:      "website",
    images: [{
      url:    "/og-default.jpg",
      width:  1200,
      height: 630,
      alt:    BRAND_NAME,
    }],
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
      <body>
        <NavBar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
