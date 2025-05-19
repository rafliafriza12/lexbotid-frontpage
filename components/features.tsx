import { BookOpen, Scale, Search, Clock, Filter, Shield } from "lucide-react";

export function Features() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold tracking-tighter md:text-4xl/tight">
              Temukan Informasi Hukum dengan Mudah
            </h2>
            <p className="max-w-[900px] text-gray-500 text-sm/relaxed md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Platform kami menyediakan akses cepat dan akurat ke informasi
              perundang-undangan Indonesia
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
          <div className="flex flex-col items-center space-y-3 rounded-lg border p-6 shadow-sm">
            <div className="rounded-full bg-red-100 p-3 dark:bg-red-900/20">
              <Search className="h-6 w-6 text-red-600 dark:text-red-400" />
            </div>
            <h3 className="text-lg lg:text-xl font-bold">Pencarian Cerdas</h3>
            <p className="text-center text-sm lg:text-base text-gray-500 dark:text-gray-400">
              Temukan jawaban dari pertanyaan hukum Anda dengan bahasa
              sehari-hari
            </p>
          </div>
          <div className="flex flex-col items-center space-y-3 rounded-lg border p-6 shadow-sm">
            <div className="rounded-full bg-red-100 p-3 dark:bg-red-900/20">
              <BookOpen className="h-6 w-6 text-red-600 dark:text-red-400" />
            </div>
            <h3 className="text-lg lg:text-xl font-bold">Database Lengkap</h3>
            <p className="text-center text-sm lg:text-base text-gray-500 dark:text-gray-400">
              Mencakup UU, PP, Permen, dan peraturan lainnya yang selalu
              diperbarui
            </p>
          </div>
          <div className="flex flex-col items-center space-y-3 rounded-lg border p-6 shadow-sm">
            <div className="rounded-full bg-red-100 p-3 dark:bg-red-900/20">
              <Scale className="h-6 w-6 text-red-600 dark:text-red-400" />
            </div>
            <h3 className="text-lg lg:text-xl font-bold">Analisis Hukum</h3>
            <p className="text-center text-sm lg:text-base text-gray-500 dark:text-gray-400">
              Dapatkan analisis komprehensif dengan referensi ke pasal-pasal
              terkait
            </p>
          </div>
          <div className="flex flex-col items-center space-y-3 rounded-lg border p-6 shadow-sm">
            <div className="rounded-full bg-red-100 p-3 dark:bg-red-900/20">
              <Clock className="h-6 w-6 text-red-600 dark:text-red-400" />
            </div>
            <h3 className="text-lg lg:text-xl font-bold">Selalu Terkini</h3>
            <p className="text-center text-sm lg:text-base text-gray-500 dark:text-gray-400">
              Database kami diperbarui secara berkala mengikuti perubahan
              perundangan
            </p>
          </div>
          <div className="flex flex-col items-center space-y-3 rounded-lg border p-6 shadow-sm">
            <div className="rounded-full bg-red-100 p-3 dark:bg-red-900/20">
              <Filter className="h-6 w-6 text-red-600 dark:text-red-400" />
            </div>
            <h3 className="text-lg lg:text-xl font-bold">Filter Kategori</h3>
            <p className="text-center text-sm lg:text-base text-gray-500 dark:text-gray-400">
              Cari berdasarkan jenis perundangan untuk hasil yang lebih spesifik
            </p>
          </div>
          <div className="flex flex-col items-center space-y-3 rounded-lg border p-6 shadow-sm">
            <div className="rounded-full bg-red-100 p-3 dark:bg-red-900/20">
              <Shield className="h-6 w-6 text-red-600 dark:text-red-400" />
            </div>
            <h3 className="text-lg lg:text-xl font-bold">Sumber Terpercaya</h3>
            <p className="text-center text-sm lg:text-base text-gray-500 dark:text-gray-400">
              Informasi bersumber langsung dari dokumen resmi pemerintah
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
