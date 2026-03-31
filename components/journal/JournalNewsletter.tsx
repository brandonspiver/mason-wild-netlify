// components/journal/JournalNewsletter.tsx
// Shared newsletter capture for Journal index and article pages.
// Intentionally distinct from the homepage newsletter:
// - light background, not dark
// - single italic serif prompt, not a heading + description
// - stone-900 submit button, not forest green
// The Journal newsletter should feel like an editorial subscription,
// not a marketing capture unit.

export function JournalNewsletter({ inputId }: { inputId: string }) {
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
          </div>
          <form
            className="flex border border-stone-200 min-w-0 sm:min-w-[380px]"
            aria-label="Newsletter subscription"
          >
            <label htmlFor={inputId} className="sr-only">
              Email address for newsletter
            </label>
            <input
              id={inputId}
              type="email"
              name="email"
              placeholder="For private correspondence"
              required
              autoComplete="email"
              className="flex-1 min-w-0 bg-transparent border-none outline-none px-[18px] py-[13px] font-serif italic text-base font-light text-stone-900 placeholder:text-stone-300 focus:placeholder:text-stone-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-forest focus-visible:ring-inset"
            />
            <button
              type="button"
              className="bg-stone-900 hover:bg-stone-800 text-white px-5 py-[13px] text-2xs tracking-wide uppercase transition-colors duration whitespace-nowrap shrink-0"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
