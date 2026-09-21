import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getSoftware, software } from "@/data/software";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return software.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = getSoftware(slug);
  if (!item) return {};
  return { title: item.name, description: item.tagline };
}

export default async function SoftwarePage({ params }: Props) {
  const { slug } = await params;
  const item = getSoftware(slug);
  if (!item) notFound();

  const specs: [string, string][] = [
    ["Version", item.version],
    ["Category", item.category],
    ["Platform", item.platform],
    ["Download size", item.size],
    ["License", item.license],
    ["Released", item.released],
  ];

  return (
    <article className="detail wrap">
      <nav className="crumbs mono" aria-label="Breadcrumb">
        <Link href="/">Shop</Link>
        <span aria-hidden="true">/</span>
        <Link href="/#catalogue">Software</Link>
        <span aria-hidden="true">/</span>
        <span className="muted">{item.name}</span>
      </nav>

      <header className="detail-head">
        <Image
          src={item.icon}
          alt={`${item.name} icon`}
          width={120}
          height={120}
          className="detail-icon"
          priority
        />
        <div className="detail-intro">
          <span className="tag">{item.category}</span>
          <h1 className="detail-title">{item.name}</h1>
          <p className="detail-tagline">{item.tagline}</p>
        </div>
      </header>

      <div className="detail-layout">
        <div className="detail-main">
          <p className="detail-desc">{item.description}</p>

          <h2>What it does</h2>
          <ul className="features">
            {item.features.map((f, i) => (
              <li key={f.title} className="feature">
                <span className="mono feature-num">{String(i + 1).padStart(2, "0")}</span>
                <h3>{f.title}</h3>
                <p>{f.body}</p>
              </li>
            ))}
          </ul>

          <h2>How to install</h2>
          <ol className="steps">
            {item.installSteps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>

          {item.notes && item.notes.length > 0 && (
            <aside className="notes">
              <h3 className="mono">Good to know</h3>
              <ul>
                {item.notes.map((n) => (
                  <li key={n}>{n}</li>
                ))}
              </ul>
            </aside>
          )}
        </div>

        <aside className="ticket" aria-label="Download">
          <div className="ticket-top">
            <span className="mono muted">Free download</span>
            <p className="ticket-name">
              {item.name} <span className="mono">v{item.version}</span>
            </p>
          </div>
          <a
            href={item.downloadUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="download-btn"
          >
            <span>Download</span>
            <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
              <path
                d="M12 3v12m0 0-5-5m5 5 5-5M4 20h16"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
          <p className="mono muted ticket-hint">Opens the GitHub page in a new tab</p>

          <dl className="specs">
            {specs.map(([k, v]) => (
              <div key={k} className="spec-row">
                <dt className="mono">{k}</dt>
                <dd>{v}</dd>
              </div>
            ))}
          </dl>

          <div className="reqs">
            <h3 className="mono">Requirements</h3>
            <ul>
              {item.requirements.map((r) => (
                <li key={r}>{r}</li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </article>
  );
}
