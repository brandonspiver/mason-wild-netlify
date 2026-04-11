"use client";

import { FormEvent, useState } from "react";

type SubmitState = "idle" | "submitting" | "success" | "error";

export function JournalNewsletter({ inputId }: { inputId: string }) {
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
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
        }),
      });

      if (!response.ok) {
        throw new Error("Newsletter submission failed.");
      }

      setSubmitState("success");
      setEmail("");
      setWebsite("");
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
            className="flex border border-stone-200 min-w-0 sm:min-w-[380px]"
            aria-label="Newsletter subscription"
            onSubmit={onSubmit}
          >
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
          </form>
        </div>
      </div>
    </section>
  );
}
