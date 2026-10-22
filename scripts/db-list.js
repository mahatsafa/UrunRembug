// Menampilkan isi database lokal di terminal: npm run db:list
import { existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { openDb, TABLES } from '../server/db.js';

const file = fileURLToPath(new URL('../server/data/urunrembug.db', import.meta.url));
if (!existsSync(file)) {
  console.log('Database belum ada. Jalankan "npm run dev" lalu kirim form dulu.');
  process.exit(0);
}
const db = openDb(file);
for (const table of TABLES) {
  const rows = db.prepare(`SELECT * FROM ${table} ORDER BY id`).all();
  console.log(`\n== ${table} (${rows.length} baris)`);
  if (rows.length) console.table(rows);
}
