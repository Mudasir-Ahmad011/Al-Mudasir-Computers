import Link from "next/link";

export default function NotFound() {
  return (
    <section className="wrap not-found">
      <p className="mono muted">Error 404</p>
      <h1>Not on the shelf.</h1>
      <p>That page or software doesn&apos;t exist.</p>
      <Link href="/" className="download-btn small">
        Back to the shop
      </Link>
    </section>
  );
}
