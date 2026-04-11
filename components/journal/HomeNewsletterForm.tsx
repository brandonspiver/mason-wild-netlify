"use client";

import { FormEvent, useState } from "react";

type SubmitState = "idle" | "submitting" | "success" | "error";

export function HomeNewsletterForm({ inputId }: { inputId: string }) {
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
          source: "homepage",
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
    <>
      <form
        className="flex border border-white/12"
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
          className="flex-1 bg-transparent border-none outline-none px-[18px] py-[15px] font-serif italic text-base font-light text-white placeholder:text-white/26 ring-1 ring-inset ring-white/20 transition-[box-shadow] duration focus-visible:outline-none focus-visible:ring-white/40"
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
          className="bg-forest hover:bg-forest-light text-white px-6 py-[15px] text-2xs tracking-wide uppercase transition-colors duration whitespace-nowrap disabled:opacity-60"
        >
          {submitState === "submitting" ? "Sending" : "Subscribe"}
        </button>
      </form>

      {submitState === "success" && (
        <p className="mt-[14px] text-2xs tracking-[0.1em] text-white/30">
          Subscribed successfully.
        </p>
      )}

      {submitState === "error" && (
        <p className="mt-[14px] text-2xs tracking-[0.1em] text-white/30">
          Something went wrong. Please try again.
        </p>
      )}
    </>
  );
}
