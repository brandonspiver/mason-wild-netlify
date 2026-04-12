"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type ConsentChoice = "accepted" | "essential";

const CONSENT_STORAGE_KEY = "mw_cookie_consent_v1";
const CONSENT_COOKIE_NAME = "mw_cookie_consent";
const CONSENT_MAX_AGE = 60 * 60 * 24 * 365; // 1 year

function readCookie(name: string): string | null {
  if (typeof document === "undefined") return null;
  const parts = document.cookie.split(";").map((c) => c.trim());
  const match = parts.find((c) => c.startsWith(`${name}=`));
  return match ? decodeURIComponent(match.split("=")[1] ?? "") : null;
}

function persistConsent(choice: ConsentChoice) {
  if (typeof document !== "undefined") {
    document.cookie = `${CONSENT_COOKIE_NAME}=${encodeURIComponent(choice)}; path=/; max-age=${CONSENT_MAX_AGE}; samesite=lax`;
  }
  if (typeof window !== "undefined") {
    window.localStorage.setItem(CONSENT_STORAGE_KEY, choice);
    window.dispatchEvent(
      new CustomEvent("mw-cookie-consent", { detail: { choice } })
    );
  }
}

export function CookieBanner() {
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [analyticsEnabled, setAnalyticsEnabled] = useState(true);

  useEffect(() => {
    setMounted(true);
    const stored = window.localStorage.getItem(CONSENT_STORAGE_KEY);
    const fromCookie = readCookie(CONSENT_COOKIE_NAME);

    const choice = (stored ?? fromCookie) as ConsentChoice | null;
    if (choice === "essential") {
      setAnalyticsEnabled(false);
    }

    if (!stored && !fromCookie) setVisible(true);
  }, []);

  useEffect(() => {
    function handleOpen() {
      setVisible(true);
      setShowPreferences(true);
    }

    window.addEventListener("mw-open-cookie-banner", handleOpen);
    return () => window.removeEventListener("mw-open-cookie-banner", handleOpen);
  }, []);

  function handleChoice(choice: ConsentChoice) {
    persistConsent(choice);
    setVisible(false);
    setShowPreferences(false);
  }

  function handleSavePreferences() {
    handleChoice(analyticsEnabled ? "accepted" : "essential");
  }

  if (!mounted || !visible) return null;

  return (
    <aside
      className="fixed inset-x-0 bottom-0 z-[260] px-[var(--px)] pb-4 sm:pb-6"
      aria-live="polite"
      aria-label="Cookie preferences"
    >
      <div className="mx-auto w-full max-w-[1120px] border border-stone-200/90 bg-[rgba(252,249,243,0.96)] backdrop-blur-md shadow-[0_22px_60px_rgba(16,14,12,0.14)]">
        <div className="px-5 py-5 sm:px-7 sm:py-6 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-[760px]">
            <p className="label-tag mb-3">We use cookies</p>
            <p className="font-serif text-[1.24rem] sm:text-[1.32rem] leading-[1.2] text-stone-900 mb-2">
              Cookies, handled discreetly.
            </p>
            <p className="text-[13px] sm:text-sm font-light leading-relaxed text-stone-600">
              We use cookies and similar technologies to improve site
              functionality, understand traffic, and support your experience.
              By clicking &quot;Accept&quot;, you agree to the use of
              non-essential cookies. See our{" "}
              <Link
                href="/privacy"
                className="border-b border-stone-300 pb-px text-stone-700 hover:border-stone-700 transition-colors duration"
              >
                Privacy Policy
              </Link>
              .
            </p>
          </div>

          <div className="grid grid-cols-1 sm:flex sm:flex-wrap items-stretch sm:items-center gap-3 sm:gap-5">
            <button
              type="button"
              onClick={() => handleChoice("accepted")}
              className="inline-flex justify-center items-center text-2xs font-normal tracking-wide uppercase text-white bg-forest hover:bg-forest-light px-5 py-[11px] transition-colors duration"
            >
              Accept
            </button>
            <button
              type="button"
              onClick={() => setShowPreferences((prev) => !prev)}
              className="inline-flex justify-center items-center text-2xs font-normal tracking-wide uppercase text-stone-500 border border-stone-300/90 hover:text-stone-900 hover:border-stone-700 px-4 py-[10px] transition-colors duration sm:border-0 sm:border-b sm:px-0 sm:py-0 sm:pb-[2px]"
            >
              Manage Preferences
            </button>
            <button
              type="button"
              onClick={() => handleChoice("essential")}
              className="inline-flex justify-center items-center text-2xs font-normal tracking-wide uppercase text-stone-500 border border-stone-300/90 hover:text-stone-900 hover:border-stone-700 px-4 py-[10px] transition-colors duration sm:border-0 sm:border-b sm:px-0 sm:py-0 sm:pb-[2px]"
            >
              Reject Non-Essential
            </button>
          </div>
        </div>

        {showPreferences && (
          <div className="px-5 pb-5 sm:px-7 sm:pb-6 border-t border-stone-200/80 bg-page-subtle/35">
            <div className="pt-5 flex flex-col gap-5">
              <label className="inline-flex items-start gap-3">
                <input
                  type="checkbox"
                  checked={analyticsEnabled}
                  onChange={(e) => setAnalyticsEnabled(e.target.checked)}
                  className="mt-[2px] h-4 w-4 rounded-none border border-stone-300 text-forest focus:ring-forest"
                />
                <span className="text-[13px] sm:text-sm font-light leading-relaxed text-stone-600">
                  Optional analytics cookies (helps us understand traffic and
                  improve the site). Essential cookies remain on.
                </span>
              </label>

              <div>
                <button
                  type="button"
                  onClick={handleSavePreferences}
                  className="inline-flex items-center text-2xs font-normal tracking-wide uppercase text-white bg-stone-900 hover:bg-stone-800 px-5 py-[11px] transition-colors duration"
                >
                  Save Preferences
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </aside>
  );
}

