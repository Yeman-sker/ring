---
version: alpha
name: Ring — Cursor-Inspired
description: A personal blog design system inspired by the Cursor product blog (cursor.com/cn/blog). Warm minimalism with a sharp accent, grounded in off-white surfaces and ink-dark text.
colors:
  bg: "#f7f7f4"
  fg: "#26251e"
  accent: "#f54e00"
  card: "#f2f1ed"
  card-02: "#ebeae5"
  card-03: "#e6e5e0"
  card-warm: "#f3ede6"
  text-sec: "#26251e99"
  text-mid: "#26251e80"
  text-tertiary: "#26251e66"
  border-01: "#26251e06"
  border-02: "#26251e1a"
  border-03: "#26251e99"
  success: "#1f8a65"
  error: "#cf2d56"
typography:
  h1:
    fontFamily: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif
    fontSize: 52px
    fontWeight: 600
    lineHeight: 1.1
    letterSpacing: -0.025em
  h2:
    fontFamily: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif
    fontSize: 36px
    fontWeight: 600
    lineHeight: 1.15
    letterSpacing: -0.02em
  h3:
    fontFamily: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif
    fontSize: 26px
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: -0.0125em
  h4:
    fontFamily: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif
    fontSize: 22px
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: -0.005em
  body-lg:
    fontFamily: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0.005em
  body:
    fontFamily: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.625
    letterSpacing: 0.005em
  body-sm:
    fontFamily: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0.01em
  label:
    fontFamily: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif
    fontSize: 12px
    fontWeight: 500
    lineHeight: 1.25
    letterSpacing: 0.01em
  code:
    fontFamily: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.5
rounded:
  none: 0
  xs: 4px
  sm: 4px
  md: 8px
  lg: 12px
  xl: 16px
  full: 9999px
spacing:
  px: 1px
  0\.25: 2.5px
  0\.5: 5px
  0\.75: 7.5px
  1: 10px
  1\.5: 15px
  2: 20px
  2\.5: 25px
  3: 30px
  4: 40px
  5: 50px
  6: 60px
  v1: 22.4px
  v2: 44.8px
  v3: 67.2px
  v4: 89.6px
  v5: 112px
  v6: 134.4px
  v8: 179.2px
components:
  button-primary:
    backgroundColor: "{colors.fg}"
    textColor: "{colors.bg}"
    rounded: "{rounded.full}"
    padding: ".89em 1.45em .91em"
    typography: "{typography.body}"
    fontWeight: 500
  button-primary-hover:
    backgroundColor: "#3b3a33"
  button-secondary:
    backgroundColor: "{colors.card-03}"
    textColor: "{colors.fg}"
    rounded: "{rounded.full}"
    padding: ".45em .8em .46em"
    typography: "{typography.body-sm}"
  button-secondary-hover:
    backgroundColor: "{colors.card-02}"
  button-ghost:
    backgroundColor: transparent
    textColor: "{colors.fg}"
    borderColor: "{colors.border-02}"
    rounded: "{rounded.full}"
    padding: ".45em .8em .46em"
  button-ghost-hover:
    backgroundColor: "{colors.card}"
  card:
    backgroundColor: "{colors.card}"
    rounded: "{rounded.md}"
    padding: "{spacing.1\.5}"
  card-02:
    backgroundColor: "{colors.card-02}"
  card-03:
    backgroundColor: "{colors.card-03}"
  badge:
    backgroundColor: "{colors.border-02}"
    textColor: "{colors.fg}"
    rounded: "{rounded.xs}"
    padding: "2px 8px"
    typography: "{typography.label}"
---
## Overview

Warm minimalism rooted in a physical-material palette. The background is not pure white but a soft off-white (`#f7f7f4`), evoking uncoated paper or limestone. Text is a warm dark ink (`#26251e`), not pure black — it reads softer and more natural. The single accent, a vibrant burnt orange (`#f54e00`), drives all interaction and creates a strong brand anchor.

The design feels spacious, editorial, and premium — like a well-printed magazine translated to screen. Surfaces are distinguished by subtle tone shifts rather than shadows. Borders are barely there (`#26251e1a` at 10% opacity). The overall effect is calm, confident, and不失锐利.

## Colors

