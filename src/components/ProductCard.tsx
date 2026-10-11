import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/data/products";

type Props = {
  item: Product;
  index: number;
};

export default function ProductCard({ item, index }: Props) {
  return (
    <Link
      href={`/products/${item.slug}`}
      className="card product-card"
      style={{ animationDelay: `${120 + index * 80}ms` }}
    >
      <div className="card-top">
        <span className="tag">{item.kind}</span>
        <span className="mono muted">{item.year}</span>
      </div>
      <div className="card-body">
        <Image
          src={item.icon}
          alt=""
          width={64}
          height={64}
          className="card-icon"
        />
        <div>
          <h3 className="card-title">{item.name}</h3>
          <p className="card-tagline">{item.tagline}</p>
        </div>
      </div>
      <div className="chips">
        {item.stack.slice(0, 4).map((t) => (
          <span key={t} className="chip mono">
            {t}
          </span>
        ))}
      </div>
      <div className="card-foot">
        <span className="mono">{item.category}</span>
        <span className="card-arrow" aria-hidden="true">
          →
        </span>
      </div>
    </Link>
  );
}
