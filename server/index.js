import { mkdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { createApp } from './app.js';
import { openDb } from './db.js';

const HOST = '127.0.0.1'; // hanya localhost
const PORT = 3001;
const dataDir = fileURLToPath(new URL('./data/', import.meta.url));
const dbFile = `${dataDir}urunrembug.db`;

mkdirSync(dataDir, { recursive: true });
const db = openDb(dbFile);
createApp(db).listen(PORT, HOST, () => {
  console.log(`API UrunRembug: http://${HOST}:${PORT}  (DB: ${dbFile})`);
});
