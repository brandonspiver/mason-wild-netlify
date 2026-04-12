"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";

type SubmitState = "idle" | "submitting" | "success" | "error";

export function HomeNewsletterForm({ inputId }: { inputId: string }) {
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
          source: "homepage",
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
    <>
      <form
        className="max-w-[700px]"
        aria-label="Newsletter subscription"
        onSubmit={onSubmit}
      >
        <div className="border border-white/14 bg-white/[0.02]">
          <label htmlFor={inputId} className="sr-only">
            Email address for newsletter
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-[minmax(0,1fr)_auto]">
            <input
              id={inputId}
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="For private correspondence"
              required
              autoComplete="email"
              className="w-full bg-transparent border-none outline-none px-[18px] py-[15px] font-serif italic text-base font-light text-white placeholder:text-white/30 ring-1 ring-inset ring-white/16 transition-[box-shadow] duration focus-visible:outline-none focus-visible:ring-white/45"
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
              className="bg-forest hover:bg-forest-light text-white px-6 py-[15px] text-2xs tracking-wide uppercase transition-colors duration whitespace-nowrap disabled:opacity-60 border-t sm:border-t-0 sm:border-l border-white/12"
            >
              {submitState === "submitting" ? "Sending" : "Subscribe"}
            </button>
          </div>
        </div>

        <label
          htmlFor={`${inputId}-consent`}
          className="mt-5 flex w-full items-start gap-4 cursor-pointer rounded-sm border border-white/10 bg-white/[0.03] px-4 py-3 text-left"
        >
          <input
            id={`${inputId}-consent`}
            type="checkbox"
            checked={consent}
            onChange={(e) => setConsent(e.target.checked)}
            required
            className="mt-[2px] h-4 w-4 shrink-0 rounded-none border border-white/40 bg-transparent text-forest focus:ring-forest/80"
          />
          <span className="flex-1 text-[13px] font-light text-white/72 leading-[1.7]">
            I would like to receive news, updates, and travel inspiration from
            Mason &amp; Wild by email. I understand that I can unsubscribe at
            any time.
          </span>
        </label>

        <p className="mt-3 max-w-[660px] text-left text-[11px] font-light text-white/54 leading-relaxed">
          By submitting this form, you agree that Mason &amp; Wild may process
          your personal information to respond to your enquiry and manage
          related communications in accordance with our{" "}
          <Link
            href="/privacy"
            className="text-white/75 border-b border-white/35 hover:text-white hover:border-white/60 pb-px transition-colors duration"
          >
            Privacy Policy
          </Link>
          .
        </p>
      </form>

      {submitState === "success" && (
        <p className="mt-[14px] text-2xs tracking-[0.1em] text-white/40">
          Subscribed successfully.
        </p>
      )}

      {submitState === "error" && (
        <p className="mt-[14px] text-2xs tracking-[0.1em] text-white/40">
          Something went wrong. Please try again.
        </p>
      )}
    </>
  );
}
