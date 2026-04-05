import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { JourneyCarousel } from "@/components/journey/JourneyCarousel";
import { NAV_HREFS, CTA } from "@/lib/constants";

type JourneyImage = {
  readonly src: string;
  readonly alt: string;
  readonly position?: string;
};

type JourneyMetadataItem = {
  readonly label: string;
  readonly title: string;
  readonly body: string;
};

type JourneyPillar = {
  readonly key: string;
  readonly title: string;
  readonly body: string;
};

type JourneyFlowPhase = {
  readonly number: string;
  readonly period: string;
  readonly title: string;
  readonly body: string;
};

type JourneyAccommodation = {
  readonly name: string;
  readonly description: string;
  readonly images: readonly [JourneyImage, JourneyImage, JourneyImage];
};

type NextJourneyRef = {
  readonly slug: string;
  readonly name: string;
  readonly outcome: string;
  readonly img: JourneyImage;
};

type JourneyData = {
  readonly slug: string;
  readonly outcome: string;
  readonly territory: string;
  readonly name: string;
  readonly identity: string;
  readonly metadataItems: readonly JourneyMetadataItem[];
  readonly lead: string;
  readonly vettedNote: string;
  readonly body: readonly string[];
  readonly heroImg: JourneyImage;
  readonly galleryImgs: readonly JourneyImage[];
  readonly pillarsIntro: string;
  readonly pillars: readonly JourneyPillar[];
  readonly flowIntro: string;
  readonly flow: readonly JourneyFlowPhase[];
  readonly accommodationsIntro: string;
  readonly accommodations: readonly JourneyAccommodation[];
  readonly inquiryHeading: string;
  readonly inquiryBody: string;
  readonly proofLabel: string;
  readonly proofNote: string;
  readonly nextJourney?: NextJourneyRef;
};

