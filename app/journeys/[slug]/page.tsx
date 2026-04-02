import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { NAV_HREFS, CTA } from "@/lib/constants";
import type { JourneyData } from "@/types/journey";

// ─── Journey data ─────────────────────────────────────────────────────────────
// Keyed by slug. Each entry satisfies JourneyData from types/journey.ts.
// In production: replace with getJourneyBySlug(slug) from lib/journeys.ts,
// sourcing from contentlayer. The render logic requires no changes.

const JOURNEYS: Record<string, JourneyData> = {
  "the-intimate": {
    slug:      "the-intimate",
    outcome:   "Solitude",
    territory: "Botswana · Zambia",
    name:      "The Intimate",
    identity:  "Designed for those who need to disappear.",
    lead:
      "The Okavango in the early morning holds a particular kind of silence. This journey is built to give you access to it  -  without interruption, without audience, without schedule.",
    body: [
      "The Intimate places you inside a private concession where the only footprint in the sand is yours. No shared game drives. No communal dining unless you want it. No other travellers by design.",
      "We access territories that do not allow general tourism. The camps are occupied by one party at a time. Your guide works exclusively with you. Your daily rhythm is determined by you and the land  -  in that order.",
      "Some people come here after a period of sustained pressure. Others come because quiet is simply what they prefer. Either way, the journey does not ask you to explain yourself.",
    ],
    vettedNote:
      "Every property and guide in this journey has been assessed by Zannon directly for LGBTQ+ safety and operational privacy, reviewed before each season.",
    heroImg: {
      src: "/journeys/the-intimate.jpg",
      alt: "Okavango Delta at dawn  -  still water and open sky",
    },
    galleryImgs: [
      {
        src: "/journeys/the-intimate.jpg",
        alt: "Elephant moving through a private waterhole at dusk",
      },
      {
        src: "/journeys/the-intimate.jpg",
        alt: "Open savanna at golden hour  -  no vehicles, no structures",
      },
      {
        src: "/journeys/the-intimate.jpg",
        alt: "Private camp interior at dusk  -  lantern light and canvas",
      },
    ],
    pillars: [
      {
        key:   "access",
        title: "Exclusive-Use Access",
        body:  "Every camp and concession is occupied by your party alone during your dates. There are no shared spaces, no shared meals, no shared game drives unless you request them.",
      },
      {
        key:   "guide",
        title: "Dedicated Field Guide",
        body:  "Your guide is assigned before departure, briefed on your preferences, and works only with you throughout. Their attention is not divided between parties.",
      },
      {
        key:   "transfers",
        title: "Private Transfers",
        body:  "All movement is private  -  charter aircraft, private ground vehicles, discreet arrivals. You do not share a shuttle. You do not wait in a public terminal.",
      },
      {
        key:   "rhythm",
        title: "No Fixed Schedule",
        body:  "Your daily rhythm is yours. We provide a suggested framework based on wildlife patterns and light, but the actual hours of each day are determined by you, in the field, with your guide.",
      },
      {
        key:   "fly-camp",
        title: "Fly-Camp Access",
        body:  "Subject to season and conditions, we arrange nights in open fly-camps  -  sleeping in the landscape itself, in a location your guide selects.",
      },
      {
        key:   "support",
        title: "Specialist Availability",
        body:  "Your Mason & Wild specialist is available throughout via a private channel. Any adjustment or request is handled directly and without delay.",
      },
    ],
    flow: [
      {
        period: "Days 1–2",
        title:  "Arrival",
        body:   "Private charter from your gateway city. Afternoon arrival, an orientation walk with your guide. No programme for the first two days  -  they are for settling in.",
      },
      {
        period: "Days 3–5",
        title:  "Into the Territory",
        body:   "Early mornings when the light is best. Midday rest. Afternoons on foot if conditions allow. Your guide reads the land each day and adjusts accordingly.",
      },
      {
        period: "Days 6–7",
        title:  "Deep In",
        body:   "If the season permits, a fly-camp night in open country  -  under canvas or stars, in a location your guide has chosen. No other structure within range.",
      },
      {
        period: "Final Day",
        title:  "Departure",
        body:   "A last morning at your pace. Private return transfer, all logistics already handled. You leave having done nothing administrative for the duration.",
      },
    ],
    nextJourney: {
      slug:    "the-untamed",
      name:    "The Untamed",
      outcome: "Connection",
      img: {
        src: "/journeys/the-untamed.jpg",
        alt: "Dense riverine forest at dawn",
      },
    },
  },
};

// ─── Static params ────────────────────────────────────────────────────────────

export function generateStaticParams() {
  return Object.keys(JOURNEYS).map((slug) => ({ slug }));
}

