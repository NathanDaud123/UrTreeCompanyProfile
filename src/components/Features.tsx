import React from "react";
import { Card } from "./ui/card";
import { TreePine, HandHeart, Building, Download, Smartphone, Sparkles } from "lucide-react";
import { motion } from "motion/react";

export function Features() {
  return (
    <section className="py-20 bg-gradient-to-b from-green-50 via-white to-white relative overflow-hidden max-w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-8 py-3 bg-green-100 rounded-full mb-4">
            <Sparkles className="w-4 h-4 text-green-600 mr-2" />
            <span className="text-green-700 font-bold">Fitur Unggulan</span>
          </div>
          <h2 className="text-gray-900 mb-4 text-4xl font-bold">
            <span className="text-green-600">3 Layanan Utama</span> Kami
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Platform lengkap untuk investasi hijau dan pelestarian lingkungan
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {/* MyTree */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <Card className="p-8 text-center hover:shadow-2xl transition-all bg-white border-2 border-gray-100 hover:border-green-500 group h-full">
              <div className="bg-gradient-to-br from-green-500 to-green-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <TreePine className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-gray-900 mb-3 text-xl font-bold">
                <span className="text-green-600">MyTree</span>
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Investasi pohon personal Anda dengan <span className="font-bold text-gray-900">potensi bagi hasil yang menguntungkan</span> dan dampak lingkungan nyata.
              </p>
            </Card>
          </motion.div>

          {/* CSR */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <Card className="p-8 text-center hover:shadow-2xl transition-all bg-white border-2 border-gray-100 hover:border-green-500 group h-full">
              <div className="bg-gradient-to-br from-green-600 to-green-700 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Building className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-gray-900 mb-3 text-xl font-bold">
                <span className="text-green-600">Solusi CSR</span>
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Program keberlanjutan untuk korporasi dengan <span className="font-bold text-gray-900">pelaporan ESG yang kredibel</span> dan terverifikasi.
              </p>
            </Card>
          </motion.div>

          {/* MyDonation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <Card className="p-8 text-center hover:shadow-2xl transition-all bg-white border-2 border-gray-100 hover:border-green-500 group h-full">
              <div className="bg-gradient-to-br from-green-500 to-green-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <HandHeart className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-gray-900 mb-3 text-xl font-bold">
                <span className="text-green-600">MyDonation</span>
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Berdonasi untuk restorasi lingkungan dan dapatkan <span className="font-bold text-gray-900">badge eksklusif</span> sebagai apresiasi kontribusi Anda.
              </p>
            </Card>
          </motion.div>
        </div>

        {/* CTA - Premium Design */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative mt-24"
          data-section="siap-membuat-dampak"
        >
          <div className="relative bg-gradient-to-br from-green-500 via-green-600 to-green-700 rounded-3xl shadow-[0_20px_60px_rgba(34,197,94,0.4)] overflow-hidden">
            {/* Animated background circles */}
            <div className="absolute -top-20 -right-4 md:-right-20 w-64 md:w-96 h-64 md:h-96 bg-green-400/20 rounded-full blur-3xl animate-pulse pointer-events-none"></div>
            <div className="absolute -bottom-20 -left-4 md:-left-20 w-64 md:w-96 h-64 md:h-96 bg-green-800/30 rounded-full blur-3xl animate-pulse pointer-events-none" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]"></div>
            </div>
            
            {/* Content Container */}
            <div className="relative z-10 px-8 py-16 md:px-16 md:py-20">
              <div className="max-w-4xl mx-auto text-center">
                {/* Icon with animated background */}
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, type: "spring", bounce: 0.5 }}
                  className="inline-flex items-center justify-center w-24 h-24 bg-white/20 backdrop-blur-md rounded-3xl mb-8 shadow-2xl border-2 border-white/30"
                >
                  <Smartphone className="w-12 h-12 text-white drop-shadow-lg" />
                </motion.div>
                
                {/* Main Heading */}
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight tracking-tight"
                >
                  Siap Membuat{' '}
                  <span className="relative inline-block text-green-100 font-black drop-shadow-[0_0_20px_rgba(255,255,255,0.5)]">
                    Dampak
                  </span>
                  {' '}?
                </motion.h2>
                
                {/* Description */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="text-xl md:text-2xl text-white/95 mb-12 max-w-3xl mx-auto leading-relaxed font-medium"
                >
                  Unduh aplikasinya sekarang dan mulai perjalanan Anda menuju{' '}
                  <span className="font-bold text-white drop-shadow-lg">masa depan yang lebih hijau</span>{' '}
                  dan berkelanjutan
                </motion.p>
                
                {/* CTA Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="flex flex-col sm:flex-row justify-center gap-6 sm:gap-8"
                >
                  <motion.button 
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="group relative bg-white text-green-700 px-10 py-5 rounded-2xl font-bold text-lg flex items-center justify-center shadow-[0_10px_40px_rgba(255,255,255,0.3)] hover:shadow-[0_15px_50px_rgba(255,255,255,0.4)] transition-all duration-300 overflow-hidden"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-green-50 to-white opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    <Download className="mr-3 h-6 w-6 relative z-10 group-hover:animate-bounce" />
                    <span className="relative z-10">Download di App Store</span>
                  </motion.button>
                  
                  <motion.a
                    href="https://play.google.com/store/apps/details?id=com.ub.pmw.urtree&pcampaignid=web_share"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="group relative bg-green-800/50 backdrop-blur-sm text-white px-10 py-5 rounded-2xl font-bold text-lg flex items-center justify-center shadow-[0_10px_40px_rgba(0,0,0,0.3)] hover:shadow-[0_15px_50px_rgba(0,0,0,0.4)] transition-all duration-300 border-2 border-white/40 hover:border-white/60 hover:bg-green-800/70"
                  >
                    <Download className="mr-3 h-6 w-6 group-hover:animate-bounce" />
                    <span>Download di Google Play</span>
                  </motion.a>
                </motion.div>
              </div>
            </div>
            
            {/* Bottom decorative wave */}
            <div className="absolute bottom-0 left-0 right-0 h-24 opacity-20 overflow-hidden">
              <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" preserveAspectRatio="xMidYMax slice">
                <path d="M0 100L60 85C120 70 240 40 360 30C480 20 600 30 720 40C840 50 960 60 1080 65C1200 70 1320 70 1380 70L1440 70V100H1380C1320 100 1200 100 1080 100C960 100 840 100 720 100C600 100 480 100 360 100C240 100 120 100 60 100H0Z" fill="white" fillOpacity="0.1"/>
              </svg>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
