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
    "A 12-night South Africa journey for six guests, designed around connection, private guiding, and a more considered social rhythm.",
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
    body: "A measured South Africa progression that moves from Johannesburg into safari, softens in Franschhoek, and closes in Cape Town with a fully hosted private-villa finish.",
  },
  {
    label: "Designed For",
    title: "6 guests",
    body: "A privately held group journey for guests who want connection, perspective, and enough space for shared experience to feel elegant rather than over-managed.",
  },
  {
    label: "Style",
    title: "Privately guided",
    body: "Private handling throughout, with the rhythm shaped around the group itself rather than the constraints of scheduled group travel.",
  },
  {
    label: "Where",
    title: "South Africa",
    body: "Johannesburg, safari, Franschhoek, and Cape Town, sequenced to deepen first, then soften, then release into a more social final chapter.",
  },
  {
    label: "Flow",
    title: "Johannesburg, safari, Franschhoek, Cape Town",
    body: "The route is built as an emotional progression rather than a circuit, with each chapter chosen for how it prepares the group for what follows.",
  },
  {
    label: "Flexibility",
    title: "Tailored around your group",
    body: "The structure is considered, but the pace, emphasis, and finer details within each chapter remain responsive to the mood and interests of the group.",
  },
  {
    label: "From",
    title: "$15,000 per person",
    body: "Presented as a privately designed South Africa journey for six guests, with the experience shaped around atmosphere, access, and seamless handling rather than volume.",
  },
] as const;

const accommodations: readonly Accommodation[] = [
  {
    name: "Satyagraha House",
    copy:
      "The opening chapter is intentionally quiet. Satyagraha House brings a more thoughtful and culturally grounded beginning to the journey, allowing everyone to arrive properly before the trip deepens. Its atmosphere suits the role perfectly: intimate, design-led, and quietly reflective rather than overtly performative. This is not Johannesburg at full volume. It is Johannesburg as introduction, context, and emotional grounding.",
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
      "Few & Far Luvhondo is the dramatic heart of the journey. This is where the landscape expands, the outside world falls away, and the group settles into a more immersive private safari rhythm. The property has been chosen not just for wilderness and privacy, but for the way it holds shared experience: expansive enough to feel wild, but considered enough to keep the journey elegant. It is the chapter that gives the itinerary its depth and scale.",
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
      "After safari, the rhythm changes deliberately. Sterrekopje introduces a softer, more sensorial chapter shaped by beauty, design, stillness, and a slower shared pace. It is not included as a stopover, but as a meaningful pause in the middle-to-late journey, allowing what has already been experienced to settle properly. This is where the trip exhales.",
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
      "The final chapter unfolds at The Aven in Cape Town, where the journey becomes lighter, more social, and more outward-facing again. Private-villa living changes the texture of the final days completely. There is more room, more ease, and more freedom to move between shared time and privacy without friction. As an ending, it feels generous, hosted, and beautifully relaxed.",
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
    days: "Days 1-2",
    title: "Grounding in Johannesburg",
    copy:
      "Begin with two nights at Satyagraha House, where the journey opens with a quieter cultural rhythm. A private Soweto day and lunch at Proud Mary give the opening chapter depth without overloading it, while dinner at the house on the first night and Marble on the second create a measured sense of arrival.",
    image: {
      src: "/journeys/the-social-shift/SH (4).jpg",
      alt: "Satyagraha House setting in Johannesburg",
      position: "center 50%",
    },
  },
  {
    number: "02",
    days: "Days 3-6",
    title: "Into the Wild",
    copy:
      "Continue to Few & Far Luvhondo for four nights of private safari. This is the deepest and most dramatic chapter of the journey, where landscape, privacy, and shared experience create the emotional core of the trip.",
    image: {
      src: "/journeys/the-social-shift/FF (5).jpg",
      alt: "Few & Far Luvhondo landscape in South Africa",
      position: "center 52%",
    },
  },
  {
    number: "03",
    days: "Days 7-8",
    title: "A Softer Interlude",
    copy:
      "Sterrekopje brings a slower, more sensorial pause after safari. Beauty, design, and a more reflective shared pace create a chapter that restores without turning the journey into retreat language or performance.",
    image: {
      src: "/journeys/the-social-shift/SK (11).avif",
      alt: "Sterrekopje house and garden setting in Franschhoek",
      position: "center 50%",
    },
  },
  {
    number: "04",
    days: "Days 9-12",
    title: "Cape Town, Socially",
    copy:
      "The final chapter unfolds at The Aven, where Cape Town brings the journey back into movement, style, and shared living. Arrival begins with dinner at Café Manhattan, then continues through private city and Table Mountain guiding, Kloof Street House, The Athletic Club & Social, Boulders Beach, Chapman's Peak, Mantra Café, a 5:00 PM helicopter flight from the V&A Waterfront, a private champagne sunset yacht cruise, Sevruga, a Constantia afternoon beginning at Groot Constantia and ending at La Colombe, and a slow final villa day with a hosted farewell dinner.",
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
      "A final morning at your own pace before onward departure. By this stage, the journey should feel fully held, emotionally complete, and far removed from the mechanics of ordinary travel.",
    image: {
      src: "/journeys/the-social-shift/TA (1).png",
      alt: "Ocean-facing villa view in Cape Town",
      position: "center 52%",
    },
  },
] as const;

