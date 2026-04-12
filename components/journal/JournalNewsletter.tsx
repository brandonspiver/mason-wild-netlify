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
      className="border-t border-stone-200 px-[var(--px)] py-[clamp(64px,8vw,104px)]"
      aria-label="Newsletter"
    >
      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(220px,300px)_minmax(0,1fr)] gap-[clamp(28px,5vw,72px)] items-start">
          <div className="max-w-[260px]">
            <p className="label-tag mb-4">The Quarterly Journal</p>
            <p className="font-serif font-light italic text-[clamp(2rem,3.2vw,3.35rem)] text-stone-800 leading-[1.18] tracking-[-0.02em]">
              Receive the next issue when it publishes.
            </p>
            {submitState === "success" && (
              <p className="mt-4 text-sm font-light text-stone-500 leading-relaxed">
                Subscribed successfully.
              </p>
            )}
            {submitState === "error" && (
              <p className="mt-4 text-sm font-light text-stone-500 leading-relaxed">
                Something went wrong. Please try again.
              </p>
            )}
          </div>
          <form
            className="w-full max-w-[980px]"
            aria-label="Newsletter subscription"
            onSubmit={onSubmit}
          >
            <div className="grid grid-cols-1 sm:grid-cols-[minmax(0,1fr)_auto] border border-stone-200 bg-page">
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
                className="w-full min-w-0 bg-transparent border-none outline-none px-[18px] md:px-[20px] py-[16px] font-serif italic text-[1.02rem] font-light text-stone-900 placeholder:text-stone-300 focus:placeholder:text-stone-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-forest focus-visible:ring-inset"
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
                className="bg-stone-900 hover:bg-stone-800 text-white px-6 md:px-8 py-[16px] text-2xs tracking-[0.16em] uppercase transition-colors duration whitespace-nowrap shrink-0 disabled:opacity-60 border-t sm:border-t-0 sm:border-l border-stone-200"
              >
                {submitState === "submitting" ? "Sending" : "Subscribe"}
              </button>
            </div>

            <label
              htmlFor={`${inputId}-consent`}
              className="mt-5 inline-flex max-w-[880px] items-start gap-3.5 cursor-pointer"
            >
              <input
                id={`${inputId}-consent`}
                type="checkbox"
                checked={consent}
                onChange={(e) => setConsent(e.target.checked)}
                required
                className="mt-[2px] h-4 w-4 rounded-none border border-stone-300 text-forest focus:ring-forest"
              />
              <span className="text-[13px] md:text-[13.5px] font-light text-stone-500 leading-[1.8]">
                I would like to receive news, updates, and travel inspiration
                from Mason &amp; Wild by email. I understand that I can
                unsubscribe at any time.
              </span>
            </label>

            <p className="mt-4 max-w-[880px] text-[12px] md:text-[12.5px] font-light text-stone-400 leading-[1.85]">
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

