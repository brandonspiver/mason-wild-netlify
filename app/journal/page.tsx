import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { JournalNewsletter } from "@/components/journal/JournalNewsletter";
import {
  JOURNAL_CATEGORY_LABELS,
  type JournalCategory,
  NAV_HREFS,
  CTA,
} from "@/lib/constants";
import type { ArticleSummary } from "@/types/journal";

export const metadata: Metadata = {
  title: "The Journal",
  description:
    "Field notes, territory intelligence, and perspectives on private African travel for discerning LGBTQ+ travellers. Published by Mason & Wild.",
};

// In production: replace with getArticles() from lib/journal.ts,
// sourcing from contentlayer's allArticles sorted by publishedAt desc.
const ARTICLES: ArticleSummary[] = [
  {
    slug:        "choosing-africa-with-intention",
    title:       "What It Means to Disappear Well: Choosing Africa with Intention",
    category:    "lgbtq-travel-intelligence",
    excerpt:
      "A luxury perspective on privacy, remoteness, and why certain African journeys feel different for LGBTQ+ travellers. A calm, experience-led view from Mason & Wild.",
    readingTime: 6,
    publishedAt: "2024-10-15",
    img: {
      src: "/journal/choosing-africa-with-intention/hero.jpg",
      alt: "Private conservancy landscape in Botswana at golden hour",
    },
  },
  {
    slug:        "cape-town-gay-capital-of-africa",
    title:       "Cape Town: Why It Remains the Gay Capital of Africa",
    category:    "lgbtq-travel-intelligence",
    excerpt:
      "A considered look at why Cape Town remains the strongest queer city on the continent, from legal confidence and public ease to nightlife, design, hospitality, and the simple luxury of being out in the world.",
    readingTime: 7,
    publishedAt: "2024-09-18",
    img: {
      src: "/journal/cape-town-gay-capital-of-africa/hero.jpg",
      alt: "Stylish Cape Town city scene for LGBTQ plus luxury travel",
    },
  },
  {
    slug:        "tanzania-vs-botswana-luxury-safari",
    title:       "Tanzania vs Botswana for Luxury Safari: Which One Fits the Way You Travel?",
    category:    "safari-guides",
    excerpt:
      "A considered comparison of Tanzania and Botswana for luxury safari, from privacy and pace to wildlife style, activities, and which destination fits different travellers best.",
    readingTime: 8,
    publishedAt: "2024-09-24",
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
    publishedAt: "2024-09-28",
    img: {
      src: "/journal/okavango-dry-season-private-safari/hero.jpg",
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
    publishedAt: "2024-09-10",
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
    publishedAt: "2024-08-22",
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
    publishedAt: "2024-08-05",
  },
  {
    slug:        "private-travel-owes-conservation",
    title:       "Beyond Beautiful Wilderness: What Private Travel Owes Conservation",
    category:    "conservation-and-culture",
    excerpt:
      "A clear-eyed look at what private travel actually owes conservation, from land protection and anti-poaching to community partnership, restraint, and long-term ecological seriousness.",
    readingTime: 8,
    publishedAt: "2024-07-18",
    img: {
      src: "/journal/private-travel-owes-conservation/hero.jpg",
      alt: "Rhino conservation fieldwork in South Africa",
    },
  },
  {
    slug:        "okavango-delta-notes",
    title:       "Destination Notes: Okavango Delta",
    category:    "destination-notes",
    excerpt:
      "Firsthand observations on the delta's private concessions, seasonal access windows, and the specific camps worth knowing about. Updated for the current season.",
    readingTime: 5,
    publishedAt: "2024-07-02",
  },
  {
    slug:        "destination-notes-south-africa",
    title:       "Destination Notes: South Africa",
    category:    "destination-notes",
    excerpt:
      "Firsthand observations on the regions that make South Africa so complete, from Cape Town and the Winelands to private safari, coastline, and cultural depth.",
    readingTime: 7,
    publishedAt: "2024-06-24",
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
    publishedAt: "2024-06-28",
    img: {
      src: "/journal/destination-notes-tanzania/hero-placeholder.svg",
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
  const [featured, ...rest] = ARTICLES;

  const byCategory = rest.reduce<Partial<Record<JournalCategory, ArticleSummary[]>>>(
    (acc, article) => {
      if (!acc[article.category]) acc[article.category] = [];
      acc[article.category]!.push(article);
      return acc;
    },
    {}
  );

  return (
    <>
      <section
        className="pt-[var(--page-header-pt)] pb-[clamp(48px,6vw,80px)] border-b border-stone-200"
        aria-labelledby="journal-heading"
      >
        <div className={JOURNAL_SHELL}>
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.2fr)_420px] xl:grid-cols-[minmax(0,1.35fr)_460px] gap-[clamp(40px,6vw,88px)] items-end">
            <div>
              <Reveal><p className="label-tag mb-6">Mason &amp; Wild</p></Reveal>
              <Reveal delay={1}>
                <h1 className="font-serif font-light text-stone-900 text-[clamp(3rem,6vw,6.4rem)] leading-[1.02] tracking-[-0.025em]" id="journal-heading">
                  The <em>Journal</em>
                </h1>
              </Reveal>
            </div>
            <Reveal delay={2}>
              <p className="text-[clamp(1rem,1.1vw,1.08rem)] font-light text-stone-500 leading-[1.9] max-w-[460px]">
                Field notes, territory intelligence, and perspectives on private African travel.
                Written for those who read carefully before they travel.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <div className="border-b border-stone-200 overflow-x-auto" aria-label="Journal categories">
        <div className={`flex min-w-max ${JOURNAL_SHELL}`}>
          <Link href="/journal" aria-current="page" className="py-4 pr-8 text-2xs font-normal tracking-wide uppercase text-stone-900 border-b-[1.5px] border-stone-900 whitespace-nowrap">
            All
          </Link>
          {CATEGORY_ORDER.map((cat) => (
            <Link key={cat} href={getCategoryHref(cat)} className="py-4 px-8 text-2xs font-normal tracking-wide uppercase text-stone-400 hover:text-stone-700 border-b-[1.5px] border-transparent hover:border-stone-300 whitespace-nowrap transition-colors duration">
              {JOURNAL_CATEGORY_LABELS[cat]}
            </Link>
          ))}
        </div>
      </div>

      {featured && (
        <section className="border-b border-stone-200" aria-labelledby="featured-heading">
          <div className={`${JOURNAL_SHELL} py-[clamp(24px,3vw,40px)]`}>
            <Reveal>
              <Link href={`/journal/${featured.slug}`} className="group grid grid-cols-1 xl:grid-cols-[minmax(0,1.18fr)_minmax(360px,460px)] items-stretch border border-stone-200 bg-page-subtle">
              {featured.img && (
                <div className="overflow-hidden bg-stone-100">
                  <Image src={featured.img.src} alt={featured.img.alt} width={1200} height={800}
                    className="w-full aspect-[16/11] xl:aspect-auto xl:h-full object-cover object-center transition-transform duration-[900ms] ease-out group-hover:scale-[1.025]"
                    priority
                  />
                </div>
              )}
              <div className="flex flex-col justify-end px-[clamp(28px,4vw,56px)] py-[clamp(32px,4vw,56px)] bg-page-subtle group-hover:bg-stone-100 transition-colors duration">
                <div className="flex items-center gap-4 mb-8 flex-wrap">
                  <span className="label-tag text-forest">Most Recent</span>
                  <span className="w-px h-3 bg-stone-300" aria-hidden="true" />
                  <span className="label-tag">{JOURNAL_CATEGORY_LABELS[featured.category]}</span>
                  <span className="w-px h-3 bg-stone-300" aria-hidden="true" />
                  <span className="label-tag">{featured.readingTime} min</span>
                </div>
                <h2 className="font-serif font-light text-[clamp(2rem,3vw,3.35rem)] text-stone-900 leading-[1.05] tracking-[-0.018em] mb-6 group-hover:text-forest transition-colors duration" id="featured-heading">
                  {featured.title}
                </h2>
                <p className="text-[clamp(1rem,1.08vw,1.06rem)] font-light text-stone-500 leading-[1.9] mb-10">
                  {featured.excerpt}
                </p>
                <div className="flex items-center justify-between gap-6">
                  <time dateTime={featured.publishedAt} className="label-tag">{formatDate(featured.publishedAt)}</time>
                  <span className="text-2xs font-normal tracking-wide uppercase text-stone-400 border-b border-stone-300 group-hover:text-stone-900 group-hover:border-stone-900 pb-[2px] transition-colors duration">
                    Read More
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
            const articles = byCategory[cat];
            if (!articles?.length) return null;
            return (
              <div key={cat} id={cat} className="mb-[clamp(56px,8vw,96px)] last:mb-0 scroll-mt-28">
                <Reveal>
                  <div className="flex items-baseline justify-between gap-6 mb-8 pb-5 border-b border-stone-200">
                    <h2 className="font-serif font-light text-display-sm text-stone-900 tracking-[-0.01em]">
                      <em>{JOURNAL_CATEGORY_LABELS[cat]}</em>
                    </h2>
                    <Link href={getCategoryHref(cat)} className="text-2xs font-normal tracking-wide uppercase text-stone-400 hover:text-stone-700 border-b border-stone-200 hover:border-stone-500 pb-[2px] transition-colors duration whitespace-nowrap">
                      View All
                    </Link>
                  </div>
                </Reveal>
                <div className="flex flex-col gap-0">
                  {articles.map((article, i) => (
                    <Reveal key={article.slug} delay={(i % 3) as 0 | 1 | 2}>
                      <Link href={`/journal/${article.slug}`} className="group grid grid-cols-1 md:grid-cols-[minmax(0,1fr)_auto] gap-6 md:gap-14 items-start border-t border-stone-200 py-9 last:border-b last:border-stone-200 hover:bg-page-subtle transition-colors duration -mx-3 px-3 md:-mx-5 md:px-5">
                        <div>
                          <h3 className="font-serif font-light text-[clamp(1.7rem,2.25vw,2.5rem)] text-stone-900 leading-[1.08] tracking-[-0.014em] mb-3 group-hover:text-forest transition-colors duration">
                            {article.title}
                          </h3>
                          <p className="text-[clamp(1rem,1.04vw,1.05rem)] font-light text-stone-500 leading-[1.85] max-w-[980px]">{article.excerpt}</p>
                        </div>
                        <div className="flex flex-row md:flex-col items-center md:items-end gap-4 md:gap-3 md:pt-[4px] shrink-0">
                          <time dateTime={article.publishedAt} className="label-tag whitespace-nowrap">{formatDate(article.publishedAt)}</time>
                          <span className="label-tag text-stone-300 whitespace-nowrap">{article.readingTime} min</span>
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
