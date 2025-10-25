import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

export function FAQ() {
  const faqData = [
    {
      category: "Pertanyaan Umum (Tentang UrTree)",
      questions: [
        {
          q: "Apa itu PT UrTree Cipta Lestari?",
          a: "PT UrTree Cipta Lestari adalah platform digital inovatif yang menyediakan solusi investasi pohon dan reboisasi berbasis teknologi. Kami menghubungkan individu, perusahaan, dan petani lokal untuk bersama-sama mendukung pelestarian lingkungan secara berkelanjutan. Motto kami adalah \"Miliki Pohon Tanpa Tanah, Panen Tanpa Lelah\".",
        },
        {
          q: "Apakah UrTree legal dan diawasi?",
          a: "Ya. PT UrTree Cipta Lestari telah terdaftar secara resmi dan memiliki Nomor Induk Berusaha (NIB) yang diterbitkan secara resmi.",
        },
        {
          q: "Di mana lokasi operasional UrTree?",
          a: "Kantor operasional kami berlokasi di Jalan Borobudur Agung Timur IV, Mojolangu, Kec. Lowokwaru, Kota Malang, Jawa Timur 65142.",
        },
      ],
    },
    {
      category: "Untuk Individu (MyTree & MyDonation)",
      questions: [
        {
          q: "Bagaimana cara saya mulai berinvestasi pohon di MyTree?",
          a: "Anda dapat memulai dengan mengunduh aplikasi seluler UrTree. Setelah mendaftar dan masuk ke akun, Anda bisa menelusuri halaman investor untuk mencari dan memilih pohon yang ingin diinvestasikan. Selanjutnya, Anda tinggal mengatur jumlah investasi, memilih metode pembayaran, dan menyelesaikan transaksi.",
        },
        {
          q: "Apa bedanya investasi (MyTree) dan donasi (MyDonation)?",
          a: "Fitur MyTree adalah program investasi di mana Anda mendanai pohon (seperti pohon buah atau kayu) yang dikelola petani lokal, dengan potensi untuk mendapatkan bagi hasil dari panennya di masa depan. Sedangkan MyDonation adalah program donasi murni (bisa satu kali atau rutin) untuk mendukung program penghijauan dan aforestasi. Sebagai bentuk apresiasi, Anda akan menerima badge digital di profil Anda.",
        },
        {
          q: "Apakah investasi ini berisiko?",
          a: "Ya, seperti investasi di sektor agribisnis lainnya, ada risiko yang perlu dipertimbangkan. Risiko utamanya adalah potensi kegagalan tanam yang mungkin disebabkan oleh faktor alam. Kami bekerja sama dengan petani mitra dan pakar untuk memitigasi risiko ini. Anda juga dapat menggunakan fitur Konsultasi kami untuk memahami manajemen risiko lebih dalam.",
        },
        {
          q: "Bagaimana saya tahu pohon saya benar-benar ada dan dirawat?",
          a: "Kami menjamin transparansi penuh melalui fitur Tracking. Melalui fitur ini, Anda akan menerima laporan harian (disertai foto) langsung dari petani yang merawat pohon Anda, serta laporan verifikasi bulanan dari tim verifikator independen kami.",
        },
        {
          q: "Kapan saya bisa mendapatkan bagi hasil?",
          a: "Potensi bagi hasil akan didistribusikan setelah pohon yang Anda investasikan melalui MyTree memasuki masa panen. Waktu panen ini bervariasi, tergantung pada jenis pohon (apakah pohon buah atau kayu) yang Anda pilih. Estimasi waktu panen dan detail skema bagi hasil akan dijelaskan secara transparan di deskripsi setiap pohon di dalam aplikasi.",
        },
      ],
    },
    {
      category: "Untuk Perusahaan (CSR)",
      questions: [
        {
          q: "Bagaimana perusahaan kami bisa bermitra dengan UrTree untuk CSR?",
          a: "Kami menyediakan modul khusus untuk program Corporate Social Responsibility (CSR). Perusahaan Anda dapat menghubungi kami langsung melalui formulir di halaman Kontak atau halaman Solusi CSR di website ini. Tim kami akan segera menghubungi Anda untuk menjadwalkan konsultasi dan merancang program penghijauan yang sesuai dengan target ESG perusahaan Anda.",
        },
        {
          q: "Laporan apa yang akan kami dapatkan?",
          a: "Perusahaan Anda akan mendapatkan akses ke modul khusus untuk mengelola dan memantau program. Kami akan menyediakan dokumentasi dampak lingkungan yang kredibel, serta pelaporan ESG (Environmental, Social, and Governance) yang terverifikasi untuk memenuhi kebutuhan akuntabilitas dan publikasi program CSR Anda.",
        },
        {
          q: "Berapa biaya untuk layanan manajemen CSR?",
          a: "Kami menawarkan model biaya yang fleksibel. Opsi pertama adalah melalui biaya manajemen proyek, umumnya sebesar 15% dari total anggaran CSR yang dikelola melalui platform kami. Opsi kedua adalah melalui paket kemitraan tahunan yang dapat disesuaikan dengan kebutuhan dan skala program perusahaan Anda.",
        },
      ],
    },
    {
      category: "Untuk Mitra Petani",
      questions: [
        {
          q: "Apa saja syarat untuk menjadi mitra petani UrTree?",
          a: "Syarat utamanya adalah Anda memiliki atau mengelola lahan yang potensial untuk program penanaman pohon. Tim kami akan melakukan survei dan verifikasi lahan terlebih dahulu. Kami sangat terbuka untuk bermitra baik dengan petani perorangan, Kelompok Tani Hutan (KTH), maupun Koperasi Petani.",
        },
        {
          q: "Apa keuntungan yang saya dapatkan jika bergabung?",
          a: "Keuntungan utamanya adalah Anda akan mendapatkan pendanaan dari para investor (individu/perusahaan) untuk menanam dan merawat pohon di lahan Anda. Ini akan membantu memberdayakan Anda secara ekonomi sekaligus berkontribusi pada pelestarian lingkungan. Selain itu, Anda akan mendapatkan pelatihan mengenai penggunaan aplikasi untuk pelaporan.",
        },
        {
          q: "Apakah saya perlu membayar untuk mendaftar?",
          a: "Tidak. Anda tidak dipungut biaya apapun untuk mendaftar. Posisi Anda adalah sebagai mitra penyedia lahan dan jasa perawatan. Justru Anda yang akan menerima pendanaan dan dukungan dari para investor melalui platform kami.",
        },
        {
          q: "Bagaimana sistem pelaporan harian untuk petani?",
          a: "Anda akan mendapatkan akses \"mode petani\" di dalam aplikasi UrTree. Melalui mode ini, Anda dapat dengan mudah melaporkan kondisi tanaman setiap hari, biasanya dengan mengambil foto terbaru dan memberikan catatan singkat. Laporan ini akan otomatis terkirim ke investor yang mendanai pohon tersebut.",
        },
      ],
    },
  ];

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-block px-6 py-2 bg-green-100 rounded-full mb-6">
            <span className="text-green-800 font-bold text-lg">FAQ</span>
          </div>
          <h2 className="text-green-900 mb-6 font-black">Pertanyaan yang Sering Diajukan</h2>
          <p className="text-gray-700 text-xl font-medium">
            Temukan jawaban atas pertanyaan Anda mengenai UrTree
          </p>
        </div>

        <div className="space-y-12">
          {faqData.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <div className="bg-gradient-to-r from-green-700 to-green-800 text-white p-6 rounded-2xl mb-6">
                <h3 className="font-black text-xl">{category.category}</h3>
              </div>
              <Accordion type="single" collapsible className="space-y-4">
                {category.questions.map((item, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${categoryIndex}-${index}`}
                    className="border-2 border-green-200 rounded-2xl px-8 bg-gradient-to-br from-green-50 to-white hover:border-green-500 transition-all"
                  >
                    <AccordionTrigger className="text-green-900 hover:text-green-700 text-left font-bold text-lg">
                      {item.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-700 font-medium text-base leading-relaxed">
                      {item.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
