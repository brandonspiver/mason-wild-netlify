# Mason & Wild Complete Audit Report
Date: 2026-04-11
Scope: UX/UI, Accessibility, Software Quality, Performance, SEO, Content Integrity

## Executive Summary
Overall status: Strong brand direction and visual intent, but there are critical production blockers affecting trust, conversion, and crawl quality.

Scorecard (current):
- UX/UI: 7.1 / 10
- Accessibility: 5.6 / 10
- Software Quality: 6.2 / 10
- Performance: 4.8 / 10
- Technical SEO: 7.4 / 10
- Content Integrity: 5.9 / 10

Primary blockers before "premium" launch quality:
1. Inquiry + newsletter forms are not wired end-to-end.
2. Broken internal route targets exist.
3. Character encoding corruption appears in user-facing copy.
4. Navigation/dialog accessibility is incomplete.
5. Image payload is extremely heavy.

---

## Critical Findings (P0)

### 1) Inquiry form is still simulated, not actually submitted
- Evidence: commented fetch and fake timeout in [components/inquiry/InquiryForm.tsx](C:/Users/ZannonJames/OneDrive - Quintana Minerals Corporation/Documents/proj/mason-wild-netlify/components/inquiry/InquiryForm.tsx:57) and [components/inquiry/InquiryForm.tsx](C:/Users/ZannonJames/OneDrive - Quintana Minerals Corporation/Documents/proj/mason-wild-netlify/components/inquiry/InquiryForm.tsx:58).
- Impact: direct conversion loss; leads are silently not captured.
- Recommendation: wire to `/api/inquire` immediately, add success/error telemetry, and add hidden honeypot field to align with backend checks.

### 2) Newsletter forms are non-functional (buttons are not submit actions)
- Evidence: homepage newsletter button is `type="button"` in [app/page.tsx](C:/Users/ZannonJames/OneDrive - Quintana Minerals Corporation/Documents/proj/mason-wild-netlify/app/page.tsx:554); journal newsletter button is `type="button"` in [components/journal/JournalNewsletter.tsx](C:/Users/ZannonJames/OneDrive - Quintana Minerals Corporation/Documents/proj/mason-wild-netlify/components/journal/JournalNewsletter.tsx:41).
- Impact: zero subscriber capture; hidden funnel failure.
- Recommendation: convert to submit flow + API endpoint or third-party action; include consent text + success feedback.

### 3) Broken/invalid internal routes in live copy
- Evidence: links to `/journeys/the-social-shift` in [app/journal/[slug]/page.tsx](C:/Users/ZannonJames/OneDrive - Quintana Minerals Corporation/Documents/proj/mason-wild-netlify/app/journal/[slug]/page.tsx:345) and [app/journal/[slug]/page.tsx](C:/Users/ZannonJames/OneDrive - Quintana Minerals Corporation/Documents/proj/mason-wild-netlify/app/journal/[slug]/page.tsx:361), but that dynamic journey slug does not exist.
- Evidence: footer points to `/privacy` via [lib/constants.ts](C:/Users/ZannonJames/OneDrive - Quintana Minerals Corporation/Documents/proj/mason-wild-netlify/lib/constants.ts:190) while `app/privacy/page.tsx` is missing.
- Impact: 404s, trust drop, crawl waste, and weaker SEO quality signals.
- Recommendation: fix references to `/the-social` or add real `/journeys/the-social-shift` route; add privacy page immediately.

---

## High Findings (P1)

### 4) Visible copy encoding corruption (mojibake) in user-facing text
- Evidence: `Café` in [app/journal/[slug]/page.tsx](C:/Users/ZannonJames/OneDrive - Quintana Minerals Corporation/Documents/proj/mason-wild-netlify/app/journal/[slug]/page.tsx:265), [app/journal/[slug]/page.tsx](C:/Users/ZannonJames/OneDrive - Quintana Minerals Corporation/Documents/proj/mason-wild-netlify/app/journal/[slug]/page.tsx:296), [app/journal/[slug]/page.tsx](C:/Users/ZannonJames/OneDrive - Quintana Minerals Corporation/Documents/proj/mason-wild-netlify/app/journal/[slug]/page.tsx:307).
- Evidence: broken arrow glyphs in [components/ui/Button.tsx](C:/Users/ZannonJames/OneDrive - Quintana Minerals Corporation/Documents/proj/mason-wild-netlify/components/ui/Button.tsx:43) and [components/journey/JourneyCarousel.tsx](C:/Users/ZannonJames/OneDrive - Quintana Minerals Corporation/Documents/proj/mason-wild-netlify/components/journey/JourneyCarousel.tsx:84).
- Impact: luxury perception damage and editorial credibility loss.
- Recommendation: run full UTF-8 normalization pass and replace mojibake strings.

### 5) Navigation accessibility issues (dialog + dropdown)
- Evidence: mobile overlay uses `role="dialog"` in [components/layout/NavBar.tsx](C:/Users/ZannonJames/OneDrive - Quintana Minerals Corporation/Documents/proj/mason-wild-netlify/components/layout/NavBar.tsx:164) but no focus trap/inert background handling.
- Evidence: journey flyout closes on blur at [components/layout/NavBar.tsx](C:/Users/ZannonJames/OneDrive - Quintana Minerals Corporation/Documents/proj/mason-wild-netlify/components/layout/NavBar.tsx:111), causing keyboard navigation friction.
- Impact: accessibility non-compliance and UX friction for keyboard/screen reader users.
- Recommendation: implement focus trap, restore focus on close, and refactor dropdown behavior for keyboard traversal.

