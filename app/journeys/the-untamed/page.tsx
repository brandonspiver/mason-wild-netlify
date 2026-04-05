import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { CTA, NAV_HREFS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "The Untamed",
  description:
    "A privately designed Mason & Wild safari through South Africa and Zambia, shaped around immersion, emotional pace, and quiet operational confidence.",
};

type ImageAsset = {
  readonly src: string;
  readonly alt: string;
  readonly position?: string;
};

type OverviewItem = {
  readonly label: string;
  readonly value: string;
  readonly body: string;
};

type FitPoint = {
  readonly title: string;
  readonly body: string;
};

type DayEntry = {
  readonly day: string;
  readonly title: string;
  readonly location: string;
  readonly mood: string;
  readonly body: string;
};

type Accommodation = {
  readonly name: string;
  readonly fit: string;
  readonly description: string;
  readonly images: readonly [ImageAsset, ImageAsset, ImageAsset];
};

const overviewItems: readonly OverviewItem[] = [
  {
    label: "Journey",
    value: "8 nights",
    body: "A two-country progression from polished bush immersion to a softer, river-led finish in Zambia.",
  },
  {
    label: "Flow",
    value: "Monwana → Lower Zambezi → Livingstone",
    body: "Three chapters, each placed to alter the emotional pace rather than simply add another stop.",
  },
  {
    label: "Style",
    value: "Privately guided",
    body: "Handled with private transfers, discreet support, and enough structure to feel held without ever feeling managed.",
  },
  {
    label: "Arc",
    value: "Immersion → release",
    body: "The journey begins with depth and intensity, then resolves into river light, ease, and a more polished close.",
  },
];

const fitPoints: readonly FitPoint[] = [
  {
    title: "Privacy without isolation",
    body: "This works for a client who wants the intimacy of a privately handled journey, but still wants places with atmosphere, design credibility, and a sense of life rather than emptiness.",
  },
  {
    title: "A stronger emotional pace",
    body: "The sequence avoids the usual safari sameness. Monwana gives you immediate quality and wildlife density, the Lower Zambezi deepens the experience into something quieter and more elemental, and Livingstone allows the journey to soften before departure.",
  },
  {
    title: "Design and operational credibility",
    body: "Each property earns its place for a different reason: Monwana for polish and guiding access, the Zambezi chapter for texture and immersion, and the closing lodge for grace, comfort, and release. Together, they feel intelligent rather than assembled.",
  },
  {
    title: "Not a generic safari",
    body: "This is not built around a checklist of sightings. It is built around how it feels to move through Africa well: well-held, deeply private, visually composed, and emotionally progressive from beginning to end.",
  },
];

