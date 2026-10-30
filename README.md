# Shounak Paul — Portfolio

A one-page portfolio for Shounak Paul, a Generative AI Engineer working on
voice agents, retrieval systems, and backend services.

The design is matte black and red with a neutral light option, editorial serif
headings, and restrained motion. It intentionally stays small: one page, four
sections, and three project repositories.

## Stack

- React 18
- Vite 5
- React Router 6
- Tailwind CSS 3
- React Icons

No UI library, animation library, or backend service is required.

## Run locally

```bash
npm install
npm run dev
```

Open the URL printed by Vite (normally `http://localhost:5173`).

Production build and preview:

```bash
npm run build
npm run preview
```

Lint:

```bash
npm run lint
```

## Structure

The single page at `/` contains:

1. **Intro** — role, location, short introduction, links to work and résumé.
2. **Selected work** — DocInsight, DCGAN Cat Image Generation, and Siamese Face
   Verification.
3. **Experience** — Chat360, VDOIT Technologies, one earlier leadership line,
   education, and certifications.
4. **Toolkit** — the full skill matrix from the résumé.
5. **Contact** — email, phone, GitHub, LinkedIn, and résumé download.

Legacy paths redirect to the relevant section:

| Legacy path | Destination |
| --- | --- |
| `/work`, `/work/*`, `/projects` | `/#work` |
| `/experience`, `/certifications` | `/#experience` |
| `/about` | `/#toolkit` |
| `/contact` | `/#contact` |

The app uses browser history routing. When deploying to a static host, configure
a SPA fallback that rewrites unknown paths to `index.html`.

## Content

All copy and data live in
[`src/content/portfolio.js`](src/content/portfolio.js): profile, links, projects,
experience, skills, education, and certifications.

The primary source is `resume.pdf` (2026). The downloadable copy is published
from `public/resume.pdf`. If you update the résumé, replace both files.

The project archive was intentionally reduced to the three projects closest to
current generative AI and ML work. The other legacy projects and an earlier
internship entry were removed. TEDxNIITUniversity is retained as a single
leadership line.

## Assets

- Portrait: `src/assets/main.jpg`, cropped to 4:5 and optimized to WebP in `public/images/`.
- Résumé: `public/resume.pdf`.
- Favicon and touch icon: derived from `public/favicon.svg`.
- Fonts are self-hosted from `public/fonts/` (DM Sans, Instrument Serif,
  JetBrains Mono) under the SIL Open Font License. See
  `public/fonts/README.md` and `public/fonts/OFL.txt`.
- Design system: `design-system/shounak-paul/MASTER.md`.

## Motion and accessibility

- Content reveals once as it enters the viewport.
- Navigation underlines and project-row arrows have short hover transitions.
- Reduced-motion preferences remove all reveal, smooth-scroll, and transform
  motion.
- Native `<dialog>` mobile navigation with focus containment, Escape handling,
  and focus restoration.
- Theme defaults to matte black, can be switched to light, and persists in
  `localStorage`.
- Page metadata is managed by `usePageMeta`; the site is a single route.
