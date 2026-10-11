// Everything about the agency that appears on the site lives here.
// Edit this file to change contact details, services or the tech stack.

export const site = {
  name: "Techie SoftHub",
  domain: "techiesofthub.com",
  url: "https://techiesofthub.com",
  tagline: "A software agency building for the web, mobile and desktop.",
  description:
    "Techie SoftHub designs and builds web apps, mobile apps and desktop software. We take a product from the first sketch to a shipped, maintained release.",
  email: "info@techiesofthub.com",
  github: "https://github.com/Mudasir-Ahmad011",
  youtube: "https://www.youtube.com/@TechieSoftHub",
  /** Where we take work. Used in the copy and in the Organization schema. */
  areaServed: "Pakistan",
  /** Display form first; the tel: form is derived in Contact. */
  phones: ["+92 333 6205055", "+92 305 8111211"],
  /** The year the agency started, for the Organization schema. */
  founded: "2026",
};

/** `+92 333 6205055` -> `+923336205055`, for tel: links and schema. */
export function telHref(phone: string): string {
  return phone.replace(/[^\d+]/g, "");
}

export type Faq = {
  question: string;
  answer: string;
};

/**
 * Plain answers to what people actually ask. These drive the FAQ section,
 * the FAQPage schema and llms.txt, so each answer is written to stand on
 * its own when a search engine or an assistant quotes just that sentence.
 */
export const faqs: Faq[] = [
  {
    question: "What does Techie SoftHub do?",
    answer:
      "Techie SoftHub is a software agency that builds web applications, mobile apps for Android and iOS, and Windows desktop software. We handle a project from the first scope conversation through to a released, maintained product, and we also publish our own software such as Hisaab and IDM Pro.",
  },
  {
    question: "Where is Techie SoftHub based?",
    answer:
      "We are based in Pakistan and work with businesses across the country, as well as clients abroad who are happy to work remotely. You can reach us at info@techiesofthub.com or on +92 333 6205055.",
  },
  {
    question: "What technologies do you use?",
    answer:
      "For the web we use React, Next.js, TypeScript and Tailwind CSS, with Node.js, Express, Python, FastAPI or Laravel behind them. Mobile apps are built with React Native or Flutter, and native Kotlin or Swift where a project needs it. Desktop software is built with Electron, C# and .NET, or Python and Qt. Data sits in PostgreSQL, MySQL, MongoDB or SQLite.",
  },
  {
    question: "Do you build Windows desktop software?",
    answer:
      "Yes. Desktop development is one of our three main services, and it is what we build for ourselves too. We deliver installers, auto-update channels, background services, browser extensions and hardware or file-system integration. Hisaab, our billing and accounting program, and IDM Pro, our download manager, are both Windows desktop applications we wrote and maintain.",
  },
  {
    question: "What is Hisaab?",
    answer:
      "Hisaab is our Windows program for billing, inventory and accounting, made for Pakistani shops and distributors. It works offline, keeps your data in a file on your own computer, and covers sales tax, FBR Digital Invoicing, WhatsApp reminders and full double-entry accounting. Several computers in one shop can share the same books over a local network.",
  },
  {
    question: "Can you add FBR Digital Invoicing to our billing software?",
    answer:
      "Yes. We have already built FBR Digital Invoicing into Hisaab against the PRAL Technical Specification for the DI API, including the real-time invoice message, the FBR invoice number and QR code on the printed bill, and the 24-hour reporting rule for bills issued while the internet was down. We can add the same to software you already run.",
  },
  {
    question: "How much does a project cost?",
    answer:
      "It depends on scope, so we quote per project rather than publishing a price list. Tell us what the software has to do and we will come back with a straight answer on scope, timeline and cost before any work starts. There is no charge for that conversation.",
  },
  {
    question: "Do you maintain the software after it launches?",
    answer:
      "Yes. We stay on for updates, fixes and monitoring rather than handing over a repository and disappearing. Our own products have been maintained through many releases, and we treat client work the same way.",
  },
  {
    question: "How do I start a project with Techie SoftHub?",
    answer:
      "Email info@techiesofthub.com or call +92 333 6205055 with a description of what you need and what it has to do. We will scope it with you, write down what the first version must include, and give you a timeline and a cost before building anything.",
  },
];

export type Service = {
  slug: string;
  name: string;
  summary: string;
  deliverables: string[];
};

export const services: Service[] = [
  {
    slug: "web-development",
    name: "Web Development",
    summary:
      "Marketing sites, dashboards and full web applications. Fast to load, accessible, and built to rank well in search.",
    deliverables: [
      "Company and product websites",
      "Admin dashboards and internal tools",
      "E-commerce and payment integration",
      "REST and GraphQL APIs",
      "Performance, SEO and accessibility passes",
    ],
  },
  {
    slug: "app-development",
    name: "App Development",
    summary:
      "Android and iOS apps from one codebase, with the native integrations a real product needs.",
    deliverables: [
      "Cross-platform Android and iOS apps",
      "Offline-first data and sync",
      "Push notifications and deep links",
      "Play Store and App Store releases",
      "Crash reporting and analytics",
    ],
  },
  {
    slug: "desktop-development",
    name: "Desktop Development",
    summary:
      "Windows desktop software that installs cleanly and keeps working — the kind of tool we build for ourselves.",
    deliverables: [
      "Windows desktop applications",
      "Installers and auto-update channels",
      "Browser extensions and native messaging",
      "Background services and schedulers",
      "Hardware and file-system integration",
    ],
  },
];

export type TechGroup = {
  label: string;
  items: string[];
};

export const techStack: TechGroup[] = [
  {
    label: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML & CSS"],
  },
  {
    label: "Backend",
    items: ["Node.js", "Express", "Python", "FastAPI", "PHP & Laravel"],
  },
  {
    label: "Mobile",
    items: ["React Native", "Flutter", "Kotlin", "Swift"],
  },
  {
    label: "Desktop",
    items: ["Electron", "C#", ".NET", "Python & Qt", "C++"],
  },
  {
    label: "Data",
    items: ["PostgreSQL", "MySQL", "MongoDB", "SQLite", "Redis"],
  },
  {
    label: "Infrastructure",
    items: ["Docker", "Git & GitHub", "GitHub Actions", "Vercel", "Linux VPS"],
  },
];

export type Step = {
  title: string;
  body: string;
};

export const steps: Step[] = [
  {
    title: "Scope",
    body: "We talk through the problem, agree on what the first version must do, and write it down before any code is written.",
  },
  {
    title: "Design",
    body: "Screens and data model first. You see the shape of the product while it is still cheap to change.",
  },
  {
    title: "Build",
    body: "Short cycles with something you can click at the end of each one. No long silences.",
  },
  {
    title: "Ship & maintain",
    body: "Release, monitor and fix. We stay on for updates rather than handing over a dead repository.",
  },
];
