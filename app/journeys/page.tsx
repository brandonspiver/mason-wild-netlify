import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { CTA, NAV_HREFS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Journeys",
  description:
    "Five ways of experiencing Africa  -  each built around a distinct intention. Private journeys designed for discerning LGBTQ+ travelers.",
};

const ARCHETYPES = [
  {
    slug:      "the-intimate",
    outcome:   "Solitude",
    name:      "The Intimate",
    territory: "Botswana · Zambia",
    tagline:   "Designed for those who need to disappear.",
    body:
      "Absolute quiet. No shared game drives, no communal dining, no other travelers unless you choose it. The Intimate places you inside a private concession where the only footprint in the sand is yours. The daily rhythm is determined by you and the land, in that order.",
    img: {
      src: "/journeys/the-intimate.jpg",
      alt: "Okavango Delta at dawn  -  still water and open sky, no other travellers",
    },
    reversed: false,
  },
  {
    slug:      "the-untamed",
    outcome:   "Connection",
    name:      "The Untamed",
    territory: "Kenya · Tanzania",
    tagline:   "Elemental Africa, experienced at its own pace.",
    body:
      "Walking safaris, tracker-led navigation through dense riverine forest, and the specific aliveness that comes from moving through Africa on foot. This journey is not about comfort. It is about the knowledge that you are a guest in a system far older than any itinerary  -  and the willingness to feel that.",
    img: {
      src: "/journeys/the-untamed.jpg",
      alt: "Elephant moving through open grassland at last light",
    },
    reversed: true,
  },
  {
    slug:      "the-romantic",
    outcome:   "Wonder",
    name:      "The Romantic",
    territory: "Namibia · Zambia",
    tagline:   "Cinematic moments designed for two.",
    body:
      "Star beds under the Namibian sky. Private sundowners at the edge of the Victoria Falls. The luxury of unhurried time in which two people can be entirely absorbed in each other  -  and in the landscape. Every element assumes that you want to be left alone.",
    img: {
      src: "/journeys/journeys-hero-bath.jpg",
      alt: "Private tent interior at dusk  -  lantern light and the open savanna beyond",
    },
    reversed: false,
  },
  {
    slug:      "the-private-circuit",
    outcome:   "Sovereignty",
    name:      "The Private Circuit",
    territory: "Multi-country",
    tagline:   "The full breadth of the continent, without compromise.",
    body:
      "Multiple ecosystems. Multiple territories. Multiple wildlife encounters  -  without sacrificing the privacy and control that make them meaningful. Private aircraft, exclusive-use properties throughout, and a single specialist from first inquiry to final departure.",
    img: {
      src: "/journeys/the-private-circuit.jpg",
      alt: "Aerial view of remote African landscape at first light",
    },
    reversed: true,
  },
] as const;

