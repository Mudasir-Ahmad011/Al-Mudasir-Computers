import type { MetadataRoute } from "next";
import { site } from "@/data/site";

/**
 * Everything here is public, so every crawler is allowed.
 *
 * The AI crawlers are named explicitly rather than left to the wildcard: a
 * named Allow is unambiguous, and it is the line to edit if you ever decide
 * you do not want a particular assistant reading the site. Blocking them
 * would keep the site out of AI answers entirely.
 */
const aiCrawlers = [
  "GPTBot", // OpenAI, for training
  "OAI-SearchBot", // OpenAI, for ChatGPT search results
  "ChatGPT-User", // OpenAI, when a user asks it to open a page
  "ClaudeBot", // Anthropic
  "Claude-User",
  "Claude-SearchBot",
  "PerplexityBot",
  "Perplexity-User",
  "Google-Extended", // Gemini / AI Overviews grounding
  "Applebot-Extended",
  "Bingbot",
  "CCBot", // Common Crawl, which many models are trained from
  "meta-externalagent",
  "Amazonbot",
  "DuckAssistBot",
  "cohere-ai",
  "Timpibot",
  "YouBot",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      ...aiCrawlers.map((userAgent) => ({ userAgent, allow: "/" })),
    ],
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url,
  };
}
