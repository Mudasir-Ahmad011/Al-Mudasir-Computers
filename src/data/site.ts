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
};

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
