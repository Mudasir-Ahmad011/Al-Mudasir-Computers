import type { Service } from "@/data/site";

type Props = {
  service: Service;
  index: number;
};

const icons: Record<string, React.ReactNode> = {
  "web-development": (
    <>
      <rect x="3" y="4" width="18" height="15" rx="2" />
      <path d="M3 9h18" />
      <path d="M7 6.5h.01M9.5 6.5h.01" />
    </>
  ),
  "app-development": (
    <>
      <rect x="7" y="2.5" width="10" height="19" rx="2.5" />
      <path d="M10.5 18.5h3" />
    </>
  ),
  "desktop-development": (
    <>
      <rect x="2.5" y="4" width="19" height="12.5" rx="2" />
      <path d="M8 20.5h8M12 16.5v4" />
    </>
  ),
};

export default function ServiceCard({ service, index }: Props) {
  return (
    <article
      className="card service-card"
      id={service.slug}
      style={{ animationDelay: `${120 + index * 90}ms` }}
    >
      <div className="service-top">
        <span className="service-icon" aria-hidden="true">
          <svg
            viewBox="0 0 24 24"
            width="26"
            height="26"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {icons[service.slug]}
          </svg>
        </span>
        <span className="mono muted">{String(index + 1).padStart(2, "0")}</span>
      </div>
      <h3 className="card-title">{service.name}</h3>
      <p className="card-tagline">{service.summary}</p>
      <ul className="service-list">
        {service.deliverables.map((d) => (
          <li key={d}>{d}</li>
        ))}
      </ul>
    </article>
  );
}
