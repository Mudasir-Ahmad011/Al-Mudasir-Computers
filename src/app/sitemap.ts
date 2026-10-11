import type { MetadataRoute } from "next";
import { products } from "@/data/products";
import { canonicalUrl } from "@/data/site";

// Written at build time, since the site is exported as static files.
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    {
      url: canonicalUrl(),
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1,
    },
    ...products.map((p) => ({
      url: canonicalUrl(`/products/${p.slug}`),
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
