import Link from "next/link";
import Logo from "./Logo";
import { services, site } from "@/data/site";

export default function Footer() {
  return (
    <footer className="site-footer" id="contact">
      <div className="wrap footer-top">
        <div className="footer-brand">
          <Logo size={40} />
          <p className="footer-name">
            Techie<strong>SoftHub</strong>
          </p>
          <p className="footer-blurb">{site.tagline}</p>
        </div>

        <div className="footer-col">
          <h3 className="mono footer-head">Services</h3>
          <ul>
            {services.map((s) => (
              <li key={s.slug}>
                <Link href={`/#${s.slug}`}>{s.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h3 className="mono footer-head">Site</h3>
          <ul>
            <li>
              <Link href="/#products">Products</Link>
            </li>
            <li>
              <Link href="/#stack">Tech stack</Link>
            </li>
            <li>
              <Link href="/#process">How we work</Link>
            </li>
            <li>
              <Link href="/#about">About</Link>
            </li>
          </ul>
        </div>

        <div className="footer-col">
          <h3 className="mono footer-head">Get in touch</h3>
          <ul>
            <li>
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </li>
            <li>
              <a href={site.youtube} target="_blank" rel="noopener noreferrer">
                YouTube
              </a>
            </li>
            <li>
              <a href={site.github} target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </li>
            <li className="muted">{site.domain}</li>
          </ul>
        </div>
      </div>

      <div className="wrap footer-bottom">
        <p className="mono muted">
          © {new Date().getFullYear()} {site.name}
        </p>
        <p className="mono muted">Web · Mobile · Desktop</p>
      </div>
    </footer>
  );
}
