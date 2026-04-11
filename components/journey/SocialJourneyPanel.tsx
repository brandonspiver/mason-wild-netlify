"use client";

import { useState } from "react";
import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";

type ShapeCard = {
  readonly number: string;
  readonly days: string;
  readonly title: string;
  readonly copy: string;
  readonly image?: {
    readonly src: string;
    readonly alt: string;
    readonly position?: string;
  };
};

type Inclusion = {
  readonly title: string;
  readonly copy: string;
};

type SocialJourneyPanelProps = {
  readonly intro: string;
  readonly shapeCards: readonly ShapeCard[];
  readonly definesIntro: string;
  readonly definesItems: readonly Inclusion[];
  readonly includesIntro: string;
  readonly includesItems: readonly Inclusion[];
};

export function SocialJourneyPanel({
  intro,
  shapeCards,
  definesIntro,
  definesItems,
  includesIntro,
  includesItems,
}: SocialJourneyPanelProps) {
  const [activeTab, setActiveTab] = useState<"summary" | "defines" | "includes">("summary");

  return (
    <section
      className="section border-t border-b border-stone-200"
      aria-labelledby="social-summary-heading"
    >
      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-[240px_minmax(0,1fr)] gap-[clamp(44px,7vw,112px)] items-start">
          <Reveal>
            <aside className="lg:sticky lg:top-[108px] lg:pr-10 lg:border-r lg:border-stone-200">
              <p className="label-tag mb-8">Journey Summary</p>
              <div className="flex flex-col gap-4">
                <button
                  type="button"
                  onClick={() => setActiveTab("summary")}
                  className={[
                    "w-full border-b pb-3 text-left text-sm font-normal tracking-wide uppercase transition-colors duration-[220ms]",
                    activeTab === "summary"
                      ? "border-forest text-forest"
                      : "border-stone-200 text-stone-500 hover:text-stone-900",
                  ].join(" ")}
                >
                  Journey Flow
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab("defines")}
                  className={[
                    "w-full border-b pb-3 text-left text-sm font-normal tracking-wide uppercase transition-colors duration-[220ms]",
                    activeTab === "defines"
                      ? "border-forest text-forest"
                      : "border-stone-200 text-stone-500 hover:text-stone-900",
                  ].join(" ")}
                >
                  What Defines This Journey
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab("includes")}
                  className={[
                    "w-full border-b pb-3 text-left text-sm font-normal tracking-wide uppercase transition-colors duration-[220ms]",
                    activeTab === "includes"
                      ? "border-forest text-forest"
                      : "border-stone-200 text-stone-500 hover:text-stone-900",
                  ].join(" ")}
                >
                  What&apos;s Included
                </button>
              </div>
            </aside>
          </Reveal>

          <div className="min-w-0">
            {activeTab === "summary" ? (
              <div className="animate-[fadeRise_0.55s_cubic-bezier(0.16,1,0.3,1)_forwards]">
                <Reveal>
                  <div className="mb-[clamp(44px,7vw,72px)]">
                    <p className="label-tag mb-4">Journey Flow</p>
                    <h2
                      className="font-serif font-light text-display-md text-stone-900"
                      id="social-summary-heading"
                    >
                      Journey Flow
                    </h2>
                    <p className="mt-6 max-w-[760px] text-sm font-light text-stone-500 leading-relaxed">
                      {intro}
                    </p>
                  </div>
                </Reveal>

                <div className="border-t border-stone-200">
                  {shapeCards.map((card, index) => (
                    <Reveal key={card.number} delay={(index % 4) as 0 | 1 | 2 | 3 | 4}>
                      <div className="grid grid-cols-1 gap-8 border-b border-stone-200 py-8 md:gap-10 md:py-10 lg:grid-cols-[92px_minmax(0,1fr)]">
                        <div className="flex items-start gap-4 lg:block">
                          <span className="font-serif font-light text-[2rem] leading-none text-stone-300">
                            {card.number}
                          </span>
                          <div className="lg:mt-6">
                            <p className="label-tag">{card.days}</p>
                          </div>
                        </div>

                        <div className="min-w-0">
                          <div className="grid grid-cols-1 gap-6 xl:grid-cols-[minmax(0,1.3fr)_320px] xl:items-start xl:gap-10">
                            <div className="min-w-0">
                              <p className="font-serif font-light text-[clamp(1.8rem,3vw,2.5rem)] leading-[1.02] tracking-[-0.02em] text-stone-900 mb-4">
                                <em>{card.title}</em>
                              </p>
                              <p className="max-w-[860px] text-sm font-light text-stone-500 leading-relaxed">
                                {card.copy}
                              </p>
                            </div>

                            <div className="overflow-hidden">
                              <Image
                                src={card.image?.src ?? "/journeys/the-social-shift/TA (10).png"}
                                alt={card.image?.alt ?? card.title}
                                width={960}
                                height={720}
                                className="w-full aspect-[6/4] object-cover object-center transition-transform duration-[900ms] ease-out hover:scale-[1.02]"
                                style={{ objectPosition: card.image?.position ?? "center" }}
                                loading="lazy"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>
            ) : activeTab === "defines" ? (
              <div className="animate-[fadeRise_0.55s_cubic-bezier(0.16,1,0.3,1)_forwards]">
                <Reveal>
                  <div className="mb-10">
                    <p className="label-tag mb-4">Experience Highlights</p>
                    <h2
                      className="font-serif font-light text-display-md text-stone-900"
                      id="social-summary-heading"
                    >
                      What Defines This Journey
                    </h2>
                    <p className="mt-6 max-w-[760px] text-sm font-light text-stone-500 leading-relaxed">
                      {definesIntro}
                    </p>
                  </div>
                </Reveal>

                <div className="grid grid-cols-1 gap-x-12 md:grid-cols-2">
                  {definesItems.map((item, index) => (
                    <Reveal key={item.title} delay={(index % 3) as 0 | 1 | 2 | 3 | 4}>
                      <div className="border-t border-stone-200 py-7 md:py-8">
                        <p className="label-tag mb-4">{item.title}</p>
                        <p className="max-w-[34rem] text-sm font-light text-stone-500 leading-relaxed">
                          {item.copy}
                        </p>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>
            ) : (
              <div className="animate-[fadeRise_0.55s_cubic-bezier(0.16,1,0.3,1)_forwards]">
                <Reveal>
                  <div className="mb-10">
                    <p className="label-tag mb-4">What&apos;s Included</p>
                    <h2
                      className="font-serif font-light text-display-md text-stone-900"
                      id="social-summary-heading"
                    >
                      What&apos;s Included
                    </h2>
                    <p className="mt-6 max-w-[760px] text-sm font-light text-stone-500 leading-relaxed">
                      {includesIntro}
                    </p>
                  </div>
                </Reveal>

                <div className="grid grid-cols-1 gap-x-12 md:grid-cols-2">
                  {includesItems.map((item, index) => (
                    <Reveal key={item.title} delay={(index % 3) as 0 | 1 | 2 | 3 | 4}>
                      <div className="border-t border-stone-200 py-7 md:py-8">
                        <p className="label-tag mb-4">{item.title}</p>
                        <p className="max-w-[34rem] text-sm font-light text-stone-500 leading-relaxed">
                          {item.copy}
                        </p>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
