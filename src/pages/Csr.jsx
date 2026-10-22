import Form from '../components/Form.jsx';
import Section from '../components/Section.jsx';
import { comparison, csr } from '../content.js';

const FIELDS = [
  { name: 'nama_perusahaan', label: 'Nama perusahaan / lembaga', max: 150, required: true },
  { name: 'nama_pic', label: 'Nama penanggung jawab (PIC)', max: 100, required: true },
  { name: 'email', label: 'Email', max: 150, required: true, type: 'email', autoComplete: 'email' },
  { name: 'kontak', label: 'Nomor telepon', max: 50, required: true, type: 'tel' },
  { name: 'pesan', label: 'Pesan', max: 1000, required: false, textarea: true },
];

export default function Csr() {
  const ours = comparison.find((c) => c.highlight);
  return (
    <>
      <section className="page-head page-head-amber">
        <div className="container">
          <p className="eyebrow">Untuk perusahaan pemilik dana CSR</p>
          <h1>Dana sosial yang tersalur terverifikasi</h1>
          <p className="lead">{csr.benefit}</p>
        </div>
      </section>

      <Section title="Apa yang didapat donor?">
        <ul className="checklist">
          {csr.who.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
      </Section>

      <Section title="Cara bermitra" tone="tint">
        <p>{csr.partnership}</p>
        <p className="callout">{csr.trust}</p>
        <p>
          Skema: <strong>{ours.scheme}</strong> — {ours.note.toLowerCase()}.
        </p>
      </Section>

      <Section title="Laporan dampak">
        <div className="empty-state">{csr.reportEmpty}</div>
      </Section>

      <Section title="Ajukan minat kemitraan" tone="tint" id="kemitraan">
        <Form
          endpoint="/api/csr"
          fields={FIELDS}
          submitLabel="Kirim minat kemitraan"
          statKey="csr"
          statLabel="Minat kemitraan tersimpan"
        />
      </Section>
    </>
  );
}
