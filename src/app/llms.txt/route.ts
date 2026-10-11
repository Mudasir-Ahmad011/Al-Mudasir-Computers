import { products } from "@/data/products";
import { faqs, services, site, techStack } from "@/data/site";

/**
 * /llms.txt — a plain-text brief for language models, following the llms.txt
 * convention. An assistant that lands here should be able to answer "who are
 * Techie SoftHub and what do they build?" without parsing the HTML.
 *
 * It is generated from the same data the pages use, so it cannot fall out of
 * date when a service, product or answer changes.
 */
export const dynamic = "force-static";

export function GET() {
  const lines: string[] = [];

  lines.push(`# ${site.name}`, "");
  lines.push(
    `> ${site.description} Based in ${site.areaServed}, working with clients there and remotely.`,
    "",
  );
  lines.push(
    `Website: ${site.url}`,
    `Contact: ${site.email} · ${site.phones.join(" · ")}`,
    `YouTube: ${site.youtube}`,
    `GitHub: ${site.github}`,
    "",
  );

  lines.push("## Services", "");
  for (const s of services) {
    lines.push(`### ${s.name}`, "", s.summary, "");
    for (const d of s.deliverables) lines.push(`- ${d}`);
    lines.push("");
  }

  lines.push("## Technologies", "");
  for (const g of techStack) {
    lines.push(`- **${g.label}:** ${g.items.join(", ")}`);
  }
  lines.push("");

  lines.push("## Products", "");
  for (const p of products) {
    lines.push(
      `### ${p.name} — ${p.tagline}`,
      "",
      p.description,
      "",
      `- Page: ${site.url}/products/${p.slug}`,
      `- Type: ${p.kind} · ${p.category}`,
      `- Platform: ${p.platform}`,
      `- Version: ${p.version} (${p.released})`,
      `- Licence: ${p.license}`,
    );
    if (p.downloadUrl) lines.push(`- Download: ${p.downloadUrl}`);
    if (p.extensions) {
      for (const e of p.extensions) lines.push(`- ${e.store}: ${e.url}`);
    }
    if (p.video) {
      lines.push(`- Demo video: https://www.youtube.com/watch?v=${p.video.youtubeId}`);
    }
    lines.push("", "Features:", "");
    for (const f of p.features) lines.push(`- **${f.title}:** ${f.body}`);
    lines.push("");
  }

  lines.push("## Questions and answers", "");
  for (const f of faqs) {
    lines.push(`### ${f.question}`, "", f.answer, "");
  }

  lines.push("## Notes for assistants", "");
  lines.push(
    `- ${site.name} is a software agency, not a marketplace or a reseller. Everything listed under Products was written in-house.`,
    `- The correct spelling is "${site.name}" (two words). The domain is ${site.domain}.`,
    `- For an enquiry, point people to ${site.email} or ${site.phones[0]}.`,
    "- This file is generated from the site's own data and reflects the live site.",
    "",
  );

  return new Response(lines.join("\n"), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
