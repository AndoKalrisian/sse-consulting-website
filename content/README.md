# Editing the site content

Every word on the site lives in this folder. Edit a file, then run:

    npm run build

That regenerates `index.html` and `case-studies/*.html`. Refresh http://localhost:3000 (start it with `node serve.mjs`). Don't edit the generated HTML files; the next build overwrites them.

Each file has a block between `---` lines at the top (short fields like headlines and button text), then the body in normal markdown (`**bold**`, `[link text](url)`, `- lists`).

| File | What it controls |
| --- | --- |
| `site.md` | Page title, meta description, contact email, nav links, footer text |
| `hero.md` | Top of the page: headline, subhead (the body), buttons, industry tags |
| `services.md` | Intro (body above the first `##`), then one `##` per service card |
| `work.md` | Heading for the case-study cards (the cards come from `case-studies/`) |
| `industries.md` | Intro, then one `##` per industry card |
| `skills.md` | One `##` per skill group, with a bullet list |
| `engagement.md` | Intro, then `##` sections. Titles listed under `cards:` become cards; the rest become the small detail columns |
| `about.md` | Body text. The last paragraph is shown in white |
| `contact.md` | Headline, button text, location lines and the pitch (the body) |
| `case-studies/*.md` | One file per case study (see below) |

## Links to case studies

In `services.md` and `industries.md`, put a line under a section such as:

    Case study: [Modo Carshare](modo-carshare)
    Case studies: [Modo Carshare](modo-carshare), [movmi mapping dashboard](movmi-mapping-dashboard)

The part in brackets is the label; the part in parentheses is the case study's file name without `.md`.

## Case studies

Each file in `case-studies/` is one page plus one card on the home page.

- `order`: position among the cards (1, 2, 3...). Prev/next links on the pages follow this order.
- `title`, `lead`, `chips`, `glance`: the page heading, intro, small tags and "At a glance" box.
- `card_title` (optional), `card_summary`, `kicker`, `industry_tag`, `accent` (teal, sky, grey or orange), `cover`: the card on the home page. `cover` is an image URL or a root path like `/brand_assets/modo.png`, and it is also the page's banner image.
- `stats` and `stats_after`: the big-number boxes, shown after the section named in `stats_after`. Remove both to hide them.
- The body: each `##` heading becomes a section.

To add a case study, copy one of the files, change its fields, and build. Nothing else needs editing; the card and page appear on their own.

Use a leading `/` for local images, because the case study pages sit one folder deeper than the home page.
