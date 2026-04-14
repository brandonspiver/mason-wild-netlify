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
  const journeysCloseTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const journeysActive =
    pathname === NAV_HREFS.journeys ||
    pathname.startsWith(`${NAV_HREFS.journeys}/`) ||
    pathname === NAV_HREFS.social;

  const clearJourneysCloseTimer = () => {
    if (journeysCloseTimer.current) {
      clearTimeout(journeysCloseTimer.current);
      journeysCloseTimer.current = null;
    }
  };

  const openJourneysMenu = () => {
    clearJourneysCloseTimer();
    setJourneysOpen(true);
  };

  const closeJourneysMenuSoon = () => {
    clearJourneysCloseTimer();
    journeysCloseTimer.current = setTimeout(() => {
      setJourneysOpen(false);
      journeysCloseTimer.current = null;
    }, 90);
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

  useEffect(() => {
    return () => clearJourneysCloseTimer();
  }, []);

  return (
    <>
      <header
        className={[
          "fixed top-0 left-0 right-0 z-[200] h-[72px] flex items-center justify-between md:grid md:grid-cols-[1fr_auto_1fr] md:items-center",
          "px-[var(--px)] border-b transition-all duration-slow",
          "bg-white/[0.95] border-stone-200 backdrop-blur-md",
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
            className="block h-[38px] w-auto -translate-y-[1px] lg:h-[42px]"
          />
        </Link>

        {/* Desktop links */}
        <nav aria-label="Primary navigation" className="justify-self-center">
          <ul className="hidden md:flex items-center gap-10" role="list">
            {NAV_ITEMS.map(({ label, href }) => (
              <li
                key={href}
                ref={href === NAV_HREFS.journeys ? journeysItemRef : undefined}
                className={href === NAV_HREFS.journeys ? "relative" : undefined}
                onMouseEnter={href === NAV_HREFS.journeys ? openJourneysMenu : undefined}
                onMouseLeave={href === NAV_HREFS.journeys ? closeJourneysMenuSoon : undefined}
              >
                {href === NAV_HREFS.journeys ? (
                  <button
                    type="button"
                    onClick={() => {
                      clearJourneysCloseTimer();
                      setJourneysOpen((prev) => !prev);
                    }}
                    onFocus={openJourneysMenu}
                    onBlur={closeJourneysMenuSoon}
                    onKeyDown={(e) => {
                      if (e.key === "ArrowDown" || e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        openJourneysMenu();
                      }
                    }}
                    aria-expanded={journeysOpen}
                    aria-controls="journeys-desktop-menu"
                    className={[
                      "inline-flex items-center gap-2 text-2xs leading-none font-normal tracking-wide uppercase transition-colors duration-[220ms]",
                      journeysOpen || journeysActive
                        ? "text-stone-900"
                        : "text-stone-500 hover:text-stone-900",
                    ].join(" ")}
                  >
                    <span>{label}</span>
                    <span
                      className={[
                        "text-[9px] leading-none transition-transform duration-[220ms]",
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
                      "text-2xs leading-none font-normal tracking-wide uppercase transition-colors duration-[200ms]",
                      "text-stone-500 hover:text-stone-900",
                    ].join(" ")}
                  >
                    {label}
                  </Link>
                )}

                {href === NAV_HREFS.journeys && (
                  <div
                    id="journeys-desktop-menu"
                    className={[
                      "absolute left-1/2 top-full z-[220] w-max min-w-[240px] -translate-x-1/2 pt-3 transition-all duration-[240ms] ease-out",
                      journeysOpen
                        ? "pointer-events-auto translate-y-0 opacity-100"
                        : "pointer-events-none -translate-y-[6px] opacity-0",
                    ].join(" ")}
                    onMouseEnter={openJourneysMenu}
                    onMouseLeave={closeJourneysMenuSoon}
                  >
                    <div className="border border-stone-200/90 bg-white/95 backdrop-blur-[2px] shadow-[0_20px_44px_rgba(20,16,10,0.09)]">
                      <div className="border-b border-stone-200 px-4 py-3">
                        <Link
                          href={NAV_HREFS.journeys}
                          onClick={() => setJourneysOpen(false)}
                          className="text-2xs tracking-[0.14em] uppercase text-stone-500 hover:text-stone-900 transition-colors duration-[200ms]"
                        >
                          View All Journeys
                        </Link>
                      </div>
                      <div className="flex flex-col p-2">
                        {JOURNEY_MENU_ITEMS.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            onClick={() => setJourneysOpen(false)}
                            onBlur={closeJourneysMenuSoon}
                            className="px-3.5 py-[12px] font-serif text-[1.03rem] font-light leading-none text-stone-800 transition-colors duration-[220ms] hover:bg-forest hover:text-white focus:bg-forest focus:text-white"
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
          className="hidden md:inline-flex items-center justify-self-end text-2xs leading-none font-normal tracking-wide uppercase text-white bg-forest hover:bg-forest-light px-5 py-[10px] transition-colors duration"
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
