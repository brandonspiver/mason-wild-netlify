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
    slug:        "what-it-means-to-disappear-well",
    title:       "What It Means to Disappear Well: Choosing Africa with Intention",
    category:    "lgbtq-travel-intelligence",
    excerpt:
      "For travellers who have spent years managing their visibility, the experience of being entirely unremarkable in a landscape is not a small thing. It is the only kind of luxury that costs nothing to maintain.",
    readingTime: 7,
    publishedAt: "2024-10-15",
    img: {
      src: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=1200&q=82&auto=format&fit=crop",
      alt: "Private conservancy at golden hour  -  no other travellers",
    },
  },
  {
    slug:        "okavango-dry-season",
    title:       "The Okavango in Dry Season: Why Fewer Means More",
    category:    "safari-guides",
    excerpt:
      "When the water recedes, the delta concentrates. Wildlife converges on permanent water. The silence deepens. This is the Okavango that most travellers never see.",
    readingTime: 5,
    publishedAt: "2024-09-28",
    img: {
      src: "https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=900&q=82&auto=format&fit=crop",
      alt: "Okavango Delta  -  still water and open sky at low season",
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
      alt: "Namibian desert at first light  -  infinite scale and quiet",
    },
  },
  {
    slug:        "private-conservancies-access",
    title:       "Private Conservancies and the Question of Access",
    category:    "safari-guides",
    excerpt:
      "Not all exclusivity is equal. Understanding how private conservancies differ from national parks  -  and from each other  -  is the first decision in building a serious African journey.",
    readingTime: 6,
    publishedAt: "2024-08-22",
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
            <Link key={cat} href={`/journal/category/${cat}`} className="py-4 px-8 text-2xs font-normal tracking-wide uppercase text-stone-400 hover:text-stone-700 border-b-[1.5px] border-transparent hover:border-stone-300 whitespace-nowrap transition-colors duration">
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
