import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
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
  ArticleInline,
  FullArticle,
} from "@/types/journal";

const JOURNAL_SHELL =
  "mx-auto w-full max-w-[1720px] px-[clamp(18px,3vw,54px)]";
const JOURNAL_GRID =
  "grid grid-cols-1 lg:grid-cols-[220px_minmax(0,820px)] xl:grid-cols-[240px_minmax(0,900px)_minmax(120px,1fr)] gap-[clamp(28px,4vw,76px)]";

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
        slug:        "lgbtq-travel-southern-africa",
        title:       "LGBTQ+ Travel in Southern Africa: Where It Works, Where It Doesn't, and Why",
        category:    "lgbtq-travel-intelligence",
        excerpt:
          "A practical luxury guide to LGBTQ+ travel in Southern Africa, covering South Africa, Botswana, Namibia, Mozambique, Zambia, and Zimbabwe through the lens of privacy, hosting culture, and real-world trip design.",
        readingTime: 9,
        publishedAt: "2024-08-05",
      },
    ],
  },
  "lgbtq-travel-southern-africa": {
    slug:        "lgbtq-travel-southern-africa",
    title:       "LGBTQ+ Travel in Southern Africa: Where It Works, Where It Doesn't, and Why",
    subtitle:
      "A practical luxury guide to the part of Southern Africa that works best in practice - and the part that requires a firmer hand.",
    seoTitle:    "LGBTQ+ Travel in Southern Africa: Where It Works, Where It Doesn't, and Why",
    metaTitle:   "LGBTQ+ Travel in Southern Africa | Practical Luxury Guide",
    metaDescription:
      "A practical luxury guide to LGBTQ+ travel in Southern Africa, covering South Africa, Botswana, Namibia, Mozambique, Zambia, and Zimbabwe with a focus on privacy, hosting culture, and real-world trip design.",
    category:    "lgbtq-travel-intelligence",
    excerpt:
      "A practical luxury guide to LGBTQ+ travel in Southern Africa, covering South Africa, Botswana, Namibia, Mozambique, Zambia, and Zimbabwe through the lens of privacy, hosting culture, and real-world trip design.",
    readingTime: 9,
    publishedAt: "2024-08-05",
    img: {
      src:     "/journal/lgbtq-travel-southern-africa/hero.jpg",
      alt:     "Lantern-lit lodge deck overlooking the Southern African landscape at dusk",
      caption: "Southern Africa",
      position: "center",
    },
    body: [
      {
        type: "p-lead",
        text: "When people search for LGBTQ+ travel in Southern Africa, they usually begin with one question: is it safe? It is a fair question, but it is not a complete one.",
      },
      {
        type: "p",
        text: "For Mason & Wild, the better question is whether a destination can be trusted in practice. That means legal standing, yes, but also hosting culture, discretion, route design, staff maturity, and whether a couple can move through a journey without unnecessary friction. A destination does not become the right fit because its tourism board says the right thing. It becomes the right fit when the experience on the ground is calm, polished, and intelligently handled. South Africa remains the strongest all-round option in this group, Botswana is more workable than many travellers assume, Namibia sits in a mixed middle ground, Mozambique can work in the right format, and Zambia and Zimbabwe require far more caution.",
      },
      {
        type: "p",
        text: "As a gay travel specialist from Cape Town designing private journeys across Southern Africa, I do not look at these destinations through ideology or marketing language. I look at them through lived regional knowledge, supplier vetting, and the standard of care I would expect for discerning LGBTQ+ travellers. Privacy, hosting culture, and on-the-ground handling matter more than slogans. That is the assessment that follows.",
      },
      {
        type: "h2",
        text: "Which Southern African countries are best for LGBTQ+ travel?",
      },
      {
        type: "p",
        text: "For LGBTQ+ luxury travel in Southern Africa, South Africa is the clear leader. It offers the strongest legal framework in the region, and in the right parts of the country, the most mature hospitality environment too. Botswana is a credible safari choice when the trip is designed properly. Namibia can work well for privacy-led journeys, but the legal and social picture is still uneven. Mozambique is viable as a carefully handled beach extension. Zambia and Zimbabwe are the caution category, not the confident recommendation category.",
      },
      {
        type: "h2",
        text: "At a glance: LGBTQ+ travel in Southern Africa",
      },
      {
        type: "table",
        caption: "Country comparison",
        columns: ["Country", "Legal picture", "Social reality", "Best fit", "Mason & Wild view"],
        rows: [
          {
            cells: [
              "South Africa",
              "Strongest legal protections in the region, with same-sex unions recognised and a more established rights framework than its neighbours.",
              "Varies by area, but high-end hospitality is generally mature and professional.",
              "City, winelands, safari, coast",
              "Best all-round option",
            ],
          },
          {
            cells: [
              "Botswana",
              "Same-sex sexual activity is no longer prohibited by law.",
              "More conservative socially than South Africa, particularly beyond private safari settings.",
              "Privacy-led safari",
              "Strong when routed well",
            ],
          },
          {
            cells: [
              "Namibia",
              "Mixed legal environment, with a broader picture that remains uneven rather than settled.",
              "Conservative attitudes remain, especially in rural areas.",
              "Desert and lodge-based journeys",
              "Promising but mixed",
            ],
          },
          {
            cells: [
              "Mozambique",
              "No laws against same-sex sexual activity, but wider security and operating conditions vary sharply by region.",
              "Maputo is generally easier than remote areas, and the wider context still matters.",
              "Beach extension with careful routing",
              "Selective, not broad-brush",
            ],
          },
          {
            cells: [
              "Zimbabwe",
              "Restrictive legal environment.",
              "Conservative social climate.",
              "Niche appeal for some travellers, but not an easy fit",
              "Caution",
            ],
          },
          {
            cells: [
              "Zambia",
              "Same-sex sexual activity is illegal.",
              "Restrictive legal environment outweighs hospitality arguments.",
              "Not one to soften or romanticise",
              "Caution",
            ],
          },
        ],
      },
      {
        type: "h2",
        text: "What matters more than marketing language",
      },
      {
        type: "p",
        text: "Luxury LGBTQ+ travel is not judged by whether a property uses the word \"inclusive\" on a website. It is judged by whether the experience feels easy without becoming performative.",
      },
      {
        type: "p",
        text: "That comes down to a few practical things. Can a couple check in without awkwardness? Do the hosts know how to read the room? Is the route built around privacy and ease, or does it put travellers into unnecessary friction points? Does the destination feel mature enough that guests are not constantly managing themselves?",
      },
      {
        type: "p",
        text: "These are the questions that matter more than brochures. They are also why legal status alone is never enough.",
      },
      {
        type: "h2",
        text: "South Africa: the strongest all-round choice for LGBTQ+ travel in Southern Africa",
      },
      {
        type: "p",
        text: "South Africa remains the benchmark.",
      },
      {
        type: "p",
        text: "That legal framework matters because it sets a baseline for how systems are expected to function, not just individuals. In practical travel terms, South Africa also has the region's deepest hospitality infrastructure. That means stronger villa product, more sophisticated boutique hotels, better private guiding, stronger restaurant culture, and a wider pool of suppliers who understand how to host without making a guest feel observed or managed.",
      },
      {
        type: "p",
        content: [
          { type: "text", text: "It is also the country where route design can become genuinely layered. Cape Town, the Winelands, certain private safari environments, and selected coastal extensions allow for journeys that feel both luxurious and socially easier than elsewhere in the region. That does not mean every corner of South Africa feels the same. It does mean that if you want the highest-confidence entry point for LGBTQ+ luxury travel in Southern Africa, South Africa is where I would start. For a South Africa-led rhythm, " },
          { type: "link", text: "The Social Shift", href: "/the-social" },
          { type: "text", text: " remains the clearest expression of the country's social confidence, while " },
          { type: "link", text: "The Romantic", href: "/journeys/the-romantic" },
          { type: "text", text: " shows how South Africa can be paired with a softer coastal chapter without losing control of the journey." },
        ],
      },
      {
        type: "image",
        image: {
          src: "/journal/lgbtq-travel-southern-africa/south-africa.jpg",
          alt: "Private South Africa villa terrace with pool and mountain backdrop",
          caption: "South Africa",
        },
      },
      {
        type: "h2",
        text: "Botswana: excellent for safari, but only with the right handling",
      },
      {
        type: "p",
        text: "Botswana is often underestimated in LGBTQ+ travel conversations.",
      },
      {
        type: "p",
        text: "That is exactly why Botswana needs nuance. The legal picture is more workable than many assume. The social picture is more conservative than the glossy safari world might imply. In practice, Botswana is strongest when it is experienced through private, well-run camps where discretion is already part of the operating culture. That matters because safari is naturally privacy-led. Guests spend most of their time in tightly managed environments with strong service standards, limited public exposure, and highly curated logistics.",
      },
      {
        type: "p",
        content: [
          { type: "text", text: "For LGBTQ+ travellers who care about wildlife, silence, space, and a refined sense of retreat, Botswana can be exceptional. But it is not a destination I would sell on abstract friendliness. I would sell it on intelligent planning, supplier confidence, and the fact that the best camps know how to host serious travellers properly. That is why " },
          { type: "link", text: "The Intimate", href: "/journeys/the-intimate" },
          { type: "text", text: " works so well as a model: privacy is not added afterwards, it is built into the route from the start." },
        ],
      },
      {
        type: "image",
        image: {
          src: "/journal/lgbtq-travel-southern-africa/botswana.jpg",
          alt: "Botswana mokoro gliding across the water at sunset",
          caption: "Botswana",
        },
      },
      {
        type: "h2",
        text: "Namibia: beautiful, workable, and still uneven",
      },
      {
        type: "p",
        text: "Namibia is one of the most visually compelling destinations in Southern Africa, and for privacy-led travellers it can work extremely well. But the legal and social picture is still mixed.",
      },
      {
        type: "p",
        text: "In practical terms, Namibia is often at its best for LGBTQ+ luxury travellers when the trip is built around landscape, distance, and lodge-based seclusion. It is not a destination I would frame through public expression. It is a destination I would frame through space, beauty, and a route that lets people exhale. The right camps and lodges can make the experience feel calm and almost meditative. The country itself, however, should still be read with realism rather than wishful thinking.",
      },
      {
        type: "p",
        content: [
          { type: "text", text: "That is also why " },
          { type: "link", text: "The Adventure", href: "/journeys/the-adventure" },
          { type: "text", text: " is the right kind of Namibian proposition. It leans into distance, design, and private handling rather than asking Namibia to play a role it does not naturally occupy." },
        ],
      },
      {
        type: "image",
        image: {
          src: "/journal/lgbtq-travel-southern-africa/namibia.jpg",
          alt: "Luxury desert dining scene overlooking Namibia's dunes",
          caption: "Namibia",
        },
      },
      {
        type: "h2",
        text: "Mozambique: best treated as a selective extension, not a blanket recommendation",
      },
      {
        type: "p",
        text: "Mozambique can work beautifully, but only when handled with precision.",
      },
      {
        type: "p",
        text: "That combination is important. Mozambique is not one simple story. In the right luxury format, usually as a well-managed coastal or island extension paired with stronger routing elsewhere, it can feel soft, private, and restorative. But it is not the kind of destination to treat casually. Security, routing, lodge choice, and local operating confidence all matter more than the postcard version.",
      },
      {
        type: "p",
        content: [
          { type: "text", text: "For LGBTQ+ travellers, Mozambique is best understood as a selective add-on for the right client, not a broad-spectrum recommendation. When it does fit, it usually fits best in the quieter extension logic seen in " },
          { type: "link", text: "The Romantic", href: "/journeys/the-romantic" },
          { type: "text", text: ", where the beach chapter is carefully controlled rather than treated as a generic add-on." },
        ],
      },
      {
        type: "image",
        image: {
          src: "/journal/lgbtq-travel-southern-africa/mozambique.jpg",
          alt: "Quiet Mozambique coastline with dunes and ocean light",
          caption: "Mozambique",
        },
      },
      {
        type: "h2",
        text: "Zambia and Zimbabwe: where caution matters more than optimism",
      },
      {
        type: "p",
        text: "For Mason & Wild, trust matters more than stretching a destination to fit the story we want to tell.",
      },
      {
        type: "p",
        text: "Zambia is not a destination I would soften with beautiful safari language. However strong an individual camp may be, the legal environment matters, and that legal environment remains restrictive enough that it should shape the recommendation rather than be buried beneath it.",
      },
      {
        type: "p",
        text: "Zimbabwe requires the same kind of adult judgment. It can contain beautiful properties and memorable landscapes, but that does not turn it into an easy fit. Rarely enforced is not the same thing as relaxed. Beautiful property is not the same thing as dependable conditions. For a brand built on discernment, those are not small distinctions. They are the whole point.",
      },
      {
        type: "h2",
        text: "What makes a destination genuinely workable for LGBTQ+ luxury travel?",
      },
      {
        type: "p",
        text: "When I assess LGBTQ+ travel in Southern Africa, I look at five things.",
      },
      {
        type: "p",
        text: "First, the legal picture. Law is not the whole story, but it sets the outer edge of risk. South Africa leads here. Botswana is materially more workable than many expect. Namibia is uneven. Mozambique is better on paper than some assume, but the broader context still matters. Zambia and Zimbabwe are caution territory.",
      },
      {
        type: "p",
        text: "Second, the hospitality layer. Strong properties do not just offer design and service. They offer emotional ease. That means discreet hosting, emotionally intelligent staff, and a team that does not force the guest to manage the atmosphere.",
      },
      {
        type: "p",
        text: "Third, the route itself. A destination can be excellent in one format and poor in another. Private transfers, city versus bush balance, beach sequencing, and degree of public exposure all matter.",
      },
      {
        type: "p",
        text: "Fourth, the difference between paper safety and felt safety. Travellers remember how a destination made them feel. The calmest journey is usually the one that has been thought through hardest.",
      },
      {
        type: "p",
        text: "Fifth, the willingness to say no. A good travel designer should not be trying to make every destination fit every client. Discernment is part of luxury.",
      },
      {
        type: "h2",
        text: "Final assessment",
      },
      {
        type: "p",
        text: "If the goal is a well-designed, high-trust LGBTQ+ journey in Southern Africa, South Africa is still the foundation. Botswana is a strong safari option for the right traveller. Namibia is compelling and often very rewarding, but it requires a more measured hand. Mozambique works best selectively, not broadly. Zambia and Zimbabwe are not the destinations I would use to make a soft argument sound attractive.",
      },
      {
        type: "p",
        text: "That may not be the most marketable version of the story. It is the most useful one.",
      },
      {
        type: "p",
        text: "And for LGBTQ+ travellers, useful is worth more than performative reassurance.",
      },
      {
        type: "h2",
        text: "Continue reading",
      },
      {
        type: "p",
        content: [
          { type: "text", text: "If this piece helped you think more clearly about where Southern Africa does and does not work, the next read should be " },
          { type: "link", text: "What It Means to Disappear Well: Choosing Africa with Intention", href: "/journal/what-it-means-to-disappear-well" },
          { type: "text", text: ", which looks at what makes a journey feel considered from the start, not simply attractive on paper." },
        ],
      },
      {
        type: "h2",
        text: "FAQ section for SEO",
      },
      {
        type: "h3",
        text: "Is Southern Africa safe for LGBTQ+ travellers?",
      },
      {
        type: "p",
        text: "Some parts are more workable than others. South Africa is the strongest all-round choice because it combines a stronger legal framework with a more mature hospitality environment. Botswana can work very well for private safari travel. Namibia and Mozambique require more careful reading. Zambia and Zimbabwe sit in the caution category.",
      },
      {
        type: "h3",
        text: "Which country in Southern Africa is best for LGBTQ+ travel?",
      },
      {
        type: "p",
        text: "South Africa is the strongest overall option in this set. It combines the clearest legal footing with the region's broadest and most sophisticated luxury travel infrastructure.",
      },
      {
        type: "h3",
        text: "Is Botswana good for LGBTQ+ safari travel?",
      },
      {
        type: "p",
        text: "Yes, Botswana can be excellent for LGBTQ+ safari travel when the trip is privacy-led and routed through the right camps.",
      },
      {
        type: "h3",
        text: "Is Namibia LGBTQ+ friendly?",
      },
      {
        type: "p",
        text: "Namibia is better described as mixed than simply friendly.",
      },
      {
        type: "h3",
        text: "Can LGBTQ+ travellers go to Mozambique?",
      },
      {
        type: "p",
        text: "Yes, but it should be handled selectively.",
      },
      {
        type: "h3",
        text: "Why does Mason & Wild focus so much on privacy and hosting culture?",
      },
      {
        type: "p",
        text: "Because the real quality of a journey is shaped by more than laws. Supplier maturity, route design, discretion, and on-the-ground handling often matter more to the traveller's lived experience than whether a destination has learned the right marketing language.",
      },
    ],
    relatedJourneys: [
      {
        slug:    "the-intimate",
        name:    "The Intimate",
        outcome: "Solitude",
        img: {
          src: "/journeys/the-intimate-card.png",
          alt: "The Intimate journey card",
        },
      },
      {
        slug:    "the-romantic",
        name:    "The Romantic",
        outcome: "Wonder",
        img: {
          src: "/journeys/the-romantic-card.png",
          alt: "The Romantic journey card",
        },
      },
      {
        slug:    "the-adventure",
        name:    "The Adventure",
        outcome: "Adventure",
        img: {
          src: "/journeys/the-adventure/ZS (5).jpg",
          alt: "The Adventure journey card",
        },
      },
    ],
    relatedArticles: [
      {
        slug:        "what-it-means-to-disappear-well",
        title:       "What It Means to Disappear Well: Choosing Africa with Intention",
        category:    "lgbtq-travel-intelligence",
        excerpt:
          "For travellers who have spent years managing their visibility, the experience of being entirely unremarkable in a landscape is not a small thing.",
        readingTime: 7,
        publishedAt: "2024-10-15",
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

function renderInlineContent(content: readonly ArticleInline[]) {
  return content.map((item, index) => {
    switch (item.type) {
      case "text":
        return <Fragment key={index}>{item.text}</Fragment>;
      case "link":
        if (item.external) {
          return (
            <a
              key={index}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className="text-stone-700 underline decoration-stone-300 underline-offset-4 transition-colors duration hover:text-forest hover:decoration-forest/40"
            >
              {item.text}
            </a>
          );
        }

        return (
          <Link
            key={index}
            href={item.href}
            className="text-stone-700 underline decoration-stone-300 underline-offset-4 transition-colors duration hover:text-forest hover:decoration-forest/40"
          >
            {item.text}
          </Link>
        );
      case "em":
        return <em key={index}>{item.text}</em>;
      case "strong":
        return <strong key={index} className="font-normal text-stone-800">{item.text}</strong>;
      default:
        return null;
    }
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
    title:       article.metaTitle ?? article.title,
    description: article.metaDescription ?? article.excerpt,
    openGraph: {
      title:         article.seoTitle ?? article.title,
      description:   article.metaDescription ?? article.excerpt,
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
  const articleTitleMarkup =
    article?.slug === "lgbtq-travel-southern-africa" ? (
      <>
        <span>LGBTQ+ Travel in Southern Africa:</span>{" "}
        <span className="italic text-[0.82em] tracking-[-0.016em]">
          Where It Works, Where It Doesn&apos;t, and Why
        </span>
      </>
    ) : (
      article?.title
    );

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
        className="pt-[calc(68px+clamp(34px,5vw,72px))] pb-[clamp(30px,4vw,48px)] border-b border-stone-200"
        aria-labelledby="article-title"
      >
        <div className={JOURNAL_SHELL}>
          <div className={`${JOURNAL_GRID} items-end`}>
            <div className="max-w-[220px]">
              <Reveal>
                <div className="flex items-center gap-3 flex-wrap mb-10 lg:mb-14">
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
                <div className="border-t border-stone-200 pt-5 space-y-6">
                  <div>
                    <p className="label-tag mb-2">Published</p>
                    <time
                      dateTime={article.publishedAt}
                      className="text-sm font-light text-stone-600 leading-relaxed"
                    >
                      {formatDate(article.publishedAt)}
                    </time>
                  </div>
                  <div>
                    <p className="label-tag mb-2">Reading Time</p>
                    <p className="text-sm font-light text-stone-600 leading-relaxed">
                      {article.readingTime} min read
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>

            <div className="min-w-0 xl:max-w-[980px]">
              <Reveal delay={1}>
                <h1
                  className="font-serif font-light text-stone-900 text-[clamp(2.55rem,5vw,5.75rem)] leading-[1.02] tracking-[-0.02em] mb-6"
                  id="article-title"
                >
                  {articleTitleMarkup}
                </h1>
              </Reveal>

              {article.subtitle && (
                <Reveal delay={2}>
                  <p className="font-serif font-light italic text-[clamp(1.05rem,1.5vw,1.35rem)] text-stone-500 leading-[1.75] max-w-[720px]">
                    {article.subtitle}
                  </p>
                </Reveal>
              )}
            </div>
          </div>
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
          <div className="border-b border-stone-200">
            <div className={`${JOURNAL_SHELL} py-[clamp(22px,3vw,36px)]`}>
              <div className="overflow-hidden border border-stone-200 bg-page-subtle">
                <Image
                  src={article.img.src}
                  alt={article.img.alt}
                  width={2400}
                  height={1080}
                  className="w-full aspect-[16/7] xl:aspect-[18/7] object-cover object-center"
                  style={{ objectPosition: article.img.position ?? "center" }}
                  priority
                />
              </div>
              {article.img.caption && (
                <div className="mt-4">
                  <span className="label-tag">{article.img.caption}</span>
                </div>
              )}
            </div>
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
      <article className="py-[clamp(72px,9vw,128px)]" aria-labelledby="article-title">
        <div className={JOURNAL_SHELL}>
          <div className={JOURNAL_GRID}>
            <aside className="hidden lg:block">
              <div className="lg:sticky lg:top-[112px] max-w-[220px] space-y-8">
                <div>
                  <p className="label-tag mb-3">Filed Under</p>
                  <p className="text-sm font-light text-stone-600 leading-relaxed">
                    {JOURNAL_CATEGORY_LABELS[article.category]}
                  </p>
                </div>
                <div className="border-t border-stone-200 pt-5">
                  <p className="label-tag mb-3">Perspective</p>
                  <p className="text-sm font-light text-stone-500 leading-relaxed">
                    Written from Mason &amp; Wild&apos;s privacy-first, Southern Africa-led point of view.
                  </p>
                </div>
              </div>
            </aside>

            <div className="min-w-0 xl:max-w-[900px]">
            {article.body.map((block: ArticleBodyBlock, i: number) => {
              switch (block.type) {
                case "p-lead":
                  return (
                    <Reveal key={i}>
                      <p className="font-serif font-light text-[clamp(1.75rem,2.45vw,2.7rem)] text-stone-800 leading-[1.45] tracking-[-0.012em] mb-11">
                        {renderInlineContent(
                          block.content ?? [{ type: "text", text: block.text ?? "" }],
                        )}
                      </p>
                    </Reveal>
                  );
                case "p":
                  return (
                    <Reveal key={i}>
                      <p className="text-[clamp(1rem,1.1vw,1.08rem)] font-light text-stone-600 leading-[1.92] mb-8 max-w-[760px]">
                        {renderInlineContent(
                          block.content ?? [{ type: "text", text: block.text ?? "" }],
                        )}
                      </p>
                    </Reveal>
                  );
                case "h2":
                  return (
                    <Reveal key={i}>
                      <h2 className="font-serif font-light text-[clamp(2rem,2.8vw,3.15rem)] text-stone-900 leading-[1.08] tracking-[-0.018em] mt-[clamp(56px,7vw,88px)] mb-7 max-w-[900px]">
                        {block.text}
                      </h2>
                    </Reveal>
                  );
                case "h3":
                  return (
                    <Reveal key={i}>
                      <h3 className="font-serif font-light italic text-[clamp(1.15rem,1.5vw,1.45rem)] text-stone-800 leading-[1.45] mt-12 mb-5 max-w-[760px]">
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
                      <blockquote className="ml-0 pl-8 my-12 border-l border-stone-200">
                        <p className="font-serif font-light italic text-stone-500 leading-[1.8] text-[1.05rem] max-w-[720px]">
                          {renderInlineContent(
                            block.content ?? [{ type: "text", text: block.text ?? "" }],
                          )}
                        </p>
                      </blockquote>
                    </Reveal>
                  );
                case "image":
                  return (
                    <Reveal key={i}>
                      <figure className="my-[clamp(52px,7vw,92px)] xl:-mr-[min(12vw,180px)]">
                        <div className="overflow-hidden border border-stone-200 bg-page-subtle">
                          <Image
                            src={block.image.src}
                            alt={block.image.alt}
                            width={1600}
                            height={1000}
                            className="w-full object-cover object-center"
                            style={{
                              aspectRatio: block.aspect ?? "16 / 10",
                              objectPosition: block.image.position ?? "center",
                            }}
                            loading="lazy"
                          />
                        </div>
                        {(block.image.caption || block.description) && (
                          <figcaption className="mt-4">
                            {block.image.caption && (
                              <p className="label-tag mb-2">{block.image.caption}</p>
                            )}
                            {block.description && (
                              <p className="text-sm font-light text-stone-500 leading-relaxed">
                                {block.description}
                              </p>
                            )}
                          </figcaption>
                        )}
                      </figure>
                    </Reveal>
                  );
                case "table":
                  return (
                    <Reveal key={i}>
                      <div className="my-[clamp(52px,7vw,92px)] xl:-mr-[min(12vw,180px)] border-t border-b border-stone-200">
                        {block.caption && (
                          <div className="pt-5">
                            <p className="label-tag">{block.caption}</p>
                          </div>
                        )}
                        <div className="overflow-x-auto -mx-4 px-4 md:mx-0 md:px-0">
                          <table className="min-w-[840px] w-full border-collapse">
                            <thead>
                              <tr className="border-b border-stone-200">
                                {block.columns.map((column) => (
                                  <th
                                    key={column}
                                    className="py-4 pr-6 text-left text-2xs font-normal tracking-[0.18em] uppercase text-stone-400 align-bottom"
                                  >
                                    {column}
                                  </th>
                                ))}
                              </tr>
                            </thead>
                            <tbody>
                              {block.rows.map((row, rowIndex) => (
                                <tr
                                  key={`${row.cells[0]}-${rowIndex}`}
                                  className={
                                    rowIndex === block.rows.length - 1
                                      ? ""
                                      : "border-b border-stone-200"
                                  }
                                >
                                  {row.cells.map((cell, cellIndex) => (
                                    <td
                                      key={`${row.cells[0]}-${cellIndex}`}
                                      className={`py-5 pr-6 align-top text-sm font-light leading-relaxed ${
                                        cellIndex === 0 ? "text-stone-900" : "text-stone-600"
                                      }`}
                                    >
                                      {cell}
                                    </td>
                                  ))}
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </Reveal>
                  );
                default:
                  return null;
              }
            })}
            </div>
          </div>
        </div>
      </article>

      {/* ─── Commercial bridge ────────────────────────────────────────── */}
      {article.relatedJourneys && article.relatedJourneys.length > 0 && (
        <section
          className="border-t border-stone-200 bg-page-subtle"
          aria-labelledby="related-journeys-heading"
        >
          <div className={`${JOURNAL_SHELL} py-[var(--section-gap-sm)]`}>
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
                        Explore
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
          <div className={`${JOURNAL_SHELL} py-[var(--section-gap-sm)]`}>
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
                    className="group grid grid-cols-1 md:grid-cols-[minmax(0,1fr)_auto] gap-6 md:gap-14 items-start border-t border-stone-200 py-8 last:border-b last:border-stone-200 hover:bg-page-subtle transition-colors duration -mx-3 px-3 md:-mx-5 md:px-5"
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
