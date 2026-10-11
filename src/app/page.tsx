import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import ServiceCard from "@/components/ServiceCard";
import { products } from "@/data/products";
import JsonLd from "@/components/JsonLd";
import { faqSchema } from "@/data/schema";
import { faqs, services, site, steps, techStack, telHref } from "@/data/site";

export default function Home() {
  return (
    <>
      <JsonLd data={faqSchema()} />
      <section className="hero wrap">
        <p className="eyebrow mono">Software agency · Web · Mobile · Desktop</p>
        <h1 className="hero-title">
          We build the software
          <br />
          <span className="hero-accent">your business runs on.</span>
        </h1>
        <p className="hero-lede">
          {site.name} is a small team that designs and ships web apps, mobile
          apps and desktop software. One team from the first sketch to the
          release you can install.
        </p>
        <div className="hero-actions">
          <Link href="/#contact" className="btn btn-primary">
            Start a project
          </Link>
          <Link href="/#products" className="btn btn-ghost">
            See our products
          </Link>
        </div>
        <div className="hero-stats mono">
          <span>
            <strong>3</strong> platforms covered
          </span>
          <span>
            <strong>{products.length}</strong> shipped product
            {products.length === 1 ? "" : "s"}
          </span>
          <span>
            <strong>Direct</strong> contact with the builders
          </span>
        </div>
      </section>

      <section id="services" className="services wrap">
        <div className="section-head">
          <h2>Services</h2>
          <span className="mono muted">What we take on</span>
        </div>
        <div className="grid grid-3">
          {services.map((service, i) => (
            <ServiceCard key={service.slug} service={service} index={i} />
          ))}
        </div>
      </section>

      <section id="stack" className="stack wrap">
        <div className="section-head">
          <h2>Technologies we use</h2>
          <span className="mono muted">Chosen per project, not per habit</span>
        </div>
        <div className="stack-grid">
          {techStack.map((group) => (
            <div key={group.label} className="stack-group">
              <h3 className="mono stack-label">{group.label}</h3>
              <ul className="chips">
                {group.items.map((item) => (
                  <li key={item} className="chip">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section id="products" className="products wrap">
        <div className="section-head">
          <h2>Products</h2>
          <span className="mono muted">Our own software, ready to use</span>
        </div>
        <div className="grid grid-3">
          {products.map((item, i) => (
            <ProductCard key={item.slug} item={item} index={i} />
          ))}
          <div
            className="card card-soon"
            style={{ animationDelay: `${120 + products.length * 80}ms` }}
          >
            <span className="mono muted">Next</span>
            <p className="soon-title">More products on the way</p>
            <p className="muted">
              New products are added here as each one is finished and released.
              Need something like them built for you?
            </p>
            <a href={`mailto:${site.email}`} className="soon-link">
              Contact us →
            </a>
          </div>
        </div>
      </section>

      <section id="process" className="process wrap">
        <div className="section-head">
          <h2>How we work</h2>
          <span className="mono muted">Four steps, no surprises</span>
        </div>
        <ol className="process-list">
          {steps.map((step, i) => (
            <li key={step.title} className="process-step">
              <span className="mono process-num">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </li>
          ))}
        </ol>
      </section>

      <section id="about" className="about wrap">
        <h2>About us</h2>
        <p>
          {site.name} grew out of years of building and repairing software for
          real users rather than for a portfolio. We write our own products,
          ship them, and keep maintaining them — the same way we treat client
          work. Everything we release publicly links to its source, so you can
          see exactly what we build.
        </p>
      </section>

      <section id="faq" className="faq wrap">
        <div className="section-head">
          <h2>Common questions</h2>
          <span className="mono muted">Straight answers</span>
        </div>
        <div className="faq-list">
          {faqs.map((f) => (
            <details key={f.question} className="faq-item">
              <summary>
                <h3>{f.question}</h3>
                <span className="faq-mark" aria-hidden="true" />
              </summary>
              <p>{f.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="cta wrap">
        <div className="cta-inner">
          <h2>Have something to build?</h2>
          <p>
            Tell us what you need and what it has to do. You will get a straight
            answer on scope, time and cost — not a sales pitch.
          </p>
          <a href={`mailto:${site.email}`} className="btn btn-primary">
            {site.email}
          </a>
          <p className="cta-phones">
            or call{" "}
            {site.phones.map((phone, i) => (
              <span key={phone}>
                {i > 0 && " · "}
                <a href={`tel:${telHref(phone)}`}>{phone}</a>
              </span>
            ))}
          </p>
        </div>
      </section>
    </>
  );
}
