import Image from "next/image";
import Link from "next/link";
import {
  FOOTER_NAV,
  BRAND_DESCRIPTOR,
  BUSINESS_LEGAL_LINE,
  FOUNDER,
} from "@/lib/constants";
import { CookieSettingsButton } from "@/components/layout/CookieSettingsButton";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="bg-stone-900 border-t border-white/[0.06] px-[var(--px)] py-10"
      role="contentinfo"
    >
      <div className="max-w-site mx-auto flex flex-col gap-7">
        <div className="flex items-center justify-between gap-6 flex-wrap">
          <Link href="/" aria-label="Mason & Wild home" className="inline-flex items-center">
            <Image
              src="/branding/mason-wild-footer-wordmark.png"
              alt="Mason & Wild"
              width={1087}
              height={193}
              className="h-[20px] w-auto opacity-95 md:h-[22px]"
            />
          </Link>

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
        </div>

        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div className="flex flex-col gap-2">
            <p className="text-2xs tracking-[0.08em] text-white/[0.16]">
              © {year} Mason &amp; Wild. <span className="text-white/[0.12]">{BRAND_DESCRIPTOR}.</span>
            </p>
            <p className="text-2xs text-white/[0.2] leading-relaxed max-w-[900px]">
              {BUSINESS_LEGAL_LINE}
            </p>
          </div>

          <a
            href={`mailto:${FOUNDER.email}`}
            className="text-2xs tracking-[0.08em] text-white/[0.28] hover:text-white/55 transition-colors duration"
          >
            {FOUNDER.email}
          </a>
        </div>
      </div>
    </footer>
  );
}
