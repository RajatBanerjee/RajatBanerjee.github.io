# Portfolio — CLAUDE.md

## Project overview

Personal portfolio one-pager for **Rajat Banerjee**, hosted on GitHub Pages at
`https://rajatbanerjee.github.io`.

## Stack

- Pure **HTML / CSS / JS** — no build step, no framework, no package manager
- Google Fonts (Inter) loaded via CDN in `index.html`
- Deployed via GitHub Pages from the `main` branch of `RajatBanerjee/RajatBanerjee.github.io`

## File structure

```
portfolio/
├── index.html        ← all sections live here
├── css/style.css     ← all styles (CSS custom properties, responsive)
└── js/main.js        ← scroll effects, typed-text animation, IntersectionObserver
```

## Design tokens (css/style.css `:root`)

| Token           | Value      | Usage                        |
|-----------------|------------|------------------------------|
| `--bg`          | `#0d1117`  | Page background               |
| `--surface`     | `#161b22`  | Card / surface backgrounds    |
| `--border`      | `#21262d`  | Dividers, borders             |
| `--text`        | `#e6edf3`  | Primary text                  |
| `--text-muted`  | `#8b949e`  | Secondary / body text         |
| `--accent`      | `#58a6ff`  | Links, highlights, accent     |
| `--accent-hover`| `#79b8ff`  | Hover state for accent        |

## Sections

1. **Nav** — sticky, transparent → frosted glass on scroll
2. **Hero** — full viewport, typed-text animation, LinkedIn + GitHub CTAs
3. **About** — bio paragraphs + skills grid
4. **Experience** — two-column timeline cards
5. **Contact** — centered CTA block
6. **Footer** — icon links

## Content to personalise

All placeholder content is marked inline. Update these in `index.html`:

- `your.email@example.com` → real email address (Contact section `<a href="mailto:...">`)
- Job titles, company names, dates, and bullet points in the `#experience` section
- Bio paragraph in `#about`
- Skills list in `.skills-list`
- The typed phrases array in `js/main.js` (line ~10) — e.g. your actual title/stack

## GitHub info

- **Personal GitHub:** `https://github.com/RajatBanerjee`
- **Repo:** `RajatBanerjee.github.io`
- **Remote (HTTPS — avoids enterprise SSH conflicts):**
  `https://github.com/RajatBanerjee/RajatBanerjee.github.io.git`
- **LinkedIn:** `https://www.linkedin.com/in/rajat-banerjee/`

## Git workflow

- Never commit directly to `main`
- Branch naming: `feature/<description>` or `fix/<description>`
- GitHub Pages is served from `main` branch, root `/`

## Local preview

```bash
python3 -m http.server 8080
# then open http://localhost:8080
```
