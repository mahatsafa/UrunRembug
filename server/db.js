import { DatabaseSync } from 'node:sqlite';

// Batas atas baris per tabel. Saat penuh, insert ditolak (server membalas 507).
export const MAX_ROWS = 1000;

const SCHEMA = `
CREATE TABLE IF NOT EXISTS umkm_registrations (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  nama TEXT NOT NULL,
  nama_usaha TEXT NOT NULL,
  jenis_usaha TEXT NOT NULL,
  lokasi TEXT NOT NULL,
  kontak TEXT NOT NULL,
  kebutuhan_modal TEXT NOT NULL,
  created_at TEXT NOT NULL DEFAULT (datetime('now'))
);
CREATE TABLE IF NOT EXISTS csr_inquiries (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  nama_perusahaan TEXT NOT NULL,
  nama_pic TEXT NOT NULL,
  email TEXT NOT NULL,
  kontak TEXT NOT NULL,
  pesan TEXT NOT NULL DEFAULT '',
  created_at TEXT NOT NULL DEFAULT (datetime('now'))
);
`;

// Nama tabel hanya dari daftar ini, tidak pernah dari input pengguna.
export const TABLES = ['umkm_registrations', 'csr_inquiries'];

export function openDb(file) {
  const db = new DatabaseSync(file);
  db.exec(SCHEMA);
  return db;
}

export function countRows(db, table) {
  if (!TABLES.includes(table)) throw new Error(`tabel tidak dikenal: ${table}`);
  return db.prepare(`SELECT COUNT(*) AS n FROM ${table}`).get().n;
}

// Mengembalikan false kalau tabel sudah penuh (tidak ada yang ditulis).
export function insertRow(db, table, fields, values) {
  if (countRows(db, table) >= MAX_ROWS) return false;
  const cols = fields.join(', ');
  const marks = fields.map(() => '?').join(', ');
  db.prepare(`INSERT INTO ${table} (${cols}) VALUES (${marks})`).run(
    ...fields.map((f) => values[f]),
  );
  return true;
}