const dayEntries: readonly DayEntry[] = [
  {
    day: "Day 1",
    title: "Arrive into the Wild Properly",
    location: "Monwana, Greater Kruger",
    mood: "Calm, polished, immediate",
    body: "Arrive in South Africa and transfer through to Monwana, where the journey begins with a sense of polish rather than recovery. The first afternoon is left intentionally light: enough time to settle, understand the rhythm of the camp, and head into the reserve without haste. Dinner is quiet, beautifully handled, and deliberately unforced. The point is not to impress too early. It is to let the wild arrive cleanly.",
  },
  {
    day: "Day 2",
    title: "Lift Above It Early",
    location: "Monwana, Greater Kruger",
    mood: "Cinematic, expansive, quietly exhilarating",
    body: "Begin very early with a hot air balloon flight at first light, adding a different register to the journey before the day returns to earth. From above, the landscape reads differently: wider, slower, less theatrical. Back at Monwana, the rhythm settles into safari again, with time for a late breakfast, rest, and an afternoon drive shaped around light and animal movement. It becomes a day of contrast, and that is precisely why it belongs here.",
  },
  {
    day: "Day 3",
    title: "Stay with the Depth",
    location: "Monwana, Greater Kruger",
    mood: "Immersive, alert, instinctive",
    body: "Your final full day at Monwana goes deeper rather than broader. This is where guiding matters most: slower tracking, stronger reading of the landscape, and enough flexibility to follow the quality of the moment rather than the expectation of a full schedule. The pace is immersive, but not aggressive. By the end of this chapter, the journey should already feel lived in.",
  },
  {
    day: "Day 4",
    title: "Cross into River Country",
    location: "Lower Zambezi",
    mood: "Transitional, textural, atmospheric",
    body: "Fly onward into Zambia and move into the Lower Zambezi chapter, where the atmosphere changes immediately. The landscape feels less concentrated and more breathing, with water, tree line, and river movement softening the intensity of Greater Kruger. This is an important hinge day. The transition is part of the design, not a logistical necessity to get through.",
  },
  {
    day: "Day 5",
    title: "Read the River",
    location: "Lower Zambezi",
    mood: "Quietly elemental",
    body: "The Lower Zambezi should feel less performative and more instinctive. Days here are shaped by the river itself: boating, watching edges and crossings, and allowing the safari to become more observational. The guiding is still precise, but the mood has shifted. There is more texture, more stillness, and less need to chase momentum.",
  },
  {
    day: "Day 6",
    title: "Hold the Middle Chapter",
    location: "Lower Zambezi",
    mood: "Unhurried, immersive, private",
    body: "Remain in the river chapter long enough for it to settle properly. This is what separates a considered itinerary from a hurried one. Time here allows the rhythm to become your own, with room for slower mornings, a stronger sense of place, and the kind of private safari experience that feels expensive not because it is loud, but because it is deeply unforced.",
  },
  {
    day: "Day 7",
    title: "Soften into the Finish",
    location: "Livingstone",
    mood: "Lighter, polished, celebratory",
    body: "Travel onward to Livingstone for a final chapter that releases the tension built earlier in the journey. The atmosphere becomes more polished, but not generic. After the Lower Zambezi, this shift is useful. It brings space to exhale, to enjoy design and comfort again, and to let the trip end with elegance rather than fatigue.",
  },
  {
    day: "Day 8",
    title: "Let the Last Day Breathe",
    location: "Livingstone",
    mood: "Open, golden, resolved",
    body: "The final full day should not feel crammed. Time at the lodge, time on the river, and the option of visiting the Falls are held within a looser frame so the journey closes with ease. There is still plenty to do, but the value here is in how it is paced. You leave with the feeling of completion, not depletion.",
  },
  {
    day: "Day 9",
    title: "Depart Cleanly",
    location: "Livingstone",
    mood: "Simple, assured",
    body: "A final breakfast and onward departure, with the logistics handled quietly and without drag. The close is intentionally composed. A journey like this should not unravel into admin at the end.",
  },
];

