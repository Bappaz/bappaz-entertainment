# Cinematic Website Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Turn the current Bappaz GitHub Pages portfolio into a premium cinematic, mobile-first public website while preserving the existing audition destination and current production/team content.

**Architecture:** Keep the site framework-free and GitHub Pages compatible. Refactor the home page into semantic sections, move presentation into focused CSS, and use a very small JavaScript enhancement layer for navigation/reveal behavior with graceful no-JS and reduced-motion fallbacks.

**Tech Stack:** HTML5, CSS3, vanilla JavaScript, GitHub Pages.

**Spec:** `docs/superpowers/specs/2026-09-27-cinematic-website-redesign-design.md`

## Global Constraints
- Near-black cinematic canvas with champagne-gold highlights and warm bronze light.
- Static GitHub Pages site; no framework or build dependency.
- Preserve the dedicated `auditions.html` destination.
- Design from approximately 360px width upward with no horizontal overflow.
- Use responsive `clamp()` typography and comfortable mobile touch targets.
- Respect `prefers-reduced-motion`.
- Missing optional imagery must not break the layout.
- Keep deployment compatible with `main` + `/ (root)`.

## Review Focus
- 360px-class phones: navigation, hero copy and CTA row must not overflow or clip.
- Missing/failed optional project imagery: readable fallback styling must remain intact.
- Reduced-motion users: reveal content must remain visible and nonessential animation disabled.
- Existing filenames containing spaces: portrait assets must resolve correctly on GitHub Pages.
- Audition conversion path: every audition CTA must resolve to `auditions.html` or the intended email action.

---

### Task 1: Semantic cinematic home structure

**Files:**
- Modify: `index.html`
- Test: `tests/site-smoke.mjs`

**Interfaces:**
- Consumes: existing project/team copy and `auditions.html`.
- Produces: stable section IDs `work`, `about`, `capabilities`, `team`, `auditions`, `contact` and asset hooks used by Tasks 2–3.

- [ ] **Step 1: Write failing structural smoke assertions**

Create `tests/site-smoke.mjs` asserting that `index.html` contains one `<nav`, each required section ID, `Password — The 100 Words`, `The New Bench`, `The Dancing Bus`, `Ishq Bukhar`, `Shreekant D. Ahire`, `Shiva Ahire`, `Rajput Kiran`, and at least one `href="auditions.html"`.

- [ ] **Step 2: Run the smoke test and verify it fails**

Run: `node tests/site-smoke.mjs`
Expected: FAIL because the current page lacks the complete approved section/project structure.

- [ ] **Step 3: Refactor `index.html` into the approved semantic section order**

Implement: sticky/floating nav, cinematic hero, featured projects, founder profile, capabilities, team, auditions, collaboration/contact and footer. Preserve useful existing copy while keeping each section concise.

- [ ] **Step 4: Run the smoke test**

Run: `node tests/site-smoke.mjs`
Expected: PASS.

- [ ] **Step 5: Commit**

`git add index.html tests/site-smoke.mjs && git commit -m "feat: restructure cinematic Bappaz homepage"`

### Task 2: Premium responsive visual system

**Files:**
- Create: `assets/site.css`
- Modify: `index.html`
- Modify: `tests/site-smoke.mjs`

**Interfaces:**
- Consumes: section/class hooks from Task 1.
- Produces: responsive design system and mobile-safe layouts used by the entire home page.

- [ ] **Step 1: Extend smoke assertions for stylesheet and accessibility hooks**

Assert external `assets/site.css`, viewport metadata, portrait alt text, navigation label and CSS tokens/classes required by the page.

- [ ] **Step 2: Run test and verify the new assertions fail**

Run: `node tests/site-smoke.mjs`
Expected: FAIL before stylesheet extraction.

- [ ] **Step 3: Implement `assets/site.css` and remove the large inline style block**

Define design tokens for black/bronze/champagne surfaces, editorial typography, glass/gold navigation, project panels, founder/capability/team compositions, focus-visible states, responsive breakpoints and fallback surfaces. At <=760px collapse multi-column sections, stack CTA groups safely and prevent horizontal overflow; include a <=390px refinement.

- [ ] **Step 4: Add reduced-motion CSS and resilient image behavior**

