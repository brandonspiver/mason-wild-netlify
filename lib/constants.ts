// lib/constants.ts
// Single source of truth for all brand language.
// No UI component may hardcode strings that appear here.

// â”€â”€â”€ Primary Positioning â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

export const BRAND_NAME = "Mason & Wild" as const;

export const PRIMARY_POSITIONING_LINE =
  "Privately designed African journeys for discerning LGBTQ+ travellers." as const;

export const BRAND_DESCRIPTOR = "The Silent Observer" as const;

// â”€â”€â”€ Navigation â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

export const NAV_LABELS = {
  home:       "Home",
  experience: "Experience",
  journeys:   "Journeys",
  journal:    "Journal",
  about:      "About",
  inquire:    "Enquire",
} as const;

export const NAV_HREFS = {
  home:       "/",
  experience: "/the-experience",
  journeys:   "/journeys",
  journal:    "/journal",
  about:      "/about",
  inquire:    "/enquire",
  social:     "/the-social",
} as const;

// â”€â”€â”€ CTA Language â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

export const CTA = {
  // Primary conversion
  inquirePrivately:    "Enquire Privately",
  requestAccess:       "Request Access",
  requestPrivateAccess:"Request Private Access",
  beginJourney:        "Begin Your Journey",

  // Exploratory
  viewCollection:      "View the Collection",
  viewAllJourneys:     "View All Journeys",
  viewAllFive:         "View All Seven Archetypes",
  viewItinerary:       "View Itinerary",
  theExperience:       "The Experience",
  ourPhilosophy:       "Our Philosophy",
  viewAllArticles:     "View All Articles",

  // Journal
  continueReading:     "Continue Reading",

  // Form
  formSubmit:          "Request Access",
  formResponseNote:    "Response time is typically 24-48 hours via our private desk.",
} as const;

// â”€â”€â”€ Differentiator Pillars â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

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
    body:  "We do not work from templates. Each journey is built from a direct conversation about what you are looking for  -  and what you would prefer to leave behind.",
  },
] as const;

// â”€â”€â”€ Journey Archetypes â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

export const EMOTIONAL_OUTCOMES = {
  solitude:    "Solitude",
  connection:  "Connection",
  wonder:      "Wonder",
  sovereignty: "Sovereignty",
} as const;

// â”€â”€â”€ Journey Cards  -  Homepage â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

export const FEATURED_JOURNEYS = [
  {
    slug:    "the-intimate",
    name:    "The Intimate",
    outcome: "Solitude",
    tagline: "For those who need to disappear. Seclusion within private conservancies.",
    img: {
      src: "/home/the-intimate.jpg",
      alt: "Okavango Delta at dawn  -  still water and open sky",
    },
  },
  {
    slug:    "the-untamed",
    name:    "The Untamed",
    outcome: "Connection",
    tagline: "Elemental Africa, experienced at its own pace.",
    img: {
      src: "/journeys/the-untamed-card.png",
      alt: "Elemental Zambia wilderness and river crossing",
    },
  },
  {
    slug:    "the-private-circuit",
    name:    "The Private Circuit",
    outcome: "Sovereignty",
    tagline: "Multi-territory. Private air access. Every arrival exclusively yours.",
    img: {
      src: "/home/private-circuit.jpg",
      alt: "Remote wilderness and dramatic sky",
    },
  },
  {
    slug:    "the-romantic",
    name:    "The Romantic",
    outcome: "Wonder",
    tagline: "Cinematic moments designed for two. Intimacy before itineraries.",
    img: {
      src: "/home/the-romantic-card.png",
      alt: "Namibian desert dunes at first light",
    },
  },
  {
    slug:    "the-classic",
    name:    "The Classic",
    outcome: "Foundation",
    tagline: "A refined first journey through Southern Africa.",
    img: {
      src: "/journeys/the-classic/mbano-manor-card.jpg",
      alt: "Victoria Falls chapter at Mbano Manor",
    },
  },
  {
    slug:    "the-adventure",
    name:    "The Adventure",
    outcome: "Adventure",
    tagline: "Bold landscapes, private guiding, and the road as part of the pleasure.",
    img: {
      src: "/journeys/the-adventure/ZS (5).jpg",
      alt: "Namibia expedition landscape at golden light",
    },
  },
  {
    slug:    "the-social-shift",
    href:    "/the-social",
    name:    "The Social Shift",
    outcome: "Connection",
    tagline: "A private group journey designed around rhythm, style, and shared perspective.",
    img: {
      src: "/journeys/the-social.jpg",
      alt: "South Africa private group social journey setting",
    },
  },
] as const;

// â”€â”€â”€ Journal Categories â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

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

// â”€â”€â”€ Duration Options â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

export const DURATION_OPTIONS = [
  { value: "7-10",       label: "7-10 Days" },
  { value: "14-21",      label: "14-21 Days" },
  { value: "sabbatical", label: "Sabbatical (30+)" },
] as const;

export type DurationOption = typeof DURATION_OPTIONS[number]["value"];

// â”€â”€â”€ The Social â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

export const SOCIAL_COPY = {
  sectionLabel:      "By Invitation Only",
  statement:         "A small group of aligned travellers. One shared season. Designed for those who find the right company as rare as the right landscape.",
  foundingNote:      "The 2027 circle is being assembled.",
  applicationPrompt: "Membership is by introduction only.",
} as const;

// â”€â”€â”€ Inquiry Form â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

export const INQUIRY_COPY = {
  pageSubhead:
    "We take on a limited number of journeys each month to ensure each one receives the attention it deserves. Our process is personal and unhurried.",
  processBody:
    "Each journey begins with a conversation. We do not offer packages  -  we design itineraries around a specific brief. Once we receive your enquiry, a member of our team will review it carefully before responding.",
  fullNameLabel:       "Full Name",
  fullNamePlaceholder: "As it appears on your travel document",
  emailLabel:          "Email",
  emailPlaceholder:    "For private correspondence",
  durationLabel:       "Intended Duration",
  narrativeLabel:      "What you are looking for",
  narrativePlaceholder:"Tell us about a landscape or feeling you have been seeking.",
  availabilityHeading: "Seasonal Availability",
  contactLine:         "hello@masonandwild.com",
} as const;

// â”€â”€â”€ Footer â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

export const FOOTER_NAV = [
  { label: "About",   href: "/about" },
  { label: "Journal", href: "/journal" },
  { label: "Enquire", href: "/enquire" },
  { label: "Privacy", href: "/privacy" },
  { label: "Terms",   href: "/terms" },
  { label: "PAIA",    href: "/paia" },
] as const;

