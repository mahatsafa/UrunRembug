// Aturan isian form. Semua string, di-trim, panjang maksimal tertulis.
// Kunci yang tidak dikenal ditolak (gagal tertutup).
export const FORMS = {
  umkm: {
    table: 'umkm_registrations',
    fields: {
      nama: { max: 100, required: true },
      nama_usaha: { max: 100, required: true },
      jenis_usaha: { max: 100, required: true },
      lokasi: { max: 150, required: true },
      kontak: { max: 50, required: true },
      kebutuhan_modal: { max: 500, required: true },
    },
  },
  csr: {
    table: 'csr_inquiries',
    fields: {
      nama_perusahaan: { max: 150, required: true },
      nama_pic: { max: 100, required: true },
      email: { max: 150, required: true, email: true },
      kontak: { max: 50, required: true },
      pesan: { max: 1000, required: false },
    },
  },
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Mengembalikan { ok: true, values } atau { ok: false, error }.
export function validate(form, body) {
  if (body === null || typeof body !== 'object' || Array.isArray(body)) {
    return { ok: false, error: 'Data harus berupa objek JSON.' };
  }
  for (const key of Object.keys(body)) {
    if (!Object.hasOwn(form.fields, key)) {
      return { ok: false, error: `Isian tidak dikenal: ${key}` };
    }
  }
  const values = {};
  for (const [name, rule] of Object.entries(form.fields)) {
    const raw = body[name] ?? '';
    if (typeof raw !== 'string') return { ok: false, error: `${name} harus teks.` };
    const v = raw.trim();
    if (rule.required && v.length === 0) return { ok: false, error: `${name} wajib diisi.` };
    if (v.length > rule.max) {
      return { ok: false, error: `${name} maksimal ${rule.max} karakter.` };
    }
    if (rule.email && !EMAIL_RE.test(v)) return { ok: false, error: 'Format email tidak valid.' };
    values[name] = v;
  }
  return { ok: true, values };
}
