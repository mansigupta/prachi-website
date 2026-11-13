# prachi.com

Website for Prachi Leathers Pvt. Ltd, Kanpur: an LWG Gold rated tannery and factory making finished leather, footwear, bags and accessories.

It is a plain HTML and CSS site with no build step, hosted free on GitHub Pages.

## Pages

| Page | File | Address |
|---|---|---|
| Home | `index.html` | `/` |
| Leather | `leather/index.html` | `/leather/` |
| Footwear | `footwear/index.html` | `/footwear/` |
| Bags & Accessories | `bags/index.html` | `/bags/` |
| Sustainability | `sustainability/index.html` | `/sustainability/` |
| Our People | `people/index.html` | `/people/` |
| Work with us (contacts) | `contact/index.html` | `/contact/` |
| Page not found | `404.html` | any missing address |

Shared files:
- `assets/css/style.css`: all styling. Colours are set once at the top in `:root` (light mode) and in the two dark-mode blocks right after it.
- `assets/js/site.js`: the mobile menu, the banner video's pause button and the email copy buttons.
- `assets/img/`: photos, logo, favicon and `og.jpg` (the preview image shown when the site is shared on WhatsApp, LinkedIn and so on).
- `assets/video/factory.mp4`: the home page banner video (muted, loops).

## Common edits

**Change text:** open the page's `index.html` on GitHub, click the pencil icon, edit the words between the tags, and click "Commit changes". The site updates within about a minute.

**Replace a photo:** upload the new photo into `assets/img/` with the same file name as the old one. Keep photos under about 300 KB (around 1400 px wide, JPG) so pages load quickly.

**Change contacts:** the header and footer are repeated on every page. Contact emails appear on `contact/index.html` and in the footer of every page, so use GitHub's search for the old address and change each one.

**Add the catalogue PDF:** upload it as `assets/catalogue.pdf`, then search the pages for `docs.google.com/presentation` and replace that link with `/assets/catalogue.pdf`.

**Replace the banner video:** upload an MP4 as `assets/video/factory.mp4`. Keep it under about 10 MB (1280 px wide, no sound track) so the home page loads fast on phones. Update `assets/img/poster.jpg` with a still from the video; it shows while the video loads.

## Hosting

GitHub Pages publishes the `main` branch from the root folder (Settings → Pages).

### Pointing prachi.com at GitHub Pages

Do this only once the preview at the github.io address looks right.

1. In this repository: Settings → Pages → Custom domain → enter `www.prachi.com` → Save. This adds a `CNAME` file. Tick "Enforce HTTPS" once it becomes available (it can take up to a day).
2. Where the prachi.com domain is managed (its DNS settings), change only these records:
   - `www`: one **CNAME** record pointing to `mansigupta.github.io`
   - `@` (the bare prachi.com): four **A** records: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - Remove any other A, AAAA or CNAME records for `@` and `www` that point to Squarespace.
3. **Do not touch the MX, TXT (SPF, DKIM, DMARC) or other email records.** Those keep the @prachi.com email addresses working.
4. Cancel the Squarespace website plan only after prachi.com shows the new site. If the domain itself is registered with Squarespace, keep the domain registration or transfer it to another registrar first.
