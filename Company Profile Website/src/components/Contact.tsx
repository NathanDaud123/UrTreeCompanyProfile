import { useState } from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { MapPin, Mail, Instagram, Send } from "lucide-react";
import { motion } from "motion/react";

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
    <section id="kontak" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-5 py-2 bg-green-100 rounded-full mb-4">
            <span className="text-green-700 font-bold">Kontak Kami</span>
          </div>
          <h2 className="text-gray-900 mb-4">
            <span className="text-green-600">Hubungi</span> Kami
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Ada pertanyaan atau ingin bermitra dengan kami? Jangan ragu untuk menghubungi kami
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="p-8 bg-white shadow-lg border-2 border-gray-100">
              <h3 className="text-gray-900 mb-6">
                Kirim <span className="text-green-600">Pesan</span>
              </h3>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-gray-800 mb-2 font-bold text-sm">
                    Nama Lengkap
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full border-2 border-gray-200 focus:border-green-500 rounded-lg p-3"
                    placeholder="Masukkan nama Anda"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-800 mb-2 font-bold text-sm">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full border-2 border-gray-200 focus:border-green-500 rounded-lg p-3"
                    placeholder="nama@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-gray-800 mb-2 font-bold text-sm">
                    Subjek
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full border-2 border-gray-200 focus:border-green-500 rounded-lg p-3"
                    placeholder="Topik pesan Anda"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-gray-800 mb-2 font-bold text-sm">
                    Pesan
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full min-h-32 border-2 border-gray-200 focus:border-green-500 rounded-lg p-3"
                    placeholder="Tulis pesan Anda di sini..."
                  />
                </div>
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button type="submit" className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white py-6 font-bold rounded-lg shadow-lg">
                    <Send className="mr-2 h-5 w-5" />
                    Kirim Pesan
                  </Button>
                </motion.div>
              </form>
            </Card>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <Card className="p-6 bg-white hover:shadow-lg transition-all border-2 border-gray-100 hover:border-green-500">
              <div className="flex items-start">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="bg-gradient-to-br from-green-500 to-green-600 p-3 rounded-xl mr-4 flex-shrink-0 shadow-lg"
                >
                  <MapPin className="h-6 w-6 text-white" />
                </motion.div>
                <div>
                  <h4 className="text-gray-900 mb-2 font-bold">Alamat Kantor</h4>
                  <p className="text-gray-600 leading-relaxed">
                    Jalan Borobudur Agung Timur IV, Mojolangu,<br />
                    Kec. Lowokwaru, Kota Malang,<br />
                    Jawa Timur 65142
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-white hover:shadow-lg transition-all border-2 border-gray-100 hover:border-green-500">
              <div className="flex items-start">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="bg-gradient-to-br from-green-600 to-green-700 p-3 rounded-xl mr-4 flex-shrink-0 shadow-lg"
                >
                  <Mail className="h-6 w-6 text-white" />
                </motion.div>
                <div>
                  <h4 className="text-gray-900 mb-2 font-bold">Email</h4>
                  <a href="mailto:cs.urtree@gmail.com" className="text-gray-600 hover:text-green-600 font-medium">
                    cs.urtree@gmail.com
                  </a>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-white hover:shadow-lg transition-all border-2 border-gray-100 hover:border-green-500">
              <div className="flex items-start">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="bg-gradient-to-br from-green-500 to-green-600 p-3 rounded-xl mr-4 flex-shrink-0 shadow-lg"
                >
                  <Instagram className="h-6 w-6 text-white" />
                </motion.div>
                <div>
                  <h4 className="text-gray-900 mb-2 font-bold">Instagram</h4>
                  <a
                    href="https://instagram.com/pt.urtree"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-green-600 font-medium"
                  >
                    @pt.urtree
                  </a>
                </div>
              </div>
            </Card>

            {/* Google Maps Embed */}
            <Card className="p-3 bg-white overflow-hidden border-2 border-gray-100">
              <div className="w-full h-64 bg-gray-200 rounded-xl overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3951.4486389474186!2d112.6303!3d-7.9555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zN8KwNTcnMTkuOCJTIDExMsKwMzcnNDkuMSJF!5e0!3m2!1sen!2sid!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-lg"
                ></iframe>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