Use `@media (prefers-reduced-motion: reduce)` to disable smooth/ambient/reveal transitions; ensure images use safe object-fit sizing and content remains readable if an image fails.

- [ ] **Step 5: Run smoke test**

Run: `node tests/site-smoke.mjs`
Expected: PASS.

- [ ] **Step 6: Commit**

`git add index.html assets/site.css tests/site-smoke.mjs && git commit -m "feat: add premium responsive Bappaz visual system"`

### Task 3: Lightweight interaction layer

**Files:**
- Create: `assets/site.js`
- Modify: `index.html`
- Modify: `tests/site-smoke.mjs`

**Interfaces:**
- Consumes: `[data-reveal]`, navigation and menu hooks from Tasks 1–2.
- Produces: progressive reveal behavior and mobile navigation enhancement without making content dependent on JavaScript.

- [ ] **Step 1: Add failing smoke assertions for the enhancement script**

Assert `assets/site.js` is loaded with `defer`, the mobile menu control has `aria-expanded`, and reveal targets use `data-reveal`.

- [ ] **Step 2: Run test and verify failure**

Run: `node tests/site-smoke.mjs`
Expected: FAIL until enhancement hooks exist.

- [ ] **Step 3: Implement minimal `assets/site.js`**

Implement mobile navigation toggle/close-on-link, IntersectionObserver reveal enhancement and a reduced-motion bypass. The base HTML must remain fully visible and navigable when JavaScript is unavailable.

- [ ] **Step 4: Run smoke test**

Run: `node tests/site-smoke.mjs`
Expected: PASS.

- [ ] **Step 5: Commit**

`git add index.html assets/site.js tests/site-smoke.mjs && git commit -m "feat: add lightweight cinematic interactions"`

### Task 4: Audition and public-route integrity

**Files:**
- Modify: `auditions.html` only if required for visual/navigation consistency
- Modify: `tests/site-smoke.mjs`

**Interfaces:**
- Consumes: established Bappaz visual language and current audition application details.
- Produces: intact homepage-to-audition conversion path.

- [ ] **Step 1: Add route/content assertions**

Read both HTML files and assert the home page links to `auditions.html`, audition page retains the Ishq Bukhar heading/application route, and both pages contain viewport metadata.

- [ ] **Step 2: Run test and identify any actual mismatch**

Run: `node tests/site-smoke.mjs`
Expected: PASS if existing audition page already satisfies route/content requirements; otherwise FAIL only on the mismatched requirement.

- [ ] **Step 3: Make only required audition-page corrections**

Do not redesign unrelated audition content; align branding/navigation only where needed and preserve the existing application information.

- [ ] **Step 4: Re-run smoke test**

Run: `node tests/site-smoke.mjs`
Expected: PASS.

- [ ] **Step 5: Commit if files changed**

`git add auditions.html tests/site-smoke.mjs && git commit -m "fix: preserve audition conversion path"`

### Task 5: Preview verification and release gate

**Files:**
- Modify: only files revealed by verification failures.

**Interfaces:**
- Consumes: completed static site.
- Produces: a release-ready branch/PR suitable for GitHub Pages integration.

- [ ] **Step 1: Run automated smoke verification**

Run: `node tests/site-smoke.mjs`
Expected: PASS.

- [ ] **Step 2: Serve the branch locally/preview and inspect representative widths**

Check approximately 360×800, 390×844, 768×1024 and 1440×900. Verify no horizontal scroll, clipped headings, overlapping navigation or inaccessible CTA buttons.

- [ ] **Step 3: Inspect key content/assets**

Verify Shiva and RK portraits load, optional project artwork failure does not damage layout, all anchors navigate, audition links work, keyboard focus is visible, and reduced-motion mode leaves all content visible.

- [ ] **Step 4: Fix only observed verification defects and rerun checks**

Repeat smoke test and affected viewport checks until clean.

- [ ] **Step 5: Commit verification fixes**

`git add index.html auditions.html assets/site.css assets/site.js tests/site-smoke.mjs && git commit -m "fix: polish responsive website preview"`

- [ ] **Step 6: Integrate only after preview approval**

Use the redesign branch/PR for final review; merge to `main`, then verify the GitHub Pages deployment and inspect the public mobile URL once more.