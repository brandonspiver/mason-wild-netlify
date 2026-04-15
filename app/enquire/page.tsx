import type { Metadata } from "next";
import { Reveal } from "@/components/ui/Reveal";
import { InquiryForm } from "@/components/inquiry/InquiryForm";
import { INQUIRY_COPY } from "@/lib/constants";
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
      {/* â”€â”€â”€ Page header â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
      <section
        className="pt-[var(--page-header-pt)] pb-[clamp(48px,6vw,72px)] border-b border-stone-200"
        aria-labelledby="enquire-heading"
      >
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[clamp(48px,7vw,96px)] items-end">
            <div>
              <Reveal>
                <p className="label-tag mb-7">Start Your Journey</p>
              </Reveal>
              <Reveal delay={1}>
                <h1
                  className="font-serif font-light text-display-2xl text-stone-900"
                  id="enquire-heading"
                >
                  Begin Your<br />
                  <em>Journey</em>
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

      {/* â”€â”€â”€ Main content â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
      <section className="section" aria-label="Enquiry form and process information">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-[5fr_7fr] gap-[clamp(56px,8vw,112px)] items-start">

            {/* â”€â”€ Left rail  -  static context, server-rendered â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
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

            {/* â”€â”€ Right  -  client island for form interaction â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
            <Reveal delay={1}>
              <div className="flex flex-col gap-8">
                <p className="text-base font-light text-stone-500 leading-relaxed max-w-[680px]">
                  A $100 private design fee is collected with your brief. It is credited in full if you proceed, and refunded if we are not the right fit. It exists to ensure the conversation starts at the right level.
                </p>
                <InquiryForm />
              </div>
            </Reveal>

          </div>
        </div>
      </section>
    </>
  );
}

