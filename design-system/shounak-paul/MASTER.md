# Shounak Paul — Design System Master

**Direction:** Matte black and red, quiet editorial restraint.

A one-page portfolio for a generative AI engineer. The design pairs a matte
near-black canvas with a single red accent, editorial serif headings, and small
monospaced metadata. The goal is understatement: the work is presented plainly,
without slogans, large decorative panels, or invented proof.

## Product context

- Audience: hiring teams, engineering leads, collaborators, and peers.
- Job to be done: give a quick, credible picture of current AI/backend work and
  make contact straightforward.
- Tone: direct, factual, modest. Every claim should be traceable to the résumé
  or a public project repository.

## Visual pillars

1. **Restraint.** One page, four sections, three projects. Nothing is included
   only to fill space.
2. **Matte contrast.** Flat black/charcoal surfaces, subtle hairlines, and a
   single red accent. No gradients, glassmorphism, glow, or texture.
3. **Editorial structure.** Serif section headings, small mono labels, generous
   line-height, and asymmetric but simple columns.
4. **Motion with manners.** Short fades and small moves; no parallax, looping
   animation, cursor effects, or scroll-jacking.

## Color tokens

Defined in `src/index.css` and exposed through Tailwind.

| Token | Light | Dark | Use |
| --- | --- | --- | --- |
| `paper` | `#F4F4F5` | `#09090B` | Page background |
| `surface` | `#FFFFFF` | `#121214` | Image frame, hover row |
| `ink` | `#111113` | `#F4F4F5` | Primary text |
| `muted` | `#5F5F68` | `#A1A1AA` | Secondary text |
| `line` | `#D9D9DE` | `#27272A` | Rules and borders |
| `accent` | `#C01822` | `#E5484D` | Links, active states, key marks |
| `on-accent` | `#FFFFFF` | `#09090B` | Text on red |
| `footer` | `#0C0C0E` | `#0C0C0E` | Footer in both themes |
| `footer-ink` | `#F4F4F5` | `#F4F4F5` | Footer text |
| `footer-muted` | `#A1A1AA` | `#A1A1AA` | Footer secondary text |
| `footer-line` | `#2A2A2E` | `#2A2A2E` | Footer borders |
| `footer-accent` | `#EF4444` | `#E5484D` | Footer emphasis |

Contrast:

- Light: ink on paper 17.5:1, muted on paper 5.49:1, accent on paper 5.63:1,
  white on accent 6.19:1.
- Dark: ink on paper 17.7:1, muted on paper 7.7:1, accent on paper 5.08:1,
  black on accent 5.08:1.

The dark theme is the default. Light is available through the header toggle and
is stored in `localStorage`.

## Typography

- **Display:** Instrument Serif 400, normal and italic. Section headings and the
  hero only.
- **Body:** DM Sans 300–700.
- **Metadata:** JetBrains Mono 400–500, uppercase, 0.14em tracking.

Scale:

| Class | Size | Use |
| --- | --- | --- |
| `display-xl` | `clamp(2.7rem, 5.6vw, 5rem)` | Hero h1 |
| `display-lg` | `clamp(2.2rem, 4vw, 3.6rem)` | Section h2 |
| `display-md` | `clamp(1.8rem, 2.8vw, 2.6rem)` | Reserved for larger detail |
| `display-sm` | `clamp(1.35rem, 2vw, 1.75rem)` | Small headings |
| `lede` | `clamp(1.05rem, 1.4vw, 1.2rem)` | Hero introduction |
| `eyebrow` | `0.65rem` | Dates, locations, labels |

Body copy is 0.9–0.95rem with 1.6–1.7 line height. Long copy is capped at 65ch.

## Layout

- Container: max 1240px, gutters 20/32/40px.
- Desktop grid: 12 columns, 32px gutter.
- Section spacing: `clamp(4rem, 7vw, 6.5rem)`.
- Hero: 7 columns text, 4 columns portrait starting at column 9.
- Section content: 3-column metadata + 8-column content.
- Rules are 1px `line`; corners are 2px only.
- Sticky header: 72px. Anchor offset: 88px (`scroll-padding-top`).

## Components

### Header

Matte page background, bottom rule, red square monogram, four anchor links,
résumé button, theme toggle, mobile menu button. Active section links are
underlined in red and expose `aria-current="location"`.

### Mobile navigation

Native `<dialog>` full-screen panel. Focus is moved to the close button, Escape
closes it, body scrolling is locked, and focus returns to the trigger. Links are
plain anchors; selecting one closes the panel and scrolls to the section.

### Project rows

Three full-row external links. Each row has an index, title, one-sentence
description, stack, and repository label. Hover shifts the background to
`surface`, turns the title red, and moves the arrow 2px. No project covers,
mockups, or screenshots.

### Experience

A metadata column (date, company, role, location) and a concise set of factual
bullets. Current work is marked only by the "Present" date. Earlier leadership
is one line. Education and certifications share one compact block.

### Toolkit

A definition list. Category on the left, tools separated by slashes on the
right. No skill bars, percentages, or rankings.

### Contact

One short line, a large email link, copy-email control, and a compact table for
phone, location, social links, and the résumé. No contact form.

### Footer

Near-black in both themes. Name, role/location, email/social links, back to top,
copyright, and a one-line credit.

## Motion

- Hero and section content reveal with a 650ms opacity + 14px rise.
- Reveals run once, when a section first enters the viewport.
- Stagger is limited to 60–80ms on adjacent elements.
- Navigation underlines scale in; buttons invert to an outline; arrows move.
- `prefers-reduced-motion: reduce` shows all content immediately and removes
  smooth scrolling and transforms.

## Accessibility

- Semantic landmarks, one h1, section h2s, and meaningful h3s.
- Visible skip link and red focus outline.
- Primary controls (buttons, menu, theme) use a 44px minimum height; inline text
  links are spaced for comfortable pointer use.
- Native dialog focus containment and restoration.
- Contrast verified in both themes.
- No information conveyed by color alone.
- Anchors use native hash navigation and respect the sticky header offset.

## Anti-patterns

- Slogans, self-praise, invented metrics, testimonials, or client logos.
- Gradient washes, glows, glass, oversized decorative numbers, or fake covers.
- More than three featured projects.
- Infinite or scroll-driven animation.
- Pages for the sake of having pages.
