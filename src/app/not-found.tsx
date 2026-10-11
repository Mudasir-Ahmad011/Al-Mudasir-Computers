import Link from "next/link";

export default function NotFound() {
  return (
    <section className="wrap not-found">
      <p className="mono muted">Error 404</p>
      <h1>Page not found.</h1>
      <p>That page doesn&apos;t exist, or it has moved.</p>
      <Link href="/" className="btn btn-primary">
        Back to the home page
      </Link>
    </section>
  );
}
