"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
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
  { label: "The Classic", href: `${NAV_HREFS.journeys}/the-classic` },
  { label: "The Adventure", href: `${NAV_HREFS.journeys}/the-adventure` },
  { label: "The Private Circuit", href: `${NAV_HREFS.journeys}/the-private-circuit` },
  { label: "The Social Shift", href: NAV_HREFS.social },
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
  const [journeysOpen, setJourneysOpen] = useState(false);
  const pathname = usePathname();
  const journeysItemRef = useRef<HTMLLIElement | null>(null);
  const journeysActive =
    pathname === NAV_HREFS.journeys ||
    pathname.startsWith(`${NAV_HREFS.journeys}/`) ||
    pathname === NAV_HREFS.social;
  const isNavItemActive = (href: string) => {
    if (href === NAV_HREFS.home) return pathname === NAV_HREFS.home;
    if (href === NAV_HREFS.journeys) return journeysActive;
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  // Lock body scroll when overlay is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  // Close journeys menu on outside click
  useEffect(() => {
    const onPointerDown = (e: PointerEvent) => {
      if (!journeysItemRef.current) return;
      if (journeysItemRef.current.contains(e.target as Node)) return;
      setJourneysOpen(false);
    };

    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, []);

  // Close on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        setJourneysOpen(false);
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  // Close dropdown after route changes
  useEffect(() => {
    setJourneysOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={[
          "fixed top-0 left-0 right-0 z-[200] h-[74px] flex items-center justify-between md:grid md:grid-cols-[1fr_auto_1fr] md:items-center",
          "px-[var(--px)] border-b transition-all duration-slow",
          "bg-[rgba(253,252,250,0.88)] border-stone-200/85 backdrop-blur-xl",
          "shadow-[0_1px_0_rgba(22,19,16,0.02)]",
        ].join(" ")}
        role="banner"
      >
        {/* Logo */}
        <Link
          href={NAV_HREFS.home}
          className="inline-flex items-center md:justify-self-start"
          aria-label="Mason & Wild home"
        >
          <Image
            src="/branding/mason-wild-header-wordmark-cropped.png"
            alt="Mason & Wild"
            width={1075}
            height={453}
            priority
            className="block h-[36px] w-auto -translate-y-[1px] lg:h-[39px]"
          />
        </Link>

        {/* Desktop links */}
        <nav aria-label="Primary navigation" className="justify-self-center">
          <ul className="hidden md:flex md:items-center md:gap-10" role="list">
            {NAV_ITEMS.map(({ label, href }) => (
              <li
                key={href}
                ref={href === NAV_HREFS.journeys ? journeysItemRef : undefined}
                className={href === NAV_HREFS.journeys ? "relative" : undefined}
              >
                {href === NAV_HREFS.journeys ? (
                  <button
                    type="button"
                    onClick={() => setJourneysOpen((prev) => !prev)}
                    onKeyDown={(e) => {
                      if (e.key === "ArrowDown" || e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        setJourneysOpen(true);
                      }
                    }}
                    aria-haspopup="menu"
                    aria-expanded={journeysOpen}
                    aria-controls="journeys-desktop-menu"
                    className={[
                      "inline-flex items-center gap-2 whitespace-nowrap border-b pb-[3px] text-[12px] leading-none font-normal tracking-[0.12em] uppercase transition-all motion-premium-fast",
                      journeysOpen || journeysActive
                        ? "text-stone-900 border-stone-300"
                        : "text-stone-600 border-transparent hover:text-stone-900 hover:border-stone-300/70",
                    ].join(" ")}
                  >
                    <span>{label}</span>
                    <span
                      className={[
                        "text-[9px] leading-none transition-transform motion-premium-fast",
                        journeysOpen ? "translate-y-[1px] rotate-180" : "translate-y-0 rotate-0",
                      ].join(" ")}
                      aria-hidden="true"
                    >
                      v
                    </span>
                  </button>
                ) : (
                  <Link
                    href={href}
                    className={[
                      "whitespace-nowrap border-b pb-[3px] text-[12px] leading-none font-normal tracking-[0.12em] uppercase transition-all motion-premium-fast",
                      isNavItemActive(href)
                        ? "text-stone-900 border-stone-300"
                        : "text-stone-600 border-transparent hover:text-stone-900 hover:border-stone-300/70",
                    ].join(" ")}
                  >
                    {label}
                  </Link>
                )}

                {href === NAV_HREFS.journeys && (
                  <div
                    id="journeys-desktop-menu"
                    role="menu"
                    className={[
                      "absolute left-1/2 top-full z-[220] w-max min-w-[260px] -translate-x-1/2 pt-1 transition-all duration-[260ms] ease-out",
                      journeysOpen
                        ? "pointer-events-auto translate-y-0 opacity-100"
                        : "pointer-events-none -translate-y-[4px] opacity-0",
                    ].join(" ")}
                  >
                    <div className="border border-stone-200/95 bg-[rgba(253,252,250,0.96)] backdrop-blur-[8px] shadow-[0_26px_60px_rgba(20,16,10,0.12)]">
                      <div className="border-b border-stone-200 px-4 py-3.5">
                        <Link
                          href={NAV_HREFS.journeys}
                          onClick={() => setJourneysOpen(false)}
                          className="text-2xs tracking-[0.16em] uppercase text-stone-500 hover:text-stone-900 transition-colors duration-[200ms]"
                        >
                          View All Journeys
                        </Link>
                      </div>
                      <div className="flex flex-col p-2.5">
                        {JOURNEY_MENU_ITEMS.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            onClick={() => setJourneysOpen(false)}
                            role="menuitem"
                            className="px-3.5 py-[12px] font-serif text-[1.03rem] font-light leading-none text-stone-800 transition-colors duration-[220ms] hover:bg-stone-900 hover:text-white focus:bg-stone-900 focus:text-white"
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
          className="hidden md:inline-flex items-center justify-self-end text-[11px] leading-none font-normal tracking-[0.14em] uppercase text-white bg-forest hover:bg-forest-light px-6 py-[13px] transition-all duration shadow-[0_10px_24px_rgba(40,78,53,0.24)] hover:shadow-[0_14px_30px_rgba(40,78,53,0.30)]"
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

