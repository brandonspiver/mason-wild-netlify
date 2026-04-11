# Mason & Wild

Private African journeys for discerning LGBTQ+ travellers.

## Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS with custom design system
- **Fonts:** Cormorant Garamond + DM Sans via next/font/google
- **Deployment:** Netlify via @netlify/plugin-nextjs

---

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Deploy to Netlify

### Option A — Netlify CLI

```bash
npm install -g netlify-cli
npm install
netlify init
netlify deploy --prod
```

### Option B — Connect via GitHub

1. Push this repository to GitHub
2. Go to [app.netlify.com](https://app.netlify.com) → Add new site → Import from Git
3. Select your repository
4. Build settings are auto-detected from `netlify.toml`:
   - **Build command:** `npm run build`
   - **Publish directory:** `.next`
5. Add environment variables in **Site settings → Environment variables**:
   - `NEXT_PUBLIC_SITE_URL` → your production domain (e.g. `https://masonwild.com`)
6. Click **Deploy site**

---

## Environment variables

Copy `.env.example` to `.env.local` for local development:

```bash
cp .env.example .env.local
```

| Variable | Required | Description |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | Yes | Production URL for canonical metadata and OG tags |

---

## Project structure

```
mason-wild/
├── app/
│   ├── page.tsx                    Homepage
│   ├── layout.tsx                  Root layout, fonts, global metadata
│   ├── about/page.tsx
│   ├── the-experience/page.tsx
│   ├── the-social/page.tsx
│   ├── journeys/page.tsx           Journeys overview
│   ├── journeys/[slug]/page.tsx    Journey detail (The Intimate built)
│   ├── journal/page.tsx            Journal index
│   ├── journal/[slug]/page.tsx     Article template
│   ├── inquire/page.tsx
│   └── api/inquire/route.ts        POST endpoint with validation + honeypot
├── components/
│   ├── layout/NavBar.tsx           Fixed nav with mobile overlay
│   ├── layout/Footer.tsx
│   ├── ui/Button.tsx               4 variants: primary, ghost, ghost-light, outline-light
│   ├── ui/Reveal.tsx               Scroll-triggered fade-up (IntersectionObserver)
│   ├── inquiry/InquiryForm.tsx     Client island — form state and submission
│   └── journal/JournalNewsletter.tsx  Shared newsletter for Journal pages
├── lib/
│   └── constants.ts                All brand copy, CTAs, nav labels, form copy
├── types/
│   ├── journal.ts                  Article types (ArticleSummary, FullArticle, etc.)
│   └── journey.ts                  Journey types (JourneyData, JourneyPillar, etc.)
├── styles/
│   └── globals.css                 CSS tokens, base reset, utility classes
├── tailwind.config.ts              Full design system (colors, type scale, spacing)
├── netlify.toml                    Netlify build configuration
└── .env.example                    Environment variable template
```

---

## Before going live

1. **Replace Unsplash images** with real photography. Images are referenced by URL in page files — search for `images.unsplash.com` to find them all.

2. **Configure form delivery email.** Set these environment variables in Netlify:
   - `RESEND_API_KEY`
   - `RESEND_FROM` (example: `Mason & Wild <hello@masonandwild.com>`)
   - Optional `FORM_SUBMISSIONS_TO` (defaults to `hello@masonandwild.com`)

3. **All forms are now wired.**
   - Inquiry form posts to `app/api/inquire/route.ts`
   - Newsletter forms post to `app/api/newsletter/route.ts`
   - Both routes send to `hello@masonandwild.com` by default

4. **Replace founder photography.** The About page and homepage founder section use a tonal gradient placeholder. Search for `aria-label="Founder portrait"` to find the two locations.

5. **Update the contact email** in `lib/constants.ts`:
   ```ts
   contactLine: "direct.concierge@masonwild.com",
   ```

6. **Set `NEXT_PUBLIC_SITE_URL`** in Netlify's environment variables panel.

---

## Adding new journey pages

The journey detail page (`app/journeys/[slug]/page.tsx`) is template-ready. To add a new journey:

1. Add a new entry to the `JOURNEYS` record in that file — follow the `JourneyData` type from `types/journey.ts`
2. The slug is automatically registered via `generateStaticParams()`

## Adding new journal articles

The article template (`app/journal/[slug]/page.tsx`) works the same way. Add entries to the `ARTICLES` record following the `FullArticle` type from `types/journal.ts`.
