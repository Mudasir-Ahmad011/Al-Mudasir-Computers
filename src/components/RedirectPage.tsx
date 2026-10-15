import Link from "next/link";
import { site } from "@/data/site";

type Props = {
  /** Where the visitor should end up, e.g. "/products/idm-pro/". */
  to: string;
  label: string;
};

/**
 * A standing-in page for a URL that moved.
 *
 * The redirects for these used to live in next.config.ts, and then in
 * .htaccess. Neither runs on the host the site is actually served from, so
 * the old addresses started returning 404. A page that redirects itself works
 * no matter what serves the files.
 *
 * Three things do the work, in order of how fast they fire: the inline script
 * (instant, and leaves no entry in the back button's history), the meta
 * refresh (for anyone with scripting off), and the visible link (for anyone
 * both of those failed). The canonical and the noindex tell search engines to
 * credit the destination, not this page.
 */
export default function RedirectPage({ to, label }: Props) {
  const target = `${site.url}${to}`;

  return (
    <>
      <meta httpEquiv="refresh" content={`0; url=${to}`} />
      <link rel="canonical" href={target} />
      <script
        dangerouslySetInnerHTML={{
          __html: `location.replace(${JSON.stringify(to)})`,
        }}
      />
      <section className="wrap not-found">
        <p className="mono muted">This page has moved</p>
        <h1>{label} is now here</h1>
        <p>
          You should be sent on automatically. If nothing happens, follow the
          link below.
        </p>
        <Link href={to} className="btn btn-primary">
          Continue to {label}
        </Link>
      </section>
    </>
  );
}
