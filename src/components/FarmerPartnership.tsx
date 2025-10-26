import { Card } from "./ui/card";
import { CheckCircle, Download, UserCheck, FileText, MapPin, ClipboardCheck, FileSignature, Play } from "lucide-react";
import { Button } from "./ui/button";
import { motion } from "motion/react";

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
    <section id="mitra-petani" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-8 py-3 bg-green-100 rounded-full mb-4">
            <span className="text-green-700 font-bold text-sm">Mitra Petani</span>
          </div>
          <h2 className="text-gray-900 mb-4 text-4xl font-bold">
            Ayo Berkembang Bersama <span className="text-green-600">UrTree</span>!
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Dapatkan pendanaan, dukungan agribisnis, dan tingkatkan kesejahteraan Anda dengan menjadi mitra penghijauan kami
          </p>
        </motion.div>

        {/* Benefits & Requirements */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Keuntungan */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="p-8 bg-gradient-to-br from-white to-green-50 border-2 border-green-200 shadow-lg hover:shadow-xl transition-all h-full">
              <h3 className="text-gray-900 mb-6 font-black text-xl">
                <span className="text-green-600">Keuntungan</span> Menjadi Mitra
              </h3>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <div className="bg-gradient-to-br from-green-600 to-green-700 rounded-xl p-2.5 mr-4 flex-shrink-0 shadow-md">
                      <CheckCircle className="h-5 w-5 text-white" />
                    </div>
                    <p className="text-gray-700 pt-1 font-medium">{benefit}</p>
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>

          {/* Syarat */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="p-8 bg-gradient-to-br from-white to-green-50 border-2 border-green-200 shadow-lg hover:shadow-xl transition-all h-full">
              <h3 className="text-gray-900 mb-6 font-black text-xl">
                <span className="text-green-600">Syarat</span> Menjadi Mitra
              </h3>
              <div className="space-y-4">
                {requirements.map((requirement, index) => (
                  <div key={index} className="flex items-start">
                    <div className="bg-gradient-to-br from-green-600 to-green-700 rounded-xl p-2.5 mr-4 flex-shrink-0 shadow-md">
                      <CheckCircle className="h-5 w-5 text-white" />
                    </div>
                    <p className="text-gray-700 pt-1 font-medium">{requirement}</p>
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>
        </div>

        {/* Pendaftaran Process */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Card className="bg-gradient-to-br from-green-600 to-green-700 text-white p-10 md:p-12 shadow-2xl border-0 overflow-hidden relative">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>

            <div className="relative z-10">
              <div className="text-center mb-12">
                <h3 className="mb-4 text-4xl md:text-5xl font-black text-white">
                  Daftarkan <span className="text-green-200">Lahanmu</span>
                </h3>
                <p className="text-green-100 text-lg md:text-xl">7 langkah mudah untuk bergabung menjadi mitra petani UrTree</p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-7 gap-4 mb-10">
                {steps.map((step, index) => {
                  const Icon = step.icon;
                  return (
                    <div key={index} className="text-center">
                      <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 mb-3 hover:bg-white/20 transition-all hover:scale-105">
                        <div className="bg-white w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-3 shadow-lg">
                          <Icon className="h-6 w-6 text-green-600" />
                        </div>
                        <div className="text-green-200 mb-2 font-black text-lg">{index + 1}</div>
                        <h4 className="text-white font-bold text-sm mb-1">{step.title}</h4>
                        <p className="text-green-100 text-xs leading-tight">{step.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="text-center">
                <Button 
                  onClick={() => {
                    const element = document.getElementById('siap-membuat-dampak');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="bg-white text-green-700 hover:bg-gray-50 px-12 py-7 font-black text-lg rounded-xl shadow-xl hover:scale-105 transition-transform"
                >
                  Daftar Sebagai Mitra Petani
                </Button>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-8 text-center bg-green-50 p-6 rounded-2xl border-2 border-green-200"
        >
          <p className="text-gray-700">
            <strong className="text-green-700 font-bold">💡 Catatan Penting:</strong> Anda tidak dipungut biaya apapun untuk mendaftar. Posisi Anda adalah sebagai mitra penyedia lahan dan jasa perawatan.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
