import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="py-12 px-4" style={{ backgroundColor: '#5F2E50', color: '#FDFBFC' }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">PPBJ Aceh</h3>
            <p className="mb-4" style={{ color: '#F4D2E0' }}>
              Pusat pelatihan bahasa Jepang untuk persiapan kerja di Jepang.
            </p>
            <div className="flex space-x-4">
              <a href="#" style={{ color: '#F4D2E0' }} className="hover:text-white">📘</a>
              <a href="#" style={{ color: '#F4D2E0' }} className="hover:text-white">🐦</a>
              <a href="#" style={{ color: '#F4D2E0' }} className="hover:text-white">📷</a>
              <a href="#" style={{ color: '#F4D2E0' }} className="hover:text-white">💼</a>
            </div>
          </div>
          <div>
            <h4 className="font-bold mb-4">Program</h4>
            <ul className="space-y-2">
              <li><Link href="/program" style={{ color: '#F4D2E0' }} className="hover:text-white">Level N5-N3</Link></li>
              <li><Link href="/program#metode" style={{ color: '#F4D2E0' }} className="hover:text-white">Metode Pembelajaran</Link></li>
              <li><Link href="/program#fasilitas" style={{ color: '#F4D2E0' }} className="hover:text-white">Fasilitas</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Informasi</h4>
            <ul className="space-y-2">
              <li><Link href="/tentang-kami" style={{ color: '#F4D2E0' }} className="hover:text-white">Tentang Kami</Link></li>
              <li><a href="#" style={{ color: '#F4D2E0' }} className="hover:text-white">Alur ke Jepang</a></li>
              <li><a href="#" style={{ color: '#F4D2E0' }} className="hover:text-white">Testimoni</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Kontak</h4>
            <ul className="space-y-2" style={{ color: '#F4D2E0' }}>
              <li>Alamat: Jl. Contoh Alamat PPBJ</li>
              <li>Telp: +62 651 123 4567</li>
              <li>Email: info@ppbj-aceh.ac.id</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 text-center" style={{ borderTop: '1px solid #BC6892', color: '#F4D2E0' }}>
          <p>© {new Date().getFullYear()} PPBJ Aceh - Pusat Pelatihan Bahasa Jepang. Hak Cipta Dilindungi.</p>
        </div>
      </div>
    </footer>
  );
}