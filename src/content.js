// Semua teks website. Setiap blok mencatat sumbernya di folder
// D:\Aaa\Aa\Kokulikuler\MIC 2026. Jangan menambah isi yang tidak ada di sumber;
// yang belum ada ditulis sebagai "Belum tersedia".

export const brand = {
  name: 'UrunRembug',
  tagline: 'Fair Funding for the Backbone of Indonesia',
  // RINGKASAN EKSEKUTIF UrunRembug - MIC 2026.pdf (Overview)
  overview:
    'UrunRembug adalah platform digital pembiayaan UMKM yang menghubungkan dana CSR dan ZIS perusahaan dengan pelaku usaha mikro-kecil melalui skema pinjaman modal usaha 0% bunga. Berbeda dari donasi sekali pakai, UrunRembug menerapkan model dana bergulir: dana disalurkan ke UMKM, dikembalikan, lalu disalurkan kembali ke UMKM lain — sehingga dampaknya terus berlanjut tanpa henti.',
};

// UrunRembug.pptx slide 1 & 13; MIC.xlsx (anggota tim Inovasi Generasi)
export const team = {
  name: 'Inovasi Generasi (IG)',
  school: 'SMK Telkom Malang',
  event: 'Moklet Idea Challenge (MIC) 2026',
  field: 'Wirausaha Sosial',
  // Pembagian peran tidak tertulis di dokumen MIC -> dikosongkan.
  members: ['Bima Gusto Mahatsafa', 'Iqbal Ilmi'],
};

// UrunRembug.pptx slide 2
export const problems = {
  title: 'UMKM Terjebak, Dana Sosial Tak Sampai',
  items: [
    {
      icon: '%',
      title: 'Bunga Pinjol & Rentenir Mencekik',
      points: [
        'UMKM sulit mengakses pembiayaan formal — tanpa agunan, dokumen tidak lengkap, proses rumit.',
        'Akibatnya banyak beralih ke rentenir/pinjol dengan bunga bisa >20% per bulan.',
        'Beban bunga tinggi justru menghambat, bukan membantu, keberlangsungan usaha.',
      ],
    },
    {
      icon: 'Rp',
      title: 'Dana CSR & ZIS Kurang Transparan',
      points: [
        'Perusahaan memiliki dana CSR dan lembaga ZIS punya dana sosial yang signifikan.',
        'Namun penyalurannya sering minim verifikasi dan sulit dipantau dampaknya.',
        'Potensi dana sosial ini belum termanfaatkan optimal untuk memberdayakan UMKM.',
      ],
    },
  ],
};

// UrunRembug.pptx slide 4
export const solution = {
  text: 'Platform digital yang menghubungkan dana CSR & ZIS perusahaan dengan UMKM lewat pinjaman modal usaha 0% bunga, edukasi finansial, dan pendampingan usaha berkelanjutan.',
  cycle: ['Dana masuk', 'Disalurkan ke UMKM', 'Dikembalikan', 'Disalurkan lagi'],
};

// UrunRembug.pptx slide 3. Poin 3 hanya dipakai intinya; klaim "kekhawatiran
// terbesar calon pengguna" berasal dari kuesioner n=3, jadi tidak dimuat.
export const whyNow = [
  {
    title: 'Dana Bergulir, Bukan Sekali Pakai',
    text: 'Dana disalurkan, dikembalikan, disalurkan lagi — dampak berkelanjutan, bukan donasi yang habis sekali pakai.',
  },
  {
    title: 'Relasi Dua Arah',
    text: 'Donor memberi dan menerima laporan dampak nyata; UMKM menerima modal dan tumbuh mandiri — bukan hubungan satu arah seperti charity biasa.',
  },
  {
    title: 'Transparansi sebagai Pembeda',
    text: 'UrunRembug menjawab soal kepercayaan lewat verifikasi & pemantauan dana yang jelas.',
  },
];

// UrunRembug.pptx slide 5
export const steps = [
  {
    title: 'UMKM Mendaftar',
    text: 'Mengajukan diri lewat platform dan menjalani proses verifikasi kelayakan usaha.',
  },
  {
    title: 'Ikut Pelatihan Singkat',
    text: 'Syarat sebelum pencairan: pelatihan pengelolaan keuangan & karakter usaha.',
  },
  {
    title: 'Dana Cair + Pendampingan',
    text: 'Pinjaman 0% bunga tanpa agunan, disertai coaching usaha berkelanjutan.',
  },
  {
    title: 'Dana Kembali, Disalurkan Lagi',
    text: 'Setelah dikembalikan, dana diputar kembali ke UMKM berikutnya — siklus abadi.',
  },
];

