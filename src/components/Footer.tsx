export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap footer-inner">
        <p className="footer-name">Al Mudasir Computers</p>
        <p className="mono muted">
          © {new Date().getFullYear()} · Software made in-house · Free downloads
        </p>
      </div>
    </footer>
  );
}
