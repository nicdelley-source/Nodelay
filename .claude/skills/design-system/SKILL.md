---
name: design-system
description: Design system rules for the Nodelay landing page — typography scale, 8px spacing grid, color tokens, component patterns, and anti-generic-AI-aesthetic guidance. Use whenever creating, editing, or styling any UI component, section, or page in this repo.
---

# Nodelay Design System

This project has a real design system, defined as CSS custom properties in
`styles.css` (`:root`). Never invent one-off hex codes, random `px`/`rem`
font sizes, or arbitrary spacing values — use the tokens below. If a new
value is genuinely needed, add it to `:root` as a token first, then use the
token everywhere else.

## Typography scale

Font: `Inter` (`-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`
fallback). Line height `1.55` for body copy.

| Token | Size | Use |
|---|---|---|
| `--text-xs` | 12px | eyebrow labels, meta, badges |
| `--text-sm` | 14px | nav links, small UI text, captions |
| `--text-base` | 16px | body copy |
| `--text-lg` | 18px | lead paragraphs, hero sub-copy |
| `--text-xl` | 20px | card titles, nav logo |
| `--text-2xl` | 24px | section sub-headings |
| `--text-3xl` | 30px | stat numbers |
| `--text-4xl` | `clamp(1.8rem, 3vw, 2.4rem)` | section headings (`h2`) |
| `--text-5xl` | `clamp(2.4rem, 5vw, 3.75rem)` | hero heading (`h1`) |

Weights: `500` (medium UI text) / `600` (buttons, nav, labels) / `700`
(card/feature titles) / `800` (headings, stat numbers) — no other weights.

## Spacing — 8px base grid

| Token | Value |
|---|---|
| `--space-1` | 4px *(half-step exception only)* |
| `--space-2` | 8px |
| `--space-3` | 16px |
| `--space-4` | 24px |
| `--space-5` | 32px |
| `--space-6` | 48px |
| `--space-7` | 64px |
| `--space-8` | 96px |

Use these for `padding`, `margin`, and flex/grid `gap`. Section vertical
padding is `--space-8` (96px) top/bottom on desktop; card padding is
`--space-4` (24px)–`--space-5` (28–32px). Never hand-pick an odd value
(`13px`, `9px`, `5px`, …) — round to the nearest token.

## Color tokens

Dark theme. Do **not** use default Tailwind grays/blues or generic
`#000`/`#fff` — everything routes through these tokens:

| Token | Value | Role |
|---|---|---|
| `--bg` | `#06070a` | page background |
| `--bg-elevated` | `#0d0f14` | raised sections |
| `--card` | `#12151c` | card/panel surfaces |
| `--card-border` | `rgba(255,255,255,0.08)` | hairline borders |
| `--text` | `#f3f5f8` | primary text |
| `--text-muted` | `#9aa3b2` | secondary text |
| `--text-faint` | `#5c6472` | tertiary/disabled text |
| `--accent` | `#6ee7d6` | primary accent (teal) — CTAs, links, highlights |
| `--accent-2` | `#8b7bf7` | secondary accent (violet) — gradient pair, secondary emphasis |
| `--accent-gradient` | `linear-gradient(135deg, #6ee7d6 0%, #8b7bf7 100%)` | hero glow, primary buttons, stat/icon accents |

Never mix in an unrelated hue (no random blue/green/red) — every accent use
comes from the teal→violet pair above, including in states (hover/focus
just adjust opacity/brightness of these tokens, not a new color).

## Component patterns

**Buttons** (`.btn`): pill-shaped (`border-radius: 999px`), `padding: 12px
22px`, `font-weight: 600`, `font-size: var(--text-sm)` (0.95rem existing).
- Primary: `--accent-gradient` background, dark text.
- Secondary: transparent background, `--card-border` border, `--text` color.
- Hover: brighten/lift (subtle `translateY(-1px)` + shadow), never a hue
  change. Focus: visible outline in `--accent`. Disabled: `--text-faint`
  color, no pointer.

**Cards**: `background: var(--card)`, `border: 1px solid var(--card-border)`,
`border-radius: var(--radius-lg)` (20px) for feature/pricing cards,
`var(--radius-md)` (14px) for smaller nested panels, `padding: var(--space-4)`
to `var(--space-5)`. Icon badges inside cards are circular
(`border-radius: 50%`) using the accent gradient.

**Forms**: inputs use `--card` background, `--card-border` border,
`--radius-sm`/`--radius-md`, `padding: 12–13px 16px`, placeholder in
`--text-faint`. Label text is `--text-sm`, `--text-muted`. Submit buttons
follow the primary `.btn` pattern above — never a bare unstyled `<button>`.

**Sections**: wrapped in `.container` (`max-width: var(--container)` =
1180px, `padding-inline: 24px`), vertical rhythm via `--space-8`.

## Avoid generic AI aesthetic

- No default Tailwind indigo/violet/slate palette lifted verbatim — this
  project's palette is the teal/violet pair above, on a near-black
  background, not a light gray SaaS template.
- No centered-hero-with-generic-gradient-blob cliché beyond what's already
  established (`.bg-glow`) — don't add a second, unrelated glow/blob system.
- No default browser `border-radius: 4px` on everything, and no
  inconsistent radii — use exactly `--radius-sm/md/lg` (10/14/20px).
- No filler copy like "Lorem ipsum" or "Feature 1/2/3" in committed code —
  match the existing tone (short, confident, technical) from `index.html`.
- No stock-icon-grid-of-generic-checkmarks — icons should feel intentional,
  not padding out the layout.
- Every new component must reuse an existing token above. If it can't,
  that's a signal to extend the system deliberately (add the token, document
  it here) rather than freehand a value.
