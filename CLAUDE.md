# CLAUDE.md, operating brief for somoshermanos.ong

Read this first in any future session on this site.

## Client

| | |
|---|---|
| Organization | Somos Hermanos, the social arm (brazo social) of Tacos Hermanos. A Salvadoran foundation. |
| What it does | Delivers food help baskets (canastas de ayuda) to children in the Sonsonate area, every Sunday, since 2021. Works with the Escuela Biblica Dominical of Iglesia Bitinia. |
| Domain | somoshermanos.ong |
| Tier | Business (NGO) |
| Parent brand | Tacos Hermanos (tacoshermanos.com, Instagram @tacoshermanossv). Sibling site built separately; its foundation page is tacoshermanos.com/fundacion.html. |
| Built | 1 August 2026 |

## Language layout, note the inversion

This site is **Spanish-first**, matching the Tacos Hermanos family and the local audience:

- Spanish lives at `/` (`index.html`), the primary language.
- English lives at `/en/` (`en/index.html`).
- `hreflang` `x-default` points at the Spanish root.

Do not "fix" this to the usual EN-at-root pattern.

## How the site is built

Plain hand-written static HTML, no build step, no generator. Two pages that mirror each other:
`index.html` (ES) and `en/index.html` (EN). Any content change must be made in BOTH and kept in sync.
CSS is external: `assets/css/tokens.css` (colours + fonts, the only file to edit to re-skin) and
`assets/css/styles.css` (everything else). No raw brand hex is hard-coded in the HTML.

## Assets, where they came from

There was one input folder, "Inputs for Somos Hermanos - NGO website". Everything on the site was
extracted from it:

- **Wordmark + basket badge**: extracted as true vector / clean crops from the brand stand PDF
  ("Stand Somos Hermanos 23 marzo final", curvas). The wordmark is a real vector SVG with
  `currentColor`; `-blue-` and `-white-` copies are pre-coloured.
- **Two emblems** (hands + globe, children at play): cropped from the Instagram story JPGs, white
  made transparent.
- **Radiant heart** (favicon source): cropped from the brand stand, white-on-blue.
- **Hero photo** (children cheering with baskets): extracted at high quality from the stand PDF.
- **Gallery photos**: the clean child portraits from the story threads, cropped to remove the
  baked-in Instagram text bands.
- **Colours**: sampled from the stand (blue `#3D79C6`, cream `#EFDD9F`).

Originals are archived in `_source/`. The brand PDF is in `_source/intake/`.

## What is real and what is pending

Everything on the site is real content mined from the stand and the story threads. Still to confirm
from the client:

1. **Videos are self-hosted and done.** The launch video was compressed from 154 MB to ~19 MB
   (720x1280 H.264, `assets/video/video-lanzamiento-...mp4`) and plays in the "En video" section.
   Five short "Hilo de historias" clips were compressed to ~1.3-2.3 MB each and play in the new
   "Más historias" / "More stories" video wall (`#mas-historias`). All are under the 25 MB Cloudflare
   limit. Originals stay in the client's inputs folder.
2. **Direct contact for Somos Hermanos** (own email / phone / WhatsApp / Instagram), if any. Right
   now all CTAs route to the restaurant and to Tacos Hermanos channels.
3. **Favicon is the official H monogram** (white on the Hermanos blue), extracted as vector from the
   brand book. Source tile in `assets/images/icons/`, recolorable mark in
   `assets/images/logos/h-monogram-...svg`.
4. **Legal / registration details** (legal name, any donation/tax info) if the site should show them.

## Brand book and official palette

The official **Brandbook Somos Hermanos** (Manual de Identidad Visual, 8 slides) arrived after the
first build and is archived in `_source/intake/`. The site palette was updated to its exact printed
hex: Hermanos `#1C79C4`, Gratitud `#155B93`, Dar (green) `#206249`, Fe (cream) `#F1E1B9`, Juntos
(white). The favicon uses the brand's "H" monogram; the 1200x630 social-share image uses the brand
cover look (SOMOS HERMANOS wordmark, white on the Hermanos blue). Brand typefaces per the book are
Causten (titles/body) and Three Thousand (handwritten); the site ships Baloo 2 / Nunito / Caveat as
free web stand-ins, with the real logo shipped as vector so it is always exact.

## Cross-link to Tacos Hermanos (client request)

The client asked for a dedicated section linking back to the parent brand. It is the `#tacos-hermanos`
section (green band), plus a "Tacos Hermanos" column in the footer. Links: TacosHermanos.com and
Instagram @tacoshermanossv, both confirmed by the client.

## Deploy

Not deployed yet. Next stage is the **cloudflare-pages-deploy** skill: GitHub repo, Cloudflare Pages
project, custom domain somoshermanos.ong, HTTPS. `CNAME` and `.nojekyll` are in place.
`_source/` and `brand/` should be excluded from the deployed output.

## Release gate

Re-run the section 15 checklist in the website-build skill's `seo-ai-findability.md` against the final
copy, in both languages, before publishing: one clean H1 per page, no em-dashes, correct Spanish
accents and opening ¿ ¡, relative local paths, JSON-LD matching the page, no file over 25 MB.
