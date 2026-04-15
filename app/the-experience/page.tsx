import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { CTA, NAV_HREFS } from "@/lib/constants";
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
      "You submit a brief through our private onboarding form. We ask about landscape, feeling, and duration  -  not dates and budgets. A member of our team responds within 24-48 hours.",
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
      "Every destination in our collection is assessed against a specific set of criteria before it is offered: legal standing, local enforcement practice — not just what the law says, but how it operates on the ground — guide values, camp culture, staff orientation, room configuration defaults, and how transit between properties is handled. Legislation alone tells us very little. What matters is the real-world experience of travelling through a place, and whether that experience holds up when it is no longer in a private lodge. This is not a static assessment. Countries change. Regional attitudes shift. Our evaluations are reviewed before each season and updated when the situation on the ground requires it. If a destination no longer meets our standard, it leaves the collection.",
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
    title: "Partner Vetting",
    body:
      "Every lodge, guide, and operator we work with has been visited and assessed in person. Not reviewed remotely. Not shortlisted from supplier materials. Visited, stayed in, and approved against a standard that includes how staff behave in practice, how the camp responds to LGBTQ+ guests outside of formal policy, and whether the atmosphere holds up in the way it is described. If Zannon has not been there personally, it is not in our collection.",
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

      <section className="section" aria-label="Planning realities and specialist design process">
        <div className="container-site max-w-[920px]">
          <p className="text-base font-light text-stone-500 leading-relaxed mb-6">
            You are researching camps across four countries, reading operator websites that all say the same things, trying to determine which LGBTQ+-friendly claims are operational and which are marketing. You are weighing up legal frameworks, social climates, transit routes, and guide cultures — without a reliable way to distinguish between them. You are managing significant spend and a once-in-a-decade trip with incomplete information and no named person accountable for the outcome.
          </p>
          <p className="text-base font-light text-stone-500 leading-relaxed mb-6">
            The journey has not started and it is already work.
          </p>
          <p className="text-base font-light text-stone-500 leading-relaxed mb-6">
            You submit a brief. A specialist who has been to the camps, knows the guides, and understands the specific texture of travelling as an LGBTQ+ couple across this continent reviews it personally. A journey is designed around your pace, your privacy requirements, and the emotional register you want the trip to hold. Every property has been visited and approved. Every guide has been assessed. Every transit point has been considered.
          </p>
          <p className="text-base font-light text-stone-500 leading-relaxed">
            You arrive. Everything is in place. The only work left is being present.
          </p>
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.07] border border-white/[0.10]">
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

      <section className="section border-b border-stone-200" aria-labelledby="journey-costs-heading">
        <div className="container-site max-w-[920px]">
          <h2
            className="font-serif font-light text-display-md text-stone-900 mb-8"
            id="journey-costs-heading"
          >
            What a Mason &amp; Wild Journey Costs
          </h2>
          <p className="text-base font-light text-stone-500 leading-relaxed mb-6">
            Mason &amp; Wild journeys start from $15,000 per person.
          </p>
          <p className="text-base font-light text-stone-500 leading-relaxed mb-6">
            That figure covers private guiding throughout, vetted accommodation selected for quality and fit, all internal transfers and logistics, and the design process itself — the research, the relationship, the operational intelligence that determines what is offered and what is not.
          </p>
          <p className="text-base font-light text-stone-500 leading-relaxed mb-6">
            What it also covers is less visible but more valuable: years of direct experience across these territories. Knowledge of which camps hold their standard in practice. Understanding of how to route a journey so that the transitions feel seamless rather than managed. Confidence in which guides will read the room correctly from the first morning.
          </p>
          <p className="text-base font-light text-stone-500 leading-relaxed">
            This is not a price that needs defending. It reflects what a journey of this quality, designed to this standard, for clients with these specific requirements, actually costs to deliver properly.
          </p>
        </div>
      </section>

      <section className="section border-b border-stone-200" aria-labelledby="design-fee-heading">
        <div className="container-site max-w-[920px]">
          <h2
            className="font-serif font-light text-display-md text-stone-900 mb-8"
            id="design-fee-heading"
          >
            The Design Fee
          </h2>
          <p className="text-base font-light text-stone-500 leading-relaxed mb-6">
            When you submit an enquiry, a $100 private design fee is collected with your brief.
          </p>
          <p className="text-base font-light text-stone-500 leading-relaxed mb-6">
            This is not a deposit. It is a signal — to us and to you — that the conversation is serious. It ensures that the time invested in reviewing your brief, consulting on territory fit, and beginning the design process is spent on clients for whom this is a genuine priority.
          </p>
          <p className="text-base font-light text-stone-500 leading-relaxed mb-6">
            The fee is credited in full against your journey if you proceed. If after our initial consultation we are not the right fit for each other, it is refunded without question.
          </p>
          <p className="text-base font-light text-stone-500 leading-relaxed">
            It exists because the quality of our process depends on the quality of the conversation. The $100 is what keeps that conversation at the right level from the start.
          </p>
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border-t border-l border-white/[0.20]">
            {INCLUSIVE_ITEMS.map((item, i) => (
              <Reveal
                key={item.key}
                delay={(i % 3) as 0 | 1 | 2 | 3 | 4}
                className="h-full border-r border-b border-white/[0.20]"
              >
                <div className="bg-forest hover:bg-[#446f50] transition-colors duration p-10 h-full">
                  <p className="label-tag text-white mb-4">{item.title}</p>
                  <p className="text-base font-light text-white leading-relaxed">
                    {item.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
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
                  Learn More
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
                  US-based luxury advisors offer Africa as one destination among many. Their knowledge is broad and their Africa relationships are typically mediated through DMCs and ground operators they have not personally verified. For a standard luxury traveller, that is often sufficient. For an LGBTQ+ couple for whom the operational detail — the guide, the camp culture, the transit routing — is the difference between a transformative journey and an exhausting one, it is not.
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
                  Destination management companies operate at volume. Their value is logistics at scale — ground handling, transfers, supplier relationships managed across hundreds of bookings. They are excellent at what they do. What they are not designed to do is hold a specific standard of curation for a specific client profile, or bring personal accountability to the design of each journey.
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
                  Group travel companies serve a community function — shared experience, collective identity, the particular pleasure of travelling with people who understand you. For clients who want that, they are the right choice.
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
              {CTA.requestPrivateAccess}
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
        </Reveal>
      </section>
    </>
  );
}


