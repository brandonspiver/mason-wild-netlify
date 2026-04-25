import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { NAV_HREFS, CTA, FOUNDER } from "@/lib/constants";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "About",
  description:
    "Zannon James - Founder and Luxury Safari Architect at Mason & Wild. Founder-led African luxury travel design shaped by regional knowledge, trusted partners, and discreet private handling.",
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
                <p className="label-tag text-white/38 mb-7">{FOUNDER.title}</p>
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
              <div className="flex flex-col gap-4 max-w-[560px]">
                <p className="text-base font-light text-white leading-relaxed">
                  Zannon designs and personally reviews each journey Mason
                  &amp; Wild accepts - private African luxury travel shaped for
                  clients who value discretion, judgment, and emotional ease.
                </p>
                <Link
                  href={FOUNDER.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xs uppercase tracking-[0.12em] text-white/65 border-b border-white/35 hover:text-white hover:border-white/70 pb-[2px] transition-colors duration self-start"
                >
                  View Zannon&apos;s LinkedIn
                </Link>
              </div>
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
                  Zannon James was born and raised in Cape Town and built his
                  career inside African travel, luxury hospitality, and high-touch
                  client service.
                </p>
              </Reveal>
              <Reveal delay={1}>
                <p className="text-base font-light text-stone-500 leading-relaxed">
                  His work has taken him across Southern and Eastern Africa,
                  with additional international exposure in Dubai, giving him a
                  practical understanding of how global luxury travellers think,
                  decide, and move. That perspective now shapes how Mason &amp;
                  Wild is designed: privately, selectively, and with direct
                  founder judgment.
                </p>
              </Reveal>
              <Reveal delay={2}>
                <p className="text-base font-light text-stone-500 leading-relaxed">
                  The LGBTQ+ focus is both lived and professional. Mason &amp;
                  Wild is built for travellers who want more than a polished
                  itinerary; they want to move through Africa without constant
                  social calculation. This is client-side curation, not catalogue
                  selling.
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
                Each accepted journey passes
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
                  brief, selects the territory, assigns the guide, and approves the core
                  elements of the itinerary before it is presented. This is not a
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
                    body: "Each destination we propose is assessed for LGBTQ+ safety, legal standing, and practical suitability before it enters the collection.",
                  },
                  {
                    label: "Partner Vetting",
                    body: "Properties and operating partners are selected through firsthand regional knowledge, trusted relationships, and ongoing seasonal review.",
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

      <section className="section border-b border-stone-200" aria-label="Direct property approval statement">
        <div className="container-site max-w-[920px]">
          <p className="text-base font-light text-stone-500 leading-relaxed">
            Mason &amp; Wild journeys are built from firsthand regional knowledge, personally vetted properties, and trusted partner relationships. Where a property has not been stayed in directly, it is considered only through verified relationships and additional operational checks. That discipline keeps the collection precise and the standard consistent.
          </p>
        </div>
      </section>

      <section className="section border-b border-stone-200" aria-labelledby="what-you-can-expect-heading">
        <div className="container-site">
          <Reveal>
            <div className="mb-12">
              <p className="label-tag mb-4">What You Can Expect</p>
              <h2
                className="font-serif font-light text-display-md text-stone-900"
                id="what-you-can-expect-heading"
              >
                Founder-led standards,
                <br />
                <em>quietly applied.</em>
              </h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px border border-stone-200 bg-stone-200">
            {[
              {
                title: "Founder-reviewed design",
                body: "Every accepted journey is reviewed directly before anything is proposed.",
              },
              {
                title: "Discreet communication",
                body: "Enquiries are handled with privacy and care from the first message.",
              },
              {
                title: "Client-side curation",
                body: "Mason & Wild is not selling a single lodge; journeys are shaped around fit, rhythm, and context.",
              },
              {
                title: "Operational intelligence",
                body: "Routing, pacing, access, guiding, recovery days, and seasonal logic are considered together.",
              },
              {
                title: "LGBTQ+ comfort intelligence",
                body: "Comfort is treated as practical, cultural, emotional, and logistical, not reduced to a label.",
              },
              {
                title: "Transparent process",
                body: "No generic package selling, no pressure tactics, and clear handling before proposal development begins.",
              },
            ].map((item, index) => (
              <Reveal key={item.title} delay={(index % 3) as 0 | 1 | 2 | 3 | 4}>
                <article className="bg-page px-7 py-8 md:px-8 md:py-9 h-full">
                  <h3 className="font-serif font-light text-display-sm text-stone-900 leading-[1.2] tracking-[-0.01em] mb-4">
                    {item.title}
                  </h3>
                  <p className="text-sm font-light text-stone-500 leading-relaxed">
                    {item.body}
                  </p>
                </article>
              </Reveal>
            ))}
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
                  built through years of direct relationship across our property and
                  partner network - visiting, staying where appropriate, and maintaining the kind of
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
            src="/experience/private-conservancy-botswana.jpg"
            alt="Private conservancy at dawn in Botswana"
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
                  We recommend territories where we are confident in the broader
                  travel conditions, and we work only with camps and guides that
                  meet Mason &amp; Wild standards through direct knowledge or
                  additional checks. That is the operational foundation of the
                  brand, not just the language.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-forest" aria-labelledby="how-safety-handled-heading">
        <div className="container-site max-w-[920px]">
          <h2
            className="font-serif font-light text-display-md text-white leading-[1.07] tracking-[-0.012em] mb-8"
            id="how-safety-handled-heading"
          >
            How Safety Is Handled
          </h2>
          <p className="text-base font-light text-white leading-relaxed mb-6">
            We do not use the language of risk management, because that is not the experience we are designing. What we do instead is make decisions - before a journey is proposed - that make safety a built-in part of how the journey is designed.
          </p>
          <p className="text-base font-light text-white leading-relaxed mb-6">
            Those decisions are operational: which territories meet our standard for legal standing and real-world enforcement, which camps have been assessed for staff culture and guide values, how transit between properties is routed to reduce friction, how room configurations are handled by default rather than by request.
          </p>
          <p className="text-base font-light text-white leading-relaxed">
            The result is not a journey where you feel protected. It is a journey where the question simply does not arise.
          </p>
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
              Start Your Private Enquiry
            </Button>
            <Button href={NAV_HREFS.journeys} variant="ghost-light" arrow={false}>
              {CTA.viewAllJourneys}
            </Button>
          </div>
          <p className="text-2xs tracking-[0.08em] text-white/40 mt-8 max-w-[720px] mx-auto leading-relaxed">
            Private enquiries are reviewed personally. Your details are handled with
            discretion and used only to understand whether Mason &amp; Wild is the
            right fit for your journey.
          </p>
        </Reveal>
      </section>
    </>
  );
}