// ─── Metadata ─────────────────────────────────────────────────────────────────

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const journey = JOURNEYS[params.slug];
  if (!journey) return { title: "Journey Not Found" };
  return {
    title:       journey.name,
    description: `${journey.identity} A private African journey through ${journey.territory}, designed for discerning LGBTQ+ travellers.`,
  };
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function JourneyDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const journey = JOURNEYS[params.slug];

  if (!journey) {
    notFound();
  }

  return (
    <>
      {/* ─── Immersive hero ──────────────────────────────────────────────── */}
      <section
        className="relative min-h-svh flex flex-col justify-end pb-[clamp(52px,9vh,96px)] overflow-hidden"
        aria-labelledby="journey-name"
      >
        <div
          className="absolute inset-0 bg-cover bg-center animate-[heroZoom_20s_cubic-bezier(0.16,1,0.3,1)_forwards]"
          style={{
            backgroundImage: [
              "linear-gradient(to bottom, rgba(14,12,8,0.08) 0%, rgba(14,12,8,0.0) 20%, rgba(14,12,8,0.45) 62%, rgba(14,12,8,0.85) 100%)",
              `url('${journey.heroImg.src}')`,
            ].join(", "),
            backgroundPosition: "center 40%",
          }}
          role="img"
          aria-label={journey.heroImg.alt}
        />

        <nav
          className="absolute top-[84px] left-[var(--px)] z-10 flex items-center gap-3"
          aria-label="Breadcrumb"
        >
          <Link
            href={NAV_HREFS.journeys}
            className="text-2xs tracking-wide uppercase text-white/45 hover:text-white/75 transition-colors duration"
          >
            Journeys
          </Link>
          <span className="text-white/25 text-2xs" aria-hidden="true">/</span>
          <span className="text-2xs tracking-wide uppercase text-white/45">
            {journey.name}
          </span>
        </nav>

        <div className="relative z-10 container-site">
          <div className="opacity-0 translate-y-4 animate-[fadeRise_0.9s_cubic-bezier(0.16,1,0.3,1)_0.3s_forwards]">
            <div className="flex items-center gap-5 mb-6">
              <span className="label-tag text-white/50">{journey.outcome}</span>
              <span className="w-px h-3 bg-white/25" aria-hidden="true" />
              <span className="label-tag text-white/50">{journey.territory}</span>
            </div>
          </div>

          <h1
            className="font-serif font-light text-display-3xl text-white mb-6 tracking-[-0.022em] opacity-0 translate-y-4 animate-[fadeRise_0.9s_cubic-bezier(0.16,1,0.3,1)_0.48s_forwards]"
            id="journey-name"
          >
            <em>{journey.name}</em>
          </h1>

          <p className="font-serif font-light italic text-xl text-white/65 max-w-[520px] leading-relaxed opacity-0 translate-y-4 animate-[fadeRise_0.9s_cubic-bezier(0.16,1,0.3,1)_0.64s_forwards]">
            {journey.identity}
          </p>
        </div>
      </section>

      {/* ─── Narrative ───────────────────────────────────────────────────── */}
      <section className="section" aria-labelledby="narrative-heading">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-[clamp(48px,7vw,96px)]">

            <div className="lg:sticky lg:top-[100px] lg:self-start">
              <Reveal>
                <p className="label-tag mb-6">Journey Identity</p>
                <p className="font-serif font-light text-display-sm text-stone-800 leading-[1.45] tracking-[-0.01em] mb-10">
                  {journey.lead}
                </p>
                <div className="border-t border-stone-200 pt-8">
                  <p className="label-tag text-forest mb-3">Vetted &amp; Verified</p>
                  <p className="text-sm font-light text-stone-500 leading-relaxed">
                    {journey.vettedNote}
                  </p>
                </div>
              </Reveal>
            </div>

            <div className="flex flex-col gap-6">
              {journey.body.map((paragraph, i) => (
                <Reveal key={i} delay={(i % 3) as 0 | 1 | 2 | 3 | 4}>
                  <p
                    className={
                      i === 0
                        ? "font-serif font-light text-display-sm text-stone-800 leading-[1.45] tracking-[-0.01em]"
                        : "text-base font-light text-stone-500 leading-relaxed"
                    }
                  >
                    {paragraph}
                  </p>
                </Reveal>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ─── Gallery ─────────────────────────────────────────────────────── */}
      <section className="pb-[var(--section-gap)]" aria-label="Journey photography">
        <div className="container-site">
          <Reveal>
            <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-[2px]">
              {journey.galleryImgs.map((img, i) => (
                <div
                  key={i}
                  className={i === 0 ? "md:row-span-2 overflow-hidden" : "overflow-hidden"}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    width={800}
                    height={i === 0 ? 1000 : 500}
                    className={[
                      "w-full object-cover object-center transition-transform duration-[900ms] ease-out hover:scale-[1.03]",
                      i === 0 ? "aspect-[4/5] md:h-full md:aspect-auto" : "aspect-[4/3]",
                    ].join(" ")}
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─── Experience pillars ──────────────────────────────────────────── */}
      <section
        className="section border-t border-b border-stone-200"
        aria-labelledby="pillars-heading"
      >
        <div className="container-site">
          <Reveal>
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_4fr] gap-[clamp(40px,6vw,80px)] items-start mb-14">
              <div>
                <p className="label-tag mb-4">What This Journey Includes</p>
                <h2
                  className="font-serif font-light text-display-md text-stone-900"
                  id="pillars-heading"
                >
                  Private by every<br /><em>measure.</em>
                </h2>
              </div>
              <p className="text-base font-light text-stone-500 leading-relaxed max-w-[560px] self-end">
                This is not a list of inclusions. It is a description of what
                your time will feel like  -  and what will not be present.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-stone-200">
            {journey.pillars.map((pillar, i) => (
              <Reveal key={pillar.key} delay={(i % 3) as 0 | 1 | 2 | 3 | 4}>
                <div className="bg-page hover:bg-page-subtle transition-colors duration p-10">
                  <p className="label-tag mb-4">{pillar.title}</p>
                  <p className="text-base font-light text-stone-500 leading-relaxed">
                    {pillar.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Sample flow ─────────────────────────────────────────────────── */}
      <section
        className="bg-stone-900 px-[var(--px)] py-[var(--section-gap)]"
        aria-labelledby="flow-heading"
      >
        <div className="container-site">
          <Reveal>
            <p className="label-tag text-white/35 mb-5">A Sense of Shape</p>
            <h2
              className="font-serif font-light text-display-lg text-white max-w-[480px] mb-6"
              id="flow-heading"
            >
              What seven days<br />
              might <em>feel like.</em>
            </h2>
            <p className="text-base font-light text-white/40 leading-relaxed max-w-[520px] mb-16">
              This is indicative, not prescriptive. Your actual journey is built
              from your brief and adjusted in the field by your guide each morning.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.07]">
            {journey.flow.map((phase, i) => (
              <Reveal key={phase.period} delay={(i % 4) as 0 | 1 | 2 | 3 | 4}>
                <div className="bg-stone-900 p-10 h-full">
                  <p className="font-serif font-light text-[2rem] text-white/[0.07] leading-none mb-6">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <p className="label-tag text-white/35 mb-2">{phase.period}</p>
                  <p className="font-serif font-light italic text-base text-white/70 mb-4 leading-snug">
                    {phase.title}
                  </p>
                  <p className="text-sm font-light text-white/45 leading-relaxed">
                    {phase.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Inquiry CTA ─────────────────────────────────────────────────── */}
      <section
        className="section border-b border-stone-200"
        aria-labelledby="journey-cta-heading"
      >
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[clamp(48px,7vw,96px)] items-center">
            <Reveal>
              <div>
                <p className="label-tag mb-6">Begin This Journey</p>
                <h2
                  className="font-serif font-light text-display-xl text-stone-900 mb-6 tracking-[-0.018em]"
                  id="journey-cta-heading"
                >
                  Begin your<br /><em>inquiry.</em>
                </h2>
                <p className="text-base font-light text-stone-500 leading-relaxed max-w-[440px]">
                  Submit an inquiry and a specialist will respond within
                  48–72 hours. We will ask you a small number of questions.
                  This is the beginning of the conversation that shapes
                  your journey.
                </p>
              </div>
            </Reveal>

            <Reveal delay={1}>
              <div className="lg:pl-16 lg:border-l lg:border-stone-200">
                <div className="border-t border-stone-200 pt-8 mb-10">
                  <p className="label-tag text-forest mb-3">Vetted &amp; Verified</p>
                  <p className="text-sm font-light text-stone-500 leading-relaxed">
                    {journey.vettedNote}
                  </p>
                </div>
                <div className="flex flex-col items-start gap-5">
                  <Button href={NAV_HREFS.inquire} variant="primary">
                    {CTA.requestPrivateAccess}
                  </Button>
                  <Button href={NAV_HREFS.journeys} variant="ghost" arrow={false}>
                    {CTA.viewAllJourneys}
                  </Button>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ─── Next journey ────────────────────────────────────────────────── */}
      {journey.nextJourney && (
        <section aria-label="Next journey">
          <Reveal>
            <Link
              href={`${NAV_HREFS.journeys}/${journey.nextJourney.slug}`}
              className="group grid grid-cols-1 md:grid-cols-2 hover:bg-page-subtle transition-colors duration"
            >
              <div className="overflow-hidden">
                <Image
                  src={journey.nextJourney.img.src}
                  alt={journey.nextJourney.img.alt}
                  width={800}
                  height={600}
                  className="w-full aspect-[4/3] object-cover object-center transition-transform duration-[900ms] ease-out group-hover:scale-[1.025]"
                  loading="lazy"
                />
              </div>
              <div className="flex flex-col justify-center px-[clamp(36px,6vw,80px)] py-[clamp(48px,6vw,80px)]">
                <p className="label-tag mb-5">Next Journey</p>
                <p className="label-tag text-stone-400 mb-4">
                  {journey.nextJourney.outcome}
                </p>
                <p className="font-serif font-light text-display-xl text-stone-900 tracking-[-0.018em] mb-6">
                  <em>{journey.nextJourney.name}</em>
                </p>
                <span className="inline-flex items-center gap-3 text-2xs font-normal tracking-wide uppercase text-stone-500 border-b border-stone-300 group-hover:text-stone-900 group-hover:border-stone-900 pb-[2px] transition-colors duration self-start">
                  Explore This Journey
                  <span aria-hidden="true">→</span>
                </span>
              </div>
            </Link>
          </Reveal>
        </section>
      )}
    </>
  );
}
