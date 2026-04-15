import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SocialJourneyPanel } from "@/components/journey/SocialJourneyPanel";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { CTA, NAV_HREFS } from "@/lib/constants";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "The Social Shift",
  description:
    "A beautifully hosted 12-night South Africa journey designed for travellers who want connection, style, and socially intelligent pacing.",
  path: "/the-social",
});

type MetadataItem = {
  readonly label: string;
  readonly title: string;
  readonly body: string;
};

type Accommodation = {
  readonly name: string;
  readonly copy: string;
  readonly images: readonly {
    src: string;
    alt: string;
    position?: string;
  }[];
};

type ShapeCard = {
  readonly number: string;
  readonly days: string;
  readonly title: string;
  readonly copy: string;
  readonly image?: {
    readonly src: string;
    readonly alt: string;
    readonly position?: string;
  };
};

type Inclusion = {
  readonly title: string;
  readonly copy: string;
};

const metadataItems: readonly MetadataItem[] = [
  {
    label: "Length",
    title: "12 nights",
    body: "A socially intelligent South Africa progression that moves from city energy into wine-country ease, safari depth, and a softer coastal release.",
  },
  {
    label: "Designed For",
    title: "Friends, solo travellers joining the right group, and private social groups",
    body: "Best for travellers who enjoy connection, shared experience, and social atmosphere that still leaves room for privacy and personal space.",
  },
  {
    label: "Style",
    title: "Hosted, design-led, socially intelligent",
    body: "Carefully hosted and privately arranged where needed, with pacing built to create flow, chemistry, and ease rather than group fatigue.",
  },
  {
    label: "Where",
    title: "South Africa",
    body: "Cape Town, the Cape Winelands, safari, and the coast, sequenced to move from high social energy into deeper connection and softer release.",
  },
  {
    label: "Flow",
    title: "City, Winelands, safari, coast",
    body: "The route is intentionally sequenced to gather people, deepen the experience, and then release the journey with the right final atmosphere.",
  },
  {
    label: "Flexibility",
    title: "Tailored around your group",
    body: "The structure is deliberate, but social tone, activity level, and daily rhythm remain responsive to your group and preferred pace.",
  },
  {
    label: "Starting From",
    title: "From $7,500 per person",
    body: "From $7,500 per person, depending on season, room category, group format, and final journey design.",
  },
] as const;

const accommodations: readonly Accommodation[] = [
  {
    name: "Satyagraha House",
    copy:
      "This stay gives the journey its opening energy, combining design, location, and social atmosphere without sacrificing comfort or privacy. It sets the tone for a hosted experience that feels stylish from the first night.",
    images: [
      {
        src: "/journeys/the-social-shift/SH (1).jpeg",
        alt: "Satyagraha House in Johannesburg",
        position: "center 50%",
      },
      {
        src: "/journeys/the-social-shift/SH (2).JPG",
        alt: "Interior at Satyagraha House",
        position: "center 52%",
      },
      {
        src: "/journeys/the-social-shift/SH (3).jpeg",
        alt: "Garden detail at Satyagraha House",
        position: "center 50%",
      },
    ],
  },
  {
    name: "Few & Far Luvhondo",
    copy:
      "This is where the journey gains depth. Shared game drives, bush rhythm, and a change of environment create a more meaningful group dynamic without forcing connection.",
    images: [
      {
        src: "/journeys/the-social-shift/FF (4).jpg",
        alt: "Few & Far Luvhondo in South Africa",
        position: "center 52%",
      },
      {
        src: "/journeys/the-social-shift/FF (1).jpg",
        alt: "Cliff suite view at Few & Far Luvhondo",
        position: "center 50%",
      },
      {
        src: "/journeys/the-social-shift/FF (6).jpg",
        alt: "Landscape at Few & Far Luvhondo",
        position: "center 50%",
      },
    ],
  },
  {
    name: "Sterrekopje",
    copy:
      "This chapter slows the pace and creates room for longer meals, stronger conversation, and a more relaxed kind of connection. It adds softness and balance to the social rhythm.",
    images: [
      {
        src: "/journeys/the-social-shift/SK (6).avif",
        alt: "Sterrekopje in Franschhoek",
        position: "center 50%",
      },
      {
        src: "/journeys/the-social-shift/SK (3).avif",
        alt: "Garden and house setting at Sterrekopje",
        position: "center 50%",
      },
      {
        src: "/journeys/the-social-shift/SK (10).avif",
        alt: "Interior detail at Sterrekopje",
        position: "center 50%",
      },
    ],
  },
  {
    name: "The Aven",
    copy:
      "This final stay gives the journey lift. It closes the experience with warmth, movement, and a softer celebratory energy that feels natural rather than staged.",
    images: [
      {
        src: "/journeys/the-social-shift/TA (6).png",
        alt: "Private villa terrace at The Aven in Cape Town",
        position: "center 48%",
      },
      {
        src: "/journeys/the-social-shift/TA (8).png",
        alt: "Pool and living space at The Aven",
        position: "center 52%",
      },
      {
        src: "/journeys/the-social-shift/TA (1).png",
        alt: "Ocean-facing setting at The Aven",
        position: "center 50%",
      },
    ],
  },
] as const;

