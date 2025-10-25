import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "./ui/button";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showServicesDropdown, setShowServicesDropdown] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 w-full bg-gradient-to-r from-green-800 via-green-700 to-green-800 shadow-xl z-50 border-b-4 border-green-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center">
            <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/20">
              <div className="flex items-center">
                <span className="text-4xl mr-2">🌳</span>
                <div>
                  <span className="text-white text-2xl font-black tracking-tight">UrTree</span>
                  <p className="text-green-100 text-xs font-medium">Cipta Lestari</p>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("beranda")}
              className="text-white hover:text-green-200 transition-colors font-semibold"
            >
              Beranda
            </button>
            <button
              onClick={() => scrollToSection("tentang")}
              className="text-white hover:text-green-200 transition-colors font-semibold"
            >
              Tentang Kami
            </button>
            <div
              className="relative"
              onMouseEnter={() => setShowServicesDropdown(true)}
              onMouseLeave={() => setShowServicesDropdown(false)}
            >
              <button className="text-white hover:text-green-200 transition-colors flex items-center font-semibold">
                Layanan Kami
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {showServicesDropdown && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white shadow-xl rounded-lg py-2 border-2 border-green-600">
                  <button
                    onClick={() => scrollToSection("mytree")}
                    className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-green-50 hover:text-green-700 font-medium"
                  >
                    Investasi Pohon (MyTree)
                  </button>
                  <button
                    onClick={() => scrollToSection("csr")}
                    className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-green-50 hover:text-green-700 font-medium"
                  >
                    Solusi CSR Perusahaan
                  </button>
                  <button
                    onClick={() => scrollToSection("mydonation")}
                    className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-green-50 hover:text-green-700 font-medium"
                  >
                    Donasi Penghijauan (MyDonation)
                  </button>
                  <button
                    onClick={() => scrollToSection("fitur-pendukung")}
                    className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-green-50 hover:text-green-700 font-medium"
                  >
                    Fitur Pendukung
                  </button>
                </div>
              )}
            </div>
            <button
              onClick={() => scrollToSection("mitra-petani")}
              className="text-white hover:text-green-200 transition-colors font-semibold"
            >
              Mitra Petani
            </button>
            <button
              onClick={() => scrollToSection("testi")}
              className="text-white hover:text-green-200 transition-colors font-semibold"
            >
              Testi
            </button>
            <button
              onClick={() => scrollToSection("faq")}
              className="text-white hover:text-green-200 transition-colors font-semibold"
            >
              FAQ
            </button>
            <button
              onClick={() => scrollToSection("kontak")}
              className="text-white hover:text-green-200 transition-colors font-semibold"
            >
              Kontak
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-green-200"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-green-900 border-t border-green-700">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <button
              onClick={() => scrollToSection("beranda")}
              className="block w-full text-left px-3 py-2 text-white hover:bg-green-800 rounded font-semibold"
            >
              Beranda
            </button>
            <button
              onClick={() => scrollToSection("tentang")}
              className="block w-full text-left px-3 py-2 text-white hover:bg-green-800 rounded font-semibold"
            >
              Tentang Kami
            </button>
            <div className="px-3 py-2">
              <p className="text-green-300 text-sm font-bold">Layanan Kami</p>
              <button
                onClick={() => scrollToSection("mytree")}
                className="block w-full text-left pl-4 py-1 text-white hover:text-green-200"
              >
                Investasi Pohon (MyTree)
              </button>
              <button
                onClick={() => scrollToSection("csr")}
                className="block w-full text-left pl-4 py-1 text-white hover:text-green-200"
              >
                Solusi CSR Perusahaan
              </button>
              <button
                onClick={() => scrollToSection("mydonation")}
                className="block w-full text-left pl-4 py-1 text-white hover:text-green-200"
              >
                Donasi Penghijauan (MyDonation)
              </button>
              <button
                onClick={() => scrollToSection("fitur-pendukung")}
                className="block w-full text-left pl-4 py-1 text-white hover:text-green-200"
              >
                Fitur Pendukung
              </button>
            </div>
            <button
              onClick={() => scrollToSection("mitra-petani")}
              className="block w-full text-left px-3 py-2 text-white hover:bg-green-800 rounded font-semibold"
            >
              Mitra Petani
            </button>
            <button
              onClick={() => scrollToSection("testi")}
              className="block w-full text-left px-3 py-2 text-white hover:bg-green-800 rounded font-semibold"
            >
              Testi
            </button>
            <button
              onClick={() => scrollToSection("faq")}
              className="block w-full text-left px-3 py-2 text-white hover:bg-green-800 rounded font-semibold"
            >
              FAQ
            </button>
            <button
              onClick={() => scrollToSection("kontak")}
              className="block w-full text-left px-3 py-2 text-white hover:bg-green-800 rounded font-semibold"
            >
              Kontak
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
