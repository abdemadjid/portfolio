"use client";

import { useCallback, useEffect, useState } from "react";
import { content, CV_EN, CV_FR, EMAIL, LINKEDIN, type Lang } from "@/lib/content";

const STORAGE_KEY = "menad-lang";

function readStoredLang(): Lang | null {
  try {
    const v = window.localStorage.getItem(STORAGE_KEY);
    return v === "fr" || v === "en" ? v : null;
  } catch {
    return null;
  }
}

function storeLang(lang: Lang) {
  try {
    window.localStorage.setItem(STORAGE_KEY, lang);
  } catch {
    /* stockage indisponible : on ignore */
  }
}

export default function Portfolio() {
  const [lang, setLang] = useState<Lang>("fr");

  // Langue initiale : choix mémorisé, sinon langue du navigateur.
  useEffect(() => {
    const stored = readStoredLang();
    if (stored) {
      setLang(stored);
      return;
    }
    if (!navigator.language.toLowerCase().startsWith("fr")) setLang("en");
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.title = content[lang].meta.title;
  }, [lang]);

  const toggle = useCallback(() => {
    setLang((prev) => {
      const next: Lang = prev === "fr" ? "en" : "fr";
      storeLang(next);
      return next;
    });
  }, []);

  const t = content[lang];
  const cvHref = lang === "fr" ? CV_FR : CV_EN;
  const featured = t.projects.items.filter((p) => p.featured);
  const others = t.projects.items.filter((p) => !p.featured);
  const year = new Date().getFullYear();

  return (
    <>
      <a className="skip" href="#main">
        {t.ui.skip}
      </a>

      <header className="topbar">
        <div className="wrap topbar-inner">
          <a className="brand" href="#top" aria-label="Abdelmadjid Menad">
            <span className="brand-mark" aria-hidden="true">
              AM
            </span>
            <span className="brand-name">Abdelmadjid Menad</span>
          </a>
          <nav className="nav" aria-label="Navigation">
            <a href="#about">{t.ui.nav.about}</a>
            <a href="#experience">{t.ui.nav.experience}</a>
            <a href="#projects">{t.ui.nav.projects}</a>
            <a href="#skills">{t.ui.nav.skills}</a>
            <a href="#education">{t.ui.nav.education}</a>
            <a href="#contact">{t.ui.nav.contact}</a>
          </nav>
          <button
            type="button"
            className="lang"
            onClick={toggle}
            aria-label={`${t.ui.langLabel}: ${t.ui.otherLangName}`}
          >
            {t.ui.otherLangName}
          </button>
        </div>
      </header>

      <main id="main">
        <section className="hero" id="top">
          <div className="wrap hero-inner">
            <p className="eyebrow">{t.hero.eyebrow}</p>
            <h1>
              Abdelmadjid <span className="accent">Menad</span>
            </h1>
            <p className="lead">{t.hero.role}</p>
            <p className="pitch">{t.hero.pitch}</p>
            <div className="cta">
              <a className="btn btn-primary" href="#projects">
                {t.hero.ctaProjects}
              </a>
              <a className="btn" href={cvHref} download>
                {t.hero.ctaCv}
              </a>
            </div>
            <ul className="stats" aria-label="Key figures">
              {t.hero.stats.map((s) => (
                <li key={s.label}>
                  <strong>{s.value}</strong>
                  <span>{s.label}</span>
                </li>
              ))}
              <li>
                <strong aria-hidden="true">●</strong>
                <span>{t.hero.location}</span>
              </li>
            </ul>
          </div>
        </section>

        <section className="section" id="about" aria-labelledby="about-title">
          <div className="wrap">
            <h2 id="about-title">{t.about.title}</h2>
            <div className="about-grid">
              <div>
                {t.about.text.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
              <aside className="panel">
                <h3>{t.about.focusTitle}</h3>
                <ul className="focus">
                  {t.about.focus.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
              </aside>
            </div>
          </div>
        </section>

        <section className="section" id="experience" aria-labelledby="exp-title">
          <div className="wrap">
            <h2 id="exp-title">{t.experience.title}</h2>
            <ol className="timeline">
              {t.experience.jobs.map((job) => (
                <li key={`${job.org}-${job.period}`}>
                  <div className="tl-head">
                    <h3>{job.role}</h3>
                    <span className="period">{job.period}</span>
                  </div>
                  <p className="muted">
                    {job.org} · {job.place}
                  </p>
                  <ul>
                    {job.points.map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="section" id="projects" aria-labelledby="proj-title">
          <div className="wrap">
            <h2 id="proj-title">{t.projects.title}</h2>
            <p className="section-intro">{t.projects.intro}</p>

            {featured.map((p) => (
              <article className="card card-featured" key={p.name}>
                <div className="card-top">
                  <span className="badge">{t.projects.featured}</span>
                  <span className="period">{p.period}</span>
                </div>
                <h3>{p.name}</h3>
                <p className="tagline">{p.tagline}</p>
                <p>{p.summary}</p>
                <ul className="bullets">
                  {p.points.map((pt) => (
                    <li key={pt}>{pt}</li>
                  ))}
                </ul>
                <ul className="chips" aria-label="Technologies">
                  {p.tech.map((x) => (
                    <li key={x}>{x}</li>
                  ))}
                </ul>
              </article>
            ))}

            <div className="grid">
              {others.map((p) => (
                <article className="card" key={p.name}>
                  <div className="card-top">
                    <span className="period">{p.period}</span>
                  </div>
                  <h3>{p.name}</h3>
                  <p className="tagline">{p.tagline}</p>
                  <p>{p.summary}</p>
                  <details>
                    <summary>{t.projects.details}</summary>
                    <ul className="bullets">
                      {p.points.map((pt) => (
                        <li key={pt}>{pt}</li>
                      ))}
                    </ul>
                  </details>
                  <ul className="chips" aria-label="Technologies">
                    {p.tech.map((x) => (
                      <li key={x}>{x}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="skills" aria-labelledby="skills-title">
          <div className="wrap">
            <h2 id="skills-title">{t.skills.title}</h2>
            <div className="grid grid-skills">
              {t.skills.groups.map((g) => (
                <div className="panel" key={g.title}>
                  <h3>{g.title}</h3>
                  <ul className="chips">
                    {g.items.map((i) => (
                      <li key={i}>{i}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="education" aria-labelledby="edu-title">
          <div className="wrap">
            <h2 id="edu-title">{t.education.title}</h2>
            <ol className="timeline">
              {t.education.items.map((e) => (
                <li key={e.title}>
                  <div className="tl-head">
                    <h3>{e.title}</h3>
                    <span className="period">{e.period}</span>
                  </div>
                  <p className="muted">
                    {e.school}
                    {e.place ? ` · ${e.place}` : ""}
                  </p>
                  {e.note ? <p>{e.note}</p> : null}
                </li>
              ))}
            </ol>
            <h3 className="sub">{t.education.languagesTitle}</h3>
            <ul className="langs">
              {t.education.languages.map((l) => (
                <li key={l.name}>
                  <strong>{l.name}</strong>
                  <span>{l.level}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="section" id="contact" aria-labelledby="contact-title">
          <div className="wrap">
            <div className="contact">
              <h2 id="contact-title">{t.contact.title}</h2>
              <p>{t.contact.text}</p>
              <div className="cta">
                <a className="btn btn-primary" href={`mailto:${EMAIL}`}>
                  {t.contact.email}
                </a>
                <a className="btn" href={LINKEDIN} target="_blank" rel="noopener noreferrer">
                  {t.contact.linkedin}
                </a>
                <a className="btn" href={CV_FR} download>
                  {t.contact.cvFr}
                </a>
                <a className="btn" href={CV_EN} download>
                  {t.contact.cvEn}
                </a>
              </div>
              <p className="muted mail">{EMAIL}</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="wrap">
          <span>
            © {year} Abdelmadjid Menad
          </span>
          <span>{t.footer}</span>
        </div>
      </footer>
    </>
  );
}
