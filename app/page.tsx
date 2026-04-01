import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import {
  PRIMARY_POSITIONING_LINE,
  DIFFERENTIATORS,
  FEATURED_JOURNEYS,
  CTA,
  NAV_HREFS,
} from "@/lib/constants";

export const metadata: Metadata = {
  title:       "Private African Journeys for LGBTQ+ Travelers",
  description: PRIMARY_POSITIONING_LINE,
};

export default function HomePage() {
  return (
    <>
      {/* ─── Hero ──────────────────────────────────────────────────────── */}
      <section
        className="relative min-h-svh flex flex-col justify-end pb-[clamp(56px,10vh,112px)] overflow-hidden"
        aria-label="Mason &amp; Wild — private African journeys"
      >
        <div
          className="absolute inset-0 bg-cover bg-center animate-[heroZoom_20s_cubic-bezier(0.16,1,0.3,1)_forwards]"
          style={{
            backgroundImage: [
              "linear-gradient(to bottom, rgba(14,12,8,0.10) 0%, rgba(14,12,8,0.00) 22%, rgba(14,12,8,0.40) 65%, rgba(14,12,8,0.80) 100%)",
              "url('/home/home-hero.jpg')",
            ].join(", "),
            backgroundPosition: "center 38%",
          }}
          role="img"
          aria-label="Private African conservancy at golden hour"
        />

        <div className="relative z-10 container-site">
          <h1
            className={[
              "font-serif font-light text-white",
              "text-[clamp(2.125rem,4.8vw,4.75rem)]",
              "leading-[1.08] tracking-[-0.015em]",
              "max-w-[780px] mb-8",
              "opacity-0 translate-y-4",
              "animate-[fadeRise_0.9s_cubic-bezier(0.16,1,0.3,1)_0.3s_forwards]",
            ].join(" ")}
          >
            Privately designed African journeys{" "}
            <br className="hidden sm:block" />
            for discerning{" "}
            <em>LGBTQ+ travelers.</em>
          </h1>

          <p
            className={[
              "text-sm font-light text-white/65 max-w-[400px] leading-relaxed mb-11",
              "opacity-0 translate-y-4",
              "animate-[fadeRise_0.9s_cubic-bezier(0.16,1,0.3,1)_0.52s_forwards]",
            ].join(" ")}
          >
            Absolute discretion. Vetted territories.
            Every journey built around who you are,
            not what is available.
          </p>

          <div
            className={[
              "flex items-center gap-8 flex-wrap",
              "opacity-0 translate-y-4",
              "animate-[fadeRise_0.9s_cubic-bezier(0.16,1,0.3,1)_0.7s_forwards]",
            ].join(" ")}
          >
            <Button href={NAV_HREFS.experience} variant="primary">
              {CTA.beginJourney}
            </Button>
            <Button href={NAV_HREFS.journeys} variant="ghost-light" arrow={false}>
              {CTA.viewCollection}
            </Button>
          </div>
        </div>

        <div
          className={[
            "absolute right-[var(--px)] bottom-[clamp(28px,5vh,52px)]",
            "flex flex-col items-center gap-[10px] z-10",
            "opacity-0 animate-[fadeRise_0.7s_cubic-bezier(0.16,1,0.3,1)_1.05s_forwards]",
          ].join(" ")}
          aria-hidden="true"
        >
          <div className="w-px h-12 bg-gradient-to-b from-white/40 to-transparent" />
          <span className="text-[8.5px] tracking-[0.22em] uppercase text-white/35 [writing-mode:vertical-rl]">
            Scroll
          </span>
        </div>
      </section>

      {/* ─── Strip ─────────────────────────────────────────────────────── */}
      <div
        className="flex items-center gap-5 border-b border-stone-200 px-[var(--px)] py-4"
        aria-hidden="true"
      >
        <span className="label-tag whitespace-nowrap">Mason &amp; Wild · Est. 2024</span>
        <div className="hidden sm:block flex-1 h-px bg-stone-200" />
        <span className="hidden sm:block label-tag whitespace-nowrap">
          Private journeys. Discreet by design.
        </span>
      </div>

      {/* ─── Intro ─────────────────────────────────────────────────────── */}
      <section className="section" aria-labelledby="intro-heading">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[clamp(48px,7vw,96px)] items-start">

            <div>
              <Reveal>
                <p className="label-tag mb-6">The Mason &amp; Wild Difference</p>
              </Reveal>
              <Reveal delay={1}>
                <h2
                  className="font-serif font-light text-display-lg text-stone-900 mb-6"
                  id="intro-heading"
                >
                  Luxury is the absence<br />
                  of unnecessary <em>compromise.</em>
                </h2>
              </Reveal>
              <Reveal delay={2}>
                <p className="text-base font-light text-stone-500 leading-relaxed max-w-[440px] mb-9">
                  We design private African journeys for travelers who want
                  to move through the world on their own terms. Our journeys
                  are built from a single brief: yours.
                </p>
              </Reveal>
              <Reveal delay={3}>
                <Button href={NAV_HREFS.experience} variant="ghost">
                  {CTA.theExperience}
                </Button>
              </Reveal>
            </div>

            <div className="flex flex-col gap-8 pt-1">
              {DIFFERENTIATORS.map((d, i) => (
                <Reveal key={d.key} delay={(i % 4) as 0|1|2|3|4}>
                  <div className="grid grid-cols-[2px_1fr] gap-[18px]">
                    <div className="bg-stone-200 self-stretch mt-[2px]" />
                    <div>
                      <p className="label-tag mb-2">{d.label}</p>
                      <p className="text-sm font-light text-stone-500 leading-relaxed">{d.body}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ─── Feature — conservancy ─────────────────────────────────────── */}
      <section className="pb-[var(--section-gap)]" aria-labelledby="feature-conservancy">
        <div className="container-site">
          <Reveal>
            <div className="grid grid-cols-1 md:grid-cols-[5fr_4fr] items-center">
              <div className="overflow-hidden">
                <Image
                  src="/home/exclusivity-details.jpg"
                  alt="Elephant moving through a private conservancy at dusk — no other travellers present"
                  width={800}
                  height={1000}
                  className="w-full aspect-[4/5] object-cover object-center transition-transform duration-[900ms] ease-out hover:scale-[1.025]"
                  loading="lazy"
                />
              </div>
              <div className="px-0 md:px-[clamp(36px,5.5vw,72px)] pt-10 md:pt-0">
                <p className="label-tag mb-5">Exclusivity Details</p>
                <h2
                  className="font-serif font-light text-display-md text-stone-900 mb-5"
                  id="feature-conservancy"
                >
                  Private conservancies<br />
                  and <em>closed-access</em><br />
                  reserves.
                </h2>
                <p className="text-base font-light text-stone-500 leading-relaxed mb-8">
                  By securing access to restricted territories, we eliminate
                  the visual noise of traditional tourism. Your journey is
                  defined by the rhythm of the wild, not the schedule of others.
                </p>
                <Button href={NAV_HREFS.journeys} variant="ghost">
                  Explore Our Territories
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─── Journey cards ──────────────────────────────────────────────── */}
      <section className="pb-[var(--section-gap)]" aria-labelledby="journeys-heading">
        <div className="container-site">
          <Reveal>
            <div className="flex items-end justify-between gap-6 mb-12 flex-wrap">
              <div>
                <p className="label-tag mb-4">Five Archetypes</p>
                <h2
                  className="font-serif font-light text-display-lg text-stone-900"
                  id="journeys-heading"
                >
                  Selected <em>Journeys</em>
                </h2>
              </div>
              <p className="text-sm font-light text-stone-400 max-w-[220px] leading-relaxed text-right sm:text-left">
                These are not packages. They are ways of experiencing Africa.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-[2px]">
            {FEATURED_JOURNEYS.map((j, i) => (
              <Reveal key={j.slug} delay={(i + 1) as 1|2|3}>
                <article className="relative overflow-hidden bg-stone-800 group">
                  <Image
                    src={j.img.src}
                    alt={j.img.alt}
                    width={600}
                    height={800}
                    className="w-full aspect-[3/4] object-cover object-center transition-transform duration-[850ms] ease-out group-hover:scale-[1.04] group-hover:opacity-[0.87]"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[rgba(14,12,8,0.88)] via-[rgba(14,12,8,0.32)] to-transparent flex flex-col justify-end p-7">
                    <p className="label-tag text-white/40 mb-2">{j.outcome}</p>
                    <h3 className="font-serif font-light text-display-sm text-white leading-[1.1] tracking-[-0.01em] mb-5">
                      The <em>{j.name.replace("The ", "")}</em>
                    </h3>
                    <p className="text-sm font-light text-white/58 leading-relaxed mb-5 max-w-[22ch]">
                      {j.tagline}
                    </p>
                    <Link
                      href={`${NAV_HREFS.journeys}/${j.slug}`}
                      className="self-start text-2xs tracking-wide uppercase text-white/0 border-b border-white/0 pb-px transition-all duration group-hover:text-white/65 group-hover:border-white/30"
                    >
                      Explore →
                    </Link>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="mt-10 text-center">
              <Button href={NAV_HREFS.journeys} variant="ghost">
                {CTA.viewAllFive}
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─── Differentiators — editorial list ──────────────────────────── */}
      <section
        className="section border-t border-b border-stone-200"
        aria-labelledby="diff-heading"
      >
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_5fr] gap-[clamp(48px,7vw,96px)] items-start">

            <Reveal>
              <div>
                <p className="label-tag mb-5">Inclusive Intelligence</p>
                <h2
                  className="font-serif font-light text-display-md text-stone-900 mb-5"
                  id="diff-heading"
                >
                  Discretion and belonging<br />
                  <em>are not in tension.</em>
                </h2>
                <p className="text-base font-light text-stone-500 leading-relaxed mb-9">
                  We hold both as operational standards — not aspirations.
                  This is what every element of our network is built to deliver.
                </p>
                <Button href={NAV_HREFS.experience} variant="ghost">
                  Our Approach
                </Button>
              </div>
            </Reveal>

            <Reveal delay={1}>
              <div>
                {DIFFERENTIATORS.map((d) => (
                  <div
                    key={d.key}
                    className="grid grid-cols-[36px_1fr] gap-5 py-7 border-b border-stone-200 first:border-t first:border-stone-200"
                  >
                    <span className="font-serif text-sm font-light text-stone-300 tracking-[0.06em] pt-[1px]">
                      {String(DIFFERENTIATORS.indexOf(d) + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <p className="label-tag mb-[10px]">{d.label}</p>
                      <p className="text-base font-light text-stone-500 leading-relaxed">{d.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>

          </div>
        </div>
      </section>

      {/* ─── Founder ────────────────────────────────────────────────────── */}
      <section
        className="grid grid-cols-1 md:grid-cols-[5fr_7fr] bg-page-canvas"
        aria-labelledby="founder-heading"
      >
        <Reveal>
          <div
            className="w-full aspect-[3/4] md:aspect-auto md:h-full min-h-[480px] relative overflow-hidden"
            aria-label="Founder portrait — Zannon James"
          >
            <Image
              src="/home/zannon.png"
              alt="Founder portrait — Zannon James"
              fill
              sizes="(max-width: 768px) 100vw, 42vw"
              className="object-cover object-center"
              loading="lazy"
            />
          </div>
        </Reveal>

        <Reveal delay={1}>
          <div className="flex flex-col justify-center px-[clamp(40px,6vw,80px)] py-[clamp(48px,7vw,96px)]">
            <p className="label-tag mb-7">Founder &amp; Chief Specialist</p>
            <h2
              className="font-serif font-light text-display-md text-stone-900 mb-7 tracking-[-0.01em]"
              id="founder-heading"
            >
              Zannon James
            </h2>
            <p className="font-serif italic font-light text-[clamp(1.0625rem,1.7vw,1.3125rem)] text-stone-800 leading-[1.56] mb-6">
              Travel should not require a choice between luxury
              and your authentic self. I built Mason &amp; Wild to remove
              that choice entirely.
            </p>
            <p className="text-base font-light text-stone-500 leading-[1.85] max-w-[480px] mb-10">
              Zannon has worked in Africa&apos;s private travel sector for many
              years — first as a field guide, then as a specialist in bespoke
              itinerary design for high-value clients across sensitive
              territories. Every journey Mason &amp; Wild accepts passes through
              him directly. He approves the lodge, the guide, the routing,
              and the brief. There is no operations team between you and
              that decision.
            </p>
            <Button href={NAV_HREFS.about} variant="ghost">
              {CTA.ourPhilosophy}
            </Button>
          </div>
        </Reveal>
      </section>

      {/* ─── Feature — The Romantic ─────────────────────────────────────── */}
      <section
        className="section"
        aria-labelledby="feature-romantic-heading"
      >
        <div className="container-site">
          <Reveal>
            <div className="grid grid-cols-1 md:grid-cols-[4fr_5fr] items-center">
              <div className="overflow-hidden md:order-2">
                <Image
                  src="/home/romantic-feature.png"
                  alt="Private tent at dusk — lantern light and the savanna beyond"
                  width={750}
                  height={938}
                  className="w-full aspect-[4/5] object-cover object-center transition-transform duration-[900ms] ease-out hover:scale-[1.025]"
                  loading="lazy"
                />
              </div>
              <div className="md:order-1 pt-10 md:pt-0 md:pr-[clamp(36px,5.5vw,72px)]">
                <p className="label-tag mb-5">The Romantic</p>
                <h2
                  className="font-serif font-light text-display-md text-stone-900 mb-5"
                  id="feature-romantic-heading"
                >
                  Cinematic moments<br />
                  designed for <em>two.</em>
                </h2>
                <p className="text-base font-light text-stone-500 leading-relaxed mb-8">
                  Sleep beneath the Namibian sky, dine on private sundowners
                  at the edge of the Victoria Falls, and enter the luxury
                  of unhurried time together. Designed around intimacy,
                  not itineraries.
                </p>
                <Button href={`${NAV_HREFS.journeys}/the-romantic`} variant="ghost">
                  View the Journey
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─── CTA band ───────────────────────────────────────────────────── */}
      <section className="bg-forest px-[var(--px)] py-[clamp(72px,10vw,120px)] text-center">
        <Reveal>
          <p className="label-tag text-white/36 mb-5">Private Onboarding</p>
          <h2 className="font-serif font-light text-display-2xl text-white mb-5 tracking-tighter">
            Begin<br /><em>Your Journey.</em>
          </h2>
          <p className="text-base font-light text-white/50 leading-relaxed max-w-[420px] mx-auto mb-12">
            We take on a limited number of journeys each month.
            Our process is personal and unhurried — beginning
            with a single conversation.
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

      {/* ─── Newsletter ──────────────────────────────────────────────────── */}
      {/*
        Intentionally distinct from JournalNewsletter:
        dark background, centered layout, heading + description, forest
        submit button. The homepage newsletter promotes the Journal as a
        discovery channel; the Journal newsletter captures readers already
        in the editorial context. They serve different moments and should
        not share a component.
      */}
      <section
        className="bg-stone-900 px-[var(--px)] py-[clamp(64px,8vw,100px)]"
        aria-label="Newsletter"
      >
        <div className="max-w-[600px] mx-auto text-center">
          <Reveal>
            <p className="label-tag text-white/28 mb-4">The Quarterly Journal</p>
            <h2 className="font-serif italic font-light text-display-md text-white mb-4 leading-[1.15] tracking-[-0.01em]">
              Private discovery,<br />four times a year.
            </h2>
            <p className="text-sm font-light text-white/38 leading-relaxed mb-9">
              Field notes, territory intelligence, and perspectives
              on the art of disappearing well.
            </p>
            <form
              className="flex border border-white/12"
              aria-label="Newsletter subscription"
            >
              <label htmlFor="nl-email" className="sr-only">
                Email address for newsletter
              </label>
              <input
                id="nl-email"
                type="email"
                name="email"
                placeholder="For private correspondence"
                required
                autoComplete="email"
                className="flex-1 bg-transparent border-none outline-none px-[18px] py-[15px] font-serif italic text-base font-light text-white placeholder:text-white/26 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/40 focus-visible:ring-inset"
              />
              <button
                type="button"
                className="bg-forest hover:bg-forest-light text-white px-6 py-[15px] text-2xs tracking-wide uppercase transition-colors duration whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
            <p className="mt-[14px] text-2xs tracking-[0.1em] text-white/18">
              Quarterly. No noise. Unsubscribe at any time.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
