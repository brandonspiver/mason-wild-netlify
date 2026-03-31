import type { Metadata } from "next";
import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { NAV_HREFS, CTA } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About",
  description:
    "Zannon James — founder and chief specialist at Mason & Wild. Private African journeys personally curated, vetted, and overseen for discerning LGBTQ+ travelers.",
};

export default function AboutPage() {
  return (
    <>
      {/* ─── Page hero ──────────────────────────────────────────────────── */}
      <section
        className="pt-[var(--page-header-pt)] pb-[clamp(56px,8vw,96px)] border-b border-stone-200"
        aria-labelledby="about-heading"
      >
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[clamp(48px,7vw,96px)] items-end">
            <div>
              <Reveal>
                <p className="label-tag mb-7">Founder &amp; Chief Specialist</p>
              </Reveal>
              <Reveal delay={1}>
                <h1
                  className="font-serif font-light text-display-2xl text-stone-900"
                  id="about-heading"
                >
                  Zannon <em>James</em>
                </h1>
              </Reveal>
            </div>

            {/*
              Hero right column: reads as a single composed statement,
              not two stitched-together lines.
            */}
            <Reveal delay={2}>
              <p className="text-base font-light text-stone-500 leading-relaxed max-w-[480px]">
                Zannon designs and personally oversees every journey
                Mason &amp; Wild accepts — private African travel built
                specifically for discerning LGBTQ+ travelers, where
                discretion and genuine welcome are the standard,
                not the aspiration.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ─── Founder split ──────────────────────────────────────────────── */}
      {/*
        TODO: Replace the tonal gradient placeholder with real photography
        of Zannon James before launch. Portrait format, 3:4 aspect ratio,
        editorial treatment consistent with the brand's image direction:
        landscape-referenced, high contrast, not a headshot.
      */}
      <section className="grid grid-cols-1 md:grid-cols-2">
        <Reveal>
          <div
            className="w-full aspect-[3/4] md:aspect-auto md:min-h-[640px] relative overflow-hidden"
            aria-label="Zannon James — founder photograph to be placed here"
          >
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(168deg, #E8E2D8 0%, #D4CCBE 28%, #B8AE9C 52%, #8C8070 72%, #5C5248 88%, #3A3028 100%)",
              }}
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(160deg, transparent 40%, rgba(43,71,57,0.14) 100%)",
              }}
            />
          </div>
        </Reveal>

        <Reveal delay={1}>
          <div className="flex flex-col justify-center px-[clamp(40px,6vw,80px)] py-[clamp(56px,8vw,96px)] bg-page-subtle">
            <p className="label-tag mb-8">Why Mason &amp; Wild Exists</p>
            <p className="font-serif font-light italic text-display-sm text-stone-800 leading-[1.45] tracking-[-0.01em] mb-8">
              Travel should not require a choice between luxury
              and your authentic self. I built Mason &amp; Wild
              to remove that choice entirely.
            </p>
            <p className="text-base font-light text-stone-500 leading-relaxed mb-6">
              High-value LGBTQ+ travelers can afford any safari on earth.
              What they cannot always find is one designed with full
              awareness of what they carry — the background layer of social
              calculation that other travelers simply do not have.
            </p>
            <p className="text-base font-light text-stone-500 leading-relaxed">
              Mason &amp; Wild removes that cost entirely. Not through
              messaging or certification, but through the operational
              decisions made before a journey is ever proposed: which
              territories we assess, which camps we use, which guides
              we trust, and which we do not.
            </p>
          </div>
        </Reveal>
      </section>

      {/* ─── Background ─────────────────────────────────────────────────── */}
      <section
        className="section border-b border-stone-200"
        aria-labelledby="background-heading"
      >
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-[clamp(48px,7vw,96px)]">

            {/*
              Duration claim removed. The sticky lead no longer anchors
              authority on a specific number — the career arc does that work.
            */}
            <div className="lg:sticky lg:top-[100px] lg:self-start">
              <Reveal>
                <p className="label-tag mb-6" id="background-heading">Background</p>
                <p className="font-serif font-light text-display-sm text-stone-700 leading-[1.45] tracking-[-0.01em]">
                  A career built entirely in Africa's private travel sector —
                  from the field outward.
                </p>
              </Reveal>
            </div>

            <div className="flex flex-col gap-6">
              <Reveal>
                <p className="font-serif font-light text-display-sm text-stone-800 leading-[1.45] tracking-[-0.01em]">
                  Zannon began as a field guide in the Okavango Delta —
                  learning territory, wildlife behavior, and the specific
                  judgment required to move safely through remote Africa.
                </p>
              </Reveal>
              <Reveal delay={1}>
                <p className="text-base font-light text-stone-500 leading-relaxed">
                  Over the following fifteen years he moved into private
                  itinerary design for high-value clients across sensitive
                  territories — developing the relationships, the network,
                  and the operational knowledge that Mason &amp; Wild is
                  built on. The work was never volume-based. It was always
                  singular: one client, one brief, one journey.
                </p>
              </Reveal>
              <Reveal delay={2}>
                <p className="text-base font-light text-stone-500 leading-relaxed">
                  The decision to focus Mason &amp; Wild entirely on
                  LGBTQ+ travelers was not a market decision. It was a
                  response to a real and persistent gap: the absence of a
                  private travel service that treated LGBTQ+ safety as an
                  operational standard rather than a marketing claim.
                  Zannon had watched clients manage that gap themselves —
                  researching territories, assessing camps, calibrating
                  how much of themselves to bring. He built Mason &amp; Wild
                  so they no longer had to.
                </p>
              </Reveal>
            </div>

          </div>
        </div>
      </section>

      {/* ─── Personal oversight ─────────────────────────────────────────── */}
      <section
        className="section bg-page-subtle border-b border-stone-200"
        aria-labelledby="oversight-heading"
      >
        <div className="container-site">
          <Reveal>
            <div className="mb-14">
              <p className="label-tag mb-4">Personal Oversight</p>
              <h2
                className="font-serif font-light text-display-lg text-stone-900 max-w-[560px]"
                id="oversight-heading"
              >
                Every journey passes<br />
                through <em>Zannon directly.</em>
              </h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-[clamp(48px,7vw,96px)] items-start">
            <div className="flex flex-col gap-6">
              <Reveal>
                <p className="text-base font-light text-stone-500 leading-relaxed">
                  There is no operations team between the client and the
                  decision. When a journey is accepted by Mason &amp; Wild,
                  Zannon reviews the brief, selects the territory, assigns
                  the guide, and approves every element of the itinerary
                  before it is presented. This is not a delegation model.
                  It is a direct accountability model.
                </p>
              </Reveal>
              <Reveal delay={1}>
                <p className="text-base font-light text-stone-500 leading-relaxed">
                  It also means the number of journeys we accept each month
                  is deliberately limited. Quality of attention is the
                  constraint — not capacity.
                </p>
              </Reveal>
            </div>

            <Reveal delay={2}>
              <div className="flex flex-col gap-0">
                {[
                  {
                    label: "Territory Assessment",
                    body:  "Every destination assessed for LGBTQ+ safety, legal standing, and suitability before it enters the collection.",
                  },
                  {
                    label: "Partner Vetting",
                    body:  "Every lodge, guide, and operator vetted personally. Standards reviewed before each season.",
                  },
                  {
                    label: "Itinerary Sign-Off",
                    body:  "Each proposed itinerary reviewed against the client's brief and current safety intelligence before it is presented.",
                  },
                  {
                    label: "In-Journey Availability",
                    body:  "Zannon or a senior specialist available throughout every active journey via a private channel.",
                  },
                ].map(({ label, body }) => (
                  <div
                    key={label}
                    className="border-t border-stone-200 py-6 last:border-b last:border-stone-200"
                  >
                    <p className="label-tag mb-2">{label}</p>
                    <p className="text-sm font-light text-stone-500 leading-relaxed">{body}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ─── On luxury ──────────────────────────────────────────────────── */}
      <section
        className="section border-b border-stone-200"
        aria-labelledby="luxury-heading"
      >
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-[clamp(48px,7vw,96px)] items-start">
            <Reveal>
              <div>
                <p className="label-tag mb-4">On Luxury</p>
                <h2
                  className="font-serif font-light text-display-md text-stone-900"
                  id="luxury-heading"
                >
                  Luxury is the<br />
                  absence of<br />
                  <em>unnecessary<br />compromise.</em>
                </h2>
              </div>
            </Reveal>

            <div className="flex flex-col gap-6">
              <Reveal delay={1}>
                <p className="text-base font-light text-stone-500 leading-relaxed">
                  Luxury in the conventional sense — lodges, service,
                  cuisine, access — is a baseline, not a differentiator.
                  The best private camps in Africa already deliver it.
                  What they do not all deliver is the specific condition
                  of traveling without any residual awareness of how you
                  are being perceived.
                </p>
              </Reveal>
              <Reveal delay={2}>
                <p className="text-base font-light text-stone-500 leading-relaxed">
                  That condition — the absence of social management —
                  is what Mason &amp; Wild is designed to provide. It
                  requires more than choosing the right camp. It requires
                  knowing the staff, understanding how the camp operates
                  in practice, and being confident that the guide
                  assigned to you holds the same values we do.
                </p>
              </Reveal>
              <Reveal delay={3}>
                {/*
                  Rephrased: removed the defensive "there is no badge system"
                  construction. Reframed as a positive statement of how
                  this knowledge is actually built — calm and authoritative.
                */}
                <p className="text-base font-light text-stone-500 leading-relaxed">
                  This knowledge is not transferable through certification.
                  It is built through years of direct relationship with
                  every property in our network — visiting, staying, and
                  maintaining the kind of contact that keeps the assessment
                  current.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Landscape image ────────────────────────────────────────────── */}
      <Reveal>
        <div className="relative w-full overflow-hidden border-b border-stone-200">
          <Image
            src="https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=2400&q=82&auto=format&fit=crop"
            alt="Private conservancy at dawn — Botswana"
            width={2400}
            height={900}
            className="w-full aspect-[21/8] object-cover object-center"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/15 via-transparent to-black/15" />
          <div className="absolute bottom-5 left-[var(--px)]">
            <span className="label-tag text-white/40">Okavango Delta — Botswana</span>
          </div>
        </div>
      </Reveal>

      {/* ─── LGBTQ+ safety intelligence ─────────────────────────────────── */}
      <section
        className="section bg-stone-900"
        aria-labelledby="safety-heading"
      >
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-[clamp(48px,7vw,96px)]">
            <Reveal>
              <div>
                <p className="label-tag text-white/30 mb-6">LGBTQ+ Safety Intelligence</p>
                <h2
                  className="font-serif font-light text-display-md text-white leading-[1.07] tracking-[-0.012em]"
                  id="safety-heading"
                >
                  Discretion and<br />
                  belonging are not<br />
                  <em>in tension.</em>
                </h2>
              </div>
            </Reveal>

            <div className="flex flex-col gap-6">
              <Reveal delay={1}>
                <p className="text-base font-light text-white/55 leading-relaxed">
                  The political and legal landscape across Africa varies
                  significantly by country and by region within countries.
                  Some destinations are genuinely safe and welcoming.
                  Others require careful routing. A small number are not
                  appropriate for LGBTQ+ travelers at all, regardless of
                  the property's own standards.
                </p>
              </Reveal>
              <Reveal delay={2}>
                <p className="text-base font-light text-white/55 leading-relaxed">
                  We assess every territory we work in against current
                  legal standing, enforcement practice, and the real-world
                  experience of LGBTQ+ travelers who have been there
                  recently. This is not a static process. Countries change.
                  Regions change. Our assessments are reviewed before
                  each season and updated when circumstances require it.
                </p>
              </Reveal>
              <Reveal delay={3}>
                <p className="text-base font-light text-white/55 leading-relaxed">
                  We do not list territories we are not confident in.
                  We do not work with camps or guides whose alignment we
                  cannot verify. This is the operational foundation of
                  Mason &amp; Wild — not a brand position, but the actual
                  work that determines what we offer and what we do not.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA ────────────────────────────────────────────────────────── */}
      <section className="bg-forest px-[var(--px)] py-[clamp(72px,10vw,120px)] text-center">
        <Reveal>
          <p className="label-tag text-white/36 mb-5">Begin Here</p>
          <h2 className="font-serif font-light text-display-2xl text-white mb-5 tracking-tighter">
            Every journey begins<br />
            with a <em>conversation.</em>
          </h2>
          <p className="text-base font-light text-white/50 leading-relaxed max-w-[400px] mx-auto mb-12">
            Tell us what you are looking for. We will take it from there.
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
