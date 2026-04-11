"use client";

import { useState } from "react";
import { INQUIRY_COPY, DURATION_OPTIONS, CTA } from "@/lib/constants";

// ─── Types ────────────────────────────────────────────────────────────────────

type FormState = {
  name:      string;
  email:     string;
  duration:  string;
  narrative: string;
};

type SubmitState = "idle" | "submitting" | "success" | "error";

// ─── Shared input className ───────────────────────────────────────────────────

const inputClass = [
  "w-full bg-transparent border-b border-stone-200",
  "py-3 font-sans text-base font-light text-stone-900",
  "placeholder:text-stone-300 placeholder:font-light",
  "focus:outline-none focus:border-stone-500",
  "transition-colors duration",
].join(" ");

// ─── Component ───────────────────────────────────────────────────────────────

export function InquiryForm() {
  const [form, setForm] = useState<FormState>({
    name:      "",
    email:     "",
    duration:  "",
    narrative: "",
  });

  const [submitState, setSubmitState] = useState<SubmitState>("idle");

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleDuration(value: string) {
    setForm((prev) => ({
      ...prev,
      duration: prev.duration === value ? "" : value,
    }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitState("submitting");
    try {
      // API route to be wired in Phase 8
      // await fetch("/api/inquire", { method: "POST", body: JSON.stringify(form) })
      await new Promise((r) => setTimeout(r, 800));
      setSubmitState("success");
    } catch {
      setSubmitState("error");
    }
  }

  // ── Success state  -  rendered in-place, page structure intact ────────────
  if (submitState === "success") {
    return (
      <div className="flex flex-col gap-6 py-2">
        <p className="label-tag">Enquiry Received</p>
        <p className="font-serif font-light text-display-sm text-stone-900 leading-[1.45] tracking-[-0.01em]">
          Thank you,{" "}
          <em>{form.name.split(" ")[0] || "thank you"}</em>.
        </p>
        <p className="text-base font-light text-stone-500 leading-relaxed max-w-[480px]">
          Your enquiry has been received. A specialist will review it
          personally and respond within 48–72 hours via the address
          you provided.
        </p>
        <p className="text-base font-light text-stone-500 leading-relaxed max-w-[480px]">
          If you have questions in the meantime, write to us directly
          at{" "}
          <a
            href={`mailto:${INQUIRY_COPY.contactLine}`}
            className="text-stone-700 border-b border-stone-300 hover:border-stone-700 pb-px transition-colors duration"
          >
            {INQUIRY_COPY.contactLine}
          </a>
          .
        </p>
      </div>
    );
  }

  // ── Form ────────────────────────────────────────────────────────────────
  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      aria-label="Private journey enquiry"
      className="flex flex-col gap-10"
    >
      {/* Name */}
      <div className="flex flex-col gap-3">
        <label htmlFor="name" className="label-tag">
          {INQUIRY_COPY.fullNameLabel}
        </label>
        <input
          id="name"
          name="name"
          type="text"
          value={form.name}
          onChange={handleChange}
          placeholder={INQUIRY_COPY.fullNamePlaceholder}
          autoComplete="name"
          required
          className={inputClass}
        />
      </div>

      {/* Email */}
      <div className="flex flex-col gap-3">
        <label htmlFor="email" className="label-tag">
          {INQUIRY_COPY.emailLabel}
        </label>
        <input
          id="email"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          placeholder={INQUIRY_COPY.emailPlaceholder}
          autoComplete="email"
          required
          className={inputClass}
        />
      </div>

      {/* Duration  -  segmented toggle */}
      <div className="flex flex-col gap-4">
        <p className="label-tag" id="duration-label">
          {INQUIRY_COPY.durationLabel}
        </p>
        <div
          className="flex gap-px bg-stone-200 w-fit border border-stone-200"
          role="group"
          aria-labelledby="duration-label"
        >
          {DURATION_OPTIONS.map(({ value, label }) => {
            const selected = form.duration === value;
            return (
              <button
                key={value}
                type="button"
                onClick={() => handleDuration(value)}
                aria-pressed={selected}
                className={[
                  "px-5 py-[10px] text-2xs font-normal tracking-wide uppercase",
                  "transition-colors duration",
                  selected
                    ? "bg-stone-900 text-white"
                    : "bg-page text-stone-500 hover:bg-page-subtle hover:text-stone-700",
                ].join(" ")}
              >
                {label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Narrative */}
      <div className="flex flex-col gap-3">
        <label htmlFor="narrative" className="label-tag">
          {INQUIRY_COPY.narrativeLabel}
        </label>
        <textarea
          id="narrative"
          name="narrative"
          value={form.narrative}
          onChange={handleChange}
          placeholder={INQUIRY_COPY.narrativePlaceholder}
          rows={6}
          required
          className={[inputClass, "resize-none"].join(" ")}
        />
      </div>

      {/* Submit */}
      <div className="pt-2 flex flex-col sm:flex-row sm:items-center gap-6">
        <button
          type="submit"
          disabled={submitState === "submitting"}
          className={[
            "inline-flex items-center gap-3 self-start",
            "text-2xs font-normal tracking-wide uppercase",
            "text-white bg-forest hover:bg-forest-light",
            "px-8 py-[14px]",
            "transition-colors duration",
            "disabled:opacity-50 disabled:cursor-not-allowed",
          ].join(" ")}
        >
          {submitState === "submitting" ? "Sending…" : CTA.requestPrivateAccess}
          {submitState !== "submitting" && (
            <span aria-hidden="true">→</span>
          )}
        </button>

        <p className="text-sm font-light text-stone-400 leading-relaxed">
          {CTA.formResponseNote}
        </p>
      </div>

      {/* Error */}
      {submitState === "error" && (
        <p className="text-sm font-light text-stone-500 leading-relaxed border-l-2 border-stone-300 pl-4">
          Something went wrong. Please try again or write to us directly
          at{" "}
          <a
            href={`mailto:${INQUIRY_COPY.contactLine}`}
            className="text-stone-700 border-b border-stone-300 hover:border-stone-700 pb-px transition-colors duration"
          >
            {INQUIRY_COPY.contactLine}
          </a>
          .
        </p>
      )}
    </form>
  );
}
