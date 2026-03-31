// lib/constants.ts
// Single source of truth for all brand language.
// No UI component may hardcode strings that appear here.

// ─── Primary Positioning ──────────────────────────────────────────────────────

export const BRAND_NAME = "Mason & Wild" as const;

export const PRIMARY_POSITIONING_LINE =
  "Privately designed African journeys for discerning LGBTQ+ travelers." as const;

export const BRAND_DESCRIPTOR = "The Silent Observer" as const;

// ─── Navigation ──────────────────────────────────────────────────────────────

export const NAV_LABELS = {
  experience: "The Experience",
  journeys:   "Journeys",
  journal:    "The Journal",
  about:      "About",
  inquire:    "Inquire",
} as const;

export const NAV_HREFS = {
  home:       "/",
  experience: "/the-experience",
  journeys:   "/journeys",
  journal:    "/journal",
  about:      "/about",
  inquire:    "/inquire",
  social:     "/the-social",
} as const;

// ─── CTA Language ────────────────────────────────────────────────────────────

export const CTA = {
  // Primary conversion
  inquirePrivately:    "Inquire Privately",
  requestAccess:       "Request Access",
  requestPrivateAccess:"Request Private Access",
  beginJourney:        "Begin Your Journey",

  // Exploratory
  viewCollection:      "View the Collection",
  viewAllJourneys:     "View All Journeys",
  viewAllFive:         "View All Five Archetypes",
  viewItinerary:       "View Itinerary",
  theExperience:       "The Experience",
  ourPhilosophy:       "Our Philosophy",
  viewAllArticles:     "View All Articles",

  // Journal
  continueReading:     "Continue Reading",

  // Form
  formSubmit:          "Request Access",
  formResponseNote:    "Response time is typically 48–72 hours via our private desk.",
} as const;

// ─── Differentiator Pillars ───────────────────────────────────────────────────

export const DIFFERENTIATORS = [
  {
    key: "safetyIntelligence",
    label: "LGBTQ+ Safety Intelligence",
    body:  "We assess every destination for safety, legal standing, and suitability before it enters our collection. You should never have to do that work yourself.",
  },
  {
    key: "discreteRouting",
    label: "Discreet Routing",
    body:  "Private transfers, secluded arrivals, and lodge placements chosen for their distance from public access. Your presence in each destination is entirely your own.",
  },
  {
    key: "vettedEcosystem",
    label: "Vetted Ecosystem",
    body:  "Every lodge, guide, and operator in our network is personally vetted. We work only with partners who share our commitment to privacy and genuine welcome.",
  },
  {
    key: "privateByDesign",
    label: "Private by Design",
    body:  "We do not work from templates. Each journey is built from a direct conversation about what you are looking for — and what you would prefer to leave behind.",
  },
] as const;

// ─── Journey Archetypes ───────────────────────────────────────────────────────

export const EMOTIONAL_OUTCOMES = {
  solitude:    "Solitude",
  connection:  "Connection",
  wonder:      "Wonder",
  sovereignty: "Sovereignty",
} as const;

// ─── Journey Cards — Homepage ─────────────────────────────────────────────────

export const FEATURED_JOURNEYS = [
  {
    slug:    "the-intimate",
    name:    "The Intimate",
    outcome: "Solitude",
    tagline: "For those who need to disappear. Seclusion within private conservancies.",
    img: {
      src: "https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=800&q=82&auto=format&fit=crop",
      alt: "Okavango Delta at dawn — still water and open sky",
    },
  },
  {
    slug:    "the-private-circuit",
    name:    "The Private Circuit",
    outcome: "Sovereignty",
    tagline: "Multi-territory. Private air access. Every arrival exclusively yours.",
    img: {
      src: "https://images.unsplash.com/photo-1612213864856-e67c42e17f1d?w=800&q=82&auto=format&fit=crop",
      alt: "Remote wilderness and dramatic sky",
    },
  },
  {
    slug:    "the-romantic",
    name:    "The Romantic",
    outcome: "Wonder",
    tagline: "Cinematic moments designed for two. Intimacy before itineraries.",
    img: {
      src: "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?w=800&q=82&auto=format&fit=crop",
      alt: "Namibian desert dunes at first light",
    },
  },
] as const;

// ─── Journal Categories ───────────────────────────────────────────────────────

export type JournalCategory =
  | "lgbtq-travel-intelligence"
  | "safari-guides"
  | "private-travel-philosophy"
  | "conservation-and-culture"
  | "destination-notes";

export const JOURNAL_CATEGORY_LABELS: Record<JournalCategory, string> = {
  "lgbtq-travel-intelligence": "LGBTQ+ Travel Intelligence",
  "safari-guides":             "Safari Guides",
  "private-travel-philosophy": "Private Travel Philosophy",
  "conservation-and-culture":  "Conservation & Culture",
  "destination-notes":         "Destination Notes",
} as const;

// ─── Duration Options ─────────────────────────────────────────────────────────

export const DURATION_OPTIONS = [
  { value: "7-10",       label: "7–10 Days" },
  { value: "14-21",      label: "14–21 Days" },
  { value: "sabbatical", label: "Sabbatical (30+)" },
] as const;

export type DurationOption = typeof DURATION_OPTIONS[number]["value"];

// ─── The Social ───────────────────────────────────────────────────────────────

export const SOCIAL_COPY = {
  sectionLabel:      "By Invitation Only",
  statement:         "A small group of aligned travelers. One shared season. Designed for those who find the right company as rare as the right landscape.",
  foundingNote:      "The circle for 2025 is currently being assembled.",
  applicationPrompt: "Membership is by introduction only.",
} as const;

// ─── Inquiry Form ─────────────────────────────────────────────────────────────

export const INQUIRY_COPY = {
  pageSubhead:
    "We take on a limited number of journeys each month to ensure each one receives the attention it deserves. Our process is personal and unhurried.",
  processBody:
    "Each journey begins with a conversation. We do not offer packages — we design itineraries around a specific brief. Once we receive your inquiry, a member of our team will review it carefully before responding.",
  fullNameLabel:       "Full Name",
  fullNamePlaceholder: "As it appears on your travel document",
  emailLabel:          "Email",
  emailPlaceholder:    "For private correspondence",
  durationLabel:       "Intended Duration",
  narrativeLabel:      "What you are looking for",
  narrativePlaceholder:"Tell us about a landscape or feeling you have been seeking.",
  availabilityHeading: "Seasonal Availability",
  contactLine:         "direct.concierge@masonwild.com",
} as const;

// ─── Footer ───────────────────────────────────────────────────────────────────

export const FOOTER_NAV = [
  { label: "About",   href: "/about" },
  { label: "Journal", href: "/journal" },
  { label: "Inquire", href: "/inquire" },
  { label: "Privacy", href: "/privacy" },
] as const;
