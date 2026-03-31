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
    "Field notes, territory intelligence, and perspectives on private African travel for discerning LGBTQ+ travelers. Published by Mason & Wild.",
};

// In production: replace with getArticles() from lib/journal.ts,
// sourcing from contentlayer's allArticles sorted by publishedAt desc.
const ARTICLES: ArticleSummary[] = [
  {
    slug:        "what-it-means-to-disappear-well",
    title:       "What It Means to Disappear Well: Choosing Africa with Intention",
    category:    "lgbtq-travel-intelligence",
    excerpt:
      "For travelers who have spent years managing their visibility, the experience of being entirely unremarkable in a landscape is not a small thing. It is the only kind of luxury that costs nothing to maintain.",
    readingTime: 7,
    publishedAt: "2024-10-15",
    img: {
      src: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=1200&q=82&auto=format&fit=crop",
      alt: "Private conservancy at golden hour — no other travellers",
    },
  },
  {
    slug:        "okavango-dry-season",
    title:       "The Okavango in Dry Season: Why Fewer Means More",
    category:    "safari-guides",
    excerpt:
      "When the water recedes, the delta concentrates. Wildlife converges on permanent water. The silence deepens. This is the Okavango that most travelers never see.",
    readingTime: 5,
    publishedAt: "2024-09-28",
    img: {
      src: "https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=900&q=82&auto=format&fit=crop",
      alt: "Okavango Delta — still water and open sky at low season",
    },
  },
  {
    slug:        "on-solitude-and-silence",
    title:       "On Solitude and the Architecture of Silence",
    category:    "private-travel-philosophy",
    excerpt:
      "There is a particular quality to silence in a landscape that dwarfs you. It is not emptiness. It is presence without obligation.",
    readingTime: 4,
    publishedAt: "2024-09-10",
    img: {
      src: "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?w=900&q=82&auto=format&fit=crop",
      alt: "Namibian desert at first light — infinite scale and quiet",
    },
  },
  {
    slug:        "private-conservancies-access",
    title:       "Private Conservancies and the Question of Access",
    category:    "safari-guides",
    excerpt:
      "Not all exclusivity is equal. Understanding how private conservancies differ from national parks — and from each other — is the first decision in building a serious African journey.",
    readingTime: 6,
    publishedAt: "2024-08-22",
  },
  {
    slug:        "lgbtq-safety-southern-africa",
    title:       "LGBTQ+ Travel in Southern Africa: A Practical Assessment",
    category:    "lgbtq-travel-intelligence",
    excerpt:
      "A country-by-country review of legal standing, enforcement reality, and practical safety for LGBTQ+ travelers planning private journeys across the southern African region.",
    readingTime: 9,
    publishedAt: "2024-08-05",
  },
  {
    slug:        "conservation-private-travel",
    title:       "What Private Travel Owes Conservation",
    category:    "conservation-and-culture",
    excerpt:
      "The relationship between high-value travel and conservation is more complicated than most operators admit. A clear-eyed account of what responsible access actually requires.",
    readingTime: 6,
    publishedAt: "2024-07-18",
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
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[clamp(40px,6vw,80px)] items-end">
            <div>
              <Reveal><p className="label-tag mb-6">Mason &amp; Wild</p></Reveal>
              <Reveal delay={1}>
                <h1 className="font-serif font-light text-display-2xl text-stone-900" id="journal-heading">
                  The <em>Journal</em>
                </h1>
              </Reveal>
            </div>
            <Reveal delay={2}>
              <p className="text-base font-light text-stone-500 leading-relaxed max-w-[480px]">
                Field notes, territory intelligence, and perspectives on private African travel.
                Written for those who read carefully before they travel.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <div className="border-b border-stone-200 overflow-x-auto" aria-label="Journal categories">
        <div className="flex min-w-max px-[var(--px)]">
          <Link href="/journal" aria-current="page" className="py-4 pr-8 text-2xs font-normal tracking-wide uppercase text-stone-900 border-b-[1.5px] border-stone-900 whitespace-nowrap">
            All
          </Link>
          {CATEGORY_ORDER.map((cat) => (
            <Link key={cat} href={`/journal/category/${cat}`} className="py-4 px-8 text-2xs font-normal tracking-wide uppercase text-stone-400 hover:text-stone-700 border-b-[1.5px] border-transparent hover:border-stone-300 whitespace-nowrap transition-colors duration">
              {JOURNAL_CATEGORY_LABELS[cat]}
            </Link>
          ))}
        </div>
      </div>

      {featured && (
        <section className="border-b border-stone-200" aria-labelledby="featured-heading">
          <Reveal>
            <Link href={`/journal/${featured.slug}`} className="group grid grid-cols-1 md:grid-cols-[3fr_2fr] items-stretch">
              {featured.img && (
                <div className="overflow-hidden bg-stone-100">
                  <Image src={featured.img.src} alt={featured.img.alt} width={1200} height={800}
                    className="w-full aspect-[3/2] md:aspect-auto md:h-full object-cover object-center transition-transform duration-[900ms] ease-out group-hover:scale-[1.025]"
                    priority
                  />
                </div>
              )}
              <div className="flex flex-col justify-end px-[clamp(32px,5vw,64px)] py-[clamp(40px,5vw,64px)] bg-page-subtle group-hover:bg-stone-100 transition-colors duration">
                <div className="flex items-center gap-4 mb-6">
                  <span className="label-tag text-forest">Most Recent</span>
                  <span className="w-px h-3 bg-stone-300" aria-hidden="true" />
                  <span className="label-tag">{JOURNAL_CATEGORY_LABELS[featured.category]}</span>
                  <span className="w-px h-3 bg-stone-300" aria-hidden="true" />
                  <span className="label-tag">{featured.readingTime} min</span>
                </div>
                <h2 className="font-serif font-light text-display-md text-stone-900 leading-[1.08] tracking-[-0.012em] mb-5 group-hover:text-forest transition-colors duration" id="featured-heading">
                  {featured.title}
                </h2>
                <p className="text-base font-light text-stone-500 leading-relaxed mb-8">
                  {featured.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <time dateTime={featured.publishedAt} className="label-tag">{formatDate(featured.publishedAt)}</time>
                  <span className="text-2xs font-normal tracking-wide uppercase text-stone-400 border-b border-stone-300 group-hover:text-stone-900 group-hover:border-stone-900 pb-[2px] transition-colors duration">
                    Read →
                  </span>
                </div>
              </div>
            </Link>
          </Reveal>
        </section>
      )}

      <section className="section" aria-label="Journal articles">
        <div className="container-site">
          {CATEGORY_ORDER.map((cat) => {
            const articles = byCategory[cat];
            if (!articles?.length) return null;
            return (
              <div key={cat} className="mb-[clamp(56px,8vw,96px)] last:mb-0">
                <Reveal>
                  <div className="flex items-baseline justify-between gap-6 mb-8 pb-5 border-b border-stone-200">
                    <h2 className="font-serif font-light text-display-sm text-stone-900 tracking-[-0.01em]">
                      <em>{JOURNAL_CATEGORY_LABELS[cat]}</em>
                    </h2>
                    <Link href={`/journal/category/${cat}`} className="text-2xs font-normal tracking-wide uppercase text-stone-400 hover:text-stone-700 border-b border-stone-200 hover:border-stone-500 pb-[2px] transition-colors duration whitespace-nowrap">
                      View All
                    </Link>
                  </div>
                </Reveal>
                <div className="flex flex-col gap-0">
                  {articles.map((article, i) => (
                    <Reveal key={article.slug} delay={(i % 3) as 0 | 1 | 2}>
                      <Link href={`/journal/${article.slug}`} className="group grid grid-cols-1 md:grid-cols-[1fr_auto] gap-6 md:gap-16 items-start border-t border-stone-200 py-8 last:border-b last:border-stone-200 hover:bg-page-subtle transition-colors duration -mx-4 px-4 md:-mx-8 md:px-8">
                        <div>
                          <h3 className="font-serif font-light text-display-sm text-stone-900 leading-[1.15] tracking-[-0.01em] mb-3 group-hover:text-forest transition-colors duration">
                            {article.title}
                          </h3>
                          <p className="text-base font-light text-stone-500 leading-relaxed">{article.excerpt}</p>
                        </div>
                        <div className="flex flex-row md:flex-col items-center md:items-end gap-4 md:gap-3 md:pt-[3px] shrink-0">
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
          <div className="container-site flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
            <p className="font-serif font-light italic text-display-sm text-stone-700 leading-[1.45] tracking-[-0.01em] max-w-[520px]">
              Ready to move from reading to traveling?
            </p>
            <Button href={NAV_HREFS.journeys} variant="ghost">{CTA.viewAllJourneys}</Button>
          </div>
        </div>
      </Reveal>

      <JournalNewsletter inputId="nl-email-journal" />
    </>
  );
}
