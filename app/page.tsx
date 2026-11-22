import Cover from "@/components/Cover";
import EmailCopy from "@/components/EmailCopy";
import RevealObserver from "@/components/RevealObserver";
import {
  certifications,
  education,
  experience,
  expertise,
  heroTag,
  heroWords,
  lede,
  moreCode,
  projects,
  site,
  type Row,
} from "@/lib/data";

const nav = [
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Code", href: "#code" },
  { label: "Education", href: "#education" },
];

function SectionHead({ id, title, note }: { id: string; title: string[]; note?: string }) {
  return (
    <div className="sec io" id={id}>
      <h2>
        {title.map((line) => (
          <span key={line}>{line}</span>
        ))}
      </h2>
      {note ? <p className="sec-note">{note}</p> : null}
    </div>
  );
}

function Rows({ items }: { items: Row[] }) {
  return (
    <ol className="rows">
      {items.map((item, i) => {
        const external = item.href?.startsWith("http");
        const inner = (
          <>
            <span className="row-n">{String(i + 1).padStart(2, "0")}</span>
            <h3 className="row-t">{item.title}</h3>
            <p className="row-d">{item.desc}</p>
            <span className="row-v">
              {item.meta}
              {item.href ? <span className="arrow"> →</span> : null}
            </span>
          </>
        );
        return (
          <li key={item.title + item.meta} className="io" style={{ transitionDelay: `${i * 60}ms` }}>
            {item.href ? (
              <a
                className="row row-link"
                href={item.href}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
              >
                {inner}
              </a>
            ) : (
              <div className="row">{inner}</div>
            )}
          </li>
        );
      })}
    </ol>
  );
}

export default function Home() {
  return (
    <>
      <RevealObserver />

      <header className="header">
        <nav className="nav" aria-label="Primary">
          <a className="pill pill-home" href="#top" style={{ animationDelay: "150ms" }}>
            {site.name}
          </a>
          {nav.map((item, i) => (
            <a
              key={item.href}
              className="pill pill-link"
              href={item.href}
              style={{ animationDelay: `${210 + i * 60}ms` }}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <a
          className="pill pill-cta"
          href={`mailto:${site.email}`}
          style={{ animationDelay: `${210 + nav.length * 60}ms` }}
        >
          <span className="dot" aria-hidden="true" />
          Get in touch
        </a>
      </header>

      <main id="content">
        <section className="home pad" id="top">
          <h1 className="big" aria-label={heroWords.join(" ")}>
            {heroWords.map((w, i) => (
              <span className="wd" key={w} aria-hidden="true">
                <span className="wi" style={{ animationDelay: `${120 + i * 90}ms` }}>
                  {w}
                </span>
              </span>
            ))}
          </h1>

          <div className="subrow">
            <EmailCopy email={site.email} className="fade-in" />
            <p className="tag fade-in">
              {heroTag.map((line) => (
                <span key={line}>{line}</span>
              ))}
            </p>
          </div>

          <div className="lede-row">
            <p className="lede">
              {lede.map((w, i) => (
                <span key={i}>
                  <span
                    className={`w ${w.hi ? "hi" : ""}`}
                    style={{ animationDelay: `${450 + i * 35}ms` }}
                  >
                    {w.t}
                  </span>{" "}
                </span>
              ))}
            </p>

            <div className="expertise">
              <h2 className="label">Expertise</h2>
              <ul>
                {expertise.map((e) => (
                  <li key={e}>{e}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section aria-labelledby="work-h">
          <div className="sec io" id="work">
            <h2 id="work-h">
              <span>Selected</span>
              <span>Work</span>
            </h2>
          </div>

          <div className="grid">
            {projects.map((p) => {
              const head = (
                <div className="tile-head">
                  <h3 className="tile-name">{p.name}</h3>
                  <p className="tile-desc">{p.desc}</p>
                </div>
              );
              const foot = (
                <div className="tile-foot">
                  <span>{p.tag}</span>
                  {p.cta ? (
                    <span className="tile-cta">
                      {p.cta} <span className="arrow">↗</span>
                    </span>
                  ) : null}
                </div>
              );
              return (
                <article className={`tile-slot slot-${p.layout} io`} key={p.slug}>
                  {p.href ? (
                    <a
                      className="tile"
                      href={p.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${p.name}: ${p.desc} Built with ${p.stack}. Opens in a new tab.`}
                    >
                      {head}
                      <Cover kind={p.cover} />
                      {foot}
                    </a>
                  ) : (
                    <div className="tile">
                      {head}
                      <Cover kind={p.cover} />
                      {foot}
                    </div>
                  )}
                  <p className="tile-stack">{p.stack}</p>
                </article>
              );
            })}
          </div>
        </section>

        <section aria-label="Experience">
          <SectionHead id="experience" title={["Experience"]} note="Where I have worked" />
          <Rows items={experience} />
        </section>

        <section aria-label="More code">
          <SectionHead id="code" title={["More code"]} note="Practice and smaller builds" />
          <Rows items={moreCode} />
        </section>

        <section aria-label="Education and certifications">
          <SectionHead id="education" title={["Education"]} note="Degrees" />
          <Rows items={education} />
          <SectionHead id="certifications" title={["Certifications"]} note="Courses and credentials" />
          <Rows items={certifications} />
        </section>
      </main>

      <footer className="footer" id="contact">
        <div className="footer-row io">
          <ul>
            <li>
              <a href={site.links.linkedin} target="_blank" rel="noopener noreferrer me">
                LinkedIn
              </a>
            </li>
            <li>
              <a href={site.links.github} target="_blank" rel="noopener noreferrer me">
                GitHub
              </a>
            </li>
            <li>
              <a href={site.links.leetcode} target="_blank" rel="noopener noreferrer me">
                LeetCode
              </a>
            </li>
          </ul>
          <EmailCopy email={site.email} />
        </div>
        <p className="mark io" aria-label={site.name}>
          {site.name.split("").map((ch, i) => (
            <span key={i} aria-hidden="true" style={{ transitionDelay: `${i * 35}ms` }}>
              {ch === " " ? " " : ch}
            </span>
          ))}
        </p>
      </footer>
    </>
  );
}
