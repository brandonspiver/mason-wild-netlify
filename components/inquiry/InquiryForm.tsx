"use client";

import Link from "next/link";
import { useState } from "react";
import { INQUIRY_COPY, DURATION_OPTIONS, CTA } from "@/lib/constants";

// â”€â”€â”€ Types â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

type FormState = {
  name:      string;
  email:     string;
  duration:  string;
  narrative: string;
  marketingConsent: boolean;
  website:   string;
};

type SubmitState = "idle" | "submitting" | "success" | "error";

// â”€â”€â”€ Shared input className â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

const inputClass = [
  "w-full bg-transparent border-b border-stone-200",
  "py-3 font-sans text-base font-light text-stone-900",
  "placeholder:text-stone-300 placeholder:font-light",
  "focus:outline-none focus:border-stone-500",
  "transition-colors duration",
].join(" ");

// â”€â”€â”€ Component â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

export function InquiryForm() {
  const [form, setForm] = useState<FormState>({
    name:      "",
    email:     "",
    duration:  "",
    narrative: "",
    marketingConsent: false,
    website:   "",
  });

  const [submitState, setSubmitState] = useState<SubmitState>("idle");

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const target = e.target;
    const value =
      target instanceof HTMLInputElement && target.type === "checkbox"
        ? target.checked
        : target.value;

    setForm((prev) => ({ ...prev, [target.name]: value }));
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
      const response = await fetch("/api/inquire", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        throw new Error("Enquiry submission failed.");
      }

      setSubmitState("success");
    } catch {
      setSubmitState("error");
    }
  }

  // â”€â”€ Success state  -  rendered in-place, page structure intact â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  if (submitState === "success") {
    return (
      <div className="flex flex-col gap-6 py-2">
        <p className="label-tag">Private Enquiry Received</p>
        <p className="font-serif font-light text-display-sm text-stone-900 leading-[1.45] tracking-[-0.01em]">
          Thank you,{" "}
          <em>{form.name.split(" ")[0] || "thank you"}</em>.
        </p>
        <p className="text-base font-light text-stone-500 leading-relaxed max-w-[480px]">
          Thank you for sharing your brief. Your enquiry has been received and
          will be reviewed personally. If there is strong fit, we will respond
          within 24-48 hours via the address you provided.
        </p>
        <p className="text-base font-light text-stone-500 leading-relaxed max-w-[480px]">
          If you need anything in the meantime, write to us directly at{" "}
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

  // â”€â”€ Form â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
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

      <input
        type="text"
        name="website"
        value={form.website}
        onChange={handleChange}
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

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

      <div className="border-t border-stone-200 pt-6">
        <label
          htmlFor="marketingConsent"
          className="inline-flex items-start gap-3 cursor-pointer"
        >
          <input
            id="marketingConsent"
            name="marketingConsent"
            type="checkbox"
            checked={form.marketingConsent}
            onChange={handleChange}
            className="mt-[2px] h-4 w-4 rounded-none border border-stone-300 text-forest focus:ring-forest"
          />
          <span className="text-sm font-light text-stone-500 leading-relaxed">
            I would like to receive occasional marketing emails, updates, and
            relevant travel inspiration from Mason &amp; Wild. I understand
            that I can unsubscribe at any time.
          </span>
        </label>
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
          {submitState === "submitting" ? "Sending..." : "Start Your Private Enquiry"}
        </button>

        <p className="text-sm font-light text-stone-400 leading-relaxed">
          {CTA.formResponseNote}
        </p>
      </div>

      <p className="text-xs font-light text-stone-400 leading-relaxed">
        By submitting this form, you agree that Mason &amp; Wild may process
        your personal information to respond to your enquiry and manage related
        communications in accordance with our{" "}
        <Link
          href="/privacy"
          className="text-stone-500 border-b border-stone-300 hover:text-stone-700 hover:border-stone-500 pb-px transition-colors duration"
        >
          Privacy Policy
        </Link>
        .
      </p>

      {/* Error */}
      {submitState === "error" && (
        <p className="text-sm font-light text-stone-500 leading-relaxed border-l-2 border-stone-300 pl-4">
          We could not submit your enquiry just now. Please try again, or write
          to us directly at{" "}
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