const accommodations: readonly Accommodation[] = [
  {
    name: "Monwana",
    fit: "Polish, wildlife density, and a strong opening signal.",
    description:
      "Monwana works because it gives this journey immediate quality. The guiding is strong, the reserve access is serious, and the design has enough restraint to feel expensive without becoming showy. For this client archetype, that matters. You want the trip to begin with confidence and with atmosphere, not with a night that feels transitional. Monwana delivers a first chapter that is visually resolved, operationally smooth, and emotionally convincing from the moment you arrive.",
    images: [
      {
        src: "/journeys/the-untamed/10.jpg",
        alt: "Buffalo herd near Monwana at golden light",
        position: "center 52%",
      },
      {
        src: "/journeys/the-untamed/7.jpg",
        alt: "Suite interior at Monwana",
        position: "center 48%",
      },
      {
        src: "/journeys/the-untamed/15.jpg",
        alt: "Monwana exterior in warm evening light",
        position: "center 50%",
      },
    ],
  },
  {
    name: "Lolebezi",
    fit: "The emotional core of the journey.",
    description:
      "Lolebezi earns its place because it changes the language of the safari. After the intensity and polish of Greater Kruger, the Lower Zambezi introduces more texture, more river movement, and a more instinctive kind of immersion. It suits a client who values atmosphere and a stronger sense of absorption in place. The design is quiet, the setting is superb, and the overall experience feels less like theatre and more like the wild finding its own pace around you.",
    images: [
      {
        src: "/journeys/the-untamed/1.jpg",
        alt: "River scene at Lolebezi at dusk",
        position: "center 58%",
      },
      {
        src: "/journeys/the-untamed/4.jpg",
        alt: "Riverside lounge at Lolebezi",
        position: "center 52%",
      },
      {
        src: "/journeys/the-untamed/14.jpg",
        alt: "Sunset river moment in the Lower Zambezi",
        position: "center 55%",
      },
    ],
  },
  {
    name: "Thorntree River Lodge",
    fit: "A refined closing chapter that does not lose the journey's integrity.",
    description:
      "Thorntree works as the finish because it introduces polish without flattening the emotional intelligence of the route. After several nights of deeper immersion, the experience needs to relax. This property allows exactly that: river frontage, stronger design, excellent hospitality, and the kind of comfort that feels like a reward rather than a retreat from the wild. It suits a client who values a graceful close and wants the final nights to feel elevated, spacious, and socially effortless.",
    images: [
      {
        src: "/journeys/the-untamed/11.jpg",
        alt: "River-facing bath deck at Thorntree River Lodge",
        position: "center 52%",
      },
      {
        src: "/journeys/the-untamed/17.jpg",
        alt: "Open-air dining setup at Thorntree River Lodge",
        position: "center 50%",
      },
      {
        src: "/journeys/the-untamed/5.jpg",
        alt: "Twilight lodge atmosphere on the Zambezi",
        position: "center 50%",
      },
    ],
  },
];

const inclusions = [
  "Meet and greet on arrival, private transfers, and all inter-camp logistics handled in advance.",
  "Three nights at Monwana with privately guided safari rhythm.",
  "Hot air balloon experience at first light on Day 2 at Monwana.",
  "Three nights in the Lower Zambezi with river-based and safari activities shaped around conditions.",
  "Two nights in Livingstone with lodge-based experiences and time at the Falls where desired.",
  "Mason & Wild journey design, pre-departure handling, and direct specialist support throughout.",
];

const exclusions = [
  "International flights.",
  "Premium wines, cellar upgrades, and private buyouts unless specified.",
  "Travel insurance, visas, and personal items.",
  "Any conservation or community contributions not already included in the confirmed costing.",
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <p className="label-tag mb-5">{children}</p>;
}

