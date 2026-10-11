import Link from "next/link";
import Logo from "./Logo";
import ThemeToggle from "./ThemeToggle";
import { site } from "@/data/site";

export default function Header() {
  return (
    <header className="site-header">
      <div className="wrap header-inner">
        <Link href="/" className="wordmark" aria-label={`${site.name}, home`}>
          <Logo size={34} className="wordmark-mark" />
          <span className="wordmark-text">
            Techie<strong>SoftHub</strong>
          </span>
        </Link>
        <nav className="nav">
          <Link href="/#services">Services</Link>
          <Link href="/#products">Products</Link>
          <Link href="/#stack">Stack</Link>
          <Link href="/#about">About</Link>
          <Link href="/#contact" className="nav-cta">
            Contact
          </Link>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