export default function JourneysPage() {
  return (
    <>
      {/* ─── Page header ────────────────────────────────────────────────── */}
      <section
        className="pt-[var(--page-header-pt)] pb-[clamp(48px,6vw,80px)] border-b border-stone-200"
        aria-labelledby="journeys-heading"
      >
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[clamp(40px,6vw,80px)] items-end">
            <div>
              <Reveal>
                <p className="label-tag mb-6">Five Archetypes</p>
              </Reveal>
              <Reveal delay={1}>
                <h1
                  className="font-serif font-light text-stone-900 text-[clamp(2.125rem,4.8vw,4.75rem)] leading-[1.08] tracking-[-0.015em]"
                  id="journeys-heading"
                >
                  These are not<br />
                  packages.<br />
                  <em>They are ways of<br />experiencing Africa.</em>
                </h1>
              </Reveal>
            </div>
            <Reveal delay={2}>
              <p className="text-base font-light text-stone-500 leading-relaxed max-w-[480px]">
                Each archetype is built around a distinct emotional intention  - 
                not a destination, a duration, or a list of included activities.
                You choose the one that reflects what you are looking for.
                We build the rest from there.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ─── Archetype sections ─────────────────────────────────────────── */}
      <div>
        {ARCHETYPES.map((journey, index) => (
          <section
            key={journey.slug}
            className={[
              "grid grid-cols-1 md:grid-cols-2 border-b border-stone-200",
              index % 2 !== 0 ? "bg-page-subtle" : "bg-page",
            ].join(" ")}
            aria-labelledby={`journey-${journey.slug}`}
          >
            {/* Image */}
            <div
              className={[
                "overflow-hidden",
                journey.reversed ? "md:order-2" : "md:order-1",
              ].join(" ")}
            >
              <Reveal>
                <Image
                  src={journey.img.src}
                  alt={journey.img.alt}
                  width={900}
                  height={1080}
                  className="w-full aspect-[4/5] object-cover object-center transition-transform duration-[900ms] ease-out hover:scale-[1.025]"
                  loading={index === 0 ? "eager" : "lazy"}
                />
              </Reveal>
            </div>

            {/* Content */}
            <div
              className={[
                "flex flex-col justify-center",
                "px-[clamp(36px,6vw,80px)] py-[clamp(56px,8vw,96px)]",
                journey.reversed ? "md:order-1" : "md:order-2",
              ].join(" ")}
            >
              <Reveal delay={1}>
                {/*
                  Outcome + territory only  -  duration removed.
                  Keeps the page psychological rather than product-structured.
                */}
                <div className="flex items-center gap-5 mb-8">
                  <span className="label-tag">{journey.outcome}</span>
                  <span className="w-px h-3 bg-stone-300" aria-hidden="true" />
                  <span className="label-tag">{journey.territory}</span>
                </div>

                <h2
                  className="font-serif font-light text-display-xl text-stone-900 mb-5 tracking-[-0.018em]"
                  id={`journey-${journey.slug}`}
                >
                  <em>{journey.name}</em>
                </h2>

                <p className="font-serif font-light italic text-lg text-stone-600 leading-relaxed mb-6">
                  {journey.tagline}
                </p>

                <p className="text-base font-light text-stone-500 leading-relaxed mb-10 max-w-[480px]">
                  {journey.body}
                </p>

                <Button href={`${NAV_HREFS.journeys}/${journey.slug}`} variant="ghost">
                  Explore This Journey
                </Button>
              </Reveal>
            </div>
          </section>
        ))}
      </div>

      {/* ─── The Social  -  distinct register ─────────────────────────────── */}
      {/*
        No interlude section before this  -  the page moves directly from
        the four archetypes into The Social. The tonal shift in background
        and register is sufficient separation.

        The Social does not sit inside the archetype flow. It is rendered
        in a categorically different visual register: dark, no image, no
        outcome label, no "Explore" CTA. The language is quieter and
        more selective throughout.
      */}
      <section
        className="bg-stone-900 px-[var(--px)] py-[var(--section-gap)]"
        aria-labelledby="the-social-heading"
      >
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[clamp(48px,7vw,96px)] items-center">

            <Reveal>
              <div>
                <p className="label-tag text-white/35 mb-6">By Invitation Only</p>
                <h2
                  className="font-serif font-light text-display-xl text-white mb-6 tracking-[-0.018em]"
                  id="the-social-heading"
                >
                  The Social  - <br />
                  <em>A Curated Circle</em>
                </h2>
                <p className="font-serif font-light italic text-lg text-white/55 leading-relaxed mb-8">
                  A small group of aligned travelers. One shared season.
                </p>
                <p className="text-base font-light text-white/50 leading-relaxed max-w-[440px]">
                  Designed for those who find the right company as rare as
                  the right landscape. Eight travelers, selected through
                  direct conversation. Shared access to private territories
                  throughout. The circle for 2025 is currently being assembled.
                </p>
              </div>
            </Reveal>

            <Reveal delay={1}>
              <div className="lg:pl-16 lg:border-l lg:border-white/10">
                <div className="flex flex-col gap-0 mb-10">
                  {[
                    {
                      label: "Size",
                      value: "Eight travelers, maximum.",
                    },
                    {
                      label: "Access",
                      value: "Membership is by introduction. Inquiries are considered privately.",
                    },
                    {
                      label: "Status",
                      value: "The 2025 circle is currently being assembled.",
                    },
                  ].map(({ label, value }) => (
                    <div key={label} className="border-t border-white/10 py-6">
                      <p className="label-tag text-white/30 mb-2">{label}</p>
                      <p className="text-base font-light text-white/60 leading-relaxed">
                        {value}
                      </p>
                    </div>
                  ))}
                </div>
                <Link
                  href={NAV_HREFS.social}
                  className="inline-flex items-center gap-3 text-2xs font-normal tracking-wide uppercase text-white/60 border-b border-white/25 hover:text-white hover:border-white/55 pb-[2px] transition-colors duration"
                >
                  Learn about The Social
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </Reveal>

          </div>
        </div>
      </section>

      {/* ─── CTA band ───────────────────────────────────────────────────── */}
      <section className="bg-forest px-[var(--px)] py-[clamp(72px,10vw,120px)] text-center">
        <Reveal>
          <p className="label-tag text-white/36 mb-5">Private Onboarding</p>
          <h2 className="font-serif font-light text-display-2xl text-white mb-5 tracking-tighter">
            Begin<br /><em>Your Journey.</em>
          </h2>
          <p className="text-base font-light text-white/50 leading-relaxed max-w-[400px] mx-auto mb-12">
            Every journey begins with a conversation. Tell us what you are
            looking for  -  and what you would prefer to leave behind.
          </p>
          {/*
            Secondary CTA moves forward  -  to Inquire  -  not backward
            to The Experience. Both options progress the user.
          */}
          <div className="flex items-center justify-center gap-8 flex-wrap">
            <Button href={NAV_HREFS.inquire} variant="outline-light">
              {CTA.requestPrivateAccess}
            </Button>
            <Button href={NAV_HREFS.inquire} variant="ghost-light" arrow={false}>
              Ask a Question
            </Button>
          </div>
        </Reveal>
      </section>
    </>
  );
}
