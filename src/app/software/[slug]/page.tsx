import type { Metadata } from "next";
import { notFound } from "next/navigation";
import RedirectPage from "@/components/RedirectPage";
import { getProduct, products } from "@/data/products";

// The shop's old public URLs. Kept so links and search results from before
// the rebrand still reach the product rather than a 404.

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

export default async function OldSoftwarePage({ params }: Props) {
  const { slug } = await params;
  const item = getProduct(slug);
  if (!item) notFound();

  return <RedirectPage to={`/products/${item.slug}/`} label={item.name} />;
}
