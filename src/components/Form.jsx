import { useEffect, useState } from 'react';

// Form generik yang mengirim JSON ke API lokal. Batas panjang di sini hanya
// bantuan di browser; validasi sebenarnya ada di server/validate.js.
export default function Form({ endpoint, fields, submitLabel, statKey, statLabel }) {
  const empty = Object.fromEntries(fields.map((f) => [f.name, '']));
  const [values, setValues] = useState(empty);
  const [status, setStatus] = useState({ state: 'idle', message: '' });
  const [count, setCount] = useState(null);

  async function loadCount() {
    try {
      const res = await fetch('/api/stats');
      if (res.ok) setCount((await res.json())[statKey]);
    } catch {
      setCount(null);
    }
  }

  useEffect(() => {
    loadCount();
  }, []);

  async function onSubmit(e) {
    e.preventDefault();
    setStatus({ state: 'sending', message: '' });
    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setStatus({ state: 'error', message: data.error ?? `Gagal (${res.status}).` });
        return;
      }
      setValues(empty);
      setStatus({ state: 'done', message: 'Terima kasih, data sudah tersimpan.' });
      loadCount();
    } catch {
      setStatus({
        state: 'error',
        message: 'Server lokal tidak bisa dihubungi. Pastikan "npm run dev" berjalan.',
      });
    }
  }

  return (
    <form className="form" onSubmit={onSubmit} noValidate={false}>
      {fields.map((f) => {
        const id = `f-${f.name}`;
        const common = {
          id,
          name: f.name,
          value: values[f.name],
          maxLength: f.max,
          required: f.required,
          onChange: (e) => setValues({ ...values, [f.name]: e.target.value }),
        };
        return (
          <div className="field" key={f.name}>
            <label htmlFor={id}>
              {f.label}
              {!f.required && <span className="optional"> (opsional)</span>}
            </label>
            {f.textarea ? (
              <textarea rows={4} {...common} />
            ) : (
              <input type={f.type ?? 'text'} autoComplete={f.autoComplete} {...common} />
            )}
          </div>
        );
      })}
      <button type="submit" className="btn btn-primary" disabled={status.state === 'sending'}>
        {status.state === 'sending' ? 'Mengirim…' : submitLabel}
      </button>
      <p className={`form-status ${status.state}`} role="status" aria-live="polite">
        {status.message}
      </p>
      <p className="form-note">
        Simulasi untuk Moklet Idea Challenge 2026. Data disimpan di database lokal di komputer
        ini, tidak dikirim ke mana pun.
        {count !== null && (
          <>
            {' '}
            {statLabel}: <strong>{count}</strong>.
          </>
        )}
      </p>
    </form>
  );
}
