# Cinematic Website Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a premium mobile-first cinematic Bappaz Entertainment & FilmZ portfolio without changing the live/default branch.

**Architecture:** Keep the existing static site architecture but split presentation and interaction into focused CSS/JS assets. Semantic HTML remains usable without JavaScript; JS progressively enhances the gate, navigation, reveals and media interactions.

**Tech Stack:** HTML5, CSS3, vanilla JavaScript, GitHub static hosting.

**Spec:** `docs/superpowers/specs/2026-09-27-cinematic-website-redesign-design.md`

## Global Constraints
- Work only on `website-cinematic-redesign-v3` until user review.
- Mobile-first, especially 360–430px.
- Black/charcoal/gold premium visual identity.
- No heavy framework or autoplay-heavy media.
- Preserve Password, Ishq Bukhar, The Dancing Bus, Shiva Ahire, RK and auditions.
- Do not expose private residential information or unverified public links.
- Core content/navigation must remain usable without JavaScript.
- Respect `prefers-reduced-motion` and keyboard focus.

## Review Focus
- Gate must never trap users or hide core content without JS.
- 360px layouts must not overflow horizontally except intentional rails.
- Missing/unverified external media must degrade cleanly.
- Reduced-motion users must not receive blocking cinematic animation.
- Team/project images must have useful alt text and stable layout.

---

### Task 1: Semantic cinematic homepage foundation
**Files:** Modify `index.html`; create `tests/site-structure.test.js`.
**Interfaces:** Produces stable section IDs and classes consumed by CSS/JS.
- [ ] Write structural assertions for gate, navigation, founder, work, projects, team, auditions and contact.
- [ ] Verify assertions fail against the current page.
- [ ] Refactor `index.html` into the approved cinematic narrative with progressive-enhancement markup.
- [ ] Verify structural assertions pass.
- [ ] Commit.

### Task 2: Premium visual system and responsive layout
**Files:** Create `assets/css/site.css`; extend `tests/site-structure.test.js`.
**Interfaces:** Consumes Task 1 section/classes; produces responsive visual system.
- [ ] Add failing assertions for external stylesheet, responsive CSS, focus and reduced-motion rules.
- [ ] Verify failure.
- [ ] Implement black/charcoal/gold editorial typography, cinematic gate, project rail, team cards and mobile breakpoints.
- [ ] Verify assertions pass.
- [ ] Commit.

### Task 3: Progressive cinematic interactions
**Files:** Create `assets/js/site.js`; extend tests.
**Interfaces:** Consumes Task 1 hooks; produces optional gate/reveal/nav behavior.
- [ ] Add failing assertions for deferred JS and enhancement hooks.
- [ ] Verify failure.
- [ ] Implement gate entry, sticky nav state, intersection reveals and reduced-motion-safe behavior.
- [ ] Verify assertions pass.
- [ ] Commit.

### Task 4: Align audition experience
**Files:** Modify `auditions.html`; reuse `assets/css/site.css`.
**Interfaces:** Consumes shared visual system and returns to homepage cleanly.
- [ ] Add failing audition-page structural/style assertions.
- [ ] Verify failure.
- [ ] Restyle audition page while preserving approved application details.
- [ ] Verify assertions pass.
- [ ] Commit.

### Task 5: Final validation
**Files:** No production files unless a failing validation requires a fix.
- [ ] Run all tests.
- [ ] Inspect repository diff for private/unverified data and accidental live-branch changes.
- [ ] Verify semantic headings, focus states, alt text, mobile overflow safeguards and reduced-motion behavior.
- [ ] Review branch as a whole and fix Critical/Important findings with RED→GREEN tests.
- [ ] Leave branch unmerged for user preview/approval.