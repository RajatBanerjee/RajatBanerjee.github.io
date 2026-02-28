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
├── js/main.js        ← scroll effects, typed-text animation, IntersectionObserver
└── img/headshot.jpg  ← hero photo (circular headshot, sourced from GitHub avatar)
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

## Content validation rules

When editing portfolio content, follow these rules:

### Voice & tone
- **Portfolio voice, not LinkedIn voice.** Write in first person, conversational tone. Tell a story, don't list duties. The portfolio should feel like meeting the person, not reading a resume.
- **No corporate jargon.** Avoid phrases like "drove technical strategy", "partnered with stakeholders", "delivered solutions". Use plain, specific language.
- **Show, don't list.** Instead of "Mentored junior developers" → "First real mentoring experience: helped junior devs level up and discovered I enjoyed it."
- **No duplicated phrasing from LinkedIn.** If a bullet sounds like it could be copy-pasted onto a LinkedIn profile, rewrite it.

### Content accuracy
- All company names, dates, and role titles must match Rajat's actual career history.
- `mailto:` link must point to `rajatmig29@gmail.com`.
- External links (Fanatics, Art.com, LinkedIn, GitHub) must be valid URLs.
- The typed phrases in `js/main.js` must reflect engineering leadership, not IC engineering.

### Image requirements
- Hero headshot lives at `img/headshot.jpg`.
- Must be a real photo (not a placeholder/avatar). Minimum 300px in either dimension.
- Styled as a circle via CSS (`border-radius: 50%`; `object-fit: cover`).

### CSS requirements
- Every class used in `index.html` must have a corresponding rule in `css/style.css` (or be a child styled via parent selectors).
- No orphaned CSS selectors (selectors targeting classes that don't exist in HTML).
- Responsive breakpoints must be tested: 768px (tablet) and 480px (mobile).
- Hero layout: two-column on desktop (text left, photo right), stacked on mobile (photo above text).

### Pre-commit checklist
Before committing any content or style change, verify:
1. No placeholder text remains (`example.com`, `Your Company`, `lorem`, `TODO`)
2. All HTML is valid (no unclosed tags, no mismatched nesting)
3. CSS class cross-check passes (no orphaned selectors in either direction)
4. Page renders without console errors at desktop, 768px, and 480px widths
5. Typed-text animation cycles through all phrases without visual glitches

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
