# Anurag Mishra · Portfolio

Single-page portfolio built with Next.js (App Router) and plain CSS.

## Run

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

## Edit content

All text lives in `lib/data.ts`: hero, intro line, projects, experience, education, certifications and links.
Project covers are drawn in `components/Cover.tsx`. Styles are in `app/globals.css`.

## Deploy

Push to GitHub and import the repo on Vercel. Set `NEXT_PUBLIC_SITE_URL` to the final domain
(for example `https://anuraag-one.vercel.app`) so the canonical URL, sitemap and social card point to it.

## SEO

- Title, description, keywords, canonical, Open Graph and Twitter tags in `app/layout.tsx`
- JSON-LD `Person` and `WebSite` data in `app/layout.tsx`
- `app/sitemap.ts`, `app/robots.ts`, generated social image in `app/opengraph-image.tsx`

The typeface is General Sans (Indian Type Foundry, via Fontshare), self-hosted in `app/fonts`.
