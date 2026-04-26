import type { Metadata } from "next";
import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { NAV_HREFS } from "@/lib/constants";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "About Mason & Wild",
  description:
    "Meet Mason & Wild and founder Zannon James. Founder-led luxury African journey design shaped by firsthand regional knowledge, care, privacy, and thoughtful curation.",
  path: "/about",
});

const DIFFERENCE_POINTS = [
  {
    title: "Founder-led planning",
    body: "You deal with real expertise, not layers of admin.",
  },
  {
    title: "Personally curated journeys",
    body: "No recycled itineraries or generic recommendations.",
  },
  {
    title: "Luxury with soul",
    body: "Beautiful travel with emotional intelligence.",
  },
  {
    title: "Deep Africa knowledge",
    body: "First-hand destination understanding across multiple countries.",
  },
  {
    title: "Inclusive by nature",
    body: "Welcoming modern travellers of all backgrounds and identities.",
  },
  {
    title: "Seamless execution",
    body: "Every detail handled with precision.",
  },
] as const;

const VALUES = [
  {
    title: "Excellence Without Pretence",
    body: "Quiet confidence, polished execution, genuine care.",
  },
  {
    title: "Luxury With Meaning",
    body: "Beautiful travel that feels personal, never performative.",
  },
  {
    title: "Conservation Forward",
    body: "We support properties and experiences that protect wildlife and communities.",
  },
  {
    title: "Human Connection",
    body: "Travel should move people, not just impress them.",
  },
] as const;

