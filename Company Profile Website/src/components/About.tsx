import React from "react";
import { Card } from "./ui/card";
import { Target, Rocket, MapPin, FileText, Award } from "lucide-react";
import { motion } from "motion/react";
import yuvenPhoto from "figma:asset/05a032e13c54062d47b5a9f411cec8eca2f74de3.png";
import isriPhoto from "figma:asset/f88a46d78f525d58c5775e05e0a15e7474c6d0c4.png";
import johanPhoto from "figma:asset/9110f4ba34c059b560aa177682413c4e1e52e602.png";
import fanisyaPhoto from "figma:asset/bcb4b930e6c324b8c87f65bbf64c0f524ffa961e.png";

export function About() {
  const directors = [
    { name: "Yuven Reksa Pratama", position: "Chief Executive Officer", initial: "YR", photo: yuvenPhoto },
    { name: "Berlian Davis Dwi Mubarok", position: "Chief Marketing Officer", initial: "BD" },
    { name: "Johan Arizona", position: "Chief Technology Officer", initial: "JA", photo: johanPhoto },
    { name: "Alexander Imanuel Widjanarko", position: "Chief Financial Officer", initial: "AW" },
    { name: "Isri Amirul Haq", position: "Chief Operating Officer", initial: "IH", photo: isriPhoto },
    { name: "Fanisya Luthfiatma", position: "Chief Sustainability Officer", initial: "FL", photo: fanisyaPhoto },
  ];

  return (
    <section id="tentang" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-5 py-2 bg-green-100 rounded-full mb-4">
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
                <h3 className="text-gray-900">
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
                <h3 className="text-gray-900">
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
          <div className="grid md:grid-cols-3 gap-8">
            {directors.map((director, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <Card className="p-6 text-center hover:shadow-xl transition-all bg-white border-2 border-gray-100 hover:border-green-500">
                  {director.photo ? (
                    <div className="w-32 h-32 mx-auto mb-4 overflow-hidden rounded-2xl shadow-lg">
                      <img
                        src={director.photo}
                        alt={director.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ) : (
                    <div className="w-32 h-32 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl mx-auto mb-4 flex items-center justify-center shadow-lg">
                      <span className="text-white text-2xl font-black">{director.initial}</span>
                    </div>
                  )}
                  <h4 className="text-gray-900 mb-2 font-bold">{director.name}</h4>
                  <p className="text-green-600 font-semibold text-sm">{director.position}</p>
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
          <Card className="p-10 bg-white shadow-lg border-2 border-gray-100">
            <div className="text-center mb-10">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-green-600 rounded-xl mb-4">
                <Award className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-gray-900 mb-2">
                <span className="text-green-600">Legalitas</span> & Kantor
              </h3>
              <p className="text-gray-600">Terdaftar resmi dan beroperasi secara legal</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-green-50 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <FileText className="h-6 w-6 text-green-600" />
                </div>
                <p className="text-gray-900 mb-1 font-bold">PT UrTree Cipta Lestari</p>
                <p className="text-green-600 font-semibold text-sm">Badan Hukum Terdaftar</p>
              </div>
              <div className="text-center">
                <div className="bg-green-50 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <FileText className="h-6 w-6 text-green-600" />
                </div>
                <p className="text-gray-900 mb-1 font-bold">NIB Resmi</p>
                <p className="text-green-600 font-semibold text-sm">Nomor Induk Berusaha</p>
              </div>
              <div className="text-center">
                <div className="bg-green-50 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-6 w-6 text-green-600" />
                </div>
                <p className="text-gray-900 mb-1 font-bold">Kantor Pusat</p>
                <p className="text-green-600 font-semibold text-sm">
                  Jl. Borobudur Agung Timur IV, Mojolangu, Lowokwaru, Malang, Jawa Timur
                </p>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
