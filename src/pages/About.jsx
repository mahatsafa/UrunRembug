import Section from '../components/Section.jsx';
import { logoPhilosophy, team } from '../content.js';

export default function About() {
  return (
    <>
      <section className="page-head">
        <div className="container">
          <p className="eyebrow">Tentang</p>
          <h1>Filosofi logo & tim</h1>
          <img
            className="logo-wide"
            src="/logo-panjang.png"
            alt="Logo UrunRembug dengan tagline Fair Funding for the Backbone of Indonesia"
            width="648"
            height="168"
          />
        </div>
      </section>

      <Section title="Filosofi logo">
        <div className="philosophy">
          {logoPhilosophy.map((b) => (
            <article key={b.title}>
              <h3>{b.title}</h3>
              {b.paragraphs.map((p) => (
                <p key={p.slice(0, 40)}>{p}</p>
              ))}
            </article>
          ))}
        </div>
        <figure className="stamp">
          <img src="/stamp.png" alt="Versi garis (stamp) logo UrunRembug" width="500" height="457" />
          <figcaption>Versi stamp logo</figcaption>
        </figure>
      </Section>

      <Section title="Tim" tone="tint">
        <dl className="team">
          <div>
            <dt>Nama tim</dt>
            <dd>{team.name}</dd>
          </div>
          <div>
            <dt>Anggota</dt>
            <dd>{team.members.join(', ')}</dd>
          </div>
          <div>
            <dt>Peran</dt>
            <dd className="muted">Belum tersedia</dd>
          </div>
          <div>
            <dt>Sekolah</dt>
            <dd>{team.school}</dd>
          </div>
          <div>
            <dt>Kegiatan</dt>
            <dd>
              {team.event}, bidang {team.field}
            </dd>
          </div>
        </dl>
      </Section>
    </>
  );
}
