import SoftwareCard from "@/components/SoftwareCard";
import { software } from "@/data/software";

export default function Home() {
  return (
    <>
      <section className="hero wrap">
        <p className="eyebrow mono">Free software · Windows</p>
        <h1 className="hero-title">
          Software made
          <br />
          <span className="hero-accent">behind the counter.</span>
        </h1>
        <p className="hero-lede">
          Al Mudasir Computers builds its own tools and gives them away. Pick one
          below to see what it does, then download it free.
        </p>
        <div className="hero-stats mono">
          <span>
            <strong>{software.length}</strong> in the catalogue
          </span>
          <span>
            <strong>Free</strong> to download
          </span>
          <span>
            <strong>Windows</strong> 10 / 11
          </span>
        </div>
      </section>

      <section id="catalogue" className="catalogue wrap">
        <div className="section-head">
          <h2>Catalogue</h2>
          <span className="mono muted">Click any item for details</span>
        </div>
        <div className="grid">
          {software.map((item, i) => (
            <SoftwareCard key={item.slug} item={item} index={i} />
          ))}
          <div
            className="card card-soon"
            style={{ animationDelay: `${120 + software.length * 80}ms` }}
          >
            <span className="mono muted">No. {String(software.length + 1).padStart(3, "0")}</span>
            <p className="soon-title">More software on the way</p>
            <p className="muted">New tools are added here as they are finished.</p>
          </div>
        </div>
      </section>

      <section id="about" className="about wrap">
        <h2>About the shop</h2>
        <p>
          Al Mudasir Computers is a computer shop that also writes software. Every
          program listed here is built and tested in-house, and every download
          links to its public source on GitHub, so you can see exactly what you
          are installing.
        </p>
      </section>
    </>
  );
}
