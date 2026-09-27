# Bappaz Entertainment & FilmZ — Cinematic Website Redesign Design

## Goal
Create a premium, mobile-first cinematic portfolio for Bappaz Entertainment & FilmZ that feels like entering a film universe rather than a conventional company website. It must present the company, Shreekant D. Ahire, Shiva Ahire, RK, signature work, current projects, auditions and contact/social channels with a distinctive black/charcoal/gold visual identity.

## Experience Direction
The site opens as a cinematic gate: near-black screen, Bappaz identity/logo treatment, subtle gold light and an ENTER experience. After entry, the visitor reaches an editorial film-studio homepage with controlled motion, oversized typography, horizontal/vertical storytelling and immersive project cards. Motion must remain smooth and lightweight on mobile and respect reduced-motion preferences.

## Visual Language
- Palette: cinematic black (#050505), charcoal/graphite surfaces, warm metallic gold/yellow highlights, warm ivory text.
- Typography: expressive high-fashion/display serif for major cinematic titles; clean geometric sans for navigation/body; selective handwritten/script accent only where it improves hierarchy. Do not mix every reference font.
- Inspiration from approved references: dramatic serif editorial titles, high-contrast display typography, strong condensed/graphic headings and occasional elegant script pairing.
- Avoid generic template cards, excessive glow, cheap gradients or constant animation.
- Photography/video receives priority; UI frames content rather than competing with it.

## Homepage Narrative
1. Cinematic Gate / Bappaz identity.
2. Hero statement: Bappaz Entertainment & FilmZ — films, movement, music and visual storytelling.
3. Founder spotlight: Shreekant D. Ahire — Writer, Director, Choreographer, Creative Director; selected career credibility and signature visual forms.
4. Signature work/showreel: choreography, shadow/UV/LED/hologram/interactive/cultural/corporate productions with YouTube-linked media.
5. Film universe: Password — The 100 Words as a priority current film; additional film credits and visual work.
6. Music: Ishq Bukhar coming soon plus existing music/performance work where verified media is available.
7. Originals / Coming Soon: The Dancing Bus and future approved projects. Do not publish confidential story mechanics or unreleased development details.
8. Live experiences / corporate & government work: curated credibility rather than an exhaustive text list.
9. Team: Shreekant, Shiva Ahire and Rajput Kiran (RK), using approved roles/copy and available portraits.
10. Auditions: dedicated Ishq Bukhar casting CTA linking to auditions.html.
11. Social / Watch: YouTube, Instagram and Facebook destinations using verified official URLs only.
12. Contact/footer: business enquiry CTA, approved email/phone/address only. Do not expose private residential information unless explicitly approved for public business use.

## Interaction System
- Sticky minimal navigation after gate entry.
- Smooth anchor navigation and active-section indication.
- Reveal-on-scroll typography/media with restrained parallax.
- Horizontal project rail where touch interaction remains natural.
- Hover states on desktop; equivalent tap states on mobile.
- Embedded video should use thumbnails/lightweight click-to-play where possible rather than loading many YouTube iframes at startup.
- Cinematic transitions must not block navigation or accessibility.

## Content Rules
- Reuse verified material from the current site and approved project history.
- Preserve Password — The 100 Words, Ishq Bukhar, The Dancing Bus, Shiva Ahire and RK sections.
- Current site audition application email remains sbappashri@gmail.com unless user later replaces it.
- Social links, YouTube videos, phone numbers and public address must be verified before publication; placeholders must never masquerade as live links.
- Keep unreleased projects labelled COMING SOON / IN DEVELOPMENT as appropriate.
- No automatic publishing of confidential treatments, scripts, private contact details or unapproved assets.

## Technical Architecture
Keep the deployment simple and compatible with the existing static GitHub-hosted site. Refactor the oversized single-file page into focused assets while avoiding unnecessary frameworks:
- index.html — semantic homepage structure/content.
- assets/css/site.css — visual system, responsive layout, motion and accessibility states.
- assets/js/site.js — gate, navigation, scroll/reveal and media interactions.
- assets/images/ — existing approved team/project imagery as assets become available.
- auditions.html — retain dedicated audition destination, visually aligned with the new system.

Progressive enhancement is required: core content/navigation must work without JavaScript. Use native browser capabilities and minimal JS instead of adding a heavy dependency stack.

## Mobile & Performance Requirements
- Mobile-first for Android/iOS, with special attention to 360–430px widths.
- No horizontal overflow except intentional project rails.
- Responsive typography using clamp().
- Lazy-load non-critical imagery; specify image dimensions/aspect ratios to reduce layout shift.
- Defer/non-blocking JS.
- Keep first screen fast; gate animation cannot require a large video download.
- Keyboard-visible focus, semantic headings, useful alt text, sufficient contrast and prefers-reduced-motion support.

## Success Criteria
A first-time visitor should understand within seconds that Bappaz is a premium film/entertainment creative house, discover Shreekant’s identity and strongest work, see current/upcoming projects, watch selected work, meet the core team and reach auditions/contact/social channels. The visual experience should feel bespoke and cinematic while remaining fast and easy to use on the user’s primary mobile viewing context.

## Release Safety
All redesign work stays on `website-cinematic-redesign-v3` until reviewed. The current live/default branch is not modified during design and build. Final deployment/merge happens only after user review of the completed preview.