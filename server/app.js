import http from 'node:http';
import { countRows, insertRow } from './db.js';
import { FORMS, validate } from './validate.js';

export const MAX_BODY = 16 * 1024; // byte
export const RATE_WINDOW_MS = 60_000;
export const RATE_MAX = 10; // POST per IP per jendela
export const RATE_TABLE_MAX = 1000; // jumlah IP yang dilacak

function send(res, status, data) {
  const body = JSON.stringify(data);
  res.writeHead(status, {
    'Content-Type': 'application/json; charset=utf-8',
    'Content-Length': Buffer.byteLength(body),
    'X-Content-Type-Options': 'nosniff',
  });
  res.end(body);
}

function makeRateLimiter(now) {
  const hits = new Map(); // ip -> { start, count }
  return function allow(ip) {
    const t = now();
    let entry = hits.get(ip);
    if (!entry || t - entry.start >= RATE_WINDOW_MS) {
      if (!entry && hits.size >= RATE_TABLE_MAX) {
        for (const [k, e] of hits) if (t - e.start >= RATE_WINDOW_MS) hits.delete(k);
        // Tabel masih penuh: tolak, jangan tumbuh tanpa batas.
        if (hits.size >= RATE_TABLE_MAX) return false;
      }
      entry = { start: t, count: 0 };
      hits.set(ip, entry);
    }
    entry.count += 1;
    return entry.count <= RATE_MAX;
  };
}

// Membaca body maks MAX_BODY byte. Resolve null kalau kebesaran.
function readBody(req) {
  return new Promise((resolve, reject) => {
    if (Number(req.headers['content-length']) > MAX_BODY) {
      req.resume();
      resolve(null);
      return;
    }
    const chunks = [];
    let size = 0;
    let tooBig = false;
    req.on('data', (c) => {
      if (tooBig) return;
      size += c.length;
      if (size > MAX_BODY) {
        tooBig = true;
        chunks.length = 0;
        return;
      }
      chunks.push(c);
    });
    req.on('end', () => resolve(tooBig ? null : Buffer.concat(chunks).toString('utf8')));
    req.on('error', reject);
  });
}

export function createApp(db, { now = Date.now } = {}) {
  const allow = makeRateLimiter(now);

  return http.createServer(async (req, res) => {
    try {
      const path = new URL(req.url, 'http://localhost').pathname;

      if (path === '/api/stats') {
        if (req.method !== 'GET') return send(res, 405, { error: 'Metode tidak diizinkan.' });
        return send(res, 200, {
          umkm: countRows(db, FORMS.umkm.table),
          csr: countRows(db, FORMS.csr.table),
        });
      }

      const match = path.match(/^\/api\/(umkm|csr)$/);
      if (!match) return send(res, 404, { error: 'Tidak ditemukan.' });
      if (req.method !== 'POST') return send(res, 405, { error: 'Metode tidak diizinkan.' });

      if (!allow(req.socket.remoteAddress ?? 'unknown')) {
        return send(res, 429, { error: 'Terlalu banyak kiriman. Coba lagi sebentar lagi.' });
      }
      const type = req.headers['content-type'] ?? '';
      if (!type.toLowerCase().startsWith('application/json')) {
        return send(res, 415, { error: 'Hanya menerima application/json.' });
      }
      const raw = await readBody(req);
      if (raw === null) return send(res, 413, { error: 'Data terlalu besar.' });

      let body;
      try {
        body = JSON.parse(raw);
      } catch {
        return send(res, 400, { error: 'JSON tidak valid.' });
      }
      const form = FORMS[match[1]];
      const result = validate(form, body);
      if (!result.ok) return send(res, 400, { error: result.error });

      const saved = insertRow(db, form.table, Object.keys(form.fields), result.values);
      if (!saved) return send(res, 507, { error: 'Kapasitas penyimpanan penuh.' });
      return send(res, 201, { ok: true });
    } catch (err) {
      console.error(err);
      if (!res.headersSent) send(res, 500, { error: 'Kesalahan server.' });
    }
  });
}
