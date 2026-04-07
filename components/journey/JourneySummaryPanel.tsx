"use client";

import { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";

type FlowItem = {
  readonly number: string;
  readonly period: string;
  readonly title: string;
  readonly body: string;
};

type PillarItem = {
  readonly key: string;
  readonly title: string;
  readonly body: string;
};

type JourneySummaryPanelProps = {
  flowIntro: string;
  flow: readonly FlowItem[];
  pillarsIntro: string;
  pillars: readonly PillarItem[];
};

export function JourneySummaryPanel({
  flowIntro,
  flow,
  pillarsIntro,
  pillars,
}: JourneySummaryPanelProps) {
  const [activeTab, setActiveTab] = useState<"summary" | "includes">("summary");

  return (
    <section
      className="section border-t border-b border-stone-200"
      aria-labelledby="summary-heading"
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
                  Trip Summary
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
              <div key="summary" className="animate-[fadeRise_0.55s_cubic-bezier(0.16,1,0.3,1)_forwards]">
                <Reveal>
                  <div className="mb-[clamp(44px,7vw,72px)]">
                    <p className="label-tag mb-4">A Sense of Shape</p>
                    <h2
                      className="font-serif font-light text-display-md text-stone-900"
                      id="summary-heading"
                    >
                      How the journey
                      <br />
                      <em>unfolds.</em>
                    </h2>
                    <p className="mt-6 max-w-[760px] text-base font-light text-stone-500 leading-relaxed">
                      {flowIntro}
                    </p>
                  </div>
                </Reveal>

                <div className="border-t border-stone-200">
                  {flow.map((phase, index) => (
                    <Reveal key={phase.number} delay={(index % 4) as 0 | 1 | 2 | 3 | 4}>
                      <div className="grid grid-cols-[56px_1fr] gap-6 border-b border-stone-200 py-8 md:grid-cols-[84px_1fr] md:gap-10 md:py-10">
                        <div className="flex flex-col items-center">
                          <span className="font-serif font-light text-[2rem] leading-none text-stone-300">
                            {phase.number}
                          </span>
                          {index < flow.length - 1 && (
                            <span className="mt-5 w-px flex-1 bg-stone-200" aria-hidden="true" />
                          )}
                        </div>
                        <div className="min-w-0">
                          <p className="label-tag mb-3">{phase.period}</p>
                          <p className="font-serif font-light text-[clamp(1.8rem,3vw,2.5rem)] leading-[1.02] tracking-[-0.02em] text-stone-900 mb-4">
                            <em>{phase.title}</em>
                          </p>
                          <p className="max-w-[860px] text-base font-light text-stone-500 leading-relaxed md:text-[1.08rem] md:leading-[1.85]">
                            {phase.body}
                          </p>
                        </div>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>
            ) : (
              <div key="includes" className="animate-[fadeRise_0.55s_cubic-bezier(0.16,1,0.3,1)_forwards]">
                <Reveal>
                  <div className="mb-10">
                    <p className="label-tag mb-4">What This Journey Includes</p>
                    <h2 className="font-serif font-light text-display-md text-stone-900" id="summary-heading">
                      What&apos;s included
                    </h2>
                    <p className="mt-6 max-w-[760px] text-base font-light text-stone-500 leading-relaxed">
                      {pillarsIntro}
                    </p>
                  </div>
                </Reveal>

                <div className="grid grid-cols-1 gap-x-12 md:grid-cols-2">
                  {pillars.map((pillar, index) => (
                    <Reveal key={pillar.key} delay={(index % 3) as 0 | 1 | 2 | 3 | 4}>
                      <div className="border-t border-stone-200 py-7 md:py-8">
                        <p className="label-tag mb-4">{pillar.title}</p>
                        <p className="max-w-[34rem] text-base font-light text-stone-500 leading-relaxed">
                          {pillar.body}
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
