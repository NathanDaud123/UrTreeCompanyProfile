import { Card } from "./ui/card";
import { TreePine, Building, HandHeart, LineChart, MessageCircle, Newspaper, CheckCircle2 } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { motion } from "motion/react";

export function Services() {
  return (
    <>
      {/* MyTree */}
      <section id="mytree" className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-block px-5 py-2 bg-green-100 rounded-full mb-4">
                <span className="text-green-700 font-bold">Investasi Pohon</span>
              </div>
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-br from-green-500 to-green-600 p-3 rounded-xl mr-4 shadow-lg">
                  <TreePine className="h-8 w-8 text-white" />
                </div>
                <h2 className="text-gray-900">
                  <span className="text-green-600">MyTree</span>
                </h2>
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                MyTree adalah program investasi di mana Anda mendanai pohon (seperti pohon buah atau kayu) yang dikelola petani lokal, dengan <span className="font-bold text-gray-900">potensi untuk mendapatkan bagi hasil</span> dari panennya di masa depan.
              </p>
              <div className="space-y-4">
                {[
                  { title: "Potensi Bagi Hasil", desc: "Dapatkan keuntungan dari hasil panen pohon yang Anda investasikan" },
                  { title: "Dampak Lingkungan", desc: "Berkontribusi langsung pada reboisasi dan pelestarian lingkungan" },
                  { title: "Membantu Petani Lokal", desc: "Memberdayakan ekonomi petani lokal Indonesia" }
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start bg-white p-5 rounded-xl border-2 border-gray-100 hover:border-green-500 hover:shadow-lg transition-all"
                  >
                    <div className="bg-green-600 rounded-lg p-2 mr-4 flex-shrink-0">
                      <CheckCircle2 className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="text-gray-900 mb-1 font-bold">{item.title}</h4>
                      <p className="text-gray-600 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative h-[500px] rounded-2xl overflow-hidden shadow-xl border-4 border-gray-100"
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1633201876516-c76019627752?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmVlbiUyMGludmVzdG1lbnQlMjBncm93dGh8ZW58MXx8fHwxNzYxNDEyNjAxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Investment Growth"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CSR */}
      <section id="csr" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="order-2 md:order-1 relative h-[500px] rounded-2xl overflow-hidden shadow-xl border-4 border-gray-100"
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1572299270184-122dc6882147?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBzdXN0YWluYWJpbGl0eXxlbnwxfHx8fDE3NjEzOTI5NDZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Corporate Sustainability"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="order-1 md:order-2"
            >
              <div className="inline-block px-5 py-2 bg-green-100 rounded-full mb-4">
                <span className="text-green-700 font-bold">Untuk Perusahaan</span>
              </div>
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-br from-green-600 to-green-700 p-3 rounded-xl mr-4 shadow-lg">
                  <Building className="h-8 w-8 text-white" />
                </div>
                <h2 className="text-gray-900">
                  <span className="text-green-600">Solusi CSR</span>
                </h2>
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Wujudkan program CSR yang <span className="font-bold text-gray-900">transparan, terukur, dan berdampak nyata</span>. UrTree adalah mitra CSR ideal untuk perusahaan Anda.
              </p>
              <div className="space-y-4 mb-6">
                {[
                  { title: "Transparansi & Pelaporan ESG", desc: "Dokumentasi dampak lingkungan yang kredibel dan pelaporan ESG terverifikasi" },
                  { title: "Manajemen Penanaman", desc: "Layanan lengkap dari perencanaan hingga eksekusi program penghijauan" },
                  { title: "Co-branding Campaign", desc: "Kampanye bersama untuk meningkatkan citra perusahaan Anda" }
                ].map((item, index) => (
                  <Card key={index} className="p-5 bg-white border-2 border-gray-100 hover:border-green-500 hover:shadow-lg transition-all">
                    <h4 className="text-gray-900 mb-2 font-bold">{item.title}</h4>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </Card>
                ))}
              </div>
              <div className="bg-green-50 p-5 rounded-xl border-2 border-green-200">
                <p className="text-gray-800 font-bold">
                  💰 Biaya: <span className="text-green-600">15%</span> dari total anggaran CSR atau paket kemitraan tahunan yang dapat disesuaikan
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* MyDonation */}
      <section id="mydonation" className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-block px-5 py-2 bg-green-100 rounded-full mb-4">
                <span className="text-green-700 font-bold">Donasi Penghijauan</span>
              </div>
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-br from-green-500 to-green-600 p-3 rounded-xl mr-4 shadow-lg">
                  <HandHeart className="h-8 w-8 text-white" />
                </div>
                <h2 className="text-gray-900">
                  <span className="text-green-600">MyDonation</span>
                </h2>
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                MyDonation adalah program donasi murni (bisa satu kali atau rutin) untuk mendukung program penghijauan dan aforestasi. Sebagai bentuk apresiasi, Anda akan menerima <span className="font-bold text-gray-900">badge digital eksklusif</span> di profil Anda.
              </p>
              <Card className="p-6 bg-white border-2 border-gray-100 mb-6">
                <h4 className="text-gray-900 mb-4 font-bold">
                  Program Donasi <span className="text-green-600">Aktif</span>
                </h4>
                <div className="space-y-3">
                  {[
                    { emoji: "🌊", title: "Restorasi Mangrove", loc: "Pesisir Indonesia" },
                    { emoji: "🌳", title: "Penghijauan Hutan Kota", loc: "Area Urban" },
                    { emoji: "🌱", title: "Reboisasi Lahan Kritis", loc: "Berbagai Daerah" }
                  ].map((program, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between bg-green-50 p-4 rounded-xl border-2 border-green-100 hover:border-green-500 transition-all"
                    >
                      <div>
                        <p className="text-gray-900 font-bold">{program.title}</p>
                        <p className="text-gray-600 text-sm">{program.loc}</p>
                      </div>
                      <span className="text-3xl">{program.emoji}</span>
                    </div>
                  ))}
                </div>
              </Card>
              <Card className="bg-gradient-to-br from-green-600 to-green-700 text-white p-6 border-0">
                <h4 className="mb-2 font-bold">🏆 Reward Eksklusif</h4>
                <p className="text-green-100 text-sm">Dapatkan badge digital eksklusif di profil Anda sebagai penghargaan atas kontribusi Anda untuk lingkungan.</p>
              </Card>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative h-[500px] rounded-2xl overflow-hidden shadow-xl border-4 border-gray-100"
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1705674806829-1ca2b54f81a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmVlJTIwcGxhbnRpbmclMjBmYXJtZXJ8ZW58MXx8fHwxNzYxNDEyNTk5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Tree Planting"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Fitur Pendukung */}
      <section id="fitur-pendukung" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <div className="inline-block px-5 py-2 bg-green-100 rounded-full mb-4">
              <span className="text-green-700 font-bold">Fitur Tambahan</span>
            </div>
            <h2 className="text-gray-900 mb-4">
              <span className="text-green-600">Fitur Pendukung</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Fitur tambahan yang mendukung transparansi dan kemudahan penggunaan platform UrTree
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: LineChart, title: "Pelacakan (Tracking)", desc: "Semua investasi dan donasi Anda dipantau dengan laporan harian dari petani dan verifikasi bulanan dari tim kami. Menjamin akuntabilitas melalui pelaporan real-time." },
              { icon: MessageCircle, title: "Konsultasi", desc: "Dapatkan layanan konsultasi dengan pakar kehutanan dan agribisnis kami untuk menjelaskan jenis pohon, potensi panen, serta risiko investasi." },
              { icon: Newspaper, title: "Berita & Artikel", desc: "Konten edukatif terkini tentang lingkungan dan investasi hijau untuk menambah wawasan Anda." }
            ].map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Card className="p-8 hover:shadow-xl transition-all bg-white border-2 border-gray-100 hover:border-green-500 h-full">
                    <div className="bg-gradient-to-br from-green-500 to-green-600 w-14 h-14 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                      <Icon className="h-7 w-7 text-white" />
                    </div>
                    <h3 className="text-gray-900 mb-4">
                      <span className="text-green-600">{feature.title}</span>
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-sm">
                      {feature.desc}
                    </p>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
