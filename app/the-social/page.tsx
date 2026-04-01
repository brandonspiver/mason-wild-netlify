import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { NAV_HREFS, INQUIRY_COPY, CTA } from "@/lib/constants";

export const metadata: Metadata = {
  title: "The Social  -  A Curated Circle",
  description:
    "A small group of aligned travelers. One shared season. Membership is by introduction only.",
};

// Season data is typed for easy replacement with a dynamic source.
// statusKey drives both the display label and color; update here or
// swap to a CMS/API fetch without touching the render logic.
type SeasonStatus = "full" | "assembling" | "forthcoming";

type Season = {
  period:    string;
  territory: string;
  status:    SeasonStatus;
};

const SEASONS: Season[] = [
  { period: "Dry Season",    territory: "East Africa",        status: "full"        },
  { period: "Green Season",  territory: "Southern Circuit",   status: "assembling"  },
  { period: "Dry Season",    territory: "Botswana · Namibia", status: "assembling"  },
  { period: "Green Season",  territory: "East Africa",        status: "forthcoming" },
];

const STATUS_LABEL: Record<SeasonStatus, string> = {
  full:        "Circle is full",
  assembling:  "Assembling now",
  forthcoming: "Details to follow",
};

const STATUS_COLOR: Record<SeasonStatus, string> = {
  full:        "text-stone-500",
  assembling:  "text-forest-light",
  forthcoming: "text-stone-500",
};

