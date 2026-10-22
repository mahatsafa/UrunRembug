import assert from 'node:assert/strict';
import { after, before, describe, test } from 'node:test';
import { createApp, MAX_BODY, RATE_MAX, RATE_WINDOW_MS } from '../server/app.js';
import { countRows, insertRow, MAX_ROWS, openDb } from '../server/db.js';
import { FORMS } from '../server/validate.js';

const UMKM_OK = {
  nama: 'Sari',
  nama_usaha: 'Keripik Tempe Sari',
  jenis_usaha: 'Makanan',
  lokasi: 'Malang',
  kontak: '08123456789',
  kebutuhan_modal: 'Bahan baku',
};
const CSR_OK = {
  nama_perusahaan: 'PT Contoh',
  nama_pic: 'Rina',
  email: 'rina@contoh.co.id',
  kontak: '0341000000',
};

async function start(opts) {
  const db = openDb(':memory:');
  const server = createApp(db, opts);
  await new Promise((r) => server.listen(0, '127.0.0.1', r));
  const base = `http://127.0.0.1:${server.address().port}`;
  return { db, server, base };
}

function post(base, path, body, headers = { 'Content-Type': 'application/json' }) {
  return fetch(base + path, {
    method: 'POST',
    headers,
    body: typeof body === 'string' ? body : JSON.stringify(body),
  });
}

describe('API form', () => {
  let ctx;
  before(async () => {
    ctx = await start();
  });
  after(() => ctx.server.close());

  test('UMKM valid diterima dan tersimpan', async () => {
    const res = await post(ctx.base, '/api/umkm', UMKM_OK);
    assert.equal(res.status, 201);
    assert.equal(countRows(ctx.db, 'umkm_registrations'), 1);
    const row = ctx.db.prepare('SELECT * FROM umkm_registrations').get();
    assert.equal(row.nama_usaha, 'Keripik Tempe Sari');
  });

  test('CSR valid tanpa pesan diterima', async () => {
    const res = await post(ctx.base, '/api/csr', CSR_OK);
    assert.equal(res.status, 201);
    assert.equal(countRows(ctx.db, 'csr_inquiries'), 1);
  });

  test('field wajib kosong ditolak', async () => {
    const res = await post(ctx.base, '/api/umkm', { ...UMKM_OK, nama: '   ' });
    assert.equal(res.status, 400);
  });

  test('field melebihi panjang maksimal ditolak', async () => {
    const res = await post(ctx.base, '/api/umkm', { ...UMKM_OK, nama: 'a'.repeat(101) });
    assert.equal(res.status, 400);
  });

  test('field tidak dikenal ditolak', async () => {
    const res = await post(ctx.base, '/api/csr', { ...CSR_OK, admin: true });
    assert.equal(res.status, 400);
  });

  test('field bukan teks ditolak', async () => {
    const res = await post(ctx.base, '/api/umkm', { ...UMKM_OK, kontak: 123 });
    assert.equal(res.status, 400);
  });

  test('email tidak valid ditolak', async () => {
    const res = await post(ctx.base, '/api/csr', { ...CSR_OK, email: 'bukan-email' });
    assert.equal(res.status, 400);
  });

  test('JSON rusak ditolak', async () => {
    const res = await post(ctx.base, '/api/umkm', '{rusak');
    assert.equal(res.status, 400);
  });
});

describe('batas dan perlindungan', () => {
  test('body lebih dari 16 KB ditolak 413', async () => {
    const { server, base } = await start();
    const res = await post(base, '/api/umkm', { ...UMKM_OK, kebutuhan_modal: 'x'.repeat(MAX_BODY) });
    assert.equal(res.status, 413);
    server.close();
  });

  test('content-type selain JSON ditolak 415', async () => {
    const { server, base } = await start();
    const res = await post(base, '/api/umkm', 'nama=a', { 'Content-Type': 'text/plain' });
    assert.equal(res.status, 415);
    server.close();
  });

  test('metode dan path salah ditolak', async () => {
    const { server, base } = await start();
    assert.equal((await fetch(`${base}/api/umkm`)).status, 405);
    assert.equal((await fetch(`${base}/api/lain`)).status, 404);
    server.close();
  });

  test('tabel penuh ditolak 507 dan tidak bertambah', async () => {
    const { db, server, base } = await start();
    const fields = Object.keys(FORMS.umkm.fields);
    for (let i = 0; i < MAX_ROWS; i++) insertRow(db, 'umkm_registrations', fields, UMKM_OK);
    const res = await post(base, '/api/umkm', UMKM_OK);
    assert.equal(res.status, 507);
    assert.equal(countRows(db, 'umkm_registrations'), MAX_ROWS);
    server.close();
  });

  test('rate limit: kiriman ke-11 dalam satu menit ditolak 429, lalu pulih', async () => {
    let t = 0;
    const { server, base } = await start({ now: () => t });
    for (let i = 0; i < RATE_MAX; i++) {
      assert.equal((await post(base, '/api/csr', CSR_OK)).status, 201);
    }
    assert.equal((await post(base, '/api/csr', CSR_OK)).status, 429);
    t += RATE_WINDOW_MS;
    assert.equal((await post(base, '/api/csr', CSR_OK)).status, 201);
    server.close();
  });

  test('stats hanya berisi jumlah', async () => {
    const { server, base } = await start();
    await post(base, '/api/umkm', UMKM_OK);
    const data = await (await fetch(`${base}/api/stats`)).json();
    assert.deepEqual(data, { umkm: 1, csr: 0 });
    server.close();
  });
});