// UrunRembug.pptx slide 6
export const services = [
  {
    icon: 'Rp',
    title: 'Pinjaman 0% Bunga',
    text: 'Modal usaha tanpa bunga dan tanpa agunan bagi UMKM terverifikasi.',
  },
  {
    icon: 'E',
    title: 'Edukasi Finansial',
    text: 'Materi literasi keuangan agar UMKM mampu mengelola dana secara akuntabel.',
  },
  {
    icon: 'K',
    title: 'Komunitas Bisnis',
    text: 'Ruang berjejaring sesama pelaku usaha untuk saling belajar dan bertukar peluang.',
  },
  {
    icon: 'C',
    title: 'Coaching Usaha',
    text: 'Pendampingan berkelanjutan agar usaha bertumbuh, bukan sekadar bertahan.',
  },
];

// UrunRembug.pptx slide 8 (ringkasan dari 5W1H & Kompetitor — UrunRembug.pdf)
export const comparison = [
  {
    name: 'BAZNAS Microfinance',
    scheme: '0% (Qardhul Hasan)',
    note: 'Masih manual, belum digital end-to-end, jangkauan lokal',
  },
  {
    name: 'Amartha',
    scheme: 'Ada bunga/bagi hasil',
    note: 'Bukan model non-profit; tetap membebani UMKM',
  },
  {
    name: 'Kitabisa',
    scheme: 'Donasi sekali salur',
    note: 'Tidak ada coaching/edukasi bisnis terstruktur',
  },
  {
    name: 'UrunRembug',
    scheme: '0% + dana bergulir',
    note: 'Digital end-to-end, transparan, dan berkelanjutan',
    highlight: true,
  },
];

// BMC UrunRembug - MIC 2026.pdf (Key Partners). Ini rencana mitra, bukan
// kemitraan yang sudah resmi. Mitra tanpa keterangan di BMC dibiarkan tanpa role.
export const partners = [
  { name: 'BAZNAS/lembaga ZIS resmi', role: 'Sumber dana & legitimasi syariah' },
  { name: 'Perusahaan pemilik dana CSR' },
  { name: 'Koperasi & masjid', role: 'Jalur distribusi & kepercayaan komunitas' },
  { name: 'Dinas Koperasi & UMKM', role: 'Sinergi regulasi & jangkauan' },
  { name: 'Penyedia hosting/teknologi platform' },
];

// UrunRembug.pptx slide 12
export const roadmap = [
  {
    phase: 'Fase 1',
    title: 'Pilot Malang',
    text: 'Melayani 50 UMKM, membangun sistem verifikasi & kepercayaan awal donor CSR lokal.',
  },
  {
    phase: 'Fase 2',
    title: 'Sinergi & Digitalisasi',
    text: 'Kolaborasi dengan Dinas Koperasi & UMKM; mendorong UMKM go digital (pemasaran online, sertifikasi produk).',
  },
  {
    phase: 'Fase 3',
    title: 'Ekspansi & Standar Ekspor',
    text: 'Skala ke ratusan UMKM, meningkatkan standar mutu produk lokal agar mampu bersaing hingga pasar ekspor.',
  },
];

export const umkm = {
  // UrunRembug.pptx slide 7 (U)
  who: [
    'Pelaku usaha mikro-kecil yang butuh modal tanpa jeratan bunga tinggi.',
    'Dijangkau lewat jaringan komunitas lokal: koperasi & masjid.',
    'Mendapat pendampingan usaha, bukan hanya pinjaman.',
  ],
  // RINGKASAN EKSEKUTIF (Manfaat Solusi, bagian UMKM)
  benefit:
    'Bagi UMKM, UrunRembug memberikan akses modal usaha yang adil tanpa beban bunga, disertai pendampingan usaha dan edukasi finansial yang membangun kemandirian jangka panjang — bukan sekadar bantuan sesaat.',
  // RINGKASAN EKSEKUTIF (Solusi) + BMC (Key Activities)
  requirements: [
    'Pinjaman 0% bunga dan tanpa agunan.',
    'Usaha diverifikasi kelayakannya langsung di lapangan.',
    'Wajib mengikuti pelatihan singkat pengelolaan keuangan dan karakter usaha sebelum pencairan dana.',
    'Setelah dana cair, ada coaching usaha berkelanjutan.',
  ],
  // RINGKASAN EKSEKUTIF + pptx slide 5. Materi/modul/jadwal belum ada di dokumen.
  training: {
    text: 'Pelatihan singkat pengelolaan keuangan dan karakter usaha adalah pra-syarat pencairan dana. Posisinya ada di langkah ke-2, setelah pendaftaran dan verifikasi, sebelum dana cair.',
    pending: ['Materi / modul pelatihan', 'Durasi dan jadwal', 'Tempat atau format pelaksanaan'],
  },
};

