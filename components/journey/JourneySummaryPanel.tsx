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
  definesIntro: string;
  defines: readonly PillarItem[];
  includesIntro: string;
  includesItems: readonly PillarItem[];
  summaryTabLabel?: string;
  definesTabLabel?: string;
  includesTabLabel?: string;
  summaryEyebrow?: string;
  summaryHeading?: string;
  summaryEmphasis?: string;
  definesEyebrow?: string;
  definesHeading?: string;
  definesEmphasis?: string;
  includesEyebrow?: string;
  includesHeading?: string;
  includesEmphasis?: string;
};

export function JourneySummaryPanel({
  flowIntro,
  flow,
  definesIntro,
  defines,
  includesIntro,
  includesItems,
  summaryTabLabel = "Journey Flow",
  definesTabLabel = "What Defines This Journey",
  includesTabLabel = "What's Included",
  summaryEyebrow = "Journey Flow",
  summaryHeading = "Journey Flow",
  summaryEmphasis,
  definesEyebrow = "Experience Highlights",
  definesHeading = "What Defines This Journey",
  definesEmphasis,
  includesEyebrow = "What's Included",
  includesHeading = "What's Included",
  includesEmphasis,
}: JourneySummaryPanelProps) {
  const [activeTab, setActiveTab] = useState<"summary" | "defines" | "includes">("summary");

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
                  {summaryTabLabel}
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
                  {definesTabLabel}
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
                  {includesTabLabel}
                </button>
              </div>
            </aside>
          </Reveal>

          <div className="min-w-0">
            {activeTab === "summary" ? (
              <div key="summary" className="animate-[fadeRise_0.55s_cubic-bezier(0.16,1,0.3,1)_forwards]">
                <Reveal>
                  <div className="mb-[clamp(44px,7vw,72px)]">
                    <p className="label-tag mb-4">{summaryEyebrow}</p>
                    <h2
                      className="font-serif font-light text-display-md text-stone-900"
                      id="summary-heading"
                    >
                      {summaryHeading}
                      {summaryEmphasis ? (
                        <>
                          <br />
                          <em>{summaryEmphasis}</em>
                        </>
                      ) : null}
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
            ) : activeTab === "defines" ? (
              <div key="defines" className="animate-[fadeRise_0.55s_cubic-bezier(0.16,1,0.3,1)_forwards]">
                <Reveal>
                  <div className="mb-10">
                    <p className="label-tag mb-4">{definesEyebrow}</p>
                    <h2 className="font-serif font-light text-display-md text-stone-900" id="summary-heading">
                      {definesHeading}
                      {definesEmphasis ? (
                        <>
                          <br />
                          <em>{definesEmphasis}</em>
                        </>
                      ) : null}
                    </h2>
                    <p className="mt-6 max-w-[760px] text-base font-light text-stone-500 leading-relaxed">
                      {definesIntro}
                    </p>
                  </div>
                </Reveal>

                <div className="grid grid-cols-1 gap-x-12 md:grid-cols-2">
                  {defines.map((pillar, index) => (
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
            ) : (
              <div key="includes" className="animate-[fadeRise_0.55s_cubic-bezier(0.16,1,0.3,1)_forwards]">
                <Reveal>
                  <div className="mb-10">
                    <p className="label-tag mb-4">{includesEyebrow}</p>
                    <h2 className="font-serif font-light text-display-md text-stone-900" id="summary-heading">
                      {includesHeading}
                      {includesEmphasis ? (
                        <>
                          <br />
                          <em>{includesEmphasis}</em>
                        </>
                      ) : null}
                    </h2>
                    <p className="mt-6 max-w-[760px] text-base font-light text-stone-500 leading-relaxed">
                      {includesIntro}
                    </p>
                  </div>
                </Reveal>

                <div className="grid grid-cols-1 gap-x-12 md:grid-cols-2">
                  {includesItems.map((item, index) => (
                    <Reveal key={item.key} delay={(index % 3) as 0 | 1 | 2 | 3 | 4}>
                      <div className="border-t border-stone-200 py-7 md:py-8">
                        <p className="label-tag mb-4">{item.title}</p>
                        <p className="max-w-[34rem] text-base font-light text-stone-500 leading-relaxed">
                          {item.body}
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
