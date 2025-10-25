import { Card } from "./ui/card";
import { User, Building2, Sprout, ArrowRight } from "lucide-react";

export function AudienceGateway() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-24 bg-gradient-to-br from-green-600 via-green-700 to-green-800 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-green-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-400/20 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-6 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6">
            <span className="text-white font-bold text-lg">Solusi untuk Semua</span>
          </div>
          <h2 className="text-white mb-6">Untuk Siapa UrTree?</h2>
          <p className="text-green-100 text-xl max-w-2xl mx-auto font-medium">
            Temukan solusi yang tepat untuk kebutuhan Anda dalam mendukung reboisasi Indonesia
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Untuk Individu */}
          <Card className="p-10 hover:shadow-2xl transition-all border-4 border-transparent hover:border-white cursor-pointer group bg-white hover:scale-105 transform duration-300">
            <div className="bg-gradient-to-br from-green-500 to-green-600 w-20 h-20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-xl">
              <User className="h-10 w-10 text-white" />
            </div>
            <h3 className="text-green-900 mb-4 font-black">Untuk Individu</h3>
            <p className="text-gray-700 mb-6 font-medium leading-relaxed">
              Ingin berinvestasi sekaligus menghijaukan bumi? Mulai dari satu pohon dan raih keuntungan sambil melestarikan alam.
            </p>
            <button
              onClick={() => scrollToSection("mytree")}
              className="text-green-700 flex items-center group-hover:text-green-900 font-bold text-lg"
            >
              Mulai Sekarang
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform" />
            </button>
          </Card>

          {/* Untuk Perusahaan */}
          <Card className="p-10 hover:shadow-2xl transition-all border-4 border-transparent hover:border-white cursor-pointer group bg-white hover:scale-105 transform duration-300">
            <div className="bg-gradient-to-br from-green-600 to-green-700 w-20 h-20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-xl">
              <Building2 className="h-10 w-10 text-white" />
            </div>
            <h3 className="text-green-900 mb-4 font-black">Untuk Perusahaan</h3>
            <p className="text-gray-700 mb-6 font-medium leading-relaxed">
              Wujudkan program CSR yang transparan, terukur, dan berdampak dengan pelaporan ESG yang kredibel.
            </p>
            <button
              onClick={() => scrollToSection("csr")}
              className="text-green-700 flex items-center group-hover:text-green-900 font-bold text-lg"
            >
              Hubungi Kami
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform" />
            </button>
          </Card>

          {/* Untuk Petani */}
          <Card className="p-10 hover:shadow-2xl transition-all border-4 border-transparent hover:border-white cursor-pointer group bg-white hover:scale-105 transform duration-300">
            <div className="bg-gradient-to-br from-green-700 to-green-800 w-20 h-20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-xl">
              <Sprout className="h-10 w-10 text-white" />
            </div>
            <h3 className="text-green-900 mb-4 font-black">Untuk Petani</h3>
            <p className="text-gray-700 mb-6 font-medium leading-relaxed">
              Dapatkan pendanaan dan dukungan untuk lahan Anda. Jadilah mitra kami dalam misi penghijauan.
            </p>
            <button
              onClick={() => scrollToSection("mitra-petani")}
              className="text-green-700 flex items-center group-hover:text-green-900 font-bold text-lg"
            >
              Bergabung
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform" />
            </button>
          </Card>
        </div>
      </div>
    </section>
  );
}
