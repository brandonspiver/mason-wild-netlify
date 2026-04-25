import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { InquiryForm } from "@/components/inquiry/InquiryForm";
import { INQUIRY_COPY, FOUNDER } from "@/lib/constants";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Enquire",
  description:
    "Begin your private journey with Mason & Wild. This is the start of a selective, trust-led design process shaped around privacy and fit.",
  path: "/enquire",
});

export default function EnquirePage() {
  return (
    <>
      {/* ─── Page header ────────────────────────────────────────────────── */}
      <section
        className="pt-[var(--page-header-pt)] pb-[clamp(48px,6vw,72px)] border-b border-stone-200"
        aria-labelledby="enquire-heading"
      >
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[clamp(48px,7vw,96px)] items-end">
            <div>
              <Reveal>
                <p className="label-tag mb-7">Start Your Private Enquiry</p>
              </Reveal>
              <Reveal delay={1}>
                <h1
                  className="font-serif font-light text-display-2xl text-stone-900"
                  id="enquire-heading"
                >
                  Begin a<br />
                  <em>Private Journey</em>
                </h1>
              </Reveal>
            </div>
            <Reveal delay={2}>
              <p className="text-base font-light text-stone-500 leading-relaxed max-w-[480px]">
                {INQUIRY_COPY.pageSubhead}
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ─── Main content ───────────────────────────────────────────────── */}
      <section className="section" aria-label="Enquiry form and process information">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-[5fr_7fr] gap-[clamp(56px,8vw,112px)] items-start">

            {/* ── Left rail  -  static context, server-rendered ─────────── */}
            <div className="lg:sticky lg:top-[100px] lg:self-start">
              <Reveal>
                <div className="flex flex-col gap-0 bg-forest text-white px-[clamp(28px,4vw,42px)] py-[clamp(32px,4.5vw,46px)]">

                  <div className="pb-8">
                    <p className="label-tag text-white/45 mb-5">The Process</p>
                    <p className="text-base font-light text-white leading-relaxed">
                      {INQUIRY_COPY.processBody}
                    </p>
                  </div>

                  <div className="border-t border-white/35 py-8">
                    <p className="label-tag text-white/45 mb-5">Who This Is For</p>
                    <div className="flex flex-col gap-0">
                      {[
                        "For travellers who value privacy, discretion, and strong curation, including LGBTQ+ guests seeking practical reassurance.",
                        "For couples, private groups, and discerning individuals who want a journey shaped around them.",
                        "Not for lowest-price shopping or instant quotes without a proper brief.",
                        "Not for high-volume itinerary comparisons across multiple agencies.",
                      ].map((line, i) => (
                        <div
                          key={i}
                          className="border-t border-white/35 py-4 first:border-t-0 first:pt-0"
                        >
                          <p className="text-sm font-light text-white leading-relaxed">
                            {line}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="border-t border-white/35 pt-8">
                    <p className="label-tag text-white/45 mb-4">Founder Review</p>
                    <p className="text-sm font-light text-white leading-relaxed mb-6">
                      Every accepted journey is personally reviewed by Zannon
                      James, founder and luxury safari architect at Mason &amp;
                      Wild and an African travel
                      specialist with firsthand experience across Southern and
                      Eastern Africa. The result is not a catalogue itinerary.
                      It is a private journey shaped around context, comfort,
                      discretion, and taste.
                    </p>
                    <Link
                      href={FOUNDER.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-2xs tracking-[0.12em] uppercase text-white/65 border-b border-white/35 hover:text-white hover:border-white/70 pb-[2px] transition-colors duration inline-flex"
                    >
                      View Zannon&apos;s LinkedIn
                    </Link>
                  </div>

                  <div className="border-t border-white/35 pt-8">
                    <p className="label-tag text-white/45 mb-4">Direct Contact</p>
                    <a
                      href={`mailto:${INQUIRY_COPY.contactLine}`}
                      className="text-base font-light text-white hover:text-white/75 transition-colors duration"
                    >
                      {INQUIRY_COPY.contactLine}
                    </a>
                    <p className="text-sm font-light text-white leading-relaxed mt-3">
                      Once your enquiry is received, it is reviewed personally. If there is strong fit, we respond with clear next steps within 24 to 48 hours.
                    </p>
                  </div>

                </div>
              </Reveal>
            </div>

            {/* ── Right  -  client island for form interaction ───────────── */}
            <Reveal delay={1}>
              <div className="flex flex-col gap-10">
                <div className="border border-stone-200 bg-page-subtle px-6 py-7 md:px-8 md:py-8">
                  <p className="label-tag mb-4">Private Qualification</p>
                  <p className="text-sm md:text-base font-light text-stone-600 leading-[1.9] max-w-[780px]">
                    Every Mason &amp; Wild journey begins with a private
                    enquiry. The details below help us understand your rhythm,
                    expectations, travel window, and level of privacy required
                    before anything is proposed. Suitable enquiries are
                    personally reviewed before moving into a private
                    consultation.
                  </p>
                </div>

                <InquiryForm />
              </div>
            </Reveal>

          </div>
        </div>
      </section>

      <section className="section border-t border-b border-stone-200" aria-labelledby="what-happens-next-heading">
        <div className="container-site">
          <Reveal>
            <div className="mb-12">
              <p className="label-tag mb-4">What Happens Next</p>
              <h2
                className="font-serif font-light text-display-md text-stone-900"
                id="what-happens-next-heading"
              >
                A private process,
                <br />
                <em>handled properly.</em>
              </h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px border border-stone-200 bg-stone-200">
            {[
              {
                step: "1",
                title: "Private enquiry reviewed",
                body:
                  "Your enquiry is reviewed to understand timing, travel style, privacy needs, and whether Mason & Wild is the right fit.",
              },
              {
                step: "2",
                title: "Private consultation",
                body:
                  "Suitable enquiries are invited into a private consultation to discuss route logic, accommodation style, pace, budget, safety considerations, and the emotional shape of the journey.",
              },
              {
                step: "3",
                title: "Journey design begins",
                body:
                  "Once aligned, Mason & Wild begins shaping a considered proposal using firsthand regional knowledge, trusted partners, and carefully selected properties.",
              },
            ].map((item, index) => (
              <Reveal key={item.step} delay={(index % 3) as 0 | 1 | 2 | 3 | 4}>
                <article className="bg-page px-7 py-8 md:px-8 md:py-9 h-full">
                  <p className="label-tag text-stone-300 mb-3">Step {item.step}</p>
                  <h3 className="font-serif font-light text-display-sm text-stone-900 leading-[1.25] tracking-[-0.01em] mb-4">
                    {item.title}
                  </h3>
                  <p className="text-sm font-light text-stone-500 leading-relaxed">
                    {item.body}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <p className="mt-8 text-sm font-light text-stone-500 leading-relaxed max-w-[780px]">
              For confirmed design work, a planning commitment may apply. Where
              applicable, this is discussed transparently before proposal
              development begins.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section" aria-labelledby="why-not-book-direct-heading">
        <div className="container-site max-w-[1080px]">
          <Reveal>
            <p className="label-tag mb-4">Advisory Clarity</p>
            <h2
              className="font-serif font-light text-display-md text-stone-900 mb-8"
              id="why-not-book-direct-heading"
            >
              Why not simply
              <br />
              <em>book direct?</em>
            </h2>
          </Reveal>

          <div className="flex flex-col gap-6">
            <Reveal>
              <p className="text-base font-light text-stone-500 leading-relaxed">
                Lodges and hotels can sell their own rooms exceptionally well.
                What they cannot always do is design the full journey
                objectively across multiple countries, suppliers, styles,
                seasons, and personal considerations.
              </p>
            </Reveal>
            <Reveal delay={1}>
              <p className="text-base font-light text-stone-500 leading-relaxed">
                A lodge can tell you why to stay there. It cannot always tell
                you when another property would better suit your rhythm, privacy
                expectations, or route logic.
              </p>
            </Reveal>
            <Reveal delay={2}>
              <p className="text-base font-light text-stone-500 leading-relaxed">
                Direct bookings rarely solve the full journey: regional flights,
                border timing, private guiding, recovery days, restaurant
                pacing, safety context, and emotional flow from one chapter to
                the next.
              </p>
            </Reveal>
            <Reveal delay={3}>
              <p className="text-base font-light text-stone-500 leading-relaxed">
                For LGBTQ+ travellers, true comfort is not only whether a
                property is welcoming. It is how the entire journey is
                sequenced, briefed, and handled. Mason &amp; Wild sits on the
                client side, designing the journey as a whole rather than
                selling a single room.
              </p>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}



