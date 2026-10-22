import { useEffect } from 'react';
import { Link, NavLink, Route, Routes, useLocation } from 'react-router';
import { brand, team } from './content.js';
import About from './pages/About.jsx';
import Csr from './pages/Csr.jsx';
import Home from './pages/Home.jsx';
import Umkm from './pages/Umkm.jsx';

const NAV = [
  { to: '/', label: 'Beranda', end: true },
  { to: '/umkm', label: 'Untuk UMKM' },
  { to: '/csr', label: 'Untuk Donor CSR' },
  { to: '/tentang', label: 'Tentang' },
];

function ScrollToTop() {
  const { pathname } = useLocation();
  // Dibungkus kurung kurawal: scrollTo di browser baru mengembalikan Promise,
  // dan useEffect hanya boleh mengembalikan fungsi clean-up.
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function NotFound() {
  return (
    <section className="section container">
      <h1>Halaman tidak ditemukan</h1>
      <p>
        <Link to="/">Kembali ke beranda</Link>
      </p>
    </section>
  );
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <header className="site-header">
        <div className="container header-inner">
          <Link to="/" className="brand" aria-label="UrunRembug, ke beranda">
            <img src="/logo.png" alt="" width="40" height="34" />
            <span>
              <span className="urun">Urun</span>
              <span className="rembug">Rembug</span>
            </span>
          </Link>
          <nav aria-label="Navigasi utama">
            <ul className="nav">
              {NAV.map((n) => (
                <li key={n.to}>
                  <NavLink to={n.to} end={n.end}>
                    {n.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      <main>
        <Routes>
          <Route index element={<Home />} />
          <Route path="umkm" element={<Umkm />} />
          <Route path="csr" element={<Csr />} />
          <Route path="tentang" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <div>
            <strong>{brand.name}</strong> — {brand.tagline}
          </div>
          <div>
            Tim {team.name} • {team.school} • {team.event}
          </div>
          <div className="version">urunrembug-web v{__APP_VERSION__}</div>
        </div>
      </footer>
    </>
  );
}
