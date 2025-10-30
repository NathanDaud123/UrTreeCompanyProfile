import React from "react";
import { Card } from "./ui/card";
import { ShoppingBag, TrendingUp, Users, Leaf, ArrowRight, ExternalLink } from "lucide-react";
import { motion } from "motion/react";

export function MarketplaceOverview() {
  const features = [
    {
      icon: ShoppingBag,
      title: "Marketplace Terintegrasi",
      description: "Platform jual beli pohon dan hasil panen yang terhubung langsung dengan investor dan petani"
    },
    {
      icon: TrendingUp,
      title: "Transparansi Harga",
      description: "Sistem harga real-time yang adil dan transparan untuk semua pihak"
    },
    {
      icon: Users,
      title: "Komunitas Aktif",
      description: "Jaringan investor dan petani yang saling mendukung dan berbagi pengalaman"
    },
    {
      icon: Leaf,
      title: "Sertifikasi Hijau",
      description: "Setiap transaksi terverifikasi dan berkontribusi pada pelestarian lingkungan"
    }
  ];

  return (
    <section id="marketplace" className="py-20 bg-gradient-to-br from-green-50 to-white overflow-hidden max-w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-8 py-3 bg-green-100 rounded-full mb-4">
            <span className="text-green-700 font-bold">Marketplace</span>
          </div>
          <h2 className="text-gray-900 mb-4 text-4xl font-bold">
            Platform <span className="text-green-600">Marketplace</span> Terintegrasi
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Temukan dan beli pohon investasi, hasil panen, serta produk hijau lainnya dalam satu platform yang aman dan terpercaya
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="p-6 text-center hover:shadow-xl transition-all bg-white border-2 border-gray-100 hover:border-green-500 group h-full">
                  <div className="bg-gradient-to-br from-green-500 to-green-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-gray-900 mb-3 text-lg font-bold">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </Card>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <Card className="bg-gradient-to-br from-green-600 to-green-700 text-white p-8 md:p-12 shadow-2xl border-0 overflow-hidden relative max-w-4xl mx-auto">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
            
            <div className="relative z-10">
              <h3 className="mb-4 text-3xl md:text-4xl font-black text-white">
                Jelajahi <span className="text-green-200">Marketplace</span> Kami
              </h3>
              <p className="text-green-100 text-lg mb-8 max-w-2xl mx-auto">
                Temukan berbagai pilihan investasi pohon, hasil panen segar, dan produk hijau berkualitas tinggi dari petani terpercaya
              </p>
              <motion.a
                href="https://nathandaud123.github.io/UrTreeCompanyProfile/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center bg-white text-green-700 hover:bg-gray-50 px-8 py-4 rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <ShoppingBag className="mr-3 h-6 w-6" />
                Kunjungi Marketplace
                <ExternalLink className="ml-3 h-5 w-5" />
              </motion.a>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