The palette is built from a single warm-gray axis plus one accent.

- **Background (`#f7f7f4`):** Warm off-white foundation. All pages sit on this. Never pure white.
- **Foreground / Ink (`#26251e`):** A warm near-black for all body text and headings. High contrast but less harsh than `#000`.
- **Accent (`#f54e00`):** Burnt orange — the single interactive driver. Used for links, hover states, active indicators, and primary calls-to-action.
- **Card (`#f2f1ed` → `#ebeae5` → `#e6e5e0`):** Three levels of surface elevation. Cards, dropdowns, and hovered items step down the brightness scale by ≈5% each level.
- **Card Warm (`#f3ede6`):** A slightly warmer variant for special content blocks.
- **Text Secondary (`#26251e99`):** At 60% opacity of ink. For metadata, captions, muted information.
- **Text Tertiary (`#26251e66`):** At 40% opacity. For placeholder text, timestamp labels.
- **Borders (`#26251e06` → `#26251e1a` → `#26251e99`):** Extremely subtle. At 2.5%, 10%, and 60% opacity. Border-03 is used only where strong delimitation is needed (e.g., focus rings).
- **Success (`#1f8a65`):** A forest green for positive signals.
- **Error (`#cf2d56`):** A muted crimson for destructive actions and error states.

### Tone-on-Tone Surface System

Depth is communicated through tonal layers, not drop shadows. The hierarchy:

| Surface | Token | Usage |
|---|---|---|
| Base page | `bg` `#f7f7f4` | Default background |
| Card | `card` `#f2f1ed` | Content containers, blog cards |
| Card 02 | `card-02` `#ebeae5` | Hovered cards, flyout menus, elevated surfaces |
| Card 03 | `card-03` `#e6e5e0` | Secondary buttons, input backgrounds, deeper containers |
| Card 04 | `card-04` `#e1e0db` | Highest surface contrast, pressed states |

Each step darkens the base by ≈2-3%. The progression is linear and predictable.

## Typography

The primary typeface is the **system UI stack**: clean, neutral, and instantly legible. This avoids the performance cost of web fonts while maintaining a polished appearance. For monospace needs, the system monospace stack is used. When loaded optionally, **EB Garamond** (serif) is available for editorial flourishes and pull quotes.

**System UI Font Stack:**
```
ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont,
"Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif
```

**System Mono Stack:**
```
ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
"Liberation Mono", "Courier New", monospace
```

### Scale

| Level | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| h1 | 52px | 600 | 1.1 | -0.025em | Hero / page title |
| h2 | 36px | 600 | 1.15 | -0.02em | Section heading |
| h3 | 26px | 600 | 1.2 | -0.0125em | Subsection |
| h4 | 22px | 600 | 1.25 | -0.005em | Card title |
| body-lg | 18px | 400 | 1.5 | +0.005em | Large body / intro |
| body | 16px | 400 | 1.625 | +0.005em | Default reading size |
| body-sm | 14px | 400 | 1.5 | +0.01em | Metadata, nav |
| label | 12px | 500 | 1.25 | +0.01em | Tags, badges |
| code | 14px | 400 | 1.5 | — | Inline / block code |

### Design Choices

- **No web fonts by default.** The system stack loads instantly, respects user preference, and pairs naturally with the warm color palette.
- **Tight tracking on headings** (`-0.02em` to `-0.025em`) gives a contemporary editorial feel.
- **Body uses a relaxed line height** (1.625) for comfortable long-form reading.
- **Small labels are 500 weight** for emphasis at small sizes.

## Layout & Spacing

The layout system has two parallel units: a **horizontal 10px grid** (`--g: calc(10rem/16) = 10px`) for inline spacing and column gaps, and a **vertical rhythm unit** (`--v: 1rem * 1.4 = 22.4px`) derived from the body line-height for vertical margins and padding.

### Horizontal Spacing Scale (g-unit)

| Token | Value | Common Use |
|---|---|---|
| g0.25 | 2.5px | Micro adjustments, fine-tuned gaps |
| g0.5 | 5px | Tight gaps, icon spacing |
| g0.75 | 7.5px | Button padding inner, chip gaps |
| g1 | 10px | Component gap, column gap |
| g1.5 | 15px | Card inner padding, section spacing |
| g1.75 | 17.5px | Blog filter margins |
| g2 | 20px | Page horizontal padding |
| g3 | 30px | Large gaps, footer sections |
| g4 | 40px | Page section spacing |
| g5 | 50px | Major segments |
| g6 | 60px | Page gutters |

