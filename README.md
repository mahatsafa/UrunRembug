# UrunRembug — website (localhost)

*Fair Funding for the Backbone of Indonesia* — ide Tim Inovasi Generasi (IG),
SMK Telkom Malang, Moklet Idea Challenge 2026, bidang Wirausaha Sosial.

Website pengenalan UrunRembug dengan dua sisi: **UMKM** (penerima modal) dan
**donor CSR**. Form pendaftaran UMKM dan minat kemitraan CSR disimpan di
database SQLite lokal (`server/data/urunrembug.db`), bukan di browser.

## Menjalankan

Butuh Node.js 24+ (memakai `node:sqlite` bawaan).

```bash
npm install
npm run dev        # API 127.0.0.1:3001 + web http://127.0.0.1:5173
npm run db:list    # lihat isi database di terminal
npm test           # uji otomatis API
npm run build      # build produksi ke dist/
```

## Struktur

- `src/content.js` — semua teks website, tiap blok mencatat file sumbernya di
  folder MIC 2026. Bagian yang belum ada di dokumen ditulis "Belum tersedia".
- `src/pages/` — Beranda, Untuk UMKM, Untuk Donor CSR, Tentang.
- `server/` — API `node:http` + `node:sqlite`, hanya mendengar di 127.0.0.1.
- `test/api.test.js` — uji validasi, batas ukuran, kapasitas, dan rate limit.

## Batas & keamanan

- Body maks 16 KB, hanya `application/json`, isian tak dikenal ditolak.
- Panjang tiap isian dibatasi (lihat `server/validate.js`).
- Maks 1000 baris per tabel; saat penuh server membalas 507.
- Rate limit 10 kiriman/menit per IP (tabel IP maks 1000 entri, penuh = tolak).
- `GET /api/stats` hanya mengembalikan jumlah, bukan data pribadi.

## Belum ada (sengaja dikosongkan)

- Materi, durasi, jadwal, dan format pelatihan UMKM.
- Data laporan dampak untuk donor.
- Pembagian peran anggota tim.
- Login, halaman admin, dan proses pinjaman sungguhan (ini simulasi).
