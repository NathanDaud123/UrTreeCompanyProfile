import React from "react";
import { Button } from "./ui/button";
import {
  ArrowRight,
  TrendingUp,
  Users,
  Leaf,
} from "lucide-react";

export function Hero() {
  return (
    <section
      id="beranda"
      className="relative pt-20 min-h-screen flex items-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1598962277067-f13ebd6cfdca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmVlbiUyMGZvcmVzdCUyMHN1c3RhaW5hYmlsaXR5fGVufDF8fHx8MTc2MTQxMjU5OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Green Forest"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/95 via-green-800/90 to-green-700/85"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-green-950/80 via-transparent to-transparent"></div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-40 left-10 w-72 h-72 bg-green-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-40 right-10 w-96 h-96 bg-green-400/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-green-500/20 border-2 border-green-400/30 backdrop-blur-sm mb-8">
            <Leaf className="w-5 h-5 text-green-300 mr-2" />
            <span className="text-green-100 font-bold text-lg">
              Platform Investasi Pohon #1 di Indonesia
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-white mb-8 text-6xl md:text-7xl lg:text-8xl leading-none">
            Miliki Pohon
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-green-200 to-green-300">
              Tanpa Tanah
            </span>
            <br />
            Panen Tanpa Lelah
          </h1>

          {/* Subtitle */}
          <p className="text-green-100 text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed font-medium">
            Platform investasi yang memungkinkan Anda memiliki
            pohon serta menikmati hasilnya tanpa perlu menanam
            dan merawat pohon. Bergabunglah dalam misi reboisasi
            Indonesia!
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Button className="bg-white text-green-800 hover:bg-green-50 text-lg px-10 py-7 rounded-xl shadow-2xl hover:shadow-green-500/20 transition-all transform hover:scale-105 font-bold">
              Mulai Investasi Sekarang
              <ArrowRight className="ml-3 h-6 w-6" />
            </Button>
            <Button className="bg-green-600/30 backdrop-blur-sm border-2 border-white/50 text-white hover:bg-green-600/50 text-lg px-10 py-7 rounded-xl font-bold">
              Pelajari Lebih Lanjut
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all">
              <div className="flex items-center justify-center mb-4">
                <div className="bg-green-400 p-4 rounded-xl">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
              </div>
              <h3 className="text-white text-4xl font-black mb-2">
                10,000+
              </h3>
              <p className="text-green-200 text-lg font-semibold">
                Pohon Terkelola
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all">
              <div className="flex items-center justify-center mb-4">
                <div className="bg-green-400 p-4 rounded-xl">
                  <Users className="w-8 h-8 text-white" />
                </div>
              </div>
              <h3 className="text-white text-4xl font-black mb-2">
                5,000+
              </h3>
              <p className="text-green-200 text-lg font-semibold">
                Investor Aktif
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all">
              <div className="flex items-center justify-center mb-4">
                <div className="bg-green-400 p-4 rounded-xl">
                  <Leaf className="w-8 h-8 text-white" />
                </div>
              </div>
              <h3 className="text-white text-4xl font-black mb-2">
                100+
              </h3>
              <p className="text-green-200 text-lg font-semibold">
                Petani Mitra
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
        >
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V120Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}