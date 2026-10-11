import type { Metadata } from "next";
import { Bricolage_Grotesque, IBM_Plex_Mono } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { organizationSchema, websiteSchema } from "@/data/schema";
import { site } from "@/data/site";
import "./globals.css";

const display = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
  display: "swap",
});

// Written for a search result, not for us: the title leads with what we do
// and where, because that is what someone scans in a list of ten results.
const TITLE = `${site.name} — Software Agency in Pakistan | Web, App & Desktop Development`;

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: TITLE,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  publisher: site.name,
  category: "Software Development",
  keywords: [
    "software agency Pakistan",
    "software house Pakistan",
    "web development company",
    "mobile app development",
    "Windows desktop software development",
    "billing and inventory software",
    "FBR Digital Invoicing software",
    "React Next.js development",
    "Electron desktop app development",
    site.name,
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: site.url,
    siteName: site.name,
    locale: "en_PK",
    title: TITLE,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    // The script below sets data-theme on <html> before React hydrates, so the
    // server markup and the client tree differ by that one attribute on
    // purpose. suppressHydrationWarning covers this element only.
    <html
      lang="en"
      className={`${display.variable} ${mono.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* Applies a saved theme before first paint, so a visitor who chose
            the day theme never sees the night one flash first. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `try{var t=localStorage.getItem("theme");if(t==="light"||t==="dark")document.documentElement.dataset.theme=t}catch(e){}`,
          }}
        />
      </head>
      <body>
        <JsonLd data={[organizationSchema(), websiteSchema()]} />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
