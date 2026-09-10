import Link from 'next/link';
import { appName } from '@/lib/shared';

const features = [
  {
    title: 'MDX content',
    body: 'Pages are plain MDX in content/docs. Frontmatter drives titles, descriptions, and metadata; meta.json controls the sidebar.',
  },
  {
    title: 'Search without a server',
    body: 'An Orama index is built at compile time and queried in the browser, so full-text search works on static hosting.',
  },
  {
    title: 'Components that ship',
    body: 'Callouts, tabs, steps, file trees, accordions, type tables, and Mermaid diagrams are wired up and in use.',
  },
  {
    title: 'Static export',
    body: 'next build emits a plain out/ directory. No Node runtime, no serverless functions, nothing to keep alive.',
  },
  {
    title: 'Deployed from CI',
    body: 'A GitHub Actions workflow builds on every push to main and publishes the artifact to GitHub Pages.',
  },
  {
    title: 'Machine readable',
    body: 'llms.txt, llms-full.txt, and a per-page Markdown endpoint are pre-rendered alongside the HTML.',
  },
];

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col">
      <section className="mx-auto flex w-full max-w-4xl flex-col items-start gap-6 px-6 py-20 sm:py-28">
        <span className="rounded-full border px-3 py-1 text-xs font-medium text-fd-muted-foreground">
          Sample portal · Fumadocs + Next.js + GitHub Pages
        </span>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          {appName} documentation
        </h1>
        <p className="max-w-2xl text-lg text-fd-muted-foreground">
          A worked example of a documentation site built with Fumadocs, exported as
          static HTML, and served from GitHub Pages. The product is fictional; the
          setup is not.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/docs"
            className="rounded-lg bg-fd-primary px-5 py-2.5 text-sm font-medium text-fd-primary-foreground transition-opacity hover:opacity-90"
          >
            Read the docs
          </Link>
          <Link
            href="/docs/quick-start"
            className="rounded-lg border px-5 py-2.5 text-sm font-medium transition-colors hover:bg-fd-accent"
          >
            Quick start
          </Link>
        </div>
      </section>

      <section className="border-t bg-fd-card/40">
        <div className="mx-auto grid w-full max-w-4xl grid-cols-1 gap-px overflow-hidden px-6 py-16 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.title} className="flex flex-col gap-2 p-5">
              <h2 className="text-sm font-semibold">{feature.title}</h2>
              <p className="text-sm text-fd-muted-foreground">{feature.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t">
        <div className="mx-auto w-full max-w-4xl px-6 py-16">
          <h2 className="mb-4 text-lg font-semibold">Run it locally</h2>
          <pre className="overflow-x-auto rounded-lg border bg-fd-secondary/50 p-4 text-sm">
            <code>{`git clone https://github.com/manucr619/manucr619.github.io.git
cd manucr619.github.io
npm install
npm run dev     # http://localhost:3000

npm run build   # static site in ./out
npm start       # serve the built output`}</code>
          </pre>
        </div>
      </section>
    </main>
  );
}