### Vertical Spacing Scale (v-unit)

| Token | Value | Common Use |
|---|---|---|
| v1 | 22.4px | Section padding |
| v1.5 | 33.6px | Section margins |
| v2 | 44.8px | Button/input height increments |
| v3 | 67.2px | Footer padding |
| v4 | 89.6px | Section spacing |
| v4.5 | 100.8px | Default section `my-*` |
| v5 | 112px | Wide section spacing |
| v6 | 134.4px | Page-level section separation |
| v8 | 179.2px | Hero / masthead spacing |

Fractional v-units (`v3/12`, `v6/12`, etc.) provide fine-grained control — a `v6/12` = 67.2px, `v3/12` = 16.8px, etc.

### Page Layout Architecture

The page uses a **24-column grid** as its structural backbone. Every major section aligns to this grid.

```css
.grid-cursor {
  display: grid;
  grid-template-columns: repeat(24, 1fr);
  gap: var(--spacing-g1); /* 10px */
}
```

Column spans use Tailwind-style classes (`col-span-full`, `col-start-1 col-end-17`, etc.) with responsive prefixes (`md:`, `lg:`, `xl:`).

### Container

The main container wraps content inside the 24-column grid and constrains max-width:

| Breakpoint | Container Max-Width |
|---|---|
| Mobile (< 420px) | 420px |
| sm (≥ 420px) | 660px |
| md (≥ 660px) | 900px |
| lg (≥ 900px) | 1140px |
| xl (≥ 1140px) | 1300px |

```css
.container {
  max-width: var(--max-width-container, 1300px);
  width: 100%;
  margin-inline: auto;
}
```

Page padding: `px-g2` (20px) on both sides, unchanged across all breakpoints. On mobile, negative margins (`-mx-g2`) allow cards and scrollable regions to bleed edge-to-edge.

## Page Layout

### Page Anatomy (Top-to-Bottom)

```
┌─────────────────────────────────────┐
│  HEADER (fixed, 56px)              │
│  ├ Logo (left)                      │
│  ├ Nav (center, hidden on mobile)   │
│  └ Actions (right: theme, lang)     │
├─────────────────────────────────────┤
│                                     │
│  SECTION (my-v4.5 to my-v6)        │
│  ├ Featured Blog Post (hero card)   │
│  │  ├ Image (aspect-ratio 40:21)    │
│  │  ├ Category + Meta              │
│  │  ├ Title                         │
│  │  ├ Description                   │
│  │  └ Author Avatars + Reading Time │
│  └ Blog Filter (horizontal nav)    │
│                                     │
│  SECTION — Blog Grid                │
│  ├ Filter Tabs (scrollable)         │
│  └ Post Grid                        │
│     ├ Mobile: horizontal scroll     │
│     ├ lg: 3-column grid             │
│     └ xl: 4-column grid             │
│                                     │
│  SECTION — Newsletter               │
│  ├ Call-to-action text              │
│  └ Email input + Subscribe button   │
│                                     │
│  SECTION — Customer Stories         │
│  ├ Pull quote block                 │
│  └ Case study cards (2-col grid)    │
│                                     │
│  SECTION — More Content             │
│  ├ Recent posts                     │
│  ├ Other sections (products, etc.)  │
│  └ "Read more" link                 │
│                                     │
├─────────────────────────────────────┤
│  FOOTER                             │
│  ├ Multi-column nav (md: 5-col)     │
│  ├ Social / Language / Theme        │
│  └ Copyright                        │
└─────────────────────────────────────┘
```

### Header

- **Fixed position:** `fixed top-0 left-0 z-50 w-full`
- **Height:** 56px (`--site-header-height`)
- **Sticky offset:** `--site-sticky-top: 64px` (accounts for header + gap)
- **Layout:** 3-zone grid — `grid-cols-[1fr_auto_auto]` on mobile, `lg:grid-cols-[auto_1fr_auto]` on desktop
  - **Left:** Brand logo / site title
  - **Center:** Primary nav (hidden on mobile, visible from lg)
  - **Right:** Theme toggle (system/light/dark), language selector
