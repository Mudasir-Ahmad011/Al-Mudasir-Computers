# Techie SoftHub

The agency website for [techiesofthub.com](https://techiesofthub.com), built with
Next.js (App Router). Contact: info@techiesofthub.com

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # serve the production build
```

## Editing the content

Almost everything is data, not markup.

- **Agency details, services, tech stack, process** — `src/data/site.ts`.
  Change the email, add a service, or add a technology to a stack group.
- **Products** — `src/data/products.ts`.

### Adding a product

1. Put its icon in `public/products/<slug>/icon.png` (square PNG, 256px or larger).
2. Copy the IDM Pro entry in `src/data/products.ts`, change the `slug`, name,
   text, `stack` and `downloadUrl`. Leave `downloadUrl` out for a product that
   isn't downloadable yet — the download button disappears and only the
   "Contact us" block remains.
3. Save. It shows up under **Products** and gets a page at `/products/<slug>`.

## Structure

| Path | What it is |
|---|---|
| `src/data/site.ts` | Brand, contact, services, tech stack, process |
| `src/data/products.ts` | Products shown in the catalogue |
| `src/app/page.tsx` | Home page (hero, services, stack, products, process, about, CTA) |
| `src/app/products/[slug]/page.tsx` | Product detail page |
| `src/components/` | Header, footer, logo, service and product cards |
| `src/app/globals.css` | All styling |
| `src/app/icon.svg` | Favicon |

## Logo

Design sources live in `logos/`:

- `logos/concepts/` — the four explored directions
- `logos/preview.html` — open in a browser to compare them, including a
  16/32/64px favicon legibility check
- `logos/export/` — the chosen mark as SVG (mark, icon, light and dark lockups)
- `logos/export/png/` — PNG icons from 16px to 2048px

To swap in a different concept, copy it over `logos/export/logo-icon.svg`,
re-run `node logos/export-png.mjs`, and update `src/components/Logo.tsx`.
