import { Link } from 'react-router';
import Section from '../components/Section.jsx';
import {
  brand,
  comparison,
  problems,
  roadmap,
  services,
  solution,
  steps,
  whyNow,
} from '../content.js';

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container hero-inner">
          <div className="hero-text">
            <p className="eyebrow">Wirausaha Sosial • MIC 2026</p>
            <h1>{brand.tagline}</h1>
            <p className="lead">{brand.overview}</p>
            <div className="hero-actions">
              <Link to="/umkm" className="btn btn-primary">
                Saya pelaku UMKM
              </Link>
              <Link to="/csr" className="btn btn-secondary">
                Saya perusahaan CSR
              </Link>
            </div>
          </div>
          <img className="hero-logo" src="/logo.png" alt="Logo UrunRembug" width="323" height="272" />
        </div>
      </section>

      <Section eyebrow="Masalah" title={problems.title}>
        <div className="grid grid-2">
          {problems.items.map((p) => (
            <article className="card" key={p.title}>
              <span className="badge" aria-hidden="true">
                {p.icon}
              </span>
              <h3>{p.title}</h3>
              <ul>
                {p.points.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Section>

      <Section eyebrow="Solusi" title="UrunRembug" tone="tint">
        <p className="lead">{solution.text}</p>
        <ol className="cycle" aria-label="Siklus dana bergulir">
          {solution.cycle.map((c) => (
            <li key={c}>{c}</li>
          ))}
        </ol>
      </Section>

      <Section eyebrow="Latar belakang" title="Kenapa Ini Penting Sekarang?">
        <div className="grid grid-3">
          {whyNow.map((w, i) => (
            <article className="card" key={w.title}>
              <span className="num">{i + 1}</span>
              <h3>{w.title}</h3>
              <p>{w.text}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section eyebrow="Cara kerja" title="Empat Langkah Dana Bergulir" tone="tint">
        <ol className="steps">
          {steps.map((s) => (
            <li key={s.title}>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section eyebrow="Produk" title="Empat Layanan Inti">
        <div className="grid grid-4">
          {services.map((s) => (
            <article className="card" key={s.title}>
              <span className="badge" aria-hidden="true">
                {s.icon}
              </span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section eyebrow="Kompetisi" title="Posisi UrunRembug di Pasar" tone="tint">
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th scope="col">Platform</th>
                <th scope="col">Skema bunga</th>
                <th scope="col">Catatan utama</th>
              </tr>
            </thead>
            <tbody>
              {comparison.map((c) => (
                <tr key={c.name} className={c.highlight ? 'highlight' : undefined}>
                  <th scope="row">{c.name}</th>
                  <td>{c.scheme}</td>
                  <td>{c.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section eyebrow="Ke depan" title="Potensi Pengembangan">
        <div className="grid grid-3">
          {roadmap.map((r) => (
            <article className="card" key={r.phase}>
              <p className="phase">{r.phase}</p>
              <h3>{r.title}</h3>
              <p>{r.text}</p>
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}