- **Background:** `bg-theme-bg` — blends with page, no border-bottom

### Blog Index Page

#### Featured Post

The latest/featured post is displayed as a hero card:
- Full-width within container
- Image with aspect ratio `40:21` (wider than 16:9)
- Overlaid or stacked layout with category badge, title (h2), description, author avatars (stacked, `-space-x-v3/12`), and reading time
- On hover, card steps one surface level darker

#### Post Grid

The secondary blog posts use a responsive card grid:

```css
/* Mobile: horizontal snap scroll */
flex w-max gap-g1 px-g2 snap-x snap-mandatory

/* lg (≥ 900px): static 3-column grid */
lg:grid lg:w-full lg:auto-rows-fr lg:grid-cols-3 lg:px-0

/* xl (≥ 1140px): 4-column grid */
xl:grid-cols-4
```

Each post card contains:
- Image header (aspect-ratio `16:9` or `40:21`), with `object-cover` and fade-in transition
- Category badge + dot separator + timestamp (label typography)
- Title (body-lg or h4 weight)
- Author name + reading time (body-sm, text-secondary)
- Hover: surface shifts one level darker, border subtly appears

#### Article Page (Single Post)

Article layout uses a sophisticated multi-column grid to accommodate inline metadata:

| Breakpoint | Grid Columns | Ratio |
|---|---|---|
| Mobile | 1 column | `grid-cols-1` |
| md (≥ 660px) | 2 columns | `7fr + 17fr` (image + content) |
| lg (≥ 900px) | 2 columns | `6fr + 18fr` |
| xl (≥ 1140px) | 5 columns | `5fr + 12fr + 1fr + 5fr + 1fr` |

The XL layout creates a wide-format reading experience with:
- **Column 1 (5fr):** Left metadata (date, reading time, tags)
- **Column 2 (12fr):** Main article content
- **Column 3 (1fr):** Decorative spacer or sticky element
- **Column 4-5 (5fr+1fr):** Right-side metadata (author info, related links)

### Section Spacing

Sections are separated using v-unit margins. Common patterns:

```css
section {
  margin-block: var(--spacing-v4.5); /* ≈100px default */
}

/* Larger sections */
.my-v5  { margin-block: var(--spacing-v5); }  /* 112px */
.my-v6  { margin-block: var(--spacing-v6); }  /* 134px */

/* Flush sections */
.section--flush-bottom { margin-bottom: 0; }
.section--flush-y { margin-block: 0; }
```

### Blog Filter / Category Nav

- **Mobile:** Horizontally scrollable (`overflow-x-auto`, `snap-x`), with fade-out gradient on right edge
- **Desktop:** Static, wrapped to multiple rows if needed
- Items: Pill-style buttons with `body-sm` typography, `card-03` background, `rounded-full`
- Active item: Accent blue or orange text, or card-02 background

### Newsletter Subscription

A compact row with:
- Left: Call-to-action title + subtitle (body-sm, text-secondary)
- Right: Inline form — input field (rounded-xs) + primary button (pill, `订阅 →`)
- Background: card-02 or transaprent, full-width within container

### Footer

- **Background:** `bg-theme-card-hex` (`#f2f1ed`) — slightly darker than page bg
- **Padding:** `pt-v3 pb-v3 md:pb-g3 px-g2` (top 67px, bottom 67px-20px)
- **Primary nav:** 5-column responsive grid (`grid-cols-2 md:grid-cols-5`)
- **Bottom bar:** Copyright + links | Social icons | Language selector | Theme switcher
- Each column has an `<h3>` heading + `<ul>` link list

### Cards (Detailed)

Cards are the primary container for content blocks. They use the tonal surface system:

| Variant | Class | Background | Usage |
|---|---|---|---|
| Default card | `.card` | `card` (`#f2f1ed`) | Content blocks, blog posts |
| Feature card | `.card--feature` | `card` | Featured posts, hero content |
| Flyout card | `.card--flyout` | `card-02` + border | Dropdowns, popover menus |
| Sub-nav card | `.card--sub-nav` | `card-02` | Navigation dropdowns |
| Media card | `.card--media` | `card` | Cards with featured images |

