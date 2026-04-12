"use client";

export function CookieSettingsButton() {
  function openCookieSettings() {
    window.dispatchEvent(new CustomEvent("mw-open-cookie-banner"));
  }

  return (
    <button
      type="button"
      onClick={openCookieSettings}
      className="text-2xs tracking-wide uppercase text-white/[0.28] hover:text-white/55 transition-colors duration"
    >
      Cookie Settings
    </button>
  );
}


