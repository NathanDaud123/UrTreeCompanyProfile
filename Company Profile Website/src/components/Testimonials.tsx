import { Card } from "./ui/card";
import { Star, Quote } from "lucide-react";
import { motion } from "motion/react";

export function Testimonials() {
  const testimonials = [
    {
      name: "Budi Santoso",
      role: "Investor Individu",
      content: "Platform yang sangat transparan! Saya bisa melihat perkembangan pohon saya setiap hari. Ini bukan hanya investasi, tapi juga kontribusi nyata untuk lingkungan.",
      rating: 5,
    },
    {
      name: "PT Maju Bersama",
      role: "Corporate CSR",
      content: "Kerjasama dengan UrTree sangat membantu program CSR kami. Pelaporan ESG yang detail dan profesional membuat kami yakin memilih UrTree sebagai mitra.",
      rating: 5,
    },
    {
      name: "Pak Hadi",
      role: "Petani Mitra",
      content: "Sebagai petani, saya sangat terbantu dengan pendanaan dari UrTree. Sistemnya mudah dipahami dan tim UrTree sangat supportif dalam memberikan pelatihan.",
      rating: 5,
    },
  ];

  return (
    <section id="testi" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-5 py-2 bg-green-100 rounded-full mb-4">
            <span className="text-green-700 font-bold">Testimoni</span>
          </div>
          <h2 className="text-gray-900 mb-4">
            Apa Kata <span className="text-green-600">Mereka</span>?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Pengalaman nyata dari investor, perusahaan, dan petani yang telah bergabung dengan UrTree
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="p-8 hover:shadow-xl transition-all bg-white border-2 border-gray-100 hover:border-green-500 relative h-full">
                <div className="absolute top-6 right-6 opacity-10">
                  <Quote className="w-12 h-12 text-green-600" />
                </div>
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div className="border-t-2 border-gray-100 pt-4">
                  <p className="text-gray-900 font-bold">{testimonial.name}</p>
                  <p className="text-green-600 font-semibold text-sm">{testimonial.role}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
