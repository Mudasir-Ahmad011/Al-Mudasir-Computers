// Every product in the catalogue lives in this one list.
// To add a product: copy the IDM Pro entry, change the fields, and put the
// icon in public/products/<slug>/icon.png. The home page and the detail page
// pick it up automatically.

export type Feature = {
  title: string;
  body: string;
};

/** A published browser-extension listing that goes with a product. */
export type Extension = {
  store: string;
  url: string;
  version?: string;
};

/** A demo video embedded on the product page. */
export type Video = {
  /** The id from the YouTube watch URL, e.g. 4p6LUxyYVe8. */
  youtubeId: string;
  title: string;
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
  /** Browser extensions published alongside the product, if any. */
  extensions?: Extension[];
  /** A demo video, shown above the feature list. */
  video?: Video;
  features: Feature[];
  requirements: string[];
  installSteps: string[];
  notes?: string[];
};

export const products: Product[] = [
  {
    slug: "hisaab",
    name: "Hisaab",
    tagline: "Billing, inventory and accounting for Pakistani shops and distributors.",
    description:
      "Hisaab runs a shop's whole day: bills, stock, parties, payments and the books behind them. It needs no internet — the data sits in a file on your own computer — and several computers in one shop can work on the same books over the LAN. Sales tax, FBR Digital Invoicing, WhatsApp reminders and full double-entry accounting are all in it, each switched on only if you want it.",
    kind: "Desktop",
    category: "Billing & Accounting",
    year: "2026",
    stack: ["Electron", "Vue 3", "SQLite", "Node.js", "NSIS"],
    version: "0.29.1",
    platform: "Windows 10 / 11 (64-bit)",
    size: "About 120 MB",
    license: "14-day trial, then a key",
    released: "October 2026",
    icon: "/products/hisaab/icon.png",
    video: {
      youtubeId: "4p6LUxyYVe8",
      title: "Hisaab demo — billing, inventory and accounting",
    },
    features: [
      {
        title: "Billing and counter sales",
        body: "Sale and purchase bills with a fast lite-sale screen and a POS counter mode. Scan barcodes, print your own bill layouts, and send the bill on WhatsApp with the PDF attached.",
      },
      {
        title: "Stock that matches the shelf",
        body: "Items, batches and expiry, IMEI and serial numbers, godowns, FIFO costing, stock adjustments, manufacturing runs and low-stock alerts.",
      },
      {
        title: "Parties and recovery",
        body: "Party statements and balances, a net-balance recovery sheet, each party's own rates, and WhatsApp reminders sent from inside Hisaab.",
      },
      {
        title: "Reports for every question",
        body: "Sale, purchase, stock, tax and financial reports — item-wise, party-wise, town-wise, salesman-wise, bill-wise profit, trial balance, balance sheet and profit & loss.",
      },
      {
        title: "Accounting when you want it",
        body: "Switch on the accounting module for a full chart of accounts, journal entries and account statements. Leave it off and Hisaab stays a billing program.",
      },
      {
        title: "FBR Digital Invoicing",
        body: "Sends real-time electronic invoices to FBR through PRAL, and prints the FBR invoice number and QR code on the bill, as Chapter XIV of the Sales Tax Rules requires.",
      },
      {
        title: "Many computers, one set of books",
        body: "One computer holds the data and the others work from it over the LAN. Multi Firm keeps up to five brands or branches in one company without splitting the books.",
      },
      {
        title: "Move over from your old software",
        body: "Imports parties, items, categories, units, tax rates and balances from a Vyapar company file, so a shop does not type its masters again.",
      },
    ],
    requirements: [
      "Windows 10 or Windows 11, 64-bit",
      "About 500 MB of free disk space",
      "No internet needed for day-to-day work",
      "A local network, if several computers share one set of books",
      "For FBR Digital Invoicing: a PRAL registration and a whitelisted fixed internet address",
    ],
    installSteps: [
      "Contact us and we send you the current setup file.",
      "Run the setup, choose an install folder and click Install.",
      "When the setup asks, answer Only this computer, Server or Client — that is how several computers share one set of books.",
      "Start Hisaab and make your company. The first 14 days are a free trial.",
      "To carry on, send us the Machine Code from Help → Activate Hisaab and we send back your licence key.",
    ],
    notes: [
      "When the trial ends without a key, Hisaab becomes read-only: viewing, printing, exporting and backups keep working, but entries cannot be added or changed until a key is pasted in.",
      "FBR Digital Invoicing needs the taxpayer to register Hisaab with PRAL in IRIS and to have the computer's internet address whitelisted. We help with that setup.",
    ],
  },
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
    extensions: [
      {
        store: "Chrome Web Store",
        url: "https://chromewebstore.google.com/detail/idm-pro/dnfoelinnbebkekgohdgmbjemncfhfac",
        version: "1.0.1",
      },
      {
        store: "Firefox Add-ons",
        url: "https://addons.mozilla.org/en-US/firefox/addon/idm-pro/",
        version: "1.0.2",
      },
    ],
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
        body: "The extension is published on the Chrome Web Store and Firefox Add-ons. It hands every download from Chrome, Edge, Brave, Vivaldi, Opera or Firefox to IDM Pro, with cookies and referer, so protected links keep working.",
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
      "Add the IDM Pro extension from the Chrome Web Store or Firefox Add-ons. You only do this once.",
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