export default function TheSocialPage() {
  return (
    <>
      {/* ─── Hero  -  dark, full-viewport, no image ───────────────────────── */}
      <section
        className="min-h-svh bg-stone-900 flex flex-col justify-end px-[var(--px)] pb-[clamp(64px,10vh,112px)] pt-[var(--page-header-pt)]"
        aria-labelledby="social-heading"
      >
        <div className="container-site w-full">
          <div className="opacity-0 translate-y-4 animate-[fadeRise_0.9s_cubic-bezier(0.16,1,0.3,1)_0.3s_forwards]">
            <p className="label-tag text-white/30 mb-8">By Invitation Only</p>
          </div>
          <h1
            className="font-serif font-light text-display-3xl text-white mb-8 tracking-[-0.022em] opacity-0 translate-y-4 animate-[fadeRise_0.9s_cubic-bezier(0.16,1,0.3,1)_0.48s_forwards]"
            id="social-heading"
          >
            The Social  - <br />
            <em>A Curated<br />Circle</em>
          </h1>
          {/*
            Hero subline: more specific  -  names what "aligned" means.
            Still restrained; does not oversell.
          */}
          <p className="font-serif font-light italic text-xl text-white/55 max-w-[520px] leading-relaxed opacity-0 translate-y-4 animate-[fadeRise_0.9s_cubic-bezier(0.16,1,0.3,1)_0.64s_forwards]">
            Eight travelers. One shared season.
            Chosen for what they have in common,
            not despite what they don't.
          </p>
        </div>
      </section>

      {/* ─── The distinction ────────────────────────────────────────────── */}
      <section
        className="bg-stone-900 border-t border-white/[0.07] px-[var(--px)] py-[var(--section-gap)]"
        aria-labelledby="distinction-heading"
      >
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-[clamp(48px,7vw,96px)]">
            <Reveal>
              <div>
                <p className="label-tag text-white/30 mb-6" id="distinction-heading">
                  The Distinction
                </p>
                {/*
                  Replaced "a private circle that happens to include people
                  you haven't met yet"  -  more composed, less clever.
                */}
                <p className="font-serif font-light text-display-sm text-white/80 leading-[1.45] tracking-[-0.01em]">
                  The Social is not a group tour. It is a private journey
                  shared by people who were selected to be in each other's
                  company.
                </p>
              </div>
            </Reveal>
            <div className="flex flex-col gap-7">
              <Reveal delay={1}>
                <p className="text-base font-light text-white/50 leading-relaxed">
                  Group travel is built around shared logistics  -  the same
                  vehicle, the same lodge, the same schedule. The Social is
                  built around shared intention: a small number of travelers
                  choosing Africa for the same reasons, at the same level of
                  seriousness, prepared to spend time in each other's company
                  with genuine interest.
                </p>
              </Reveal>
              <Reveal delay={2}>
                <p className="text-base font-light text-white/50 leading-relaxed">
                  We do not assemble the circle from a waitlist. We build it
                  from conversations  -  understanding who each person is, what
                  they are looking for, and whether the dynamic of a given
                  circle will produce something worth having. This takes time.
                  It is why membership is by introduction.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ─── The circle  -  editorial, not a product grid ─────────────────── */}
      {/*
        Three ideas presented as a single prose-like sequence rather
        than a feature grid. No ghost numerals, no tile background.
        Reads as a considered description, not a spec sheet.
      */}
      <section
        className="bg-stone-900 border-t border-white/[0.07] px-[var(--px)] py-[var(--section-gap)]"
        aria-labelledby="circle-heading"
      >
        <div className="container-site">
          <Reveal>
            <p className="label-tag text-white/30 mb-14" id="circle-heading">
              How the Circle Works
            </p>
          </Reveal>

          <div className="flex flex-col gap-0">
            {[
              {
                label: "Size",
                body:  "The circle never exceeds eight. Eight is the number at which genuine conversation remains possible across a full table  -  and at which the group can move through private territory without becoming a party.",
              },
              {
                label: "Selection",
                body:  "Participants are chosen for alignment in travel philosophy, temperament, and disposition toward both solitude and company. The process is personal and takes as long as it takes.",
              },
              {
                label: "Access",
                body:  "The circle moves through exclusive-use properties and restricted conservancies  -  places with no general public access. The shared nature of the journey is a premise, not a compromise.",
              },
            ].map(({ label, body }, i) => (
              <Reveal key={label} delay={(i % 3) as 0 | 1 | 2}>
                <div className="grid grid-cols-[120px_1fr] md:grid-cols-[200px_1fr] border-t border-white/[0.07] py-10 gap-8 md:gap-16">
                  <p className="label-tag text-white/30 pt-[3px]">{label}</p>
                  <p className="text-base font-light text-white/55 leading-relaxed">{body}</p>
                </div>
              </Reveal>
            ))}
            <div className="border-t border-white/[0.07]" />
          </div>
        </div>
      </section>

      {/* ─── Seasons ────────────────────────────────────────────────────── */}
      {/*
        Language is provisional by design  -  "Details to follow" and
        "Assembling now" are open-ended enough to age gracefully.
        SEASONS array is typed for easy replacement with a CMS or API feed.
      */}
      <section
        className="bg-stone-900 border-t border-white/[0.07] px-[var(--px)] py-[var(--section-gap)]"
        aria-labelledby="seasons-heading"
      >
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-[clamp(48px,7vw,96px)] items-start">
            <Reveal>
              <div>
                <p className="label-tag text-white/30 mb-6" id="seasons-heading">
                  Upcoming Seasons
                </p>
                <p className="font-serif font-light text-display-md text-white/80 leading-[1.1] tracking-[-0.012em] mb-6">
                  The circle for 2025<br />
                  is currently being<br />
                  <em>assembled.</em>
                </p>
                <p className="text-base font-light text-white/40 leading-relaxed">
                  We open one circle per season. Places are
                  allocated through conversation. If a particular
                  season interests you, the time to make contact
                  is before the circle closes.
                </p>
              </div>
            </Reveal>

            <Reveal delay={1}>
              <table className="w-full" aria-label="Season availability">
                <thead className="sr-only">
                  <tr><th>Period</th><th>Territory</th><th>Status</th></tr>
                </thead>
                <tbody>
                  {SEASONS.map((season, i) => (
                    <tr key={i} className="border-t border-white/[0.07]">
                      <td className="py-5 pr-8 align-top whitespace-nowrap">
                        <p className="label-tag text-white/30">{season.period}</p>
                      </td>
                      <td className="py-5 pr-8 align-top">
                        <p className="text-base font-light text-white/60">
                          {season.territory}
                        </p>
                      </td>
                      <td className="py-5 text-right align-top whitespace-nowrap">
                        <p className={["label-tag", STATUS_COLOR[season.status]].join(" ")}>
                          {STATUS_LABEL[season.status]}
                        </p>
                      </td>
                    </tr>
                  ))}
                  <tr className="border-t border-white/[0.07]" />
                </tbody>
              </table>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ─── Membership ─────────────────────────────────────────────────── */}
      <section
        className="bg-stone-900 border-t border-white/[0.07] px-[var(--px)] py-[var(--section-gap)]"
        aria-labelledby="membership-heading"
      >
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[clamp(48px,7vw,96px)] items-start">
            <Reveal>
              <div>
                <p className="label-tag text-white/30 mb-6" id="membership-heading">
                  Membership
                </p>
                <h2 className="font-serif font-light text-display-xl text-white mb-6 tracking-[-0.018em]">
                  Membership is<br />
                  by introduction<br />
                  <em>only.</em>
                </h2>
                {/*
                  Invitation language: natural, direct.
                  Removed the formal register of "appropriate step."
                */}
                <p className="text-base font-light text-white/40 leading-relaxed max-w-[400px]">
                  If The Social interests you, write to us directly.
                  Tell us who you are and what you are looking for.
                  We will read it carefully and respond.
                </p>
              </div>
            </Reveal>

            <Reveal delay={1}>
              <div className="lg:border-l lg:border-white/[0.07] lg:pl-14 flex flex-col gap-10">

                <div>
                  <p className="label-tag text-white/25 mb-5">What to Include</p>
                  <div className="flex flex-col gap-0">
                    {[
                      "How you came to find us, and why The Social in particular.",
                      "What you are looking for  -  in the company, in the landscape, in the season.",
                      "Any seasons you have in mind.",
                    ].map((line, i) => (
                      <div key={i} className="border-t border-white/[0.07] py-5">
                        <p className="text-base font-light text-white/45 leading-relaxed">
                          {line}
                        </p>
                      </div>
                    ))}
                    <div className="border-t border-white/[0.07]" />
                  </div>
                </div>

                <div>
                  <p className="label-tag text-white/25 mb-4">Direct Contact</p>
                  <p className="text-base font-light text-white/50 mb-6">
                    {INQUIRY_COPY.contactLine}
                  </p>
                  <Link
                    href={NAV_HREFS.inquire}
                    className="inline-flex items-center gap-3 text-2xs font-normal tracking-wide uppercase text-white/45 border-b border-white/20 hover:text-white/75 hover:border-white/45 pb-[2px] transition-colors duration"
                  >
                    {CTA.inquirePrivately}
                    <span aria-hidden="true">→</span>
                  </Link>
                </div>

              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ─── Exit  -  individual journeys ─────────────────────────────────── */}
      <section
        className="bg-stone-900 border-t border-white/[0.07] px-[var(--px)] py-[clamp(48px,6vw,80px)]"
        aria-label="Individual journey option"
      >
        <div className="container-site flex flex-col sm:flex-row sm:items-center sm:justify-between gap-8">
          <div>
            <p className="label-tag text-white/25 mb-3">Looking for a private journey?</p>
            <p className="text-base font-light text-white/40 leading-relaxed max-w-[400px]">
              The Social is one of five ways of experiencing Africa with
              Mason &amp; Wild. The others are entirely private  -  designed
              for individuals, couples, or small parties on their own terms.
            </p>
          </div>
          <Link
            href={NAV_HREFS.journeys}
            className="inline-flex items-center gap-3 text-2xs font-normal tracking-wide uppercase text-white/40 border-b border-white/15 hover:text-white/65 hover:border-white/35 pb-[2px] transition-colors duration whitespace-nowrap self-start sm:self-center"
          >
            View Individual Journeys
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
    </>
  );
}
