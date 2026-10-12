// schema.org objects describing the business, its services and its products.
// Rendered as JSON-LD by the JsonLd component. Everything here is derived
// from site.ts and products.ts, so the page copy and the structured data
// cannot drift apart.

import type { Product } from "./products";
import { canonicalUrl, faqs, services, site, telHref } from "./site";

const ORG_ID = `${canonicalUrl()}#organization`;
const SITE_ID = `${canonicalUrl()}#website`;

/** The agency itself. Referenced by everything else through @id. */
export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": ORG_ID,
    name: site.name,
    alternateName: "TechieSoftHub",
    url: canonicalUrl(),
    logo: `${site.url}/logo-mark.png`,
    image: `${site.url}/opengraph-image.png`,
    description: site.description,
    email: site.email,
    telephone: site.phones.map(telHref),
    foundingDate: site.founded,
    address: {
      "@type": "PostalAddress",
      addressCountry: "PK",
    },
    areaServed: [
      { "@type": "Country", name: site.areaServed },
      { "@type": "Place", name: "Worldwide, remotely" },
    ],
    knowsAbout: [
      "Web development",
      "Mobile app development",
      "Windows desktop software development",
      "Billing and inventory software",
      "FBR Digital Invoicing",
      "React",
      "Next.js",
      "Electron",
      "React Native",
      "Flutter",
    ],
    sameAs: [site.github, site.youtube],
    contactPoint: site.phones.map((phone) => ({
      "@type": "ContactPoint",
      telephone: telHref(phone),
      email: site.email,
      contactType: "sales",
      areaServed: "PK",
      availableLanguage: ["English", "Urdu"],
    })),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Software development services",
      itemListElement: services.map((s) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: s.name,
          description: s.summary,
          serviceType: s.name,
          provider: { "@id": ORG_ID },
          areaServed: site.areaServed,
        },
      })),
    },
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": SITE_ID,
    url: canonicalUrl(),
    name: site.name,
    description: site.description,
    publisher: { "@id": ORG_ID },
    inLanguage: "en",
  };
}

export function faqSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${canonicalUrl()}#faq`,
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
}

/** One product, as a SoftwareApplication. */
export function productSchema(item: Product) {
  const url = canonicalUrl(`/products/${item.slug}`);

  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": `${url}#software`,
    name: item.name,
    url,
    description: item.description,
    applicationCategory: "BusinessApplication",
    applicationSubCategory: item.category,
    operatingSystem: item.platform,
    softwareVersion: item.version,
    datePublished: item.released,
    fileSize: item.size,
    featureList: item.features.map((f) => f.title),
    screenshot: `${site.url}${item.icon}`,
    image: `${site.url}${item.icon}`,
    publisher: { "@id": ORG_ID },
    author: { "@id": ORG_ID },
    softwareRequirements: item.requirements.join("; "),
    ...(item.downloadUrl ? { downloadUrl: item.downloadUrl } : {}),
    offers: {
      "@type": "Offer",
      // Both products are free to start with: IDM Pro outright, Hisaab for
      // its 14-day trial. Stating a price of 0 is accurate for getting hold
      // of either; a paid licence is described in `licence` below.
      price: "0",
      priceCurrency: "PKR",
      availability: "https://schema.org/InStock",
      seller: { "@id": ORG_ID },
    },
    license: item.license,
  };
}

export function videoSchema(item: Product) {
  if (!item.video) return null;

  return {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: item.video.title,
    description: `A demonstration of ${item.name}: ${item.tagline}`,
    thumbnailUrl: `https://i.ytimg.com/vi/${item.video.youtubeId}/maxresdefault.jpg`,
    embedUrl: `https://www.youtube-nocookie.com/embed/${item.video.youtubeId}`,
    contentUrl: `https://www.youtube.com/watch?v=${item.video.youtubeId}`,
    uploadDate: item.video.uploadDate,
    publisher: { "@id": ORG_ID },
  };
}

export function breadcrumbSchema(item: Product) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: canonicalUrl() },
      {
        "@type": "ListItem",
        position: 2,
        name: "Products",
        item: `${canonicalUrl()}#products`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: item.name,
        item: canonicalUrl(`/products/${item.slug}`),
      },
    ],
  };
}
