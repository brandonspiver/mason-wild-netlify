import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { JourneyCarousel } from "@/components/journey/JourneyCarousel";
import { NAV_HREFS, CTA } from "@/lib/constants";

type JourneyImage = {
  readonly src: string;
  readonly alt: string;
  readonly position?: string;
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

type JourneyFlowPhase = {
  readonly number: string;
  readonly period: string;
  readonly title: string;
  readonly body: string;
};

type JourneyAccommodation = {
  readonly name: string;
  readonly description: string;
  readonly images: readonly [JourneyImage, JourneyImage, JourneyImage];
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
  readonly vettedNote: string;
  readonly vettedLocation?: string;
  readonly vettedImg?: JourneyImage;
  readonly body: readonly string[];
  readonly heroImg: JourneyImage;
  readonly galleryImgs: readonly JourneyImage[];
  readonly pillarsIntro: string;
  readonly pillars: readonly JourneyPillar[];
  readonly flowIntro: string;
  readonly flow: readonly JourneyFlowPhase[];
  readonly accommodationsIntro: string;
  readonly accommodations: readonly JourneyAccommodation[];
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
    price: "8 NIGHTS FROM $18,000 PER PERSON",
    name: "The Intimate",
    identity: "Designed for those who want privacy without performance.",
    metadataItems: [
      {
        label: "Length",
        title: "8 nights",
        body: "Three contrasting landscapes, one intimate progression from desert stillness to Delta immersion to a polished river finish.",
      },
      {
        label: "Designed For",
        title: "Private groups",
        body: "Best for four guests who value privacy, atmosphere, emotional pacing, and a journey that feels deeply personal from beginning to end.",
      },
      {
        label: "Style",
        title: "Privately guided",
        body: "No shared game drives, no crowded logistics, and no need to move at anyone else's rhythm unless you want to.",
      },
      {
        label: "Where",
        title: "Botswana & Victoria Falls",
        body: "Jack's Private Camp, Duke's East, and Victoria Falls Island Lodge, sequenced to become softer, richer, and more celebratory as the journey unfolds.",
      },
      {
        label: "Flexibility",
        title: "Tailored around you",
        body: "The structure is considered, but the pace, daily emphasis, and finer details remain shaped around your preferences.",
      },
    ],
    lead: "Some journeys are built around spectacle. This one is built around privacy.",
    vettedNote:
      "Personally selected by Zannon James through firsthand experience. Victoria Falls River Lodge remains an immediate go to at the Falls after an exceptional personal stay there, chosen for its setting, service, and polished sense of retreat. Extensive travel through the Okavango Delta and other key game reserves gives full confidence in the wildlife experience offered here, from predator sightings to exceptional birdlife and everything in between. The mokoro experience is one of the most special elements of the Delta, offering a quieter, more intimate way to encounter wildlife from the water.",
    vettedLocation: "Victoria Falls River Lodge, Zimbabwe",
    vettedImg: {
      src: "/journeys/the-romantic/vetted-monwana.png",
      alt: "Monwana safari setting in Greater Kruger",
      position: "center 50%",
    },
    body: [
      "It begins in the stark beauty of the Makgadikgadi, where the space feels almost lunar and the silence has weight. From there, it moves into the Okavango Delta, where water, reeds, and wildlife create a softer, more immersive rhythm. It ends above the Zambezi at Victoria Falls, where the pace slows again and the journey gives way to celebration, stillness, and release.",
      "The Intimate is a privately guided Botswana and Victoria Falls journey for guests who want solitude, sensuality, and the kind of wilderness that feels entirely their own.",
      "At Jack's Private Camp, the landscape is expansive, cinematic, and unlike anywhere else in southern Africa. At Duke's East, the experience deepens into the layered beauty of the Delta, with slower water-based exploration, richer game viewing, and one night spent fly-camping beneath the open sky. At Victoria Falls Island Lodge, the final nights soften into a more polished rhythm of river, privacy, and celebration.",
      "This is not a trip built around volume. It is built around how contrast changes a journey, and around the practical confidence that every handoff, transfer, and shift in pace has already been considered properly.",
      "The camps were not chosen because they photograph well in isolation. They were chosen because they work together emotionally and operationally to create an experience that feels intimate, progressive, and complete.",
      "For LGBTQ+ travellers in particular, that confidence matters. Every property and partner included here has been selected for how well it delivers privacy, ease, and reassurance in practice, not just on paper.",
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
      "Everything included here has been chosen to protect the feeling of the journey: privacy in the desert, intimacy in the Delta, and a softer, more celebratory rhythm at the river's edge.",
    pillars: [
      {
        key: "guiding",
        title: "Private Guiding Throughout",
        body: "A privately guided rhythm across the journey, so your days move according to your pace, your interests, and the quality of each moment rather than a shared schedule.",
      },
      {
        key: "contrast",
        title: "Desert, Delta & River Contrast",
        body: "This itinerary has been built as a progression rather than a circuit. The Makgadikgadi brings scale and stillness. The Delta brings depth and immersion. Victoria Falls brings softness, river energy, and a polished close.",
      },
      {
        key: "jacks",
        title: "Signature Moments at Jack's",
        body: "Meerkat encounters, Bushman walks, and seasonal quad biking are layered with a helicopter flight, horseback riding, and a 90-minute spa treatment, giving the opening chapter both cinematic scale and sensual texture.",
      },
      {
        key: "delta",
        title: "A Deeper Delta Chapter",
        body: "At Duke's East, game drives, boating, mokoro excursions, and fishing are paired with a one-night fly-camp and a 90-minute spa treatment, creating a Delta stay that feels both elemental and deeply considered.",
      },
      {
        key: "falls",
        title: "A Beautiful Ending at the Falls",
        body: "Two nights at Victoria Falls Island Lodge in the Island Treehouse Suite bring a gentler rhythm to the journey, with river-based activities, game viewing, and time at the Falls without losing the sense of privacy built earlier in the trip.",
      },
      {
        key: "support",
        title: "Direct Mason & Wild Support",
        body: "A dedicated Mason & Wild specialist available discreetly throughout, with preferences, adjustments, and finer requests managed personally rather than passed around.",
      },
    ],
    flowIntro:
      "The route and sequencing are intentional. Within that structure, each chapter still has room to breathe, with the pace and emphasis shaped around your group, your guide, and the landscape itself.",
    flow: [
      {
        number: "01",
        period: "Days 1-3",
        title: "Into the Silence",
        body: "Begin at Jack's Private Camp in the Makgadikgadi, where the landscape feels almost otherworldly in its scale and stillness. Private guiding, meerkat encounters, Bushman walks, and seasonal quad biking create a strong sense of place from the outset, while a helicopter flight, horseback riding, and a 90-minute spa treatment add a softer, more sensual rhythm to the opening days.",
      },
      {
        number: "02",
        period: "Days 4-6",
        title: "Deeper into the Delta",
        body: "Continue to Duke's East, where the experience becomes richer, slower, and more immersive. Water-based exploration, game drives, and the quieter texture of the Delta shape this chapter, while one night of fly-camping under the stars becomes the most intimate and elemental moment of the journey.",
      },
      {
        number: "03",
        period: "Days 7-8",
        title: "The River & The Falls",
        body: "End at Victoria Falls Island Lodge in the Island Treehouse Suite, where the final chapter unfolds at a gentler pace. River cruises, game activities, and time at the Falls bring a more celebratory energy, while the setting itself offers privacy, atmosphere, and a strong sense of conclusion.",
      },
      {
        number: "04",
        period: "Departure",
        title: "Leave Lightly",
        body: "A final morning at your own pace before onward departure. By this stage, the journey should feel seamless, fully held, and entirely removed from the logistics of ordinary travel.",
      },
    ],
    accommodationsIntro:
      "Each property has been chosen not as a standalone highlight, but for how it holds a different chapter of the journey. The feeling shifts deliberately from scale and silence, to immersion and texture, to a softer, more polished finish on the river.",
    accommodations: [
      {
        name: "Jack's Private Camp",
        description:
          "Jack's Private Camp is the opening gesture of the journey: dramatic, isolated, and emotionally spacious. For this client, it works because privacy here does not feel hidden. It feels expansive. The Makgadikgadi brings a rare kind of stillness, and the camp's private format allows the first days to unfold without performance, noise, or social demand. This is where the trip steps away from ordinary life and into something far more cinematic, sensual, and self-contained.",
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
          "Duke's East changes the emotional register of the journey. After the openness of the salt pans, the Delta feels richer, closer, and more enveloping. For this client archetype, that contrast matters. The camp offers depth rather than spectacle, with water, reeds, wildlife, and slower movement creating a more intimate rhythm. It is the point where the journey becomes immersive and tactile, and where privacy feels less like distance and more like complete absorption in place.",
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
          "Victoria Falls Island Lodge is the soft landing. After the emotional depth of the Delta, it introduces a more polished and celebratory kind of privacy without losing the intimacy established earlier in the journey. For this client, it works as a proper closing chapter: river-facing, atmospheric, and quietly indulgent. The pace relaxes, the setting becomes more refined, and the experience ends with a sense of ease rather than exhaustion.",
        images: [
          {
            src: "/journeys/the-intimate/victoria-falls-forest-path.jpg",
            alt: "River view at Victoria Falls Island Lodge",
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
          },
        ],
      },
    ],
    inquiryHeading: "Start planning The Intimate.",
    inquiryBody:
      "Share a few details and a Mason & Wild specialist will come back to you personally with next steps, availability guidance, and the refinements needed to shape the journey around you.",
    proofLabel: "Privately Designed",
    proofNote:
      "Personally designed by Zannon James, with each property selected for privacy, atmosphere, operational excellence, and the ability to deliver a luxury experience that feels deeply personal rather than performative. Every partner included has been chosen for how well it delivers ease, confidence, and intimacy in practice, not just on paper.",
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
    price: "9 NIGHTS FROM $17,000 PER PERSON",
    name: "The Untamed",
    identity: "Designed for those who want to feel the landscape, not perform it.",
    metadataItems: [
      {
        label: "Length",
        title: "9 nights",
        body: "One polished arrival, one restorative pause, and two deeper bush chapters that become quieter and more elemental as the journey unfolds.",
      },
      {
        label: "Designed For",
        title: "Couples",
        body: "Best for travellers who value privacy, immersion, and the kind of emotional pacing that allows the landscape to do the work.",
      },
      {
        label: "Style",
        title: "Privately guided",
        body: "No shared safari vehicle, no crowded timings, and no need to move through the bush according to anyone else's appetite for volume.",
      },
      {
        label: "Where",
        title: "Zambia",
        body: "Lusaka, KuKaya, Zungulila, and Chindeni, sequenced to become wilder, quieter, and more immersive as the journey deepens.",
      },
      {
        label: "Flexibility",
        title: "Tailored around you",
        body: "The structure is deliberate, but the daily rhythm, pace, and guiding emphasis remain shaped around your preferences.",
      },
    ],
    lead: "There is a particular stillness to Zambia when it is done well.",
    vettedNote:
      "Personally selected by Zannon James through firsthand experience. The South Luangwa Camps are chosen from deep personal knowledge of South Luangwa, shaped by more than a month spent in the bush here. That firsthand time in the region created a strong understanding of its wildlife, its rhythm, and the dramatic beauty of its changing landscapes, from waterways and riverbanks to open plains and woodland. Combined with outstanding game viewing and a deep sense of immersion, it is this layered, ever-shifting setting that makes South Luangwa one of the most compelling safari experiences in Africa.",
    vettedLocation: "South Luangwa National Park, Zambia",
    vettedImg: {
      src: "/journeys/the-untamed/vetted-south-luangwa.png",
      alt: "South Luangwa National Park in Zambia",
      position: "center 50%",
    },
    body: [
      "The Untamed is a privately guided Zambia journey for guests who want privacy, immersion, and a more elemental experience of safari without sacrificing comfort or coherence.",
      "It begins with a polished arrival in Lusaka, softens into the restorative pace of KuKaya, then deepens into South Luangwa through Zungulila and Chindeni, where the days become quieter, wilder, and more tactile.",
      "This is not a journey built around quantity. It is built around rhythm: calm on arrival, exhale in the middle, then a gradual return to the more instinctive pace of the bush.",
      "Each property has been chosen for how it works in sequence rather than in isolation. The transitions are deliberate, the atmosphere shifts chapter by chapter, and the final effect is one of immersion rather than movement.",
      "For LGBTQ+ travellers in particular, that confidence matters. Every partner included here has been selected for discretion, operational ease, and the practical reassurance that allows the journey to feel unguarded.",
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
      "Everything included here has been chosen to protect the feeling of the journey: a polished arrival, restorative pause, and then a more instinctive rhythm in the bush.",
    pillars: [
      {
        key: "guiding",
        title: "Private Guiding Throughout",
        body: "A privately guided rhythm across the journey, allowing each day to move according to conditions, curiosity, and the natural pace of the landscape rather than a shared programme.",
      },
      {
        key: "arrival",
        title: "A Calm Beginning",
        body: "A measured arrival in Lusaka creates a cleaner transition into the journey, allowing the trip to begin with composure rather than logistics.",
      },
      {
        key: "restorative",
        title: "Restorative Time Built In",
        body: "KuKaya introduces space to reset properly before the safari deepens, bringing balance and softness before the more elemental chapters that follow.",
      },
      {
        key: "south-luangwa",
        title: "A Deeper Bush Chapter",
        body: "Zungulila and Chindeni create the stronger emotional core of the journey, with slower days, closer observation, and a far more immersive relationship with the bush.",
      },
      {
        key: "sequencing",
        title: "Sequenced with Intention",
        body: "This is not a circuit. Each stop has been placed to alter the emotional temperature of the journey, so the experience becomes quieter and more meaningful over time.",
      },
      {
        key: "support",
        title: "Direct Mason & Wild Support",
        body: "A dedicated Mason & Wild specialist remains available throughout, handling refinements, timing shifts, and requests personally rather than passing them into a system.",
      },
    ],
    flowIntro:
      "The route and sequencing are deliberate. Within that structure, each day still has room to breathe, with the pace shaped around your guide, your appetite, and the bush itself.",
    flow: [
      {
        number: "01",
        period: "Days 1-2",
        title: "Arrive Softly",
        body: "Begin in Lusaka with a polished arrival and time to exhale before moving further in. The journey starts quietly and without haste.",
      },
      {
        number: "02",
        period: "Days 3-4",
        title: "Reset the Rhythm",
        body: "At KuKaya, the pace softens. This chapter is designed for recovery, privacy, and the feeling of ordinary life receding properly before safari begins in earnest.",
      },
      {
        number: "03",
        period: "Days 5-7",
        title: "Go Deeper",
        body: "Move into South Luangwa, where the landscape becomes more elemental and the rhythm more instinctive. Guiding deepens, and the journey starts to feel less curated and more lived.",
      },
      {
        number: "04",
        period: "Days 8-9",
        title: "Leave Changed",
        body: "End in a chapter of quieter immersion, where the wild feels closer and the pace more resolved. By departure, the journey should feel coherent, held, and complete.",
      },
    ],
    accommodationsIntro:
      "Each property has been chosen not as a standalone moment, but for how it changes the emotional register of the journey from polished arrival to deeper immersion.",
    accommodations: [
      {
        name: "Latitude 15",
        description:
          "Latitude 15 creates the first exhale. It brings composure, design, and a sense of arrival that allows the trip to begin beautifully rather than abruptly.",
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
          "KuKaya changes the pace. It introduces softness, privacy, and restoration before the deeper bush chapters, allowing the journey to settle into itself.",
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
          "These camps form the emotional centre of the journey. The guiding deepens, the landscape grows quieter, and the experience becomes more tactile, instinctive, and absorbing.",
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
    inquiryHeading: "Start planning The Untamed.",
    inquiryBody:
      "Share a few details and a Mason & Wild specialist will come back to you personally with next steps, availability guidance, and the refinements needed to shape the journey around you.",
    proofLabel: "Privately Designed",
    proofNote:
      "Personally designed by Zannon James after time spent on the ground in Zambia, with each property selected for guiding quality, emotional fit, and the ability to deliver immersion without friction.",
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
    price: "14 NIGHTS FROM $20,000 PER PERSON",
    name: "The Romantic",
    identity:
      "Designed for those who want contrast, privacy, and a journey that moves with quiet confidence.",
    metadataItems: [
      {
        label: "Length",
        title: "14 nights",
        body: "A layered progression from Cape Town and Franschhoek to Greater Kruger and Benguerra Island, shaped around style, immersion, and a softer barefoot finish.",
      },
      {
        label: "Designed For",
        title: "Private groups",
        body: "Best for four guests who value privacy, emotional pacing, beautiful detail, and a journey that feels personally composed rather than overfilled.",
      },
      {
        label: "Style",
        title: "Privately guided",
        body: "Privately arranged throughout, with space to move at your own rhythm and experience each place without the texture of shared travel.",
      },
      {
        label: "Where",
        title: "South Africa & Mozambique",
        body: "Mount Nelson Hotel, Akademie Street, Monwana, and Benguerra Island, sequenced to feel social, then slower, then wilder, then entirely soft.",
      },
      {
        label: "Flexibility",
        title: "Tailored around you",
        body: "The route is considered, but the pace, daily emphasis, and finer details remain shaped around your preferences.",
      },
    ],
    lead: "Some journeys are built around seeing as much as possible. This one is built around knowing where each place should sit.",
    vettedNote:
      "Personally selected by Zannon James through firsthand experience. Monwana was recently experienced on safari and left a lasting impression for all the right reasons, from hospitality, food, suite design and everything else. The guiding was the strongest I have ever experienced, marked by rare instinct, deep knowledge, and an effortless ability to make every sighting feel meaningful. It is chosen not only for the quality of the wildlife experience, but for the way it balances intimacy, polish, and a true sense of place in the bush.",
    vettedLocation: "Victoria Falls River Lodge, Zimbabwe",
    vettedImg: {
      src: "/journeys/the-romantic/vetted-victoria-falls.png",
      alt: "Victoria Falls River Lodge in Zimbabwe",
      position: "center 50%",
    },
    body: [
      "It begins in Cape Town, where the mood is social, elegant, and quietly cinematic. From there, it softens into Franschhoek, where the pace slows and the focus shifts to atmosphere, food, wine, and the luxury of not needing to do too much. Greater Kruger then changes the register completely, drawing the journey into something deeper, wilder, and more immersive. It ends on Benguerra Island, where everything loosens again into light, salt air, privacy, and release.",
      "The Romantic is a privately guided South Africa and Mozambique journey for guests who want contrast, sensuality, and a style of travel that feels fully held from beginning to end.",
      "It opens at Mount Nelson, where Cape Town begins with elegance, perspective, and a level of familiarity that goes beyond standard luxury product knowledge. From there, Franschhoek shifts the mood into something softer and more inward at Akademie Street, where village atmosphere, food, wine, and design bring a quieter kind of pleasure. At Monwana, the journey deepens into the richer rhythm of Greater Kruger, where safari becomes immersive, instinctive, and properly absorbing. Benguerra Island then releases everything into sea air, marine beauty, and a final stretch of privacy that feels both restorative and complete.",
      "This is not a trip built around volume. It is built around progression, and around the confidence that comes from knowing not only what photographs well, but what actually works emotionally and operationally in sequence.",
      "These properties were not chosen as isolated highlights. They were chosen because they speak to one another, creating a journey that feels intimate, contrast-led, and personally composed.",
      "For LGBTQ+ travellers in particular, that confidence matters. Every property and partner included here has been selected for how well it delivers privacy, ease, and reassurance in practice, not just on paper.",
    ],
    heroImg: {
      src: "/journeys/the-romantic/BBL (12).jpg",
      alt: "Benguerra Island setting in Mozambique",
      position: "center 50%",
    },
    galleryImgs: [
      {
        src: "/journeys/the-romantic/MN 2 .png",
        alt: "Mount Nelson Hotel in Cape Town",
        position: "center 50%",
      },
      {
        src: "/journeys/the-romantic/AS 4.png",
        alt: "Vineyard setting in Franschhoek",
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
      "Everything included here has been chosen to protect the feeling of the journey: style and ease in Cape Town, softness in Franschhoek, depth on safari, and a beautifully relaxed finish in Mozambique.",
    pillars: [
      {
        key: "guiding",
        title: "Private Guiding Throughout",
        body: "A privately arranged rhythm across the journey, so each day moves according to your pace, your interests, and the quality of each moment rather than a shared schedule.",
      },
      {
        key: "contrast",
        title: "City, Vineyard, Safari & Sea Contrast",
        body: "This itinerary has been built as a progression rather than a circuit. Cape Town brings energy and style. Franschhoek brings calm and refinement. Greater Kruger brings depth and immersion. Benguerra Island brings softness, space, and a polished final release.",
      },
      {
        key: "cape-town",
        title: "A Stylish Cape Town Opening",
        body: "Four nights at Mount Nelson Hotel create space for the city to unfold properly, with private touring, standout dining, and a rhythm that feels elegant, social, and completely at ease.",
      },
      {
        key: "winelands",
        title: "A Slower Winelands Chapter",
        body: "Two nights at Akademie Street bring a quieter kind of luxury to the journey, with time for village atmosphere, exceptional food and wine, and the softer pace that makes the transition inland feel intentional.",
      },
      {
        key: "safari",
        title: "A Deeper Safari Core",
        body: "Four nights at Monwana allow the safari chapter to breathe properly, with game drives, immersion in the Greater Kruger landscape, and the kind of continuity that turns wildlife viewing into something more layered and intuitive.",
      },
      {
        key: "island",
        title: "A Barefoot Island Finish",
        body: "Four nights on Benguerra Island bring the journey to a softer close, with marine experiences, ocean air, beautiful privacy, and the feeling of ending somewhere that knows how to let a trip exhale.",
      },
      {
        key: "support",
        title: "Direct Mason & Wild Support",
        body: "A dedicated Mason & Wild specialist available discreetly throughout, with preferences, adjustments, and finer requests managed personally rather than passed around.",
      },
    ],
    flowIntro:
      "The route and sequencing are intentional. Within that structure, each chapter still has room to breathe, with the pace and emphasis shaped around your group, your guide, and the mood of the journey itself.",
    flow: [
      {
        number: "01",
        period: "Days 1-4",
        title: "Cape Town, Properly",
        body: "Begin at Mount Nelson, where Cape Town opens in a way that feels both elegant and deeply assured. Arrival settles into dinner at Amura at Mount Nelson, followed by a city chapter shaped around private touring, Table Mountain, Kloof Street House, Cafe Manhattan, Boulders Beach, the drive back via Chapman's Peak, lunch at Mantra Cafe, a 5:00 PM helicopter flight from the V&A Waterfront, a private champagne sunset yacht cruise, dinner at Marble, and a final free day with private guide time for shopping, beaching, art galleries, and dinner at The Wiggle Room. It is a stylish opening, but never an overworked one.",
      },
      {
        number: "02",
        period: "Days 5-6",
        title: "Into the Winelands",
        body: "Continue to Akademie Street in Franschhoek, where the pace slows and the focus shifts to refinement, atmosphere, and a more intimate kind of luxury. This chapter is designed as a soft interlude of village ease, beautiful food and wine, and the feeling of being somewhere chosen with real design and emotional intelligence.",
      },
      {
        number: "03",
        period: "Days 7-10",
        title: "Safari with Depth",
        body: "At Monwana, the journey deepens into the immersive rhythm of Greater Kruger. More than a wildlife stop, this is the point where the outside world falls away and the days begin to move according to light, landscape, and instinct. Very early on day 2 at Monwana, a hot air balloon safari shifts perspective completely before the chapter returns to the richer, slower texture of safari on the ground.",
      },
      {
        number: "04",
        period: "Days 11-14",
        title: "The Ocean Release",
        body: "End on Benguerra Island, where everything softens into sea air, marine beauty, barefoot privacy, and a more spacious sense of time. The final chapter is designed to feel restorative, atmospheric, and emotionally complete, with the kind of coastal ease that makes an ending feel worthy of the journey that came before it.",
      },
      {
        number: "05",
        period: "Departure",
        title: "Leave Softly",
        body: "A final morning at your own pace before onward departure. By this stage, the journey should feel seamless, fully held, and entirely removed from the logistics of ordinary travel.",
      },
    ],
    accommodationsIntro:
      "Each property has been chosen not as a standalone highlight, but for how it holds a different chapter of the journey. The feeling shifts deliberately from style and arrival, to vineyard stillness, to safari immersion, to a softer and more private finish by the sea.",
    accommodations: [
      {
        name: "Mount Nelson Hotel",
        description:
          "Mount Nelson is the opening note of the journey: polished, social, and deeply assured. For this client, it works because it offers privacy without removing them from the energy of Cape Town. There is history here, but also ease, beauty, and a kind of confidence that makes arrival feel immediate rather than transitional. It allows the trip to begin with style and perspective, giving the city space to unfold in a way that feels elevated, relaxed, and personally held.",
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
          "Akademie Street changes the rhythm completely. After Cape Town, it brings calm, intimacy, and a more inward kind of luxury. For this client archetype, that contrast matters. The pleasure here is not in scale, but in atmosphere, design, and the feeling of being somewhere quietly special. Franschhoek becomes less about ticking off vineyards and more about settling into a softer pace, where food, wine, and village life feel beautifully composed rather than over-programmed.",
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
          "Monwana is where the journey deepens. After the social elegance of Cape Town and the softness of the Winelands, Greater Kruger draws everything into a richer and more instinctive rhythm. For this client, it works because the safari experience here feels immersive rather than performative. The pace becomes guided by light, landscape, and wildlife movement, while the lodge itself retains a sense of privacy and design that keeps the experience grounded in comfort as well as depth.",
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
          "Benguerra Island is the release. After the depth of safari, it softens the journey into salt air, space, and a more barefoot kind of privacy. For this client, it works not because it is simply beautiful, but because it knows how to end a journey properly. The mood shifts from immersion into ease. Time opens up. The setting becomes lighter, quieter, and more restorative, allowing the final days to feel intimate, atmospheric, and fully deserved.",
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
    inquiryHeading: "Start planning The Romantic.",
    inquiryBody:
      "Share a few details and a Mason & Wild specialist will come back to you personally with next steps, availability guidance, and the refinements needed to shape the journey around you.",
    proofLabel: "Privately Designed",
    proofNote:
      "Personally designed by Zannon James, drawing on a level of first-hand familiarity that goes well beyond standard travel planning. From properties connected to his family's interior design legacy to destinations he knows through repeated personal experience, each part of the journey has been selected not only for beauty, but for how it feels to arrive, stay, and move through in practice. Every partner included has been chosen for how well it delivers ease, confidence, and intimacy, not just on paper, but in real life.",
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
  "the-adventure": {
    slug: "the-adventure",
    outcome: "ADVENTURE",
    territory: "CAPE TOWN & NAMIBIA",
    price: "13 NIGHTS, PRIVATELY PRICED",
    name: "The Adventure",
    identity:
      "Designed for those who want bold landscapes, private guiding, and the feeling of moving properly through a place.",
    metadataItems: [
      {
        label: "Duration",
        title: "13 nights",
        body: "Three nights in Cape Town, followed by ten nights across Namibia in a privately guided overland progression that builds from soft arrival into scale, remoteness, and safari finish.",
      },
      {
        label: "Destinations",
        title: "Cape Town & Namibia",
        body: "Cape Town, Windhoek Highlands, Sossusvlei, Damaraland, and the Etosha region, sequenced to feel energetic first, then deeper, drier, and more elemental.",
      },
      {
        label: "Style",
        title: "Luxury Adventure",
        body: "Private guiding throughout, with Cape Town arranged around mountain, ocean, and adrenaline-led experiences before Namibia unfolds as one seamless guided overland expedition.",
      },
      {
        label: "Best For",
        title: "Private travellers",
        body: "Guests who want dramatic landscapes, private handling, and an adventurous rhythm that still feels polished, design-led, and entirely held from beginning to end.",
      },
      {
        label: "Accommodation",
        title: "Boutique to wild",
        body: "An intimate city house, a refined highland landing point, a desert lodge of real atmosphere, a conservation-led wilderness camp, and a final ultra-exclusive safari chapter.",
      },
    ],
    lead:
      "Some journeys are built around arriving somewhere extraordinary. This one is built around what happens when the movement itself becomes part of the pleasure.",
    vettedNote:
      "Personally designed by Zannon James, with the route shaped around properties and experiences that can sustain a stronger sense of movement without losing polish, privacy, or operational fluency. Every partner included has been chosen for how well it handles adventurous travel in practice, not just in principle.",
    body: [
      "It begins in Cape Town, but not in a passive way. The first chapter is built around mountain, coastline, air, and momentum, with the city experienced through a more active and design-conscious lens. From there, the journey shifts into Namibia, where the tone changes completely. Guests fly into Windhoek, meet their private adventure guide on arrival, and continue across the country in a fully equipped 4x4 that stays with them throughout.",
      "The Adventure is a luxury Cape Town and Namibia journey for travellers who want private guiding, cinematic landscapes, and the kind of overland continuity that makes the country feel properly traversed rather than simply sampled.",
      "Camissa House opens the journey with intimacy, mountain-facing calm, and a level of design confidence that suits the Mason & Wild world. In Namibia, Omaanda becomes the soft landing rather than a city overnight. Sonop expands everything into desert drama, hot air ballooning, horse riding, and wide-open space. Desert Rhino Camp takes the journey into something rarer and more purposeful, where black rhino conservation and stark wilderness give the experience real gravity. Little Ongava then closes the route with exclusivity, stillness, and a final safari chapter that feels deeply earned.",
      "This is not a lodge-hopping safari disguised as adventure. It is a privately guided overland journey in which the road, the shifts in landscape, and the continuity of the guide all matter as much as the individual stops.",
      "For LGBTQ+ travellers in particular, that continuity matters. Camissa House is LGBTQ-owned, and every partner included here has been selected for how well it delivers confidence, discretion, and ease on the ground rather than simply relying on surface-level positioning.",
      "The result is a journey with real movement in it, but also real control: adventurous, elevated, and quietly exacting from the first lift above Cape Town to the final safari mornings in the Etosha region.",
    ],
    heroImg: {
      src: "/journeys/the-adventure/ZS (5).jpg",
      alt: "Sonop in the Namib Desert",
      position: "center 52%",
    },
    galleryImgs: [
      {
        src: "/journeys/the-adventure/Camissa House.jpg",
        alt: "Camissa House beneath Table Mountain in Cape Town",
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
      "Everything included here has been chosen to protect the shape of the journey: energy and edge in Cape Town, complete continuity in Namibia, and a route that becomes more expansive, remote, and rewarding as it unfolds.",
    pillars: [
      {
        key: "cape-town-guiding",
        title: "Private Guiding in Cape Town",
        body: "Cape Town is arranged with a private guide throughout, allowing the city chapter to feel active and personal rather than like a sequence of standard sightseeing appointments.",
      },
      {
        key: "namibia-guide",
        title: "A Private Adventure Guide Throughout Namibia",
        body: "From the moment you land in Windhoek, you are met by the same private adventure guide who remains with you across the Namibia chapter, giving the route real continuity and ease.",
      },
      {
        key: "overland",
        title: "A Fully Equipped 4x4 Expedition",
        body: "Namibia unfolds by road in a fully equipped 4x4, making the movement between landscapes part of the experience rather than something to be minimised or disguised.",
      },
      {
        key: "cape-town-adventure",
        title: "An Adventure-Led Cape Town Opening",
        body: "Tandem paragliding, a sunrise mountain hike, and shark cage diving set an energetic tone in Cape Town, balanced by strong dining and enough space to keep the city chapter elegant rather than relentless.",
      },
      {
        key: "sonop",
        title: "Desert Adventure at Sonop",
        body: "At Sonop, guided 4x4 exploration, hot air ballooning, horse riding or quad biking, and long desert light create a chapter that feels expansive, cinematic, and deeply considered.",
      },
      {
        key: "rhino-camp",
        title: "A Conservation-Led Damaraland Chapter",
        body: "Desert Rhino Camp brings the journey into a rarer register, with expert rhino tracking, guided nature walks, stargazing, and the stark authority of one of Namibia's most extraordinary wilderness areas.",
      },
      {
        key: "ongava",
        title: "A Final Safari Payoff at Little Ongava",
        body: "Little Ongava closes the route with privacy, exclusivity, and safari experiences in the Etosha region that feel quietly elevated after the road journey that came before them.",
      },
      {
        key: "addons",
        title: "Optional Add-Ons, Considered Properly",
        body: "For guests who want to sharpen the adventure further, options such as a Table Mountain abseil in Cape Town or additional desert experiences in Namibia can be folded into the journey without disturbing its overall rhythm.",
      },
    ],
    flowIntro:
      "The route is designed as a true progression. Within that structure, each day still has room to breathe, but the emotional arc is deliberate: energy first, then greater distance, then desert, then remoteness, then a final safari finish.",
    flow: [
      {
        number: "01",
        period: "Day 1",
        title: "Cape Town, On Arrival",
        body: "Arrive in Cape Town and settle into Camissa House, where the mountain-facing setting makes the first chapter feel intimate and properly composed. Depending on timing and weather, the journey begins in the air with tandem paragliding from Signal Hill or Lion's Head, before dinner at Asoka sets an assured tone for the days ahead.",
      },
      {
        number: "02",
        period: "Day 2",
        title: "Mountain Light",
        body: "Begin early with a sunrise hike on Lion's Head or Table Mountain, then return to the city for lunch at Café Caprice in Camps Bay. The afternoon remains at leisure before dinner at Wiggle Room, with the option to add a Table Mountain abseil if you want the day to hold onto its sharper edge.",
      },
      {
        number: "03",
        period: "Day 3",
        title: "Into The Water",
        body: "Travel with your private guide to Gansbaai for shark cage diving, then return to Cape Town as the light drops. Drinks and dinner at Café Manhattan bring the city chapter to a close with the same social ease and confidence with which it began.",
      },
      {
        number: "04",
        period: "Day 4",
        title: "Namibia Begins",
        body: "Fly to Windhoek, where you are met on arrival by your private adventure guide. From this point onward, Namibia becomes one continuous overland chapter in a fully equipped 4x4, beginning softly with a night at Zannier Omaanda in the Windhoek Highlands.",
      },
      {
        number: "05",
        period: "Day 5",
        title: "A Soft Landing In The Highlands",
        body: "Use Omaanda as a true entry into Namibia rather than a pause in transit. This is the moment to reset, settle into the guide-led rhythm ahead, and, where timing allows, explore the reserve through private rhino tracking and a quieter wildlife experience before the road deepens properly.",
      },
      {
        number: "06",
        period: "Day 6",
        title: "Into The Namib",
        body: "Continue by road into the Namib Desert, with the sense of scale widening steadily as the terrain simplifies. Arrive at Zannier Sonop, where the journey opens into a more cinematic register of desert light, distance, and polished adventure.",
      },
      {
        number: "07",
        period: "Day 7",
        title: "Sonop In Motion",
        body: "A full day at Sonop gives the desert chapter its proper breadth, with guided 4x4 exploration, hot air ballooning, and the option of horse riding or quad biking layered into the experience without making it feel overworked.",
      },
      {
        number: "08",
        period: "Day 8",
        title: "Desert, Slower",
        body: "A second day at Sonop allows the pace to soften. There is still room for exploration, but this chapter also needs time for the property itself, for long desert views, and for the quieter immersion that turns spectacle into something more inhabitable.",
      },
      {
        number: "09",
        period: "Day 9",
        title: "Toward Damaraland",
        body: "Travel onward to Damaraland, where the route becomes rougher in tone and more elemental in feeling. Arriving at Wilderness Desert Rhino Camp marks a decisive shift from polished desert glamour into something rarer, more remote, and more purposeful.",
      },
      {
        number: "10",
        period: "Day 10",
        title: "Tracking With Meaning",
        body: "Spend the day at Desert Rhino Camp with expert monitors, following black rhino through one of Namibia's most extraordinary conservation landscapes. This is not generic game viewing; it is a rarer, more exacting kind of wilderness engagement.",
      },
      {
        number: "11",
        period: "Day 11",
        title: "Palmwag After Dark",
        body: "Continue exploring the wider Palmwag landscape through nature drives, guided walks, and the slower observations that this terrain rewards. By night, stargazing becomes part of the experience, reinforcing the remoteness that gives this chapter its real authority.",
      },
      {
        number: "12",
        period: "Day 12",
        title: "The Final Shift",
        body: "Continue north-east toward the Etosha region and arrive at Little Ongava. After the road journey, the privacy and polish here land differently: not as excess, but as a deeply welcome final settling of the route.",
      },
      {
        number: "13",
        period: "Day 13",
        title: "Etosha, Properly",
        body: "Safari experiences at Little Ongava bring a final chapter of real payoff, with exclusive access, a more relaxed sense of time, and wildlife encounters that feel heightened by everything the journey has already asked of you.",
      },
      {
        number: "14",
        period: "Day 14",
        title: "Leave From Depth",
        body: "A final morning in Namibia before onward departure. By this stage, the journey should feel expansive, seamless, and fully lived in rather than simply completed.",
      },
    ],
    accommodationsIntro:
      "Each property has been chosen not as an isolated stop, but for the role it plays in the route. The feeling shifts deliberately from city energy, to a soft Namibian landing, to desert scale, to remote conservation depth, and finally to a more intimate safari close.",
    accommodations: [
      {
        name: "Camissa House",
        description:
          "Camissa House in Cape Town is the right opening because it feels intimate, mountain-facing, and design-led without becoming self-conscious. For this client, that matters. It gives the city chapter polish and privacy, but it also keeps the journey personal from the outset. The fact that it is LGBTQ-owned adds to that sense of ease naturally rather than performatively, reinforcing confidence in a way that feels entirely consistent with the Mason & Wild world.",
        images: [
          {
            src: "/journeys/the-adventure/Camissa House.jpg",
            alt: "Camissa House beneath Table Mountain in Cape Town",
            position: "center 52%",
          },
          {
            src: "/journeys/the-adventure/Camissa House Cape Town_4.jpg",
            alt: "Bar and interior detail at Camissa House",
            position: "center 50%",
          },
          {
            src: "/journeys/the-adventure/Camissa House Cape Town_7.jpg",
            alt: "Bathroom and suite detail at Camissa House",
            position: "center 54%",
          },
        ],
      },
      {
        name: "Zannier Omaanda",
        description:
          "Omaanda is not there to act as a city overnight. It is the elegant threshold into Namibia. After the energy of Cape Town and before the country opens fully, it creates a softer arrival into the Namibia chapter, giving guests time to reset, meet their guide properly, and let the overland rhythm begin with calm rather than haste.",
        images: [
          {
            src: "/journeys/the-adventure/ZO (10).jpg",
            alt: "Zannier Omaanda lodge in the Windhoek Highlands",
            position: "center 52%",
          },
          {
            src: "/journeys/the-adventure/ZO (14).jpg",
            alt: "Suite interior at Zannier Omaanda",
            position: "center 50%",
          },
          {
            src: "/journeys/the-adventure/ZO (1).jpg",
            alt: "Wildlife atmosphere at Omaanda",
            position: "center 54%",
          },
        ],
      },
      {
        name: "Zannier Sonop",
        description:
          "Sonop is where the desert chapter takes full control of the journey. It feels expansive, cinematic, and exciting, but still deeply polished. For this client, its value lies in how beautifully it balances adventure and atmosphere. Days can hold ballooning, horse riding, and guided desert exploration, but they can also leave room for long light, meaningful stillness, and the pleasure of being somewhere that understands drama without needing to oversell it.",
        images: [
          {
            src: "/journeys/the-adventure/ZS (10).jpg",
            alt: "Sonop camp in the Namib at dusk",
            position: "center 50%",
          },
          {
            src: "/journeys/the-adventure/ZS (3).jpg",
            alt: "Interior detail at Zannier Sonop",
            position: "center 50%",
          },
          {
            src: "/journeys/the-adventure/ZS (1).jpg",
            alt: "Desert view from Zannier Sonop",
            position: "center 52%",
          },
        ],
      },
      {
        name: "Wilderness Desert Rhino Camp",
        description:
          "Desert Rhino Camp is the most distinctive chapter of the route. This is where Namibia feels wildest, least mediated, and most meaningful. It earns its place not through volume of wildlife but through rarity, purpose, and landscape. Tracking black rhino with expert monitors in this environment gives the journey a different kind of depth, one rooted in conservation, remoteness, and the stark authority of the desert itself.",
        images: [
          {
            src: "/journeys/the-adventure/Wilderness Desert Rhino Camp (10).jpg",
            alt: "Remote wilderness camp in Damaraland",
            position: "center 52%",
          },
          {
            src: "/journeys/the-adventure/Wilderness Desert Rhino Camp (1).jpg",
            alt: "Interior at Desert Rhino Camp",
            position: "center 50%",
          },
          {
            src: "/journeys/the-adventure/Wilderness Desert Rhino Camp (15).jpg",
            alt: "Desert wildlife in Damaraland",
            position: "center 52%",
          },
        ],
      },
      {
        name: "Little Ongava",
        description:
          "Little Ongava is the final safari payoff. After the movement of the road journey and the deeper austerity of Damaraland, it introduces a more intimate and exclusive kind of ease. For this client, it works because it does not dilute the adventure that came before it. Instead, it rewards it with privacy, strong safari access, and a sense of final arrival that feels both generous and entirely deserved.",
        images: [
          {
            src: "/journeys/the-adventure/Little Ongava (7).jpg",
            alt: "Safari lodge at Little Ongava",
            position: "center 50%",
          },
          {
            src: "/journeys/the-adventure/Little Ongava (3).jpg",
            alt: "Suite interior at Little Ongava",
            position: "center 50%",
          },
          {
            src: "/journeys/the-adventure/Little Ongava (10).jpg",
            alt: "Etosha region safari atmosphere",
            position: "center 50%",
          },
        ],
      },
    ],
    inquiryHeading: "Start planning The Adventure.",
    inquiryBody:
      "Share a few details and a Mason & Wild specialist will come back to you personally with next steps, route guidance, and the refinements needed to shape The Adventure around you.",
    proofLabel: "Privately Designed",
    proofNote:
      "Personally designed by Zannon James, with the route shaped for travellers who want a stronger sense of movement without giving up privacy, design, or proper operational handling. Each partner has been selected for how well it delivers adventurous travel with polish, confidence, and continuity in practice.",
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
    price: "12 NIGHTS FROM $16,000 PER PERSON",
    name: "The Private Circuit",
    identity:
      "Designed for those who want Tanzania to unfold with privacy, rhythm, and complete logistical ease.",
    metadataItems: [
      {
        label: "Length",
        title: "12 nights",
        body: "A privately guided and privately flown Tanzania and Zanzibar circuit moving from villa calm to Tarangire texture to Serengeti scale, before softening into a more intimate island finish.",
      },
      {
        label: "Designed For",
        title: "Private travellers",
        body: "Best for guests who want a classic East Africa circuit delivered with more privacy, more continuity, and a stronger sense of flow from one chapter to the next.",
      },
      {
        label: "Style",
        title: "Privately guided",
        body: "Private safari throughout, with private guiding, private game viewing rhythm, and flights between chapters so the journey feels seamless from beginning to end.",
      },
      {
        label: "Where",
        title: "Tanzania & Zanzibar",
        body: "Siringit Villa, Siringit Tarangire Camp, Siringit Migration Camp, Siringit Serengeti Camp, and Xanadu Villas & Retreat, sequenced to deepen from arrival and grounding into movement, wildlife, and a softer ocean release.",
      },
      {
        label: "Flexibility",
        title: "Tailored around you",
        body: "The structure is clear, but the daily rhythm, emphasis, and pace within each chapter remain shaped around your preferences.",
      },
    ],
    lead: "Some safaris are built around ticking off landscapes. This one is built around continuity.",
    vettedNote:
      "Personally designed by Zannon James, drawing on a level of first-hand familiarity that goes well beyond standard travel planning, including direct experience of properties such as Siringit Villa, Siringit Migration, and Siringit Serengeti through a close personal relationship with the owner. Every partner included has been selected for privacy, atmosphere, operational excellence, and the ability to deliver a journey that feels deeply personal rather than performative.",
    body: [
      "It begins at Siringit Villa, where there is space to settle properly before the bush begins. From there, it moves into Tarangire, where elephants, baobabs, and a denser, earthier landscape create a strong opening sense of place. The journey then continues into the Serengeti in two distinct chapters: first at Siringit Migration Camp, where scale, movement, and the hot air balloon experience bring a more expansive energy, then at Siringit Serengeti Camp, where the final safari nights feel steadier, more immersive, and fully absorbed into the rhythm of the wild. It ends at Xanadu in Zanzibar, where the mood shifts again into sea air, privacy, and a softer final chapter by the Indian Ocean.",
      "The Private Circuit is a privately guided Tanzania and Zanzibar journey for guests who want the classic East African safari arc without the feeling of being pushed through it.",
      "At Siringit Villa, the journey opens with calm, privacy, and a softer transition into Tanzania. Siringit Tarangire Camp then introduces the first true safari rhythm, with private game drives through one of the country's most textured landscapes. From there, the Serengeti takes over in two chapters. At Siringit Migration Camp, the experience becomes broader, lighter, and more cinematic, with game drives that open the plains properly and a hot air balloon experience that shifts perspective entirely. The final safari nights at Siringit Serengeti Camp allow the journey to settle into something deeper and more instinctive, where wildlife, pace, and place begin to feel entirely natural. Xanadu then closes the journey with villa privacy, ocean light, private sunset dhow cruising, and a more intimate Zanzibar finish that feels sensual, restorative, and complete.",
      "This is not a trip built around excess. It is built around how well a journey holds together when the routing is right, the camp sequence makes sense, and every flight, transfer, and handoff has already been considered properly.",
      "These properties were not chosen because they simply belong to the same collection or because they fit neatly on a map. They were chosen because together they create an experience that feels coherent, private, and complete.",
      "For LGBTQ+ travellers in particular, that confidence matters. Every property and partner included here has been selected for how well it delivers privacy, ease, and reassurance in practice, not just on paper.",
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
      "Everything included here has been chosen to protect the rhythm of the journey: calm on arrival, depth in Tarangire, scale in the Serengeti, and a softer, more private release in Zanzibar.",
    pillars: [
      {
        key: "private-safari",
        title: "Private Safari Throughout",
        body: "A privately guided safari rhythm from start to finish, with private game drives, private camp transitions, and a pace shaped around your interests rather than anyone else's schedule.",
      },
      {
        key: "flying",
        title: "Flying Throughout",
        body: "Flights between chapters keep the journey light, seamless, and properly paced, removing unnecessary road time and allowing each destination to arrive with clarity and ease.",
      },
      {
        key: "villa",
        title: "A Calm Start at Siringit Villa",
        body: "Two nights at Siringit Villa create a softer beginning to the journey, allowing time to arrive, settle, and ease into Tanzania before the pace shifts more fully into safari.",
      },
      {
        key: "tarangire",
        title: "A Grounded Tarangire Chapter",
        body: "Two nights at Siringit Tarangire Camp and four game drives in Tarangire National Park bring a rich opening safari chapter shaped by baobabs, elephant country, and a landscape with real texture and presence.",
      },
      {
        key: "serengeti",
        title: "A Deeper Serengeti Arc",
        body: "Four nights across Siringit Migration Camp and Siringit Serengeti Camp, together with eight game drives in the Serengeti, create a safari experience with enough continuity to feel immersive rather than rushed, while a hot air balloon adds a cinematic high point to the journey.",
      },
      {
        key: "zanzibar",
        title: "A Soft Zanzibar Finish",
        body: "Four nights at Xanadu Villas & Retreat bring the journey to a more intimate close, with villa privacy, Indian Ocean light, private sunset dhow cruising, and the kind of barefoot luxury that feels restorative rather than busy.",
      },
      {
        key: "ease",
        title: "All-Included Ease",
        body: "All transfers, four domestic flights, all meals and drinks at the Siringit camps, park entrance and camping fees for Serengeti and Tarangire, WiFi, and the hot air balloon experience are all included, allowing the journey to feel properly held from beginning to end.",
      },
      {
        key: "support",
        title: "Direct Mason & Wild Support",
        body: "A dedicated Mason & Wild specialist available discreetly throughout, with preferences, adjustments, and finer requests managed personally rather than passed around.",
      },
    ],
    flowIntro:
      "The route and sequencing are intentional. Within that structure, each chapter still has room to breathe, with the pace and emphasis shaped around your group, your guide, and the landscape itself.",
    flow: [
      {
        number: "01",
        period: "Days 1-2",
        title: "Settle In Properly",
        body: "Begin at Siringit Villa, where the first two nights are designed to create ease, privacy, and a gentler entry into the journey. Before the movement of safari begins, there is time to settle, reset, and let the trip start with proper calm rather than momentum.",
      },
      {
        number: "02",
        period: "Days 3-4",
        title: "Into Tarangire",
        body: "Continue to Siringit Tarangire Camp, where four private game drives reveal one of Tanzania's most textured national parks. Elephant herds, baobab silhouettes, and a denser, more earthbound landscape give this chapter a strong sense of depth and place.",
      },
      {
        number: "03",
        period: "Days 5-6",
        title: "Serengeti in Motion",
        body: "At Siringit Migration Camp, the Serengeti opens into something broader, lighter, and more dynamic. Private game drives take on a greater sense of scale here, while the hot air balloon experience adds an aerial perspective that changes the emotional register of the stay entirely.",
      },
      {
        number: "04",
        period: "Days 7-8",
        title: "A More Settled Safari Finish",
        body: "End the safari at Siringit Serengeti Camp, where the final bush chapter feels steadier and more fully absorbed into the rhythm of the plains. By this point, the landscape no longer feels new. It feels inhabited, understood, and properly part of the journey.",
      },
      {
        number: "05",
        period: "Days 9-12",
        title: "The Ocean Release",
        body: "Fly on to Xanadu in Zanzibar, where the final chapter softens into sea air, villa privacy, private sunset dhow cruising, and a more spacious sense of time. After the movement and scale of safari, the island is there to restore, lighten, and bring the journey to a beautifully intimate close.",
      },
      {
        number: "06",
        period: "Departure",
        title: "Leave Well Held",
        body: "A final morning at your own pace before onward departure. By this stage, the journey should feel seamless, complete, and entirely removed from the mechanics of ordinary travel.",
      },
    ],
    accommodationsIntro:
      "Each property has been chosen not as an isolated stop, but for how it carries the journey forward. The feeling shifts deliberately from arrival and grounding, to deeper safari texture, to Serengeti scale, and finally to a softer and more private release by the Indian Ocean.",
    accommodations: [
      {
        name: "Siringit Villa",
        description:
          "Siringit Villa is the grounding chapter of the journey. Before the bush begins, it gives this itinerary what most safari circuits do not: room to arrive properly. For this client, that matters. The privacy here feels calm rather than remote, and the villa setting allows the trip to begin with softness, space, and a sense of being personally held. It is not simply a pre-safari stop. It is the point at which the outside world falls away and the journey begins to take on its own rhythm.",
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
          "Siringit Tarangire Camp introduces the first true safari rhythm, but it does so with depth rather than noise. For this client archetype, Tarangire works because it feels grounded and textured, with baobabs, elephant country, and a landscape that holds real weight. The camp itself keeps the experience private and composed, allowing the days to open slowly into something wilder without losing the sense of comfort and continuity established at the start.",
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
          "Siringit Migration Camp changes the scale of the journey. After Tarangire's grounded texture, the Serengeti opens outward into something broader, lighter, and more cinematic. For this client, this chapter works because it introduces movement and perspective without sacrificing privacy. The camp holds the experience close, while the plains and the balloon flight create the sense that the journey has lifted into a more expansive register.",
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
          "Siringit Serengeti Camp is where the safari settles. After the movement and sweep of the migration chapter, this final bush stay feels steadier, deeper, and more instinctive. For this client, it is the point where safari becomes less about spectacle and more about immersion. The rhythm slows into something more assured, and the camp's privacy allows the landscape to feel inhabited rather than simply observed.",
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
          "Xanadu is the release. After the structure and movement of safari, it softens the journey into ocean light, villa privacy, and a more sensual sense of stillness. For this client, it works because it avoids the feeling of a generic beach add-on. Instead, it closes the circuit with atmosphere, intimacy, and a clear emotional shift into ease. The result is a finish that feels restorative, private, and properly complete.",
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
    inquiryHeading: "Start planning The Private Circuit.",
    inquiryBody:
      "Share a few details and a Mason & Wild specialist will come back to you personally with next steps, availability guidance, and the refinements needed to shape the journey around you.",
    proofLabel: "Privately Designed",
    proofNote:
      "Personally designed by Zannon James, with each property selected for privacy, atmosphere, operational reliability, and the ability to deliver a safari that feels seamless, elevated, and properly personal from start to finish. Every partner included has been chosen for how well it delivers ease, confidence, and intimacy in practice, not just on paper.",
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

  const collageImages = journey.galleryImgs.slice(0, 3);
  const intimateCarouselExtras =
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

  const carouselImages = [
    ...journey.galleryImgs,
    ...journey.accommodations.flatMap((accommodation) => accommodation.images),
    ...intimateCarouselExtras,
  ].filter(
    (image, index, images) => index === images.findIndex((entry) => entry.src === image.src),
  );

  const flowItemClass =
    journey.flow.length <= 4
      ? "w-full sm:w-1/2 xl:w-1/4"
      : "w-full sm:w-1/2 xl:w-1/3";

  const flowContainerClass =
    journey.flow.length <= 4
      ? "grid grid-cols-1 border-l border-t border-white/[0.08] sm:grid-cols-2 xl:grid-cols-4"
      : "flex flex-wrap justify-center border-l border-t border-white/[0.08]";

  return (
    <>
      <section
        className="relative min-h-svh flex flex-col justify-end pb-[clamp(52px,9vh,96px)] overflow-hidden"
        aria-labelledby="journey-name"
      >
        <div
          className="absolute inset-0 bg-cover bg-center animate-[heroZoom_20s_cubic-bezier(0.16,1,0.3,1)_forwards]"
          style={{
            backgroundImage: [
              "linear-gradient(to bottom, rgba(14,12,8,0.08) 0%, rgba(14,12,8,0.0) 20%, rgba(14,12,8,0.45) 62%, rgba(14,12,8,0.85) 100%)",
              `url('${journey.heroImg.src}')`,
            ].join(", "),
            backgroundPosition: journey.heroImg.position ?? "center 40%",
          }}
          role="img"
          aria-label={journey.heroImg.alt}
        />

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
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-px bg-stone-200">
            {journey.metadataItems.map((item, index) => (
              <Reveal key={item.label} delay={(index % 3) as 0 | 1 | 2 | 3 | 4}>
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
                <p className="label-tag mb-6">Journey Identity</p>
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
                          className="w-full aspect-[6/5] object-cover object-center"
                          style={{ objectPosition: journey.vettedImg.position ?? "center" }}
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
                        : "text-base font-light text-stone-500 leading-relaxed"
                    }
                  >
                    {paragraph}
                  </p>
                </Reveal>
              ))}
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
                  className="h-[320px] w-full object-cover object-center transition-transform duration-[900ms] ease-out hover:scale-[1.03] md:h-full"
                  style={{ objectPosition: collageImages[0].position ?? "center" }}
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
                      className="h-full w-full object-cover object-center transition-transform duration-[900ms] ease-out hover:scale-[1.03]"
                      style={{ objectPosition: image.position ?? "center" }}
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

      <section
        className="section border-t border-b border-stone-200"
        aria-labelledby="pillars-heading"
      >
        <div className="container-site">
          <Reveal>
            <div className="grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] gap-[clamp(48px,7vw,112px)] items-start mb-16">
              <div>
                <p className="label-tag mb-4">What This Journey Includes</p>
                <h2
                  className="font-serif font-light text-display-md text-stone-900"
                  id="pillars-heading"
                >
                  What This Journey Includes
                </h2>
                <p className="font-serif font-light italic text-display-sm text-stone-900 mt-3">
                  Private by every
                  <br />
                  <em>measure.</em>
                </p>
              </div>
              <div className="lg:pt-14">
                <p className="text-base font-light text-stone-500 leading-relaxed max-w-[620px]">
                  {journey.pillarsIntro}
                </p>
              </div>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 border-t border-stone-200 md:grid-cols-2">
            {journey.pillars.map((pillar, index) => (
              <Reveal
                key={pillar.key}
                className={[
                  "h-full border-b border-stone-200",
                  index % 2 === 1 ? "md:border-l md:border-stone-200" : "",
                ].join(" ")}
                delay={(index % 3) as 0 | 1 | 2 | 3 | 4}
              >
                <div className="h-full bg-page px-8 py-10 md:px-10 md:py-12">
                  <p className="label-tag mb-5">{pillar.title}</p>
                  <p className="max-w-[30rem] text-base font-light text-stone-500 leading-relaxed">
                    {pillar.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section
        className="bg-stone-900 px-[var(--px)] py-[var(--section-gap)]"
        aria-labelledby="flow-heading"
      >
        <div className="container-site">
          <Reveal>
            <p className="label-tag text-white/35 mb-5">A Sense of Shape</p>
            <h2
              className="font-serif font-light text-display-lg text-white max-w-[480px] mb-6"
              id="flow-heading"
            >
              How the journey
              <br />
              <em>unfolds.</em>
            </h2>
            <p className="text-base font-light text-white/40 leading-relaxed max-w-[520px] mb-16">
              {journey.flowIntro}
            </p>
          </Reveal>

          <div className={flowContainerClass}>
            {journey.flow.map((phase, index) => (
              <div key={phase.number} className={flowItemClass}>
                <Reveal
                  className="h-full border-r border-b border-white/[0.08]"
                  delay={(index % 4) as 0 | 1 | 2 | 3 | 4}
                >
                  <div className="flex h-full flex-col px-8 pb-12 pt-10 md:px-10 md:pb-14 md:pt-12">
                    <p className="font-serif font-light text-[2rem] text-white/[0.09] leading-none mb-8">
                      {phase.number}
                    </p>
                    <p className="label-tag text-white/35 mb-3">{phase.period}</p>
                    <p className="font-serif font-light italic text-lg text-white/70 mb-5 leading-snug">
                      {phase.title}
                    </p>
                    <p className="max-w-[24rem] text-[15px] font-light text-white/45 leading-[1.9]">
                      {phase.body}
                    </p>
                  </div>
                </Reveal>
              </div>
            ))}
          </div>
        </div>
      </section>

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
              <p className="text-base font-light text-stone-500 leading-relaxed max-w-[560px] self-end">
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
                    <p className="label-tag mb-4">Accommodation</p>
                    <h3 className="font-serif font-light text-display-sm text-stone-900 mb-6 tracking-[-0.012em]">
                      <em>{accommodation.name}</em>
                    </h3>
                    <p className="text-base font-light text-stone-500 leading-relaxed">
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
                        className="h-[360px] w-full object-cover object-center transition-transform duration-[900ms] ease-out hover:scale-[1.03] md:h-full"
                        style={{ objectPosition: accommodation.images[0].position ?? "center" }}
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
                            className="h-full w-full object-cover object-center transition-transform duration-[900ms] ease-out hover:scale-[1.03]"
                            style={{ objectPosition: image.position ?? "center" }}
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

      <section
        className="section border-b border-stone-200"
        aria-labelledby="journey-cta-heading"
      >
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[clamp(48px,7vw,96px)] items-center">
            <Reveal>
              <div>
                <p className="label-tag mb-6">Begin This Journey</p>
                <h2
                  className="font-serif font-light text-display-xl text-stone-900 mb-6 tracking-[-0.018em]"
                  id="journey-cta-heading"
                >
                  {journey.inquiryHeading.replace(` ${journey.name}.`, "")}
                  <br />
                  <em>{journey.name}.</em>
                </h2>
                <p className="text-base font-light text-stone-500 leading-relaxed max-w-[440px]">
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
                    {CTA.requestPrivateAccess}
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
                  className="w-full aspect-[4/3] object-cover object-center transition-transform duration-[900ms] ease-out group-hover:scale-[1.025]"
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
                  <span aria-hidden="true">→</span>
                </span>
              </div>
            </Link>
          </Reveal>
        </section>
      )}
    </>
  );
}
