import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { CTA, NAV_HREFS, FOUNDER } from "@/lib/constants";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "The Experience",
  description:
    "Privately designed African journeys built around philosophy, discretion, and inclusive intelligence. Every journey begins with a single conversation.",
  path: "/the-experience",
});

const PROCESS_STEPS = [
  {
    n:     "01",
    title: "Private Enquiry",
    body:
      "You submit a brief through our private onboarding form. We ask about landscape, feeling, and duration, not dates and budgets. A member of our team responds within 24-48 hours.",
  },
  {
    n:     "02",
    title: "Specialist Consultation",
    body:
      "Zannon or a senior specialist reviews your brief personally. We schedule a call to understand what you are looking for at depth, and what the journey should feel like from the first morning.",
  },
  {
    n:     "03",
    title: "Journey Design",
    body:
      "We build the itinerary from the ground up. Territory selection, lodge placement, guide assignment, routing, and daily rhythm, every element reviewed against our safety and vetting standards before anything is proposed.",
  },
  {
    n:     "04",
    title: "Arrival and Beyond",
    body:
      "Your specialist remains available throughout. Logistics are handled completely and quietly. On return, we debrief and archive your preferences. The relationship does not end at departure.",
  },
] as const;

type ProcessStep = (typeof PROCESS_STEPS)[number];

const getCompactProcessStepWrapperClass = (index: number): string =>
  [
    index < PROCESS_STEPS.length - 1 ? "border-b border-white/[0.14]" : "",
    index % 2 === 0 ? "sm:border-r sm:border-white/[0.14]" : "",
    index < PROCESS_STEPS.length - 2 ? "sm:border-b sm:border-white/[0.14]" : "sm:border-b-0",
  ]
    .filter(Boolean)
    .join(" ");

function ProcessStepCard({ step }: { step: ProcessStep }) {
  return (
    <div className="bg-stone-900 p-10 h-full">
      <p className="font-serif font-light text-[2.5rem] text-white/[0.07] leading-none mb-6">
        {step.n}
      </p>
      <p className="label-tag text-white/40 mb-4">{step.title}</p>
      <p className="text-sm font-light text-white/55 leading-relaxed">
        {step.body}
      </p>
    </div>
  );
}

const INCLUSIVE_ITEMS = [
  {
    key:   "safety",
    title: "LGBTQ+ Safety Intelligence",
    body:
      "Destinations are assessed against legal standing, local enforcement realities, hosting culture, guide values, and transit handling. The question is practical: how does it actually feel once you are there? Reviews are updated as conditions shift, and recommendations are adjusted when standards no longer hold.",
  },
  {
    key:   "liaison",
    title: "Cultural Liaison",
    body:
      "Guides and hosts are briefed for context and guest fit, so unfamiliar social terrain is handled with greater care and less friction.",
  },
  {
    key:   "routing",
    title: "Discreet Routing",
    body:
      "Private transfers, secluded arrivals, and lodge placements chosen for their distance from public access. Your presence in each destination is entirely your own.",
  },
  {
    key:   "vetted",
    title: "Partner Vetting",
    body:
      "Properties, guides, and operating partners are selected through firsthand regional knowledge, trusted relationships, and additional operational checks. Selection standards include how teams host in practice, not just what is promised in supplier material.",
  },
  {
    key:   "comfort",
    title: "Adaptive Comfort",
    body:
      "Arrangements that anticipate your specific needs, from room configurations to daily privacy. Your comfort is designed in, not improvised on arrival.",
  },
  {
    key:   "design",
    title: "Private by Design",
    body:
      "We do not work from templates. Each journey is built from a direct brief, with the route shaped around what you want to experience and what you would prefer to avoid.",
  },
] as const;

type InclusiveItem = (typeof INCLUSIVE_ITEMS)[number];

function InclusiveItemCard({ item }: { item: InclusiveItem }) {
  return (
    <div className="bg-forest hover:bg-[#446f50] transition-colors duration p-10 h-full">
      <p className="label-tag text-white mb-4">{item.title}</p>
      <p className="text-base font-light text-white leading-relaxed">
        {item.body}
      </p>
    </div>
  );
}

