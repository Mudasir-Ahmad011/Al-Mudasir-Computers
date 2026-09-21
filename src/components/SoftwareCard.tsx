import Image from "next/image";
import Link from "next/link";
import type { Software } from "@/data/software";

type Props = {
  item: Software;
  index: number;
};

export default function SoftwareCard({ item, index }: Props) {
  const number = String(index + 1).padStart(3, "0");

  return (
    <Link
      href={`/software/${item.slug}`}
      className="card"
      style={{ animationDelay: `${120 + index * 80}ms` }}
    >
      <div className="card-top">
        <span className="mono muted">No. {number}</span>
        <span className="tag">{item.category}</span>
      </div>
      <div className="card-body">
        <Image
          src={item.icon}
          alt=""
          width={72}
          height={72}
          className="card-icon"
        />
        <div>
          <h3 className="card-title">{item.name}</h3>
          <p className="card-tagline">{item.tagline}</p>
        </div>
      </div>
      <div className="card-foot">
        <span className="mono">
          v{item.version} · {item.size} · {item.license}
        </span>
        <span className="card-arrow" aria-hidden="true">
          →
        </span>
      </div>
    </Link>
  );
}
