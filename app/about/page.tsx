import type { Metadata } from "next";
import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { NAV_HREFS, CTA } from "@/lib/constants";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "About",
  description:
    "Zannon James - founder and chief specialist at Mason & Wild. Private African journeys personally curated, vetted, and overseen for discerning LGBTQ+ travellers.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <section
        className="pt-[var(--page-header-pt)] pb-[clamp(56px,8vw,96px)] border-b border-forest/70 bg-forest"
        aria-labelledby="about-heading"
      >
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[clamp(48px,7vw,96px)] items-end">
            <div>
              <Reveal>
                <p className="label-tag text-white/38 mb-7">Founder &amp; Chief Specialist</p>
              </Reveal>
              <Reveal delay={1}>
                <h1
                  className="font-serif font-light text-display-2xl text-white"
                  id="about-heading"
                >
                  Zannon <em>James</em>
                </h1>
              </Reveal>
            </div>

            <Reveal delay={2}>
              <p className="text-base font-light text-white leading-relaxed">
                Zannon designs and personally oversees every journey Mason &amp; Wild
                accepts - private African travel built specifically for discerning LGBTQ+
                travellers, where discretion and genuine welcome are the standard, not
                the aspiration.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2">
        <Reveal>
          <div
            className="w-full aspect-[3/4] md:aspect-auto md:min-h-[640px] relative overflow-hidden"
            aria-label="Zannon James founder portrait"
          >
            <Image
              src="/about/zannon-about.jpg"
              alt="Zannon James portrait"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              quality={95}
              className="object-cover object-[20%_36%]"
              priority
            />
          </div>
        </Reveal>

        <Reveal delay={1}>
          <div className="flex flex-col justify-center px-[clamp(40px,6vw,80px)] py-[clamp(56px,8vw,96px)] bg-page-subtle">
            <p className="label-tag mb-8">Why Mason &amp; Wild Exists</p>
            <p className="font-serif font-light italic text-display-sm text-stone-800 leading-[1.45] tracking-[-0.01em] mb-8">
              Travel should not require a choice between luxury and your authentic
              self. I built Mason &amp; Wild to remove that choice entirely.
            </p>
            <p className="text-base font-light text-stone-500 leading-relaxed mb-6">
              High-value LGBTQ+ travellers can afford any safari on earth. What they
              cannot always find is one designed with full awareness of what they
              carry - the background layer of social calculation that other travellers
              simply do not have.
            </p>
            <p className="text-base font-light text-stone-500 leading-relaxed">
              Mason &amp; Wild removes that cost entirely. Not through messaging or
              certification, but through the operational decisions made before a
              journey is ever proposed: which territories we assess, which camps we
              use, which guides we trust, and which we do not.
            </p>
          </div>
        </Reveal>
      </section>

      <section
        className="section border-b border-stone-200"
        aria-labelledby="background-heading"
      >
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-[clamp(48px,7vw,96px)]">
            <div className="lg:sticky lg:top-[100px] lg:self-start">
              <Reveal>
                <p className="label-tag mb-6" id="background-heading">
                  Background
                </p>
                <p className="font-serif font-light text-display-sm text-stone-700 leading-[1.45] tracking-[-0.01em]">
                  A career built entirely in Africa&apos;s private travel sector -
                  from the field outward.
                </p>
              </Reveal>
            </div>

            <div className="flex flex-col gap-6">
              <Reveal>
                <p className="font-serif font-light text-display-sm text-stone-800 leading-[1.45] tracking-[-0.01em]">
                  Mason &amp; Wild was built on years of regional knowledge,
                  trusted relationships, and hands-on understanding of what it
                  takes to deliver exceptional travel across Africa.
                </p>
              </Reveal>
              <Reveal delay={1}>
                <p className="text-base font-light text-stone-500 leading-relaxed">
                  Zannon has worked across the world throughout his career and
                  continues to travel extensively, particularly across Africa,
                  spending regular time in the bush to ensure his knowledge
                  remains current, firsthand, and deeply practical. His approach
                  has never been volume-driven. It has always been personal,
                  deliberate, and shaped around the belief that luxury should
                  feel effortless, well judged, and entirely tailored to the
                  person travelling.
                </p>
              </Reveal>
              <Reveal delay={2}>
                <p className="text-base font-light text-stone-500 leading-relaxed">
                  The decision to focus on LGBTQ+ travellers came from
                  recognising a gap that the industry still too often treats
                  lightly. For many travellers, the question is not only where
                  to go, but how it will feel to be there, how they will be
                  received, and whether they can move through the experience
                  with ease and confidence. Mason &amp; Wild exists to remove
                  that uncertainty through thoughtful planning, trusted partners,
                  and a standard of care built into every journey from the
                  outset.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section
        className="section bg-forest border-b border-forest/70"
        aria-labelledby="oversight-heading"
      >
        <div className="container-site">
          <Reveal>
            <div className="mb-14">
              <p className="label-tag text-white/52 mb-4">Personal Oversight</p>
              <h2
                className="font-serif font-light text-display-lg text-white max-w-[560px]"
                id="oversight-heading"
              >
                Every journey passes
                <br />
                through <em>Zannon directly.</em>
              </h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-[clamp(48px,7vw,96px)] items-start">
            <div className="flex flex-col gap-6">
              <Reveal>
                <p className="text-base font-light text-white leading-relaxed">
                  There is no operations team between the client and the decision.
                  When a journey is accepted by Mason &amp; Wild, Zannon reviews the
                  brief, selects the territory, assigns the guide, and approves every
                  element of the itinerary before it is presented. This is not a
                  delegation model. It is a direct accountability model.
                </p>
              </Reveal>
              <Reveal delay={1}>
                <p className="text-base font-light text-white leading-relaxed">
                  It also means the number of journeys we accept each month is
                  deliberately limited. Quality of attention is the constraint - not
                  capacity.
                </p>
              </Reveal>
            </div>

            <Reveal delay={2}>
              <div className="flex flex-col gap-0">
                {[
                  {
                    label: "Territory Assessment",
                    body: "Every destination assessed for LGBTQ+ safety, legal standing, and suitability before it enters the collection.",
                  },
                  {
                    label: "Partner Vetting",
                    body: "Every lodge, guide, and operator vetted personally. Standards reviewed before each season.",
                  },
                  {
                    label: "Itinerary Sign-Off",
                    body: "Each proposed itinerary reviewed against the client's brief and current safety intelligence before it is presented.",
                  },
                  {
                    label: "In-Journey Availability",
                    body: "Zannon or a senior specialist available throughout every active journey via a private channel.",
                  },
                ].map(({ label, body }) => (
                  <div
                    key={label}
                    className="border-t border-white py-6 last:border-b last:border-white"
                  >
                    <p className="label-tag text-white/52 mb-2">{label}</p>
                    <p className="text-sm font-light text-white leading-relaxed">
                      {body}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

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
                  Luxury is the
                  <br />
                  absence of
                  <br />
                  <em>unnecessary
                    <br />
                    compromise.</em>
                </h2>
              </div>
            </Reveal>

            <div className="flex flex-col gap-6">
              <Reveal delay={1}>
                <p className="text-base font-light text-stone-500 leading-relaxed">
                  Luxury in the conventional sense - lodges, service, cuisine,
                  access - is a baseline, not a differentiator. The best private
                  camps in Africa already deliver it. What they do not all deliver
                  is the specific condition of travelling without any residual
                  awareness of how you are being perceived.
                </p>
              </Reveal>
              <Reveal delay={2}>
                <p className="text-base font-light text-stone-500 leading-relaxed">
                  That condition - the absence of social management - is what Mason
                  &amp; Wild is designed to provide. It requires more than choosing
                  the right camp. It requires knowing the staff, understanding how
                  the camp operates in practice, and being confident that the guide
                  assigned to you holds the same values we do.
                </p>
              </Reveal>
              <Reveal delay={3}>
                <p className="text-base font-light text-stone-500 leading-relaxed">
                  This knowledge is not transferable through certification. It is
                  built through years of direct relationship with every property in
                  our network - visiting, staying, and maintaining the kind of
                  contact that keeps the assessment current.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <Reveal>
        <div className="relative w-full overflow-hidden border-b border-stone-200">
          <Image
            src="https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=2400&q=82&auto=format&fit=crop"
            alt="Private conservancy at dawn - Botswana"
            width={2400}
            height={900}
            quality={95}
            className="w-full aspect-[21/8] object-cover object-[50%_70%] md:object-[50%_66%]"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/15 via-transparent to-black/15" />
          <div className="absolute bottom-5 left-[var(--px)]">
            <span className="label-tag text-white/40">Okavango Delta - Botswana</span>
          </div>
        </div>
      </Reveal>

      <section
        className="section bg-forest"
        aria-labelledby="safety-heading"
      >
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-[clamp(48px,7vw,96px)]">
            <Reveal>
              <div>
                <p className="label-tag text-white/38 mb-6">LGBTQ+ Safety Intelligence</p>
                <h2
                  className="font-serif font-light text-display-md text-white leading-[1.07] tracking-[-0.012em]"
                  id="safety-heading"
                >
                  Discretion and
                  <br />
                  belonging are not
                  <br />
                  <em>in tension.</em>
                </h2>
              </div>
            </Reveal>

            <div className="flex flex-col gap-6">
              <Reveal delay={1}>
                <p className="text-base font-light text-white leading-relaxed">
                  The political and legal landscape across Africa varies
                  significantly by country and by region within countries. Some
                  destinations are genuinely safe and welcoming. Others require
                  careful routing. A small number are not appropriate for LGBTQ+
                  travellers at all, regardless of the property's own standards.
                </p>
              </Reveal>
              <Reveal delay={2}>
                <p className="text-base font-light text-white leading-relaxed">
                  We assess every territory we work in against current legal
                  standing, enforcement practice, and the real-world experience of
                  LGBTQ+ travellers who have been there recently. This is not a
                  static process. Countries change. Regions change. Our assessments
                  are reviewed before each season and updated when circumstances
                  require it.
                </p>
              </Reveal>
              <Reveal delay={3}>
                <p className="text-base font-light text-white leading-relaxed">
                  We do not list territories we are not confident in. We do not
                  work with camps or guides whose alignment we cannot verify. This
                  is the operational foundation of Mason &amp; Wild - not a brand
                  position, but the actual work that determines what we offer and
                  what we do not.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-forest px-[var(--px)] py-[clamp(72px,10vw,120px)] text-center">
        <Reveal>
          <p className="label-tag text-white/36 mb-5">Begin Here</p>
          <h2 className="font-serif font-light text-display-2xl text-white mb-5 tracking-tighter">
            Every journey begins
            <br />
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
