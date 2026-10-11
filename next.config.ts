import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The shop's old /software URLs are public, so keep them working.
  // Permanent (308) so search engines move their ranking to the new paths.
  async redirects() {
    return [
      { source: "/software/:slug", destination: "/products/:slug", permanent: true },
      { source: "/software", destination: "/#products", permanent: true },
      // Short-lived /work paths from the first pass of the rebrand.
      { source: "/work/:slug", destination: "/products/:slug", permanent: true },
      { source: "/work", destination: "/#products", permanent: true },
    ];
  },
};

export default nextConfig;