const shapeCards: readonly ShapeCard[] = [
  {
    number: "01",
    days: "Days 1-4",
    title: "Begin with Energy",
    copy:
      "Start in Cape Town, where design, dining, and city life create the perfect opening chapter. This is where the group dynamic starts to form naturally and the journey takes on personality from the outset.",
    image: {
      src: "/journeys/the-social-shift/SH (4).jpg",
      alt: "Satyagraha House setting in Johannesburg",
      position: "center 50%",
    },
  },
  {
    number: "02",
    days: "Days 5-6",
    title: "Shift into Ease",
    copy:
      "Move into the Winelands, where the social tone softens into something slower, more indulgent, and more connected. This chapter gives the journey space and balance.",
    image: {
      src: "/journeys/the-social-shift/FF (5).jpg",
      alt: "Few & Far Luvhondo landscape in South Africa",
      position: "center 52%",
    },
  },
  {
    number: "03",
    days: "Days 7-9",
    title: "Deepen Through Safari",
    copy:
      "Continue into safari, where the rhythm changes again. Shared wildlife experience creates a different kind of connection, grounding the group in something quieter, richer, and more memorable.",
    image: {
      src: "/journeys/the-social-shift/SK (11).avif",
      alt: "Sterrekopje house and garden setting in Franschhoek",
      position: "center 50%",
    },
  },
  {
    number: "04",
    days: "Days 10-12",
    title: "Finish by the Coast",
    copy:
      "End with the coast, where the journey becomes lighter, freer, and more celebratory. It is the right final release, giving the group a beautiful close without losing the sense of polish that defines the rest of the trip.",
    image: {
      src: "/journeys/the-social-shift/TA (10).png",
      alt: "The Aven in Cape Town",
      position: "center 50%",
    },
  },
  {
    number: "05",
    days: "Departure",
    title: "Leave Lighter",
    copy:
      "A final morning at your own pace before onward departure. By this stage, the journey should feel connected, complete, and beautifully well held.",
    image: {
      src: "/journeys/the-social-shift/TA (1).png",
      alt: "Ocean-facing villa view in Cape Town",
      position: "center 52%",
    },
  },
] as const;

const definesItems: readonly Inclusion[] = [
  {
    title: "Hosted with Intent",
    copy:
      "This is social travel without chaos. Hosting is active, refined, and calibrated to keep the group dynamic strong without forcing pace or personality.",
  },
  {
    title: "A Curated Social Rhythm",
    copy:
      "The route is built as progression rather than pressure, moving from city energy to wine-country softness, safari depth, and a lighter coastal finish.",
  },
  {
    title: "Connection Without Crowd Fatigue",
    copy:
      "The structure leaves room for privacy and personal space, so connection happens naturally instead of feeling over-managed.",
  },
  {
    title: "Atmosphere as a Design Decision",
    copy:
      "Properties are chosen for how they host people in real life, not just for visual appeal. Service, flow, and social chemistry all need to hold.",
  },
  {
    title: "LGBTQ+ Confidence Built In",
    copy:
      "Comfort, inclusion, and discretion are built into planning and partner choice, so the social energy feels open, safe, and effortless.",
  },
  {
    title: "What We Do Not Do",
    copy:
      "We do not build social travel around chaos, generic departures, or mass-market group formats presented as curation.",
  },
  {
    title: "People, Place, and Pace in Sync",
    copy:
      "Every chapter is there for a reason, and every transition supports the mood. That is what makes the journey feel alive rather than scheduled.",
  },
  {
    title: "Direct Mason & Wild Support",
    copy:
      "A dedicated Mason & Wild specialist remains discreetly available throughout, with refinements handled personally from first brief to final departure.",
  },
] as const;

