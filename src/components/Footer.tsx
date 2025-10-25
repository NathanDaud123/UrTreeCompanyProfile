import { Instagram, Mail, MapPin, Smartphone } from "lucide-react";

export function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-gradient-to-br from-green-900 via-green-800 to-green-900 text-white py-16 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-green-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-400/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <div className="bg-white/10 backdrop-blur-sm px-6 py-4 rounded-2xl mb-6 inline-block border-2 border-white/20">
              <div className="flex items-center">
                <span className="text-4xl mr-3">🌳</span>
                <div>
                  <span className="text-white text-2xl font-black tracking-tight">UrTree</span>
                  <p className="text-green-200 text-xs font-semibold">Cipta Lestari</p>
                </div>
              </div>
            </div>
            <p className="text-green-100 mb-6 font-medium text-base leading-relaxed">
              Platform investasi pohon dan reboisasi berkelanjutan untuk masa depan yang lebih hijau.
            </p>
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 mt-1 flex-shrink-0 text-green-300" />
                <p className="text-green-100 font-medium">
                  Jl. Borobudur Agung Timur IV, Mojolangu, Lowokwaru, Malang, Jawa Timur 65142
                </p>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-green-300" />
                <p className="text-green-100 font-medium">cs.urtree@gmail.com</p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-6 text-white font-black text-xl">Tautan Cepat</h4>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection("tentang")}
                  className="text-green-100 hover:text-white transition-colors font-semibold text-base"
                >
                  → Tentang Kami
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("csr")}
                  className="text-green-100 hover:text-white transition-colors font-semibold text-base"
                >
                  → Layanan CSR
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("mitra-petani")}
                  className="text-green-100 hover:text-white transition-colors font-semibold text-base"
                >
                  → Mitra Petani
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("faq")}
                  className="text-green-100 hover:text-white transition-colors font-semibold text-base"
                >
                  → FAQ
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-6 text-white font-black text-xl">Layanan Kami</h4>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection("mytree")}
                  className="text-green-100 hover:text-white transition-colors font-semibold text-base"
                >
                  🌳 MyTree - Investasi Pohon
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("csr")}
                  className="text-green-100 hover:text-white transition-colors font-semibold text-base"
                >
                  🏢 Solusi CSR
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("mydonation")}
                  className="text-green-100 hover:text-white transition-colors font-semibold text-base"
                >
                  💚 MyDonation
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("fitur-pendukung")}
                  className="text-green-100 hover:text-white transition-colors font-semibold text-base"
                >
                  📊 Fitur Pendukung
                </button>
              </li>
            </ul>
          </div>

          {/* Download & Social */}
          <div>
            <h4 className="mb-6 text-white font-black text-xl">Download Aplikasi</h4>
            <div className="space-y-4 mb-8">
              <button className="w-full bg-white text-green-800 py-4 px-6 rounded-xl hover:bg-green-50 transition-all transform hover:scale-105 font-bold text-base shadow-xl flex items-center justify-center">
                <Smartphone className="mr-3 h-5 w-5" />
                App Store
              </button>
              <button className="w-full bg-green-700 border-2 border-white text-white py-4 px-6 rounded-xl hover:bg-green-600 transition-all transform hover:scale-105 font-bold text-base shadow-xl flex items-center justify-center">
                <Smartphone className="mr-3 h-5 w-5" />
                Google Play
              </button>
            </div>
            <h4 className="mb-4 text-white font-black text-lg">Media Sosial</h4>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com/pt.urtree"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/20 backdrop-blur-sm p-4 rounded-xl hover:bg-white/30 transition-all transform hover:scale-110 border-2 border-white/30"
              >
                <Instagram className="h-6 w-6 text-white" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t-2 border-green-700 pt-8 text-center">
          <p className="text-green-100 font-semibold text-base mb-3">
            © 2025 PT UrTree Cipta Lestari. All rights reserved.
          </p>
          <div className="flex justify-center space-x-6 text-base">
            <button className="text-green-100 hover:text-white transition-colors font-semibold">
              Kebijakan Privasi
            </button>
            <span className="text-green-600">•</span>
            <button className="text-green-100 hover:text-white transition-colors font-semibold">
              Syarat & Ketentuan
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
