"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { NAV_LABELS, NAV_HREFS, CTA } from "@/lib/constants";

const NAV_ITEMS = [
  { label: NAV_LABELS.experience, href: NAV_HREFS.experience },
  { label: NAV_LABELS.journeys,   href: NAV_HREFS.journeys },
  { label: NAV_LABELS.journal,    href: NAV_HREFS.journal },
  { label: NAV_LABELS.about,      href: NAV_HREFS.about },
] as const;

const OVERLAY_ITEMS = [
  { label: NAV_LABELS.experience, href: NAV_HREFS.experience },
  { label: NAV_LABELS.journeys,   href: NAV_HREFS.journeys },
  { label: "The Social",          href: NAV_HREFS.social },
  { label: NAV_LABELS.journal,    href: NAV_HREFS.journal },
  { label: NAV_LABELS.about,      href: NAV_HREFS.about },
  { label: NAV_LABELS.inquire,    href: NAV_HREFS.inquire },
] as const;

export function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen]         = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 56);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
          scrolled
            ? "bg-white/[0.95] border-stone-200 backdrop-blur-md"
            : "bg-transparent border-transparent",
        ].join(" ")}
        role="banner"
      >
        {/* Logo */}
        <Link
          href={NAV_HREFS.home}
          className={[
            "font-serif text-[1.1rem] font-normal tracking-[0.05em] transition-colors duration-[300ms]",
            scrolled ? "text-stone-900" : "text-white",
          ].join(" ")}
          aria-label="Mason & Wild — home"
        >
          Mason <em>&amp;</em> Wild
        </Link>

        {/* Desktop links */}
        <nav aria-label="Primary navigation">
          <ul className="hidden md:flex items-center gap-10" role="list">
            {NAV_ITEMS.map(({ label, href }) => (
              <li key={href}>
                <Link
                  href={href}
                  className={[
                    "text-2xs font-normal tracking-wide uppercase transition-colors duration-[200ms]",
                    scrolled
                      ? "text-stone-500 hover:text-stone-900"
                      : "text-white/[0.62] hover:text-white",
                  ].join(" ")}
                >
                  {label}
                </Link>
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
                scrolled ? "bg-stone-800" : "bg-white/80",
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
          "transition-opacity duration-slow",
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
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
                  className="font-serif text-display-lg font-light text-stone-900 hover:italic hover:text-forest transition-all duration"
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
