# Nimbus — sample documentation portal

A sample documentation site built with [Fumadocs](https://fumadocs.dev) on Next.js,
exported as static HTML and published to GitHub Pages at
<https://manucr619.github.io/>.

"Nimbus" is a fictional product. The content exists to exercise the portal's
features; the build and deployment setup is real and reusable.

## Local development

```bash
npm install
npm run dev      # http://localhost:3000
```

## Build

```bash
npm run build    # static site in ./out
npm start        # serve ./out locally
```

## Layout

| Path | Purpose |
| --- | --- |
| `content/docs/` | MDX pages; `meta.json` controls sidebar order and grouping |
| `app/docs/` | Docs route and layout |
| `app/(home)/` | Landing page |
| `app/api/search/route.ts` | Build-time Orama search index (`staticGET`) |
| `app/og/docs/[...slug]/` | Pre-rendered Open Graph images |
| `app/llms.txt`, `app/llms-full.txt`, `app/llms.mdx/` | Machine-readable page exports |
| `components/mdx.tsx` | MDX component registry |
| `components/mermaid.tsx` | Client-side Mermaid renderer |
| `lib/shared.ts` | Site name, URL, and GitHub coordinates |
| `lib/layout.shared.tsx` | Navbar title and links |

## What makes the static export work

- `next.config.mjs` sets `output: 'export'`, `trailingSlash: true`, and
  `images: { unoptimized: true }`.
- Search uses `staticGET` from `fumadocs-core/search/server`, so the Orama index is
  written at build time and queried in the browser
  (`components/search.tsx` uses `staticClient`).
- OG images and the `llms.*` endpoints declare `revalidate = false` and
  `generateStaticParams`, so they are pre-rendered rather than served on demand.
- `public/.nojekyll` keeps GitHub Pages from stripping `_next/`.

No `basePath` is set: this deploys to the user site (`manucr619.github.io`), which
serves from the domain root. Deploying to a project site
(`user.github.io/repo`) would require `basePath` and `assetPrefix` set to `/repo`.

## Deployment

`.github/workflows/deploy.yml` builds on every push to `main` and publishes `out/`
to GitHub Pages. The repository's Pages source must be set to **GitHub Actions**.
