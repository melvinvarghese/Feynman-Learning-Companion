# Feynman Editorial Learning-Lab Website Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the generic landing-page presentation with an editorial intellectual-journal / learning-laboratory identity while preserving the site's meaning, SEO, accessibility, and static deployment.

**Architecture:** Keep the existing single-page static HTML/CSS implementation in `index.html`. Refactor its visual system and semantic page sections in place; use lightweight inline SVG/CSS for the learning-cycle illustration rather than introducing dependencies or a framework.

**Tech Stack:** HTML5, CSS, inline SVG, GitHub Pages.

**Spec:** `docs/superpowers/specs/feynman-editorial-design.md`

## Global Constraints
- Keep the site static and dependency-free.
- Preserve the canonical URL, metadata, JSON-LD, sitemap/robots/llms references, GitHub destinations, and factual FAQ content.
- Preserve the Agent Skill positioning and host-agent capability limitations.
- Do not modify `SKILL.md` or learning behavior.
- Support mobile layouts, keyboard navigation, visible focus, adequate contrast, and reduced motion.

## Review Focus
- Narrow mobile screens: no clipped typography, overflowing diagrams, or cramped navigation.
- Reduced-motion preference: decorative transitions are disabled or minimized.
- Keyboard-only navigation: every link is reachable and has a visible focus indicator.
- SEO regression: canonical, robots, social metadata, JSON-LD, and crawler links remain present and accurate.
- Semantic/accessibility regression: headings remain ordered, decorative SVGs are hidden from assistive technology, and link names remain descriptive.

---

### Task 1: Replace generic visual system and opening section

**Files:**
- Modify: `index.html`

**Interfaces:**
- Consumes: existing static HTML, metadata, navigation, and page content.
- Produces: editorial design tokens, typography, responsive shell, opening thesis, and visual motif.

- [ ] Rework CSS tokens, typography, spacing, navigation, and responsive layout to match the approved visual brief.
- [ ] Replace the generic hero with an editorial thesis-led opening and a custom lightweight learning-cycle illustration.
- [ ] Keep navigation and primary actions descriptive and functional.
- [ ] Verify HTML structure and check the opening at desktop and mobile viewport widths.

### Task 2: Recompose learning content into a coherent editorial narrative

**Files:**
- Modify: `index.html`

**Interfaces:**
- Consumes: Task 1 visual system and opening.
- Produces: visually connected entry modes, learning cycle, principle statement, use/install section, FAQ, and footer.

- [ ] Present the two entry modes as related starting points to one shared learning method.
- [ ] Present all six learning stages as a connected sequence with concise annotations.
- [ ] Give the core distinction—recognition versus genuine understanding—a strong editorial moment.
- [ ] Retain accurate installation, limitation, FAQ, repository, sitemap, and llms content.
- [ ] Verify all existing destinations and all metadata/JSON-LD remain intact.

### Task 3: Accessibility, responsive, and deployment verification

**Files:**
- Modify: `index.html` only if fixes are required.

**Interfaces:**
- Consumes: completed page from Tasks 1–2.
- Produces: verified responsive and accessible static page.

- [ ] Check semantic landmarks, heading order, link names, focus states, contrast, SVG accessibility, and reduced-motion behavior.
- [ ] Inspect desktop and mobile renderings and fix overflow or hierarchy issues.
- [ ] Validate HTML and confirm key SEO/crawler metadata and links are still present.
- [ ] Confirm GitHub Pages deployment workflow remains untouched and functional.
