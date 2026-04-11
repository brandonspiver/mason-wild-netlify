# Image Quality Audit
Date: April 11, 2026
Project: mason-wild-netlify

## Summary
- Total referenced images audited: 178
- High confidence bad quality: 15
- Likely quality risks: 22
- Needs manual AVIF visual check: 4

## High Confidence Bad Quality (Replace First)
1. `/journal/destination-notes-tanzania/hero-placeholder.svg`
2. `/journal/destination-notes-tanzania/serengeti-placeholder.svg`
3. `/journal/destination-notes-tanzania/ngorongoro-placeholder.svg`
4. `/journal/destination-notes-tanzania/zanzibar-placeholder.svg`
5. `/journal/cape-town-gay-capital-of-africa/city.png` (513x423)
6. `/journeys/the-classic/collage-mbano-helicopter-falls.jpg` (590x390)
7. `/journeys/the-classic/mbano-manor-card.jpg` (590x390)
8. `/journeys/the-classic/PineApple House  (1).png` (524x497)
9. `/journeys/the-romantic/MN 3 .png` (569x695)
10. `/journeys/the-romantic/MN1.png` (577x704)
11. `/journeys/the-social-shift/SH (1).jpeg` (445x669)
12. `/journeys/the-social-shift/TA (1).png` (915x499)
13. `/journeys/the-social-shift/TA (3).png` (862x503)
14. `/journeys/the-social-shift/TA (8).png` (910x502)
15. `/journeys/the-social-shift/TA (10).png` (901x526)

## Likely Quality Risks
1. `/home/home-hero.jpg` (1200x800)
2. `/journal/cape-town-gay-capital-of-africa/nightlife.png` (1107x638)
3. `/journal/okavango-dry-season-private-safari/horse-riding.jpg` (1000x673)
4. `/journal/solitude-architecture-of-silence-namibia/experience-one.jpg` (945x622)
5. `/journal/solitude-architecture-of-silence-namibia/hero.jpg` (compression risk)
6. `/journeys/the-adventure/Camissa House.jpg` (1200x798)
7. `/journeys/the-classic/PineApple House  (2).png` (979x686)
8. `/journeys/the-classic/PineApple House  (3).png` (1048x696)
9. `/journeys/the-classic/PineApple House  (4).png` (989x689)
10. `/journeys/the-classic/PineApple House  (5).png` (996x698)
11. `/journeys/the-classic/PineApple House  (6).png` (1023x687)
12. `/journeys/the-classic/PineApple House  (7).png` (1059x698)
13. `/journeys/the-intimate/updates/delta-wild-dogs.jpg` (1100x733)
14. `/journeys/the-intimate/victoria-falls-boat-sunset.jpg` (1000x667)
15. `/journeys/the-intimate/victoria-falls-forest-path.jpg` (1000x667)
16. `/journeys/the-private-circuit/XI (4).png` (1091x648)
17. `/journeys/the-private-circuit/XI (6).png` (1167x671)
18. `/journeys/the-private-circuit/XI (8).png` (1100x674)
19. `/journeys/the-social-shift/SH (3).jpeg` (1000x669)
20. `/journeys/the-social-shift/SH (4).jpg` (992x670)
21. `/journeys/the-social-shift/TA (6).png` (961x528)
22. `/journeys/the-untamed/Chindeni (12).jpg` (1000x706)

## Manual Visual Review Needed (AVIF)
1. `/journeys/the-social-shift/SK (3).avif`
2. `/journeys/the-social-shift/SK (6).avif`
3. `/journeys/the-social-shift/SK (10).avif`
4. `/journeys/the-social-shift/SK (11).avif`

## Method Notes
- Audit covered image paths referenced in `app/`, `components/`, `lib/`, and `styles/`.
- Flags were based on objective risk signals: placeholder filenames, low pixel dimensions, small short-side for large layout usage, and compression-risk heuristics.
- AVIF files were flagged for manual review because dimensions could not be reliably read with available local tooling.
