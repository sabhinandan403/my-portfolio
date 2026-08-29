# Portfolio Redesign Directive: UI/UX & Interaction Overhaul (Version 0.3 Spec)

## 1. Design Philosophy & Visual Aesthetic
- **Minimalist & Editorial Tone:** Avoid generic template aesthetics, rounded bubble cards, and cluttered multi-color gradients. Use an editorial, high-craft aesthetic with generous negative space, crisp borders (`border-neutral-800` / `border-neutral-200`), and subtle background textures (e.g., subtle noise or dot grids).
- **Typography & Scale:**
  - Modern sans-serif (e.g., Geist, Inter, or Plus Jakarta Sans) paired with a monospace font (e.g., JetBrains Mono) for tags, metrics, and technical metadata.
  - Strict typographic hierarchy: High-contrast headings, muted secondary labels (`text-neutral-400`), and readable body line-height (`leading-relaxed`).
- **Color System (Dark-first or Clean Dynamic Mode):**
  - Background: Deep neutral/slate (e.g., `#0a0a0a` or `#090d16`), not pure saturated black.
  - Surface/Card Layers: Subtle contrast shift (`#121212` or translucent glass `backdrop-blur-md bg-white/5`).
  - Accent: A single intentional accent color (e.g., electric indigo, emerald, or warm amber) used strictly for interactive states, focal badges, and key CTAs.

---

## 2. Interactive Design & Motion Philosophy
- **Tactile & Snappy Micro-interactions:**
  - Fast easing curves (`cubic-bezier(0.16, 1, 0.3, 1)` or spring physics via Framer Motion) with durations under 250ms for hovers and clicks.
  - Interactive elements (cards, buttons, links) must have subtle state changes: border glow, soft 1–2px lift (`-translate-y-0.5`), or cursor magnets.
- **Progressive Reveal & Scroll:**
  - Smooth page transitions and viewport-triggered element reveals with staggered delays (`staggerChildren: 0.08`).
  - Keep scroll interactions light and performance-first; avoid laggy full-page scroll hijacks.
- **Accessibility & Feedback:**
  - Full keyboard navigability (`focus-visible` rings with accent color).
  - Clear loading states, active states, and external link indicators.

---

## 3. Skills Architecture & Presentation
Organize skills into clean, scannable interactive clusters or a filtered Bento grid:

### A. UX & Product Strategy
- User Research & Testing, Information Architecture (IA), Wireframing & Rapid Prototyping, Accessibility Standards (WCAG 2.1), User Journey Mapping.

### B. UI & Design Systems
- Design Systems & Token Architecture, Visual Hierarchy & Typography, Figma (Auto-layout, Variables, Prototyping), Micro-interactions & Motion Design.

### C. Frontend Architecture & Design Engineering
- TypeScript, React, Next.js, Semantic HTML5 / Modern CSS, Tailwind CSS, Component Systems (Radix UI / Shadcn UI).

### D. Motion & Interaction
- Framer Motion, GSAP, CSS Animations/Keyframes, Responsive & Adaptive Layouts.

### E. Data & AI Engineering
- PySpark, Databricks, Delta Lake, Kafka, AI Agents, Tool Calling, Vector Search.

---

## 4. Required Component Layout
- **Hero:** Punchy headline focusing on design engineering & backend/frontend craft, status pill ("Available for new opportunities"), and rapid links (GitHub, LinkedIn, Resume, Email).
- **Interactive Bento Grid / Showcase:** Highlight key projects with live demo links, architecture tags, and problem/solution summaries.
- **Categorized Skills Section:** Tabbed or clean grid with subtle hover highlights and level/focus chips.
- **Experience / Timeline:** Minimalist line-connected chronology with company, role, key achievements, and tech stack tags.
- **Contact / Footer:** Clean direct call-to-action with instant copy-to-clipboard for email.
