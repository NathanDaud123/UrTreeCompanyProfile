import { Card } from "./ui/card";
import { User, Building2, Sprout, ArrowRight } from "lucide-react";
import { motion } from "motion/react";

export function AudienceGateway() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-20 bg-white overflow-hidden max-w-full" data-section="untuk-siapa-urtree">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-8 py-3 bg-green-100 rounded-full mb-4">
            <span className="text-green-700 font-bold">Solusi untuk Semua</span>
          </div>
          <h2 className="text-gray-900 mb-4">
            Untuk Siapa <span className="text-green-600">UrTree</span>?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Temukan solusi yang tepat untuk kebutuhan Anda dalam mendukung reboisasi Indonesia
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Untuk Individu */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <Card className="p-8 hover:shadow-2xl transition-all border-2 border-gray-100 hover:border-green-500 cursor-pointer group h-full">
              <div className="bg-gradient-to-br from-green-500 to-green-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                <User className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-gray-900 mb-3 text-xl font-bold">
                Untuk <span className="text-green-600">Individu</span>
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Ingin berinvestasi sekaligus menghijaukan bumi? Mulai dari satu pohon dan raih keuntungan sambil melestarikan alam.
              </p>
              <button
                onClick={() => scrollToSection("mytree")}
                className="text-green-600 flex items-center group-hover:text-green-700 font-bold"
              >
                Mulai Sekarang
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </Card>
          </motion.div>

          {/* Untuk Perusahaan */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <Card className="p-8 hover:shadow-2xl transition-all border-2 border-gray-100 hover:border-green-500 cursor-pointer group h-full">
              <div className="bg-gradient-to-br from-green-600 to-green-700 w-16 h-16 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                <Building2 className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-gray-900 mb-3 text-xl font-bold">
                Untuk <span className="text-green-600">Perusahaan</span>
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Wujudkan program CSR yang transparan, terukur, dan berdampak dengan pelaporan ESG yang kredibel.
              </p>
              <button
                onClick={() => scrollToSection("csr")}
                className="text-green-600 flex items-center group-hover:text-green-700 font-bold"
              >
                Hubungi Kami
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </Card>
          </motion.div>

          {/* Untuk Petani */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <Card className="p-8 hover:shadow-2xl transition-all border-2 border-gray-100 hover:border-green-500 cursor-pointer group h-full">
              <div className="bg-gradient-to-br from-green-700 to-green-800 w-16 h-16 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                <Sprout className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-gray-900 mb-3 text-xl font-bold">
                Untuk <span className="text-green-600">Petani</span>
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Dapatkan pendanaan dan dukungan untuk lahan Anda. Jadilah mitra kami dalam misi penghijauan.
              </p>
              <button
                onClick={() => scrollToSection("mitra-petani")}
                className="text-green-600 flex items-center group-hover:text-green-700 font-bold"
              >
                Bergabung
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
