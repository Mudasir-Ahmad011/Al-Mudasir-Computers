# Al Mudasir Computers

The shop website, built with Next.js (App Router).

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # serve the production build
```

## Adding a new software

1. Put its icon in `public/software/<slug>/icon.png` (square PNG, 256px or larger).
2. Open `src/data/software.ts` and copy the IDM Pro entry into the `software`
   list. Change the `slug`, name, text, and `downloadUrl` (the GitHub repo or
   release link the Download button opens).
3. Save. The new software shows up in the catalogue on the home page and gets
   its own page at `/software/<slug>`.

## Structure

| Path | What it is |
|---|---|
| `src/data/software.ts` | Every product in the shop |
| `src/app/page.tsx` | Home page / catalogue |
| `src/app/software/[slug]/page.tsx` | Software detail page with the Download button |
| `src/components/` | Header, footer, catalogue card |
| `src/app/globals.css` | All styling (light and dark mode) |
