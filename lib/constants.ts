// lib/constants.ts
// Single source of truth for all brand language.
// No UI component may hardcode strings that appear here.

// â”€â”€â”€ Primary Positioning â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

export const BRAND_NAME = "Mason & Wild" as const;

export const PRIMARY_POSITIONING_LINE =
  "Luxury African journeys for LGBTQ+ travellers who value privacy, beauty, and precision." as const;

export const BRAND_DESCRIPTOR = "The Silent Observer" as const;

export const FOUNDER = {
  name: "Zannon James",
  title: "Founder and Luxury Safari Architect",
  linkedin: "https://www.linkedin.com/in/zannon-james/",
  email: "zannon@masonandwild.com",
} as const;

export const BUSINESS_LEGAL_LINE =
  "Mason & Wild trades under the Crew Up Pty Ltd umbrella. Crew Up Pty Ltd, registration number K2025281605." as const;

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
  beginJourney:        "Begin a Private Journey",

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
  formResponseNote:    "Suitable enquiries are personally reviewed, with next steps typically shared within 24 to 48 hours.",
} as const;

// â”€â”€â”€ Differentiator Pillars â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

export const DIFFERENTIATORS = [
  {
    key: "safetyIntelligence",
    label: "YOU ARE UNDERSTOOD PROPERLY",
    body:  "LGBTQ+ awareness is not a layer added to our planning - it shapes which camps enter our collection, which guides are assigned, how transit between properties is routed, and how room configurations are handled by default. The decisions are operational, not performative.",
  },
  {
    key: "discreteRouting",
    label: "We Filter Everything",
    body:  "Not every hotel, destination, or experience earns its place. We remove what does not belong, so the journey stays coherent.",
  },
  {
    key: "vettedEcosystem",
    label: "Real Regional Knowledge",
    body:  "Recommendations are shaped by lived experience and trusted relationships on the ground, not supplier copy or trend cycles.",
  },
  {
    key: "privateByDesign",
    label: "A Coherent Journey",
    body:  "Luxury is not more. It is what has been refined. Every chapter flows with intention, pace, and emotional precision.",
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
    href:    "/journeys/the-intimate",
    name:    "The Intimate",
    outcome: "Solitude",
    tagline: "For clients who need quiet, privacy, and no performative safari noise.",
    img: {
      src: "/home/the-intimate.jpg",
      alt: "Okavango Delta at dawn  -  still water and open sky",
    },
  },
  {
    slug:    "the-untamed",
    href:    "/journeys/the-untamed",
    name:    "The Untamed",
    outcome: "Connection",
    tagline: "Elemental Africa with proper guiding, pace, and emotional depth.",
    img: {
      src: "/journeys/the-untamed-card.png",
      alt: "Elemental Zambia wilderness and river crossing",
    },
  },
  {
    slug:    "the-private-circuit",
    href:    "/journeys/the-private-circuit",
    name:    "The Private Circuit",
    outcome: "Sovereignty",
    tagline: "Multi-territory routing with private handling and seamless transitions.",
    img: {
      src: "/home/private-circuit.jpg",
      alt: "Remote wilderness and dramatic sky",
    },
  },
  {
    slug:    "the-romantic",
    href:    "/journeys/the-romantic",
    name:    "The Romantic",
    outcome: "Wonder",
    tagline: "Cinematic travel for two, designed around intimacy rather than volume.",
    img: {
      src: "/home/the-romantic-card.png",
      alt: "Private romantic setting in South Africa and Mozambique",
    },
  },
  {
    slug:    "the-classic",
    href:    "/journeys/the-classic",
    name:    "The Classic",
    outcome: "Foundation",
    tagline: "A refined first journey through Southern Africa, edited properly.",
    img: {
      src: "/journeys/the-classic/mbano-manor-card.jpg",
      alt: "Victoria Falls chapter at Mbano Manor",
    },
  },
  {
    slug:    "the-adventure",
    href:    "/journeys/the-adventure",
    name:    "The Adventure",
    outcome: "Adventure",
    tagline: "Bold landscapes, private guiding, and route design that still feels elegant.",
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
    tagline: "A private group journey shaped by rhythm, style, and strong curation.",
    img: {
      src: "/journeys/the-social.jpg",
      alt: "South Africa private group social journey setting",
    },
  },
] as const;

// â”€â”€â”€ Journal Categories â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

export type JournalCategory =
  | "journey-intelligence"
  | "lgbtq-travel-intelligence"
  | "safari-guides"
  | "private-travel-philosophy"
  | "conservation-and-culture"
  | "destination-notes";

export const JOURNAL_CATEGORY_LABELS: Record<JournalCategory, string> = {
  "journey-intelligence":      "Journey Intelligence",
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

export const TIME_OF_YEAR_OPTIONS = [
  { value: "jan-mar", label: "Jan-Mar" },
  { value: "apr-jun", label: "Apr-Jun" },
  { value: "jul-sep", label: "Jul-Sep" },
  { value: "oct-dec", label: "Oct-Dec" },
] as const;

export type TimeOfYearOption = typeof TIME_OF_YEAR_OPTIONS[number]["value"];

// â”€â”€â”€ The Social Shift â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

export const SOCIAL_COPY = {
  sectionLabel:      "By Invitation Only",
  statement:         "A small group of aligned travellers. One shared season. Designed for those who find the right company as rare as the right landscape.",
  foundingNote:      "The 2027 circle is being assembled.",
  applicationPrompt: "Membership is by introduction only.",
} as const;

// â”€â”€â”€ Inquiry Form â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

export const INQUIRY_COPY = {
  pageSubhead:
    "Private African travel, designed around who you are and how you want to move through the world. Mason & Wild creates privately designed journeys for travellers who value discretion, strong curation, and the confidence of being understood properly from the start.",
  processBody:
    "Every Mason & Wild journey begins with a private enquiry. The details below help us understand your rhythm, expectations, preferred season, and level of privacy required before anything is proposed. Suitable enquiries are personally reviewed before moving into a private consultation.",
  fullNameLabel:       "Full Name",
  fullNamePlaceholder: "How you would like us to address you",
  emailLabel:          "Email",
  emailPlaceholder:    "For private correspondence only",
  durationLabel:       "Preferred Journey Length",
  preferredTimeOfYearLabel: "Preferred Time of Year",
  preferredTimeOfYearHint:
    "If your dates are flexible, choose the quarter that feels closest to what you have in mind.",
  narrativeLabel:      "A few details to shape your journey properly",
  narrativePlaceholder:"Share who is travelling, when you are considering, and what matters most.",
  availabilityHeading: "Seasonal Availability",
  contactLine:         FOUNDER.email,
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

