import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import logoImage from "../assets/359324a7664b58526f420bb21c5e4b37a62aee04.png";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showServicesDropdown, setShowServicesDropdown] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-lg py-3" : "bg-white/95 backdrop-blur-md py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center cursor-pointer"
            onClick={() => scrollToSection("beranda")}
          >
            <img src={logoImage} alt="UrTree Logo" className="h-12 md:h-14" />
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("beranda")}
              className="text-gray-700 hover:text-green-600 transition-colors font-semibold relative group"
            >
              Beranda
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-600 group-hover:w-full transition-all duration-300"></span>
            </button>
            <button
              onClick={() => scrollToSection("tentang")}
              className="text-gray-700 hover:text-green-600 transition-colors font-semibold relative group"
            >
              Tentang Kami
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-600 group-hover:w-full transition-all duration-300"></span>
            </button>
            <div
              className="relative"
              onMouseEnter={() => setShowServicesDropdown(true)}
              onMouseLeave={() => setShowServicesDropdown(false)}
            >
              <button className="text-gray-700 hover:text-green-600 transition-colors flex items-center font-semibold relative group">
                Layanan Kami
                <ChevronDown className="ml-1 h-4 w-4" />
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-600 group-hover:w-full transition-all duration-300"></span>
              </button>
              <AnimatePresence>
                {showServicesDropdown && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 mt-2 w-64 bg-white shadow-xl rounded-xl py-2 border border-gray-200"
                  >
                    <button
                      onClick={() => scrollToSection("mytree")}
                      className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-green-50 hover:text-green-700 font-medium transition-colors"
                    >
                      Investasi Pohon (MyTree)
                    </button>
                    <button
                      onClick={() => scrollToSection("csr")}
                      className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-green-50 hover:text-green-700 font-medium transition-colors"
                    >
                      Solusi CSR Perusahaan
                    </button>
                    <button
                      onClick={() => scrollToSection("mydonation")}
                      className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-green-50 hover:text-green-700 font-medium transition-colors"
                    >
                      Donasi Penghijauan (MyDonation)
                    </button>
                    <button
                      onClick={() => scrollToSection("fitur-pendukung")}
                      className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-green-50 hover:text-green-700 font-medium transition-colors"
                    >
                      Fitur Pendukung
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <button
              onClick={() => scrollToSection("mitra-petani")}
              className="text-gray-700 hover:text-green-600 transition-colors font-semibold relative group"
            >
              Mitra Petani
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-600 group-hover:w-full transition-all duration-300"></span>
            </button>
            <button
              onClick={() => scrollToSection("testi")}
              className="text-gray-700 hover:text-green-600 transition-colors font-semibold relative group"
            >
              Testi
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-600 group-hover:w-full transition-all duration-300"></span>
            </button>
            <button
              onClick={() => scrollToSection("faq")}
              className="text-gray-700 hover:text-green-600 transition-colors font-semibold relative group"
            >
              FAQ
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-600 group-hover:w-full transition-all duration-300"></span>
            </button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection("kontak")}
              className="bg-green-600 text-white px-6 py-2.5 rounded-lg hover:bg-green-700 transition-colors font-semibold shadow-md hover:shadow-lg"
            >
              Kontak
            </motion.button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-green-600"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-200"
          >
            <div className="px-4 pt-2 pb-3 space-y-1">
              <button
                onClick={() => scrollToSection("beranda")}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-green-50 hover:text-green-700 rounded-lg font-semibold"
              >
                Beranda
              </button>
              <button
                onClick={() => scrollToSection("tentang")}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-green-50 hover:text-green-700 rounded-lg font-semibold"
              >
                Tentang Kami
              </button>
              <div className="px-3 py-2">
                <p className="text-gray-500 text-sm font-bold mb-2">Layanan Kami</p>
                <button
                  onClick={() => scrollToSection("mytree")}
                  className="block w-full text-left pl-4 py-1 text-gray-700 hover:text-green-600"
                >
                  Investasi Pohon (MyTree)
                </button>
                <button
                  onClick={() => scrollToSection("csr")}
                  className="block w-full text-left pl-4 py-1 text-gray-700 hover:text-green-600"
                >
                  Solusi CSR Perusahaan
                </button>
                <button
                  onClick={() => scrollToSection("mydonation")}
                  className="block w-full text-left pl-4 py-1 text-gray-700 hover:text-green-600"
                >
                  Donasi Penghijauan (MyDonation)
                </button>
                <button
                  onClick={() => scrollToSection("fitur-pendukung")}
                  className="block w-full text-left pl-4 py-1 text-gray-700 hover:text-green-600"
                >
                  Fitur Pendukung
                </button>
              </div>
              <button
                onClick={() => scrollToSection("mitra-petani")}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-green-50 hover:text-green-700 rounded-lg font-semibold"
              >
                Mitra Petani
              </button>
              <button
                onClick={() => scrollToSection("testi")}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-green-50 hover:text-green-700 rounded-lg font-semibold"
              >
                Testi
              </button>
              <button
                onClick={() => scrollToSection("faq")}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-green-50 hover:text-green-700 rounded-lg font-semibold"
              >
                FAQ
              </button>
              <button
                onClick={() => scrollToSection("kontak")}
                className="block w-full text-left px-3 py-2 bg-green-600 text-white hover:bg-green-700 rounded-lg font-semibold mt-2"
              >
                Kontak
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
