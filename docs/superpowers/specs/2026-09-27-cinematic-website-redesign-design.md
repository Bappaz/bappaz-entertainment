# Bappaz Entertainment & FilmZ — Cinematic Website Redesign

Date: 2026-09-27
Status: Design approved for specification review

## Goal
Transform the existing GitHub Pages portfolio into a premium, cinematic, mobile-first public website for Bappaz Entertainment & FilmZ. The first impression should feel like a film studio and luxury entertainment brand rather than a generic production-house template.

## Brand Direction
- Near-black cinematic canvas with champagne-gold highlights and warm bronze light.
- Large editorial typography, generous negative space and restrained glow.
- Motion should feel filmic and polished, never like a flashy template.
- Preserve fast loading, legibility and strong mobile behavior.

## Site Architecture
The public experience remains a lightweight static GitHub Pages site with no framework dependency. The home page becomes the main cinematic portfolio journey, while the existing audition page remains a dedicated conversion destination.

### 1. Global Navigation
A compact floating/sticky navigation layer provides Bappaz identity and quick access to Work, About, Team, Auditions and Contact. Mobile navigation must remain thumb-friendly and must not cover content.

### 2. Hero / Opening Experience
Full-screen opening composition with the Bappaz identity, the line “Stories. Movement. Cinema.” and concise positioning around films, choreography, live experiences and new-age visual storytelling. Primary CTA leads into featured work; secondary CTA opens auditions. Ambient gradients/light and subtle motion create depth without hurting performance.

### 3. Featured Projects
Premium editorial project presentation for:
- Password — The 100 Words
- The New Bench
- The Dancing Bus
- Ishq Bukhar

Cards/panels use cinematic hierarchy, project type/status, short copy and restrained interactive motion. The design must still work gracefully before every project has final artwork or video.

### 4. Founder / Creative Profile
A strong Shreekant D. Ahire profile establishes the creative leadership behind Bappaz: director, writer, choreographer and visual storyteller. The section should emphasize film direction, choreography, AI filmmaking, cultural productions, corporate/live experiences and selected career credibility without becoming a long résumé wall.

### 5. Capabilities / Experience
Present key disciplines as a premium visual system: film direction and writing; choreography; AI filmmaking; live show direction; cultural productions; shadow/UV/LED/interactive visual formats; corporate and government productions.

### 6. Team
Retain and elevate Shiva Ahire and Rajput Kiran (RK). Team profiles should use existing repository portraits where available, with elegant role labels and concise bios. The section must visually belong to the same luxury system rather than appearing as separate cards pasted onto the page.

### 7. Auditions
Keep Ishq Bukhar audition visibility prominent, with a clear route to the existing `auditions.html` page and email application. Audition CTA should be obvious on mobile without overwhelming the portfolio.

### 8. Contact / Footer
End with a high-confidence collaboration CTA for films, choreography, live experiences and creative production, followed by concise brand/contact information and copyright.

## Interaction & Motion
- Smooth anchor navigation.
- Subtle reveal-on-scroll using lightweight browser APIs.
- Small parallax/light response only where it remains smooth.
- Hover/focus states for desktop and accessible tap behavior for mobile.
- Respect `prefers-reduced-motion`.
- No autoplay-heavy video dependency in the initial implementation.

## Mobile Requirements
- Design from ~360px width upward.
- No horizontal overflow.
- Hero copy and CTAs must fit cleanly above/below the fold depending on device height.
- Buttons have comfortable touch targets.
- Project and team layouts collapse to single-column compositions.
- Typography uses responsive `clamp()` sizing rather than fixed oversized desktop values.
- Navigation remains usable without forcing desktop menus into a narrow viewport.

## Technical Approach
Use semantic HTML, modern CSS and minimal vanilla JavaScript. Keep deployment compatible with the repository’s current GitHub Pages `main` + `/ (root)` configuration. Avoid new build tooling and third-party framework dependencies. Existing media filenames must be handled safely, including spaces in filenames.

Implementation should be staged so the currently published site is not unnecessarily broken during development. A redesign branch/PR is preferred for preview and review before final integration to `main`.

## Accessibility & Quality
- Meaningful landmarks and heading order.
- Useful alt text for portraits/project imagery.
- Keyboard-visible focus states.
- Strong text/background contrast.
- Reduced-motion fallback.
- Missing optional imagery must not break layout.

## Validation
Before release, verify:
1. Home page links and audition navigation.
2. Responsive layouts at common mobile, tablet and desktop widths.
3. No horizontal overflow or clipped text.
4. Existing portrait assets resolve correctly.
5. Basic keyboard navigation and reduced-motion behavior.
6. GitHub Pages deployment succeeds after integration.
7. Visual inspection of the live/preview URL on mobile before considering the redesign finished.

## Scope Boundary
This pass is a premium public portfolio redesign, not a CMS, OTT platform, account system or database-backed application. Those can be separate projects later.