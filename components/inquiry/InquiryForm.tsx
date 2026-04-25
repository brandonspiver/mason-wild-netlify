"use client";

import Link from "next/link";
import { useState } from "react";
import {
  INQUIRY_COPY,
  DURATION_OPTIONS,
  TIME_OF_YEAR_OPTIONS,
  CTA,
} from "@/lib/constants";

// â”€â”€â”€ Types â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

type FormState = {
  name:      string;
  email:     string;
  duration:  string;
  preferredTimeOfYear: string;
  narrative: string;
  marketingConsent: boolean;
  website:   string;
};

type SubmitState = "idle" | "submitting" | "success" | "error";
type FieldName =
  | "name"
  | "email"
  | "duration"
  | "preferredTimeOfYear"
  | "narrative";
type FieldErrors = Partial<Record<FieldName, string>>;

type InquiryErrorResponse = {
  ok: false;
  error: string;
  fields?: Array<{ field: string; message: string }>;
};

// â”€â”€â”€ Shared input className â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

const inputClass = [
  "w-full bg-transparent border-b border-stone-200",
  "py-3 font-sans text-base font-light text-stone-900",
  "placeholder:text-stone-300 placeholder:font-light",
  "focus:outline-none focus:border-stone-500",
  "transition-colors duration",
].join(" ");

function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

// â”€â”€â”€ Component â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

export function InquiryForm() {
  const [form, setForm] = useState<FormState>({
    name:      "",
    email:     "",
    duration:  "",
    preferredTimeOfYear: "",
    narrative: "",
    marketingConsent: false,
    website:   "",
  });

  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [serverError, setServerError] = useState<string>("");

  function validateForm(nextForm: FormState): FieldErrors {
    const errors: FieldErrors = {};

    if (!nextForm.name.trim()) {
      errors.name = "Please share your name.";
    }

    if (!nextForm.email.trim()) {
      errors.email = "Please share your email address.";
    } else if (!isValidEmail(nextForm.email.trim())) {
      errors.email = "Please enter a valid email address.";
    }

    if (!nextForm.narrative.trim()) {
      errors.narrative = "Please tell us a few details to shape your journey properly.";
    }

    return errors;
  }

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const target = e.target;
    const value =
      target instanceof HTMLInputElement && target.type === "checkbox"
        ? target.checked
        : target.value;

    if (target.name in fieldErrors) {
      setFieldErrors((prev) => ({ ...prev, [target.name]: undefined }));
    }
    setServerError("");
    setForm((prev) => ({ ...prev, [target.name]: value }));
  }

  function handleDuration(value: string) {
    setFieldErrors((prev) => ({ ...prev, duration: undefined }));
    setServerError("");
    setForm((prev) => ({
      ...prev,
      duration: prev.duration === value ? "" : value,
    }));
  }

  function handlePreferredTimeOfYear(value: string) {
    setFieldErrors((prev) => ({ ...prev, preferredTimeOfYear: undefined }));
    setServerError("");
    setForm((prev) => ({
      ...prev,
      preferredTimeOfYear:
        prev.preferredTimeOfYear === value ? "" : value,
    }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const nextErrors = validateForm(form);
    if (Object.keys(nextErrors).length > 0) {
      setFieldErrors(nextErrors);
      setServerError("");
      setSubmitState("idle");
      return;
    }

    setSubmitState("submitting");
    setFieldErrors({});
    setServerError("");

    try {
      const response = await fetch("/api/inquire", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        const payload = (await response.json().catch(() => null)) as InquiryErrorResponse | null;

        if (payload?.fields?.length) {
          const nextFieldErrors: FieldErrors = {};

          for (const item of payload.fields) {
            if (
              item.field === "name" ||
              item.field === "email" ||
              item.field === "duration" ||
              item.field === "preferredTimeOfYear" ||
              item.field === "narrative"
            ) {
              nextFieldErrors[item.field] = item.message;
            }
          }

          setFieldErrors(nextFieldErrors);
          setSubmitState("idle");
          return;
        }

        throw new Error(payload?.error || "Enquiry submission failed.");
      }

      setSubmitState("success");
    } catch (error) {
      setServerError(
        error instanceof Error
          ? error.message
          : "We could not submit your enquiry just now. Please try again."
      );
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
        {fieldErrors.name && (
          <p className="text-sm font-light text-stone-500 leading-relaxed">
            {fieldErrors.name}
          </p>
        )}
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
        {fieldErrors.email && (
          <p className="text-sm font-light text-stone-500 leading-relaxed">
            {fieldErrors.email}
          </p>
        )}
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
        {fieldErrors.duration && (
          <p className="text-sm font-light text-stone-500 leading-relaxed">
            {fieldErrors.duration}
          </p>
        )}
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <p className="label-tag" id="preferred-time-of-year-label">
            {INQUIRY_COPY.preferredTimeOfYearLabel}
          </p>
          <p className="text-sm font-light leading-relaxed text-stone-400">
            {INQUIRY_COPY.preferredTimeOfYearHint}
          </p>
        </div>
        <div
          className="grid gap-px border border-stone-200 bg-stone-200 sm:grid-cols-2"
          role="group"
          aria-labelledby="preferred-time-of-year-label"
        >
          {TIME_OF_YEAR_OPTIONS.map(({ value, label }) => {
            const selected = form.preferredTimeOfYear === value;
            return (
              <button
                key={value}
                type="button"
                onClick={() => handlePreferredTimeOfYear(value)}
                aria-pressed={selected}
                className={[
                  "min-h-[76px] px-5 py-4 text-left",
                  "transition-colors duration",
                  selected
                    ? "bg-stone-900 text-white"
                    : "bg-page text-stone-500 hover:bg-page-subtle hover:text-stone-700",
                ].join(" ")}
              >
                <span className="text-[0.72rem] font-normal uppercase tracking-[0.18em]">
                  {label}
                </span>
              </button>
            );
          })}
        </div>
        {fieldErrors.preferredTimeOfYear && (
          <p className="text-sm font-light text-stone-500 leading-relaxed">
            {fieldErrors.preferredTimeOfYear}
          </p>
        )}
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
        {fieldErrors.narrative && (
          <p className="text-sm font-light text-stone-500 leading-relaxed">
            {fieldErrors.narrative}
          </p>
        )}
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
          {serverError || "We could not submit your enquiry just now. Please try again."}{" "}
          Please try again, or write to us directly at{" "}
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


