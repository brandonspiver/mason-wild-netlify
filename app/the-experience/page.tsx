import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { CTA, NAV_HREFS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "The Experience",
  description:
    "Privately designed African journeys built around philosophy, discretion, and inclusive intelligence. Every journey begins with a single conversation.",
};

const PROCESS_STEPS = [
  {
    n:     "01",
    title: "Private Inquiry",
    body:
      "You submit a brief through our private onboarding form. We ask about landscape, feeling, and duration  -  not dates and budgets. A member of our team responds within 48–72 hours.",
  },
  {
    n:     "02",
    title: "Specialist Consultation",
    body:
      "Zannon or a senior specialist reviews your brief personally. We schedule a call to understand what you are looking for at depth  -  and what the journey should feel like from the first morning.",
  },
  {
    n:     "03",
    title: "Journey Design",
    body:
      "We build the itinerary from the ground up. Territory selection, lodge placement, guide assignment, routing, and daily rhythm  -  every element reviewed against our safety and vetting standards before anything is proposed.",
  },
  {
    n:     "04",
    title: "Arrival and Beyond",
    body:
      "Your specialist remains available throughout. Logistics are handled completely and quietly. On return, we debrief and archive your preferences. The relationship does not end at departure.",
  },
] as const;

const INCLUSIVE_ITEMS = [
  {
    key:   "safety",
    title: "LGBTQ+ Safety Intelligence",
    body:
      "We navigate the political and social landscape of each territory with precision  -  assessing every destination for safety, legal standing, and suitability before it enters our collection.",
  },
  {
    key:   "liaison",
    title: "Cultural Liaison",
    body:
      "Our guides are briefed on the specific sensitivities and expectations of our clients. You are never navigating unfamiliar social terrain without support.",
  },
  {
    key:   "routing",
    title: "Discreet Routing",
    body:
      "Private transfers, secluded arrivals, and lodge placements chosen for their distance from public access. Your presence in each destination is entirely your own.",
  },
  {
    key:   "vetted",
    title: "Vetted Ecosystem",
    body:
      "Every lodge, pilot, and guide in our network is personally vetted. Standards are reviewed annually. There is no accreditation system  -  there is our own.",
  },
  {
    key:   "comfort",
    title: "Adaptive Comfort",
    body:
      "Arrangements that anticipate your specific needs  -  from room configurations to daily privacy. Your comfort is designed in, not improvised on arrival.",
  },
  {
    key:   "design",
    title: "Private by Design",
    body:
      "We do not work from templates. Each journey is a unique response to your brief  -  built from a direct conversation about what you are looking for, and what you would prefer to leave behind.",
  },
] as const;

// Four individual archetypes  -  The Social is referenced separately
const ARCHETYPES = [
  {
    outcome: "Solitude",
    name:    "The Intimate",
    href:    `${NAV_HREFS.journeys}/the-intimate`,
    desc:    "For those who need to disappear. Seclusion within private conservancies, where the only schedule is the land's.",
  },
  {
    outcome: "Connection",
    name:    "The Untamed",
    href:    `${NAV_HREFS.journeys}/the-untamed`,
    desc:    "Elemental Africa. Walking safaris and tracker-led navigation through dense territories.",
  },
  {
    outcome: "Wonder",
    name:    "The Romantic",
    href:    `${NAV_HREFS.journeys}/the-romantic`,
    desc:    "Cinematic moments designed for two. Intimacy before itineraries.",
  },
  {
    outcome: "Sovereignty",
    name:    "The Private Circuit",
    href:    `${NAV_HREFS.journeys}/the-private-circuit`,
    desc:    "Multi-territory. Private air access. Every arrival exclusively yours.",
  },
] as const;

