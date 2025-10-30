import React from "react";
import { Instagram, Mail, MapPin, Smartphone } from "lucide-react";
import { motion } from "motion/react";
import logoImage from "../assets/359324a7664b58526f420bb21c5e4b37a62aee04.png";

export function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer style={{ backgroundColor: '#1f2937' }} className="text-white py-16 overflow-hidden max-w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Company Info */}
          <div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="mb-6"
            >
              <img src={logoImage} alt="UrTree Logo" className="h-12 filter brightness-0 invert" style={{ filter: 'brightness(0) invert(1)' }} />
            </motion.div>
            <p className="text-gray-300 mb-6 leading-relaxed text-sm">
              Platform investasi pohon dan reboisasi berkelanjutan untuk masa depan yang lebih hijau.
            </p>
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin className="h-4 w-4 mr-2 mt-1 flex-shrink-0 text-white" />
                <p className="text-gray-300 text-sm">
                  Jl. Borobudur Agung Timur IV, Mojolangu, Lowokwaru, Malang, Jawa Timur 65142
                </p>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2 text-white" />
                <p className="text-gray-300 text-sm">cs.urtree@gmail.com</p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-white font-bold">Tautan Cepat</h4>
            <ul className="space-y-2">
              {["tentang", "csr", "mitra-petani", "faq"].map((link, index) => (
                <motion.li key={index} whileHover={{ x: 5 }}>
                  <button
                    onClick={() => scrollToSection(link)}
                    className="text-gray-300 hover:text-white transition-colors font-medium text-sm"
                  >
                    → {link === "tentang" ? "Tentang Kami" : link === "csr" ? "Layanan CSR" : link === "mitra-petani" ? "Mitra Petani" : "FAQ"}
                  </button>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-4 text-white font-bold">Layanan Kami</h4>
            <ul className="space-y-2">
              {[
                { id: "mytree", name: "🌳 MyTree - Investasi Pohon" },
                { id: "csr", name: "🏢 Solusi CSR" },
                { id: "mydonation", name: "💚 MyDonation" },
                { id: "fitur-pendukung", name: "📊 Fitur Pendukung" }
              ].map((service, index) => (
                <motion.li key={index} whileHover={{ x: 5 }}>
                  <button
                    onClick={() => scrollToSection(service.id)}
                    className="text-gray-300 hover:text-white transition-colors font-medium text-sm"
                  >
                    {service.name}
                  </button>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Download & Social */}
          <div>
            <h4 className="mb-4 text-white font-bold">Download Aplikasi</h4>
            <div className="space-y-3 mb-6">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-white text-gray-900 py-3 px-4 rounded-lg hover:bg-gray-100 transition-all font-bold text-sm shadow-lg flex items-center justify-center"
              >
                <Smartphone className="mr-2 h-4 w-4" />
                App Store
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-green-600 text-white py-3 px-4 rounded-lg hover:bg-green-700 transition-all font-bold text-sm shadow-lg flex items-center justify-center"
              >
                <Smartphone className="mr-2 h-4 w-4" />
                Google Play
              </motion.button>
            </div>
            <h4 className="mb-3 text-white font-bold text-sm">Media Sosial</h4>
            <div className="flex space-x-3">
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href="https://instagram.com/pt.urtree"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white p-3 rounded-lg hover:bg-gray-100 transition-all"
              >
                <Instagram className="h-5 w-5 text-gray-900" />
              </motion.a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-300 font-medium text-sm mb-2">
            © 2025 PT UrTree Cipta Lestari. All rights reserved.
          </p>
          <div className="flex justify-center space-x-4 text-sm">
            <button className="text-gray-300 hover:text-white transition-colors font-medium">
              Kebijakan Privasi
            </button>
            <span className="text-gray-300">•</span>
            <button className="text-gray-300 hover:text-white transition-colors font-medium">
              Syarat & Ketentuan
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
