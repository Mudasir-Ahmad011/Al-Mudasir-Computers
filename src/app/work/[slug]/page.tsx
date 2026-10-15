import type { Metadata } from "next";
import { notFound } from "next/navigation";
import RedirectPage from "@/components/RedirectPage";
import { getProduct, products } from "@/data/products";

// The /work URLs used briefly during the rebrand. Kept so any link made in
// that window still reaches the product rather than a 404.

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = getProduct(slug);
  if (!item) return {};
  return {
    title: `${item.name} has moved`,
    robots: { index: false, follow: true },
    alternates: { canonical: `/products/${item.slug}/` },
  };
}

export default async function OldWorkPage({ params }: Props) {
  const { slug } = await params;
  const item = getProduct(slug);
  if (!item) notFound();

  return <RedirectPage to={`/products/${item.slug}/`} label={item.name} />;
}