export default function UntamedPage() {
  return (
    <main className="bg-page">
      <section className="relative min-h-svh overflow-hidden border-b border-stone-200">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: [
              "linear-gradient(to bottom, rgba(18,16,12,0.2) 0%, rgba(18,16,12,0.12) 32%, rgba(18,16,12,0.6) 76%, rgba(18,16,12,0.84) 100%)",
              "url('/journeys/the-untamed/2.jpg')",
            ].join(", "),
            backgroundPosition: "center 42%",
          }}
          aria-hidden="true"
        />

        <div className="relative z-10 flex min-h-svh flex-col justify-between px-[var(--px)] py-[clamp(28px,4vw,42px)]">
          <div className="flex items-center justify-between">
            <Link
              href={NAV_HREFS.home}
              className="font-serif text-[clamp(1.2rem,2vw,1.5rem)] text-white/92"
            >
              Mason &amp; Wild
            </Link>
            <Link
              href={NAV_HREFS.journeys}
              className="text-2xs uppercase tracking-[0.22em] text-white/55 transition-colors duration hover:text-white/85"
            >
              Journey Collection
            </Link>
          </div>

          <div className="container-site py-[clamp(72px,11vh,120px)]">
            <Reveal>
              <div className="max-w-[760px]">
                <p className="mb-6 text-2xs uppercase tracking-[0.22em] text-white/55">
                  South Africa &amp; Zambia
                </p>
                <h1 className="font-serif text-[clamp(4rem,10vw,8.8rem)] font-light leading-[0.92] tracking-[-0.03em] text-white">
                  Untamed
                </h1>
                <p className="mt-6 max-w-[560px] font-serif text-[clamp(1.15rem,2.6vw,1.6rem)] font-light italic leading-relaxed text-white/72">
                  A privately designed safari for travellers who want Africa to feel elemental,
                  held, and deeply real from the first night onward.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="border-b border-stone-200 py-[var(--section-gap)]">
        <div className="container-site grid gap-[clamp(40px,6vw,88px)] lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <div className="max-w-[720px]">
              <SectionLabel>Opening</SectionLabel>
              <h2 className="font-serif text-display-lg font-light leading-[1.04] tracking-[-0.02em] text-stone-900">
                This is a safari built around pace, privacy, and the value of
                <br />
                <em>arriving properly.</em>
              </h2>
            </div>
          </Reveal>

          <Reveal delay={1}>
            <div className="max-w-[540px] space-y-6">
              <p className="font-serif text-[clamp(1.2rem,2vw,1.55rem)] font-light leading-[1.5] text-stone-800">
                The Untamed has been designed for clients who want the wild to feel close,
                but never chaotic; luxurious, but never over-handled.
              </p>
              <p className="text-base font-light leading-relaxed text-stone-500">
                It begins with immediate quality at Monwana, where the first chapter is
                polished, cinematic, and operationally effortless. From there, the journey
                moves into the Lower Zambezi, where river light, wildlife movement, and
                quieter guiding create a more instinctive kind of immersion. It closes in
                Livingstone, where the atmosphere softens into ease and the final days feel
                socially light, graceful, and fully resolved.
              </p>
              <p className="text-base font-light leading-relaxed text-stone-500">
                The result is not a safari built around volume. It is a journey with a
                stronger emotional arc: intensity, then texture, then release.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-b border-stone-200 py-[var(--section-gap)]">
        <div className="container-site">
          <Reveal>
            <div className="mb-14 max-w-[720px]">
              <SectionLabel>Journey Overview</SectionLabel>
              <h2 className="font-serif text-display-md font-light text-stone-900">
                The route is concise.
                <br />
                The experience is
                <br />
                <em>layered.</em>
              </h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 gap-px bg-stone-200 md:grid-cols-2 xl:grid-cols-4">
            {overviewItems.map((item, index) => (
              <Reveal key={item.label} delay={(index % 3) as 0 | 1 | 2 | 3 | 4}>
                <div className="bg-page px-8 py-10">
                  <p className="label-tag mb-4">{item.label}</p>
                  <p className="font-serif text-2xl font-light italic leading-snug text-stone-900">
                    {item.value}
                  </p>
                  <p className="mt-4 text-sm font-light leading-relaxed text-stone-500">
                    {item.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={1}>
            <div className="mt-16 grid gap-10 border-t border-stone-200 pt-10 lg:grid-cols-[1fr_2fr]">
              <div>
                <SectionLabel>Vetted</SectionLabel>
              </div>
              <p className="max-w-[720px] text-base font-light leading-relaxed text-stone-500">
                This journey is framed with quiet authority rather than spectacle. The
                properties have been chosen for guiding quality, design integrity, and the
                ability to deliver a private experience that feels operationally serious as
                well as emotionally rewarding.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-b border-stone-200 py-[var(--section-gap)]">
        <div className="container-site">
          <Reveal>
            <div className="mb-16 max-w-[780px]">
              <SectionLabel>Why It Fits</SectionLabel>
              <h2 className="font-serif text-display-md font-light text-stone-900">
                Why this journey works for
                <br />
                <em>this client.</em>
              </h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 gap-px bg-stone-200 md:grid-cols-2">
            {fitPoints.map((point, index) => (
              <Reveal key={point.title} delay={(index % 3) as 0 | 1 | 2 | 3 | 4}>
                <div className="bg-page px-10 py-12">
                  <h3 className="font-serif text-[1.6rem] font-light italic leading-snug text-stone-900">
                    {point.title}
                  </h3>
                  <p className="mt-5 text-base font-light leading-relaxed text-stone-500">
                    {point.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#181613] px-[var(--px)] py-[var(--section-gap)]">
        <div className="container-site">
          <Reveal>
            <div className="mb-16 max-w-[720px]">
              <p className="label-tag mb-5 text-white/35">Day by Day</p>
              <h2 className="font-serif text-display-lg font-light leading-[1.02] text-white">
                A day-by-day
                <br />
                <em>that still breathes.</em>
              </h2>
              <p className="mt-6 max-w-[560px] text-base font-light leading-relaxed text-white/45">
                The structure is clear, but the writing follows mood and movement rather
                than turning the journey into a timetable.
              </p>
            </div>
          </Reveal>

          <div className="space-y-px bg-white/10">
            {dayEntries.map((entry, index) => (
              <Reveal key={entry.day} delay={(index % 3) as 0 | 1 | 2 | 3 | 4}>
                <article className="grid gap-10 bg-[#181613] px-8 py-10 md:grid-cols-[160px_220px_1fr] md:px-12">
                  <div>
                    <p className="font-serif text-[2.1rem] font-light leading-none text-white/10">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                    <p className="mt-4 text-2xs uppercase tracking-[0.22em] text-white/38">
                      {entry.day}
                    </p>
                  </div>

                  <div>
                    <p className="text-2xs uppercase tracking-[0.22em] text-white/32">
                      {entry.location}
                    </p>
                    <h3 className="mt-3 font-serif text-[1.45rem] font-light italic leading-snug text-white/82">
                      {entry.title}
                    </h3>
                    <p className="mt-3 text-sm font-light leading-relaxed text-white/42">
                      {entry.mood}
                    </p>
                  </div>

                  <p className="max-w-[760px] text-[15px] font-light leading-relaxed text-white/54">
                    {entry.body}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-stone-200 py-[var(--section-gap)]">
        <div className="container-site">
          <Reveal>
            <div className="mb-16 max-w-[760px]">
              <SectionLabel>Accommodation</SectionLabel>
              <h2 className="font-serif text-display-md font-light text-stone-900">
                Where the journey takes
                <br />
                <em>its shape.</em>
              </h2>
              <p className="mt-6 max-w-[560px] text-base font-light leading-relaxed text-stone-500">
                Each property has been selected not as a standalone trophy, but for how it
                shifts the emotional and operational logic of the trip.
              </p>
            </div>
          </Reveal>

          <div className="space-y-0">
            {accommodations.map((property, index) => (
              <section
                key={property.name}
                className={[
                  "grid gap-[clamp(40px,6vw,72px)] py-[clamp(42px,5vw,68px)]",
                  index === 0 ? "" : "border-t border-stone-200",
                  "lg:grid-cols-[0.9fr_1.1fr]",
                ].join(" ")}
              >
                <Reveal delay={(index % 3) as 0 | 1 | 2 | 3 | 4}>
                  <div className="max-w-[500px]">
                    <p className="label-tag mb-4">Accommodation</p>
                    <h3 className="font-serif text-display-sm font-light tracking-[-0.012em] text-stone-900">
                      <em>{property.name}</em>
                    </h3>
                    <p className="mt-6 font-serif text-[1.15rem] font-light italic leading-relaxed text-stone-700">
                      {property.fit}
                    </p>
                    <p className="mt-6 text-base font-light leading-relaxed text-stone-500">
                      {property.description}
                    </p>
                  </div>
                </Reveal>

                <Reveal delay={((index + 1) % 3) as 0 | 1 | 2 | 3 | 4}>
                  <div className="grid min-h-0 grid-cols-1 gap-[10px] md:min-h-[500px] md:grid-cols-[1.2fr_0.8fr]">
                    <div className="overflow-hidden md:h-full">
                      <Image
                        src={property.images[0].src}
                        alt={property.images[0].alt}
                        width={1000}
                        height={1200}
                        className="h-[360px] w-full object-cover transition-transform duration-[900ms] ease-out hover:scale-[1.03] md:h-full"
                        style={{ objectPosition: property.images[0].position ?? "center" }}
                      />
                    </div>
                    <div className="grid h-[220px] grid-cols-2 gap-[10px] md:h-full md:grid-cols-1 md:grid-rows-2">
                      {property.images.slice(1).map((image) => (
                        <div key={image.alt} className="overflow-hidden">
                          <Image
                            src={image.src}
                            alt={image.alt}
                            width={600}
                            height={480}
                            className="h-full w-full object-cover transition-transform duration-[900ms] ease-out hover:scale-[1.03]"
                            style={{ objectPosition: image.position ?? "center" }}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </Reveal>
              </section>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-stone-200 py-[var(--section-gap)]">
        <div className="container-site grid gap-[clamp(44px,7vw,88px)] lg:grid-cols-[1fr_1fr]">
          <Reveal>
            <div>
              <SectionLabel>What Is Included</SectionLabel>
              <h2 className="font-serif text-display-md font-light text-stone-900">
                Clear enough to scan.
                <br />
                <em>Quiet enough to feel premium.</em>
              </h2>
            </div>
          </Reveal>

          <Reveal delay={1}>
            <div className="grid gap-10 md:grid-cols-2">
              <div>
                <p className="label-tag mb-5">Inclusions</p>
                <ul className="space-y-4 text-sm font-light leading-relaxed text-stone-500">
                  {inclusions.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="label-tag mb-5">Exclusions</p>
                <ul className="space-y-4 text-sm font-light leading-relaxed text-stone-500">
                  {exclusions.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-b border-stone-200 py-[var(--section-gap)]">
        <div className="container-site grid gap-[clamp(44px,6vw,80px)] lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <div>
              <SectionLabel>Investment</SectionLabel>
              <h2 className="font-serif text-display-md font-light text-stone-900">
                High-value travel should feel
                <br />
                <em>considered before it feels expensive.</em>
              </h2>
            </div>
          </Reveal>

          <Reveal delay={1}>
            <div className="max-w-[620px]">
              <p className="font-serif text-[1.7rem] font-light italic leading-snug text-stone-900">
                From $24,500 per person, based on two travelling privately.
              </p>
              <p className="mt-6 text-base font-light leading-relaxed text-stone-500">
                Final investment depends on season, flight routing, and the exact lodge
                combination confirmed at the time of planning. This is positioned as a
                fully handled private journey rather than an off-the-shelf itinerary, so
                the cost reflects both the product and the operational integrity behind it.
              </p>
              <p className="mt-5 text-base font-light leading-relaxed text-stone-500">
                If the core structure is right, Mason &amp; Wild will refine the finer
                details around dates, rooming, and preferred pace before anything is
                confirmed.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-stone-900 px-[var(--px)] py-[var(--section-gap)]">
        <div className="container-site grid gap-[clamp(48px,7vw,96px)] lg:grid-cols-[1fr_1fr] lg:items-end">
          <Reveal>
            <div className="max-w-[640px]">
              <p className="label-tag mb-5 text-white/35">Next Steps</p>
              <h2 className="font-serif text-display-lg font-light leading-[1.02] text-white">
                If this feels right,
                <br />
                the next step is simple.
              </h2>
              <p className="mt-6 max-w-[520px] text-base font-light leading-relaxed text-white/48">
                Share a few details and Mason &amp; Wild will come back personally with
                availability guidance, refinements, and the practical next moves needed to
                shape the journey around you. No hard sell. Just a cleaner conversation
                from the outset.
              </p>
            </div>
          </Reveal>

          <Reveal delay={1}>
            <div className="lg:justify-self-end">
              <div className="border-t border-white/10 pt-8">
                <p className="label-tag mb-4 text-white/32">Mason &amp; Wild</p>
                <p className="max-w-[440px] text-sm font-light leading-relaxed text-white/45">
                  Privately designed African journeys for discerning LGBTQ+ travellers,
                  built with discretion, taste, and first-hand product judgment.
                </p>
                <div className="mt-10 flex flex-col items-start gap-5">
                  <Button href={NAV_HREFS.inquire} variant="primary">
                    {CTA.requestPrivateAccess}
                  </Button>
                  <Button href={NAV_HREFS.journeys} variant="ghost" arrow={false}>
                    {CTA.viewAllJourneys}
                  </Button>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
