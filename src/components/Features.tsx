import { Card } from "./ui/card";
import { TreePine, HandHeart, Building, Download, Smartphone } from "lucide-react";

export function Features() {
  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-block px-6 py-2 bg-green-100 rounded-full mb-6">
            <span className="text-green-800 font-bold text-lg">Fitur Unggulan</span>
          </div>
          <h2 className="text-green-900 mb-6">3 Layanan Utama Kami</h2>
          <p className="text-gray-700 text-xl max-w-2xl mx-auto font-medium">
            Platform lengkap untuk investasi hijau dan pelestarian lingkungan
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10 mb-24">
          {/* MyTree */}
          <Card className="p-10 text-center hover:shadow-2xl transition-all bg-gradient-to-br from-green-50 to-green-100 border-2 border-green-200 hover:border-green-500 hover:scale-105 transform duration-300">
            <div className="bg-gradient-to-br from-green-600 to-green-700 w-24 h-24 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-xl">
              <TreePine className="h-12 w-12 text-white" />
            </div>
            <h3 className="text-green-900 mb-4 font-black">MyTree</h3>
            <p className="text-gray-700 font-medium text-lg leading-relaxed">
              Investasi pohon personal Anda dengan potensi bagi hasil yang menguntungkan dan dampak lingkungan nyata.
            </p>
          </Card>

          {/* CSR */}
          <Card className="p-10 text-center hover:shadow-2xl transition-all bg-gradient-to-br from-green-100 to-green-200 border-2 border-green-300 hover:border-green-600 hover:scale-105 transform duration-300">
            <div className="bg-gradient-to-br from-green-700 to-green-800 w-24 h-24 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-xl">
              <Building className="h-12 w-12 text-white" />
            </div>
            <h3 className="text-green-900 mb-4 font-black">Solusi CSR</h3>
            <p className="text-gray-700 font-medium text-lg leading-relaxed">
              Program keberlanjutan untuk korporasi dengan pelaporan ESG yang kredibel dan terverifikasi.
            </p>
          </Card>

          {/* MyDonation */}
          <Card className="p-10 text-center hover:shadow-2xl transition-all bg-gradient-to-br from-green-50 to-green-100 border-2 border-green-200 hover:border-green-500 hover:scale-105 transform duration-300">
            <div className="bg-gradient-to-br from-green-600 to-green-700 w-24 h-24 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-xl">
              <HandHeart className="h-12 w-12 text-white" />
            </div>
            <h3 className="text-green-900 mb-4 font-black">MyDonation</h3>
            <p className="text-gray-700 font-medium text-lg leading-relaxed">
              Berdonasi untuk restorasi lingkungan dan dapatkan badge eksklusif sebagai apresiasi kontribusi Anda.
            </p>
          </Card>
        </div>

        {/* CTA */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-green-800 rounded-3xl transform rotate-1"></div>
          <div className="relative bg-gradient-to-r from-green-700 to-green-900 text-white py-20 px-8 md:px-16 rounded-3xl shadow-2xl">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full mb-8">
                <Smartphone className="w-10 h-10 text-white" />
              </div>
              <h2 className="mb-6 text-white">Siap Membuat Dampak?</h2>
              <p className="text-green-100 text-xl mb-10 max-w-2xl mx-auto font-medium leading-relaxed">
                Unduh aplikasinya sekarang dan mulai perjalanan Anda menuju masa depan yang lebih hijau dan berkelanjutan.
              </p>
              <div className="flex justify-center gap-6 flex-wrap">
                <button className="bg-white text-green-800 px-10 py-5 rounded-xl hover:bg-green-50 transition-all transform hover:scale-105 shadow-xl font-bold text-lg flex items-center">
                  <Download className="mr-3 h-6 w-6" />
                  Download di App Store
                </button>
                <button className="bg-green-800 border-2 border-white text-white px-10 py-5 rounded-xl hover:bg-green-900 transition-all transform hover:scale-105 shadow-xl font-bold text-lg flex items-center">
                  <Download className="mr-3 h-6 w-6" />
                  Download di Google Play
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
