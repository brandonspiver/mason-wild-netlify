import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { JournalNewsletter } from "@/components/journal/JournalNewsletter";
import { JsonLd } from "@/lib/jsonld";
import {
  JOURNAL_CATEGORY_LABELS,
  type JournalCategory,
  NAV_HREFS,
  CTA,
} from "@/lib/constants";
import { absoluteUrl, buildPageMetadata } from "@/lib/seo";
import type { ArticleSummary } from "@/types/journal";

export const metadata: Metadata = buildPageMetadata({
  title: "The Journal",
  description:
    "Field notes, territory intelligence, and perspectives on private African travel for discerning LGBTQ+ travellers. Published by Mason & Wild.",
  path: "/journal",
});

// In production: replace with getArticles() from lib/journal.ts,
// sourcing from contentlayer's allArticles sorted by publishedAt desc.
const ARTICLES: ArticleSummary[] = [
  {
    slug:        "cape-town-gay-capital-of-africa",
    title:       "Cape Town: Why It Remains the Gay Capital of Africa",
    category:    "lgbtq-travel-intelligence",
    excerpt:
      "A considered look at why Cape Town remains the strongest queer city on the continent, from legal confidence and public ease to nightlife, design, hospitality, and the simple luxury of being out in the world.",
    readingTime: 7,
    publishedAt: "2026-04-05",
    img: {
      src: "/journal/cape-town-gay-capital-of-africa/hero.jpg",
      alt: "Stylish Cape Town city scene for LGBTQ plus luxury travel",
    },
  },
  {
    slug:        "how-to-choose-the-right-african-journey-for-your-travel-style",
    title:       "How to Choose the Right African Journey for Your Travel Style",
    category:    "journey-intelligence",
    excerpt:
      "A considered guide to choosing the right African journey not by destination alone, but by the kind of experience you actually want to feel inside it.",
    readingTime: 10,
    publishedAt: "2026-04-15",
    img: {
      src: "/journeys/the-untamed/Zungulila (6).jpg",
      alt: "Bedroom tent interior at Zungulila in South Luangwa, Zambia",
    },
  },
  {
    slug:        "how-long-should-an-african-luxury-journey-be",
    title:       "How Long Should an African Luxury Journey Be?",
    category:    "journey-intelligence",
    excerpt:
      "A considered guide to how long an African luxury journey should really be, why 10 to 14 nights is often the sweet spot, and how to build a trip with rhythm rather than rush.",
    readingTime: 9,
    publishedAt: "2026-04-15",
    img: {
      src: "/journeys/the-romantic/MW  (1).jpg",
      alt: "Monwana Lodge suite in Greater Kruger",
    },
  },
  {
    slug:        "which-mason-and-wild-archetype-is-right-for-you",
    title:       "Which Mason & Wild Archetype Is Right for You?",
    category:    "journey-intelligence",
    excerpt:
      "A considered guide to choosing the journey style that fits how you travel, from privacy and romance to design, wildlife, celebration, and first-time safari confidence.",
    readingTime: 11,
    publishedAt: "2026-04-15",
    img: {
      src: "/home/home-hero.jpg",
      alt: "Polished African landscape with atmosphere and emotional breadth",
    },
  },
  {
    slug:        "choosing-africa-with-intention",
    title:       "What It Means to Disappear Well: Choosing Africa with Intention",
    category:    "lgbtq-travel-intelligence",
    excerpt:
      "A luxury perspective on privacy, remoteness, and why certain African journeys feel different for LGBTQ+ travellers. A calm, experience-led view from Mason & Wild.",
    readingTime: 6,
    publishedAt: "2026-04-12",
    img: {
      src: "/journal/choosing-africa-with-intention/hero.jpg",
      alt: "Cape Town cityscape at dusk with ocean light",
    },
  },
  {
    slug:        "what-lgbtq-travellers-should-look-for-in-a-luxury-african-journey",
    title:       "What LGBTQ+ Travellers Should Look For in a Luxury African Journey",
    category:    "lgbtq-travel-intelligence",
    excerpt:
      "A practical, considered guide to what actually makes a luxury African journey feel calm, private, and well handled for LGBTQ+ travellers, beyond marketing language and surface-level reassurance.",
    readingTime: 8,
    publishedAt: "2026-04-12",
    img: {
      src: "/journal/what-lgbtq-travellers-should-look-for-in-a-luxury-african-journey/hero.jpg",
      alt: "Refined African luxury travel setting with privacy and calm",
    },
  },
  {
    slug:        "privacy-is-a-luxury",
    title:       "Privacy Is a Luxury: Why the Best Journeys Feel Unobserved",
    category:    "private-travel-philosophy",
    excerpt:
      "A considered look at privacy not as secrecy or status, but as the relief of not feeling watched, crowded, or over-managed while you travel.",
    readingTime: 7,
    publishedAt: "2026-04-12",
    img: {
      src: "/journal/privacy-is-a-luxury/hero.jpg",
      alt: "Quiet luxury travel setting with privacy and emotional ease",
    },
  },
  {
    slug:        "the-best-luxury-travel-feels-edited",
    title:       "The Best Luxury Travel Feels Edited",
    category:    "private-travel-philosophy",
    excerpt:
      "A considered look at why the most memorable journeys are shaped by coherence, rhythm, and restraint rather than sheer volume, and why saying no is part of real travel expertise.",
    readingTime: 7,
    publishedAt: "2026-04-12",
    img: {
      src: "/journal/the-best-luxury-travel-feels-edited/hero.jpg",
      alt: "Refined luxury travel setting with calm and visual coherence",
    },
  },
  {
    slug:        "tanzania-vs-botswana-luxury-safari",
    title:       "Tanzania vs Botswana for Luxury Safari: Which One Fits the Way You Travel?",
    category:    "safari-guides",
    excerpt:
      "A considered comparison of Tanzania and Botswana for luxury safari, from privacy and pace to wildlife style, activities, and which destination fits different travellers best.",
    readingTime: 8,
    publishedAt: "2026-04-08",
    img: {
      src: "/journal/tanzania-vs-botswana-luxury-safari/hero.jpg",
      alt: "Luxury safari comparison between Botswana and Tanzania",
    },
  },
  {
    slug:        "okavango-dry-season-private-safari",
    title:       "The Okavango in Dry Season: Where Privacy Still Changes Everything",
    category:    "safari-guides",
    excerpt:
      "A Mason & Wild perspective on the Okavango Delta in dry season, from wildlife concentration and guiding quality to why private access still changes the experience.",
    readingTime: 7,
    publishedAt: "2026-04-11",
    img: {
      src: "/journal/okavango-dry-season-private-safari/mokoro.jpg",
      alt: "Private boat moving through the Okavango Delta in Botswana during dry season",
    },
  },
  {
    slug:        "solitude-architecture-of-silence-namibia",
    title:       "On Solitude and the Architecture of Silence in Namibia",
    category:    "private-travel-philosophy",
    excerpt:
      "A Mason & Wild perspective on Namibia as a place of silence, relief, and extraordinary landscape, for travellers seeking calm, space, and a more private kind of luxury.",
    readingTime: 7,
    publishedAt: "2026-03-28",
    img: {
      src: "/journal/solitude-architecture-of-silence-namibia/hero.jpg",
      alt: "Sossusvlei desert landscape in Namibia",
    },
  },
  {
    slug:        "private-conservancies-vs-national-parks",
    title:       "Private Conservancies vs National Parks: What Actually Changes the Experience",
    category:    "safari-guides",
    excerpt:
      "A practical luxury guide to how private conservancies differ from national parks, from vehicle density and off-road access to guiding flexibility, sightings, and overall safari quality.",
    readingTime: 8,
    publishedAt: "2026-03-20",
    img: {
      src: "/journal/private-conservancies-vs-national-parks/hero.jpg",
      alt: "Luxury safari landscape illustrating private safari access in Africa",
    },
  },
  {
    slug:        "lgbtq-travel-southern-africa",
    title:       "LGBTQ+ Travel in Southern Africa: Where It Works, Where It Doesn't, and Why",
    category:    "lgbtq-travel-intelligence",
    excerpt:
      "A practical luxury guide to LGBTQ+ travel in Southern Africa, covering South Africa, Botswana, Namibia, Mozambique, Zambia, and Zimbabwe through the lens of privacy, hosting culture, and real-world trip design.",
    readingTime: 9,
    publishedAt: "2026-03-12",
    img: {
      src: "/journal/lgbtq-travel-southern-africa/hero.jpg",
      alt: "Lantern-lit lodge deck overlooking the Southern African landscape at dusk",
    },
  },
  {
    slug:        "what-conservation-looks-like-when-it-is-working",
    title:       "What Conservation Looks Like When It Is Working",
    category:    "conservation-and-culture",
    excerpt:
      "A practical, clear-eyed look at the signs that conservation is working, from land recovery and anti-poaching to local partnership, pressure control, education, and long-term seriousness.",
    readingTime: 8,
    publishedAt: "2026-04-12",
    img: {
      src: "/journal/what-conservation-looks-like-when-it-is-working/hero.jpg",
      alt: "African conservation landscape under long-term stewardship",
    },
  },
  {
    slug:        "culture-is-not-an-add-on",
    title:       "Culture Is Not an Add-On: What Thoughtful African Travel Owes Place",
    category:    "conservation-and-culture",
    excerpt:
      "A clear-eyed look at why culture should shape an African journey rather than decorate it, and why thoughtful travel owes more to place than scenery alone.",
    readingTime: 8,
    publishedAt: "2026-04-12",
    img: {
      src: "/journal/culture-is-not-an-add-on/hero.jpg",
      alt: "Culturally grounded luxury travel scene in Africa",
    },
  },
  {
    slug:        "private-travel-owes-conservation",
    title:       "Beyond Beautiful Wilderness: What Private Travel Owes Conservation",
    category:    "conservation-and-culture",
    excerpt:
      "A clear-eyed look at what private travel actually owes conservation, from land protection and anti-poaching to community partnership, restraint, and long-term ecological seriousness.",
    readingTime: 8,
    publishedAt: "2026-03-04",
    img: {
      src: "/journal/private-travel-owes-conservation/hero.jpg",
      alt: "Rhino conservation fieldwork in South Africa",
    },
  },
  {
    slug:        "destination-notes-botswana",
    title:       "Destination Notes: Botswana",
    category:    "destination-notes",
    excerpt:
      "Firsthand observations on Botswana's private safari rhythm, from Delta water-based immersion and Savute firelight to Makgadikgadi salt-pan scale.",
    readingTime: 7,
    publishedAt: "2026-02-26",
    img: {
      src: "/journal/destination-notes-botswana/hero.jpg",
      alt: "Helicopter and curated setup on Botswana salt pans at dusk",
    },
  },
  {
    slug:        "destination-notes-south-africa",
    title:       "Destination Notes: South Africa",
    category:    "destination-notes",
    excerpt:
      "Firsthand observations on the regions that make South Africa so complete, from Cape Town and the Winelands to private safari, coastline, and cultural depth.",
    readingTime: 7,
    publishedAt: "2026-02-18",
    img: {
      src: "/journal/destination-notes-south-africa/hero.jpg",
      alt: "Luxury South Africa landscape with coastal or Winelands character",
    },
  },
  {
    slug:        "destination-notes-tanzania",
    title:       "Destination Notes: Tanzania",
    category:    "destination-notes",
    excerpt:
      "Firsthand observations on what makes Tanzania so compelling, from the scale of the Serengeti to the finishing ease of Zanzibar, and how to shape it into a journey that feels cinematic rather than crowded.",
    readingTime: 7,
    publishedAt: "2026-02-22",
    img: {
      src: "/journal/destination-notes-tanzania/hero.jpg",
      alt: "Luxury Tanzania landscape with safari or coastal character",
    },
  },
];

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric", month: "long", year: "numeric",
  });
}

