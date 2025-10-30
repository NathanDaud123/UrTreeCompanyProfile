import React from "react";
import { Card } from "./ui/card";
import { Target, Rocket, MapPin, FileText, Award } from "lucide-react";
import { motion } from "motion/react";
import yuvenPhoto from "../assets/05a032e13c54062d47b5a9f411cec8eca2f74de3.png";
import davisPhoto from "../assets/Davis.png";
import johanPhoto from "../assets/9110f4ba34c059b560aa177682413c4e1e52e602.png";
import alexPhoto from "../assets/alex.png";
import isriPhoto from "../assets/f88a46d78f525d58c5775e05e0a15e7474c6d0c4.png";
import fanisyaPhoto from "../assets/bcb4b930e6c324b8c87f65bbf64c0f524ffa961e.png";

export function About() {
  const directors = [
    { name: "Yuven Reksa Pratama", position: "Founder & Chief Executive Officer (CEO)", initial: "YR", photo: yuvenPhoto, photoStyle: "object-[center_50%] scale-100" },
    { name: "Alexander Imanuel Widjanarko", position: "Co-Founder & Chief Financial Officer (CFO)", initial: "AW", photo: alexPhoto, photoStyle: "object-[center_65%] scale-100" },
    { name: "Berlian Davis Dwi Mubarok", position: "Co-Founder & Chief Marketing Officer (CMO)", initial: "BD", photo: davisPhoto, photoStyle: "object-[center_50%] scale-100" },
    { name: "Johan Arizona", position: "Co-Founder & Chief Technology Officer (CTO)", initial: "JA", photo: johanPhoto, photoStyle: "object-[center_60%] scale-[0.85]" },
    { name: "Isri Amirul Haq", position: "Co-Founder & Chief Operating Officer (COO)", initial: "IH", photo: isriPhoto, photoStyle: "object-[center_55%] scale-100" },
    { name: "Fanisya Luthfiatma", position: "Chief Sustainability Officer (CSO)", initial: "FL", photo: fanisyaPhoto, photoStyle: "object-[40%_60%] scale-100" },
  ];

  return (
    <section id="tentang" className="py-20 bg-gradient-to-br from-gray-50 to-white overflow-hidden max-w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-8 py-3 bg-green-100 rounded-full mb-4">
            <span className="text-green-700 font-bold">Tentang Kami</span>
          </div>
          <h2 className="text-gray-900 mb-4">
            PT <span className="text-green-600">UrTree</span> Cipta Lestari
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Platform Digital Inovatif untuk <span className="text-green-600 font-bold">Reboisasi Berkelanjutan</span> di Indonesia
          </p>
        </motion.div>

        {/* Visi & Misi */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="p-8 bg-white border-2 border-gray-100 shadow-lg hover:shadow-xl transition-all h-full">
              <div className="flex items-center mb-6">
                <div className="bg-green-600 p-3 rounded-xl mr-4 shadow-md">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-gray-900 text-xl font-bold">
                  <span className="text-green-600">Visi</span> Kami
                </h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Menjadi <span className="font-bold text-gray-900">kekuatan pendorong utama</span> reboisasi berkelanjutan di Indonesia, mewujudkan masa depan yang <span className="text-green-600 font-bold">hijau, lestari, dan sejahtera</span> untuk generasi mendatang.
              </p>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="p-8 bg-white border-2 border-gray-100 shadow-lg hover:shadow-xl transition-all h-full">
              <div className="flex items-center mb-6">
                <div className="bg-green-700 p-3 rounded-xl mr-4 shadow-md">
                  <Rocket className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-gray-900 text-xl font-bold">
                  <span className="text-green-600">Misi</span> Kami
                </h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Mengatasi deforestasi dan <span className="font-bold text-gray-900">memberdayakan masyarakat</span> melalui platform teknologi yang berkontribusi nyata pada <span className="text-green-600 font-bold">kesejahteraan ekonomi dan sosial</span>.
              </p>
            </Card>
          </motion.div>
        </div>

        {/* Jajaran Direksi */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h3 className="text-gray-900 mb-3">
              Jajaran <span className="text-green-600">Direksi</span>
            </h3>
            <p className="text-gray-600">Tim profesional yang berdedikasi untuk masa depan hijau Indonesia</p>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {directors.map((director, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <Card className="p-4 text-center hover:shadow-xl transition-all bg-white border-2 border-gray-100 hover:border-green-500 h-full">
                  {/* Circle photo with green border */}
                  {director.photo ? (
                    <div className="relative w-24 h-24 mx-auto mb-3">
                      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-green-500 to-green-600 p-1">
                        <div className="w-full h-full rounded-full overflow-hidden">
                          <img
                            src={director.photo}
                            alt={director.name}
                            className={`w-full h-full object-cover ${director.photoStyle || ''}`}
                          />
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="w-24 h-24 mx-auto mb-3 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-white text-xl font-black">{director.initial}</span>
                    </div>
                  )}
                  <div className="space-y-3">
                    <h4 className="text-gray-900 font-bold text-sm leading-none">{director.name}</h4>
                    <p className="text-green-600 font-semibold text-xs leading-none">{director.position}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Legalitas & Kantor */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Card className="p-10 bg-gradient-to-br from-green-50 to-white shadow-xl border-2 border-green-200">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-600 to-green-700 rounded-2xl mb-6 shadow-lg">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-black text-gray-900 mb-3">
                <span className="text-green-600">Legalitas</span> & Kantor
              </h3>
              <p className="text-lg text-gray-700 font-medium">Terdaftar resmi dan beroperasi secara legal</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="bg-white p-6 rounded-2xl border-2 border-green-100 hover:border-green-500 hover:shadow-lg transition-all"
              >
                <div className="bg-gradient-to-br from-green-500 to-green-600 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-md">
                  <FileText className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-gray-900 mb-2 font-black text-lg">PT UrTree Cipta Lestari</h4>
                <p className="text-green-600 font-bold text-sm">Badan Hukum Terdaftar</p>
              </motion.div>
              
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="bg-white p-6 rounded-2xl border-2 border-green-100 hover:border-green-500 hover:shadow-lg transition-all"
              >
                <div className="bg-gradient-to-br from-green-600 to-green-700 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-md">
                  <FileText className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-gray-900 mb-2 font-black text-lg">NIB Resmi</h4>
                <p className="text-green-600 font-bold text-sm">Nomor Induk Berusaha</p>
              </motion.div>
              
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="bg-white p-6 rounded-2xl border-2 border-green-100 hover:border-green-500 hover:shadow-lg transition-all"
              >
                <div className="bg-gradient-to-br from-green-700 to-green-800 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-md">
                  <MapPin className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-gray-900 mb-2 font-black text-lg">Kantor Pusat</h4>
                <p className="text-green-600 font-bold text-sm leading-tight">
                  Jl. Borobudur Agung Timur IV, Mojolangu, Lowokwaru, Malang, Jawa Timur
                </p>
              </motion.div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
