// Menjalankan API (port 3001) dan Vite (port 5173) sekaligus: npm run dev
import { spawn } from 'node:child_process';

const procs = [
  spawn(process.execPath, ['server/index.js'], { stdio: 'inherit' }),
  spawn(process.execPath, ['node_modules/vite/bin/vite.js'], { stdio: 'inherit' }),
];

function stopAll(code) {
  for (const p of procs) if (p.exitCode === null) p.kill();
  process.exit(code);
}
for (const p of procs) p.on('exit', (code) => stopAll(code ?? 0));
process.on('SIGINT', () => stopAll(0));
process.on('SIGTERM', () => stopAll(0));