### 6) Very heavy image payload (major performance risk)
- Evidence: `public/` total size is ~431.12 MB; 36 files exceed 2 MB; 13 files exceed 5 MB.
- Examples: 31.32 MB `vetted-south-luangwa.png`, 23.73 MB `vetted-monwana.png`, 16.9 MB `FF (2).jpg`.
- Impact: slow LCP on constrained networks/devices, costly image optimization on server, degraded Core Web Vitals.
- Recommendation: preprocess/compress source images offline, generate responsive derivatives, enforce asset budget (<500 KB hero target, <250 KB non-hero where possible).

---

## Medium Findings (P2)

### 7) Tabbed panels lack full ARIA tab semantics
- Evidence: button groups in [components/journey/JourneySummaryPanel.tsx](C:/Users/ZannonJames/OneDrive - Quintana Minerals Corporation/Documents/proj/mason-wild-netlify/components/journey/JourneySummaryPanel.tsx:73) and [components/journey/SocialJourneyPanel.tsx](C:/Users/ZannonJames/OneDrive - Quintana Minerals Corporation/Documents/proj/mason-wild-netlify/components/journey/SocialJourneyPanel.tsx:54) do not implement `role="tablist"`, `role="tab"`, `role="tabpanel"`, `aria-selected`, `aria-controls`.
- Impact: assistive tech cannot understand section state cleanly.
- Recommendation: upgrade these controls to WAI-ARIA tab pattern.

### 8) Carousel auto-advances without reduced-motion or pause controls
- Evidence: auto interval in [components/journey/JourneyCarousel.tsx](C:/Users/ZannonJames/OneDrive - Quintana Minerals Corporation/Documents/proj/mason-wild-netlify/components/journey/JourneyCarousel.tsx:28).
- Impact: motion sensitivity/accessibility issue and reduced user control.
- Recommendation: disable autoplay when `prefers-reduced-motion` is set; pause on hover/focus; add pause/play toggle.

### 9) Route/content architecture is oversized and hard to maintain
- Evidence: [app/journal/[slug]/page.tsx](C:/Users/ZannonJames/OneDrive - Quintana Minerals Corporation/Documents/proj/mason-wild-netlify/app/journal/[slug]/page.tsx) ~3110 lines; [app/journeys/[slug]/page.tsx](C:/Users/ZannonJames/OneDrive - Quintana Minerals Corporation/Documents/proj/mason-wild-netlify/app/journeys/[slug]/page.tsx) ~2608 lines.
- Impact: high regression risk, difficult QA, slower collaboration.
- Recommendation: move content to structured data files or CMS/MDX, keep page files focused on rendering.

### 10) No automated test script in package scripts
- Evidence: scripts only include dev/build/start/lint in [package.json](C:/Users/ZannonJames/OneDrive - Quintana Minerals Corporation/Documents/proj/mason-wild-netlify/package.json:5).
- Impact: no safety net for regressions.
- Recommendation: add unit/integration smoke tests for routes, metadata, and conversion paths.

### 11) Security headers are good but incomplete (no CSP)
- Evidence: headers in [netlify.toml](C:/Users/ZannonJames/OneDrive - Quintana Minerals Corporation/Documents/proj/mason-wild-netlify/netlify.toml:15) include frame/type/referrer/permissions, but no `Content-Security-Policy`.
- Impact: broader XSS and third-party script surface than necessary.
- Recommendation: add strict CSP with nonce/hash strategy for scripts as needed.

### 12) Potential robots source duplication
- Evidence: static [public/robots.txt](C:/Users/ZannonJames/OneDrive - Quintana Minerals Corporation/Documents/proj/mason-wild-netlify/public/robots.txt) and dynamic metadata route [app/robots.ts](C:/Users/ZannonJames/OneDrive - Quintana Minerals Corporation/Documents/proj/mason-wild-netlify/app/robots.ts).
- Impact: ownership ambiguity and future drift risk.
- Recommendation: keep one canonical robots source (prefer `app/robots.ts`).

---

## What Is Already Good
- Semantic page structure is generally clean with clear sectioning and heading usage.
- Metadata baseline improved with canonical/open graph/twitter and structured data.
- Static asset references currently resolve (92 checked refs; 0 missing local files).
- Design token system and typography scaling are cohesive.

---

## 14-Day Remediation Plan (Best ROI Order)
1. Wire inquiry + newsletter backend submission flows (P0).
2. Fix broken routes (`/privacy`, `/journeys/the-social-shift`) (P0).
3. Run UTF-8/mojibake cleanup and content QA pass (P1).
4. Nav/dialog accessibility hardening + keyboard QA (P1).
5. Image optimization pipeline + asset budget enforcement (P1).
6. Tab semantics + carousel reduced-motion controls (P2).
7. Add tests + CI checks for route integrity and conversion flows (P2).
8. Add CSP and remove duplicate robots source (P2).
9. Extract content datasets out of giant page files (P2).

---

## Target State (Post-Fix)
- UX/UI: 9.4+
- Accessibility: 9.0+
- Software Quality: 9.1+
- Performance: 9.0+
- SEO: 9.3+
- Content Integrity: 9.5+

