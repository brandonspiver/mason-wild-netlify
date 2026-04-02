import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { JournalNewsletter } from "@/components/journal/JournalNewsletter";
import {
  JOURNAL_CATEGORY_LABELS,
  NAV_HREFS,
  CTA,
} from "@/lib/constants";
import type {
  ArticleSummary,
  ArticleBodyBlock,
  FullArticle,
} from "@/types/journal";

// ─── Article data ─────────────────────────────────────────────────────────────
// In production: replace with getArticleBySlug(slug) from lib/journal.ts,
// which reads from contentlayer's allArticles and calls notFound() when
// no matching slug is found. The FullArticle type is the migration target  - 
// nothing in the render logic changes when the data source is swapped.

const ARTICLES: Record<string, FullArticle> = {
  "what-it-means-to-disappear-well": {
    slug:        "what-it-means-to-disappear-well",
    title:       "What It Means to Disappear Well: Choosing Africa with Intention",
    subtitle:    "On the specific luxury of being unremarkable in a landscape.",
    category:    "lgbtq-travel-intelligence",
    excerpt:
      "For travellers who have spent years managing their visibility, the experience of being entirely unremarkable in a landscape is not a small thing.",
    readingTime: 7,
    publishedAt: "2024-10-15",
    img: {
      src:     "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=2400&q=82&auto=format&fit=crop",
      alt:     "Private conservancy at golden hour  -  Botswana",
      caption: "Botswana",
    },
    body: [
      {
        type: "p-lead",
        text: "There is a particular experience available in certain remote African landscapes that has nothing to do with wildlife, guides, or the quality of the lodge. It is the experience of being entirely unremarkable  -  of existing in a space where no one is watching, no one is assessing, and the only judgment being exercised is your own.",
      },
      {
        type: "p",
        text: "For travellers who have spent years managing their visibility in public spaces  -  calibrating how much of themselves to bring, reading rooms before entering them, carrying a background layer of social calculation that most travellers simply do not have  -  this experience is not a small thing. It is, in fact, the only kind of luxury that costs nothing to maintain once you have it.",
      },
      {
        type: "h2",
        text: "Why Africa, specifically",
      },
      {
        type: "p",
        text: "The question worth asking is why Africa produces this experience more reliably than other luxury travel destinations. The answer is not that Africa is more welcoming in any general sense  -  the continent is not a monolith, and the legal and social landscape for LGBTQ+ travellers varies enormously by country, by region, and by the specific properties and people involved in any given journey.",
      },
      {
        type: "p",
        text: "The answer is scale and distance. The private conservancies of Botswana, the remote rangelands of Namibia, the isolated lodges of the Zambian bush  -  these are places where the social fabric that produces visibility pressure simply does not exist. There is no public. There is no street. There are no restaurants full of strangers, no hotel lobbies with ambient social awareness. There is the landscape, the wildlife, the guide, and you.",
      },
      {
        type: "blockquote",
        text: "The removal of the social stage is not incidental to the experience. For many travellers, it is the experience.",
      },
      {
        type: "h2",
        text: "The work that makes this possible",
      },
      {
        type: "p",
        text: "What is less discussed is the specific operational work required to ensure that this experience extends beyond the landscape itself  -  into the lodge, into the relationship with the guide, into the practical texture of each day. The physical remoteness of a destination does not automatically produce a welcoming environment. It produces an isolated one, which is not the same thing.",
      },
      {
        type: "p",
        text: "The staff of a private camp, the assigned guide, the culture of a given property  -  these are the variables that determine whether a physically remote location becomes a genuinely private one. Assessing those variables requires direct relationships, recent knowledge, and the willingness to remove a property from consideration when the assessment changes.",
      },
      {
        type: "h2",
        text: "Choosing with intention",
      },
      {
        type: "p",
        text: "Choosing Africa with intention means not relying on general reputation or industry accreditation to answer these questions. It means building a journey from a starting point of verified knowledge  -  territory by territory, property by property  -  rather than selecting from a catalogue and hoping the details hold.",
      },
      {
        type: "p",
        text: "For most travellers, this is not work they should have to do themselves. Finding and maintaining that knowledge is the specific value of a travel specialist who has built their practice around it. The luxury is not only in the landscape. It is in arriving knowing that the work has already been done.",
      },
    ],
    relatedJourneys: [
      {
        slug:    "the-intimate",
        name:    "The Intimate",
        outcome: "Solitude",
        img: {
          src: "https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=800&q=82&auto=format&fit=crop",
          alt: "Okavango Delta at dawn",
        },
      },
    ],
    relatedArticles: [
      {
        slug:        "lgbtq-safety-southern-africa",
        title:       "LGBTQ+ Travel in Southern Africa: A Practical Assessment",
        category:    "lgbtq-travel-intelligence",
        excerpt:     "A country-by-country review of legal standing, enforcement reality, and practical safety for LGBTQ+ travellers.",
        readingTime: 9,
        publishedAt: "2024-08-05",
      },
      {
        slug:        "on-solitude-and-silence",
        title:       "On Solitude and the Architecture of Silence",
        category:    "private-travel-philosophy",
        excerpt:     "There is a particular quality to silence in a landscape that dwarfs you. It is not emptiness. It is presence without obligation.",
        readingTime: 4,
        publishedAt: "2024-09-10",
      },
    ],
  },
};

