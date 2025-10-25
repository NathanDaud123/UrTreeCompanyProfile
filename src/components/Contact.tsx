import { useState } from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { MapPin, Mail, Instagram, Send } from "lucide-react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Terima kasih! Pesan Anda telah dikirim.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="kontak" className="py-24 bg-gradient-to-br from-green-600 via-green-700 to-green-800 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-green-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-400/20 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block px-6 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6">
            <span className="text-white font-bold text-lg">Kontak Kami</span>
          </div>
          <h2 className="text-white mb-6 font-black">Hubungi Kami</h2>
          <p className="text-green-100 text-xl max-w-2xl mx-auto font-medium leading-relaxed">
            Ada pertanyaan atau ingin bermitra dengan kami? Jangan ragu untuk menghubungi kami
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="p-10 bg-white/95 backdrop-blur-sm shadow-2xl border-4 border-white/50">
            <h3 className="text-green-900 mb-8 font-black">Kirim Pesan</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-800 mb-3 font-bold">
                  Nama Lengkap
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full border-2 border-green-200 focus:border-green-600 rounded-xl p-4 text-lg"
                  placeholder="Masukkan nama Anda"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-800 mb-3 font-bold">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full border-2 border-green-200 focus:border-green-600 rounded-xl p-4 text-lg"
                  placeholder="nama@email.com"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-gray-800 mb-3 font-bold">
                  Subjek
                </label>
                <Input
                  id="subject"
                  name="subject"
                  type="text"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full border-2 border-green-200 focus:border-green-600 rounded-xl p-4 text-lg"
                  placeholder="Topik pesan Anda"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-800 mb-3 font-bold">
                  Pesan
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full min-h-40 border-2 border-green-200 focus:border-green-600 rounded-xl p-4 text-lg"
                  placeholder="Tulis pesan Anda di sini..."
                />
              </div>
              <Button type="submit" className="w-full bg-gradient-to-r from-green-700 to-green-800 hover:from-green-800 hover:to-green-900 text-white py-6 text-lg font-black rounded-xl shadow-xl transform hover:scale-105 transition-all">
                <Send className="mr-3 h-6 w-6" />
                Kirim Pesan
              </Button>
            </form>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="p-8 bg-white/95 backdrop-blur-sm hover:shadow-2xl transition-all border-4 border-white/50">
              <div className="flex items-start">
                <div className="bg-gradient-to-br from-green-600 to-green-700 p-4 rounded-2xl mr-6 flex-shrink-0 shadow-xl">
                  <MapPin className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h4 className="text-green-900 mb-3 font-black text-xl">Alamat Kantor</h4>
                  <p className="text-gray-700 font-medium text-lg leading-relaxed">
                    Jalan Borobudur Agung Timur IV, Mojolangu,<br />
                    Kec. Lowokwaru, Kota Malang,<br />
                    Jawa Timur 65142
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-8 bg-white/95 backdrop-blur-sm hover:shadow-2xl transition-all border-4 border-white/50">
              <div className="flex items-start">
                <div className="bg-gradient-to-br from-green-700 to-green-800 p-4 rounded-2xl mr-6 flex-shrink-0 shadow-xl">
                  <Mail className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h4 className="text-green-900 mb-3 font-black text-xl">Email</h4>
                  <a href="mailto:cs.urtree@gmail.com" className="text-gray-700 hover:text-green-700 font-medium text-lg">
                    cs.urtree@gmail.com
                  </a>
                </div>
              </div>
            </Card>

            <Card className="p-8 bg-white/95 backdrop-blur-sm hover:shadow-2xl transition-all border-4 border-white/50">
              <div className="flex items-start">
                <div className="bg-gradient-to-br from-green-600 to-green-700 p-4 rounded-2xl mr-6 flex-shrink-0 shadow-xl">
                  <Instagram className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h4 className="text-green-900 mb-3 font-black text-xl">Instagram</h4>
                  <a
                    href="https://instagram.com/pt.urtree"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-green-700 font-medium text-lg"
                  >
                    @pt.urtree
                  </a>
                </div>
              </div>
            </Card>

            {/* Google Maps Embed */}
            <Card className="p-3 bg-white/95 backdrop-blur-sm overflow-hidden border-4 border-white/50">
              <div className="w-full h-64 bg-gray-200 rounded-2xl overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3951.4486389474186!2d112.6303!3d-7.9555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zN8KwNTcnMTkuOCJTIDExMsKwMzcnNDkuMSJF!5e0!3m2!1sen!2sid!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-xl"
                ></iframe>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
