import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pekerja Migran Aceh',
  description: 'Program pelatihan bahasa Jepang dan keterampilan kerja untuk pemuda Aceh',
};

export default function TentangKamiPage() {
  return (
    <div className="font-sans bg-white">

      <main>
        <h1 className="sr-only">Pekerja Migran Aceh - Program Persiapan Tenaga Kerja ke Jepang</h1>

        {/* Hero Section */}
        <section id="hero" className="hero-page hero-home py-20" style={{ background: 'linear-gradient(to right, #FCB8D7, #EA93BE)' }}>
          <div className="slider-hero">
            <div className="swiper-container relative">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="hero-inside bg-cover bg-center h-96 flex items-center" style={{ backgroundImage: 'url(https://via.placeholder.com/1200x500)' }}>
                    <div className="container mx-auto px-4">
                      <div className="w-full md:w-7/12 lg:w-9/12">
                        <div className="content-wrapper text-white">
                          <h3 className="hero-title text-4xl md:text-5xl font-bold mb-4">
                            <span>Program Pekerja Migran Aceh</span>
                          </h3>
                          <p className="text-xl mb-6">Program pelatihan bahasa Jepang dan keterampilan kerja untuk pemuda Aceh menuju Jepang</p>
                          <div className="button-wrapper">
                            <button className="px-6 py-3 rounded-full font-bold" style={{ backgroundColor: '#FDFBFC', color: '#1F2A44' }}>Daftar Sekarang</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Program Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="section-header text-center mb-12">
              <h2 className="section-subtitle text-3xl font-bold mb-4" style={{ color: '#5F2E50' }}>Tentang Program</h2>
              <p className="section-desc text-lg text-gray-600 max-w-3xl mx-auto">
                Pekerja Migran Aceh adalah program yang diinisiasi oleh Sekolah Vokasi IPB University dan didukung oleh Pemerintah Daerah Aceh.
                Program ini bertujuan mempersiapkan pemuda Aceh agar memiliki kompetensi bahasa Jepang dan keterampilan kerja untuk mengikuti
                Ujian JLPT N4 serta Sertifikasi Specified Skilled Worker (SSW), sekaligus mempersiapkan peserta untuk bekerja secara profesional di Jepang.
              </p>
            </div>
          </div>
        </section>

        {/* Main Program Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="section-header text-center mb-12">
              <h2 className="section-subtitle text-3xl font-bold mb-4" style={{ color: '#5F2E50' }}>Program Utama</h2>
            </div>
            <div className="flex flex-col md:flex-row justify-center items-center gap-8">
              <div className="bg-white rounded-xl shadow-lg p-8 w-full md:w-2/3">
                <h3 className="text-2xl font-bold mb-4 text-center" style={{ color: '#5F2E50' }}>Specified Skilled Worker (SSW)</h3>
                <p className="text-center">
                  Program penyiapan tenaga kerja terampil untuk penempatan kerja di Jepang melalui jalur resmi dan profesional.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Goals Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="section-header text-center mb-12">
              <h2 className="section-subtitle text-3xl font-bold mb-4" style={{ color: '#5F2E50' }}>Tujuan Program</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-bold mb-2" style={{ color: '#5F2E50' }}>Komunikasi Mandiri</h3>
                <p>Mempersiapkan peserta agar mampu berkomunikasi dalam bahasa Jepang dalam kehidupan sehari-hari tanpa bantuan.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-bold mb-2" style={{ color: '#5F2E50' }}>Sertifikasi Internasional</h3>
                <p>Mencapai sertifikasi kemahiran bahasa Jepang (JLPT N4) dan Sertifikasi Kompetensi SSW.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-bold mb-2" style={{ color: '#5F2E50' }}>Pemahaman Budaya</h3>
                <p>Membekali peserta dengan pemahaman budaya dan etos kerja Jepang.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-bold mb-2" style={{ color: '#5F2E50' }}>Kemandirian</h3>
                <p>Mendorong kemandirian peserta dalam merencanakan dan mengontrol proses belajar.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Output Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="section-header text-center mb-12">
              <h2 className="section-subtitle text-3xl font-bold mb-4" style={{ color: '#5F2E50' }}>Output Program</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-bold mb-2" style={{ color: '#5F2E50' }}>Kemampuan Komunikasi</h3>
                <p>Kemampuan komunikasi bahasa Jepang setara level A2</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-bold mb-2" style={{ color: '#5F2E50' }}>Penguasaan Huruf</h3>
                <p>Penguasaan lebih dari 450 huruf Jepang</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-bold mb-2" style={{ color: '#5F2E50' }}>Kosakata</h3>
                <p>Penguasaan lebih dari 1.500 kosakata</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-bold mb-2" style={{ color: '#5F2E50' }}>Sertifikasi</h3>
                <p>Lulus Ujian JLPT N4</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-bold mb-2" style={{ color: '#5F2E50' }}>SSW Certificate</h3>
                <p>Memperoleh Sertifikasi SSW</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-bold mb-2" style={{ color: '#5F2E50' }}>Sikap Kerja</h3>
                <p>Memiliki sikap mandiri dan kesiapan kerja</p>
              </div>
            </div>
          </div>
        </section>

        {/* Advantages Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="section-header text-center mb-12">
              <h2 className="section-subtitle text-3xl font-bold mb-4" style={{ color: '#5F2E50' }}>Keunggulan Program</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16 mx-auto mb-4" />
                <h3 className="font-bold mb-2" style={{ color: '#5F2E50' }}>Kesempatan Kerja</h3>
                <p>Kesempatan bekerja dan belajar langsung di Jepang</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16 mx-auto mb-4" />
                <h3 className="font-bold mb-2" style={{ color: '#5F2E50' }}>Dukungan Institusi</h3>
                <p>Didukung oleh Sekolah Vokasi IPB University dan Pemerintah Daerah Aceh</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16 mx-auto mb-4" />
                <h3 className="font-bold mb-2" style={{ color: '#5F2E50' }}>Pendampingan</h3>
                <p>Didampingi oleh alumni Specified Skilled Worker (SSW) asal Aceh</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16 mx-auto mb-4" />
                <h3 className="font-bold mb-2" style={{ color: '#5F2E50' }}>Fasilitasi Lengkap</h3>
                <p>Fasilitasi pelatihan bahasa, sertifikasi, hingga penempatan kerja</p>
              </div>
            </div>
          </div>
        </section>

        {/* Cost Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="section-header text-center mb-12">
              <h2 className="section-subtitle text-3xl font-bold mb-4" style={{ color: '#5F2E50' }}>Biaya Program</h2>
            </div>
            <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
              <ul className="space-y-4">
                <li className="flex justify-between border-b pb-2">
                  <span>Pelatihan Bahasa Jepang N4 dan Kompetensi SSW</span>
                  <span className="font-bold">Rp22.000.000</span>
                </li>
                <li className="flex justify-between border-b pb-2">
                  <span>Biaya keberangkatan (paspor, tiket, visa, kontrak kerja, dana awal)</span>
                  <span className="font-bold">Rp11.500.000</span>
                </li>
                <li className="flex justify-between border-b pb-2">
                  <span>Dukungan beasiswa dari Pemerintah Aceh</span>
                  <span className="text-green-600">Tersedia</span>
                </li>
                <li className="flex justify-between">
                  <span>Skema dana talangan untuk biaya keberangkatan</span>
                  <span className="text-green-600">Tersedia</span>
                </li>
              </ul>
              <p className="mt-6 text-center">
                Pengembalian dana talangan dilakukan secara bertahap setelah peserta menerima gaji pertama di Jepang,
                dengan masa tenggang satu bulan.
              </p>
            </div>
          </div>
        </section>

        {/* Requirements Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="section-header text-center mb-12">
              <h2 className="section-subtitle text-3xl font-bold mb-4" style={{ color: '#5F2E50' }}>Persyaratan Peserta</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-bold text-xl mb-4" style={{ color: '#5F2E50' }}>Persyaratan Umum</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Warga Negara Indonesia</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Diutamakan penduduk Provinsi Aceh (memiliki KTP Aceh)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Usia minimal 19 tahun dan maksimal 30 tahun saat pendaftaran</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Sehat jasmani dan rohani</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Tidak memiliki riwayat penyakit kronis atau menular</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-bold text-xl mb-4" style={{ color: '#5F2E50' }}>Persyaratan Administrasi</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Izin tertulis dari orang tua/wali</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Mengisi formulir pendaftaran online</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Upload fotokopi KTP dan Kartu Keluarga</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Upload fotokopi ijazah dan transkrip nilai pendidikan terakhir</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Upload Surat Keterangan Catatan Kepolisian (SKCK)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Program Flow Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="section-header text-center mb-12">
              <h2 className="section-subtitle text-3xl font-bold mb-4" style={{ color: '#5F2E50' }}>Alur Program</h2>
            </div>
            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { step: "1", title: "Sosialisasi", desc: "Penyampaian informasi program dan pendaftaran" },
                  { step: "2", title: "Pendaftaran Online", desc: "Pengisian formulir dan unggah dokumen administrasi" },
                  { step: "3", title: "Seleksi dan Wawancara", desc: "Wawancara dengan Sekolah Vokasi IPB University dan perusahaan Jepang" },
                  { step: "4", title: "Orientasi dan Matrikulasi", desc: "Pengenalan program, pengajar, serta dasar huruf Jepang" },
                  { step: "5", title: "Pelatihan Intensif", desc: "Pelatihan bahasa Jepang secara online selama 9 bulan dan pelatihan offline intensif selama 1 bulan sebelum keberangkatan" },
                  { step: "6", title: "Ujian Sertifikasi", desc: "Evaluasi kemampuan bahasa dan kompetensi kerja sesuai standar Jepang" },
                  { step: "7", title: "Proses Keberangkatan", desc: "Fasilitasi dokumen, karantina, dan persiapan akhir" },
                  { step: "8", title: "Penempatan Kerja", desc: "Penempatan kerja di Jepang sesuai bidang dan kompetensi peserta" }
                ].map((item, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-sm text-center">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#FCB8D7', color: '#1F2A44' }}>
                      {item.step}
                    </div>
                    <h3 className="font-bold mb-2" style={{ color: '#5F2E50' }}>{item.title}</h3>
                    <p className="text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Training and Curriculum Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="section-header text-center mb-12">
              <h2 className="section-subtitle text-3xl font-bold mb-4" style={{ color: '#5F2E50' }}>Pelatihan dan Kurikulum</h2>
            </div>
            <div className="max-w-4xl mx-auto bg-gray-50 p-8 rounded-lg">
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="mr-2 font-bold">•</span>
                  <span>Aksara Jepang (Hiragana, Katakana, dan Kanji)</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 font-bold">•</span>
                  <span>Tata bahasa pemula (A1) dan dasar (A2)</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 font-bold">•</span>
                  <span>Budaya dan etos kerja Jepang</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 font-bold">•</span>
                  <span>Strategi menghadapi ujian JLPT dan SSW</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 font-bold">•</span>
                  <span>Konsultasi dan bimbingan belajar</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Materials and Media Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="section-header text-center mb-12">
              <h2 className="section-subtitle text-3xl font-bold mb-4" style={{ color: '#5F2E50' }}>Materi dan Media Pembelajaran</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-white p-6 rounded-lg">
                <h3 className="font-bold text-xl mb-4" style={{ color: '#5F2E50' }}>Materi Ajar</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Minna no Nihongo 1 & 2</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Marugoto A!, A2:1, A2:2</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Nihongo Soumatome</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Kumpulan soal JLPT dan SSW</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Marugoto Plus, E-Minato, Quizlet, Padlet</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg">
                <h3 className="font-bold text-xl mb-4" style={{ color: '#5F2E50' }}>Media Belajar</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Zoom (pelatihan online 4x/minggu)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Link latihan mandiri online</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>WhatsApp Group kelas dan admin</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="section-header text-center mb-12">
              <h2 className="section-subtitle text-3xl font-bold mb-4" style={{ color: '#5F2E50' }}>Pertanyaan Umum (FAQ)</h2>
            </div>
            <div className="max-w-4xl mx-auto space-y-6">
              {[
                {
                  question: "Apa itu Program SSW yang diselenggarakan oleh SV IPB untuk Pemuda Aceh?",
                  answer: "Program ini adalah inisiatif Sekolah Vokasi IPB University untuk menyiapkan dan mengirimkan pemuda Aceh sebagai pekerja migran terampil (Specified Skilled Worker - SSW) ke Jepang. Program ini mencakup pelatihan komprehensif, fasilitasi pembiayaan, dan penempatan kerja yang aman dan profesional."
                },
                {
                  question: "Siapa saja yang dapat mendaftar untuk program ini?",
                  answer: "Program ini terbuka untuk pemuda Aceh dengan usia antara 19-30 tahun yang memiliki pendidikan minimal SMA atau sederajat. Peserta harus sehat secara jasmani dan rohani, serta memiliki komitmen untuk menjaga nilai-nilai syariat Islam dan keistimewaan Aceh selama di Jepang."
                },
                {
                  question: "Berapa lama durasi pelatihan dan apa saja yang dipelajari?",
                  answer: "Pelatihan berlangsung selama total 10 bulan baik online dan offline. Ini terbagi menjadi 9 bulan masa studi online yang mencakup bahasa Jepang, budaya, etika kerja, dan soft skill, serta 1 bulan persiapan akhir sebelum keberangkatan."
                },
                {
                  question: "Apakah program ini gratis?",
                  answer: "Program ini tidak gratis, namun, Pemerintah Aceh telah mempersiapkan metode dukungan Beasiswa dana pendidikan (pendidikan bahasa Jepang dan etika budaya Jepang) dan dana talangan keberangkatan (biaya pembuatan passpor,tiket, visa, kontrak kerja, dana awal selama di Jepang) yang didukung oleh lembaga keuangan Aceh."
                }
              ].map((faq, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-6">
                  <h3 className="font-bold text-lg mb-2" style={{ color: '#5F2E50' }}>{faq.question}</h3>
                  <p>{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="section-header text-center mb-12">
              <h2 className="section-subtitle text-3xl font-bold mb-4" style={{ color: '#5F2E50' }}>Kontak Kami</h2>
              <p className="text-lg">Untuk pertanyaan lebih lanjut, jangan ragu untuk menghubungi kami.</p>
            </div>
            <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
              <div className="space-y-4">
                <div>
                  <h3 className="font-bold" style={{ color: '#5F2E50' }}>Sekolah Vokasi IPB University</h3>
                  <p>Kampus Cilibende: Jl. Kumbang No. 14, Cilibende, Bogor, Jawa Barat.</p>
                  <p>Telepon: (0251) 8329101</p>
                </div>
                <div>
                  <p><strong>Email:</strong> pekerjamigranaceh@gmail.com , svipb-partnership@apps.ipb.ac.id</p>
                </div>
                <div>
                  <p><strong>No. WhatsApp:</strong> +62 8988 0000 65</p>
                </div>
                <div>
                  <p><strong>Instagram:</strong> @pekerjamigranaceh</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}