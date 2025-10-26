import React from "react";
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
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center">
                  <div className="bg-gradient-to-br from-green-500 to-green-600 p-3 rounded-xl mr-4 shadow-lg">
                    <TreePine className="h-8 w-8 text-white" />
                  </div>
                  <h2 className="text-3xl font-black text-gray-900">
                    <span className="text-green-600">MyTree</span>
                  </h2>
                </div>
                <div className="inline-block px-8 py-3 bg-green-100 rounded-full">
                  <span className="text-green-700 font-bold text-sm">Investasi Pohon</span>
                </div>
              </div>
              <p className="text-gray-700 mb-8 leading-relaxed text-lg">
                MyTree adalah program investasi di mana Anda mendanai pohon (seperti pohon buah atau kayu) yang dikelola petani lokal, dengan <span className="font-bold text-gray-900">potensi untuk mendapatkan bagi hasil</span> dari panennya di masa depan.
              </p>
              <div className="space-y-3">
                {[
                  { title: "Potensi Bagi Hasil", desc: "Dapatkan keuntungan dari hasil panen pohon yang Anda investasikan", icon: "💰" },
                  { title: "Dampak Lingkungan", desc: "Berkontribusi langsung pada reboisasi dan pelestarian lingkungan", icon: "🌱" },
                  { title: "Membantu Petani Lokal", desc: "Memberdayakan ekonomi petani lokal Indonesia", icon: "🤝" }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.02, x: 5 }}
                    className="group relative overflow-hidden bg-gradient-to-r from-white to-green-50 p-6 rounded-2xl border-2 border-green-200 hover:border-green-500 hover:shadow-xl transition-all duration-300"
                  >
                    <div className="flex items-start">
                      <div className="bg-gradient-to-br from-green-500 to-green-600 w-12 h-12 rounded-xl mr-4 flex items-center justify-center shadow-lg flex-shrink-0 group-hover:scale-110 transition-transform">
                        <span className="text-2xl">{item.icon}</span>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-gray-900 mb-2 font-black text-lg">{item.title}</h4>
                        <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-green-400 via-green-500 to-green-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                  </motion.div>
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
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center">
                  <div className="bg-gradient-to-br from-green-600 to-green-700 p-3 rounded-xl mr-4 shadow-lg">
                    <Building className="h-8 w-8 text-white" />
                  </div>
                  <h2 className="text-3xl font-black text-gray-900">
                    <span className="text-green-600">Solusi CSR</span>
                  </h2>
                </div>
                <div className="inline-block px-8 py-3 bg-green-100 rounded-full">
                  <span className="text-green-700 font-bold text-sm">Untuk Perusahaan</span>
                </div>
              </div>
              <p className="text-gray-700 mb-8 leading-relaxed text-lg">
                Wujudkan program CSR yang <span className="font-bold text-gray-900">transparan, terukur, dan berdampak nyata</span>. UrTree adalah mitra CSR ideal untuk perusahaan Anda.
              </p>
              <div className="space-y-3 mb-6">
                {[
                  { title: "Transparansi & Pelaporan ESG", desc: "Dokumentasi dampak lingkungan yang kredibel dan pelaporan ESG terverifikasi", icon: "📊" },
                  { title: "Manajemen Penanaman", desc: "Layanan lengkap dari perencanaan hingga eksekusi program penghijauan", icon: "🌲" },
                  { title: "Co-branding Campaign", desc: "Kampanye bersama untuk meningkatkan citra perusahaan Anda", icon: "🤝" }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.02, x: 5 }}
                    className="group relative overflow-hidden bg-gradient-to-r from-white to-green-50 p-6 rounded-2xl border-2 border-green-200 hover:border-green-500 hover:shadow-xl transition-all duration-300"
                  >
                    <div className="flex items-start">
                      <div className="bg-gradient-to-br from-green-600 to-green-700 w-12 h-12 rounded-xl mr-4 flex items-center justify-center shadow-lg flex-shrink-0 group-hover:scale-110 transition-transform">
                        <span className="text-2xl">{item.icon}</span>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-gray-900 mb-2 font-black text-lg">{item.title}</h4>
                        <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-green-400 via-green-500 to-green-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                  </motion.div>
                ))}
              </div>
              <div className="bg-gradient-to-r from-green-50 to-green-100 p-6 rounded-2xl border-2 border-green-300 shadow-lg">
                <p className="text-gray-900 font-black text-base">
                  💰 Biaya: <span className="text-green-600 text-xl">15%</span> dari total anggaran CSR atau paket kemitraan tahunan yang dapat disesuaikan
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
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center">
                  <div className="bg-gradient-to-br from-green-500 to-green-600 p-3 rounded-xl mr-4 shadow-lg">
                    <HandHeart className="h-8 w-8 text-white" />
                  </div>
                  <h2 className="text-3xl font-black text-gray-900">
                    <span className="text-green-600">MyDonation</span>
                  </h2>
                </div>
                <div className="inline-block px-8 py-3 bg-green-100 rounded-full">
                  <span className="text-green-700 font-bold text-sm">Donasi Penghijauan</span>
                </div>
              </div>
              <p className="text-gray-700 mb-8 leading-relaxed text-lg">
                MyDonation adalah program donasi murni (bisa satu kali atau rutin) untuk mendukung program penghijauan dan aforestasi. Sebagai bentuk apresiasi, Anda akan menerima <span className="font-bold text-gray-900">badge digital eksklusif</span> di profil Anda.
              </p>
              <div className="bg-gradient-to-br from-white to-green-50 p-8 rounded-2xl border-2 border-green-200 mb-6 shadow-lg">
                <h4 className="text-gray-900 mb-6 font-black text-xl">
                  Program Donasi <span className="text-green-600">Aktif</span>
                </h4>
                <div className="space-y-3">
                  {[
                    { emoji: "🌊", title: "Restorasi Mangrove", loc: "Pesisir Indonesia" },
                    { emoji: "🌳", title: "Penghijauan Hutan Kota", loc: "Area Urban" },
                    { emoji: "🌱", title: "Reboisasi Lahan Kritis", loc: "Berbagai Daerah" }
                  ].map((program, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.02, x: 5 }}
                      className="group flex items-center bg-white p-5 rounded-xl border-2 border-gray-100 hover:border-green-500 hover:shadow-lg transition-all duration-300"
                    >
                      <div className="flex items-center justify-center w-12 h-12 bg-green-50 rounded-xl mr-4 group-hover:bg-green-100 transition-colors">
                        <span className="text-2xl group-hover:scale-110 transition-transform">{program.emoji}</span>
                      </div>
                      <div className="flex-1">
                        <h5 className="text-gray-900 font-black text-base mb-1">{program.title}</h5>
                        <p className="text-gray-600 text-sm leading-tight">{program.loc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
              <div className="bg-gradient-to-br from-green-600 to-green-700 text-white p-6 rounded-2xl border-0 shadow-xl">
                <h4 className="mb-3 font-black text-lg flex items-center">
                  <span className="text-2xl mr-2">🏆</span>
                  Reward Eksklusif
                </h4>
                <p className="text-green-100 text-sm leading-relaxed">Dapatkan badge digital eksklusif di profil Anda sebagai penghargaan atas kontribusi Anda untuk lingkungan.</p>
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
            <div className="inline-block px-8 py-3 bg-green-100 rounded-full mb-4">
              <span className="text-green-700 font-bold text-sm">Fitur Tambahan</span>
            </div>
            <h2 className="text-gray-900 mb-4 text-4xl font-bold">
              <span className="text-green-600">Fitur Pendukung</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Fitur tambahan yang mendukung transparansi dan kemudahan penggunaan platform UrTree
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                icon: LineChart, 
                title: "Pelacakan (Tracking)", 
                desc: <>
                  <span className="font-bold">Semua investasi dan donasi</span> Anda dipantau dengan <span className="font-bold">laporan harian dari petani</span> dan <span className="font-bold">verifikasi bulanan</span> dari tim kami. Menjamin akuntabilitas melalui pelaporan <span className="font-bold">real-time</span>.
                </> 
              },
              { 
                icon: MessageCircle, 
                title: "Konsultasi", 
                desc: <>
                  Dapatkan layanan konsultasi dengan <span className="font-bold">pakar kehutanan dan agribisnis</span> kami untuk menjelaskan jenis pohon, <span className="font-bold">potensi panen</span>, serta <span className="font-bold">risiko investasi</span>.
                </> 
              },
              { 
                icon: Newspaper, 
                title: "Berita & Artikel", 
                desc: <>
                  <span className="font-bold">Konten edukatif terkini</span> tentang <span className="font-bold">lingkungan</span> dan <span className="font-bold">investasi hijau</span> untuk menambah wawasan Anda.
                </> 
              }
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
                    <div className="bg-gradient-to-br from-green-500 to-green-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-gray-900 mb-4 text-xl font-bold">
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