export const csr = {
  // UrunRembug.pptx slide 7 (P)
  who: [
    'Ingin menyalurkan dana sosial secara terverifikasi dan terukur.',
    'Mendapat laporan dampak berkala dan pemantauan langsung.',
    'Memperkuat citra sosial perusahaan di mata publik.',
  ],
  // RINGKASAN EKSEKUTIF (Manfaat Solusi, bagian donor)
  benefit:
    'Bagi perusahaan donor, platform ini menawarkan transparansi penuh atas penyaluran dana CSR/ZIS, laporan dampak yang terukur, serta potensi menjadikan UMKM binaan sebagai bagian dari rantai pasok perusahaan.',
  // RINGKASAN EKSEKUTIF (Solusi)
  partnership:
    'Perusahaan pemilik dana CSR diajak bermitra untuk menyalurkan dananya kepada UMKM yang telah diverifikasi, dengan akses pemantauan langsung ke mana dana disalurkan dan dampak apa yang dihasilkan melalui laporan berkala.',
  // BMC (catatan Revenue Streams)
  trust:
    'Dana CSR/ZIS yang disalurkan ke UMKM bukan pendapatan platform — itu dana amanah bergulir.',
  // Belum ada data penyaluran nyata -> kosong.
  reportEmpty: 'Belum ada data penyaluran.',
};

// Filosofi Logo UrunRembug.docx
export const logoPhilosophy = [
  {
    title: 'Tiga Figur Manusia',
    paragraphs: [
      'Tiga sosok orang yang membentuk lingkaran melambangkan gotong royong — nilai inti kearifan lokal Indonesia yang menjadi fondasi UrunRembug. Tiga bukan angka random: dalam tradisi musyawarah Jawa, keputusan selalu melibatkan lebih dari dua pihak — ada pemberi, penerima, dan komunitas yang menyaksikan. Ketiganya saling merangkul membentuk satu kesatuan yang tidak bisa dipisahkan.',
      'Dua figur berwarna teal melambangkan platform UrunRembug dan komunitas pendukung — pihak yang memberi kepercayaan dan sistem. Satu figur berwarna amber melambangkan UMKM — penerima manfaat yang menjadi pusat dari seluruh gerakan ini.',
    ],
  },
  {
    title: 'Lingkaran Panah Berputar',
    paragraphs: [
      'Di tengah ketiga figur, ada dua panah melingkar yang berputar berlawanan arah — satu teal, satu amber. Ini adalah representasi paling jujur dari konsep dana bergulir UrunRembug.',
      'Dana masuk → disalurkan ke UMKM → dikembalikan → disalurkan lagi → seterusnya. Tidak ada titik akhir. Tidak ada yang habis. Putarannya abadi selama sistemnya dijaga dengan integritas.',
      'Dua arah putaran juga melambangkan hubungan dua arah antara donor dan UMKM — bukan satu arah seperti charity biasa. Donor memberi, UMKM menerima dan berkembang, lalu dampaknya kembali ke donor dalam bentuk laporan dan nilai sosial. Semua bergerak, semua terhubung.',
    ],
  },
  {
    title: 'Simbol "Rp" di Tengah',
    paragraphs: [
      'Lingkaran amber dengan tulisan Rp di pusat logo adalah jantung dari seluruh sistem — uang. Tapi penempatannya sangat disengaja: ia berada di dalam lingkaran komunitas, dikelilingi oleh manusia, dijaga oleh sistem yang berputar.',
      'Ini adalah pernyataan filosofis yang kuat: di UrunRembug, uang bukan tujuan — uang adalah alat yang dijaga bersama oleh komunitas. Berbeda dengan bank atau pinjol yang menempatkan uang di atas segalanya, logo ini secara visual menempatkan manusia di luar dan uang di dalam — manusia yang mengendalikan uang, bukan sebaliknya.',
      'Warna amber pada simbol Rp juga menegaskan: ini adalah uang yang hangat, bukan dingin. Uang yang manusiawi.',
    ],
  },
  {
    title: 'Dua Warna — Teal & Amber',
    paragraphs: [
      'Teal (hijau gelap) melambangkan kepercayaan, transparansi, pertumbuhan yang berkelanjutan, dan kedewasaan. Ini adalah warna platform — warna yang berkata "kami serius, kami bisa dipercaya."',
      'Amber (kuning oranye) melambangkan kehangatan, semangat, komunitas, dan harapan. Ini adalah warna UMKM — warna yang berkata "kami hidup, kami bergerak, kami punya mimpi."',
      'Dua warna ini tidak saling mendominasi. Mereka seimbang — persis seperti relasi ideal antara platform dan UMKM yang menjadi inti UrunRembug.',
    ],
  },
  {
    title: 'Tipografi "Urun" + "Rembug"',
    paragraphs: [
      'Wordmark yang memisahkan "Urun" dalam teal dan "Rembug" dalam amber bukan sekadar estetika — ini narasi dalam satu kata.',
      '"Urun" dalam teal = kontribusi yang datang dari sistem, dari donor, dari kepercayaan yang terbangun — sesuatu yang terstruktur dan dapat diandalkan.',
      '"Rembug" dalam amber = suara UMKM, kehangatan komunitas, musyawarah yang hidup — sesuatu yang organik dan manusiawi.',
      'Dua kata, dua warna, satu nama. Itulah UrunRembug.',
    ],
  },
];
