"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";

type SubmitState = "idle" | "submitting" | "success" | "error";

export function JournalNewsletter({ inputId }: { inputId: string }) {
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [consent, setConsent] = useState(false);
  const [submitState, setSubmitState] = useState<SubmitState>("idle");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitState("submitting");

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          source: "journal",
          website,
          consent,
        }),
      });

      if (!response.ok) {
        throw new Error("Newsletter submission failed.");
      }

      setSubmitState("success");
      setEmail("");
      setWebsite("");
      setConsent(false);
    } catch {
      setSubmitState("error");
    }
  }

  return (
    <section
      className="border-t border-stone-200 px-[var(--px)] py-[clamp(56px,7vw,88px)]"
      aria-label="Newsletter"
    >
      <div className="container-site">
        <div className="grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-8 items-center">
          <div>
            <p className="label-tag mb-3">The Quarterly Journal</p>
            <p className="font-serif font-light italic text-display-sm text-stone-700 leading-[1.45] tracking-[-0.01em]">
              Receive the next issue when it publishes.
            </p>
            {submitState === "success" && (
              <p className="mt-3 text-sm font-light text-stone-500">Subscribed successfully.</p>
            )}
            {submitState === "error" && (
              <p className="mt-3 text-sm font-light text-stone-500">Something went wrong. Please try again.</p>
            )}
          </div>
          <form
            className="min-w-0 sm:min-w-[380px]"
            aria-label="Newsletter subscription"
            onSubmit={onSubmit}
          >
            <div className="flex border border-stone-200">
              <label htmlFor={inputId} className="sr-only">
                Email address for newsletter
              </label>
              <input
                id={inputId}
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="For private correspondence"
                required
                autoComplete="email"
                className="flex-1 min-w-0 bg-transparent border-none outline-none px-[18px] py-[13px] font-serif italic text-base font-light text-stone-900 placeholder:text-stone-300 focus:placeholder:text-stone-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-forest focus-visible:ring-inset"
              />
              <input
                type="text"
                name="website"
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
                tabIndex={-1}
                autoComplete="off"
                className="hidden"
                aria-hidden="true"
              />
              <button
                type="submit"
                disabled={submitState === "submitting"}
                className="bg-stone-900 hover:bg-stone-800 text-white px-5 py-[13px] text-2xs tracking-wide uppercase transition-colors duration whitespace-nowrap shrink-0 disabled:opacity-60"
              >
                {submitState === "submitting" ? "Sending" : "Subscribe"}
              </button>
            </div>

            <label
              htmlFor={`${inputId}-consent`}
              className="mt-4 inline-flex items-start gap-3 cursor-pointer"
            >
              <input
                id={`${inputId}-consent`}
                type="checkbox"
                checked={consent}
                onChange={(e) => setConsent(e.target.checked)}
                required
                className="mt-[2px] h-4 w-4 rounded-none border border-stone-300 text-forest focus:ring-forest"
              />
              <span className="text-xs font-light text-stone-500 leading-relaxed">
                I would like to receive news, updates, and travel inspiration
                from Mason &amp; Wild by email. I understand that I can
                unsubscribe at any time.
              </span>
            </label>

            <p className="mt-3 text-xs font-light text-stone-400 leading-relaxed">
              By submitting this form, you agree that Mason &amp; Wild may
              process your personal information to respond to your enquiry and
              manage related communications in accordance with our{" "}
              <Link
                href="/privacy"
                className="text-stone-500 border-b border-stone-300 hover:text-stone-700 hover:border-stone-500 pb-px transition-colors duration"
              >
                Privacy Policy
              </Link>
              .
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

