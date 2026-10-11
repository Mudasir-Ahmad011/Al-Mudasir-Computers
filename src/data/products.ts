// Every product in the catalogue lives in this one list.
// To add a product: copy the IDM Pro entry, change the fields, and put the
// icon in public/products/<slug>/icon.png. The home page and the detail page
// pick it up automatically.

export type Feature = {
  title: string;
  body: string;
};

export type Product = {
  /** Used in the URL: /products/<slug> */
  slug: string;
  name: string;
  tagline: string;
  description: string;
  /** Which service this product belongs to: Web, Mobile or Desktop. */
  kind: "Web" | "Mobile" | "Desktop";
  category: string;
  year: string;
  /** Technologies used, shown as chips on the product page. */
  stack: string[];
  version: string;
  platform: string;
  size: string;
  license: string;
  released: string;
  icon: string;
  /** Where the primary button sends the visitor. Omit for private client work. */
  downloadUrl?: string;
  downloadLabel?: string;
  features: Feature[];
  requirements: string[];
  installSteps: string[];
  notes?: string[];
};

export const products: Product[] = [
  {
    slug: "idm-pro",
    name: "IDM Pro",
    tagline: "A multi-connection download manager with browser integration.",
    description:
      "IDM Pro splits every file into up to 32 parallel connections, resumes from the exact byte it stopped at after a pause, crash or reboot, and catches downloads straight from your browser. It also saves videos from YouTube and around 1,800 other sites, in the quality you pick.",
    kind: "Desktop",
    category: "Download Manager",
    year: "2026",
    stack: ["Python", "Qt", "SQLite", "Browser extension", "Inno Setup"],
    version: "1.0.0",
    platform: "Windows 10 / 11 (64-bit)",
    size: "139 MB",
    license: "Free",
    released: "September 2026",
    icon: "/products/idmpro/icon.png",
    downloadUrl: "https://github.com/Mudasir-Ahmad011/Idmpro-Setup/releases/tag/v1.0.0",
    downloadLabel: "Download",
    features: [
      {
        title: "Up to 32 connections",
        body: "Each file is split into parallel range requests written into one file, so large downloads finish much faster.",
      },
      {
        title: "Real pause & resume",
        body: "Progress is saved for every segment. A pause, a crash or a reboot picks up from the exact byte it stopped at.",
      },
      {
        title: "Browser capture",
        body: "The extension hands every download from Chrome, Edge, Brave, Vivaldi, Opera or Firefox to IDM Pro, with cookies and referer, so protected links keep working.",
      },
      {
        title: "Video downloads",
        body: "YouTube and about 1,800 other sites. A button floats over any video and lists the real qualities available.",
      },
      {
        title: "Smart file types",
        body: "Works out what a file really is, even when the server gives no name or extension, and sorts it into the right folder.",
      },
      {
        title: "Live progress window",
        body: "See what every connection is doing: bytes, speed and state, with a global speed limit you can change while it runs.",
      },
    ],
    requirements: [
      "Windows 10 or Windows 11, 64-bit",
      "Chrome, Edge, Brave, Vivaldi, Opera or Firefox for browser capture",
      "About 400 MB of free disk space",
      "An internet connection",
    ],
    installSteps: [
      "Click Download. It opens the IDM Pro page on GitHub.",
      "Download the IDM Pro setup file (.exe) from the repository.",
      "Run the setup, choose an install folder and click Install.",
      "Enable the IDM Pro extension in your browser when asked. You only do this once.",
    ],
    notes: [
      "The installer is not code-signed yet, so Windows SmartScreen may show \"Windows protected your PC\". Click More info, then Run anyway.",
      "DRM-protected streams such as Netflix or Spotify cannot be downloaded by any download manager.",
    ],
  },
];

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}