export default function AboutPage() {
  return (
    <>
      <section
        className="pt-[var(--page-header-pt)] pb-[clamp(56px,8vw,104px)] border-b border-stone-200"
        aria-labelledby="about-heading"
      >
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.15fr)_minmax(360px,0.85fr)] gap-[clamp(44px,7vw,96px)] items-end">
            <div>
              <Reveal>
                <p className="label-tag mb-6">Founder-Led African Journey Design</p>
              </Reveal>
              <Reveal delay={1}>
                <h1
                  className="font-serif font-light text-stone-900 text-[clamp(2.5rem,5.4vw,5.85rem)] leading-[1.02] tracking-[-0.018em] mb-8"
                  id="about-heading"
                >
                  About<br />
                  <em>Mason &amp; Wild</em>
                </h1>
              </Reveal>
              <Reveal delay={2}>
                <p className="font-serif font-light italic text-[clamp(1.35rem,2vw,2rem)] text-stone-700 leading-[1.45] tracking-[-0.01em] max-w-[760px]">
                  Luxury African journeys designed with instinct, care, and wild intention.
                </p>
              </Reveal>
            </div>

            <Reveal delay={3}>
              <div className="border-t border-stone-200 pt-8">
                <p className="text-base font-light text-stone-500 leading-relaxed mb-8">
                  Mason &amp; Wild was created for travellers who want more than a
                  holiday. We design deeply personal journeys across Africa for
                  those who value rare experiences, beautiful places, meaningful
                  service, and the confidence that every detail has been
                  thoughtfully handled.
                </p>
                <Button href={NAV_HREFS.inquire} variant="ghost">
                  Plan Your Journey
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section
        className="grid grid-cols-1 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] border-b border-stone-200"
        aria-labelledby="founder-heading"
      >
        <Reveal>
          <div
            className="relative min-h-[520px] overflow-hidden bg-page-subtle lg:min-h-[780px]"
            aria-label="Zannon James founder portrait"
          >
            <Image
              src="/about/zannon-about.jpg"
              alt="Zannon James, founder of Mason & Wild"
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              quality={92}
              className="object-cover object-[20%_36%]"
              priority
            />
          </div>
        </Reveal>

        <Reveal delay={1}>
          <div className="flex min-h-full flex-col justify-center bg-page-subtle px-[clamp(30px,5vw,76px)] py-[clamp(56px,8vw,104px)]">
            <p className="label-tag mb-6">Meet The Founder</p>
            <h2
              className="font-serif font-light text-display-lg text-stone-900 mb-8 tracking-[-0.014em]"
              id="founder-heading"
            >
              Meet <em>Zannon James</em>
            </h2>
            <div className="flex flex-col gap-6 max-w-[760px]">
              <p className="text-base font-light text-stone-500 leading-relaxed">
                Mason &amp; Wild was founded by Zannon James, a luxury African
                travel specialist with more than a decade of experience designing
                tailor-made journeys across Southern and East Africa.
              </p>
              <p className="text-base font-light text-stone-500 leading-relaxed">
                Having sold and personally explored destinations including South
                Africa, Zambia, Tanzania, Mozambique, Botswana, Zimbabwe, Kenya,
                Rwanda and Uganda, Zannon combines first-hand destination
                knowledge with a sharp understanding of what discerning travellers
                truly value.
              </p>
              <p className="text-base font-light text-stone-500 leading-relaxed">
                His approach is personal, honest and highly curated. Every lodge,
                route, guide and experience is selected with intention, balancing
                exceptional hospitality, wilderness, privacy, style and substance.
              </p>
              <p className="text-base font-light text-stone-500 leading-relaxed">
                Mason &amp; Wild was built to offer a more thoughtful kind of
                safari company: founder-led, design-driven and deeply invested in
                every client journey.
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      <section
        className="section border-b border-stone-200"
        aria-labelledby="difference-heading"
      >
        <div className="container-site">
          <Reveal>
            <div className="mb-12 max-w-[760px]">
              <p className="label-tag mb-4">Quietly Considered</p>
              <h2
                className="font-serif font-light text-display-lg text-stone-900 tracking-[-0.014em]"
                id="difference-heading"
              >
                Why We&apos;re <em>Different</em>
              </h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px border border-stone-200 bg-stone-200">
            {DIFFERENCE_POINTS.map((item, index) => (
              <Reveal key={item.title} delay={(index % 3) as 0 | 1 | 2}>
                <article className="h-full bg-page px-7 py-8 md:px-10 md:py-10">
                  <h3 className="font-serif font-light text-[clamp(1.5rem,2vw,2.35rem)] text-stone-900 leading-[1.15] tracking-[-0.01em] mb-4">
                    {item.title}
                  </h3>
                  <p className="text-sm md:text-base font-light text-stone-500 leading-relaxed">
                    {item.body}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section
        className="section bg-forest border-b border-forest/70"
        aria-labelledby="values-heading"
      >
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-[clamp(44px,7vw,96px)] items-start">
            <Reveal>
              <div className="lg:sticky lg:top-[112px]">
                <p className="label-tag text-white/45 mb-5">Our Values</p>
                <h2
                  className="font-serif font-light text-display-lg text-white tracking-[-0.014em]"
                  id="values-heading"
                >
                  The standards behind
                  <br />
                  every <em>journey.</em>
                </h2>
              </div>
            </Reveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-px border border-white/[0.16] bg-white/[0.16]">
              {VALUES.map((item, index) => (
                <Reveal key={item.title} delay={(index % 3) as 0 | 1 | 2}>
                  <article className="h-full bg-forest px-7 py-8 md:px-9 md:py-10">
                    <h3 className="font-serif font-light text-display-sm text-white leading-[1.15] tracking-[-0.01em] mb-4">
                      {item.title}
                    </h3>
                    <p className="text-sm font-light text-white/60 leading-relaxed">
                      {item.body}
                    </p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-stone-200 bg-page-subtle px-[var(--px)] py-[clamp(44px,6vw,72px)]">
        <Reveal>
          <div className="mx-auto flex max-w-site flex-col gap-7 md:flex-row md:items-center md:justify-between">
            <p className="font-serif font-light italic text-[clamp(1.4rem,2vw,2rem)] text-stone-800 leading-[1.45] tracking-[-0.01em] max-w-[760px]">
              The right journey is not assembled from a list. It is shaped by
              judgement, relationship, and the discipline to leave out what does
              not belong.
            </p>
            <Button href={NAV_HREFS.journeys} variant="ghost">
              Explore the Journeys
            </Button>
          </div>
        </Reveal>
      </section>

      <section
        className="bg-forest px-[var(--px)] py-[clamp(72px,10vw,124px)] text-center"
        aria-labelledby="final-cta-heading"
      >
        <Reveal>
          <p className="label-tag text-white/36 mb-5">Begin Your Journey</p>
          <h2
            className="font-serif font-light text-display-2xl text-white mb-5 tracking-tighter"
            id="final-cta-heading"
          >
            Begin<br />
            <em>Your Journey.</em>
          </h2>
          <p className="text-base font-light text-white/55 leading-relaxed max-w-[520px] mx-auto mb-12">
            Africa is extraordinary when done properly. We would be honoured to
            design it with you.
          </p>
          <div className="flex items-center justify-center gap-8 flex-wrap">
            <Button href={NAV_HREFS.inquire} variant="outline-light">
              Plan Your Journey
            </Button>
            <Button href={NAV_HREFS.inquire} variant="ghost-light" arrow={false}>
              Contact Us
            </Button>
          </div>
        </Reveal>
      </section>
    </>
  );
}
