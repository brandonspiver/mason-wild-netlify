"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { NAV_LABELS, NAV_HREFS, CTA } from "@/lib/constants";

const NAV_ITEMS = [
  { label: NAV_LABELS.home,       href: NAV_HREFS.home },
  { label: NAV_LABELS.experience, href: NAV_HREFS.experience },
  { label: NAV_LABELS.journeys,   href: NAV_HREFS.journeys },
  { label: NAV_LABELS.journal,    href: NAV_HREFS.journal },
  { label: NAV_LABELS.about,      href: NAV_HREFS.about },
] as const;

const JOURNEY_MENU_ITEMS = [
  { label: "The Intimate", href: `${NAV_HREFS.journeys}/the-intimate` },
  { label: "The Untamed", href: `${NAV_HREFS.journeys}/the-untamed` },
  { label: "The Romantic", href: `${NAV_HREFS.journeys}/the-romantic` },
  { label: "The Adventure", href: `${NAV_HREFS.journeys}/the-adventure` },
  { label: "The Private Circuit", href: `${NAV_HREFS.journeys}/the-private-circuit` },
] as const;

const OVERLAY_ITEMS = [
  { label: NAV_LABELS.home,       href: NAV_HREFS.home },
  { label: NAV_LABELS.experience, href: NAV_HREFS.experience },
  { label: NAV_LABELS.journeys,   href: NAV_HREFS.journeys },
  { label: "The Social",          href: NAV_HREFS.social },
  { label: NAV_LABELS.journal,    href: NAV_HREFS.journal },
  { label: NAV_LABELS.about,      href: NAV_HREFS.about },
  { label: NAV_LABELS.inquire,    href: NAV_HREFS.inquire },
] as const;

export function NavBar() {
  const [open, setOpen]         = useState(false);

  // Lock body scroll when overlay is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  // Close on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <header
        className={[
          "fixed top-0 left-0 right-0 z-[200] h-[68px] flex items-center justify-between",
          "px-[var(--px)] border-b transition-all duration-slow",
          "bg-white/[0.95] border-stone-200 backdrop-blur-md",
        ].join(" ")}
        role="banner"
      >
        {/* Logo */}
        <Link
          href={NAV_HREFS.home}
          className={[
            "font-serif text-[1.1rem] font-normal tracking-[0.05em] transition-colors duration-[300ms]",
            "text-stone-900",
          ].join(" ")}
          aria-label="Mason & Wild  -  home"
        >
          Mason <em>&amp;</em> Wild
        </Link>

        {/* Desktop links */}
        <nav aria-label="Primary navigation">
          <ul className="hidden md:flex items-center gap-10" role="list">
            {NAV_ITEMS.map(({ label, href }) => (
              <li
                key={href}
                className={href === NAV_HREFS.journeys ? "relative group" : undefined}
              >
                <Link
                  href={href}
                  className={[
                    "text-2xs font-normal tracking-wide uppercase transition-colors duration-[200ms]",
                    "text-stone-500 hover:text-stone-900",
                  ].join(" ")}
                >
                  {label}
                </Link>

                {href === NAV_HREFS.journeys && (
                  <div className="pointer-events-none absolute left-1/2 top-full z-[220] w-[240px] -translate-x-1/2 pt-5 opacity-0 transition-all duration-[260ms] group-hover:pointer-events-auto group-hover:opacity-100 group-hover:translate-y-0 group-focus-within:pointer-events-auto group-focus-within:opacity-100">
                    <div className="border border-stone-200 bg-white/95 p-3 shadow-[0_18px_40px_rgba(20,16,10,0.08)] backdrop-blur-md">
                      <div className="flex flex-col">
                        {JOURNEY_MENU_ITEMS.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            className="px-4 py-3 font-serif text-[1.05rem] font-light text-stone-800 transition-colors duration-[200ms] hover:text-forest"
                          >
                            <em>{item.label}</em>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Desktop CTA */}
        <Link
          href={NAV_HREFS.inquire}
          className="hidden md:inline-flex items-center text-2xs font-normal tracking-wide uppercase text-white bg-forest hover:bg-forest-light px-5 py-[10px] transition-colors duration"
        >
          {CTA.inquirePrivately}
        </Link>

        {/* Burger */}
        <button
          className="md:hidden flex flex-col gap-[5px] p-1"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
          aria-expanded={open}
          aria-controls="nav-overlay"
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className={[
                "block w-[22px] h-px transition-colors duration-[300ms]",
                "bg-stone-800",
              ].join(" ")}
            />
          ))}
        </button>
      </header>

      {/* Mobile overlay */}
      <div
        id="nav-overlay"
        className={[
          "fixed inset-0 z-[199] bg-page flex flex-col items-center justify-center gap-10",
          "transition-all duration-slow",
          open
            ? "opacity-100 translate-y-0 scale-100 pointer-events-auto"
            : "opacity-0 translate-y-2 scale-[0.99] pointer-events-none",
        ].join(" ")}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation"
      >
        {/* Close */}
        <button
          className="absolute top-5 right-[var(--px)] text-2xs tracking-widest uppercase text-stone-400 hover:text-stone-700 transition-colors"
          onClick={() => setOpen(false)}
          aria-label="Close menu"
        >
          Close
        </button>

        <nav aria-label="Mobile navigation">
          <ul className="flex flex-col items-center gap-6" role="list">
            {OVERLAY_ITEMS.map(({ label, href }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="font-serif text-display-lg font-light text-stone-900 hover:italic hover:text-forest transition-all duration-slow"
                  onClick={() => setOpen(false)}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <Link
          href={NAV_HREFS.inquire}
          className="text-2xs tracking-wide uppercase text-white bg-forest hover:bg-forest-light px-7 py-3 transition-colors duration mt-4"
          onClick={() => setOpen(false)}
        >
          {CTA.inquirePrivately}
        </Link>
      </div>
    </>
  );
}
