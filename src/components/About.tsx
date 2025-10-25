import { Card } from "./ui/card";
import { Target, Rocket, MapPin, FileText, Award } from "lucide-react";

export function About() {
  const directors = [
    { name: "Yuven Reksa Pratama", position: "Chief Executive Officer", initial: "YR" },
    { name: "Berlian Davis Dwi Mubarok", position: "Chief Marketing Officer", initial: "BD" },
    { name: "Johan Arizona", position: "Chief Technology Officer", initial: "JA" },
    { name: "Alexander Imanuel Widjanarko", position: "Chief Financial Officer", initial: "AW" },
    { name: "Isri Amirul Haq", position: "Chief Operating Officer", initial: "IH" },
    { name: "Fanisya Luthfiatma", position: "Chief Sustainability Officer", initial: "FL" },
  ];

  return (
    <section id="tentang" className="py-24 bg-gradient-to-br from-green-800 via-green-700 to-green-600 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-green-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-green-400/20 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block px-6 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6">
            <span className="text-white font-bold text-lg">Tentang Kami</span>
          </div>
          <h2 className="text-white mb-6">PT UrTree Cipta Lestari</h2>
          <p className="text-green-100 text-xl max-w-3xl mx-auto font-medium leading-relaxed">
            Platform Digital Inovatif untuk Reboisasi Berkelanjutan di Indonesia
          </p>
        </div>

        {/* Visi & Misi */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <Card className="p-10 bg-white/95 backdrop-blur-sm border-4 border-white/50 shadow-2xl hover:shadow-green-900/50 transition-all hover:scale-105 transform duration-300">
            <div className="flex items-center mb-6">
              <div className="bg-gradient-to-br from-green-600 to-green-700 p-4 rounded-xl mr-6 shadow-xl">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-green-900 font-black">Visi Kami</h3>
            </div>
            <p className="text-gray-800 font-medium text-lg leading-relaxed">
              Menjadi kekuatan pendorong utama reboisasi berkelanjutan di Indonesia, mewujudkan masa depan yang hijau, lestari, dan sejahtera untuk generasi mendatang.
            </p>
          </Card>

          <Card className="p-10 bg-white/95 backdrop-blur-sm border-4 border-white/50 shadow-2xl hover:shadow-green-900/50 transition-all hover:scale-105 transform duration-300">
            <div className="flex items-center mb-6">
              <div className="bg-gradient-to-br from-green-700 to-green-800 p-4 rounded-xl mr-6 shadow-xl">
                <Rocket className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-green-900 font-black">Misi Kami</h3>
            </div>
            <p className="text-gray-800 font-medium text-lg leading-relaxed">
              Mengatasi deforestasi dan memberdayakan masyarakat melalui platform teknologi yang berkontribusi nyata pada kesejahteraan ekonomi dan sosial.
            </p>
          </Card>
        </div>

        {/* Jajaran Direksi */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-white mb-4 font-black">Jajaran Direksi</h3>
            <p className="text-green-100 text-lg font-medium">Tim profesional yang berdedikasi untuk masa depan hijau Indonesia</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {directors.map((director, index) => (
              <Card key={index} className="p-8 text-center hover:shadow-2xl transition-all bg-white/95 backdrop-blur-sm border-2 border-white/50 hover:scale-105 transform duration-300">
                <div className="w-28 h-28 bg-gradient-to-br from-green-600 to-green-700 rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-xl">
                  <span className="text-white text-3xl font-black">{director.initial}</span>
                </div>
                <h4 className="text-gray-900 mb-3 font-bold text-lg">{director.name}</h4>
                <p className="text-green-700 font-semibold">{director.position}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Legalitas & Kantor */}
        <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-12 shadow-2xl border-4 border-white/50">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-600 rounded-2xl mb-6">
              <Award className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-green-900 mb-4 font-black">Legalitas & Kantor</h3>
            <p className="text-gray-700 font-medium text-lg">Terdaftar resmi dan beroperasi secara legal</p>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <FileText className="h-8 w-8 text-green-700" />
              </div>
              <p className="text-gray-900 mb-2 font-bold text-lg">PT UrTree Cipta Lestari</p>
              <p className="text-green-700 font-semibold">Badan Hukum Terdaftar</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <FileText className="h-8 w-8 text-green-700" />
              </div>
              <p className="text-gray-900 mb-2 font-bold text-lg">NIB Resmi</p>
              <p className="text-green-700 font-semibold">Nomor Induk Berusaha</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <MapPin className="h-8 w-8 text-green-700" />
              </div>
              <p className="text-gray-900 mb-2 font-bold text-lg">Kantor Pusat</p>
              <p className="text-green-700 font-semibold">
                Jl. Borobudur Agung Timur IV, Mojolangu, Lowokwaru, Malang, Jawa Timur
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
