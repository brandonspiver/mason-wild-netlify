"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  CTA,
  NAV_HREFS,
  NAV_LABELS,
  PRIMARY_POSITIONING_LINE,
} from "@/lib/constants";

const JOURNEY_MENU_ITEMS = [
  { label: "The Intimate", href: `${NAV_HREFS.journeys}/the-intimate` },
  { label: "The Untamed", href: `${NAV_HREFS.journeys}/the-untamed` },
  { label: "The Romantic", href: `${NAV_HREFS.journeys}/the-romantic` },
  { label: "The Classic", href: `${NAV_HREFS.journeys}/the-classic` },
  { label: "The Adventure", href: `${NAV_HREFS.journeys}/the-adventure` },
  { label: "The Private Circuit", href: `${NAV_HREFS.journeys}/the-private-circuit` },
  { label: "The Social Shift", href: NAV_HREFS.social },
] as const;

const MENU_GROUPS = [
  {
    eyebrow: "The House",
    title: "Explore",
    blurb: "The main chapters of Mason & Wild, shaped as a quieter front door rather than a utility nav.",
    links: [
      { label: NAV_LABELS.home, href: NAV_HREFS.home },
      { label: "The Experience", href: NAV_HREFS.experience },
      { label: "All Journeys", href: NAV_HREFS.journeys },
      { label: "The Social Shift", href: NAV_HREFS.social },
    ],
  },
  {
    eyebrow: "The Collection",
    title: "Journey Archetypes",
    blurb: "Seven privately designed routes, each with a different emotional centre and pace.",
    links: JOURNEY_MENU_ITEMS,
  },
  {
    eyebrow: "The Point of View",
    title: "Journal & Studio",
    blurb: "Editorial thinking, the point of view behind the collection, and the way we work.",
    links: [
      { label: NAV_LABELS.journal, href: NAV_HREFS.journal },
      { label: "About Mason & Wild", href: NAV_HREFS.about },
      { label: CTA.inquirePrivately, href: NAV_HREFS.inquire },
    ],
  },
  {
    eyebrow: "The Essentials",
    title: "Information",
    blurb: "Quiet essentials for planning, contact, and the legal framework behind the site.",
    links: [
      { label: "Privacy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
      { label: "PAIA", href: "/paia" },
    ],
  },
] as const;

const FOOTER_LINKS = [
  { label: "Journal", href: NAV_HREFS.journal },
  { label: "About", href: NAV_HREFS.about },
  { label: "Enquire", href: NAV_HREFS.inquire },
] as const;

export function NavBar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isNavItemActive = (href: string) => {
    if (href === NAV_HREFS.home) return pathname === NAV_HREFS.home;
    if (href === NAV_HREFS.journeys) {
      return pathname === NAV_HREFS.journeys || pathname.startsWith(`${NAV_HREFS.journeys}/`) || pathname === NAV_HREFS.social;
    }

    return pathname === href || pathname.startsWith(`${href}/`);
  };

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={[
          "fixed inset-x-0 top-0 z-[240] border-b border-stone-200/85",
          "bg-[rgba(253,252,250,0.9)] backdrop-blur-xl",
          "shadow-[0_1px_0_rgba(22,19,16,0.02)]",
        ].join(" ")}
        role="banner"
      >
        <div className="grid h-[74px] grid-cols-[auto_1fr_auto] items-center gap-4 px-[var(--px)] md:h-[82px] md:gap-8">
          <div className="flex min-w-0 items-center gap-3 md:gap-5">
            <button
              type="button"
              onClick={() => setOpen((prev) => !prev)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="site-menu-panel"
              className={[
                "relative inline-flex h-10 w-10 shrink-0 items-center justify-center border transition-all duration-[260ms]",
                open
                  ? "border-forest/10 bg-forest-light text-white shadow-[0_14px_30px_rgba(40,78,53,0.3)]"
                  : "border-forest/10 bg-forest text-white shadow-[0_10px_24px_rgba(40,78,53,0.24)] hover:bg-forest-light hover:shadow-[0_14px_30px_rgba(40,78,53,0.3)]",
              ].join(" ")}
            >
              <span
                aria-hidden="true"
                className={[
                  "absolute h-px w-[18px] bg-current transition-all duration-[260ms]",
                  open ? "translate-y-0 rotate-45" : "-translate-y-[6px]",
                ].join(" ")}
              />
              <span
                aria-hidden="true"
                className={[
                  "absolute h-px w-[18px] bg-current transition-all duration-[220ms]",
                  open ? "scale-x-0 opacity-0" : "scale-x-100 opacity-100",
                ].join(" ")}
              />
              <span
                aria-hidden="true"
                className={[
                  "absolute h-px w-[18px] bg-current transition-all duration-[260ms]",
                  open ? "translate-y-0 -rotate-45" : "translate-y-[6px]",
                ].join(" ")}
              />
            </button>

            <Link
              href={NAV_HREFS.home}
              className="inline-flex min-w-0 items-center"
              aria-label="Mason & Wild home"
              onClick={() => setOpen(false)}
            >
              <Image
                src="/branding/mason-wild-header-wordmark-tight.png"
                alt="Mason & Wild"
                width={1075}
                height={193}
                priority
                className="block h-[16px] w-auto sm:h-[18px] md:h-[28px] lg:h-[30px]"
              />
            </Link>
          </div>

          <div className="hidden justify-self-center lg:block">
            <p className="text-[0.6rem] font-normal uppercase tracking-[0.24em] text-stone-300">
              LGBTQ+ Luxury Africa
            </p>
          </div>

          <Link
            href={NAV_HREFS.inquire}
            className="inline-flex items-center justify-self-end whitespace-nowrap border border-forest/10 bg-forest px-3 py-[10px] text-[0.58rem] font-normal uppercase tracking-[0.18em] text-white transition-all duration-[260ms] shadow-[0_10px_24px_rgba(40,78,53,0.24)] hover:bg-forest-light hover:shadow-[0_14px_30px_rgba(40,78,53,0.3)] sm:px-4 md:px-6 md:py-[13px] md:text-[0.68rem]"
            onClick={() => setOpen(false)}
          >
            {CTA.inquirePrivately}
          </Link>
        </div>
      </header>

      <div
        id="site-menu-panel"
        className={[
          "fixed inset-x-0 bottom-0 top-[74px] z-[230] overflow-y-auto border-t border-stone-200/85",
          "bg-[rgba(253,252,250,0.98)] backdrop-blur-[18px]",
          "transition-all duration-[460ms] ease-[var(--ease-luxury)] md:top-[82px]",
          "bg-[radial-gradient(circle_at_top,rgba(75,128,89,0.07),transparent_32%),linear-gradient(180deg,rgba(248,245,240,0.97)_0%,rgba(253,252,250,0.99)_48%,rgba(242,238,232,0.92)_100%)]",
          open ? "pointer-events-auto translate-y-0 opacity-100" : "pointer-events-none -translate-y-4 opacity-0",
        ].join(" ")}
      >
        <div className="mx-auto flex min-h-full max-w-[1520px] flex-col px-[var(--px)] pb-10 pt-0 md:pb-12">
          <div className="relative left-1/2 w-screen -translate-x-1/2 overflow-hidden border-b border-stone-200/85">
            <div className="absolute inset-0" aria-hidden="true">
              <Image
                src="/home/romantic-boat.png"
                alt=""
                fill
                sizes="100vw"
                className="object-cover opacity-10"
                style={{ objectPosition: "center 22%" }}
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(253,252,250,0.34)_0%,rgba(253,252,250,0.12)_50%,rgba(253,252,250,0.3)_100%)]" />
            </div>

            <div className="relative z-[1] mx-auto flex min-h-[300px] max-w-[520px] flex-col items-center justify-center gap-5 py-10 text-center md:min-h-[340px] md:gap-6 md:py-12">
              <Image
                src="/branding/mason-wild-monogram.png"
                alt="Mason & Wild monogram"
                width={240}
                height={240}
                className="h-[78px] w-auto opacity-90 md:h-[94px]"
              />

              <p className="text-[0.72rem] font-normal uppercase tracking-[0.28em] text-stone-900 md:text-[0.8rem]">
                LGBTQ+ Luxury Africa
              </p>
            </div>
          </div>

          <nav aria-label="Primary navigation" className="flex-1 py-8 md:py-10">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-4 xl:gap-12">
              {MENU_GROUPS.map((group) => (
                <section
                  key={group.title}
                  className="flex flex-col border-b border-stone-200/85 pb-8 last:border-b-0 md:last:border-b md:pb-0 xl:border-b-0 xl:last:border-b-0"
                >
                  <div className="min-h-[148px] md:min-h-[164px]">
                    <p className="text-[0.62rem] font-normal uppercase tracking-[0.22em] text-stone-300">
                      {group.eyebrow}
                    </p>
                    <h3 className="mt-3 font-serif text-[clamp(1.62rem,2vw,2.16rem)] font-light leading-none tracking-[-0.018em] text-stone-900">
                      {group.title}
                    </h3>
                    <p className="mt-4 max-w-[18rem] text-[0.88rem] font-light leading-[1.8] text-stone-400">
                      {group.blurb}
                    </p>
                  </div>

                  <ul className="mt-7 space-y-3.5" role="list">
                    {group.links.map(({ label, href }) => {
                      const active = isNavItemActive(href);

                      return (
                        <li key={href}>
                          <Link
                            href={href}
                            onClick={() => setOpen(false)}
                            className={[
                              "inline-flex items-center border-b pb-[4px] font-serif text-[1rem] font-light leading-none transition-all duration-[220ms] md:text-[1.1rem]",
                              active
                                ? "border-forest text-forest"
                                : "border-transparent text-stone-800 hover:border-stone-300 hover:text-forest",
                            ].join(" ")}
                          >
                            <span>{label}</span>
                          </Link>
                        </li>
                      );
                    })}
                  </ul>

                  {group.title === "Information" && (
                    <div className="mt-auto pt-10">
                      <Link
                        href={NAV_HREFS.inquire}
                        onClick={() => setOpen(false)}
                        className="inline-flex items-center whitespace-nowrap border border-forest/10 bg-forest px-5 py-[11px] text-[0.58rem] font-normal uppercase tracking-[0.18em] text-white transition-all duration-[260ms] shadow-[0_10px_24px_rgba(40,78,53,0.22)] hover:bg-forest-light hover:shadow-[0_14px_30px_rgba(40,78,53,0.28)] md:px-6 md:py-[13px] md:text-[0.64rem]"
                      >
                        {CTA.inquirePrivately}
                      </Link>
                    </div>
                  )}
                </section>
              ))}
            </div>
          </nav>

          <div className="mt-auto pt-6">
            <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
              <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
                {FOOTER_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={[
                      "border-b pb-[2px] text-[0.74rem] font-normal uppercase tracking-[0.18em] transition-colors duration-[220ms]",
                      isNavItemActive(link.href)
                        ? "border-forest text-forest"
                        : "border-stone-200 text-stone-400 hover:border-stone-400 hover:text-stone-700",
                    ].join(" ")}
                  >
                    {link.label}
                  </Link>
                ))}

                <a
                  href="mailto:zannon@masonandwild.com"
                  className="border-b border-stone-200 pb-[2px] text-[0.78rem] font-light tracking-[0.04em] text-stone-400 transition-colors duration-[220ms] hover:border-stone-400 hover:text-stone-700"
                >
                  zannon@masonandwild.com
                </a>
              </div>

              <p className="max-w-[40rem] text-sm font-light leading-relaxed text-stone-400 md:text-right">
                {PRIMARY_POSITIONING_LINE}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
