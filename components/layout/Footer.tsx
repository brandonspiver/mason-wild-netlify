import Link from "next/link";
import { FOOTER_NAV, BRAND_DESCRIPTOR } from "@/lib/constants";
import { CookieSettingsButton } from "@/components/layout/CookieSettingsButton";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="bg-stone-900 border-t border-white/[0.06] px-[var(--px)] py-10 flex items-center justify-between gap-6 flex-wrap"
      role="contentinfo"
    >
      <p className="font-serif text-base font-light text-white/50 tracking-[0.04em]">
        Mason <em>&amp;</em> Wild
      </p>

      <nav aria-label="Footer navigation">
        <ul className="flex gap-7 flex-wrap" role="list">
          {FOOTER_NAV.map(({ label, href }) => (
            <li key={href}>
              <Link
                href={href}
                className="text-2xs tracking-wide uppercase text-white/[0.28] hover:text-white/55 transition-colors duration"
              >
                {label}
              </Link>
            </li>
          ))}
          <li>
            <CookieSettingsButton />
          </li>
        </ul>
      </nav>

      <p className="text-2xs tracking-[0.08em] text-white/[0.16]">
        (c) {year} Mason &amp; Wild.{" "}
        <span className="text-white/[0.12]">{BRAND_DESCRIPTOR}.</span>
      </p>
    </footer>
  );
}


