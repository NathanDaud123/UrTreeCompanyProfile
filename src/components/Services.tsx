import { Card } from "./ui/card";
import { TreePine, Building, HandHeart, LineChart, MessageCircle, Newspaper, CheckCircle2 } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Services() {
  return (
    <>
      {/* MyTree */}
      <section id="mytree" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block px-6 py-2 bg-green-100 rounded-full mb-6">
                <span className="text-green-800 font-bold">Investasi Pohon</span>
              </div>
              <div className="flex items-center mb-8">
                <div className="bg-gradient-to-br from-green-600 to-green-700 p-4 rounded-2xl mr-6 shadow-xl">
                  <TreePine className="h-10 w-10 text-white" />
                </div>
                <h2 className="text-green-900 font-black">MyTree</h2>
              </div>
              <p className="text-gray-800 mb-8 text-lg font-medium leading-relaxed">
                MyTree adalah program investasi di mana Anda mendanai pohon (seperti pohon buah atau kayu) yang dikelola petani lokal, dengan potensi untuk mendapatkan bagi hasil dari panennya di masa depan.
              </p>
              <div className="space-y-6">
                <div className="flex items-start bg-green-50 p-6 rounded-2xl border-2 border-green-200">
                  <div className="bg-green-600 rounded-xl p-3 mr-6 flex-shrink-0">
                    <CheckCircle2 className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-green-900 mb-2 font-bold text-lg">Potensi Bagi Hasil</h4>
                    <p className="text-gray-700 font-medium">Dapatkan keuntungan dari hasil panen pohon yang Anda investasikan</p>
                  </div>
                </div>
                <div className="flex items-start bg-green-50 p-6 rounded-2xl border-2 border-green-200">
                  <div className="bg-green-600 rounded-xl p-3 mr-6 flex-shrink-0">
                    <CheckCircle2 className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-green-900 mb-2 font-bold text-lg">Dampak Lingkungan</h4>
                    <p className="text-gray-700 font-medium">Berkontribusi langsung pada reboisasi dan pelestarian lingkungan</p>
                  </div>
                </div>
                <div className="flex items-start bg-green-50 p-6 rounded-2xl border-2 border-green-200">
                  <div className="bg-green-600 rounded-xl p-3 mr-6 flex-shrink-0">
                    <CheckCircle2 className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-green-900 mb-2 font-bold text-lg">Membantu Petani Lokal</h4>
                    <p className="text-gray-700 font-medium">Memberdayakan ekonomi petani lokal Indonesia</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl border-8 border-green-600">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1633201876516-c76019627752?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmVlbiUyMGludmVzdG1lbnQlMjBncm93dGh8ZW58MXx8fHwxNzYxNDEyNjAxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Investment Growth"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CSR */}
      <section id="csr" className="py-24 bg-gradient-to-br from-green-700 to-green-800 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-green-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-400/20 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1 relative h-[500px] rounded-3xl overflow-hidden shadow-2xl border-8 border-white/50">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1572299270184-122dc6882147?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBzdXN0YWluYWJpbGl0eXxlbnwxfHx8fDE3NjEzOTI5NDZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Corporate Sustainability"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="order-1 md:order-2">
              <div className="inline-block px-6 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6">
                <span className="text-white font-bold">Untuk Perusahaan</span>
              </div>
              <div className="flex items-center mb-8">
                <div className="bg-white/20 backdrop-blur-sm p-4 rounded-2xl mr-6 shadow-xl">
                  <Building className="h-10 w-10 text-white" />
                </div>
                <h2 className="text-white font-black">Solusi CSR</h2>
              </div>
              <p className="text-green-100 mb-8 text-lg font-medium leading-relaxed">
                Wujudkan program CSR yang transparan, terukur, dan berdampak nyata. UrTree adalah mitra CSR ideal untuk perusahaan Anda.
              </p>
              <div className="space-y-6 mb-8">
                <Card className="p-6 bg-white/95 backdrop-blur-sm border-2 border-white/50">
                  <h4 className="text-green-900 mb-3 font-bold text-lg">Transparansi & Pelaporan ESG</h4>
                  <p className="text-gray-700 font-medium">Dokumentasi dampak lingkungan yang kredibel dan pelaporan ESG terverifikasi</p>
                </Card>
                <Card className="p-6 bg-white/95 backdrop-blur-sm border-2 border-white/50">
                  <h4 className="text-green-900 mb-3 font-bold text-lg">Manajemen Penanaman</h4>
                  <p className="text-gray-700 font-medium">Layanan lengkap dari perencanaan hingga eksekusi program penghijauan</p>
                </Card>
                <Card className="p-6 bg-white/95 backdrop-blur-sm border-2 border-white/50">
                  <h4 className="text-green-900 mb-3 font-bold text-lg">Co-branding Campaign</h4>
                  <p className="text-gray-700 font-medium">Kampanye bersama untuk meningkatkan citra perusahaan Anda</p>
                </Card>
              </div>
              <div className="bg-white/20 backdrop-blur-sm p-6 rounded-2xl border-2 border-white/30">
                <p className="text-white font-bold text-lg">
                  💰 Biaya: 15% dari total anggaran CSR atau paket kemitraan tahunan yang dapat disesuaikan
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MyDonation */}
      <section id="mydonation" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block px-6 py-2 bg-green-100 rounded-full mb-6">
                <span className="text-green-800 font-bold">Donasi Penghijauan</span>
              </div>
              <div className="flex items-center mb-8">
                <div className="bg-gradient-to-br from-green-600 to-green-700 p-4 rounded-2xl mr-6 shadow-xl">
                  <HandHeart className="h-10 w-10 text-white" />
                </div>
                <h2 className="text-green-900 font-black">MyDonation</h2>
              </div>
              <p className="text-gray-800 mb-8 text-lg font-medium leading-relaxed">
                MyDonation adalah program donasi murni (bisa satu kali atau rutin) untuk mendukung program penghijauan dan aforestasi. Sebagai bentuk apresiasi, Anda akan menerima badge digital eksklusif di profil Anda.
              </p>
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-3xl p-8 mb-8 border-2 border-green-200">
                <h4 className="text-green-900 mb-6 font-black text-xl">Program Donasi Aktif</h4>
                <div className="space-y-4">
                  <div className="flex items-center justify-between bg-white p-6 rounded-2xl shadow-md border-2 border-green-200">
                    <div>
                      <p className="text-green-900 font-bold text-lg">Restorasi Mangrove</p>
                      <p className="text-gray-600 font-medium">Pesisir Indonesia</p>
                    </div>
                    <span className="text-4xl">🌊</span>
                  </div>
                  <div className="flex items-center justify-between bg-white p-6 rounded-2xl shadow-md border-2 border-green-200">
                    <div>
                      <p className="text-green-900 font-bold text-lg">Penghijauan Hutan Kota</p>
                      <p className="text-gray-600 font-medium">Area Urban</p>
                    </div>
                    <span className="text-4xl">🌳</span>
                  </div>
                  <div className="flex items-center justify-between bg-white p-6 rounded-2xl shadow-md border-2 border-green-200">
                    <div>
                      <p className="text-green-900 font-bold text-lg">Reboisasi Lahan Kritis</p>
                      <p className="text-gray-600 font-medium">Berbagai Daerah</p>
                    </div>
                    <span className="text-4xl">🌱</span>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-r from-green-700 to-green-800 text-white p-8 rounded-3xl shadow-2xl">
                <h4 className="mb-4 font-black text-xl">🏆 Reward Eksklusif</h4>
                <p className="text-green-100 font-medium text-lg">Dapatkan badge digital eksklusif di profil Anda sebagai penghargaan atas kontribusi Anda untuk lingkungan.</p>
              </div>
            </div>
            <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl border-8 border-green-600">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1705674806829-1ca2b54f81a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmVlJTIwcGxhbnRpbmclMjBmYXJtZXJ8ZW58MXx8fHwxNzYxNDEyNTk5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Tree Planting"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Fitur Pendukung */}
      <section id="fitur-pendukung" className="py-24 bg-gradient-to-br from-green-600 via-green-700 to-green-800 relative overflow-hidden">
        <div className="absolute top-20 left-0 w-96 h-96 bg-green-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-0 w-96 h-96 bg-green-400/20 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-block px-6 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6">
              <span className="text-white font-bold text-lg">Fitur Tambahan</span>
            </div>
            <h2 className="text-white mb-6">Fitur Pendukung</h2>
            <p className="text-green-100 text-xl max-w-2xl mx-auto font-medium leading-relaxed">
              Fitur tambahan yang mendukung transparansi dan kemudahan penggunaan platform UrTree
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            <Card className="p-10 hover:shadow-2xl transition-all bg-white/95 backdrop-blur-sm border-4 border-white/50 hover:scale-105 transform duration-300">
              <div className="bg-gradient-to-br from-green-600 to-green-700 w-20 h-20 rounded-2xl flex items-center justify-center mb-8 shadow-xl">
                <LineChart className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-green-900 mb-6 font-black">Pelacakan (Tracking)</h3>
              <p className="text-gray-700 font-medium text-lg leading-relaxed">
                Semua investasi dan donasi Anda dipantau dengan laporan harian dari petani dan verifikasi bulanan dari tim kami. Menjamin akuntabilitas melalui pelaporan real-time.
              </p>
            </Card>

            <Card className="p-10 hover:shadow-2xl transition-all bg-white/95 backdrop-blur-sm border-4 border-white/50 hover:scale-105 transform duration-300">
              <div className="bg-gradient-to-br from-green-700 to-green-800 w-20 h-20 rounded-2xl flex items-center justify-center mb-8 shadow-xl">
                <MessageCircle className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-green-900 mb-6 font-black">Konsultasi</h3>
              <p className="text-gray-700 font-medium text-lg leading-relaxed">
                Dapatkan layanan konsultasi dengan pakar kehutanan dan agribisnis kami untuk menjelaskan jenis pohon, potensi panen, serta risiko investasi.
              </p>
            </Card>

            <Card className="p-10 hover:shadow-2xl transition-all bg-white/95 backdrop-blur-sm border-4 border-white/50 hover:scale-105 transform duration-300">
              <div className="bg-gradient-to-br from-green-600 to-green-700 w-20 h-20 rounded-2xl flex items-center justify-center mb-8 shadow-xl">
                <Newspaper className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-green-900 mb-6 font-black">Berita & Artikel</h3>
              <p className="text-gray-700 font-medium text-lg leading-relaxed">
                Konten edukatif terkini tentang lingkungan dan investasi hijau untuk menambah wawasan Anda.
              </p>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}
