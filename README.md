# Somos Hermanos, website

The website for **Somos Hermanos**, the social arm (brazo social) of Tacos Hermanos: help baskets
for children in Sonsonate, every Sunday. Domain: **somoshermanos.ong**.

Fast static site, no build step. Spanish is the primary language at `/`; English is a full mirror
at `/en/`.

## How to ask for a change

Tell us what to change in plain words (a headline, a photo, a number, a link) and we make it in both
languages, preview it, and redeploy. You do not edit code.

## Where things live

- `index.html` Spanish homepage. `en/index.html` English homepage.
- `assets/css/tokens.css` all brand colours and fonts (edit this one file to re-skin).
- `assets/css/styles.css` the rest of the styling.
- `assets/images/` photos, logos, emblems, favicon source.
  - `hero/` the big header photo. `gallery/` the children photos. `logos/` the wordmark and marks.
- `brand/brand.md` the plain-language brand sheet (colours, fonts, voice).
- `_source/` the original files you sent us (kept as backup, not published).

## To swap a photo

Send us the new photo. We name it `what-it-is-somos-hermanos-somoshermanos.ong.webp`, size it, and
drop it in the right `assets/images/` folder. All current photos came from the brand stand and the
Instagram story threads you provided.

## Pending / to confirm

- **Videos are live on the page.** The launch video and five short story clips are compressed and
  self-hosted (in `assets/video/`), playing in the "En video" and "Más historias" sections. Send new
  clips any time and we will add them the same way.
- **Direct contact.** If Somos Hermanos gets its own email, phone, WhatsApp, or Instagram, send it
  and we will add it. For now, donations happen in person at Tacos Hermanos restaurants and links
  point to Tacos Hermanos.

## Hosting

Deployed on Cloudflare Pages (unlimited bandwidth, no ads), with the code backed up on GitHub. See
the `cloudflare-pages-deploy` step. `_source/` and `brand/` are excluded from the published site.