const definesItems: readonly Inclusion[] = [
  {
    title: "Private Guiding Throughout",
    copy:
      "A privately arranged rhythm across the journey, so your days move according to your group, your interests, and the quality of each moment rather than a shared schedule.",
  },
  {
    title: "Culture, Safari, Winelands & Coast",
    copy:
      "This itinerary has been built as a progression rather than a loop. Johannesburg brings context and grounding. Few & Far brings immersion and shared wilderness intensity. Sterrekopje brings restoration and beauty. Cape Town brings release, style, and a more social final rhythm.",
  },
  {
    title: "A Thoughtful Johannesburg Opening",
    copy:
      "Two nights at Satyagraha House create a more intentional arrival, with space to settle properly and a privately guided Soweto culture day that gives the journey depth from the outset.",
  },
  {
    title: "A Privately Held Safari Core",
    copy:
      "Four nights at Few & Far Luvhondo allow the safari chapter to breathe properly, with private guiding, dramatic landscape, and enough continuity for the experience to feel expansive rather than hurried.",
  },
  {
    title: "A Softer Winelands Pause",
    copy:
      "Two nights at Sterrekopje bring a slower, more sensorial chapter to the journey, where beauty, design, and a shared rhythm of rest create a meaningful reset after safari.",
  },
  {
    title: "A Social Cape Town Finish",
    copy:
      "Four nights at The Aven in Camps Bay bring the journey to a more celebratory close, with private chef breakfasts, villa living, exceptional dining, and a coastal rhythm that feels both relaxed and fully hosted.",
  },
  {
    title: "Signature Cape Town Moments",
    copy:
      "Private city and peninsula touring, a helicopter flight, a private champagne sunset yacht cruise, and a Constantia Valley afternoon beginning at Groot Constantia and ending at La Colombe give the final chapter both energy and polish.",
  },
  {
    title: "Direct Mason & Wild Support",
    copy:
      "A dedicated Mason & Wild specialist available discreetly throughout, with preferences, adjustments, and finer requests managed personally rather than passed around.",
  },
] as const;

