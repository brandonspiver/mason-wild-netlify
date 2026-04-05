import type { Metadata } from "next";
import { Reveal } from "@/components/ui/Reveal";
import { InquiryForm } from "@/components/inquiry/InquiryForm";
import { INQUIRY_COPY, CTA } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Enquire",
  description:
    "Begin a private journey with Mason & Wild. Every enquiry is reviewed personally. Our process is personal and unhurried.",
};

export default function InquirePage() {
  return (
    <>
      {/* ─── Page header ────────────────────────────────────────────────── */}
      <section
        className="pt-[var(--page-header-pt)] pb-[clamp(48px,6vw,72px)] border-b border-stone-200"
        aria-labelledby="inquire-heading"
      >
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[clamp(48px,7vw,96px)] items-end">
            <div>
              <Reveal>
                <p className="label-tag mb-7">Private Onboarding</p>
              </Reveal>
              <Reveal delay={1}>
                <h1
                  className="font-serif font-light text-display-2xl text-stone-900"
                  id="inquire-heading"
                >
                  The luxury of<br />
                  <em>undivided</em><br />
                  attention.
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
                <div className="flex flex-col gap-0">

                  <div className="pb-8">
                    <p className="label-tag mb-5">The Process</p>
                    <p className="text-base font-light text-stone-500 leading-relaxed">
                      {INQUIRY_COPY.processBody}
                    </p>
                  </div>

                  <div className="border-t border-stone-200 py-8">
                    <p className="label-tag mb-5">What Helps</p>
                    <div className="flex flex-col gap-0">
                      {[
                        "The kind of landscape or feeling you are drawn to  -  not a destination list.",
                        "Whether you are travelling alone, with a partner, or in a small private party.",
                        "A rough sense of when you have in mind, and how long.",
                        "Anything particular you would like us to know.",
                      ].map((line, i) => (
                        <div
                          key={i}
                          className="border-t border-stone-200 py-4 first:border-t-0 first:pt-0"
                        >
                          <p className="text-sm font-light text-stone-500 leading-relaxed">
                            {line}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="border-t border-stone-200 pt-8">
                    <p className="label-tag mb-4">Direct Contact</p>
                    <a
                      href={`mailto:${INQUIRY_COPY.contactLine}`}
                      className="text-base font-light text-stone-600 hover:text-stone-900 transition-colors duration"
                    >
                      {INQUIRY_COPY.contactLine}
                    </a>
                    <p className="text-sm font-light text-stone-400 leading-relaxed mt-3">
                      {CTA.formResponseNote}
                    </p>
                  </div>

                </div>
              </Reveal>
            </div>

            {/* ── Right  -  client island for form interaction ───────────── */}
            <Reveal delay={1}>
              <InquiryForm />
            </Reveal>

          </div>
        </div>
      </section>
    </>
  );
}
