import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  output: 'export',
  reactStrictMode: true,
  // GitHub Pages serves directories, so emit `docs/index.html` rather than `docs.html`.
  trailingSlash: true,
  // The next/image optimizer needs a server; Pages has none.
  images: { unoptimized: true },
};

export default withMDX(config);
