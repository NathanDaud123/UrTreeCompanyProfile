import { Card } from "./ui/card";
import { TreePine, HandHeart, Building, Download, Smartphone, Sparkles } from "lucide-react";
import { motion } from "motion/react";

export function Features() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-5 py-2 bg-green-100 rounded-full mb-4">
            <Sparkles className="w-4 h-4 text-green-600 mr-2" />
            <span className="text-green-700 font-bold">Fitur Unggulan</span>
          </div>
          <h2 className="text-gray-900 mb-4">
            <span className="text-green-600">3 Layanan Utama</span> Kami
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Platform lengkap untuk investasi hijau dan pelestarian lingkungan
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {/* MyTree */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <Card className="p-8 text-center hover:shadow-2xl transition-all bg-white border-2 border-gray-100 hover:border-green-500 group h-full">
              <div className="bg-gradient-to-br from-green-500 to-green-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <TreePine className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-gray-900 mb-3">
                <span className="text-green-600">MyTree</span>
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Investasi pohon personal Anda dengan <span className="font-bold text-gray-900">potensi bagi hasil yang menguntungkan</span> dan dampak lingkungan nyata.
              </p>
            </Card>
          </motion.div>

          {/* CSR */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <Card className="p-8 text-center hover:shadow-2xl transition-all bg-white border-2 border-gray-100 hover:border-green-500 group h-full">
              <div className="bg-gradient-to-br from-green-600 to-green-700 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Building className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-gray-900 mb-3">
                <span className="text-green-600">Solusi CSR</span>
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Program keberlanjutan untuk korporasi dengan <span className="font-bold text-gray-900">pelaporan ESG yang kredibel</span> dan terverifikasi.
              </p>
            </Card>
          </motion.div>

          {/* MyDonation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <Card className="p-8 text-center hover:shadow-2xl transition-all bg-white border-2 border-gray-100 hover:border-green-500 group h-full">
              <div className="bg-gradient-to-br from-green-500 to-green-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <HandHeart className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-gray-900 mb-3">
                <span className="text-green-600">MyDonation</span>
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Berdonasi untuk restorasi lingkungan dan dapatkan <span className="font-bold text-gray-900">badge eksklusif</span> sebagai apresiasi kontribusi Anda.
              </p>
            </Card>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          <Card className="bg-gradient-to-br from-green-600 to-green-700 text-white p-12 md:p-16 shadow-2xl overflow-hidden border-0">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            
            <div className="max-w-4xl mx-auto text-center relative z-10">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl mb-6">
                <Smartphone className="w-8 h-8 text-white" />
              </div>
              <h2 className="mb-4 text-white">
                Siap Membuat <span className="text-green-200">Dampak</span>?
              </h2>
              <p className="text-green-100 mb-8 max-w-2xl mx-auto">
                Unduh aplikasinya sekarang dan mulai perjalanan Anda menuju masa depan yang lebih hijau dan berkelanjutan.
              </p>
              <div className="flex justify-center gap-4 flex-wrap">
                <button className="bg-white text-green-700 px-8 py-4 rounded-xl hover:bg-gray-50 transition-all shadow-xl font-bold flex items-center">
                  <Download className="mr-2 h-5 w-5" />
                  Download di App Store
                </button>
                <button className="bg-green-800 border-2 border-white text-white px-8 py-4 rounded-xl hover:bg-green-900 transition-all shadow-xl font-bold flex items-center">
                  <Download className="mr-2 h-5 w-5" />
                  Download di Google Play
                </button>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