const includesItems: readonly Inclusion[] = [
  {
    title: "Satyagraha House in Johannesburg",
    copy:
      "A two-night opening stay that gives the journey a calmer, more reflective beginning before the group moves deeper into the route.",
  },
  {
    title: "Private Soweto Culture Day",
    copy:
      "The Johannesburg chapter includes a privately guided Soweto experience that gives the opening days texture and context rather than treating the city as transit.",
  },
  {
    title: "Few & Far Luvhondo Safari Stay",
    copy:
      "A four-night private safari chapter forms the emotional core of the journey, with enough time for landscape, privacy, and group rhythm to settle properly.",
  },
  {
    title: "Sterrekopje Winelands Pause",
    copy:
      "Two nights in Franschhoek bring a slower interlude of design, restoration, and beauty after safari and before the final coastal chapter.",
  },
  {
    title: "The Aven Private Villa in Cape Town",
    copy:
      "A four-night hosted villa finish in Camps Bay gives the group shared space, privacy, and a more social final rhythm without losing elegance.",
  },
  {
    title: "Signature Cape Town Experiences",
    copy:
      "Private city and peninsula guiding, a helicopter flight, a private champagne sunset yacht cruise, and a Constantia afternoon are built into the closing chapter.",
  },
  {
    title: "Hosted Dining and Ongoing Support",
    copy:
      "Private chef breakfasts, well-placed dining, a hosted farewell dinner, and direct Mason & Wild support help the journey feel fully held from start to finish.",
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
              <span className="label-tag text-white/35">12 NIGHTS FROM $15,000 PER PERSON</span>
            </div>
          </div>

          <h1
            className="font-serif font-light text-display-3xl text-white mb-6 tracking-[-0.022em] opacity-0 translate-y-4 animate-[fadeRise_0.9s_cubic-bezier(0.16,1,0.3,1)_0.48s_forwards]"
            id="social-shift-heading"
          >
            <em>The Social Shift</em>
          </h1>

          <p className="font-serif font-light italic text-xl text-white/62 max-w-[620px] leading-relaxed opacity-0 translate-y-4 animate-[fadeRise_0.9s_cubic-bezier(0.16,1,0.3,1)_0.64s_forwards]">
            Designed for connection, perspective, and the kind of South Africa journey
            that changes the pace of everything.
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
                  Some group journeys are built around momentum. This one is built
                  around what changes when the rhythm is right.
                </p>
              </Reveal>
            </div>

            <div className="flex flex-col gap-6">
              <Reveal delay={1}>
                <p className="font-serif font-light text-display-sm text-stone-800 leading-[1.45] tracking-[-0.01em]">
                  It begins in Johannesburg, where the opening is thoughtful,
                  cultural, and quietly grounding. From there, the journey deepens
                  into Few &amp; Far Luvhondo, where private safari, landscape, and
                  shared experience create the emotional core of the trip. It then
                  softens into Sterrekopje, where design, beauty, and a slower
                  sensorial pace allow everything to settle. It ends in Cape Town in
                  a fully hosted private villa, where the final chapter becomes
                  lighter, more social, and more celebratory without ever losing the
                  sense of care that shaped the trip from the beginning.
                </p>
              </Reveal>
              <Reveal delay={2}>
                <p className="text-base font-light text-stone-500 leading-relaxed">
                  This itinerary is designed as a progression rather than a collection
                  of stops. Arrival to immersion. Immersion to reset. Reset to
                  release. Each chapter changes the emotional temperature of the
                  journey, and each place has been chosen not only for what it offers
                  on its own, but for how well it prepares the group for what comes
                  next.
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
                  A journey shaped more by feeling
                  <br />
                  than by distance.
                </h2>
              </div>
            </Reveal>

            <div className="flex flex-col gap-6">
              <Reveal delay={1}>
                <p className="text-base font-light text-stone-500 leading-relaxed max-w-[740px]">
                  Johannesburg is there to ground the group properly. Few &amp; Far
                  Luvhondo is where the scale of the trip opens and the outside world
                  begins to drop away. Sterrekopje softens the register, allowing
                  everything already experienced to settle into a slower and more
                  sensorial pace. Cape Town then shifts the energy once more, not into
                  noise, but into social ease, hosted living, and a lighter, more
                  expansive finish.
                </p>
              </Reveal>
              <Reveal delay={2}>
                <p className="text-base font-light text-stone-500 leading-relaxed max-w-[740px]">
                  The transformation here is not something announced. It happens
                  through sequence, atmosphere, and the quality of time each chapter
                  is given. That is why the route works.
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
        intro="The route and sequencing are intentional. Within that structure, each chapter still has room to breathe, with the pace and emphasis shaped around your group, your guide, and the mood of the journey itself."
        definesIntro="The Social Shift is defined by progression: grounding in Johannesburg, depth on safari, restoration in the Winelands, and a more social, beautifully hosted finish in Cape Town."
        definesItems={definesItems}
        shapeCards={shapeCards}
        includesIntro="What is included here is built around hosting the group properly: private stays, key guiding and social experiences, and enough structure to keep the journey easy without making it feel managed."
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
                  Quiet authority,
                  <br />
                  properly applied.
                </h2>
              </div>
            </Reveal>

            <Reveal delay={1}>
              <p className="text-base font-light text-stone-500 leading-relaxed max-w-[760px]">
                Personally designed by Zannon James, drawing on a level of
                first-hand familiarity that goes well beyond standard travel
                planning, including properties connected to his family&apos;s
                interior design legacy and destinations chosen for how they feel in
                practice rather than on paper. The journey also includes places such
                as Sterrekopje, owned and run by Nicole and Fleur, whose presence
                adds a quieter sense of alignment to the experience without ever
                needing to overstate it. Every partner included has been selected for
                privacy, atmosphere, operational excellence, and the ability to
                deliver a journey that feels deeply personal rather than performative.
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
                  Start planning
                  <br />
                  <em>The Social Shift.</em>
                </h2>
                <p className="text-base font-light text-stone-500 leading-relaxed max-w-[460px]">
                  Share a few details and a Mason &amp; Wild specialist will come
                  back to you personally with next steps, availability guidance, and
                  the refinements needed to shape the journey around your group.
                </p>
              </div>
            </Reveal>

            <Reveal delay={1}>
              <div className="lg:pl-16 lg:border-l lg:border-stone-200">
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
    </>
  );
}