export default function TheExperiencePage() {
  return (
    <>
      {/* ─── Page hero ─────────────────────────────────────────────────── */}
      <section
        className="pt-[var(--page-header-pt)] pb-[clamp(56px,8vw,96px)] border-b border-stone-200"
        aria-labelledby="experience-heading"
      >
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[clamp(48px,7vw,96px)] items-end">

            <div>
              <Reveal>
                <h1
                  className="font-serif font-light text-stone-900 text-[clamp(2.125rem,4.8vw,4.75rem)] leading-[1.08] tracking-[-0.015em]"
                  id="experience-heading"
                >
                  Curated African<br />
                  journeys for<br />
                  discerning <em>LGBTQ+<br />travellers.</em>
                </h1>
              </Reveal>
            </div>

            {/*
              Stat row replaced with three qualitative authority signals.
              Specific and credible without hard numbers that require substantiation.
            */}
            <Reveal delay={1}>
              <div className="flex flex-col gap-0 border-t border-stone-200 pt-8">
                <div className="pb-7">
                  <p className="label-tag mb-2">Territory</p>
                  <p className="text-base font-light text-stone-600 leading-relaxed">
                    Every destination in our collection has been assessed in
                    person. We do not list territories we have not visited
                    and vetted directly.
                  </p>
                </div>
                <div className="border-t border-stone-200 py-7">
                  <p className="label-tag mb-2">Access</p>
                  <p className="text-base font-light text-stone-600 leading-relaxed">
                    We work exclusively within private conservancies and
                    closed-access reserves. Shared game drives, communal
                    lodges, and open camps are not part of our collection.
                  </p>
                </div>
                <div className="border-t border-stone-200 pt-7">
                  <p className="label-tag mb-2">Volume</p>
                  <p className="text-base font-light text-stone-600 leading-relaxed">
                    We limit the number of journeys we accept each month.
                    This is not a capacity constraint  -  it is a quality one.
                  </p>
                </div>
              </div>
            </Reveal>

          </div>
        </div>
      </section>

      {/* ─── Full-bleed image ───────────────────────────────────────────── */}
      <div className="relative w-full overflow-hidden">
        <Image
          src="/experience/private-conservancy-botswana.jpg"
          alt="Private conservancy at golden hour  -  Botswana"
          width={2400}
          height={1080}
          className="w-full aspect-[21/9] object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20" />
        <div className="absolute bottom-5 left-[var(--px)] right-[var(--px)] flex justify-between">
          <span className="label-tag text-white/40">Private Conservancy  -  Botswana</span>
          <span className="label-tag text-white/40 hidden sm:block">
            The Silent Observer Collection
          </span>
        </div>
      </div>

      {/* ─── Philosophy split ───────────────────────────────────────────── */}
      <section className="section-sm" aria-labelledby="philosophy-heading">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <Reveal>
            <div className="overflow-hidden">
              <Image
                src="/experience/how-we-work.jpg"
                alt="Elephant at the edge of a private waterhole at dusk"
                width={800}
                height={960}
                className="w-full aspect-[4/5] md:aspect-auto md:h-full object-cover object-center transition-transform duration-[900ms] ease-out hover:scale-[1.02]"
                loading="lazy"
              />
            </div>
          </Reveal>
          <Reveal delay={1}>
            <div className="flex flex-col justify-center px-[clamp(40px,6vw,80px)] py-[clamp(48px,7vw,96px)] bg-page-subtle">
              <p className="label-tag mb-6">How We Work</p>
              <h2
                className="font-serif font-light text-display-md text-stone-900 mb-7"
                id="philosophy-heading"
              >
                Your journey begins<br />
                before you <em>arrive.</em>
              </h2>
              <p className="text-base font-light text-stone-500 leading-relaxed mb-6">
                It starts with a conversation  -  about the textures, sounds,
                and rhythms you want to be in. Not the lodges you want to
                stay in, or the animals you want to see. Those are outcomes,
                not intentions.
              </p>
              <p className="text-base font-light text-stone-500 leading-relaxed mb-10">
                We design around intention. Lodge selection, routing, guide
                assignment, and daily rhythm all follow from a single brief
                that we build with you directly. There are no packages.
                There are no templates. There is only your journey.
              </p>
              <Button href={NAV_HREFS.inquire} variant="ghost">
                Begin the Conversation
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─── Process steps ──────────────────────────────────────────────── */}
      <section
        className="bg-stone-900 px-[var(--px)] py-[var(--section-gap)]"
        aria-labelledby="process-heading"
      >
        <div className="max-w-site mx-auto">
          <Reveal>
            <p className="label-tag text-white/35 mb-5">The Curation Process</p>
            <h2
              className="font-serif font-light text-display-lg text-white max-w-[520px] mb-16"
              id="process-heading"
            >
              How a Mason &amp; Wild<br />
              journey is <em>designed.</em>
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.07]">
            {PROCESS_STEPS.map((step, i) => (
              <Reveal key={step.n} delay={(i % 4) as 0 | 1 | 2 | 3 | 4}>
                <div className="bg-stone-900 p-10 h-full">
                  <p className="font-serif font-light text-[2.5rem] text-white/[0.07] leading-none mb-6">
                    {step.n}
                  </p>
                  <p className="label-tag text-white/40 mb-4">{step.title}</p>
                  <p className="text-sm font-light text-white/55 leading-relaxed">
                    {step.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Inclusive intelligence ─────────────────────────────────────── */}
      <section className="section" aria-labelledby="inclusive-heading">
        <div className="container-site">
          <Reveal>
            <div className="mb-14">
              <p className="label-tag mb-4">Inclusive Intelligence</p>
              <h2
                className="font-serif font-light text-display-lg text-stone-900 max-w-[560px]"
                id="inclusive-heading"
              >
                Discretion and belonging<br />
                <em>are not in tension.</em>
              </h2>
            </div>
          </Reveal>

          {/*
            Uniform grid  -  no singled-out card, no hierarchy within the set.
            Each item carries equal weight; the grid reads as a considered list,
            not a designed feature matrix.
          */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-stone-200">
            {INCLUSIVE_ITEMS.map((item, i) => (
              <Reveal key={item.key} delay={(i % 3) as 0 | 1 | 2 | 3 | 4}>
                <div className="bg-page hover:bg-page-subtle transition-colors duration p-10 h-full">
                  <p className="label-tag mb-4">{item.title}</p>
                  <p className="text-base font-light text-stone-500 leading-relaxed">
                    {item.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Archetype strip ────────────────────────────────────────────── */}
      <section aria-labelledby="archetypes-heading">

        {/* Header */}
        <div className="container-site pt-[var(--section-gap)] pb-12">
          <Reveal>
            <div className="flex items-end justify-between gap-6 flex-wrap">
              <div>
                <p className="label-tag mb-4">Individual Journeys</p>
                <h2
                  className="font-serif font-light text-display-lg text-stone-900"
                  id="archetypes-heading"
                >
                  Four ways to experience <em>Africa.</em>
                </h2>
              </div>
              <Button href={NAV_HREFS.journeys} variant="ghost">
                {CTA.viewAllJourneys}
              </Button>
            </div>
          </Reveal>
        </div>

        {/* Four archetype cards  -  horizontal scroll on mobile */}
        <Reveal>
          <div className="overflow-x-auto border-t border-stone-200">
            <div className="flex min-w-max md:min-w-0 md:grid md:grid-cols-4 divide-x divide-stone-200">
              {ARCHETYPES.map(({ outcome, name, href, desc }) => (
                <Link
                  key={href}
                  href={href}
                  className="flex-1 min-w-[280px] md:min-w-0 border-b border-stone-200 p-8 md:p-10 group hover:bg-page-subtle transition-colors duration block"
                >
                  <p className="label-tag mb-3 group-hover:text-forest transition-colors duration">
                    {outcome}
                  </p>
                  <p className="font-serif font-light text-display-sm text-stone-900 leading-[1.15] tracking-[-0.01em] mb-4">
                    <em>{name}</em>
                  </p>
                  <p className="text-sm font-light text-stone-500 leading-relaxed">
                    {desc}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </Reveal>

        {/*
          The Social  -  distinct from the four individual journey archetypes.
          No outcome label, no equal card treatment. Positioned as a different
          kind of offering: invitation-led, membership-based, quieter register.
        */}
        <Reveal>
          <div className="border-t border-stone-200 bg-page-canvas">
            <div className="container-site py-14 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-8">
              <div className="max-w-xs">
                <p className="label-tag mb-3">By Invitation Only</p>
                <p className="font-serif font-light text-display-sm text-stone-900 leading-[1.2] tracking-[-0.01em]">
                  The Social  - <br />
                  <em>A Curated Circle</em>
                </p>
              </div>
              <div className="sm:max-w-[400px]">
                <p className="text-base font-light text-stone-500 leading-relaxed mb-6">
                  A small group of aligned travellers. One shared season.
                  Membership is by introduction only.
                </p>
                <Button href={NAV_HREFS.social} variant="ghost">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </Reveal>

      </section>

      {/* ─── CTA band ───────────────────────────────────────────────────── */}
      <section className="bg-forest px-[var(--px)] py-[clamp(72px,10vw,120px)] text-center">
        <Reveal>
          <p className="label-tag text-white/36 mb-5">Private Onboarding</p>
          <h2 className="font-serif font-light text-display-2xl text-white mb-5 tracking-tighter">
            Begin<br /><em>Your Journey.</em>
          </h2>
          <p className="text-base font-light text-white/50 leading-relaxed max-w-[400px] mx-auto mb-12">
            We take on a limited number of journeys each month.
            Our process is personal and unhurried.
          </p>
          <div className="flex items-center justify-center gap-8 flex-wrap">
            <Button href={NAV_HREFS.inquire} variant="outline-light">
              {CTA.requestPrivateAccess}
            </Button>
            <Button href={NAV_HREFS.journeys} variant="ghost-light" arrow={false}>
              {CTA.viewAllJourneys}
            </Button>
          </div>
        </Reveal>
      </section>
    </>
  );
}
