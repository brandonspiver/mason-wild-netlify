"use client";

import { useEffect, useRef } from "react";
import { clsx } from "clsx";

interface RevealProps {
  children:  React.ReactNode;
  className?: string;
  delay?:    0 | 1 | 2 | 3 | 4;
  as?:       keyof JSX.IntrinsicElements;
}

const delayClass: Record<number, string> = {
  0: "",
  1: "reveal-d1",
  2: "reveal-d2",
  3: "reveal-d3",
  4: "reveal-d4",
};

export function Reveal({
  children,
  className,
  delay = 0,
  as: Tag = "div",
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("in");
          io.unobserve(el);
        }
      },
      { threshold: 0.07, rootMargin: "0px 0px -40px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    // @ts-expect-error — dynamic tag
    <Tag
      ref={ref}
      className={clsx("reveal", delayClass[delay], className)}
    >
      {children}
    </Tag>
  );
}
