// types/journey.ts
// Shared type definitions for the Journey content system.
// In production: these types are the migration target for contentlayer.
// When contentlayer is added, these are replaced with generated types
// and the import paths updated. Nothing in the render logic changes.

// ─── Image asset ─────────────────────────────────────────────────────────────

export type JourneyImage = {
  readonly src: string;
  readonly alt: string;
};

// ─── Sub-types ────────────────────────────────────────────────────────────────

export type JourneyPillar = {
  readonly key:   string;
  readonly title: string;
  readonly body:  string;
};

export type JourneyFlowPhase = {
  readonly period: string;
  readonly title:  string;
  readonly body:   string;
};

export type NextJourneyRef = {
  readonly slug:    string;
  readonly name:    string;
  readonly outcome: string;
  readonly img:     JourneyImage;
};

// ─── Full journey ─────────────────────────────────────────────────────────────
// Used on individual journey detail pages.
// In production: sourced from a getJourneyBySlug() call in lib/journeys.ts.

export type JourneyData = {
  readonly slug:         string;
  readonly outcome:      string;
  readonly territory:    string;
  readonly name:         string;
  readonly identity:     string; // tagline  -  one sentence, psychological
  readonly lead:         string; // opening serif line in the narrative rail
  readonly body:         readonly string[]; // 2-4 paragraphs
  readonly vettedNote:   string; // ≤ 2 sentences  -  appears twice per page
  readonly heroImg:      JourneyImage;
  readonly galleryImgs:  readonly JourneyImage[];
  readonly pillars:      readonly JourneyPillar[];
  readonly flow:         readonly JourneyFlowPhase[];
  readonly nextJourney?: NextJourneyRef;
};