const JOURNEYS: Record<string, JourneyData> = {
  "the-intimate": {
    slug: "the-intimate",
    outcome: "INTIMACY",
    territory: "BOTSWANA & VICTORIA FALLS",
    name: "The Intimate",
    identity: "Designed for those who want privacy without performance.",
    metadataItems: [
      {
        label: "Length",
        title: "8 nights",
        body: "Three contrasting landscapes, one intimate progression from desert stillness to Delta immersion to a polished river finish.",
      },
      {
        label: "Designed For",
        title: "Private groups",
        body: "Best for four guests who value privacy, atmosphere, emotional pacing, and a journey that feels deeply personal from beginning to end.",
      },
      {
        label: "Style",
        title: "Privately guided",
        body: "No shared game drives, no crowded logistics, and no need to move at anyone else's rhythm unless you want to.",
      },
      {
        label: "Where",
        title: "Botswana & Victoria Falls",
        body: "Jack's Private Camp, Duke's East, and Victoria Falls Island Lodge, sequenced to become softer, richer, and more celebratory as the journey unfolds.",
      },
      {
        label: "Flexibility",
        title: "Tailored around you",
        body: "The structure is considered, but the pace, daily emphasis, and finer details remain shaped around your preferences.",
      },
    ],
    lead: "Some journeys are built around spectacle. This one is built around privacy.",
    vettedNote:
      "Personally designed by Zannon James, with each property selected for privacy, atmosphere, operational excellence, and the ability to deliver a luxury experience that feels deeply personal rather than performative.",
    body: [
      "It begins in the stark beauty of the Makgadikgadi, where the space feels almost lunar and the silence has weight. From there, it moves into the Okavango Delta, where water, reeds, and wildlife create a softer, more immersive rhythm. It ends above the Zambezi at Victoria Falls, where the pace slows again and the journey gives way to celebration, stillness, and release.",
      "The Intimate is a privately guided Botswana and Victoria Falls journey for guests who want solitude, sensuality, and the kind of wilderness that feels entirely their own.",
      "At Jack's Private Camp, the landscape is expansive, cinematic, and unlike anywhere else in southern Africa. At Duke's East, the experience deepens into the layered beauty of the Delta, with slower water-based exploration, richer game viewing, and one night spent fly-camping beneath the open sky. At Victoria Falls Island Lodge, the final nights soften into a more polished rhythm of river, privacy, and celebration.",
      "This is not a trip built around volume. It is built around how contrast changes a journey, and around the practical confidence that every handoff, transfer, and shift in pace has already been considered properly.",
      "The camps were not chosen because they photograph well in isolation. They were chosen because they work together emotionally and operationally to create an experience that feels intimate, progressive, and complete.",
      "For LGBTQ+ travellers in particular, that confidence matters. Every property and partner included here has been selected for how well it delivers privacy, ease, and reassurance in practice, not just on paper.",
    ],
    heroImg: {
      src: "/journeys/the-intimate/makgadikgadi-dusk.jpg",
      alt: "Jack's Private Camp in the Makgadikgadi at dusk",
      position: "center 52%",
    },
    galleryImgs: [
      {
        src: "/journeys/the-intimate/makgadikgadi-dusk.jpg",
        alt: "Jack's Private Camp in the Makgadikgadi at dusk",
        position: "center 52%",
      },
      {
        src: "/journeys/the-intimate/dukes-east-lechwe.jpg",
        alt: "Okavango Delta wildlife at golden hour",
        position: "center 50%",
      },
      {
        src: "/journeys/the-intimate/victoria-falls-river-deck.jpg",
        alt: "River or suite view at Victoria Falls Island Lodge",
        position: "center 55%",
      },
    ],
    pillarsIntro:
      "Everything included here has been chosen to protect the feeling of the journey: privacy in the desert, intimacy in the Delta, and a softer, more celebratory rhythm at the river's edge.",
    pillars: [
      {
        key: "guiding",
        title: "Private Guiding Throughout",
        body: "A privately guided rhythm across the journey, so your days move according to your pace, your interests, and the quality of each moment rather than a shared schedule.",
      },
      {
        key: "contrast",
        title: "Desert, Delta & River Contrast",
        body: "This itinerary has been built as a progression rather than a circuit. The Makgadikgadi brings scale and stillness. The Delta brings depth and immersion. Victoria Falls brings softness, river energy, and a polished close.",
      },
      {
        key: "jacks",
        title: "Signature Moments at Jack's",
        body: "Meerkat encounters, Bushman walks, and seasonal quad biking are layered with a helicopter flight, horseback riding, and a 90-minute spa treatment, giving the opening chapter both cinematic scale and sensual texture.",
      },
      {
        key: "delta",
        title: "A Deeper Delta Chapter",
        body: "At Duke's East, game drives, boating, mokoro excursions, and fishing are paired with a one-night fly-camp and a 90-minute spa treatment, creating a Delta stay that feels both elemental and deeply considered.",
      },
      {
        key: "falls",
        title: "A Beautiful Ending at the Falls",
        body: "Two nights at Victoria Falls Island Lodge in the Island Treehouse Suite bring a gentler rhythm to the journey, with river-based activities, game viewing, and time at the Falls without losing the sense of privacy built earlier in the trip.",
      },
      {
        key: "support",
        title: "Direct Mason & Wild Support",
        body: "A dedicated Mason & Wild specialist available discreetly throughout, with preferences, adjustments, and finer requests managed personally rather than passed around.",
      },
    ],
    flowIntro:
      "The route and sequencing are intentional. Within that structure, each chapter still has room to breathe, with the pace and emphasis shaped around your group, your guide, and the landscape itself.",
    flow: [
      {
        number: "01",
        period: "Days 1-3",
        title: "Into the Silence",
        body: "Begin at Jack's Private Camp in the Makgadikgadi, where the landscape feels almost otherworldly in its scale and stillness. Private guiding, meerkat encounters, Bushman walks, and seasonal quad biking create a strong sense of place from the outset, while a helicopter flight, horseback riding, and a 90-minute spa treatment add a softer, more sensual rhythm to the opening days.",
      },
      {
        number: "02",
        period: "Days 4-6",
        title: "Deeper into the Delta",
        body: "Continue to Duke's East, where the experience becomes richer, slower, and more immersive. Water-based exploration, game drives, and the quieter texture of the Delta shape this chapter, while one night of fly-camping under the stars becomes the most intimate and elemental moment of the journey.",
      },
      {
        number: "03",
        period: "Days 7-8",
        title: "The River & The Falls",
        body: "End at Victoria Falls Island Lodge in the Island Treehouse Suite, where the final chapter unfolds at a gentler pace. River cruises, game activities, and time at the Falls bring a more celebratory energy, while the setting itself offers privacy, atmosphere, and a strong sense of conclusion.",
      },
      {
        number: "04",
        period: "Departure",
        title: "Leave Lightly",
        body: "A final morning at your own pace before onward departure. By this stage, the journey should feel seamless, fully held, and entirely removed from the logistics of ordinary travel.",
      },
    ],
    accommodationsIntro:
      "Each property has been chosen not as a standalone highlight, but for how it holds a different chapter of the journey. The feeling shifts deliberately from scale and silence, to immersion and texture, to a softer, more polished finish on the river.",
    accommodations: [
      {
        name: "Jack's Private Camp",
        description:
          "Jack's Private Camp is the opening gesture of the journey: dramatic, isolated, and emotionally spacious. For this client, it works because privacy here does not feel hidden. It feels expansive. The Makgadikgadi brings a rare kind of stillness, and the camp's private format allows the first days to unfold without performance, noise, or social demand. This is where the trip steps away from ordinary life and into something far more cinematic, sensual, and self-contained.",
        images: [
          {
            src: "/journeys/the-intimate/makgadikgadi-dusk.jpg",
            alt: "Jack's Private Camp in the Makgadikgadi at dusk",
            position: "center 52%",
          },
          {
            src: "/journeys/the-intimate/jacks-camp-exterior.jpg",
            alt: "Interior at Jack's Private Camp with canvas and warm light",
            position: "center 48%",
          },
          {
            src: "/journeys/the-intimate/makgadikgadi-horseback.jpg",
            alt: "Makgadikgadi desert experience at golden hour",
            position: "center 58%",
          },
        ],
      },
      {
        name: "Duke's East",
        description:
          "Duke's East changes the emotional register of the journey. After the openness of the salt pans, the Delta feels richer, closer, and more enveloping. For this client archetype, that contrast matters. The camp offers depth rather than spectacle, with water, reeds, wildlife, and slower movement creating a more intimate rhythm. It is the point where the journey becomes immersive and tactile, and where privacy feels less like distance and more like complete absorption in place.",
        images: [
          {
            src: "/journeys/the-intimate/dukes-east-delta-boat.jpg",
            alt: "Okavango Delta scene at Duke's East",
            position: "center 60%",
          },
          {
            src: "/journeys/the-intimate/dukes-east-suite-interior.jpg",
            alt: "Suite interior at Duke's East",
            position: "center 50%",
          },
          {
            src: "/journeys/the-intimate/dukes-east-pool-deck.jpg",
            alt: "Delta water experience at golden hour",
            position: "center 52%",
          },
        ],
      },
      {
        name: "Victoria Falls Island Lodge",
        description:
          "Victoria Falls Island Lodge is the soft landing. After the emotional depth of the Delta, it introduces a more polished and celebratory kind of privacy without losing the intimacy established earlier in the journey. For this client, it works as a proper closing chapter: river-facing, atmospheric, and quietly indulgent. The pace relaxes, the setting becomes more refined, and the experience ends with a sense of ease rather than exhaustion.",
        images: [
          {
            src: "/journeys/the-intimate/victoria-falls-river-deck.jpg",
            alt: "River view at Victoria Falls Island Lodge",
            position: "center 55%",
          },
          {
            src: "/journeys/the-intimate/victoria-falls-suite.jpg",
            alt: "Island Treehouse Suite interior at Victoria Falls Island Lodge",
            position: "center 50%",
          },
          {
            src: "/journeys/the-intimate/victoria-falls-lodge-exterior.jpg",
            alt: "Zambezi river scene at sunset",
            position: "center 48%",
          },
        ],
      },
    ],
    inquiryHeading: "Start planning The Intimate.",
    inquiryBody:
      "Share a few details and a Mason & Wild specialist will come back to you personally with next steps, availability guidance, and the refinements needed to shape the journey around you.",
    proofLabel: "Privately Designed",
    proofNote:
      "Personally designed by Zannon James, with each property selected for privacy, atmosphere, operational excellence, and the ability to deliver a luxury experience that feels deeply personal rather than performative. Every partner included has been chosen for how well it delivers ease, confidence, and intimacy in practice, not just on paper.",
    nextJourney: {
      slug: "the-untamed",
      name: "The Untamed",
      outcome: "Connection",
      img: {
        src: "/journeys/the-untamed.jpg",
        alt: "Dense riverine forest at dawn",
      },
    },
  },
};