// Seven individual archetypes  -  The Social is referenced separately
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
      {/* â”€â”€â”€ Page hero â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
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
                    Each destination we recommend is assessed through
                    firsthand regional knowledge, verified partner relationships,
                    and ongoing operational review before it is proposed.
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

      {/* â”€â”€â”€ Full-bleed image â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
      <div className="relative w-full overflow-hidden">
        <Image
          src="/experience/private-conservancy-botswana.jpg"
          alt="Private conservancy at golden hour  -  Botswana"
          width={2400}
          height={1080}
          quality={95}
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

      {/* â”€â”€â”€ Philosophy split â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
      <section className="section-sm" aria-labelledby="philosophy-heading">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <Reveal>
            <div className="overflow-hidden">
              <Image
                src="/experience/how-we-work.jpg"
                alt="Elephant at the edge of a private waterhole at dusk"
                width={800}
                height={960}
                quality={95}
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

      {/* â”€â”€â”€ Process steps â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
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

          <div className="border border-white/[0.14]">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:hidden">
              {PROCESS_STEPS.map((step, i) => (
                <Reveal
                  key={step.n}
                  delay={(i % 4) as 0 | 1 | 2 | 3 | 4}
                  className={getCompactProcessStepWrapperClass(i)}
                >
                  <ProcessStepCard step={step} />
                </Reveal>
              ))}
            </div>

            <Reveal className="hidden lg:block">
              <div className="flex items-stretch">
                {PROCESS_STEPS.flatMap((step, i) => [
                  <div
                    key={`${step.n}-card`}
                    className="h-full flex-1 min-w-0"
                  >
                    <ProcessStepCard step={step} />
                  </div>,
                  ...(i < PROCESS_STEPS.length - 1
                    ? [
                        <div
                          key={`${step.n}-divider`}
                          className="w-px shrink-0 self-stretch bg-white/[0.14]"
                          aria-hidden="true"
                        />,
                      ]
                    : []),
                ])}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section border-b border-stone-200" aria-labelledby="journey-costs-heading">
        <div className="container-site max-w-[920px]">
          <h2
            className="font-serif font-light text-display-md text-stone-900 mb-8"
            id="journey-costs-heading"
          >
            What a Mason &amp; Wild Journey Costs
          </h2>
          <p className="text-base font-light text-stone-500 leading-relaxed mb-6">
            Mason &amp; Wild journeys start from $7,500.00 per person.
          </p>
          <p className="text-base font-light text-stone-500 leading-relaxed mb-6">
            That figure covers private guiding throughout, vetted accommodation selected for quality and fit, all internal transfers and logistics, and the design process itself - the research, the relationship, the operational intelligence that determines what is offered and what is not.
          </p>
          <p className="text-base font-light text-stone-500 leading-relaxed mb-6">
            What it also covers is less visible but more valuable: years of direct experience across these territories. Knowledge of which camps hold their standard in practice. Understanding of how to route a journey so that the transitions feel seamless rather than managed. Confidence in which guides will read the room correctly from the first morning.
          </p>
          <p className="text-base font-light text-stone-500 leading-relaxed">
            This is not a price that needs defending. It reflects what a journey of this quality, designed to this standard, for clients with these specific requirements, actually costs to deliver properly.
          </p>
        </div>
      </section>

      <section className="section border-b border-stone-200" aria-labelledby="selection-standards-heading">
        <div className="container-site">
          <Reveal>
            <div className="mb-12">
              <p className="label-tag mb-4">Selection Standards</p>
              <h2
                className="font-serif font-light text-display-md text-stone-900"
                id="selection-standards-heading"
              >
                How we select properties
                <br />
                and <em>partners.</em>
              </h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-[clamp(44px,6vw,84px)]">
            <Reveal>
              <p className="text-base font-light text-stone-500 leading-relaxed">
                Mason &amp; Wild does not select properties by star rating alone.
                A lodge may be beautiful and still be wrong for the journey.
                Properties are considered for setting, service rhythm, guiding
                quality, privacy, access, route logic, seasonal strength, and
                the way they make a traveller feel once they arrive.
              </p>
            </Reveal>

            <Reveal delay={1}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-px border border-stone-200 bg-stone-200">
                {[
                  "Firsthand stays and site inspections where available",
                  "Trusted supplier relationships and operational reliability",
                  "Privacy and discretion in real guest conditions",
                  "Service quality, setting, and emotional fit",
                  "LGBTQ+ comfort and briefing where relevant",
                  "Route compatibility and seasonal appropriateness",
                ].map((item) => (
                  <div key={item} className="bg-page px-6 py-6">
                    <p className="text-sm font-light text-stone-500 leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal>
            <p className="mt-8 text-sm font-light text-stone-500 leading-relaxed max-w-[900px]">
              Where firsthand experience is not available, Mason &amp; Wild relies
              on trusted professional relationships, additional checks, and
              conservative judgment before recommending a property.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section border-b border-stone-200" aria-labelledby="lgbtq-comfort-heading">
        <div className="container-site max-w-[980px]">
          <Reveal>
            <p className="label-tag mb-4">For LGBTQ+ Travellers</p>
            <h2
              className="font-serif font-light text-display-md text-stone-900 mb-8"
              id="lgbtq-comfort-heading"
            >
              Comfort is designed,
              <br />
              <em>not assumed.</em>
            </h2>
          </Reveal>

          <div className="flex flex-col gap-6">
            <Reveal>
              <p className="text-base font-light text-stone-500 leading-relaxed">
                For LGBTQ+ travellers, luxury is not only about the property. It
                is about not having to constantly calculate where you are, how
                you are being perceived, and whether your relationship, identity,
                or group dynamic will be understood.
              </p>
            </Reveal>
            <Reveal delay={1}>
              <p className="text-base font-light text-stone-500 leading-relaxed">
                Mason &amp; Wild treats this as part of the design work, from
                routing and property selection to rooming assumptions, guide
                briefing, destination context, and the balance between public and
                private expression.
              </p>
            </Reveal>
            <Reveal delay={2}>
              <p className="text-base font-light text-stone-500 leading-relaxed">
                The goal is emotional ease. Not tokenistic claims, not
                performative language, and not overexposure. Just thoughtful
                planning that reduces friction and helps the journey feel natural.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section border-b border-stone-200" aria-labelledby="firsthand-knowledge-heading">
        <div className="container-site max-w-[980px]">
          <Reveal>
            <h2
              className="font-serif font-light text-display-md text-stone-900 mb-8"
              id="firsthand-knowledge-heading"
            >
              Built on firsthand
              <br />
              African travel <em>knowledge.</em>
            </h2>
          </Reveal>
          <Reveal delay={1}>
            <p className="text-base font-light text-stone-500 leading-relaxed">
              Mason &amp; Wild is built from lived regional knowledge,
              professional travel experience, and direct relationships across the
              safari and hospitality world. The result is a more considered way
              to travel: less catalogue, more context.
            </p>
          </Reveal>
          <Reveal delay={2}>
            <p className="text-sm font-light text-stone-500 leading-relaxed mt-6">
              Founder review is led by {FOUNDER.name}, {FOUNDER.title}.
            </p>
          </Reveal>
        </div>
      </section>

      {/* â”€â”€â”€ Inclusive intelligence â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
      <section className="section bg-forest" aria-labelledby="inclusive-heading">
        <div className="container-site">
          <Reveal>
            <div className="mb-14">
              <p className="label-tag text-white mb-4">Inclusive Intelligence</p>
              <h2
                className="font-serif font-light text-display-lg text-white max-w-[560px]"
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:hidden border-t border-l border-white/[0.20]">
            {INCLUSIVE_ITEMS.map((item, i) => (
              <Reveal
                key={item.key}
                delay={(i % 3) as 0 | 1 | 2 | 3 | 4}
                className="h-full border-r border-b border-white/[0.20]"
              >
                <InclusiveItemCard item={item} />
              </Reveal>
            ))}
          </div>

          <Reveal className="hidden lg:block">
            <div className="grid grid-cols-[minmax(0,1fr)_1px_minmax(0,1fr)_1px_minmax(0,1fr)] border border-white/[0.20]">
              <InclusiveItemCard item={INCLUSIVE_ITEMS[0]} />
              <div className="bg-white/[0.20]" aria-hidden="true" />
              <InclusiveItemCard item={INCLUSIVE_ITEMS[1]} />
              <div className="bg-white/[0.20]" aria-hidden="true" />
              <InclusiveItemCard item={INCLUSIVE_ITEMS[2]} />

              <div className="col-span-5 h-px bg-white/[0.20]" aria-hidden="true" />

              <InclusiveItemCard item={INCLUSIVE_ITEMS[3]} />
              <div className="bg-white/[0.20]" aria-hidden="true" />
              <InclusiveItemCard item={INCLUSIVE_ITEMS[4]} />
              <div className="bg-white/[0.20]" aria-hidden="true" />
              <InclusiveItemCard item={INCLUSIVE_ITEMS[5]} />
            </div>
          </Reveal>
        </div>
      </section>

      {/* â”€â”€â”€ Archetype strip â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
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
                  Seven ways to experience <em>Africa.</em>
                </h2>
              </div>
              <Button href={NAV_HREFS.journeys} variant="ghost">
                {CTA.viewAllJourneys}
              </Button>
            </div>
          </Reveal>
        </div>

        {/* Seven archetype cards  -  horizontal scroll on mobile */}
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
          The Social  -  distinct from the seven individual journey archetypes.
          No outcome label, no equal card treatment. Positioned as a different
          kind of offering: invitation-led, membership-based, quieter register.
        */}
        <Reveal>
          <div className="border-t border-stone-200 bg-page-canvas">
            <div className="container-site py-14 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-8">
              <div className="max-w-xs">
                <p className="label-tag mb-3">By Invitation Only</p>
                <p className="font-serif font-light text-display-sm text-stone-900 leading-[1.2] tracking-[-0.01em]">
                  <em>The Social Shift</em>
                </p>
              </div>
              <div className="sm:max-w-[400px]">
                <p className="text-base font-light text-stone-500 leading-relaxed mb-6">
                  A small group of aligned travellers. One shared season.
                  Membership is by introduction only.
                </p>
                <Button href={NAV_HREFS.social} variant="ghost">
                  Start With The Social Shift
                </Button>
              </div>
            </div>
          </div>
        </Reveal>

      </section>

      <section className="section border-t border-b border-stone-200" aria-labelledby="why-specifically-heading">
        <div className="container-site max-w-[980px]">
          <Reveal>
            <h2
              className="font-serif font-light text-display-lg text-stone-900 mb-12"
              id="why-specifically-heading"
            >
              Why Mason &amp; Wild, Specifically
            </h2>
          </Reveal>

          <div className="flex flex-col gap-12">
            <Reveal delay={1}>
              <div>
                <h3 className="font-serif font-light text-display-sm text-stone-900 mb-5">
                  If you have worked with a US luxury travel advisor
                </h3>
                <p className="text-base font-light text-stone-500 leading-relaxed">
                  US-based luxury advisors offer Africa as one destination among many. Their knowledge is broad and their Africa relationships are typically mediated through DMCs and ground operators they have not personally verified. For a standard luxury traveller, that is often sufficient. For an LGBTQ+ couple for whom the operational detail - the guide, the camp culture, the transit routing - is the difference between a transformative journey and an exhausting one, it is not.
                </p>
                <p className="text-base font-light text-stone-500 leading-relaxed mt-6">
                  Mason &amp; Wild operates exclusively in Africa. The knowledge is not borrowed.
                </p>
              </div>
            </Reveal>

            <Reveal delay={2}>
              <div>
                <h3 className="font-serif font-light text-display-sm text-stone-900 mb-5">
                  If you have used an Africa DMC
                </h3>
                <p className="text-base font-light text-stone-500 leading-relaxed">
                  Destination management companies operate at volume. Their value is logistics at scale - ground handling, transfers, supplier relationships managed across hundreds of bookings. They are excellent at what they do. What they are not designed to do is hold a specific standard of curation for a specific client profile, or bring personal accountability to the design of each journey.
                </p>
                <p className="text-base font-light text-stone-500 leading-relaxed mt-6">
                  Mason &amp; Wild accepts a limited number of journeys each month. Every one is reviewed personally. That is a different model, designed for a different client.
                </p>
              </div>
            </Reveal>

            <Reveal delay={3}>
              <div>
                <h3 className="font-serif font-light text-display-sm text-stone-900 mb-5">
                  If you have travelled with an LGBTQ+ group travel company
                </h3>
                <p className="text-base font-light text-stone-500 leading-relaxed">
                  Group travel companies serve a community function - shared experience, collective identity, the particular pleasure of travelling with people who understand you. For clients who want that, they are the right choice.
                </p>
                <p className="text-base font-light text-stone-500 leading-relaxed mt-6">
                  Mason &amp; Wild is for clients who want the opposite: complete privacy, no shared vehicles, no group itinerary, no compromise on pace or preference. The LGBTQ+ awareness built into our model is operational, not social. It is there so that you travel as yourself, not as part of a category.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* â”€â”€â”€ CTA band â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
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
              Start Your Private Enquiry
            </Button>
            <Button
              href={NAV_HREFS.journeys}
              variant="ghost-light"
              arrow={false}
              className="hover:text-white hover:border-white"
            >
              {CTA.viewAllJourneys}
            </Button>
          </div>
          <p className="text-2xs tracking-[0.08em] text-white/40 mt-8 max-w-[760px] mx-auto leading-relaxed">
            Private enquiries are reviewed personally. Your details are handled with
            discretion and used only to understand whether Mason &amp; Wild is the
            right fit for your journey.
          </p>
        </Reveal>
      </section>
    </>
  );
}


