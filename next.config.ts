import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The site is uploaded to Hostinger as plain files, so it is exported to
  // static HTML. `npm run build` writes the whole site to `out/`.
  output: "export",

  // There is no Node server to optimise images on request, so they are
  // served as they are. Keep source images small.
  images: { unoptimized: true },

  // Each page is written as <path>/index.html rather than <path>.html.
  // Without this the export writes both products/hisaab.html and a
  // products/hisaab/ directory; Apache serves the directory, finds no index
  // inside it and returns 403. With it, that directory holds the page.
  trailingSlash: true,

  // NOTE: redirects() cannot be used with output: "export" — nothing runs on
  // the server to issue them. The redirects from the old /software and /work
  // URLs live in `public/.htaccess`, which Apache and LiteSpeed read on
  // Hostinger. Edit them there, not here.
};

export default nextConfig;