Hover behavior: Default cards shift one surface level darker on hover (`card-02`). Interactive cards may also show a subtle border on hover.

### Aspect Ratios

| Ratio | Usage |
|---|---|
| `16:9` | Standard featured images, video thumbnails |
| `40:21` | Hero blog card images (wider, more cinematic) |
| `1:1` | Avatar containers |

### Transitions

Default transition duration: `0.14s` (fast). Easing uses a custom spring curve:

```css
--ease-out-spring: cubic-bezier(0.25, 1, 0.5, 1);
--ease-out: cubic-bezier(0, 0, 0.2, 1);
--duration: 0.14s;
--duration-slow: 0.25s;
```

Hover transitions apply to:
- Card surface shifts
- Button background/color changes
- Image opacity on load (fade-in)
- Input focus border color

## Elevation & Depth

Depth is achieved through **Tonal Layers** rather than heavy shadows. Elements at higher z-indexes use darker card surfaces (`card-02`, `card-03`) instead of drop shadows.

When shadows are used, they are exceptionally subtle:

- **Flyout shadow:** `0 0 1rem rgba(0,0,0,0.02), 0 0 0.5rem rgba(0,0,0,0.01)` — barely perceptible, only on the most detached elements (dropdowns, modals).
- **Large shadow:** `0 18px 48px rgba(0,0,0,0.12)` — reserved for modal dialogs.

Focus outlines use `2px solid var(--color-theme-border-03)` or a dual-ring: `0 0 0 2px var(--color-bg), 0 0 0 4px var(--color-accent)`.

## Shapes

- **Body text and most surfaces** are straight-edged or use minimal rounding.
- **Buttons** use `border-radius: 9999px` (full pill shape) for a approachable, modern feel.
- **Cards** use `--radius-md: 8px` for a subtle softening.
- **Badges, tags, and inline code blocks** use `--radius-xs: 4px`.
- **Input fields** use `--radius-xs: 4px` to distinguish them from pill buttons.

### Rounded Scale

| Token | Value |
|---|---|
| none | 0 |
| xs | 4px |
| sm | 4px |
| md | 8px |
| lg | 12px |
| xl | 16px |
| full | 9999px |

## Components

### Buttons

- **Primary (`btn`):** Dark ink background (`#26251e`), off-white text (`#f7f7f4`), full pill shape. Hover shifts to `#3b3a33`. Inverted color relationship — buttons are dark on light.
- **Secondary (`btn--secondary`):** Card-03 background, ink text. Used for secondary actions.
- **Ghost (`btn--ghost`):** Transparent with a low-opacity border. Hover fills with card background.
- **Button sizes:** default, md-sm, sm, xs — each with proportional padding.

### Cards

Cards use the tonal surface system. A card at rest is `card` (`#f2f1ed`). On hover, it steps one level darker to `card-02` (`#ebeae5`). The `.card--flyout` variant uses a thin border-style treatment for popover contexts.

### Tags / Badges

Small labels using `label` typography (12px/500), `border-02` background, and `4px` border radius. Used for categories, metadata badges, and reading-time indicators.

### Blog Post Listings

Each post is a card with:
- Optional featured image (16:9 or similar)
- Category badge
- Title (h4 or body-lg)
- Description / summary (body-sm)
- Author name + reading time (label text, secondary color)

## Do's and Don'ts

- Do use the accent orange (`#f54e00`) **sparingly** — for links, primary CTAs, and active indicators only.
- Don't use pure white (`#ffffff`) as a background — always use `#f7f7f4` or a warmer tone.
- Don't use pure black (`#000000`) for text — always use `#26251e`.
- Do prefer tonal surface shifts over box shadows for depth.
- Don't mix border-radius styles: pills (9999px) are for buttons only; cards get 8px; code blocks get 4px.
- Do maintain the font-size scale strictly — don't introduce intermediate sizes.
- Don't use more than two font weights on a single screen (use 400 and 600, with 500 for labels).
- Do use tight letter spacing (`-0.02em` or tighter) on all headings.
- Do respect the 10px grid unit for all spacing decisions.