// ─── Helpers ──────────────────────────────────────────────────────────────────

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric", month: "long", year: "numeric",
  });
}

// ─── Static params ────────────────────────────────────────────────────────────

export function generateStaticParams() {
  return Object.keys(ARTICLES).map((slug) => ({ slug }));
}

// ─── Metadata ─────────────────────────────────────────────────────────────────

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const article = ARTICLES[params.slug];
  if (!article) return { title: "Article Not Found" };

  return {
    title:       article.title,
    description: article.excerpt,
    openGraph: {
      title:         article.title,
      description:   article.excerpt,
      type:          "article",
      publishedTime: article.publishedAt,
      images: article.img
        ? [{ url: article.img.src, alt: article.img.alt }]
        : undefined,
    },
  };
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function ArticlePage({
  params,
}: {
  params: { slug: string };
}) {
  const article = ARTICLES[params.slug];

  // In production: replace with notFound() after getArticleBySlug() returns
  // undefined. notFound() is imported but guarded here so the scaffold renders.
  // When contentlayer is wired: if (!article) notFound();
  if (!article) {
    notFound();
  }

  return (
    <>
      {/* ─── Article header ───────────────────────────────────────────── */}
      <header
        className="pt-[calc(68px+clamp(48px,6vw,80px))] pb-[clamp(40px,5vw,64px)] border-b border-stone-200"
        aria-labelledby="article-title"
      >
        <div className="container-site max-w-[860px] mx-auto">
          <Reveal>
            <div className="flex items-center gap-3 flex-wrap mb-8">
              <Link
                href="/journal"
                className="text-2xs tracking-wide uppercase text-stone-400 hover:text-stone-700 transition-colors duration"
              >
                The Journal
              </Link>
              <span className="text-stone-300 text-2xs" aria-hidden="true">/</span>
              <Link
                href={`/journal/category/${article.category}`}
                className="text-2xs tracking-wide uppercase text-stone-400 hover:text-stone-700 transition-colors duration"
              >
                {JOURNAL_CATEGORY_LABELS[article.category]}
              </Link>
            </div>
          </Reveal>

          <Reveal delay={1}>
            <h1
              className="font-serif font-light text-display-xl text-stone-900 leading-[1.05] tracking-[-0.018em] mb-5"
              id="article-title"
            >
              {article.title}
            </h1>
          </Reveal>

          {article.subtitle && (
            <Reveal delay={2}>
              <p className="font-serif font-light italic text-lg text-stone-500 leading-relaxed mb-8">
                {article.subtitle}
              </p>
            </Reveal>
          )}

          <Reveal delay={2}>
            <div className="flex items-center gap-5">
              <time dateTime={article.publishedAt} className="label-tag">
                {formatDate(article.publishedAt)}
              </time>
              <span className="w-px h-3 bg-stone-300" aria-hidden="true" />
              <span className="label-tag">{article.readingTime} min read</span>
            </div>
          </Reveal>
        </div>
      </header>

      {/* ─── Hero image ───────────────────────────────────────────────── */}
      {/*
        Caption uses article.img.caption if provided  -  a short editorial
        location or territory note, not the full alt text.
        If no caption is set, the caption area is omitted entirely.
        alt text remains on the img element for accessibility.
      */}
      {article.img && (
        <Reveal>
          <div className="relative w-full overflow-hidden border-b border-stone-200">
            <Image
              src={article.img.src}
              alt={article.img.alt}
              width={2400}
              height={1080}
              className="w-full aspect-[21/9] object-cover object-center"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-transparent to-black/10" />
            {article.img.caption && (
              <div className="absolute bottom-4 left-[var(--px)]">
                <span className="label-tag text-white/45">{article.img.caption}</span>
              </div>
            )}
          </div>
        </Reveal>
      )}

      {/* ─── Article body ─────────────────────────────────────────────── */}
      {/*
        Prose column: max-w-[680px] constrains line length to ~68ch.
        No sidebar. No sticky elements.
        In production: this block is replaced by an MDXContent component
        that renders the compiled MDX body, using the same class names.
        Each ArticleBodyBlock type maps 1:1 to the prose style below.
      */}
      <article className="py-[var(--section-gap)]" aria-labelledby="article-title">
        <div className="container-site">
          <div className="max-w-[680px] mx-auto">
            {article.body.map((block: ArticleBodyBlock, i: number) => {
              switch (block.type) {
                case "p-lead":
                  return (
                    <Reveal key={i}>
                      <p className="font-serif font-light text-display-sm text-stone-800 leading-[1.5] tracking-[-0.01em] mb-9">
                        {block.text}
                      </p>
                    </Reveal>
                  );
                case "p":
                  return (
                    <Reveal key={i}>
                      <p className="text-base font-light text-stone-600 leading-[1.85] mb-7">
                        {block.text}
                      </p>
                    </Reveal>
                  );
                case "h2":
                  return (
                    <Reveal key={i}>
                      <h2 className="font-serif font-light text-display-sm text-stone-900 leading-[1.15] tracking-[-0.01em] mt-14 mb-6">
                        {block.text}
                      </h2>
                    </Reveal>
                  );
                case "h3":
                  return (
                    <Reveal key={i}>
                      <h3 className="font-serif font-light italic text-lg text-stone-800 leading-[1.35] mt-10 mb-5">
                        {block.text}
                      </h3>
                    </Reveal>
                  );
                case "blockquote":
                  /*
                    Restrained blockquote: no left border, no increased size.
                    Indented with generous vertical space and italic text  - 
                    reads as a breath in the prose rather than a pulled
                    highlight. The distinction from body text is tonal,
                    not structural.
                  */
                  return (
                    <Reveal key={i}>
                      <blockquote className="ml-0 pl-8 my-10">
                        <p className="font-serif font-light italic text-stone-500 leading-[1.7] text-base">
                          {block.text}
                        </p>
                      </blockquote>
                    </Reveal>
                  );
                default:
                  return null;
              }
            })}
          </div>
        </div>
      </article>

      {/* ─── Commercial bridge ────────────────────────────────────────── */}
      {article.relatedJourneys && article.relatedJourneys.length > 0 && (
        <section
          className="border-t border-stone-200 bg-page-subtle"
          aria-labelledby="related-journeys-heading"
        >
          <div className="container-site py-[var(--section-gap-sm)]">
            <Reveal>
              <p className="label-tag mb-4">Planning a journey?</p>
              <h2
                className="font-serif font-light text-display-md text-stone-900 mb-12 max-w-[480px]"
                id="related-journeys-heading"
              >
                The journey this article<br />
                is <em>written towards.</em>
              </h2>
            </Reveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[2px]">
              {article.relatedJourneys.map((journey, i) => (
                <Reveal key={journey.slug} delay={(i % 3) as 0 | 1 | 2}>
                  <Link
                    href={`${NAV_HREFS.journeys}/${journey.slug}`}
                    className="group relative overflow-hidden bg-stone-800 block"
                  >
                    <Image
                      src={journey.img.src}
                      alt={journey.img.alt}
                      width={600}
                      height={500}
                      className="w-full aspect-[4/3] object-cover object-center transition-transform duration-[900ms] ease-out group-hover:scale-[1.04] group-hover:opacity-[0.87]"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[rgba(14,12,8,0.85)] via-[rgba(14,12,8,0.25)] to-transparent flex flex-col justify-end p-7">
                      <p className="label-tag text-white/40 mb-2">{journey.outcome}</p>
                      <p className="font-serif font-light text-display-sm text-white leading-[1.1] tracking-[-0.01em] mb-4">
                        <em>{journey.name}</em>
                      </p>
                      <span className="text-2xs tracking-wide uppercase text-white/0 border-b border-white/0 pb-px transition-all duration group-hover:text-white/65 group-hover:border-white/30 self-start">
                        Explore →
                      </span>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>

            <Reveal>
              <div className="mt-10">
                <Button href={NAV_HREFS.inquire} variant="ghost">
                  {CTA.requestPrivateAccess}
                </Button>
              </div>
            </Reveal>
          </div>
        </section>
      )}

      {/* ─── Related articles ─────────────────────────────────────────── */}
      {article.relatedArticles && article.relatedArticles.length > 0 && (
        <section
          className="border-t border-stone-200"
          aria-labelledby="related-articles-heading"
        >
          <div className="container-site py-[var(--section-gap-sm)]">
            <Reveal>
              <div className="flex items-baseline justify-between gap-6 mb-10 pb-5 border-b border-stone-200">
                <h2
                  className="font-serif font-light text-display-sm text-stone-900 tracking-[-0.01em]"
                  id="related-articles-heading"
                >
                  <em>Further Reading</em>
                </h2>
                <Link
                  href="/journal"
                  className="text-2xs font-normal tracking-wide uppercase text-stone-400 hover:text-stone-700 border-b border-stone-200 hover:border-stone-500 pb-[2px] transition-colors duration whitespace-nowrap"
                >
                  All Articles
                </Link>
              </div>
            </Reveal>

            <div className="flex flex-col gap-0">
              {article.relatedArticles.map((related: ArticleSummary, i: number) => (
                <Reveal key={related.slug} delay={(i % 3) as 0 | 1 | 2}>
                  <Link
                    href={`/journal/${related.slug}`}
                    className="group grid grid-cols-1 md:grid-cols-[1fr_auto] gap-6 md:gap-16 items-start border-t border-stone-200 py-8 last:border-b last:border-stone-200 hover:bg-page-subtle transition-colors duration -mx-4 px-4 md:-mx-8 md:px-8"
                  >
                    <div>
                      <p className="label-tag mb-3">
                        {JOURNAL_CATEGORY_LABELS[related.category]}
                      </p>
                      <h3 className="font-serif font-light text-display-sm text-stone-900 leading-[1.15] tracking-[-0.01em] mb-3 group-hover:text-forest transition-colors duration">
                        {related.title}
                      </h3>
                      <p className="text-base font-light text-stone-500 leading-relaxed">
                        {related.excerpt}
                      </p>
                    </div>
                    <div className="flex flex-row md:flex-col items-center md:items-end gap-4 md:gap-3 md:pt-[3px] shrink-0">
                      <time dateTime={related.publishedAt} className="label-tag whitespace-nowrap">
                        {formatDate(related.publishedAt)}
                      </time>
                      <span className="label-tag text-stone-300 whitespace-nowrap">
                        {related.readingTime} min
                      </span>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <JournalNewsletter inputId="nl-email-article" />
    </>
  );
}
