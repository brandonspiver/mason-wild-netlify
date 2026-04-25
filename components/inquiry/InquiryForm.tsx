"use client";

import Link from "next/link";
import { useState } from "react";
import { CTA, INQUIRY_COPY } from "@/lib/constants";

const CONTACT_METHOD_OPTIONS = [
  { value: "email", label: "Email" },
  { value: "whatsapp", label: "WhatsApp" },
  { value: "private-call", label: "Private call" },
] as const;

const TRAVEL_WINDOW_OPTIONS = [
  { value: "within-3-months", label: "Within 3 months" },
  { value: "three-to-six-months", label: "3 to 6 months" },
  { value: "six-to-twelve-months", label: "6 to 12 months" },
  { value: "twelve-plus-months", label: "12+ months" },
  { value: "dates-flexible", label: "Dates flexible" },
] as const;

const JOURNEY_LENGTH_OPTIONS = [
  { value: "7-9-nights", label: "7 to 9 nights" },
  { value: "10-14-nights", label: "10 to 14 nights" },
  { value: "15-plus-nights", label: "15+ nights" },
  { value: "not-sure-yet", label: "Not sure yet" },
] as const;

const JOURNEY_INTEREST_OPTIONS = [
  { value: "the-classic", label: "The Classic" },
  { value: "the-intimate", label: "The Intimate" },
  { value: "the-romantic", label: "The Romantic" },
  { value: "the-untamed", label: "The Untamed" },
  { value: "the-adventure", label: "The Adventure" },
  { value: "the-private-circuit", label: "The Private Circuit" },
  { value: "the-social-shift", label: "The Social Shift" },
  { value: "bespoke-not-sure", label: "Bespoke / not sure yet" },
] as const;

const INVESTMENT_OPTIONS = [
  { value: "usd-7500-10000", label: "USD 7,500 to 10,000" },
  { value: "usd-10000-15000", label: "USD 10,000 to 15,000" },
  { value: "usd-15000-25000", label: "USD 15,000 to 25,000" },
  { value: "usd-25000-plus", label: "USD 25,000+" },
  { value: "prefer-private-discussion", label: "Prefer to discuss privately" },
] as const;

const AFRICA_BEFORE_OPTIONS = [
  { value: "yes", label: "Yes" },
  { value: "no", label: "No" },
  { value: "not-yet-planning-seriously", label: "Not yet, but I am planning seriously" },
] as const;

const OCCASION_OPTIONS = [
  { value: "honeymoon", label: "Honeymoon" },
  { value: "anniversary", label: "Anniversary" },
  { value: "milestone-birthday", label: "Milestone birthday" },
  { value: "family-celebration", label: "Family celebration" },
  { value: "private-escape", label: "Private escape" },
  { value: "other", label: "Other" },
] as const;

const DECISION_TIMING_OPTIONS = [
  { value: "immediately", label: "Immediately" },
  { value: "within-2-weeks", label: "Within 2 weeks" },
  { value: "within-1-month", label: "Within 1 month" },
  { value: "still-exploring", label: "Still exploring" },
] as const;

type FormState = {
  name: string;
  email: string;
  residence: string;
  contactMethod: string;
  travellers: string;
  travelWindow: string;
  journeyLength: string;
  journeyInterest: string;
  investment: string;
  narrative: string;
  africaBefore: string;
  specialOccasion: string;
  considerations: string;
  decisionTiming: string;
  marketingConsent: boolean;
  website: string;
};

type SubmitState = "idle" | "submitting" | "success" | "error";
type FieldName =
  | "name"
  | "email"
  | "residence"
  | "contactMethod"
  | "travellers"
  | "travelWindow"
  | "journeyLength"
  | "journeyInterest"
  | "investment"
  | "narrative";
type FieldErrors = Partial<Record<FieldName, string>>;

type InquiryErrorResponse = {
  ok: false;
  error: string;
  fields?: Array<{ field: string; message: string }>;
};

const inputClass = [
  "w-full bg-transparent border-b border-stone-200",
  "py-3 font-sans text-base font-light text-stone-900",
  "placeholder:text-stone-300 placeholder:font-light",
  "focus:outline-none focus:border-stone-500",
  "transition-colors duration",
].join(" ");