const CATEGORY_ORDER: JournalCategory[] = [
  "journey-intelligence",
  "lgbtq-travel-intelligence",
  "safari-guides",
  "private-travel-philosophy",
  "conservation-and-culture",
  "destination-notes",
];

function getCategoryHref(category: JournalCategory): string {
  return `/journal#${category}`;
}

const JOURNAL_SHELL =
  "mx-auto w-full max-w-[1720px] px-[clamp(18px,3vw,54px)]";

export default function JournalPage() {
  const journalCollectionSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "The Journal",
    url: absoluteUrl("/journal"),
    blogPost: ARTICLES.map((article) => ({
      "@type": "BlogPosting",
      headline: article.title,
      datePublished: article.publishedAt,
      url: absoluteUrl(`/journal/${article.slug}`),
    })),
  };

  const featured = ARTICLES[0];

  const byCategory = ARTICLES.reduce<Partial<Record<JournalCategory, ArticleSummary[]>>>(
    (acc, article) => {
      if (!acc[article.category]) acc[article.category] = [];
      acc[article.category]!.push(article);
      return acc;
    },
    {}
  );

  return (
    <>
      <JsonLd data={journalCollectionSchema} />
      <section
        className="pt-[var(--page-header-pt)] pb-[clamp(56px,7vw,96px)] border-b border-stone-200"
        aria-labelledby="journal-heading"
      >
        <div className={JOURNAL_SHELL}>
          <Reveal>
            <div className="border-y border-stone-200 py-4 mb-10 flex items-center justify-between gap-6">
              <p className="label-tag">Mason &amp; Wild</p>
              <p className="label-tag text-stone-300">Edition &middot; April 2026</p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 xl:grid-cols-[minmax(0,1.25fr)_minmax(280px,420px)] gap-[clamp(36px,6vw,92px)] items-end">
            <div>
              <Reveal delay={1}>
                <h1
                  className="font-serif font-light text-stone-900 text-[clamp(3.35rem,7vw,7.25rem)] leading-[0.98] tracking-[-0.028em]"
                  id="journal-heading"
                >
                  The <em>Journal</em>
                </h1>
              </Reveal>
            </div>
            <Reveal delay={2}>
              <p className="text-[clamp(0.98rem,1.02vw,1.06rem)] font-light text-stone-500 leading-[1.95] max-w-[420px] xl:ml-auto">
                Field notes, territory intelligence, and considered perspectives
                on private African travel for readers who value taste, detail,
                and editorial clarity.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <div className="border-b border-stone-200 bg-page-subtle" aria-label="Journal categories">
        <div className={JOURNAL_SHELL}>
          <nav className="overflow-x-auto" aria-label="Journal category navigation">
            <div className="flex min-w-max items-center py-5 md:py-6">
              <Link
                href="/journal"
                aria-current="page"
                className="relative pb-3 text-2xs font-normal tracking-wide uppercase text-stone-900 transition-colors motion-premium-fast hover:text-forest"
              >
                All
                <span className="absolute inset-x-0 bottom-0 h-px bg-stone-900" aria-hidden="true" />
              </Link>
              {CATEGORY_ORDER.map((cat) => (
                <div key={cat} className="flex items-center">
                  <span className="mx-5 h-3 w-px bg-stone-200 md:mx-6" aria-hidden="true" />
                  <Link
                    href={getCategoryHref(cat)}
                    className="relative pb-3 text-2xs font-normal tracking-wide uppercase text-stone-400 whitespace-nowrap transition-colors motion-premium-fast hover:text-stone-900"
                  >
                    {JOURNAL_CATEGORY_LABELS[cat]}
                  </Link>
                </div>
              ))}
            </div>
          </nav>
        </div>
      </div>

      {featured && (
        <section className="border-b border-stone-200" aria-labelledby="featured-heading">
          <div className={`${JOURNAL_SHELL} py-[clamp(26px,3vw,44px)]`}>
            <Reveal>
              <Link href={`/journal/${featured.slug}`} className="group grid grid-cols-1 xl:grid-cols-[minmax(0,1.22fr)_minmax(380px,510px)] items-stretch border border-stone-200 bg-page-subtle">
              {featured.img && (
                <div className="overflow-hidden bg-stone-100">
                  <Image src={featured.img.src} alt={featured.img.alt} width={1200} height={800}
                    quality={88}
                    sizes="(max-width: 1279px) 100vw, 62vw"
                    className="w-full aspect-[16/11] xl:aspect-auto xl:h-full object-cover object-center transition-transform motion-premium group-hover:scale-[1.02]"
                    priority
                  />
                </div>
              )}
              <div className="flex flex-col justify-end px-[clamp(28px,4vw,58px)] py-[clamp(34px,4.2vw,62px)] bg-page-subtle group-hover:bg-stone-100 transition-colors motion-premium">
                <div className="flex items-center gap-4 mb-9 flex-wrap">
                  <span className="label-tag text-forest">Cover Story</span>
                  <span className="w-px h-3 bg-stone-300" aria-hidden="true" />
                  <span className="label-tag">{JOURNAL_CATEGORY_LABELS[featured.category]}</span>
                  <span className="w-px h-3 bg-stone-300" aria-hidden="true" />
                  <span className="label-tag">{featured.readingTime} min</span>
                </div>
                <h2 className="font-serif font-light text-[clamp(2.25rem,3.35vw,3.75rem)] text-stone-900 leading-[1.02] tracking-[-0.02em] mb-6 group-hover:text-forest transition-colors motion-premium" id="featured-heading">
                  {featured.title}
                </h2>
                <p className="clamp-3 text-[clamp(0.93rem,0.96vw,1rem)] font-light text-stone-500 leading-[1.86] mb-11">
                  {featured.excerpt}
                </p>
                <div className="flex items-center justify-between gap-6">
                  <time dateTime={featured.publishedAt} className="label-tag">{formatDate(featured.publishedAt)}</time>
                  <span className="text-2xs font-normal tracking-wide uppercase text-stone-400 border-b border-stone-300 group-hover:text-stone-900 group-hover:border-stone-900 pb-[2px] transition-colors motion-premium-fast">
                    Read Story
                  </span>
                </div>
              </div>
              </Link>
            </Reveal>
          </div>
        </section>
      )}

      <section className="section" aria-label="Journal articles">
        <div className={JOURNAL_SHELL}>
          {CATEGORY_ORDER.map((cat) => {
            const articles = byCategory[cat]?.slice(0, 3);
            if (!articles?.length) return null;
            return (
              <div key={cat} id={cat} className="mb-[clamp(72px,9vw,124px)] last:mb-0 scroll-mt-28">
                <Reveal>
                  <div className="flex items-end justify-between gap-6 mb-10 pb-6 border-b border-stone-200">
                    <h2 className="font-serif font-light text-[clamp(1.85rem,2.7vw,3rem)] text-stone-900 leading-[1.06] tracking-[-0.018em]">
                      <em>{JOURNAL_CATEGORY_LABELS[cat]}</em>
                    </h2>
                  </div>
                </Reveal>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 border border-stone-200">
                  {articles.map((article, i) => (
                    <Reveal
                      key={article.slug}
                      delay={(i % 3) as 0 | 1 | 2}
                      className="h-full border-t border-stone-200 first:border-t-0 md:[&:nth-child(-n+2)]:border-t-0 xl:[&:nth-child(-n+3)]:border-t-0 md:border-r md:[&:nth-child(2n)]:border-r-0 xl:border-r xl:[&:nth-child(2n)]:border-r xl:[&:nth-child(3n)]:border-r-0"
                    >
                      <Link href={`/journal/${article.slug}`} className="group flex h-full flex-col bg-page hover:bg-page-subtle transition-colors motion-premium">
                        <div>
                          {article.img ? (
                            <div className="overflow-hidden">
                              <Image
                                src={article.img.src}
                                alt={article.img.alt}
                                width={900}
                                height={620}
                                quality={86}
                                sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 33vw"
                                className="w-full aspect-[16/10] object-cover object-center transition-transform motion-premium group-hover:scale-[1.02]"
                                loading="lazy"
                              />
                            </div>
                          ) : (
                            <div className="w-full aspect-[16/10] bg-page-canvas border-b border-stone-200" aria-hidden="true" />
                          )}
                        </div>

                        <div className="flex flex-1 flex-col px-6 py-7">
                          <div className="flex items-center gap-3 mb-4 flex-wrap">
                            <time dateTime={article.publishedAt} className="label-tag whitespace-nowrap">{formatDate(article.publishedAt)}</time>
                            <span className="w-px h-3 bg-stone-300" aria-hidden="true" />
                            <span className="label-tag text-stone-300 whitespace-nowrap">{article.readingTime} min</span>
                          </div>

                          <h3 className="clamp-2 font-serif font-light text-[clamp(1.5rem,2vw,2.25rem)] text-stone-900 leading-[1.08] tracking-[-0.014em] mb-4 group-hover:text-forest transition-colors motion-premium">
                            {article.title}
                          </h3>

                          <p className="clamp-3 text-[clamp(0.9rem,0.9vw,0.96rem)] font-light text-stone-500 leading-[1.8]">
                            {article.excerpt}
                          </p>
                          <span className="mt-6 self-start text-2xs tracking-wide uppercase text-stone-400 border-b border-stone-300 pb-[2px] transition-colors motion-premium-fast group-hover:text-stone-900 group-hover:border-stone-900">
                            Read Story {"->"}
                          </span>
                        </div>
                      </Link>
                    </Reveal>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <Reveal>
        <div className="border-t border-b border-stone-200 bg-page-canvas px-[var(--px)] py-12">
          <div className={`${JOURNAL_SHELL} flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6`}>
            <p className="font-serif font-light italic text-display-sm text-stone-700 leading-[1.45] tracking-[-0.01em] max-w-[520px]">
              Ready to move from reading to travelling?
            </p>
            <Button href={NAV_HREFS.journeys} variant="ghost">{CTA.viewAllJourneys}</Button>
          </div>
        </div>
      </Reveal>

      <JournalNewsletter inputId="nl-email-journal" />
    </>
  );
}



