import Link from "next/link";

export default function Header() {
  return (
    <header className="site-header">
      <div className="wrap header-inner">
        <Link href="/" className="wordmark" aria-label="Al Mudasir Computers, home">
          <span className="wordmark-mark" aria-hidden="true">
            AM
          </span>
          <span className="wordmark-text">
            Al Mudasir
            <em>Computers</em>
          </span>
        </Link>
        <nav className="nav">
          <Link href="/#catalogue">Software</Link>
          <Link href="/#about">About</Link>
        </nav>
      </div>
    </header>
  );
}
