import { Card } from "./ui/card";
import { Star, Quote } from "lucide-react";

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
    <section id="testi" className="py-24 bg-gradient-to-br from-green-700 via-green-800 to-green-900 relative overflow-hidden">
      <div className="absolute top-20 right-0 w-96 h-96 bg-green-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-green-400/20 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block px-6 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6">
            <span className="text-white font-bold text-lg">Testimoni</span>
          </div>
          <h2 className="text-white mb-6 font-black">Apa Kata Mereka?</h2>
          <p className="text-green-100 text-xl max-w-2xl mx-auto font-medium">
            Pengalaman nyata dari investor, perusahaan, dan petani yang telah bergabung dengan UrTree
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-10 hover:shadow-2xl transition-all bg-white/95 backdrop-blur-sm border-4 border-white/50 hover:scale-105 transform duration-300 relative">
              <div className="absolute top-6 right-6 opacity-10">
                <Quote className="w-16 h-16 text-green-600" />
              </div>
              <div className="flex mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-800 mb-8 italic font-medium text-lg leading-relaxed">"{testimonial.content}"</p>
              <div className="border-t-2 border-green-200 pt-6">
                <p className="text-green-900 font-black text-lg">{testimonial.name}</p>
                <p className="text-green-700 font-semibold">{testimonial.role}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
