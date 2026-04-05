"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

type JourneyCarouselImage = {
  readonly src: string;
  readonly alt: string;
  readonly position?: string;
};

type JourneyCarouselProps = {
  readonly images: readonly JourneyCarouselImage[];
  readonly intervalMs?: number;
};

export function JourneyCarousel({
  images,
  intervalMs = 5000,
}: JourneyCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const totalSlides = images.length;

  useEffect(() => {
    if (totalSlides <= 1) return;

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % totalSlides);
    }, intervalMs);

    return () => window.clearInterval(timer);
  }, [intervalMs, totalSlides]);

  const counter = useMemo(
    () => ({
      current: String(activeIndex + 1).padStart(2, "0"),
      total: String(totalSlides).padStart(2, "0"),
    }),
    [activeIndex, totalSlides],
  );

  if (totalSlides === 0) return null;

  return (
    <section
      className="relative overflow-hidden bg-[#111110] h-[400px] md:h-[540px]"
      aria-label="Journey gallery carousel"
    >
      <div
        className="flex h-full w-full will-change-transform transition-transform duration-700 ease-out"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div
            key={`${image.src}-${index}`}
            className="relative h-full min-w-full overflow-hidden"
            aria-hidden={index !== activeIndex}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="100vw"
              className="object-cover object-center scale-[1.03]"
              style={{ objectPosition: image.position ?? "center" }}
              priority={index === 0}
            />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(17,17,16,0.18)_0%,transparent_12%,transparent_88%,rgba(17,17,16,0.18)_100%),linear-gradient(to_top,rgba(17,17,16,0.55)_0%,transparent_40%)]" />
          </div>
        ))}
      </div>

      {totalSlides > 1 && (
        <>
          <button
            type="button"
            aria-label="Previous slide"
            onClick={() =>
              setActiveIndex((current) => (current - 1 + totalSlides) % totalSlides)
            }
            className="absolute left-6 top-1/2 z-10 hidden h-11 w-11 -translate-y-1/2 items-center justify-center border border-[rgba(245,242,237,0.14)] bg-[rgba(245,242,237,0.06)] text-[rgba(245,242,237,0.7)] backdrop-blur-sm transition-colors duration hover:border-[rgba(245,242,237,0.3)] hover:bg-[rgba(245,242,237,0.14)] hover:text-white md:flex"
          >
            <span aria-hidden="true">←</span>
          </button>

          <button
            type="button"
            aria-label="Next slide"
            onClick={() => setActiveIndex((current) => (current + 1) % totalSlides)}
            className="absolute right-6 top-1/2 z-10 hidden h-11 w-11 -translate-y-1/2 items-center justify-center border border-[rgba(245,242,237,0.14)] bg-[rgba(245,242,237,0.06)] text-[rgba(245,242,237,0.7)] backdrop-blur-sm transition-colors duration hover:border-[rgba(245,242,237,0.3)] hover:bg-[rgba(245,242,237,0.14)] hover:text-white md:flex"
          >
            <span aria-hidden="true">→</span>
          </button>
        </>
      )}

      <div className="absolute bottom-5 left-6 right-6 z-10 flex items-end justify-between gap-6 md:bottom-8 md:left-12 md:right-12">
        <p className="text-[0.58rem] font-medium uppercase tracking-[0.2em] text-[rgba(245,242,237,0.45)]">
          <strong className="font-medium text-white/85">{counter.current}</strong>
          <span className="mx-2 text-[rgba(245,242,237,0.28)]">/</span>
          {counter.total}
        </p>

        {totalSlides > 1 && (
          <div className="flex items-center gap-2">
            {images.map((image, index) => (
              <button
                key={`${image.alt}-${index}`}
                type="button"
                aria-label={`Go to slide ${index + 1}`}
                aria-pressed={index === activeIndex}
                onClick={() => setActiveIndex(index)}
                className="relative h-[2px] w-5 overflow-hidden bg-[rgba(245,242,237,0.22)]"
              >
                <span
                  key={`${activeIndex}-${index}`}
                  className={[
                    "absolute left-0 top-0 h-full bg-white transition-all",
                    index === activeIndex
                      ? "w-full duration-[5000ms] ease-linear"
                      : "w-0 duration-200",
                  ].join(" ")}
                />
              </button>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