export function generateStaticParams() {
  return Object.keys(JOURNEYS).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const journey = JOURNEYS[params.slug];

  if (!journey) {
    return { title: "Journey Not Found" };
  }

  return {
    title: journey.name,
    description: `${journey.identity} A private African journey through Botswana & Victoria Falls, designed for discerning LGBTQ+ travellers.`,
  };
}

export default function JourneyDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const journey = JOURNEYS[params.slug];

  if (!journey) {
    notFound();
  }

  const collageImages = journey.galleryImgs.slice(0, 3);
  const carouselImages = [
    ...journey.galleryImgs,
    ...journey.accommodations.flatMap((accommodation) => accommodation.images),
    {
      src: "/journeys/the-intimate/makgadikgadi-meerkats.jpg",
      alt: "Meerkat encounter in the Makgadikgadi",
      position: "center 50%",
    },
  ].filter(
    (image, index, images) => index === images.findIndex((entry) => entry.src === image.src),
  );

  return (
    <>
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
            backgroundPosition: journey.heroImg.position ?? "center 40%",
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
          <span className="text-white/25 text-2xs" aria-hidden="true">
            /
          </span>
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

      <section className="border-b border-stone-200" aria-label="Journey details">
        <div className="container-site">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-px bg-stone-200">
            {journey.metadataItems.map((item, index) => (
              <Reveal key={item.label} delay={(index % 3) as 0 | 1 | 2 | 3 | 4}>
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

      <section className="section" aria-labelledby="narrative-heading">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-[clamp(48px,7vw,96px)]">
            <div className="lg:sticky lg:top-[100px] lg:self-start">
              <Reveal>
                <p className="label-tag mb-6">Journey Identity</p>
                <p
                  className="font-serif font-light text-display-sm text-stone-800 leading-[1.45] tracking-[-0.01em] mb-10"
                  id="narrative-heading"
                >
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
              {journey.body.map((paragraph, index) => (
                <Reveal key={index} delay={(index % 3) as 0 | 1 | 2 | 3 | 4}>
                  <p
                    className={
                      index === 0
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

      <section className="bg-page">
        <div className="px-[24px] pb-10 md:px-[48px] md:pb-16">
          <Reveal>
            <div className="grid min-h-0 grid-cols-1 gap-[10px] md:min-h-[540px] md:grid-cols-[1.15fr_0.85fr]">
              <div className="overflow-hidden md:h-full">
                <Image
                  src={collageImages[0].src}
                  alt={collageImages[0].alt}
                  width={1200}
                  height={1400}
                  className="h-[320px] w-full object-cover object-center transition-transform duration-[900ms] ease-out hover:scale-[1.03] md:h-full"
                  style={{ objectPosition: collageImages[0].position ?? "center" }}
                  priority
                />
              </div>

              <div className="grid h-[200px] grid-cols-2 gap-[10px] md:h-full md:grid-cols-1 md:grid-rows-2">
                {collageImages.slice(1).map((image) => (
                  <div key={image.alt} className="overflow-hidden">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={700}
                      height={520}
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

        <Reveal>
          <JourneyCarousel images={carouselImages} />
        </Reveal>
      </section>

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
                  What This Journey Includes
                </h2>
                <p className="font-serif font-light italic text-display-sm text-stone-900 mt-3">
                  Private by every
                  <br />
                  <em>measure.</em>
                </p>
              </div>
              <p className="text-base font-light text-stone-500 leading-relaxed max-w-[560px] self-end">
                {journey.pillarsIntro}
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-stone-200">
            {journey.pillars.map((pillar, index) => (
              <Reveal key={pillar.key} delay={(index % 3) as 0 | 1 | 2 | 3 | 4}>
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
              How the journey
              <br />
              <em>unfolds.</em>
            </h2>
            <p className="text-base font-light text-white/40 leading-relaxed max-w-[520px] mb-16">
              {journey.flowIntro}
            </p>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.07]">
            {journey.flow.map((phase, index) => (
              <Reveal key={phase.number} delay={(index % 4) as 0 | 1 | 2 | 3 | 4}>
                <div className="bg-stone-900 p-10 h-full">
                  <p className="font-serif font-light text-[2rem] text-white/[0.07] leading-none mb-6">
                    {phase.number}
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

      <section className="section border-b border-stone-200" aria-labelledby="accommodation-heading">
        <div className="container-site">
          <Reveal>
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_4fr] gap-[clamp(40px,6vw,80px)] items-start mb-14">
              <div>
                <p className="label-tag mb-4">Accommodation</p>
                <h2
                  className="font-serif font-light text-display-md text-stone-900"
                  id="accommodation-heading"
                >
                  Accommodation
                </h2>
                <p className="font-serif font-light italic text-display-sm text-stone-900 mt-3">
                  Where privacy takes
                  <br />
                  <em>form.</em>
                </p>
              </div>
              <p className="text-base font-light text-stone-500 leading-relaxed max-w-[560px] self-end">
                {journey.accommodationsIntro}
              </p>
            </div>
          </Reveal>

          <div className="flex flex-col">
            {journey.accommodations.map((accommodation, index) => (
              <div
                key={accommodation.name}
                className={[
                  "grid grid-cols-1 lg:grid-cols-[1.15fr_1.85fr] gap-[clamp(36px,6vw,72px)] py-[clamp(40px,5vw,64px)]",
                  index === 0 ? "" : "border-t border-stone-200",
                ].join(" ")}
              >
                <Reveal delay={(index % 3) as 0 | 1 | 2 | 3 | 4}>
                  <div className="lg:pr-8">
                    <p className="label-tag mb-4">Accommodation</p>
                    <h3 className="font-serif font-light text-display-sm text-stone-900 mb-6 tracking-[-0.012em]">
                      <em>{accommodation.name}</em>
                    </h3>
                    <p className="text-base font-light text-stone-500 leading-relaxed">
                      {accommodation.description}
                    </p>
                  </div>
                </Reveal>

                <Reveal delay={((index + 1) % 3) as 0 | 1 | 2 | 3 | 4}>
                  <div className="grid min-h-0 grid-cols-1 gap-[10px] md:min-h-[460px] md:grid-cols-[1.15fr_0.85fr]">
                    <div className="overflow-hidden md:h-full">
                      <Image
                        src={accommodation.images[0].src}
                        alt={accommodation.images[0].alt}
                        width={900}
                        height={1125}
                        className="h-[320px] w-full object-cover object-center transition-transform duration-[900ms] ease-out hover:scale-[1.03] md:h-full"
                        style={{ objectPosition: accommodation.images[0].position ?? "center" }}
                        loading="lazy"
                      />
                    </div>
                    <div className="grid h-[200px] grid-cols-2 gap-[10px] md:h-full md:grid-cols-1 md:grid-rows-2">
                      {accommodation.images.slice(1).map((image) => (
                        <div key={image.alt} className="overflow-hidden">
                          <Image
                            src={image.src}
                            alt={image.alt}
                            width={600}
                            height={450}
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
            ))}
          </div>
        </div>
      </section>

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
                  Start planning
                  <br />
                  <em>The Intimate.</em>
                </h2>
                <p className="text-base font-light text-stone-500 leading-relaxed max-w-[440px]">
                  {journey.inquiryBody}
                </p>
              </div>
            </Reveal>

            <Reveal delay={1}>
              <div className="lg:pl-16 lg:border-l lg:border-stone-200">
                <div className="border-t border-stone-200 pt-8 mb-10">
                  <p className="label-tag text-forest mb-3">{journey.proofLabel}</p>
                  <p className="text-sm font-light text-stone-500 leading-relaxed">
                    {journey.proofNote}
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
