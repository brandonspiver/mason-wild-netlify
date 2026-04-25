import type { Metadata } from "next";
import type { CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { JourneyCarousel } from "@/components/journey/JourneyCarousel";
import { JourneySummaryPanel } from "@/components/journey/JourneySummaryPanel";
import { JsonLd } from "@/lib/jsonld";
import { NAV_HREFS, CTA } from "@/lib/constants";
import { absoluteUrl } from "@/lib/seo";

type JourneyImage = {
  readonly src: string;
  readonly alt: string;
  readonly position?: string;
  readonly mobilePosition?: string;
  readonly fit?: "cover" | "contain";
  readonly maxWidthPx?: number;
};

type JourneyMetadataItem = {
  readonly label: string;
  readonly title: string;
  readonly body: string;
};

type JourneyPillar = {
  readonly key: string;
  readonly title: string;
  readonly body: string;
};

type JourneyIncludeItem = {
  readonly key: string;
  readonly title: string;
  readonly body: string;
};

type JourneyFlowPhase = {
  readonly number: string;
  readonly period: string;
  readonly title: string;
  readonly body: string;
  readonly image?: JourneyImage;
};

type JourneyNarrativePoint = {
  readonly key: string;
  readonly title: string;
  readonly body: string;
};

type JourneyAccommodation = {
  readonly location?: string;
  readonly name: string;
  readonly stay?: string;
  readonly description: string;
  readonly images: readonly [JourneyImage, JourneyImage, JourneyImage];
};

type JourneyListSection = {
  readonly label: string;
  readonly title: string;
  readonly items: readonly string[];
};

type NextJourneyRef = {
  readonly slug: string;
  readonly name: string;
  readonly outcome: string;
  readonly img: JourneyImage;
};

type JourneyData = {
  readonly slug: string;
  readonly outcome: string;
  readonly territory: string;
  readonly price: string;
  readonly name: string;
  readonly identity: string;
  readonly metadataItems: readonly JourneyMetadataItem[];
  readonly lead: string;
  readonly narrativeLabel?: string;
  readonly vettedNote: string;
  readonly vettedLocation?: string;
  readonly vettedImg?: JourneyImage;
  readonly body: readonly string[];
  readonly narrativePointsLabel?: string;
  readonly narrativePoints?: readonly JourneyNarrativePoint[];
  readonly heroImg: JourneyImage;
  readonly galleryImgs: readonly JourneyImage[];
  readonly summaryTabLabel?: string;
  readonly summaryEyebrow?: string;
  readonly summaryHeading?: string;
  readonly summaryEmphasis?: string;
  readonly pillarsIntro: string;
  readonly pillars: readonly JourneyPillar[];
  readonly pillarsTabLabel?: string;
  readonly pillarsEyebrow?: string;
  readonly pillarsHeading?: string;
  readonly pillarsEmphasis?: string;
  readonly includesIntro: string;
  readonly includesItems: readonly JourneyIncludeItem[];
  readonly flowIntro: string;
  readonly flow: readonly JourneyFlowPhase[];
  readonly accommodationsIntro: string;
  readonly accommodations: readonly JourneyAccommodation[];
  readonly inclusions?: JourneyListSection;
  readonly enhancements?: JourneyListSection;
  readonly ctaLabel?: string;
  readonly ctaHeading?: string;
  readonly ctaEmphasis?: string;
  readonly inquiryHeading: string;
  readonly inquiryBody: string;
  readonly proofLabel: string;
  readonly proofNote: string;
  readonly nextJourney?: NextJourneyRef;
};

const JOURNEYS: Record<string, JourneyData> = {
  "the-intimate": {
    slug: "the-intimate",
    outcome: "INTIMACY",
    territory: "BOTSWANA & VICTORIA FALLS",
    price: "8 NIGHTS FROM $16,380 PER PERSON",
    name: "The Intimate",
    identity:
      "A privately guided Botswana and Victoria Falls journey for four guests who want privacy without compromise.",
    metadataItems: [
      {
        label: "Duration",
        title: "8 nights",
        body: "Three exceptional properties, sequenced from Makgadikgadi stillness to Delta depth to a polished close on the Zambezi.",
      },
      {
        label: "Best For",
        title: "Two couples or chosen family",
        body: "Built for four guests who value discretion, emotional ease, and the freedom to travel entirely on their own terms.",
      },
      {
        label: "Style",
        title: "Fully private, design-led",
        body: "No shared vehicles, no communal logistics, and no fixed pacing set by other guests.",
      },
      {
        label: "Destinations",
        title: "Botswana & Victoria Falls",
        body: "Makgadikgadi, Okavango Delta, and Victoria Falls, routed to build depth and contrast rather than repetition.",
      },
      {
        label: "Price",
        title: "From $16,380 per person",
        body: "Fully private handling throughout, with every transition and experience intentionally managed end to end.",
      },
    ],
    lead: "Africa, properly edited.",
    vettedNote:
      "Personally selected through firsthand experience and trusted relationships across the region. The properties and partners used in this journey are chosen for how they perform in reality, not how they appear online. Service, atmosphere, guiding quality, and privacy all hold to a consistently high standard. For LGBTQ+ travellers, every recommendation is made with comfort, discretion, and ease in mind.",
    vettedLocation: "VICTORIA FALLS, ZIMBABWE",
    vettedImg: {
      src: "/journeys/the-romantic/vetted-victoria-falls.png",
      alt: "Victoria Falls River Lodge in Zimbabwe",
      position: "center 50%",
    },
    body: [
      "Three exceptional properties. No shared vehicles. No crowded game viewing. No generic routing. This journey moves from the silence of the Makgadikgadi to the depth of the Okavango Delta, finishing with a more polished, celebratory close on the Zambezi. Every transition is deliberate. Every element earns its place.",
      "Most Botswana itineraries stack luxury camps and call it curation. This journey is built differently. It begins with space and stillness, deepens into immersive wildlife experience, and finishes with a softer, more elevated river setting.",
      "The order matters. The contrast matters. That is what makes the journey feel complete rather than repetitive.",
      "Designed for travellers who want Africa to feel private, composed, and emotionally considered. This journey works best for two couples or a close-knit group who value space, discretion, and the ability to move entirely on their own terms.",
      "Entirely privately guided. No shared game drives. No fixed schedules dictated by other guests. No unnecessary movement.",
      "Each day is shaped around your pace, your interests, and the natural rhythm of the environment rather than lodge logistics.",
    ],
    heroImg: {
      src: "/journeys/the-intimate/makgadikgadi-dusk.jpg",
      alt: "Jack's Private Camp in the Makgadikgadi at dusk",
      position: "center 52%",
    },
    galleryImgs: [
      {
        src: "/journeys/the-intimate/updates/delta-camp-exterior.jpg",
        alt: "Camp exterior in the Delta",
        position: "center 48%",
      },
      {
        src: "/journeys/the-intimate/updates/delta-flamingos.jpg",
        alt: "Birdlife over Delta water",
        position: "center 48%",
      },
      {
        src: "/journeys/the-intimate/victoria-falls-river-deck.jpg",
        alt: "River or suite view at Victoria Falls Island Lodge",
        position: "center 55%",
      },
    ],
    pillarsIntro:
      "This is not just a collection of exceptional properties. It is a sequence. Makgadikgadi creates space and stillness. The Delta builds depth and immersion. Victoria Falls brings release and a more social, celebratory energy. Without that progression, the journey would feel flat. With it, the experience becomes layered, memorable, and complete.",
    pillars: [
      {
        key: "designed-for",
        title: "Designed for Four Guests",
        body: "Best suited to two couples, close friends, or chosen family who want to travel privately with complete control over pace and atmosphere.",
      },
      {
        key: "guiding",
        title: "Entirely Privately Guided",
        body: "No shared game drives and no fixed lodge-led scheduling. Your days are shaped around your group, your guide, and what the landscape is offering in real time.",
      },
      {
        key: "sequence",
        title: "A Journey That Actually Flows",
        body: "Makgadikgadi opens space. The Delta builds immersion. Victoria Falls brings release. The progression is intentional, and that is why the trip feels complete.",
      },
      {
        key: "lgbtq",
        title: "LGBTQ+ Considered in Practice",
        body: "Comfort, discretion, and local context are built into planning decisions from the first call through to your final transfer.",
      },
      {
        key: "filtering",
        title: "What We Do Not Do",
        body: "We do not build crowded safari circuits. We do not include properties below standard. We do not add unnecessary stops. We only design journeys where every element makes sense.",
      },
      {
        key: "support",
        title: "Direct Mason & Wild Support",
        body: "A dedicated Mason & Wild specialist remains available discreetly throughout, with preferences and refinements handled personally.",
      },
    ],
    includesIntro:
      "The Intimate is fully private from beginning to end, with accommodation, guiding, and transitions selected to reduce friction and protect the quality of the experience.",
    includesItems: [
      {
        key: "private-guiding",
        title: "Private Guiding Throughout",
        body: "Your group travels with private guiding only, so timing, game viewing, and daily rhythm are shaped around your pace.",
      },
      {
        key: "jacks-stay",
        title: "Makgadikgadi Opening at Jack's Private Camp",
        body: "A reset chapter designed to create space, stillness, and immediate separation from everyday pace.",
      },
      {
        key: "delta-stay",
        title: "Delta Immersion at Duke's East",
        body: "A deeper Okavango chapter with private wildlife guiding and enough time for the Delta to feel immersive rather than sampled.",
      },
      {
        key: "desert-delta-experiences",
        title: "Curated Experiences That Add Value",
        body: "Signature activities are included where they strengthen the journey flow, not to add volume for the sake of it.",
      },
      {
        key: "falls-finish",
        title: "Polished Finish at Victoria Falls Island Lodge",
        body: "A softer final chapter on the Zambezi that closes the journey with ease, privacy, and celebratory energy.",
      },
      {
        key: "support-handling",
        title: "Seamless Handling and Support",
        body: "Transfers, handoffs, and live refinements are handled discreetly by Mason & Wild so the experience remains uninterrupted.",
      },
    ],
    flowIntro:
      "The route and sequencing are deliberate. Within that structure, each chapter still has room to breathe, with the pace shaped around your guide, your group, and the landscape itself.",
    flow: [
      {
        number: "01",
        period: "Days 1-3",
        title: "Makgadikgadi (Jack's Private Camp)",
        body: "A reset. Wide landscapes, silence, and a slower pace that allows you to disconnect fully before moving deeper into the journey.",
        image: {
          src: "/journeys/the-intimate/makgadikgadi-horseback.jpg",
          alt: "Makgadikgadi horseback experience at sunset",
          position: "center 56%",
          mobilePosition: "center 62%",
        },
      },
      {
        number: "02",
        period: "Days 4-6",
        title: "Okavango Delta (Duke's East)",
        body: "The most immersive wildlife chapter. Private guiding, exceptional game viewing, and the option to experience the Delta in a quieter, more intimate way, including fly camping.",
        image: {
          src: "/journeys/the-intimate/updates/delta-treehouse-suite.jpg",
          alt: "Duke's East suite framed by Delta forest",
          position: "center 48%",
        },
      },
      {
        number: "03",
        period: "Days 7-8",
        title: "Victoria Falls (Island Lodge)",
        body: "A refined finish. Water, space, and a shift in energy that allows the journey to close in a more relaxed, celebratory way.",
        image: {
          src: "/journeys/the-intimate/victoria-falls-river-deck.jpg",
          alt: "Victoria Falls Island Lodge river deck at golden hour",
          position: "center 50%",
          mobilePosition: "center 52%",
        },
      },
      {
        number: "04",
        period: "Departure",
        title: "Leave Lightly",
        body: "A final morning at your own pace before onward departure. By this stage, the journey should feel calm, complete, and fully handled.",
        image: {
          src: "/journeys/the-intimate/victoria-falls-boat-sunset.jpg",
          alt: "Zambezi river boat at sunset",
          position: "center 55%",
          fit: "contain",
          maxWidthPx: 1000,
        },
      },
    ],
    accommodationsIntro:
      "Each property is here for a specific reason. Together they create a clear progression from stillness, to immersion, to a polished finish that feels complete.",
    accommodations: [
      {
        name: "Jack's Private Camp",
        description:
          "Why it is here: to create immediate distance from ordinary pace through silence, scale, and privacy. What it adds: a true reset that prepares your group to experience the rest of the journey with more presence.",
        images: [
          {
            src: "/journeys/the-intimate/updates/delta-private-suite.jpg",
            alt: "Jack's Private Camp in the Makgadikgadi at dusk",
            position: "center 50%",
          },
          {
            src: "/journeys/the-intimate/jacks-camp-exterior.jpg",
            alt: "Interior at Jack's Private Camp with canvas and warm light",
            position: "center 48%",
          },
          {
            src: "/journeys/the-intimate/makgadikgadi-horseback.jpg",
            alt: "Makgadikgadi desert experience at golden hour",
            position: "center 58%",
          },
        ],
      },
      {
        name: "Duke's East",
        description:
          "Why it is here: to deliver the strongest wildlife chapter in a setting that remains private and controlled. What it adds: depth, immersion, and the most intimate connection to the Delta's rhythm, including quieter, low-volume exploration.",
        images: [
          {
            src: "/journeys/the-intimate/updates/delta-treehouse-suite.jpg",
            alt: "Okavango Delta scene at Duke's East",
            position: "center 45%",
          },
          {
            src: "/journeys/the-intimate/dukes-east-suite-interior.jpg",
            alt: "Suite interior at Duke's East",
            position: "center 50%",
          },
          {
            src: "/journeys/the-intimate/dukes-east-pool-deck.jpg",
            alt: "Delta water experience at golden hour",
            position: "center 52%",
          },
        ],
      },
      {
        name: "Victoria Falls Island Lodge",
        description:
          "Why it is here: to close the route with polish, comfort, and a gentler social energy. What it adds: a celebratory final chapter that still protects privacy while letting the journey end with ease.",
        images: [
          {
            src: "/journeys/the-intimate/updates/victoria-falls-pool.jpg",
            alt: "Pool view at Victoria Falls Island Lodge",
            position: "center 50%",
          },
          {
            src: "/journeys/the-intimate/victoria-falls-suite.jpg",
            alt: "Island Treehouse Suite interior at Victoria Falls Island Lodge",
            position: "center 50%",
          },
          {
            src: "/journeys/the-intimate/victoria-falls-boat-sunset.jpg",
            alt: "Zambezi river scene at sunset",
            position: "center 52%",
            fit: "contain",
            maxWidthPx: 1000,
          },
        ],
      },
    ],
    ctaLabel: "Request Private Planning",
    ctaHeading: "Plan The Intimate with Mason & Wild",
    inquiryHeading: "Plan The Intimate with Mason & Wild",
    inquiryBody:
      "This journey is personally shaped around your group, travel style, and timing. We take on a limited number of private journeys to ensure consistency, detail, and attention from start to finish.",
    proofLabel: "Vetted & Verified",
    proofNote:
      "Personally selected through firsthand experience and trusted relationships across the region. Properties and partners are chosen for real-world performance, not brochure appeal. For LGBTQ+ travellers, every recommendation is made with comfort, discretion, and practical ease in mind.",
    nextJourney: {
      slug: "the-untamed",
      name: "The Untamed",
      outcome: "Connection",
      img: {
        src: "/journeys/the-untamed.jpg",
        alt: "Dense riverine forest at dawn",
      },
    },
  },
  "the-untamed": {
    slug: "the-untamed",
    outcome: "CONNECTION",
    territory: "ZAMBIA",
    price: "9 NIGHTS FROM $15,470 PER PERSON",
    name: "The Untamed",
    identity:
      "A privately guided Zambia journey for travellers who want immersion, privacy, and a safari that feels elemental rather than performative.",
    metadataItems: [
      {
        label: "Length",
        title: "9 nights",
        body: "One polished arrival, one restorative pause, and two deeper bush chapters that become quieter and more elemental as the journey unfolds.",
      },
      {
        label: "Designed For",
        title: "Couples and privacy-seeking travellers",
        body: "Best for travellers who value privacy, immersion, and a journey paced to let the landscape take hold properly.",
      },
      {
        label: "Style",
        title: "Privately guided",
        body: "No shared safari vehicle, no crowded timings, and no need to move through the bush according to anyone else's appetite for volume.",
      },
      {
        label: "Where",
        title: "Zambia",
        body: "Lusaka, KuKaya, Zungulila, and Chindeni, sequenced to become softer, quieter, and more immersive as the journey deepens.",
      },
      {
        label: "Flexibility",
        title: "Tailored around you",
        body: "The structure is deliberate, but the pace, guiding emphasis, and daily rhythm remain shaped around your preferences.",
      },
    ],
    lead: "Zambia rewards a different kind of traveller.",
    vettedNote:
      "Personally selected by Zannon James through firsthand experience and deep regional knowledge. The South Luangwa camps in this journey are chosen from real time spent in the bush and a strong understanding of how the landscape shifts, how the pacing should work, and where the real value lies. From waterways and riverbanks to woodland and open plains, this is a safari region that reveals itself gradually rather than all at once. Each property has been selected for how it works in sequence, not in isolation. Service, guiding, atmosphere, and privacy all need to hold their standard in reality, not just in photography. For LGBTQ+ travellers especially, that confidence matters. Every partner included here has been chosen for discretion, operational ease, and the kind of practical reassurance that allows the journey to feel relaxed rather than guarded.",
    vettedLocation: "South Luangwa National Park, Zambia",
    vettedImg: {
      src: "/journeys/the-untamed/vetted-south-luangwa-optimized.jpg",
      alt: "South Luangwa National Park in Zambia",
      position: "center 50%",
    },
    body: [
      "This is Zambia done with control and intention. A polished arrival, a restorative pause, and two deeper bush chapters sequenced to become quieter, wilder, and more absorbing as the journey unfolds. No shared vehicles. No generic safari rhythm. Just a journey that strips away noise and lets the landscape do its work.",
      "This is not safari for people chasing a checklist. It is safari for those who want depth, atmosphere, and the feeling of moving closer to the natural rhythm of a place.",
      "The Untamed is designed as a progression. It begins with composure, settles into restoration, and then moves into the more instinctive pace of South Luangwa. The sequence matters. Without it, the journey would feel fragmented. With it, it feels immersive, intelligent, and complete.",
      "There is a particular stillness to Zambia when it is done well.",
      "The Untamed is built for travellers who want to feel held by the journey, not hurried through it. It is less about spectacle and more about immersion. Less about volume and more about texture, rhythm, and emotional depth.",
      "That is what makes this itinerary different. It does not try to show you everything. It gives you the right conditions to feel it properly.",
    ],
    heroImg: {
      src: "/journeys/the-untamed/12.jpg",
      alt: "Zambian safari landscape at dusk",
      position: "center 50%",
    },
    galleryImgs: [
      {
        src: "/journeys/the-untamed/KuKaya (2).jpg",
        alt: "KuKaya setting in South Luangwa",
        position: "center 50%",
      },
      {
        src: "/journeys/the-untamed/Chindeni (12).jpg",
        alt: "Chindeni riverside suite scene in Zambia",
        position: "center 50%",
      },
      {
        src: "/journeys/the-untamed/Zungulila (17).jpg",
        alt: "Zungulila atmosphere in South Luangwa",
        position: "center 50%",
      },
    ],
    pillarsIntro:
      "The Untamed is built as a progression: polished arrival, restorative pause, and then deeper bush immersion. The structure removes noise so the landscape can be felt properly.",
    pillars: [
      {
        key: "guiding",
        title: "Private Guiding Throughout",
        body: "A privately guided rhythm throughout, allowing each day to move according to conditions, curiosity, and the natural pace of the landscape rather than a shared programme.",
      },
      {
        key: "arrival",
        title: "A Calm Beginning",
        body: "A measured arrival in Lusaka creates a cleaner transition into the journey, allowing the trip to begin with composure rather than logistics.",
      },
      {
        key: "restorative",
        title: "Restorative Time Built In",
        body: "KuKaya introduces softness, privacy, and restoration before the bush deepens, helping ordinary life fall away properly.",
      },
      {
        key: "south-luangwa",
        title: "A Deeper Bush Chapter",
        body: "Zungulila and Chindeni create the emotional core of the journey, with quieter days, stronger guiding, and a more instinctive relationship with the bush.",
      },
      {
        key: "sequencing",
        title: "What We Do Not Do",
        body: "We do not build Zambia around rushed lodge-hopping. We do not use volume as a substitute for quality. We only design journeys where sequencing, pacing, and properties make sense together.",
      },
      {
        key: "support",
        title: "Direct Mason & Wild Support",
        body: "A dedicated Mason & Wild specialist remains available throughout, handling refinements and timing shifts personally.",
      },
    ],
    includesIntro:
      "The Untamed is arranged as a complete Zambia progression, with each stay, transfer, and safari chapter selected to make the route feel calm on arrival and deeper as it unfolds.",
    includesItems: [
      {
        key: "lusaka-arrival",
        title: "A Polished Lusaka Arrival",
        body: "The journey opens with a composed overnight in Lusaka, creating a cleaner transition into the route before the safari chapters begin.",
      },
      {
        key: "kukaya-stay",
        title: "KuKaya Restorative Chapter",
        body: "A softer middle stay designed to reset the rhythm properly before the bush deepens, rather than rushing straight into safari movement.",
      },
      {
        key: "south-luangwa-stays",
        title: "Two South Luangwa Camp Chapters",
        body: "Zungulila and Chindeni form the core of the journey, giving South Luangwa enough space to feel immersive, textured, and properly absorbed.",
      },
      {
        key: "guided-safari-rhythm",
        title: "Privately Guided Safari Rhythm",
        body: "Game viewing and day-to-day pacing are privately handled, allowing the bush chapter to move according to conditions and appetite rather than standard camp timing.",
      },
      {
        key: "inter-camp-handling",
        title: "Managed Transitions Throughout",
        body: "Inter-camp logistics and handoffs are arranged to feel smooth and unobtrusive, so the route holds together as one continuous journey.",
      },
      {
        key: "mw-support",
        title: "Direct Mason & Wild Support",
        body: "A Mason & Wild specialist remains discreetly available throughout for refinements, timing shifts, and requests that need personal handling.",
      },
    ],
    flowIntro:
      "The route and sequencing are deliberate. Within that structure, each day still has room to breathe, with the pace shaped around your guide, your appetite, and the bush itself.",
    flow: [
      {
        number: "01",
        period: "Days 1-2",
        title: "Arrive Softly",
        body: "Begin in Lusaka with a polished arrival and the right amount of pause before heading into the bush. This first chapter creates composure and allows the journey to open without friction.",
        image: {
          src: "/journeys/the-untamed/Latitude 15 (7).png",
          alt: "Arrival suite at Latitude 15 in Lusaka",
          position: "center 50%",
        },
      },
      {
        number: "02",
        period: "Days 3-4",
        title: "Reset the Rhythm",
        body: "At KuKaya, the pace softens. This chapter is designed for recovery, privacy, and the feeling of ordinary life receding properly before safari begins in earnest.",
        image: {
          src: "/journeys/the-untamed/KuKaya (12).jpg",
          alt: "Quiet natural setting at KuKaya",
          position: "center 50%",
        },
      },
      {
        number: "03",
        period: "Days 5-7",
        title: "Go Deeper",
        body: "Move into South Luangwa, where the landscape becomes more elemental and the safari experience more instinctive. Guiding deepens, immersion sharpens, and the journey starts to feel fully lived rather than simply arranged.",
        image: {
          src: "/journeys/the-untamed/Chindeni (5).jpg",
          alt: "South Luangwa bush landscape at Chindeni",
          position: "center 50%",
        },
      },
      {
        number: "04",
        period: "Days 8-9",
        title: "Leave Changed",
        body: "End in a quieter, more resolved chapter of the bush, where the wild feels closer and the experience more complete. By departure, the journey should feel coherent, grounding, and difficult to shake.",
        image: {
          src: "/journeys/the-untamed/Zungulila (18).jpg",
          alt: "Sunset atmosphere in South Luangwa",
          position: "center 52%",
        },
      },
    ],
    accommodationsIntro:
      "Where privacy takes form. Each property is chosen not as a standalone luxury moment, but for how it shifts the emotional register of the journey from polished arrival to restorative pause to deep safari immersion.",
    accommodations: [
      {
        name: "Latitude 15",
        description:
          "Latitude 15 gives the journey a composed beginning. It offers design, comfort, and a polished arrival that allows the trip to start with intention rather than fatigue.",
        images: [
          {
            src: "/journeys/the-untamed/Latitude 15 (7).png",
            alt: "Suite atmosphere at Latitude 15",
            position: "center 50%",
          },
          {
            src: "/journeys/the-untamed/Latitude 15 (3).png",
            alt: "Editorial interior detail at Latitude 15",
            position: "center 50%",
          },
          {
            src: "/journeys/the-untamed/Latitude 15 (1).png",
            alt: "Arrival atmosphere in Lusaka",
            position: "center 50%",
          },
        ],
      },
      {
        name: "KuKaya",
        description:
          "KuKaya changes the pace completely. It introduces softness, privacy, and restoration before the deeper safari chapters, helping the journey settle into itself before the bush takes over.",
        images: [
          {
            src: "/journeys/the-untamed/KuKaya (12).jpg",
            alt: "Quiet natural setting at KuKaya",
            position: "center 50%",
          },
          {
            src: "/journeys/the-untamed/KuKaya (1).jpg",
            alt: "Private suite atmosphere at KuKaya",
            position: "center 50%",
          },
          {
            src: "/journeys/the-untamed/KuKaya (4).jpg",
            alt: "Outdoor landscape at KuKaya",
            position: "center 50%",
          },
        ],
      },
      {
        name: "Zungulila & Chindeni",
        description:
          "These camps form the emotional centre of the journey. The guiding deepens, the landscape quiets, and the safari experience becomes more tactile, instinctive, and absorbing. This is where The Untamed becomes fully itself.",
        images: [
          {
            src: "/journeys/the-untamed/Chindeni (5).jpg",
            alt: "Bush landscape at Zungulila and Chindeni",
            position: "center 50%",
          },
          {
            src: "/journeys/the-untamed/Chindeni (6).jpg",
            alt: "Quiet safari camp atmosphere",
            position: "center 48%",
          },
          {
            src: "/journeys/the-untamed/Zungulila (18).jpg",
            alt: "Immersive wilderness setting",
            position: "center 52%",
          },
        ],
      },
    ],
    ctaLabel: "Request Private Planning",
    ctaHeading: "Plan The Untamed with Mason & Wild",
    inquiryHeading: "Plan The Untamed with Mason & Wild",
    inquiryBody:
      "This journey is personally shaped around your pace, travel style, and timing by Zannon James. We take on a limited number of private journeys to ensure every detail holds, from the first conversation to the final handoff.",
    proofLabel: "Privately Designed",
    proofNote:
      "Privately designed through real time spent on the ground in Zambia, with each property selected for guiding quality, emotional fit, and the ability to deliver immersion without friction.",
    nextJourney: {
      slug: "the-romantic",
      name: "The Romantic",
      outcome: "Wonder",
      img: {
        src: "/journeys/journeys-hero-bath.jpg",
        alt: "Quiet suite prepared for two",
      },
    },
  },
  "the-romantic": {
    slug: "the-romantic",
    outcome: "INTIMACY",
    territory: "SOUTH AFRICA & MOZAMBIQUE",
    price: "12 NIGHTS FROM $14,105 PER PERSON",
    name: "The Romantic",
    identity:
      "A privately designed journey for two, shaped around intimacy, privacy, and the kind of luxury that feels effortless rather than overstated.",
    metadataItems: [
      {
        label: "Length",
        title: "12 nights",
        body: "A sequenced route from city energy to slower indulgence to complete exhale by the sea.",
      },
      {
        label: "Designed For",
        title: "Couples",
        body: "Best for couples who value privacy, atmosphere, emotional connection, and a journey that never feels crowded or over-programmed.",
      },
      {
        label: "Style",
        title: "Private, design-led, emotionally paced",
        body: "Privately arranged throughout, with each transition, stay, and experience chosen to support ease, intimacy, and a refined sense of flow.",
      },
      {
        label: "Where",
        title: "South Africa & Mozambique",
        body: "Cape Town, the Cape Winelands, and Mozambique, sequenced to move from city energy to slower indulgence to complete exhale by the sea.",
      },
      {
        label: "Starting From",
        title: "From $14,105 per person",
        body: "From $14,105 per person, depending on season, room category, and final journey design.",
      },
    ],
    lead: "The best romantic journeys do not try too hard.",
    vettedNote:
      "Personally selected by Zannon James through firsthand experience and trusted regional knowledge. This journey is built around properties and partners chosen not for trend value, but for how they actually feel in real life. Privacy, atmosphere, service, and emotional fit all need to hold to a consistently high standard. From Cape Town to Mozambique, each chapter has been chosen for how it shifts the tone of the journey. The result is not just a collection of beautiful stays, but a romantic arc that feels composed from beginning to end. For LGBTQ+ travellers, that confidence matters even more. Every recommendation is made with comfort, discretion, and practical ease in mind.",
    vettedLocation: "MONWANA, SOUTH AFRICA",
    vettedImg: {
      src: "/journeys/the-romantic/vetted-verified-romantic.jpg",
      alt: "Zannon James on safari at Monwana in South Africa",
      position: "center 50%",
    },
    body: [
      "This is romance with structure, not cliché. Beautiful spaces, strong pacing, and a sequence designed to let the journey deepen as it unfolds. No crowded settings. No performative luxury. Just the right places, in the right order, for two people who want to feel close to each other and fully removed from everything else.",
      "They do not rely on tired honeymoon tropes or over-scripted moments. They create the right conditions: privacy, beauty, timing, and enough room for the experience to feel natural.",
      "The Romantic is designed as a progression. It begins with style and energy, softens into depth and indulgence, and ends with complete release by the ocean. The sequence matters. That is what turns a luxury trip into a romantic one.",
      "Romance is not a theme. It is a feeling created by the right environment.",
      "This journey is built for couples who want elegance without stiffness, intimacy without spectacle, and a version of Africa that feels curated around them rather than sold to them.",
      "It is less about ticking off highlights and more about how the journey changes your pace, your attention, and the space between you.",
    ],
    heroImg: {
      src: "/journeys/the-romantic/BBL (12).jpg",
      alt: "Benguerra Island setting in Mozambique",
      position: "center 50%",
    },
    galleryImgs: [
      {
        src: "/journeys/the-romantic/MN 7.jpg",
        alt: "Mount Nelson Hotel in Cape Town",
        position: "center 50%",
      },
      {
        src: "/journeys/the-romantic/BBL (20).jpg",
        alt: "Benguerra Island view in Mozambique",
        position: "center 50%",
      },
      {
        src: "/journeys/the-romantic/MW  (7).jpg",
        alt: "Safari scene at Monwana in Greater Kruger",
        position: "center 50%",
      },
      {
        src: "/journeys/the-romantic/BBL (7).jpg",
        alt: "Beach or villa view on Benguerra Island",
        position: "center 50%",
      },
    ],
    pillarsIntro:
      "The Romantic is built around intimacy, privacy, atmosphere, and emotional pacing. Each chapter shifts the tone of the relationship with place, pace, and one another.",
    pillars: [
      {
        key: "guiding",
        title: "Designed for Two",
        body: "Built for couples who want to feel close, private, and fully held by the journey rather than managed by it.",
      },
      {
        key: "contrast",
        title: "A Clear Romantic Arc",
        body: "City energy, Winelands softness, safari depth, and coastal release are sequenced to create emotional progression rather than itinerary noise.",
      },
      {
        key: "cape-town",
        title: "City, Style, and Energy",
        body: "Cape Town gives the journey its polished opening with design, dining, and city pace that builds anticipation without compromising intimacy.",
      },
      {
        key: "winelands",
        title: "Slow into Indulgence",
        body: "The Winelands chapter softens everything into privacy, landscape, and long unhurried time together.",
      },
      {
        key: "safari",
        title: "Depth Without Performance",
        body: "Safari is shaped for immersion and restraint, so the bush chapter feels instinctive, tactile, and emotionally absorbing instead of crowded.",
      },
      {
        key: "island",
        title: "End at Full Exhale",
        body: "Mozambique brings warmth, space, and barefoot ease so the journey can close with release rather than exhaustion.",
      },
      {
        key: "support",
        title: "What We Do Not Do",
        body: "We do not build romance around clichés, overfill itineraries, or recommend places that feel crowded or performative.",
      },
    ],
    includesIntro:
      "The Romantic is privately arranged as one coherent journey for two, with each chapter chosen to support intimacy, flow, and complete ease.",
    includesItems: [
      {
        key: "mount-nelson",
        title: "Cape Town Opening Chapter",
        body: "A polished beginning with design, privacy, and access to the city's best energy without compromising intimacy.",
      },
      {
        key: "akademie-street",
        title: "Winelands Slow Chapter",
        body: "A softer interlude built around landscape, indulgence, and a slower rhythm that deepens connection.",
      },
      {
        key: "monwana-stay",
        title: "Safari Depth Chapter",
        body: "A deeper bush chapter selected for guiding quality, privacy, and immersion without unnecessary movement.",
      },
      {
        key: "benguerra-stay",
        title: "Mozambique Final Chapter",
        body: "A coastal close with sea, warmth, and space that lets the journey exhale fully and end with ease.",
      },
      {
        key: "cape-town-signature",
        title: "Privately Curated Experiences",
        body: "Experiences are included where they support intimacy and emotional flow, not where they add performative volume.",
      },
      {
        key: "support-handling",
        title: "Private Handling Throughout",
        body: "Routing, transfers, timing, and live refinements are handled as one seamless private journey.",
      },
    ],
    flowIntro:
      "The route and sequencing are intentional. Within that structure, each chapter still has room to breathe, with pace and emphasis shaped around the two of you.",
    flow: [
      {
        number: "01",
        period: "Days 1-4",
        title: "City, Style, and Energy",
        body: "Begin in Cape Town with design, dining, and city energy that gives the journey a stylish opening chapter. This is where anticipation builds and the trip starts to feel distinctly yours.",
        image: {
          src: "/journeys/the-romantic/MN 6.jpg",
          alt: "Mount Nelson opening chapter in Cape Town",
          position: "center 50%",
          mobilePosition: "center 46%",
        },
      },
      {
        number: "02",
        period: "Days 5-7",
        title: "Slow into Indulgence",
        body: "Move into the Winelands, where the pace softens and the focus shifts to privacy, landscape, and long, unhurried time together. This chapter adds depth, beauty, and a more intimate rhythm.",
        image: {
          src: "/journeys/the-romantic/AS 10.png",
          alt: "Franschhoek vineyard atmosphere near Akademie Street",
          position: "center 52%",
        },
      },
      {
        number: "03",
        period: "Days 8-10",
        title: "Go Deeper Together",
        body: "Move into the bush chapter, where the landscape becomes more elemental and the experience more instinctive. Guiding deepens, immersion sharpens, and the journey starts to feel fully lived.",
        image: {
          src: "/journeys/the-romantic/MW  (7).jpg",
          alt: "Monwana safari landscape in Greater Kruger",
          position: "center 50%",
        },
      },
      {
        number: "04",
        period: "Days 11-12",
        title: "End at Full Exhale",
        body: "Finish in Mozambique, where the journey becomes lighter, warmer, and more elemental. Sea air, slower mornings, and complete removal from ordinary life give the trip its final emotional release.",
        image: {
          src: "/journeys/the-romantic/BBL (1).jpg",
          alt: "Benguerra Island ocean-facing villa setting",
          position: "center 50%",
          mobilePosition: "center 54%",
        },
      },
      {
        number: "05",
        period: "Departure",
        title: "Leave Softly",
        body: "A final morning at your own pace before onward departure. By this stage, the journey should feel intimate, coherent, and fully removed from ordinary pace.",
        image: {
          src: "/journeys/the-romantic/BBL (6).jpg",
          alt: "Soft final morning on Benguerra Island",
          position: "center 52%",
        },
      },
    ],
    accommodationsIntro:
      "Where intimacy takes shape. Each property is selected not just for luxury, but for the role it plays in the emotional movement of the journey from stylish beginning to softer middle to effortless coastal finish.",
    accommodations: [
      {
        name: "Mount Nelson Hotel",
        description:
          "This stay gives the journey its polished beginning. It sets the tone with design, privacy, and access to the city's best energy without compromising intimacy.",
        images: [
        {
          src: "/journeys/the-romantic/MN 6.jpg",
          alt: "Mount Nelson Hotel in Cape Town",
          position: "center 50%",
        },
        {
          src: "/journeys/the-romantic/MN1.png",
          alt: "Suite interior at Mount Nelson Hotel",
          position: "center 50%",
          fit: "contain",
          maxWidthPx: 577,
        },
        {
          src: "/journeys/the-romantic/MN 5.jpg",
          alt: "Garden or terrace view at Mount Nelson Hotel",
          position: "center 50%",
        },
      ],
    },
      {
        name: "Akademie Street",
        description:
          "This chapter slows everything down. It brings landscape, indulgence, and a more inward pace that allows the journey to deepen before the coast.",
        images: [
        {
          src: "/journeys/the-romantic/AS 4.png",
          alt: "Akademie Street in Franschhoek",
          position: "center 50%",
        },
        {
          src: "/journeys/the-romantic/AS 1.png",
          alt: "Suite interior at Akademie Street",
          position: "center 50%",
        },
        {
          src: "/journeys/the-romantic/AS 10.png",
          alt: "Vineyard setting in Franschhoek",
          position: "center 50%",
        },
      ],
    },
      {
        name: "Monwana",
        description:
          "This chapter deepens the journey into a more instinctive rhythm, with guiding and atmosphere chosen to keep safari immersive, private, and emotionally grounded.",
        images: [
        {
          src: "/journeys/the-romantic/MW  (7).jpg",
          alt: "Safari scene at Monwana in Greater Kruger",
          position: "center 50%",
        },
        {
          src: "/journeys/the-romantic/MW  (1).jpg",
          alt: "Suite interior at Monwana",
          position: "center 50%",
        },
        {
          src: "/journeys/the-romantic/MW  (12).jpg",
          alt: "Wildlife experience in Greater Kruger",
          position: "center 50%",
        },
      ],
    },
      {
        name: "Benguerra Island",
        description:
          "This is where the journey exhales fully. Space, sea, warmth, and a sense of barefoot ease create the right final chapter for romance that feels natural rather than staged.",
        images: [
        {
          src: "/journeys/the-romantic/BBL (1).jpg",
          alt: "Benguerra Island lodge view",
          position: "center 50%",
        },
        {
          src: "/journeys/the-romantic/BBL (8).jpg",
          alt: "Villa or suite on Benguerra Island",
          position: "center 50%",
        },
        {
          src: "/journeys/the-romantic/BBL (7).jpg",
          alt: "Ocean scene on Benguerra Island",
          position: "center 52%",
        },
      ],
      },
    ],
    ctaLabel: "Request Private Planning",
    ctaHeading: "Plan The Romantic with Mason & Wild",
    inquiryHeading: "Plan The Romantic with Mason & Wild",
    inquiryBody:
      "This journey is personally shaped around the two of you, your pace, and how you want the experience to feel. We take on a limited number of private journeys to ensure every element is considered properly from first brief to final handoff.",
    proofLabel: "Privately Designed",
    proofNote:
      "Designed for couples who want beauty, privacy, and a romantic journey that feels elevated, coherent, and entirely their own.",
    nextJourney: {
      slug: "the-private-circuit",
      name: "The Private Circuit",
      outcome: "Private Safari",
      img: {
        src: "/journeys/the-private-circuit/XI (8).png",
        alt: "Beach or villa view on a private circuit journey",
      },
    },
  },
  "the-classic": {
    slug: "the-classic",
    outcome: "FOUNDATION",
    territory: "CAPE TOWN, GREATER KRUGER & VICTORIA FALLS",
    price: "9 NIGHTS FROM $7,500 PER PERSON",
    name: "The Classic",
    identity:
      "A beautifully balanced Southern Africa journey for travellers who want to do the essentials properly, with privacy, polish, and none of the usual friction.",
    metadataItems: [
      {
        label: "Length",
        title: "9 nights",
        body: "Three chapters, one coherent route: Cape Town, Kruger, and Victoria Falls with clear pacing and clean transitions.",
      },
      {
        label: "Designed For",
        title: "First-time Africa travellers, couples, friends, and well-matched private travellers",
        body: "Ideal for travellers who want a strong first African journey that feels elevated, easy, and intelligently paced.",
      },
      {
        label: "Style",
        title: "Balanced, private, polished",
        body: "Privately arranged where it matters, with the right mix of city, safari, and river experience delivered with clarity and comfort.",
      },
      {
        label: "Where",
        title: "Cape Town, Kruger, and Victoria Falls",
        body: "Cape Town for style and energy, Kruger for safari, and Victoria Falls for a memorable final shift in atmosphere.",
      },
      {
        label: "Starting From",
        title: "From $7,500 per person",
        body: "From $7,500 per person, depending on season, room category, and final routing.",
      },
    ],
    lead:
      "The best classic journeys are edited properly.",
    narrativeLabel: "Why This Journey",
    vettedNote:
      "Personally selected by Zannon James through firsthand experience and trusted regional knowledge. This journey is built around properties and experiences chosen for how well they actually deliver in practice. Service, atmosphere, location, and ease all need to hold their standard in real life, not just in polished photography. Cape Town, Kruger, and Victoria Falls are widely known, but that does not make them simple to get right. The difference lies in pacing, property choice, and the quality of the overall flow. For LGBTQ+ travellers, that confidence matters even more. Every recommendation is made with comfort, discretion, and practical ease in mind.",
    vettedLocation: "Victoria Falls, Zimbabwe",
    vettedImg: {
      src: "/journeys/the-classic/vetted-victoria-falls.jpg",
      alt: "Zannon James at Mbano Manor in Victoria Falls",
      position: "center 72%",
    },
    body: [
      "Cape Town, Kruger, and Victoria Falls remain classic for a reason. The route works. But what matters is how it is done. This journey takes those enduring highlights and refines them into something more elegant, more private, and far more considered than the standard circuit. Strong hotels, clear pacing, and the right transitions make this the smartest way into Mason & Wild.",
      "Too many Southern Africa itineraries try to do these destinations by volume. Too many stops, too much movement, and not enough restraint.",
      "The Classic is different. It takes three proven destinations and gives them structure, elegance, and breathing room. The result is a journey that feels clear, enjoyable, and complete without ever becoming generic.",
      "This is the Mason & Wild answer to a first African journey.",
      "It is built for travellers who want to experience Southern Africa's most enduring highlights with confidence, but without being pushed through a standard luxury template. The pace is balanced. The properties are chosen with care. The routing makes sense.",
      "That is what makes this classic. Not familiarity, but staying power.",
    ],
    narrativePointsLabel: "What This Journey Holds",
    narrativePoints: [
      {
        key: "cape-town",
        title: "Start with style, not noise",
        body:
          "Cape Town opens the route with design, food, and urban energy, giving first-time travellers confidence and personality from the first day.",
      },
      {
        key: "greater-kruger",
        title: "Kruger gives the journey real depth",
        body:
          "The safari chapter is long enough to settle properly, so the bush feels immersive and grounding rather than rushed.",
      },
      {
        key: "victoria-falls",
        title: "Victoria Falls lands as the right finale",
        body:
          "Placed at the end, the Falls shift the mood with scale and atmosphere, adding release without disrupting the overall polish.",
      },
      {
        key: "pacing",
        title: "The route stays coherent throughout",
        body:
          "What makes this journey strong is not novelty, but sequence. Route, pace, and comfort work together cleanly from start to finish.",
      },
    ],
    heroImg: {
      src: "/journeys/the-classic/hero-elephant-sunset.jpg",
      alt: "Elephant standing beside water at sunset",
      position: "center 48%",
    },
    galleryImgs: [
      {
        src: "/journeys/the-classic/collage-simbavati-lodge-dusk.jpeg",
        alt: "Simbavati Waterside lodge at dusk beside the water",
        position: "center 52%",
      },
      {
        src: "/journeys/the-classic/collage-mbano-river-boat.jpeg",
        alt: "River boat scene near Victoria Falls",
        position: "center 72%",
      },
      {
        src: "/journeys/the-classic/collage-mbano-helicopter-falls.jpg",
        alt: "Helicopter flying above Victoria Falls",
        position: "center 50%",
        fit: "contain",
        maxWidthPx: 590,
      },
      {
        src: "/journeys/the-classic/PineApple House  (1).png",
        alt: "Bedroom at The Pineapple House",
        position: "center 50%",
      },
      {
        src: "/journeys/the-classic/PineApple House  (2).png",
        alt: "Bathroom at The Pineapple House",
        position: "center 50%",
      },
      {
        src: "/journeys/the-classic/PineApple House  (3).png",
        alt: "Suite interior at The Pineapple House",
        position: "center 50%",
      },
      {
        src: "/journeys/the-classic/PineApple House  (4).png",
        alt: "Lounge interior at The Pineapple House",
        position: "center 50%",
      },
      {
        src: "/journeys/the-classic/PineApple House  (5).png",
        alt: "Exterior at The Pineapple House",
        position: "center 52%",
      },
      {
        src: "/journeys/the-classic/PineApple House  (6).png",
        alt: "Library detail at The Pineapple House",
        position: "center 50%",
      },
      {
        src: "/journeys/the-classic/PineApple House  (7).png",
        alt: "Pool courtyard at The Pineapple House",
        position: "center 52%",
      },
    ],
    summaryTabLabel: "Journey Flow",
    summaryEyebrow: "Journey Flow",
    summaryHeading: "Journey Flow",
    pillarsTabLabel: "What Defines This Journey",
    pillarsEyebrow: "Experience Highlights",
    pillarsHeading: "What Defines This Journey",
    pillarsIntro:
      "This is the entry point into Mason & Wild, but it is never basic. It is premium because the route is proven, the pacing is clean, and each chapter performs a clear role.",
    pillars: [
      {
        key: "southern-africa-route",
        title: "A Proven Route, Edited Properly",
        body: "Cape Town, Kruger, and Victoria Falls are enduring highlights. The value comes from how they are sequenced and handled.",
      },
      {
        key: "cape-town-touring",
        title: "Style and Substance in Cape Town",
        body: "The city chapter is shaped with design, dining, and private handling so the opening feels polished rather than overloaded.",
      },
      {
        key: "greater-kruger-stay",
        title: "Safari Depth in Kruger",
        body: "Four nights in the bush give the safari chapter real depth, with enough time to settle into wildlife rhythm properly.",
      },
      {
        key: "big-five-guiding",
        title: "Guiding That Holds Quality",
        body: "The safari experience is chosen for reliable guiding quality and strong immersion, not volume for its own sake.",
      },
      {
        key: "falls-helicopter",
        title: "A Final Shift in Atmosphere",
        body: "Victoria Falls brings a lighter, more expansive final note that keeps the ending memorable without losing refinement.",
      },
      {
        key: "zambezi-cruise",
        title: "What We Do Not Do",
        body: "We do not overcrowd first Africa journeys. We do not mistake famous destinations for good planning. We only build routes that hold together.",
      },
      {
        key: "private-logistics",
        title: "Seamless, Privately Coordinated Logistics",
        body: "Flights, transfers, timing, and handoffs are arranged to feel clean and unobtrusive, so the route remains easy from start to finish.",
      },
    ],
    includesIntro:
      "The Classic includes the core elements needed to make a first Southern Africa journey feel smooth, elevated, and complete without unnecessary complication.",
    includesItems: [
      {
        key: "accommodation",
        title: "All Accommodation",
        body: "The route includes your Cape Town stay, four nights on safari in Greater Kruger, and a final two-night chapter at Victoria Falls.",
      },
      {
        key: "meals",
        title: "Breakfast in Cape Town and Full Board on Safari",
        body: "Breakfast is included in Cape Town, while safari is fully boarded to keep the bush chapter effortless and uninterrupted.",
      },
      {
        key: "private-transfers",
        title: "Private Transfers Throughout",
        body: "Airport handling and on-the-ground transfers are arranged privately, keeping the route smooth from one chapter to the next.",
      },
      {
        key: "cape-town-touring",
        title: "Cape Town Full-Day Private Touring",
        body: "A privately guided Cape Peninsula day is built in to give the city chapter shape without making it feel over-programmed.",
      },
      {
        key: "safari-activities",
        title: "Safari Activities at Simbavati Waterside",
        body: "Game drives and the full safari rhythm are included so the Kruger chapter can unfold with depth and continuity.",
      },
      {
        key: "falls-tour",
        title: "Victoria Falls Guided Tour",
        body: "A private guided visit to the Falls is included as part of the final chapter, giving context and confidence on the ground.",
      },
      {
        key: "falls-helicopter",
        title: "Helicopter Flight over Victoria Falls",
        body: "An aerial perspective is included as a defining high point, adding scale without overworking the final chapter.",
      },
      {
        key: "zambezi-cruise",
        title: "Zambezi Sunset Cruise",
        body: "A sunset cruise softens the final chapter and provides a quieter counterpoint to the scale of the Falls.",
      },
    ],
    flowIntro:
      "The route is straightforward by design: Cape Town for style and ease, Kruger for safari depth, and Victoria Falls for a memorable final shift in mood.",
    flow: [
      {
        number: "01",
        period: "Days 1-3",
        title: "Start with Style",
        body: "Begin in Cape Town with strong design, good food, and polished urban energy. This opening chapter gives the journey personality and ease from the start.",
        image: {
          src: "/journeys/the-classic/PineApple House  (4).png",
          alt: "Arrival atmosphere at The Pineapple House",
          position: "center 50%",
          fit: "contain",
          maxWidthPx: 989,
        },
      },
      {
        number: "02",
        period: "Day 2",
        title: "Cape Peninsula",
        body: "A private full-day route through key peninsula highlights with enough structure to feel complete and enough space to stay enjoyable.",
        image: {
          src: "/journeys/the-classic/collage-cape-town-pool.jpg",
          alt: "Cape Town peninsula and coast chapter",
          position: "center 52%",
          mobilePosition: "center 58%",
        },
      },
      {
        number: "03",
        period: "Day 3",
        title: "City & Coast",
        body: "A flexible Cape Town day for independent exploring or additional guide time, keeping the city chapter polished and unforced.",
        image: {
          src: "/journeys/the-classic/PineApple House  (7).png",
          alt: "Cape Town city and coast rhythm",
          position: "center 50%",
          fit: "contain",
          maxWidthPx: 1059,
        },
      },
      {
        number: "04",
        period: "Day 4",
        title: "Cape Town to Kruger",
        body: "Private transfer and flight into Greater Kruger, arriving in time to shift cleanly into the first safari rhythm.",
        image: {
          src: "/journeys/the-classic/simbavati-waterside-large-suite.jpeg",
          alt: "Arrival into Greater Kruger at Simbavati Waterside",
          position: "center 50%",
        },
      },
      {
        number: "05",
        period: "Days 5-7",
        title: "Move into Safari Properly",
        body: "Continue in Kruger, where wildlife, quieter mornings, and a more immersive pace create the grounding centre of the journey.",
        image: {
          src: "/journeys/the-classic/simbavati-waterside-small-boma.jpg",
          alt: "Simbavati safari rhythm in Greater Kruger",
          position: "center 50%",
        },
      },
      {
        number: "06",
        period: "Day 8",
        title: "Kruger to Victoria Falls",
        body: "Fly to Victoria Falls and shift into a lighter final chapter with river time and a softer pace.",
        image: {
          src: "/journeys/the-classic/mbano-manor-exterior.jpg",
          alt: "Arrival at Mbano Manor in Victoria Falls",
          position: "center 50%",
        },
      },
      {
        number: "07",
        period: "Day 9",
        title: "Finish with a Shift in Mood",
        body: "The Falls bring spray, river, and broader sense of place. It is the right final note: expansive, memorable, and still refined.",
        image: {
          src: "/journeys/the-classic/collage-mbano-helicopter-falls.jpg",
          alt: "Helicopter perspective over Victoria Falls",
          position: "center 50%",
          fit: "contain",
          maxWidthPx: 590,
        },
      },
      {
        number: "08",
        period: "Day 10",
        title: "Departure",
        body: "Private transfer for onward departure, with the journey closing cleanly and without friction.",
        image: {
          src: "/journeys/the-classic/mbano-manor-suite.jpg",
          alt: "Quiet departure morning at Mbano Manor",
          position: "center 50%",
        },
      },
    ],
    accommodationsIntro:
      "Where the journey takes form. Each property is selected not simply because it is well known, but because it performs a clear role from city opening to safari depth to memorable river finish.",
    accommodations: [
      {
        location: "Cape Town",
        name: "The Pineapple House",
        stay: "3 Nights",
        description:
          "This stay gives the journey a polished beginning, with strong design, a good location, and the right access to the city without losing privacy or ease.",
        images: [
          {
            src: "/journeys/the-classic/PineApple House  (2).png",
            alt: "Bathroom at The Pineapple House",
            position: "center 50%",
          },
          {
            src: "/journeys/the-classic/PineApple House  (1).png",
            alt: "Bedroom at The Pineapple House",
            position: "center 50%",
          },
          {
            src: "/journeys/the-classic/PineApple House  (7).png",
            alt: "Pool courtyard at The Pineapple House",
            position: "center 52%",
          },
        ],
      },
      {
        location: "Greater Kruger",
        name: "Simbavati Waterside",
        stay: "4 Nights",
        description:
          "This is the safari heart of the trip. It brings immersion, guiding quality, and the feeling of having moved properly into the wild rather than simply visiting it.",
        images: [
          {
            src: "/journeys/the-classic/simbavati-waterside-large-suite.jpeg",
            alt: "Suite at Simbavati Waterside",
            position: "center 50%",
          },
          {
            src: "/journeys/the-classic/simbavati-waterside-small-boma.jpg",
            alt: "Simbavati Waterside waterside firepit setting",
            position: "center 50%",
          },
          {
            src: "/journeys/the-classic/simbavati-waterside-small-boma.jpeg",
            alt: "Simbavati Waterside waterside firepit setting",
            position: "center 50%",
          },
        ],
      },
      {
        location: "Victoria Falls",
        name: "Mbano Manor",
        stay: "2 Nights",
        description:
          "This final stay shifts the mood just enough. It adds water, lightness, and a sense of arrival at the end of the journey without breaking the overall refinement.",
        images: [
          {
            src: "/journeys/the-classic/mbano-manor-exterior.jpg",
            alt: "Mbano Manor exterior in the forest",
            position: "center 50%",
          },
          {
            src: "/journeys/the-classic/mbano-manor-suite.jpg",
            alt: "Suite interior at Mbano Manor",
            position: "center 50%",
          },
          {
            src: "/journeys/the-classic/mbano-manor-bath-detail.jpg",
            alt: "Bathroom detail at Mbano Manor",
            position: "center 50%",
          },
        ],
      },
    ],
    enhancements: {
      label: "Tailor Further",
      title: "Optional Enhancements",
      items: [
        "Cape Winelands private experience",
        "Private chef dining in a Cape Town villa setting",
        "Spa treatments on safari",
        "Photographic safari specialist guide",
        "Extended nights in Cape Town or Victoria Falls",
      ],
    },
    ctaLabel: "Request Private Planning",
    ctaHeading: "Plan The Classic with Mason & Wild",
    inquiryHeading: "Plan The Classic with Mason & Wild",
    inquiryBody:
      "This journey is personally shaped around your travel style, timing, and priorities to create a first Southern Africa experience that feels smooth, elevated, and properly put together from start to finish.",
    proofLabel: "Privately Designed",
    proofNote:
      "Designed for travellers who want a proven route delivered with better taste, stronger pacing, and the kind of clarity that makes the whole trip feel easy.",
    nextJourney: {
      slug: "the-romantic",
      name: "The Romantic",
      outcome: "Wonder",
      img: {
        src: "/journeys/the-romantic-card.png",
        alt: "Twilight dinner by the river",
      },
    },
  },
  "the-adventure": {
    slug: "the-adventure",
    outcome: "ADVENTURE",
    territory: "CAPE TOWN & NAMIBIA",
    price: "13 NIGHTS FROM $11,375 PER PERSON",
    name: "The Adventure",
    identity:
      "A privately guided Cape Town and Namibia expedition for travellers who want scale, movement, and exhilaration without giving up comfort or control.",
    metadataItems: [
      {
        label: "Length",
        title: "13 nights",
        body: "An energetic Cape Town opening followed by a continuous privately guided Namibia overland expedition with clear chapter progression.",
      },
      {
        label: "Designed For",
        title: "Adventurous couples, friends, and private travellers",
        body: "Best for travellers who want movement, dramatic landscapes, and a journey that feels expansive without ever becoming chaotic.",
      },
      {
        label: "Style",
        title: "Privately guided, high-comfort adventure",
        body: "Privately guided throughout, with every transfer, activity, and stay selected to preserve both adventure and ease.",
      },
      {
        label: "Where",
        title: "Cape Town and Namibia",
        body: "Cape Town, then onward via Windhoek into Zannier Omaanda, Zannier Sonop, Wilderness Desert Rhino Camp, and Little Ongava.",
      },
      {
        label: "Starting From",
        title: "From $11,375 per person",
        body: "From $11,375 per person, depending on season, accommodation choice, and final journey design.",
      },
    ],
    lead:
      "Adventure should still feel composed.",
    vettedNote:
      "Personally selected by Zannon James through firsthand experience and trusted regional knowledge. The properties and experiences in this journey are chosen for how they hold the balance between adventure and comfort in real life. Route logic, guiding quality, atmosphere, and operational ease all need to work properly, especially in a country where distance and movement define the experience. Namibia can be extraordinary, but only when the pacing is right and the infrastructure around the trip is strong. That is where curation matters most. For LGBTQ+ travellers, practical confidence matters too. Every recommendation is made with comfort, privacy, and ease of movement in mind.",
    vettedLocation: "NAMIBIA",
    vettedImg: {
      src: "/journeys/the-adventure/vetted-cape-town.jpg",
      alt: "Namibia landscape and remote route atmosphere",
      position: "center 74%",
    },
    body: [
      "This is Cape Town and Namibia done properly. Cape Town opens with private, adventure-led energy, then the journey continues into Namibia with one private adventure guide and a fully equipped 4x4 for seamless overland continuity. No unnecessary roughness. No generic self-drive energy. Just a high-design expedition built for travellers who want freedom without losing polish.",
      "Too many Namibia itineraries lean too hard into ruggedness and call it authenticity. Too many others smooth the country down so much that the experience loses all its edge.",
      "The Adventure is designed to do neither. It keeps the drama, the space, and the exhilaration, but removes the friction. The result is a journey that feels bold, cinematic, and entirely under control.",
      "Namibia is one of Africa's most visually arresting countries, but what makes it unforgettable is not only how it looks. It is how it makes you move.",
      "This journey is built for travellers who want to experience that properly. Long roads, wide horizons, giant dunes, Atlantic air, and the shift into wilder, more remote terrain all become part of the emotional arc of the trip.",
      "That is what makes this adventure. Not discomfort, but the feeling of moving through scale with confidence.",
    ],
    heroImg: {
      src: "/journeys/the-adventure/ZS (5).jpg",
      alt: "Sonop in the Namib Desert",
      position: "center 52%",
    },
    galleryImgs: [
      {
        src: "/journeys/the-adventure/Camissa House.jpg",
        alt: "Composed arrival chapter at the opening property",
        position: "center 52%",
      },
      {
        src: "/journeys/the-adventure/ZS (10).jpg",
        alt: "Sonop camp in the Namib at dusk",
        position: "center 48%",
      },
      {
        src: "/journeys/the-adventure/Wilderness Desert Rhino Camp (1).jpg",
        alt: "Remote desert wilderness in Damaraland",
        position: "center 54%",
      },
      {
        src: "/journeys/the-adventure/Little Ongava (10).jpg",
        alt: "Little Ongava safari atmosphere in the Etosha region",
        position: "center 50%",
      },
    ],
    pillarsIntro:
      "This is not generic road-trip adventure. It is a privately guided Cape Town and Namibia route where movement, comfort, and atmosphere work together from start to finish.",
    pillars: [
      {
        key: "windhoek-arrival",
        title: "Cape Town Adventure Opening",
        body: "Cape Town is an energetic, adventure-led opening chapter with a private guide throughout, not generic city sightseeing.",
      },
      {
        key: "private-guide",
        title: "Private Guide, Continuous Handling",
        body: "From arrival in Windhoek onward, one private adventure guide and a fully equipped 4x4 hold continuity across the Namibia expedition.",
      },
      {
        key: "overland",
        title: "Adventure Without Exposure",
        body: "The journey keeps the thrill of movement and scale while removing unnecessary roughness, risk, and operational friction.",
      },
      {
        key: "coastal-shift",
        title: "Omaanda as the Soft Landing",
        body: "Zannier Omaanda is the elegant entry point into Namibia after the Cape Town flight connection, with reserve wildlife, rhino focus, and reset before the route deepens.",
      },
      {
        key: "sonop",
        title: "Sonop as the Desert Adventure Core",
        body: "Zannier Sonop is expansive and cinematic, built around guided 4x4 desert exploration, hot air ballooning, horse riding or quad biking, and meaningful downtime.",
      },
      {
        key: "rhino-camp",
        title: "Conservation Depth in Damaraland",
        body: "Wilderness Desert Rhino Camp is remote, conservation-led, and purposeful, centred on black rhino tracking, stark landscapes, guided walks, and stargazing.",
      },
      {
        key: "ongava",
        title: "Little Ongava Final Payoff",
        body: "Little Ongava closes the expedition with elevated Etosha safari experiences, complete privacy, and relaxed luxury after the overland journey.",
      },
      {
        key: "addons",
        title: "Direct Mason & Wild Control",
        body: "Every stay, transfer, and activity is filtered to keep the journey exhilarating, private, and cleanly executed in real time.",
      },
    ],
    includesIntro:
      "The Adventure is arranged as one continuous privately guided route, starting in Cape Town and continuing through Namibia with one guide and one 4x4 for complete continuity.",
    includesItems: [
      {
        key: "windhoek-opening",
        title: "Cape Town Adventure Opening",
        body: "Three private-guide days in Cape Town set the tone with tandem paragliding, sunrise hiking, shark cage diving, and high-energy dining.",
      },
      {
        key: "coastal-chapter",
        title: "Omaanda Namibia Entry",
        body: "After flying Cape Town to Windhoek, guests meet their private adventure guide and continue directly to Zannier Omaanda, with no Windhoek overnight.",
      },
      {
        key: "private-guide-4x4",
        title: "Private Guide and Controlled Movement",
        body: "A private guide and coordinated overland handling maintain continuity, confidence, and momentum across long-distance terrain.",
      },
      {
        key: "omaanda-sonop",
        title: "Sonop Desert Chapter",
        body: "Zannier Sonop combines guided desert exploration, ballooning, horse riding or quad biking, and strong downtime in a cinematic setting.",
      },
      {
        key: "rhino-camp-chapter",
        title: "Desert Rhino Conservation Depth",
        body: "Wilderness Desert Rhino Camp delivers expert black rhino tracking, guided nature walks, desert-adapted wildlife viewing, and rare wilderness remoteness.",
      },
      {
        key: "little-ongava-finish",
        title: "Little Ongava Final Safari Payoff",
        body: "Little Ongava closes with elevated Etosha safari, exclusivity, and a rewarding final chapter that feels intimate and complete.",
      },
    ],
    flowIntro:
      "The route is intentionally sequenced from an adventure-led Cape Town opening into a seamless Namibia overland expedition. Movement is part of the pleasure, and control is never lost.",
    flow: [
      {
        number: "01",
        period: "Days 1-3",
        title: "Cape Town with Momentum",
        body: "Begin in Cape Town with a private guide throughout. Paragliding, sunrise hiking, shark cage diving, and high-energy dining create an adventure-led opening chapter.",
        image: {
          src: "/journeys/the-adventure/Camissa House.jpg",
          alt: "Adventure-led Cape Town opening chapter",
          position: "center 52%",
          mobilePosition: "center 58%",
        },
      },
      {
        number: "02",
        title: "Enter Namibia Properly",
        period: "Day 4",
        body: "Fly from Cape Town to Windhoek, meet your private adventure guide, and transition directly to Zannier Omaanda for a soft landing without a city overnight.",
        image: {
          src: "/journeys/the-adventure/ZO (14).jpg",
          alt: "Zannier Omaanda soft landing chapter",
          position: "center 50%",
        },
      },
      {
        number: "03",
        period: "Days 5-7",
        title: "Sonop Desert Chapter",
        body: "Continue overland to Zannier Sonop. Guided 4x4 exploration, hot air ballooning, and riding-led options define a cinematic Namib chapter with space to fully exhale.",
        image: {
          src: "/journeys/the-adventure/ZS (7).jpg",
          alt: "Zannier Sonop desert chapter",
          position: "center 52%",
        },
      },
      {
        number: "04",
        period: "Days 8-10",
        title: "Conservation Depth in Damaraland",
        body: "Move into Wilderness Desert Rhino Camp for black rhino tracking with expert monitors, guided walks, stark desert drives, and one of Namibia's most purposeful wilderness chapters.",
        image: {
          src: "/journeys/the-adventure/Wilderness Desert Rhino Camp (8).jpg",
          alt: "Wilderness Desert Rhino Camp conservation chapter",
          position: "center 52%",
        },
      },
      {
        number: "05",
        period: "Days 11-13",
        title: "Little Ongava Final Payoff",
        body: "End at Little Ongava for elevated Etosha safari, complete privacy, and a rewarding final chapter that feels intimate, exclusive, and fully complete.",
        image: {
          src: "/journeys/the-adventure/Little Ongava (10).jpg",
          alt: "Little Ongava final safari chapter",
          position: "center 52%",
        },
      },
    ],
    accommodationsIntro:
      "Where adventure becomes effortless. Each property is selected for its role in the sequence: energetic opening, elegant Namibia entry, desert spectacle, conservation depth, and refined safari close.",
    accommodations: [
      {
        name: "Camissa House, Cape Town",
        description:
          "Camissa House anchors the Cape Town opening, where private-guide adventure and city energy set tone before Namibia begins.",
        images: [
          {
            src: "/journeys/the-adventure/Camissa House.jpg",
            alt: "Camissa House opening chapter in Cape Town",
            position: "center 52%",
          },
          {
            src: "/journeys/the-adventure/Camissa House Cape Town_4.jpg",
            alt: "Design and lounge detail at Camissa House",
            position: "center 50%",
          },
          {
            src: "/journeys/the-adventure/Camissa House Cape Town_7.jpg",
            alt: "Suite detail at Camissa House",
            position: "center 54%",
          },
        ],
      },
      {
        name: "Zannier Omaanda",
        description:
          "Zannier Omaanda is the elegant entry point into Namibia, designed as a soft landing with reserve-based wildlife and reset before the overland route deepens.",
        images: [
          {
            src: "/journeys/the-adventure/ZO (10).jpg",
            alt: "Zannier Omaanda reserve atmosphere",
            position: "center 52%",
          },
          {
            src: "/journeys/the-adventure/ZO (14).jpg",
            alt: "Suite interior at Zannier Omaanda",
            position: "center 50%",
          },
          {
            src: "/journeys/the-adventure/ZO (1).jpg",
            alt: "Wildlife and landscape around Zannier Omaanda",
            position: "center 54%",
          },
        ],
      },
      {
        name: "Sonop, Namib Desert",
        description:
          "Zannier Sonop is the cinematic desert core, where guided exploration, ballooning, horse riding or quad options, and premium downtime define the chapter.",
        images: [
          {
            src: "/journeys/the-adventure/ZS (10).jpg",
            alt: "Sossusvlei property at dusk",
            position: "center 50%",
          },
          {
            src: "/journeys/the-adventure/ZS (3).jpg",
            alt: "Interior detail at the Sossusvlei property",
            position: "center 50%",
          },
          {
            src: "/journeys/the-adventure/ZS (1).jpg",
            alt: "Desert view from the Sossusvlei property",
            position: "center 52%",
          },
        ],
      },
      {
        name: "Wilderness Desert Rhino Camp",
        description:
          "Wilderness Desert Rhino Camp is where the journey turns most elemental and meaningful, centred on black rhino conservation and extraordinary remote landscapes.",
        images: [
          {
            src: "/journeys/the-adventure/Wilderness Desert Rhino Camp (10).jpg",
            alt: "Remote Damaraland property",
            position: "center 52%",
          },
          {
            src: "/journeys/the-adventure/Wilderness Desert Rhino Camp (1).jpg",
            alt: "Interior detail at the Damaraland property",
            position: "center 50%",
          },
          {
            src: "/journeys/the-adventure/Wilderness Desert Rhino Camp (15).jpg",
            alt: "Damaraland landscape and wildlife",
            position: "center 52%",
          },
        ],
      },
      {
        name: "Little Ongava",
        description:
          "Little Ongava closes the expedition with elevated Etosha safari, privacy, exclusivity, and relaxed luxury after the road journey.",
        images: [
          {
            src: "/journeys/the-adventure/Little Ongava (7).jpg",
            alt: "Little Ongava lodge in the Etosha region",
            position: "center 50%",
          },
          {
            src: "/journeys/the-adventure/Little Ongava (3).jpg",
            alt: "Suite interior at Little Ongava",
            position: "center 50%",
          },
          {
            src: "/journeys/the-adventure/Little Ongava (10).jpg",
            alt: "Final safari atmosphere at Little Ongava",
            position: "center 50%",
          },
        ],
      },
    ],
    ctaLabel: "Request Private Planning",
    ctaHeading: "Plan The Adventure with Mason & Wild",
    inquiryHeading: "Plan The Adventure with Mason & Wild",
    inquiryBody:
      "This journey is personally shaped around your pace, appetite for activity, and travel style to create a Namibia experience that feels exhilarating, seamless, and intelligently controlled from beginning to end.",
    proofLabel: "Privately Designed",
    proofNote:
      "Designed for travellers who want freedom, contrast, and scale, delivered with better pacing, stronger properties, and none of the friction that weakens the experience.",
    nextJourney: {
      slug: "the-untamed",
      name: "The Untamed",
      outcome: "Connection",
      img: {
        src: "/journeys/the-untamed-card.png",
        alt: "River crossing with distant elephant",
      },
    },
  },
  "the-private-circuit": {
    slug: "the-private-circuit",
    outcome: "PRIVATE SAFARI",
    territory: "TANZANIA & ZANZIBAR",
    price: "10 NIGHTS FROM $16,835 PER PERSON",
    name: "The Private Circuit",
    identity:
      "A privately designed Tanzania and Zanzibar journey for travellers who want East Africa with polish, privacy, and none of the usual excess.",
    metadataItems: [
      {
        label: "Length",
        title: "10 nights",
        body: "A private East Africa circuit that moves from safari depth into an atmospheric Zanzibar finish with clear pacing and no unnecessary excess.",
      },
      {
        label: "Designed For",
        title: "Couples, friends, and private travellers",
        body: "Best for travellers who want strong wildlife, refined pacing, and a final coastal release that feels natural rather than tacked on.",
      },
      {
        label: "Style",
        title: "Private, elevated, expertly routed",
        body: "Privately arranged throughout, with guiding, transfers, and accommodation selected to keep the experience fluid, polished, and entirely your own.",
      },
      {
        label: "Where",
        title: "Tanzania & Zanzibar",
        body: "Tanzania's safari landscapes followed by Zanzibar, sequenced to move from wildlife immersion into a softer, more elemental coastal close.",
      },
      {
        label: "Starting From",
        title: "From $16,835 per person",
        body: "From $16,835 per person, depending on season, room category, and final journey design.",
      },
    ],
    lead: "East Africa rewards precision.",
    vettedNote:
      "Personally selected by Zannon James through trusted regional knowledge and a clear understanding of what this kind of journey needs to deliver in reality. The properties and partners in this itinerary are chosen for more than reputation. Guiding quality, privacy, service, atmosphere, and the way each chapter connects to the next all need to hold their standard once you are actually travelling. In Tanzania especially, the difference between a prestigious itinerary and a well-built one is in the sequencing. In Zanzibar, the difference is whether the final chapter feels earned. This journey is designed to do both properly. For LGBTQ+ travellers, practical confidence matters too. Every recommendation is made with comfort, discretion, and ease in mind.",
    vettedLocation: "SERENGETI, TANZANIA",
    vettedImg: {
      src: "/journeys/the-private-circuit/vetted-serengeti-optimized.jpg",
      alt: "Serengeti safari scene in Tanzania",
      position: "center 74%",
    },
    body: [
      "This is a more considered way to do Tanzania. Strong guiding, well-judged routing, and properties selected for atmosphere as much as status. The journey moves through safari country with clarity and control, then releases into Zanzibar in a way that feels earned rather than appended. No generic prestige. No unnecessary spectacle. Just a private circuit built properly from start to finish.",
      "Too many Tanzania journeys rely on famous names and call it luxury. Too many Zanzibar endings feel like an afterthought.",
      "The Private Circuit is built differently. It treats the safari chapters as a private progression rather than a checklist, and Zanzibar as the final emotional movement of the journey rather than an add-on. The result is something calmer, sharper, and much more complete.",
      "This is Tanzania for travellers who want confidence, not noise.",
      "It is less about showing how much you can fit into a trip and more about creating the right sequence of depth, contrast, and release. That is what makes it feel private. That is what makes it feel finished.",
      "For LGBTQ+ travellers in particular, practical confidence matters. Every recommendation is made with comfort, discretion, and ease in mind.",
    ],
    heroImg: {
      src: "/journeys/the-private-circuit/SM (19).jpg",
      alt: "Hot air balloon over the Serengeti at golden hour",
      position: "center 52%",
    },
    galleryImgs: [
      {
        src: "/journeys/the-private-circuit/SV (14).jpg",
        alt: "Private villa at Siringit in Arusha",
        position: "center 52%",
      },
      {
        src: "/journeys/the-private-circuit/ST (1).png",
        alt: "Siringit Tarangire Camp at golden hour",
        position: "center 48%",
      },
      {
        src: "/journeys/the-private-circuit/SM (19).jpg",
        alt: "Hot air balloon over the Serengeti",
        position: "center 56%",
      },
    ],
    pillarsIntro:
      "Where the circuit becomes coherent. Each property is selected not only for quality, but for the role it plays in building the movement of the journey from private safari depth to a softer, more atmospheric Indian Ocean finish.",
    pillars: [
      {
        key: "private-safari",
        title: "Private by Design",
        body: "Guiding, transfers, and on-the-ground handling are structured privately throughout, so the journey stays controlled and entirely your own.",
      },
      {
        key: "flying",
        title: "Sequenced, Not Stacked",
        body: "The route is designed as a real circuit with contrast and progression, not a list of high-end stops arranged for optics.",
      },
      {
        key: "villa",
        title: "First Safari Property",
        body: "This opening chapter establishes pace, privacy, and guiding quality from the outset, setting the standard for everything that follows.",
      },
      {
        key: "tarangire",
        title: "Second Safari Property",
        body: "This is where immersion deepens. Wildlife rhythm sharpens, landscapes gain texture, and the circuit starts to feel fully lived rather than simply arranged.",
      },
      {
        key: "serengeti",
        title: "Zanzibar with Purpose",
        body: "Zanzibar is the release valve of the circuit, not a beach add-on. It softens the pace while preserving privacy, atmosphere, and refinement.",
      },
      {
        key: "zanzibar",
        title: "What We Do Not Do",
        body: "We do not build Tanzania around prestige alone, overfill the route, or tack Zanzibar onto the end without purpose.",
      },
      {
        key: "ease",
        title: "East Africa, Properly Controlled",
        body: "Every chapter contributes to emotional and logistical coherence, so the circuit feels polished, calm, and complete in real travel conditions.",
      },
      {
        key: "support",
        title: "Direct Mason & Wild Support",
        body: "A dedicated Mason & Wild specialist remains discreetly available throughout, with details and refinements managed personally.",
      },
    ],
    includesIntro:
      "The Private Circuit is privately arranged from first transfer to final shoreline, with each chapter built to keep the experience coherent, fluid, and confidently controlled.",
    includesItems: [
      {
        key: "private-safari-guiding",
        title: "Private Handling Throughout",
        body: "All core movement and guiding are arranged privately, so your pace is never dictated by shared logistics or volume-led programming.",
      },
      {
        key: "domestic-flights",
        title: "Strong Route Logic",
        body: "The itinerary is sequenced as a true circuit, allowing each chapter to land properly before the next shift in pace and landscape.",
      },
      {
        key: "villa-and-tarangire",
        title: "Private Safari Progression",
        body: "Early chapters establish the right standard, then deepen into stronger immersion, guiding quality, and East African substance.",
      },
      {
        key: "serengeti-arc",
        title: "Depth Without Overbuilding",
        body: "The circuit is designed to feel complete rather than crowded, preserving privacy and energy while still delivering meaningful wildlife depth.",
      },
      {
        key: "balloon-and-park-fees",
        title: "Zanzibar as Final Exhale",
        body: "The final island chapter is integrated as the closing movement of the journey, giving the circuit warmth and release without a drop in standard.",
      },
      {
        key: "xanadu-finish",
        title: "LGBTQ+ Practical Confidence",
        body: "Recommendations are made with discretion, comfort, and operational ease in mind so the journey feels secure as well as elevated.",
      },
    ],
    flowIntro:
      "The route and sequencing are intentional. The pace remains private and flexible, but the emotional logic is deliberate from first safari chapter to final shoreline release.",
    flow: [
      {
        number: "01",
        period: "Days 1-3",
        title: "Enter the Circuit Properly",
        body: "Begin in Tanzania with a strong opening chapter that establishes pace, privacy, and the right standard from the outset. This is where the journey narrows into safari with clarity rather than noise.",
        image: {
          src: "/journeys/the-private-circuit/SV (14).jpg",
          alt: "Settling in at Siringit Villa",
          position: "center 52%",
        },
      },
      {
        number: "02",
        period: "Days 4-5",
        title: "Deepen the Experience",
        body: "Move further into the circuit, where guiding, landscape, and immersion take over. This is where the route gains texture and the journey begins to feel fully lived.",
        image: {
          src: "/journeys/the-private-circuit/ST (1).png",
          alt: "Tarangire chapter at Siringit Camp",
          position: "center 50%",
        },
      },
      {
        number: "03",
        period: "Days 6-7",
        title: "Private Safari at Full Depth",
        body: "The middle safari chapter is the emotional centre of the circuit, where scale, wildlife, and guiding quality come into full focus without losing polish.",
        image: {
          src: "/journeys/the-private-circuit/SM (19).jpg",
          alt: "Serengeti migration chapter with balloon perspective",
          position: "center 56%",
          mobilePosition: "center 44%",
        },
      },
      {
        number: "04",
        period: "Day 8",
        title: "Close the Safari Arc",
        body: "A final safari chapter settles the rhythm before the coast, ensuring Zanzibar arrives as a meaningful release rather than a disconnected add-on.",
        image: {
          src: "/journeys/the-private-circuit/SS (9).jpg",
          alt: "Settled Serengeti finish at Siringit Serengeti Camp",
          position: "center 50%",
        },
      },
      {
        number: "05",
        period: "Days 9-10",
        title: "Release into Zanzibar",
        body: "Finish in Zanzibar, where the energy softens and the experience opens out. The journey ends with coastal warmth and a more elemental luxury that gives the whole circuit its final exhale.",
        image: {
          src: "/journeys/the-private-circuit/XI (8).png",
          alt: "Ocean release chapter at Xanadu Zanzibar",
          position: "center 50%",
          mobilePosition: "center 56%",
          fit: "contain",
          maxWidthPx: 1100,
        },
      },
      {
        number: "06",
        period: "Departure",
        title: "Leave Well Held",
        body: "A final morning at your own pace before onward departure. By this stage, the journey should feel seamless, complete, and entirely removed from the mechanics of ordinary travel.",
        image: {
          src: "/journeys/the-private-circuit/XI (6).png",
          alt: "Final morning at Xanadu before departure",
          position: "center 52%",
          fit: "contain",
          maxWidthPx: 1167,
        },
      },
    ],
    accommodationsIntro:
      "Where the circuit becomes coherent. Each property is selected not only for quality, but for the role it plays in building the movement of the journey from private safari depth to a softer, more atmospheric Indian Ocean finish.",
    accommodations: [
      {
        name: "Siringit Villa",
        description:
          "This first safari property establishes the tone of the journey, setting the standard for privacy, guiding quality, and the level of control that defines the circuit.",
      images: [
        {
          src: "/journeys/the-private-circuit/SV (14).jpg",
          alt: "Private villa at Siringit in Arusha",
          position: "center 52%",
        },
        {
          src: "/journeys/the-private-circuit/SV (10).jpg",
          alt: "Suite interior at Siringit Villa",
          position: "center 50%",
        },
        {
          src: "/journeys/the-private-circuit/SV (13).jpg",
          alt: "Pool or terrace at Siringit Villa",
          position: "center 54%",
        },
      ],
    },
      {
        name: "Siringit Tarangire Camp",
        description:
          "This second safari property gives the circuit its depth. Wildlife immersion sharpens, the rhythm settles, and the journey starts to feel fully lived rather than simply arranged.",
      images: [
        {
          src: "/journeys/the-private-circuit/ST (1).png",
          alt: "Siringit Tarangire Camp at golden hour",
          position: "center 48%",
        },
        {
          src: "/journeys/the-private-circuit/ST (3).png",
          alt: "Tented suite at Siringit Tarangire Camp",
          position: "center 50%",
        },
        {
          src: "/journeys/the-private-circuit/ST (2).png",
          alt: "Lounge at Siringit Tarangire Camp",
          position: "center 50%",
        },
      ],
    },
      {
        name: "Siringit Migration Camp",
        description:
          "This chapter carries the circuit into broader Serengeti scale, adding movement and perspective while keeping privacy and service standards tightly controlled.",
      images: [
        {
          src: "/journeys/the-private-circuit/SM (19).jpg",
          alt: "Hot air balloon over the Serengeti",
          position: "center 56%",
        },
        {
          src: "/journeys/the-private-circuit/SM (3).jpg",
          alt: "Tent interior at Siringit Migration Camp",
          position: "center 50%",
        },
        {
          src: "/journeys/the-private-circuit/SM (10).jpg",
          alt: "Migration scene in the Serengeti",
          position: "center 52%",
        },
        ],
      },
      {
        name: "Siringit Serengeti Camp",
        description:
          "This final safari stay consolidates the wilderness arc, bringing the experience into a steadier rhythm before the journey releases toward the coast.",
      images: [
        {
          src: "/journeys/the-private-circuit/SS (9).jpg",
          alt: "Safari camp in the Serengeti",
          position: "center 50%",
        },
        {
          src: "/journeys/the-private-circuit/SS (1).jpg",
          alt: "Interior at Siringit Serengeti Camp",
          position: "center 50%",
        },
        {
          src: "/journeys/the-private-circuit/SS (3).jpg",
          alt: "Serengeti plains at golden hour",
          position: "center 50%",
        },
        ],
      },
      {
        name: "Xanadu Villas & Retreat",
        description:
          "This Zanzibar property releases the experience properly. It shifts the journey into warmth, sea air, and a more relaxed tempo without losing the refinement that defines the rest of the circuit.",
      images: [
        {
          src: "/journeys/the-private-circuit/XI (8).png",
          alt: "Private villa or ocean view at Xanadu Zanzibar",
          position: "center 50%",
        },
        {
          src: "/journeys/the-private-circuit/XI (4).png",
          alt: "Villa interior at Xanadu Villas & Retreat",
          position: "center 50%",
        },
        {
          src: "/journeys/the-private-circuit/XI (6).png",
          alt: "Villa terrace at Xanadu Zanzibar",
          position: "center 52%",
        },
      ],
      },
    ],
    ctaLabel: "Request Private Planning",
    ctaHeading: "Plan The Private Circuit with Mason & Wild",
    inquiryHeading: "Plan The Private Circuit with Mason & Wild",
    inquiryBody:
      "This journey is personally shaped around your pace, preferences, and travel style to create a private East Africa experience that feels polished, coherent, and intelligently controlled from first flight to final shoreline.",
    proofLabel: "Privately Designed",
    proofNote:
      "Designed for travellers who want Tanzania and Zanzibar with better routing, stronger privacy, and the confidence of knowing the whole circuit has been built properly.",
    nextJourney: {
      slug: "the-intimate",
      name: "The Intimate",
      outcome: "Intimacy",
      img: {
        src: "/journeys/the-intimate/makgadikgadi-dusk.jpg",
        alt: "Makgadikgadi landscape at dusk",
      },
    },
  },
};

export function generateStaticParams() {
  return Object.keys(JOURNEYS).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const journey = JOURNEYS[params.slug];

  if (!journey) {
    return { title: "Journey Not Found" };
  }

  return {
    title: journey.name,
    description: `${journey.identity} A private African journey through ${journey.territory}, designed for discerning LGBTQ+ travellers.`,
    alternates: {
      canonical: `${NAV_HREFS.journeys}/${journey.slug}`,
    },
    openGraph: {
      title: journey.name,
      description: `${journey.identity} A private African journey through ${journey.territory}, designed for discerning LGBTQ+ travellers.`,
      url: absoluteUrl(`${NAV_HREFS.journeys}/${journey.slug}`),
      type: "website",
      images: journey.heroImg
        ? [{ url: journey.heroImg.src, alt: journey.heroImg.alt }]
        : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: journey.name,
      description: `${journey.identity} A private African journey through ${journey.territory}, designed for discerning LGBTQ+ travellers.`,
      images: journey.heroImg ? [journey.heroImg.src] : undefined,
    },
  };
}

export default function JourneyDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const journey = JOURNEYS[params.slug];

  if (!journey) {
    notFound();
  }

  const getImageClass = (image: JourneyImage): string =>
    image.fit === "contain" ? "object-contain bg-page-subtle" : "object-cover";

  const getImageStyle = (image: JourneyImage): CSSProperties => ({
    objectPosition: image.position ?? "center",
    ...(image.fit === "contain" && image.maxWidthPx
      ? {
          maxWidth: `${image.maxWidthPx}px`,
          marginInline: "auto",
        }
      : {}),
  });

  const collageImages = journey.galleryImgs.slice(0, 3);
  const intimateCarouselExtras: JourneyImage[] =
    journey.slug === "the-intimate"
      ? [
          {
            src: "/journeys/the-intimate/makgadikgadi-meerkats.jpg",
            alt: "Meerkat encounter in the Makgadikgadi",
            position: "center 50%",
          },
          {
            src: "/journeys/the-intimate/updates/makgadikgadi-dining.jpg",
            alt: "Jack's Private Camp dining tent",
            position: "center 50%",
          },
          {
            src: "/journeys/the-intimate/updates/makgadikgadi-bushman-walk.jpg",
            alt: "Bushman walk in the Makgadikgadi",
            position: "center 52%",
          },
          {
            src: "/journeys/the-intimate/updates/delta-wild-dogs.jpg",
            alt: "Wild dogs in the Okavango Delta",
            position: "center 45%",
            fit: "contain",
            maxWidthPx: 1100,
          },
          {
            src: "/journeys/the-intimate/updates/delta-leopard.jpg",
            alt: "Leopard in the Okavango Delta",
            position: "center 45%",
          },
          {
            src: "/journeys/the-intimate/updates/delta-treehouse-suite.jpg",
            alt: "Raised suite at Duke's East",
            position: "center 45%",
          },
          {
            src: "/journeys/the-intimate/updates/delta-lilies-camp.jpg",
            alt: "Delta channels near camp",
            position: "center 55%",
          },
          {
            src: "/journeys/the-intimate/updates/delta-private-suite.jpg",
            alt: "Private suite in the Delta",
            position: "center 50%",
          },
          {
            src: "/journeys/the-intimate/updates/delta-flamingos.jpg",
            alt: "Birdlife over Delta water",
            position: "center 48%",
          },
          {
            src: "/journeys/the-intimate/updates/delta-wild-dogs-resting.jpg",
            alt: "Wild dogs resting in the Delta grass",
            position: "center 42%",
            fit: "contain",
            maxWidthPx: 1100,
          },
          {
            src: "/journeys/the-intimate/updates/delta-plunge-pool.jpg",
            alt: "Delta plunge pool at dusk",
            position: "center 55%",
          },
          {
            src: "/journeys/the-intimate/updates/delta-camp-exterior.jpg",
            alt: "Camp exterior in the Delta",
            position: "center 48%",
          },
          {
            src: "/journeys/the-intimate/updates/delta-river-deck-evening.jpg",
            alt: "Delta river deck at evening",
            position: "center 54%",
          },
          {
            src: "/journeys/the-intimate/updates/delta-elephant-tree.jpg",
            alt: "Elephant framed by Delta trees",
            position: "center 40%",
          },
          {
            src: "/journeys/the-intimate/updates/victoria-falls-pool.jpg",
            alt: "Pool view at Victoria Falls Island Lodge",
            position: "center 58%",
          },
          {
            src: "/journeys/the-intimate/updates/victoria-falls-walking-sunset.jpg",
            alt: "Sunset walk near Victoria Falls Island Lodge",
            position: "center 56%",
          },
        ]
      : [];

  const carouselImages: JourneyImage[] = [
    ...journey.galleryImgs,
    ...journey.accommodations.flatMap((accommodation) => accommodation.images),
    ...intimateCarouselExtras,
  ].filter(
    (image, index, images) => index === images.findIndex((entry) => entry.src === image.src),
  );
  let ctaHeading = journey.inquiryHeading.replace(` ${journey.name}.`, "");

  if (journey.ctaHeading) {
    ctaHeading = journey.ctaHeading;
  }

  const journeySchema = {
    "@context": "https://schema.org",
    "@type": "Trip",
    name: journey.name,
    description: journey.identity,
    url: absoluteUrl(`${NAV_HREFS.journeys}/${journey.slug}`),
    image: absoluteUrl(journey.heroImg.src),
    itinerary: {
      "@type": "ItemList",
      itemListElement: journey.flow.map((phase, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: phase.title,
        description: phase.body,
      })),
    },
    provider: {
      "@type": "Organization",
      name: "Mason & Wild",
      url: absoluteUrl("/"),
    },
    touristType: "LGBTQ+ travellers",
  };

  return (
    <>
      <JsonLd data={journeySchema} />
      <section
        className="relative min-h-svh flex flex-col justify-end pb-[clamp(52px,9vh,96px)] overflow-hidden"
        aria-labelledby="journey-name"
      >
        <div className="absolute inset-0 overflow-hidden" role="img" aria-label={journey.heroImg.alt}>
          <Image
            src={journey.heroImg.src}
            alt=""
            fill
            priority
            quality={90}
            sizes="100vw"
            className="object-cover animate-[heroZoom_20s_cubic-bezier(0.16,1,0.3,1)_forwards]"
            style={{ objectPosition: journey.heroImg.position ?? "center 40%" }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, rgba(14,12,8,0.08) 0%, rgba(14,12,8,0.0) 20%, rgba(14,12,8,0.45) 62%, rgba(14,12,8,0.85) 100%)",
            }}
            aria-hidden="true"
          />
        </div>

        <nav
          className="absolute top-[84px] left-[var(--px)] z-10 flex items-center gap-3"
          aria-label="Breadcrumb"
        >
          <Link
            href={NAV_HREFS.journeys}
            className="text-2xs tracking-wide uppercase text-white/45 hover:text-white/75 transition-colors duration"
          >
            Journeys
          </Link>
          <span className="text-white/25 text-2xs" aria-hidden="true">
            /
          </span>
          <span className="text-2xs tracking-wide uppercase text-white/45">
            {journey.name}
          </span>
        </nav>

        <div className="relative z-10 container-site">
          <div className="opacity-0 translate-y-4 animate-[fadeRise_0.9s_cubic-bezier(0.16,1,0.3,1)_0.3s_forwards]">
            <div className="flex items-center gap-5 mb-6">
              <span className="label-tag text-white/50">{journey.outcome}</span>
              <span className="w-px h-3 bg-white/25" aria-hidden="true" />
              <span className="label-tag text-white/50">{journey.territory}</span>
              <span className="w-px h-3 bg-white/25" aria-hidden="true" />
              <span className="label-tag text-white/50">{journey.price}</span>
            </div>
          </div>

          <h1
            className="font-serif font-light text-display-3xl text-white mb-6 tracking-[-0.022em] opacity-0 translate-y-4 animate-[fadeRise_0.9s_cubic-bezier(0.16,1,0.3,1)_0.48s_forwards]"
            id="journey-name"
          >
            <em>{journey.name}</em>
          </h1>

          <p className="font-serif font-light italic text-xl text-white/65 max-w-[520px] leading-relaxed opacity-0 translate-y-4 animate-[fadeRise_0.9s_cubic-bezier(0.16,1,0.3,1)_0.64s_forwards]">
            {journey.identity}
          </p>
        </div>
      </section>

      <section className="border-b border-stone-200" aria-label="Journey details">
        <div className="container-site">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-px bg-stone-200 border-x border-stone-200">
            {journey.metadataItems.map((item, index) => (
              <Reveal key={item.label} className="h-full" delay={(index % 3) as 0 | 1 | 2 | 3 | 4}>
                <div className="bg-page px-8 py-10 h-full">
                  <p className="label-tag mb-4">{item.label}</p>
                  <p className="font-serif font-light italic text-base text-stone-800 leading-snug mb-4">
                    {item.title}
                  </p>
                  <p className="text-sm font-light text-stone-500 leading-relaxed">
                    {item.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="narrative-heading">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-[clamp(48px,7vw,96px)]">
            <div className="lg:sticky lg:top-[100px] lg:self-start">
              <Reveal>
                <p className="label-tag mb-6">{journey.narrativeLabel ?? "Journey Identity"}</p>
                <p
                  className="font-serif font-light text-display-sm text-stone-800 leading-[1.45] tracking-[-0.01em] mb-10"
                  id="narrative-heading"
                >
                  {journey.lead}
                </p>
                <div className="border-t border-stone-200 pt-8">
                  <p className="label-tag text-forest mb-3">Vetted &amp; Verified</p>
                  {journey.vettedImg ? (
                    <div className="max-w-[640px]">
                      <div className="mb-4 overflow-hidden">
                        <Image
                          src={journey.vettedImg.src}
                          alt={journey.vettedImg.alt}
                          width={900}
                          height={720}
                          quality={95}
                          className={`w-full aspect-[6/5] ${getImageClass(journey.vettedImg)} object-center`}
                          style={getImageStyle(journey.vettedImg)}
                          loading="lazy"
                        />
                      </div>
                      {journey.vettedLocation && (
                        <p className="label-tag mb-4">{journey.vettedLocation}</p>
                      )}
                      <p className="text-sm font-light text-stone-500 leading-relaxed">
                        {journey.vettedNote}
                      </p>
                    </div>
                  ) : (
                    <>
                      {journey.vettedLocation && (
                        <p className="label-tag mb-3">{journey.vettedLocation}</p>
                      )}
                      <p className="text-sm font-light text-stone-500 leading-relaxed">
                        {journey.vettedNote}
                      </p>
                    </>
                  )}
                </div>
              </Reveal>
            </div>

            <div className="flex flex-col gap-6">
              {journey.body.map((paragraph, index) => (
                <Reveal key={index} delay={(index % 3) as 0 | 1 | 2 | 3 | 4}>
                  <p
                    className={
                      index === 0
                        ? "font-serif font-light text-display-sm text-stone-800 leading-[1.45] tracking-[-0.01em]"
                        : "text-sm font-light text-stone-500 leading-relaxed"
                    }
                  >
                    {paragraph}
                  </p>
                </Reveal>
              ))}

              {journey.narrativePoints?.length ? (
                <Reveal delay={1}>
                  <div className="mt-6 border-t border-stone-200 pt-8">
                    <p className="label-tag mb-6">
                      {journey.narrativePointsLabel ?? "Further Notes"}
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8">
                      {journey.narrativePoints.map((point) => (
                        <div key={point.key}>
                          <h3 className="font-serif font-light text-[clamp(1.15rem,1.45vw,1.45rem)] text-stone-900 leading-[1.35] tracking-[-0.012em] mb-3">
                            {point.title}
                          </h3>
                          <p className="text-sm font-light text-stone-500 leading-relaxed">
                            {point.body}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </Reveal>
              ) : null}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-page">
        <div className="px-[24px] pb-10 md:px-[48px] md:pb-16">
          <Reveal>
            <div className="grid min-h-0 grid-cols-1 gap-[10px] md:min-h-[540px] md:grid-cols-[1.15fr_0.85fr]">
              <div className="overflow-hidden md:h-full">
                <Image
                  src={collageImages[0].src}
                  alt={collageImages[0].alt}
                  width={1200}
                  height={1400}
                  quality={95}
                  className={`h-[320px] w-full ${getImageClass(collageImages[0])} object-center transition-transform duration-[900ms] ease-out hover:scale-[1.03] md:h-full`}
                  style={getImageStyle(collageImages[0])}
                  priority
                />
              </div>

              <div className="grid h-[200px] grid-cols-2 gap-[10px] md:h-full md:grid-cols-1 md:grid-rows-2">
                {collageImages.slice(1).map((image) => (
                  <div key={image.alt} className="overflow-hidden">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={700}
                      height={520}
                      quality={95}
                      className={`h-full w-full ${getImageClass(image)} object-center transition-transform duration-[900ms] ease-out hover:scale-[1.03]`}
                      style={getImageStyle(image)}
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal>
          <JourneyCarousel images={carouselImages} />
        </Reveal>
      </section>

      <JourneySummaryPanel
        flowIntro={journey.flowIntro}
        flow={journey.flow}
        flowImages={carouselImages}
        definesIntro={journey.pillarsIntro}
        defines={journey.pillars}
        includesIntro={journey.includesIntro}
        includesItems={journey.includesItems}
        summaryTabLabel={journey.summaryTabLabel}
        definesTabLabel={journey.pillarsTabLabel}
        summaryEyebrow={journey.summaryEyebrow}
        summaryHeading={journey.summaryHeading}
        summaryEmphasis={journey.summaryEmphasis}
        definesEyebrow={journey.pillarsEyebrow}
        definesHeading={journey.pillarsHeading}
        definesEmphasis={journey.pillarsEmphasis}
      />

      <section className="section border-b border-stone-200" aria-labelledby="accommodation-heading">
        <div className="container-site">
          <Reveal>
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_4fr] gap-[clamp(40px,6vw,80px)] items-start mb-14">
              <div>
                <p className="label-tag mb-4">Accommodation</p>
                <h2
                  className="font-serif font-light text-display-md text-stone-900"
                  id="accommodation-heading"
                >
                  Accommodation
                </h2>
                <p className="font-serif font-light italic text-display-sm text-stone-900 mt-3">
                  Where privacy takes
                  <br />
                  <em>form.</em>
                </p>
              </div>
              <p className="text-sm font-light text-stone-500 leading-relaxed max-w-[560px] self-end">
                {journey.accommodationsIntro}
              </p>
            </div>
          </Reveal>

          <div className="flex flex-col">
            {journey.accommodations.map((accommodation, index) => (
              <div
                key={accommodation.name}
                className={[
                  "grid grid-cols-1 lg:grid-cols-[1.15fr_1.85fr] gap-[clamp(36px,6vw,72px)] py-[clamp(40px,5vw,64px)]",
                  index === 0 ? "" : "border-t border-stone-200",
                ].join(" ")}
              >
                <Reveal delay={(index % 3) as 0 | 1 | 2 | 3 | 4}>
                  <div className="lg:pr-8">
                    <p className="label-tag mb-4">{accommodation.location ?? "Accommodation"}</p>
                    <h3 className="font-serif font-light text-display-sm text-stone-900 mb-6 tracking-[-0.012em]">
                      <em>{accommodation.name}</em>
                    </h3>
                    {accommodation.stay && (
                      <p className="label-tag text-stone-400 mb-5">{accommodation.stay}</p>
                    )}
                    <p className="text-sm font-light text-stone-500 leading-relaxed">
                      {accommodation.description}
                    </p>
                  </div>
                </Reveal>

                <Reveal delay={((index + 1) % 3) as 0 | 1 | 2 | 3 | 4}>
                  <div className="grid min-h-0 grid-cols-1 gap-[10px] md:min-h-[520px] md:grid-cols-[minmax(0,1fr)_292px]">
                    <div className="overflow-hidden md:h-full">
                      <Image
                        src={accommodation.images[0].src}
                        alt={accommodation.images[0].alt}
                        width={900}
                        height={1125}
                        quality={95}
                        className={`h-[360px] w-full ${getImageClass(accommodation.images[0])} object-center transition-transform duration-[900ms] ease-out hover:scale-[1.03] md:h-full`}
                        style={getImageStyle(accommodation.images[0])}
                        loading="lazy"
                      />
                    </div>
                    <div className="grid h-[220px] grid-cols-2 gap-[10px] md:h-full md:grid-cols-1 md:grid-rows-2">
                      {accommodation.images.slice(1).map((image) => (
                        <div key={image.alt} className="overflow-hidden">
                          <Image
                            src={image.src}
                            alt={image.alt}
                            width={600}
                            height={450}
                            quality={95}
                            className={`h-full w-full ${getImageClass(image)} object-center transition-transform duration-[900ms] ease-out hover:scale-[1.03]`}
                            style={getImageStyle(image)}
                            loading="lazy"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </Reveal>
              </div>
            ))}
          </div>
        </div>
      </section>

      {journey.inclusions && (
        <section className="section border-b border-stone-200" aria-labelledby="inclusions-heading">
          <div className="container-site">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-[clamp(40px,6vw,80px)] items-start">
              <Reveal>
                <div>
                  <p className="label-tag mb-4">{journey.inclusions.label}</p>
                  <h2
                    className="font-serif font-light text-display-md text-stone-900"
                    id="inclusions-heading"
                  >
                    {journey.inclusions.title}
                  </h2>
                </div>
              </Reveal>

              <div className="border-t border-stone-200">
                {journey.inclusions.items.map((item, index) => (
                  <Reveal key={item} delay={(index % 3) as 0 | 1 | 2 | 3 | 4}>
                    <div className="grid grid-cols-[20px_1fr] gap-4 border-b border-stone-200 py-5">
                      <span className="text-stone-300" aria-hidden="true">
                        +
                      </span>
                      <p className="text-sm font-light text-stone-500 leading-relaxed">
                        {item}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {journey.enhancements && (
        <section
          className="section border-b border-stone-200"
          aria-labelledby="enhancements-heading"
        >
          <div className="container-site">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-[clamp(40px,6vw,80px)] items-start">
              <Reveal>
                <div>
                  <p className="label-tag mb-4">{journey.enhancements.label}</p>
                  <h2
                    className="font-serif font-light text-display-md text-stone-900"
                    id="enhancements-heading"
                  >
                    {journey.enhancements.title}
                  </h2>
                </div>
              </Reveal>

              <div className="border-t border-stone-200">
                {journey.enhancements.items.map((item, index) => (
                  <Reveal key={item} delay={(index % 3) as 0 | 1 | 2 | 3 | 4}>
                    <div className="grid grid-cols-[20px_1fr] gap-4 border-b border-stone-200 py-5">
                      <span className="text-stone-300" aria-hidden="true">
                        +
                      </span>
                      <p className="text-sm font-light text-stone-500 leading-relaxed">
                        {item}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      <section
        className="section border-b border-stone-200"
        aria-labelledby="journey-cta-heading"
      >
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[clamp(48px,7vw,96px)] items-center">
            <Reveal>
              <div>
                <p className="label-tag mb-6">{journey.ctaLabel ?? "Begin This Journey"}</p>
                <h2
                  className="font-serif font-light text-display-xl text-stone-900 mb-6 tracking-[-0.018em]"
                  id="journey-cta-heading"
                >
                  {ctaHeading}
                  {!journey.ctaHeading && !journey.ctaEmphasis ? (
                    <>
                      <br />
                      <em>{journey.name}.</em>
                    </>
                  ) : null}
                  {journey.ctaEmphasis ? (
                    <>
                      <br />
                      <em>{journey.ctaEmphasis}</em>
                    </>
                  ) : null}
                </h2>
                <p className="text-sm font-light text-stone-500 leading-relaxed max-w-[440px]">
                  {journey.inquiryBody}
                </p>
              </div>
            </Reveal>

            <Reveal delay={1}>
              <div className="lg:pl-16 lg:border-l lg:border-stone-200">
                <div className="border-t border-stone-200 pt-8 mb-10">
                  <p className="label-tag text-forest mb-3">{journey.proofLabel}</p>
                  <p className="text-sm font-light text-stone-500 leading-relaxed">
                    {journey.proofNote}
                  </p>
                </div>
                <div className="flex flex-col items-start gap-5">
                  <Button href={NAV_HREFS.inquire} variant="primary">
                    {journey.slug === "the-intimate" ||
                    journey.slug === "the-untamed" ||
                    journey.slug === "the-romantic" ||
                    journey.slug === "the-classic" ||
                    journey.slug === "the-adventure" ||
                    journey.slug === "the-private-circuit"
                      ? "Request Private Planning"
                      : CTA.requestPrivateAccess}
                  </Button>
                  <Button href={NAV_HREFS.journeys} variant="ghost" arrow={false}>
                    {CTA.viewAllJourneys}
                  </Button>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {journey.nextJourney && (
        <section aria-label="Next journey">
          <Reveal>
            <Link
              href={`${NAV_HREFS.journeys}/${journey.nextJourney.slug}`}
              className="group grid grid-cols-1 md:grid-cols-2 hover:bg-page-subtle transition-colors duration"
            >
              <div className="overflow-hidden">
                <Image
                  src={journey.nextJourney.img.src}
                  alt={journey.nextJourney.img.alt}
                  width={800}
                  height={600}
                  quality={95}
                  className={`w-full aspect-[4/3] ${getImageClass(journey.nextJourney.img)} object-center transition-transform duration-[900ms] ease-out group-hover:scale-[1.025]`}
                  style={getImageStyle(journey.nextJourney.img)}
                  loading="lazy"
                />
              </div>

              <div className="flex flex-col justify-center px-[clamp(36px,6vw,80px)] py-[clamp(48px,6vw,80px)]">
                <p className="label-tag mb-5">Next Journey</p>
                <p className="label-tag text-stone-400 mb-4">
                  {journey.nextJourney.outcome}
                </p>
                <p className="font-serif font-light text-display-xl text-stone-900 tracking-[-0.018em] mb-6">
                  <em>{journey.nextJourney.name}</em>
                </p>
                <span className="inline-flex items-center gap-3 text-2xs font-normal tracking-wide uppercase text-stone-500 border-b border-stone-300 group-hover:text-stone-900 group-hover:border-stone-900 pb-[2px] transition-colors duration self-start">
                  Explore This Journey
                  <span aria-hidden="true">&rarr;</span>
                </span>
              </div>
            </Link>
          </Reveal>
        </section>
      )}
    </>
  );
}


