"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { NAV_HREFS } from "@/lib/constants";

type JourneyCard = {
  readonly slug: string;
  readonly href?: string;
  readonly name: string;
  readonly outcome: string;
  readonly tagline: string;
  readonly img: {
    readonly src: string;
    readonly alt: string;
  };
};

type RotatingJourneyCardsProps = {
  readonly journeys: readonly JourneyCard[];
};

const ROTATION_MS = 7000;
const CROSSFADE_MS = 1200;
const TRANSITION_SETTLE_MS = 80;

export function RotatingJourneyCards({ journeys }: RotatingJourneyCardsProps) {
  const [startIndex, setStartIndex] = useState(0);
  const [incomingStartIndex, setIncomingStartIndex] = useState<number | null>(null);
  const [isTransitionActive, setIsTransitionActive] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const completeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const enterFrameRef = useRef<number | null>(null);
  const settleFrameRef = useRef<number | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = () => setReducedMotion(media.matches);
    onChange();
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    return () => {
      if (completeTimerRef.current) clearTimeout(completeTimerRef.current);
      if (enterFrameRef.current) cancelAnimationFrame(enterFrameRef.current);
      if (settleFrameRef.current) cancelAnimationFrame(settleFrameRef.current);
    };
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    journeys.forEach((journey) => {
      const image = new window.Image();
      image.src = journey.img.src;
    });
  }, [journeys]);

  useEffect(() => {
    if (journeys.length <= 3 || isPaused || incomingStartIndex !== null) return;
    const timer = setTimeout(() => {
      const nextStart = (startIndex + 1) % journeys.length;

      if (reducedMotion) {
        setStartIndex(nextStart);
        return;
      }

      if (completeTimerRef.current) clearTimeout(completeTimerRef.current);
      if (enterFrameRef.current) cancelAnimationFrame(enterFrameRef.current);
      if (settleFrameRef.current) cancelAnimationFrame(settleFrameRef.current);

      setIncomingStartIndex(nextStart);
      setIsTransitionActive(false);

      enterFrameRef.current = requestAnimationFrame(() => {
        settleFrameRef.current = requestAnimationFrame(() => {
          setIsTransitionActive(true);
        });
      });

      completeTimerRef.current = setTimeout(() => {
        setStartIndex(nextStart);
        setIncomingStartIndex(null);
        setIsTransitionActive(false);
      }, CROSSFADE_MS + TRANSITION_SETTLE_MS);
    }, ROTATION_MS);

    return () => clearTimeout(timer);
  }, [journeys.length, isPaused, incomingStartIndex, startIndex, reducedMotion]);

  const getVisibleJourneys = (baseIndex: number) =>
    Array.from({ length: Math.min(3, journeys.length) }, (_, slot) => {
      const idx = (baseIndex + slot) % journeys.length;
      return { slot, journey: journeys[idx] };
    });

  const visibleJourneys = useMemo(
    () => getVisibleJourneys(startIndex),
    [journeys, startIndex],
  );

  const incomingJourneys = useMemo(() => {
    if (incomingStartIndex === null) return [];
    return getVisibleJourneys(incomingStartIndex);
  }, [journeys, incomingStartIndex]);

  const renderLayer = (
    cards: { slot: number; journey: JourneyCard }[],
    layer: "base" | "incoming",
    baseIndex: number,
  ) => {
    const isIncomingLayer = layer === "incoming";
    const transform = reducedMotion || !isIncomingLayer
      ? "translate3d(0, 0, 0) scale(1)"
      : isTransitionActive
        ? "translate3d(0, 0, 0) scale(1)"
        : "translate3d(0, 0, 0) scale(1.018)";
    const filter = reducedMotion || !isIncomingLayer
      ? "none"
      : isTransitionActive
        ? "none"
        : "brightness(0.94) saturate(0.94)";

    return (
    <div
      className={[
        "grid grid-cols-1 md:grid-cols-3 gap-px bg-stone-200 border-x border-stone-200",
        isIncomingLayer
          ? [
              "absolute inset-0 pointer-events-none",
              reducedMotion ? "" : "transition-[opacity,transform,filter]",
            ].join(" ")
          : "pointer-events-auto",
      ].join(" ")}
      style={{
        opacity: isIncomingLayer ? (isTransitionActive ? 1 : 0) : 1,
        transform,
        filter,
        transitionDuration: reducedMotion ? "0ms" : `${CROSSFADE_MS}ms`,
        transitionTimingFunction: "cubic-bezier(0.22, 1, 0.28, 1)",
        willChange: reducedMotion || !isIncomingLayer ? "auto" : "opacity, transform, filter",
      }}
      aria-hidden={isIncomingLayer}
    >
      {cards.map(({ slot, journey }) => (
        <article
          key={`${layer}-${journey.slug}-${baseIndex}-${slot}`}
          className="relative overflow-hidden bg-stone-800 group"
        >
          <Image
            src={journey.img.src}
            alt={journey.img.alt}
            width={600}
            height={800}
            quality={88}
            sizes="(max-width: 767px) 100vw, 33vw"
            className="w-full aspect-[3/4] object-cover object-center transition-transform motion-premium group-hover:scale-[1.03] group-hover:opacity-[0.9]"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[rgba(14,12,8,0.98)] via-[rgba(14,12,8,0.72)] via-55% to-[rgba(14,12,8,0.18)] flex flex-col justify-end p-7">
            <p className="label-tag text-[#e8ddd0] mb-2 [text-shadow:0_1px_8px_rgba(0,0,0,0.85)]">
              {journey.outcome}
            </p>
            <h3 className="font-serif font-light text-display-sm text-[#fffaf2] leading-[1.1] tracking-[-0.01em] mb-5 [text-shadow:0_2px_14px_rgba(0,0,0,0.9)]">
              The <em>{journey.name.replace("The ", "")}</em>
            </h3>
            <p className="clamp-3 text-sm font-light text-[#e8ddd0] leading-relaxed mb-5 max-w-[22ch] [text-shadow:0_2px_12px_rgba(0,0,0,0.88)]">
              {journey.tagline}
            </p>
            <Link
              href={journey.href ? journey.href : `${NAV_HREFS.journeys}/${journey.slug}`}
              className="self-start text-2xs tracking-wide uppercase text-[#fff4e2] border-b border-[#fff4e2]/50 pb-px transition-all duration [text-shadow:0_2px_10px_rgba(0,0,0,0.88)] group-hover:text-white group-hover:border-white"
            >
              Explore {"->"}
            </Link>
            <div className="mt-5 h-px w-full max-w-[180px] overflow-hidden bg-white/25">
              {isIncomingLayer ? null : reducedMotion ? (
                <span className="block h-full w-full bg-white/65" />
              ) : (
                <span
                  key={`progress-${baseIndex}-${slot}`}
                  className="[animation-fill-mode:forwards] [animation-name:journeyProgress] [animation-timing-function:linear] block h-full w-full origin-left bg-white/75"
                  style={{
                    animationDuration: `${ROTATION_MS}ms`,
                    animationPlayState: isPaused ? "paused" : "running",
                  }}
                />
              )}
            </div>
          </div>
        </article>
      ))}
    </div>
    );
  };

  return (
    <div
      ref={wrapperRef}
      className="relative overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocusCapture={() => setIsPaused(true)}
      onBlurCapture={(e) => {
        if (wrapperRef.current?.contains(e.relatedTarget as Node)) return;
        setIsPaused(false);
      }}
      aria-live="polite"
      aria-label="Rotating journey archetypes"
    >
      <div
        className="pointer-events-none absolute inset-0 -z-10 h-0 overflow-hidden opacity-0"
        aria-hidden="true"
      >
        {journeys.map((journey) => (
          <Image
            key={`preload-${journey.slug}`}
            src={journey.img.src}
            alt=""
            width={600}
            height={800}
            quality={88}
            sizes="(max-width: 767px) 100vw, 33vw"
            className="h-0 w-0"
            loading="eager"
          />
        ))}
      </div>
      {renderLayer(visibleJourneys, "base", startIndex)}
      {incomingStartIndex !== null && renderLayer(incomingJourneys, "incoming", incomingStartIndex)}
    </div>
  );
}