const includesItems: readonly Inclusion[] = [
  {
    title: "City Opening with Social Energy",
    copy:
      "The opening chapter is designed to create chemistry quickly, with strong setting, hosting, and enough freedom for personality to emerge.",
  },
  {
    title: "Winelands Ease and Reset",
    copy:
      "A softer middle chapter introduces indulgence, slower movement, and room for stronger conversation and relaxed connection.",
  },
  {
    title: "Safari Depth for the Group",
    copy:
      "Shared wildlife rhythm creates a different quality of connection and gives the social journey emotional substance.",
  },
  {
    title: "Coastal Close with Lift",
    copy:
      "The final chapter closes with warmth, movement, and celebratory ease without losing style or control.",
  },
  {
    title: "Carefully Hosted Flow",
    copy:
      "The journey is hosted to keep people comfortable, included, and energised rather than fatigued by group logistics.",
  },
  {
    title: "Privately Arranged Where It Matters",
    copy:
      "Private handling around key transitions and experiences protects quality and keeps the social atmosphere premium.",
  },
  {
    title: "Inclusion and Practical Confidence",
    copy:
      "The experience is designed around places and partners where comfort, ease, and LGBTQ+ inclusion are visible in practice.",
  },
] as const;

export default function SocialShiftPage() {
  return (
    <>
      <section
        className="relative min-h-svh flex flex-col justify-end pb-[clamp(56px,10vh,104px)] overflow-hidden"
        aria-labelledby="social-shift-heading"
      >
        <div className="absolute inset-0 overflow-hidden" role="img" aria-label="The Social Shift journey setting in South Africa">
          <Image
            src="/journeys/the-social-shift/FF (4).jpg"
            alt=""
            fill
            priority
            quality={90}
            sizes="100vw"
            className="object-cover animate-[heroZoom_20s_cubic-bezier(0.16,1,0.3,1)_forwards]"
            style={{ objectPosition: "center 42%" }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, rgba(14,12,8,0.12) 0%, rgba(14,12,8,0.08) 18%, rgba(14,12,8,0.46) 62%, rgba(14,12,8,0.88) 100%)",
            }}
            aria-hidden="true"
          />
        </div>

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
          <span className="text-white/25 text-2xs" aria-hidden="true">
            /
          </span>
          <span className="text-2xs tracking-wide uppercase text-white/45">
            The Social Shift
          </span>
        </nav>

        <div className="relative z-10 container-site">
          <div className="opacity-0 translate-y-4 animate-[fadeRise_0.9s_cubic-bezier(0.16,1,0.3,1)_0.3s_forwards]">
            <div className="flex items-center gap-5 mb-7 flex-wrap">
              <span className="label-tag text-white/35">GROUP JOURNEY</span>
              <span className="w-px h-3 bg-white/25" aria-hidden="true" />
              <span className="label-tag text-white/35">SOUTH AFRICA</span>
              <span className="w-px h-3 bg-white/25" aria-hidden="true" />
              <span className="label-tag text-white/35">12 NIGHTS FROM $7,500 PER PERSON</span>
            </div>
          </div>

          <h1
            className="font-serif font-light text-display-3xl text-white mb-6 tracking-[-0.022em] opacity-0 translate-y-4 animate-[fadeRise_0.9s_cubic-bezier(0.16,1,0.3,1)_0.48s_forwards]"
            id="social-shift-heading"
          >
            <em>The Social Shift</em>
          </h1>

          <p className="font-serif font-light italic text-xl text-white/62 max-w-[620px] leading-relaxed opacity-0 translate-y-4 animate-[fadeRise_0.9s_cubic-bezier(0.16,1,0.3,1)_0.64s_forwards]">
            A beautifully hosted South Africa journey for travellers who want
            connection, style, and the kind of group energy that still feels
            considered.
          </p>
        </div>
      </section>

      <section className="section border-b border-stone-200" aria-labelledby="journey-identity-heading">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-[clamp(48px,7vw,96px)]">
            <div className="lg:sticky lg:top-[100px] lg:self-start">
              <Reveal>
                <p className="label-tag mb-6">Journey Identity</p>
                <p
                  className="font-serif font-light text-display-sm text-stone-800 leading-[1.45] tracking-[-0.01em]"
                  id="journey-identity-heading"
                >
                  This is social travel without the usual compromises. Strong
                  design, the right people, and a route built to create chemistry
                  naturally rather than force it.
                </p>
              </Reveal>
            </div>

            <div className="flex flex-col gap-6">
              <Reveal delay={1}>
                <p className="font-serif font-light text-display-sm text-stone-800 leading-[1.45] tracking-[-0.01em]">
                  The journey moves through Cape Town, the Winelands, safari, and
                  the coast with a rhythm that balances energy, privacy,
                  celebration, and ease. No chaotic group travel. No generic
                  departures. Just a more elevated way to experience South Africa
                  together.
                </p>
              </Reveal>
              <Reveal delay={2}>
                <p className="text-base font-light text-stone-500 leading-relaxed">
                  This is a journey for people who like their travel to feel alive.
                  Not loud for the sake of it. Not performative. Not built around
                  forced fun. The atmosphere is not accidental. It is curated.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-stone-200" aria-label="Trip metadata">
        <div className="container-site">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-7 gap-px bg-stone-200 border-x border-stone-200">
            {metadataItems.map((item, index) => (
              <Reveal key={item.label} className="h-full" delay={(index % 3) as 0 | 1 | 2 | 3 | 4}>
                <div className="bg-page px-8 py-10 h-full">
                  <p className="label-tag mb-4">{item.label}</p>
                  <p className="font-serif font-light italic text-base text-stone-800 leading-snug mb-4">
                    {item.title}
                  </p>
                  <p className="text-sm font-light text-stone-500 leading-relaxed">
                    {item.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section border-b border-stone-200" aria-labelledby="progression-heading">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_4fr] gap-[clamp(40px,6vw,80px)] items-start">
            <Reveal>
              <div>
                <p className="label-tag mb-5">Emotional Progression</p>
                <h2
                  className="font-serif font-light text-display-lg text-stone-900 leading-[1.08] tracking-[-0.015em]"
                  id="progression-heading"
                >
                  The best social journeys are built,
                  <br />
                  not improvised.
                </h2>
              </div>
            </Reveal>

            <div className="flex flex-col gap-6">
              <Reveal delay={1}>
                <p className="text-base font-light text-stone-500 leading-relaxed max-w-[740px]">
                  Too many group trips mistake activity for atmosphere and
                  logistics for hosting. Too many luxury itineraries forget that
                  the energy between people matters just as much as the places
                  themselves.
                </p>
              </Reveal>
              <Reveal delay={2}>
                <p className="text-base font-light text-stone-500 leading-relaxed max-w-[740px]">
                  The Social Shift is designed differently. It creates the right
                  conditions for connection through strong settings, good pacing,
                  and a sequence that knows when to gather people and when to let
                  the journey breathe.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {accommodations.map((accommodation, index) => (
        <section
          key={accommodation.name}
          className="section border-b border-stone-200"
          aria-labelledby={`${accommodation.name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}-heading`}
        >
          <div className="container-site">
            <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1.9fr] gap-[clamp(40px,6vw,80px)] items-start">
              <Reveal delay={(index % 3) as 0 | 1 | 2 | 3 | 4}>
                <div className="lg:pr-8">
                  <p className="label-tag mb-4">Accommodation</p>
                  <h2
                    className="font-serif font-light text-display-md text-stone-900 mb-6 tracking-[-0.012em]"
                    id={`${accommodation.name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}-heading`}
                  >
                    <em>{accommodation.name}</em>
                  </h2>
                  <p className="text-base font-light text-stone-500 leading-relaxed">
                    {accommodation.copy}
                  </p>
                </div>
              </Reveal>

              <Reveal delay={((index + 1) % 3) as 0 | 1 | 2 | 3 | 4}>
                <div className="grid min-h-0 grid-cols-1 gap-[10px] md:min-h-[520px] md:grid-cols-[1.2fr_0.8fr]">
                  <div className="overflow-hidden md:h-full">
                    <Image
                      src={accommodation.images[0].src}
                      alt={accommodation.images[0].alt}
                      width={1200}
                      height={1500}
                      quality={95}
                      className="h-[360px] w-full object-cover object-center transition-transform duration-[900ms] ease-out hover:scale-[1.03] md:h-full"
                      style={{ objectPosition: accommodation.images[0].position ?? "center" }}
                      loading="lazy"
                    />
                  </div>

                  <div className="grid h-[240px] grid-cols-2 gap-[10px] md:h-full md:grid-cols-1 md:grid-rows-2">
                    {accommodation.images.slice(1).map((image) => (
                      <div key={image.alt} className="overflow-hidden">
                        <Image
                          src={image.src}
                          alt={image.alt}
                          width={700}
                          height={560}
                          quality={95}
                          className="h-full w-full object-cover object-center transition-transform duration-[900ms] ease-out hover:scale-[1.03]"
                          style={{ objectPosition: image.position ?? "center" }}
                          loading="lazy"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>
      ))}

      <SocialJourneyPanel
        intro="The route and sequencing are intentional. Within that structure, each chapter still has room to breathe, with the pace and emphasis shaped around your group and the social mood of the journey."
        definesIntro="The Social Shift is defined by social intelligence: city energy, wine-country ease, safari depth, and a coastal finish that keeps the experience stylish, connected, and well held."
        definesItems={definesItems}
        shapeCards={shapeCards}
        includesIntro="What is included here is built around hosting people properly: strong settings, considered pacing, and enough structure to keep the journey easy without making it feel managed."
        includesItems={includesItems}
      />

      <section className="section border-b border-stone-200" aria-labelledby="proof-heading">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-[clamp(48px,7vw,96px)] items-start">
            <Reveal>
              <div>
                <p className="label-tag text-forest mb-4">Privately Designed</p>
                <h2
                  className="font-serif font-light text-display-md text-stone-900 tracking-[-0.015em]"
                  id="proof-heading"
                >
                  Vetted through real social
                  <br />
                  and regional experience.
                </h2>
              </div>
            </Reveal>

            <Reveal delay={1}>
              <p className="text-base font-light text-stone-500 leading-relaxed max-w-[760px]">
                Personally selected by Zannon James through firsthand experience
                and strong regional knowledge. This journey is built around
                properties, experiences, and settings chosen for more than visual
                appeal. Service, flow, atmosphere, privacy, and the ability to host
                people well all need to hold to a consistently high standard in
                real life. For LGBTQ+ travellers, this also means confidence. The
                journey is designed around places and partners where comfort,
                inclusion, and ease are not left to chance.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="inquiry-heading">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[clamp(48px,7vw,96px)] items-center">
            <Reveal>
              <div>
                <p className="label-tag mb-6">Begin This Journey</p>
                <h2
                  className="font-serif font-light text-display-xl text-stone-900 mb-6 tracking-[-0.018em]"
                  id="inquiry-heading"
                >
                  Plan
                  <br />
                  <em>The Social Shift with Mason &amp; Wild.</em>
                </h2>
                <p className="text-base font-light text-stone-500 leading-relaxed max-w-[460px]">
                  This journey is personally shaped around the format, pace, and
                  social tone you want to create, whether you are travelling with
                  friends or joining a like-minded group. Every detail is
                  considered to keep the experience stylish, easy, and genuinely
                  enjoyable from beginning to end. Designed for travellers who
                  want connection, good taste, and a South Africa journey that
                  feels hosted properly rather than simply organised.
                </p>
              </div>
            </Reveal>

            <Reveal delay={1}>
              <div className="lg:pl-16 lg:border-l lg:border-stone-200">
                <div className="flex flex-col items-start gap-5">
                  <Button href={NAV_HREFS.inquire} variant="primary">
                    Request Private Planning
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
    </>
  );
}
