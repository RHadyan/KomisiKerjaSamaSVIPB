import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'PPBJ Program - PPBJ Aceh',
  description: 'Program pelatihan bahasa Jepang PPBJ dari level N5 hingga N3 di PPBJ Aceh',
};

export default function PPBJProgramPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Page Header */}
      <div className="py-16" style={{ background: 'linear-gradient(to bottom, #F4D2E0, #FFFFFF)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold" style={{ color: '#5F2E50' }} mb-4>Program PPBJ</h1>
            <p className="text-xl" style={{ color: '#5F2E50' }} max-w-3xl mx-auto>
              Program pelatihan bahasa Jepang dari level N5 hingga N3 dengan metode pembelajaran terbaik untuk persiapan ke Jepang
            </p>
          </div>
        </div>
      </div>

      {/* Program Overview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold" style={{ color: '#5F2E50' }} mb-4>Deskripsi Program PPBJ</h2>
            <p className="text-lg" style={{ color: '#5F2E50' }} max-w-3xl mx-auto>
              Program Pelatihan Bahasa Jepang (PPBJ) dirancang secara khusus untuk mempersiapkan peserta
              dalam menguasai bahasa Jepang dari dasar hingga tingkat menengah lanjut (N5-N3) yang siap
              digunakan dalam lingkungan kerja profesional di Jepang.
            </p>
          </div>

          <div className="rounded-xl p-8 mb-16" style={{ backgroundColor: '#F4D2E0' }}>
            <h3 className="text-2xl font-bold" style={{ color: '#5F2E50' }} mb-4>Tujuan Program</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <li className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 mt-1 rounded-full flex items-center justify-center text-white text-sm mr-3" style={{ backgroundColor: '#FCB8D7' }}>
                  ✓
                </div>
                <span style={{ color: '#5F2E50' }}>Meningkatkan kemampuan bahasa Jepang hingga tingkat N3</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 mt-1 rounded-full flex items-center justify-center text-white text-sm mr-3" style={{ backgroundColor: '#FCB8D7' }}>
                  ✓
                </div>
                <span style={{ color: '#5F2E50' }}>Mempersiapkan peserta untuk bekerja di perusahaan Jepang</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 mt-1 rounded-full flex items-center justify-center text-white text-sm mr-3" style={{ backgroundColor: '#FCB8D7' }}>
                  ✓
                </div>
                <span style={{ color: '#5F2E50' }}>Memahami budaya dan etika kerja Jepang</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 mt-1 rounded-full flex items-center justify-center text-white text-sm mr-3" style={{ backgroundColor: '#FCB8D7' }}>
                  ✓
                </div>
                <span style={{ color: '#5F2E50' }}>Melatih komunikasi profesional dalam konteks kerja</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Pelatihan Bahasa Jepang (Level N5–N3) Section */}
      <section className="py-16" style={{ backgroundColor: '#FDFBFC' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold" style={{ color: '#5F2E50' }} mb-4>Struktur Program</h2>
            <p className="text-lg" style={{ color: '#5F2E50' }} max-w-3xl mx-auto>
              Program PPBJ mencakup tiga tingkatan bahasa Jepang yang dirancang untuk memberikan landasan kuat
              sebelum memasuki dunia kerja di Jepang
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Level N5 */}
            <div className="p-8 rounded-xl border" style={{ backgroundColor: '#F4D2E0', borderColor: '#F4D2E0' }}>
              <div className="w-16 h-16 rounded-full flex items-center justify-center text-blue-600 font-bold text-xl mx-auto mb-6" style={{ backgroundColor: '#F4D2E0' }}>
                N5
              </div>
              <h3 className="text-xl font-bold" style={{ color: '#5F2E50' }} mb-4 text-center>Level N5</h3>
              <p className="mb-6 text-center" style={{ color: '#5F2E50' }}>
                Awal belajar bahasa Jepang, mempelajari huruf hiragana/katakana dan kosakata dasar
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-5 h-5 mt-1 rounded-full mr-3" style={{ backgroundColor: '#FCB8D7' }}></div>
                  <span style={{ color: '#5F2E50' }}>Pengenalan huruf hiragana dan katakana</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-5 h-5 mt-1 rounded-full mr-3" style={{ backgroundColor: '#FCB8D7' }}></div>
                  <span style={{ color: '#5F2E50' }}>Kosakata dasar (100+ kata)</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-5 h-5 mt-1 rounded-full mr-3" style={{ backgroundColor: '#FCB8D7' }}></div>
                  <span style={{ color: '#5F2E50' }}>Tata bahasa dasar</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-5 h-5 mt-1 rounded-full mr-3" style={{ backgroundColor: '#FCB8D7' }}></div>
                  <span style={{ color: '#5F2E50' }}>Kalimat sederhana</span>
                </li>
              </ul>
            </div>

            {/* Level N4 */}
            <div className="p-8 rounded-xl border" style={{ backgroundColor: '#F4D2E0', borderColor: '#F4D2E0' }}>
              <div className="w-16 h-16 rounded-full flex items-center justify-center text-green-600 font-bold text-xl mx-auto mb-6" style={{ backgroundColor: '#F4D2E0' }}>
                N4
              </div>
              <h3 className="text-xl font-bold" style={{ color: '#5F2E50' }} mb-4 text-center>Level N4</h3>
              <p className="mb-6 text-center" style={{ color: '#5F2E50' }}>
                Kemampuan dasar untuk berkomunikasi dalam situasi sederhana
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-5 h-5 mt-1 rounded-full mr-3" style={{ backgroundColor: '#FCB8D7' }}></div>
                  <span style={{ color: '#5F2E50' }}>Pola kalimat kompleks</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-5 h-5 mt-1 rounded-full mr-3" style={{ backgroundColor: '#FCB8D7' }}></div>
                  <span style={{ color: '#5F2E50' }}>Kosakata menengah (300+ kata)</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-5 h-5 mt-1 rounded-full mr-3" style={{ backgroundColor: '#FCB8D7' }}></div>
                  <span style={{ color: '#5F2E50' }}>Latihan percakapan harian</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-5 h-5 mt-1 rounded-full mr-3" style={{ backgroundColor: '#FCB8D7' }}></div>
                  <span style={{ color: '#5F2E50' }}>Membaca dan menulis kanji dasar</span>
                </li>
              </ul>
            </div>

            {/* Level N3 */}
            <div className="p-8 rounded-xl border" style={{ backgroundColor: '#F4D2E0', borderColor: '#F4D2E0' }}>
              <div className="w-16 h-16 rounded-full flex items-center justify-center text-yellow-600 font-bold text-xl mx-auto mb-6" style={{ backgroundColor: '#F4D2E0' }}>
                N3
              </div>
              <h3 className="text-xl font-bold" style={{ color: '#5F2E50' }} mb-4 text-center>Level N3</h3>
              <p className="mb-6 text-center" style={{ color: '#5F2E50' }}>
                Kemampuan menengah lanjut untuk lingkungan profesional
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-5 h-5 mt-1 rounded-full mr-3" style={{ backgroundColor: '#FCB8D7' }}></div>
                  <span style={{ color: '#5F2E50' }}>Tata bahasa kompleks</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-5 h-5 mt-1 rounded-full mr-3" style={{ backgroundColor: '#FCB8D7' }}></div>
                  <span style={{ color: '#5F2E50' }}>Kosakata luas (600+ kata)</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-5 h-5 mt-1 rounded-full mr-3" style={{ backgroundColor: '#FCB8D7' }}></div>
                  <span style={{ color: '#5F2E50' }}>Simulasi kerja & budaya Jepang</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-5 h-5 mt-1 rounded-full mr-3" style={{ backgroundColor: '#FCB8D7' }}></div>
                  <span style={{ color: '#5F2E50' }}>Kemampuan berkomunikasi profesional</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Metode Pembelajaran Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold" style={{ color: '#5F2E50' }} mb-4>Metode Pembelajaran PPBJ</h2>
            <p className="text-lg" style={{ color: '#5F2E50' }} max-w-3xl mx-auto>
              Pendekatan pembelajaran yang efektif dan menyesuaikan dengan kebutuhan dunia kerja di Jepang
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="p-8 rounded-xl shadow-md border" style={{ backgroundColor: '#FFFFFF', borderColor: '#F4D2E0' }}>
              <div className="w-16 h-16 rounded-full flex items-center justify-center text-blue-600 font-bold text-2xl mb-6" style={{ backgroundColor: '#F4D2E0' }}>
                💼
              </div>
              <h3 className="text-2xl font-bold" style={{ color: '#5F2E50' }} mb-4>Simulasi Kerja</h3>
              <p className="mb-4" style={{ color: '#5F2E50' }}>
                Pembelajaran tidak hanya seputar bahasa, tetapi juga simulasi situasi kerja nyata di Jepang.
                Peserta dilatih untuk berkomunikasi secara profesional dalam lingkungan kerja.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-5 h-5 mt-1 rounded-full mr-3" style={{ backgroundColor: '#FCB8D7' }}></div>
                  <span style={{ color: '#5F2E50' }}>Latihan wawancara kerja</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-5 h-5 mt-1 rounded-full mr-3" style={{ backgroundColor: '#FCB8D7' }}></div>
                  <span style={{ color: '#5F2E50' }}>Simulasi komunikasi di tempat kerja</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-5 h-5 mt-1 rounded-full mr-3" style={{ backgroundColor: '#FCB8D7' }}></div>
                  <span style={{ color: '#5F2E50' }}>Praktik situasi kerja nyata</span>
                </li>
              </ul>
            </div>

            <div className="p-8 rounded-xl shadow-md border" style={{ backgroundColor: '#FFFFFF', borderColor: '#F4D2E0' }}>
              <div className="w-16 h-16 rounded-full flex items-center justify-center text-blue-600 font-bold text-2xl mb-6" style={{ backgroundColor: '#F4D2E0' }}>
                🌏
              </div>
              <h3 className="text-2xl font-bold" style={{ color: '#5F2E50' }} mb-4>Pendekatan Budaya</h3>
              <p className="mb-4" style={{ color: '#5F2E50' }}>
                Pemahaman terhadap budaya Jepang merupakan bagian penting dari program kami.
                Ini mempersiapkan peserta untuk beradaptasi dengan lingkungan sosial dan kerja di Jepang.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-5 h-5 mt-1 rounded-full mr-3" style={{ backgroundColor: '#FCB8D7' }}></div>
                  <span style={{ color: '#5F2E50' }}>Pemahaman nilai-nilai sosial Jepang</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-5 h-5 mt-1 rounded-full mr-3" style={{ backgroundColor: '#FCB8D7' }}></div>
                  <span style={{ color: '#5F2E50' }}>Etika kerja dan sopan santun</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-5 h-5 mt-1 rounded-full mr-3" style={{ backgroundColor: '#FCB8D7' }}></div>
                  <span style={{ color: '#5F2E50' }}>Kebiasaan dan norma sosial di Jepang</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <div className="py-16" style={{ background: 'linear-gradient(to right, #FCB8D7, #EA93BE)', color: '#FFFFFF' }}>
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Siap Memulai Program PPBJ?
          </h2>
          <p className="text-xl mb-10" style={{ color: '#F4D2E0' }}>
            Bergabunglah bersama ribuan peserta yang telah sukses melalui program kami
          </p>
          <a
            href="/kontak"
            className="font-bold py-4 px-12 rounded-lg text-lg transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-transform inline-block"
            style={{ backgroundColor: '#FFFFFF', color: '#5F2E50' }}
          >
            Daftar Sekarang
          </a>
        </div>
      </div>
    </div>
  );
}