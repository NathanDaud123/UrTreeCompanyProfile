import { Card } from "./ui/card";
import { CheckCircle, Download, UserCheck, FileText, MapPin, ClipboardCheck, FileSignature, Play } from "lucide-react";
import { Button } from "./ui/button";

export function FarmerPartnership() {
  const benefits = [
    "Pendanaan terjamin dari investor",
    "Pelatihan penggunaan aplikasi",
    "Sistem bagi hasil yang adil",
    "Dukungan agribisnis berkelanjutan",
  ];

  const requirements = [
    "Memiliki atau mengelola lahan yang potensial",
    "Komitmen untuk merawat pohon dengan baik",
    "Bersedia melakukan pelaporan harian",
    "Terbuka untuk petani perorangan, KTH, atau Koperasi",
  ];

  const steps = [
    { icon: Download, title: "Download Apps", description: "Unduh aplikasi UrTree" },
    { icon: UserCheck, title: "Pilih Mode Petani", description: "Daftar sebagai petani" },
    { icon: FileText, title: "Daftarkan Lahan", description: "Input data lahan" },
    { icon: ClipboardCheck, title: "Isi Informasi", description: "Lengkapi detail" },
    { icon: MapPin, title: "Verifikasi", description: "Survei oleh tim" },
    { icon: FileSignature, title: "PKS", description: "Tandatangan kontrak" },
    { icon: Play, title: "Mulai", description: "Mulai proyek" },
  ];

  return (
    <section id="mitra-petani" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-block px-6 py-2 bg-green-100 rounded-full mb-6">
            <span className="text-green-800 font-bold text-lg">Mitra Petani</span>
          </div>
          <h2 className="text-green-900 mb-6 font-black">Ayo Berkembang Bersama UrTree!</h2>
          <p className="text-gray-800 text-xl max-w-3xl mx-auto font-medium leading-relaxed">
            Dapatkan pendanaan, dukungan agribisnis, dan tingkatkan kesejahteraan Anda dengan menjadi mitra penghijauan kami.
          </p>
        </div>

        {/* Benefits & Requirements */}
        <div className="grid md:grid-cols-2 gap-10 mb-20">
          {/* Keuntungan */}
          <Card className="p-10 bg-gradient-to-br from-green-50 to-green-100 border-4 border-green-300 shadow-xl">
            <h3 className="text-green-900 mb-8 font-black">Keuntungan Menjadi Mitra</h3>
            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <div className="bg-green-600 rounded-xl p-2 mr-4 flex-shrink-0">
                    <CheckCircle className="h-6 w-6 text-white" />
                  </div>
                  <p className="text-gray-800 font-medium text-lg pt-1">{benefit}</p>
                </div>
              ))}
            </div>
          </Card>

          {/* Syarat */}
          <Card className="p-10 bg-gradient-to-br from-green-50 to-green-100 border-4 border-green-300 shadow-xl">
            <h3 className="text-green-900 mb-8 font-black">Syarat Menjadi Mitra</h3>
            <div className="space-y-6">
              {requirements.map((requirement, index) => (
                <div key={index} className="flex items-start">
                  <div className="bg-green-600 rounded-xl p-2 mr-4 flex-shrink-0">
                    <CheckCircle className="h-6 w-6 text-white" />
                  </div>
                  <p className="text-gray-800 font-medium text-lg pt-1">{requirement}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Pendaftaran Process */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-green-700 to-green-900 rounded-3xl transform rotate-1"></div>
          <div className="relative bg-gradient-to-r from-green-700 to-green-900 rounded-3xl p-12 md:p-16 text-white shadow-2xl">
            <div className="text-center mb-16">
              <h3 className="mb-6 text-white font-black">Daftarkan Lahanmu</h3>
              <p className="text-green-100 text-xl font-medium">7 langkah mudah untuk bergabung menjadi mitra petani UrTree</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-7 gap-6 mb-12">
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 mb-4 hover:bg-white/30 transition-all hover:scale-105 transform duration-300">
                      <div className="bg-white w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-xl">
                        <Icon className="h-8 w-8 text-green-700" />
                      </div>
                      <div className="text-green-200 mb-3 font-black text-xl">{index + 1}</div>
                      <h4 className="text-white font-bold text-base mb-2">{step.title}</h4>
                      <p className="text-green-100 text-sm font-medium">{step.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="text-center">
              <Button className="bg-white text-green-800 hover:bg-green-50 px-12 py-7 text-xl font-black rounded-2xl shadow-2xl transform hover:scale-105 transition-all">
                Daftar Sebagai Mitra Petani
              </Button>
            </div>
          </div>
        </div>

        {/* Note */}
        <div className="mt-12 text-center bg-green-50 p-8 rounded-3xl border-2 border-green-200">
          <p className="text-gray-800 text-lg font-medium">
            <strong className="text-green-900 font-black">💡 Catatan Penting:</strong> Anda tidak dipungut biaya apapun untuk mendaftar. Posisi Anda adalah sebagai mitra penyedia lahan dan jasa perawatan.
          </p>
        </div>
      </div>
    </section>
  );
}
