import Form from '../components/Form.jsx';
import Section from '../components/Section.jsx';
import { steps, umkm } from '../content.js';

const FIELDS = [
  { name: 'nama', label: 'Nama lengkap', max: 100, required: true, autoComplete: 'name' },
  { name: 'nama_usaha', label: 'Nama usaha', max: 100, required: true },
  { name: 'jenis_usaha', label: 'Jenis usaha', max: 100, required: true },
  { name: 'lokasi', label: 'Lokasi usaha', max: 150, required: true },
  { name: 'kontak', label: 'Nomor HP / WhatsApp', max: 50, required: true, type: 'tel' },
  {
    name: 'kebutuhan_modal',
    label: 'Modal akan dipakai untuk apa?',
    max: 500,
    required: true,
    textarea: true,
  },
];

export default function Umkm() {
  return (
    <>
      <section className="page-head">
        <div className="container">
          <p className="eyebrow">Untuk UMKM / Mustahik</p>
          <h1>Modal usaha tanpa jeratan bunga</h1>
          <p className="lead">{umkm.benefit}</p>
        </div>
      </section>

      <Section title="Untuk siapa?">
        <ul className="checklist">
          {umkm.who.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
      </Section>

      <Section title="Syarat & ketentuan" tone="tint">
        <ul className="checklist">
          {umkm.requirements.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
      </Section>

      <Section title="Alur pengajuan">
        <ol className="steps">
          {steps.map((s) => (
            <li key={s.title}>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section title="Pelatihan sebelum pencairan" tone="tint" id="pelatihan">
        <p>{umkm.training.text}</p>
        <dl className="pending">
          {umkm.training.pending.map((p) => (
            <div key={p}>
              <dt>{p}</dt>
              <dd>Belum tersedia</dd>
            </div>
          ))}
        </dl>
      </Section>

      <Section title="Daftar sebagai UMKM" id="daftar">
        <Form
          endpoint="/api/umkm"
          fields={FIELDS}
          submitLabel="Kirim pendaftaran"
          statKey="umkm"
          statLabel="Pendaftaran UMKM tersimpan"
        />
      </Section>
    </>
  );
}