const selectClass = [
  inputClass,
  "appearance-none bg-[linear-gradient(45deg,transparent_50%,#6f665c_50%),linear-gradient(135deg,#6f665c_50%,transparent_50%)]",
  "bg-[position:calc(100%-18px)_53%,calc(100%-12px)_53%] bg-[size:6px_6px,6px_6px] bg-no-repeat pr-8",
].join(" ");

function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export function InquiryForm() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    residence: "",
    contactMethod: "",
    travellers: "",
    travelWindow: "",
    journeyLength: "",
    journeyInterest: "",
    investment: "",
    narrative: "",
    africaBefore: "",
    specialOccasion: "",
    considerations: "",
    decisionTiming: "",
    marketingConsent: false,
    website: "",
  });

  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [serverError, setServerError] = useState<string>("");

  function validateForm(nextForm: FormState): FieldErrors {
    const errors: FieldErrors = {};

    if (!nextForm.name.trim()) errors.name = "Please share your full name.";

    if (!nextForm.email.trim()) {
      errors.email = "Please share your email address.";
    } else if (!isValidEmail(nextForm.email.trim())) {
      errors.email = "Please enter a valid email address.";
    }

    if (!nextForm.residence.trim()) errors.residence = "Please share your city and country of residence.";
    if (!nextForm.contactMethod) errors.contactMethod = "Please choose your preferred contact method.";

    if (!nextForm.travellers.trim()) {
      errors.travellers = "Please confirm the number of travellers.";
    } else {
      const travellerCount = Number(nextForm.travellers);
      if (!Number.isInteger(travellerCount) || travellerCount < 1) {
        errors.travellers = "Please enter a valid number of travellers.";
      }
    }

    if (!nextForm.travelWindow) errors.travelWindow = "Please select your preferred travel window.";
    if (!nextForm.journeyLength) errors.journeyLength = "Please select an approximate journey length.";
    if (!nextForm.journeyInterest) errors.journeyInterest = "Please select a journey of interest.";
    if (!nextForm.investment) errors.investment = "Please select anticipated journey investment per person.";
    if (!nextForm.narrative.trim()) {
      errors.narrative = "Please share what kind of journey you are hoping to create.";
    }

    return errors;
  }

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
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

  function handleContactMethod(value: string) {
    setFieldErrors((prev) => ({ ...prev, contactMethod: undefined }));
    setServerError("");
    setForm((prev) => ({ ...prev, contactMethod: prev.contactMethod === value ? "" : value }));
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
              item.field === "residence" ||
              item.field === "contactMethod" ||
              item.field === "travellers" ||
              item.field === "travelWindow" ||
              item.field === "journeyLength" ||
              item.field === "journeyInterest" ||
              item.field === "investment" ||
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

  if (submitState === "success") {
    return (
      <div className="flex flex-col gap-6 py-2">
        <p className="label-tag">Private Enquiry Received</p>
        <p className="font-serif font-light text-display-sm text-stone-900 leading-[1.45] tracking-[-0.01em]">
          Thank you, <em>{form.name.split(" ")[0] || "thank you"}</em>.
        </p>
        <p className="text-base font-light text-stone-500 leading-relaxed max-w-[560px]">
          Thank you for sharing your enquiry in detail. Suitable enquiries are
          personally reviewed before moving into a private consultation.
        </p>
        <p className="text-base font-light text-stone-500 leading-relaxed max-w-[560px]">
          If there is strong fit, we will reply with clear next steps through your
          preferred contact channel within 24 to 48 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate aria-label="Private journey enquiry" className="flex flex-col gap-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col gap-3">
          <label htmlFor="name" className="label-tag">Full name</label>
          <input
            id="name"
            name="name"
            type="text"
            value={form.name}
            onChange={handleChange}
            autoComplete="name"
            required
            className={inputClass}
          />
          {fieldErrors.name && <p className="text-sm font-light text-stone-500 leading-relaxed">{fieldErrors.name}</p>}
        </div>

        <div className="flex flex-col gap-3">
          <label htmlFor="email" className="label-tag">Email address</label>
          <input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            autoComplete="email"
            required
            className={inputClass}
          />
          {fieldErrors.email && <p className="text-sm font-light text-stone-500 leading-relaxed">{fieldErrors.email}</p>}
        </div>

        <div className="flex flex-col gap-3 md:col-span-2">
          <label htmlFor="residence" className="label-tag">Country / city of residence</label>
          <input
            id="residence"
            name="residence"
            type="text"
            value={form.residence}
            onChange={handleChange}
            placeholder="e.g., London, United Kingdom"
            autoComplete="address-level2"
            required
            className={inputClass}
          />
          {fieldErrors.residence && <p className="text-sm font-light text-stone-500 leading-relaxed">{fieldErrors.residence}</p>}
        </div>
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

      <div className="flex flex-col gap-4">
        <p className="label-tag" id="contact-method-label">Preferred contact method</p>
        <div className="grid gap-px border border-stone-200 bg-stone-200 sm:grid-cols-3" role="group" aria-labelledby="contact-method-label">
          {CONTACT_METHOD_OPTIONS.map(({ value, label }) => {
            const selected = form.contactMethod === value;
            return (
              <button
                key={value}
                type="button"
                onClick={() => handleContactMethod(value)}
                aria-pressed={selected}
                className={[
                  "min-h-[56px] px-5 py-3 text-left",
                  "transition-colors duration",
                  selected
                    ? "bg-stone-900 text-white"
                    : "bg-page text-stone-500 hover:bg-page-subtle hover:text-stone-700",
                ].join(" ")}
              >
                <span className="text-[0.72rem] font-normal uppercase tracking-[0.18em]">{label}</span>
              </button>
            );
          })}
        </div>
        {fieldErrors.contactMethod && (
          <p className="text-sm font-light text-stone-500 leading-relaxed">{fieldErrors.contactMethod}</p>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col gap-3">
          <label htmlFor="travellers" className="label-tag">Number of travellers</label>
          <input
            id="travellers"
            name="travellers"
            type="number"
            min={1}
            max={20}
            value={form.travellers}
            onChange={handleChange}
            required
            className={inputClass}
          />
          {fieldErrors.travellers && (
            <p className="text-sm font-light text-stone-500 leading-relaxed">{fieldErrors.travellers}</p>
          )}
        </div>

        <div className="flex flex-col gap-3">
          <label htmlFor="travelWindow" className="label-tag">Preferred travel window</label>
          <select
            id="travelWindow"
            name="travelWindow"
            value={form.travelWindow}
            onChange={handleChange}
            required
            className={selectClass}
          >
            <option value="">Select a window</option>
            {TRAVEL_WINDOW_OPTIONS.map((option) => (
              <option key={option.value} value={option.value}>{option.label}</option>
            ))}
          </select>
          {fieldErrors.travelWindow && (
            <p className="text-sm font-light text-stone-500 leading-relaxed">{fieldErrors.travelWindow}</p>
          )}
        </div>

        <div className="flex flex-col gap-3">
          <label htmlFor="journeyLength" className="label-tag">Approximate journey length</label>
          <select
            id="journeyLength"
            name="journeyLength"
            value={form.journeyLength}
            onChange={handleChange}
            required
            className={selectClass}
          >
            <option value="">Select journey length</option>
            {JOURNEY_LENGTH_OPTIONS.map((option) => (
              <option key={option.value} value={option.value}>{option.label}</option>
            ))}
          </select>
          {fieldErrors.journeyLength && (
            <p className="text-sm font-light text-stone-500 leading-relaxed">{fieldErrors.journeyLength}</p>
          )}
        </div>

        <div className="flex flex-col gap-3">
          <label htmlFor="journeyInterest" className="label-tag">Journey of interest</label>
          <select
            id="journeyInterest"
            name="journeyInterest"
            value={form.journeyInterest}
            onChange={handleChange}
            required
            className={selectClass}
          >
            <option value="">Select journey</option>
            {JOURNEY_INTEREST_OPTIONS.map((option) => (
              <option key={option.value} value={option.value}>{option.label}</option>
            ))}
          </select>
          {fieldErrors.journeyInterest && (
            <p className="text-sm font-light text-stone-500 leading-relaxed">{fieldErrors.journeyInterest}</p>
          )}
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <label htmlFor="investment" className="label-tag">Anticipated journey investment per person</label>
        <select
          id="investment"
          name="investment"
          value={form.investment}
          onChange={handleChange}
          required
          className={selectClass}
        >
          <option value="">Select investment level</option>
          {INVESTMENT_OPTIONS.map((option) => (
            <option key={option.value} value={option.value}>{option.label}</option>
          ))}
        </select>
        {fieldErrors.investment && (
          <p className="text-sm font-light text-stone-500 leading-relaxed">{fieldErrors.investment}</p>
        )}
      </div>

      <div className="flex flex-col gap-3">
        <label htmlFor="narrative" className="label-tag">What kind of journey are you hoping to create?</label>
        <textarea
          id="narrative"
          name="narrative"
          value={form.narrative}
          onChange={handleChange}
          rows={6}
          required
          placeholder="Share your preferred destinations, pace, travel style, and what you want this journey to feel like."
          className={[inputClass, "resize-none"].join(" ")}
        />
        {fieldErrors.narrative && (
          <p className="text-sm font-light text-stone-500 leading-relaxed">{fieldErrors.narrative}</p>
        )}
      </div>

      <div className="border-t border-stone-200 pt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col gap-3">
          <label htmlFor="africaBefore" className="label-tag">Have you travelled to Africa before?</label>
          <select
            id="africaBefore"
            name="africaBefore"
            value={form.africaBefore}
            onChange={handleChange}
            className={selectClass}
          >
            <option value="">Optional</option>
            {AFRICA_BEFORE_OPTIONS.map((option) => (
              <option key={option.value} value={option.value}>{option.label}</option>
            ))}
          </select>
        </div>

        <div className="flex flex-col gap-3">
          <label htmlFor="specialOccasion" className="label-tag">Is this for a special occasion?</label>
          <select
            id="specialOccasion"
            name="specialOccasion"
            value={form.specialOccasion}
            onChange={handleChange}
            className={selectClass}
          >
            <option value="">Optional</option>
            {OCCASION_OPTIONS.map((option) => (
              <option key={option.value} value={option.value}>{option.label}</option>
            ))}
          </select>
        </div>

        <div className="flex flex-col gap-3 md:col-span-2">
          <label htmlFor="considerations" className="label-tag">
            Any privacy, accessibility, dietary, medical, or safety considerations we should be aware of?
          </label>
          <textarea
            id="considerations"
            name="considerations"
            value={form.considerations}
            onChange={handleChange}
            rows={4}
            placeholder="Optional"
            className={[inputClass, "resize-none"].join(" ")}
          />
        </div>

        <div className="flex flex-col gap-3 md:col-span-2">
          <label htmlFor="decisionTiming" className="label-tag">How soon are you hoping to make a decision?</label>
          <select
            id="decisionTiming"
            name="decisionTiming"
            value={form.decisionTiming}
            onChange={handleChange}
            className={selectClass}
          >
            <option value="">Optional</option>
            {DECISION_TIMING_OPTIONS.map((option) => (
              <option key={option.value} value={option.value}>{option.label}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="border-t border-stone-200 pt-6">
        <label htmlFor="marketingConsent" className="inline-flex items-start gap-3 cursor-pointer">
          <input
            id="marketingConsent"
            name="marketingConsent"
            type="checkbox"
            checked={form.marketingConsent}
            onChange={handleChange}
            className="mt-[2px] h-4 w-4 rounded-none border border-stone-300 text-forest focus:ring-forest"
          />
          <span className="text-sm font-light text-stone-500 leading-relaxed">
            I would like to receive occasional Mason &amp; Wild updates and travel intelligence.
          </span>
        </label>
      </div>

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
          {submitState === "submitting" ? "Sending..." : "Send Private Enquiry"}
        </button>

        <p className="text-sm font-light text-stone-400 leading-relaxed">
          {CTA.formResponseNote}
        </p>
      </div>

      <p className="text-xs font-light text-stone-400 leading-relaxed">
        By submitting this form, you agree that Mason &amp; Wild may process your
        personal information to respond to your enquiry and manage related
        communications in accordance with our{" "}
        <Link
          href="/privacy"
          className="text-stone-500 border-b border-stone-300 hover:text-stone-700 hover:border-stone-500 pb-px transition-colors duration"
        >
          Privacy Policy
        </Link>
        .
      </p>

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

