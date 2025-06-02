"use client";

import { motion } from "framer-motion";
import { Target, BookOpen, Users, Award } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function AboutMission() {
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * i,
        duration: 0.5,
      },
    }),
  };

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white/50 dark:bg-gray-950/50 backdrop-blur-sm">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUpVariants}
            custom={0}
            className="space-y-2"
          >
            <div className="inline-block rounded-lg  px-3 py-1 text-base font-bold">
              Visi & Misi
            </div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              Membuat Hukum Lebih Mudah Diakses
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Kami berkomitmen untuk membuat informasi hukum di Indonesia lebih
              mudah diakses dan dipahami oleh semua lapisan masyarakat.
            </p>
          </motion.div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:gap-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUpVariants}
            custom={1}
          >
            <Card className="backdrop-blur-sm bg-white/80 dark:bg-gray-950/80 border-2">
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2">
                  <div className="rounded-full bg-red-100 p-2 dark:bg-red-900/20">
                    <Target className="h-5 w-5 text-red-600 dark:text-red-400" />
                  </div>
                  <CardTitle className="text-xl">Visi</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500 dark:text-gray-400">
                  Menjadi platform terdepan yang menjembatani kesenjangan
                  pemahaman hukum di Indonesia, sehingga setiap warga negara
                  dapat memahami hak dan kewajibannya secara hukum dengan mudah
                  dan akurat.
                </p>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUpVariants}
            custom={2}
          >
            <Card className="backdrop-blur-sm bg-white/80 dark:bg-gray-950/80 border-2">
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2">
                  <div className="rounded-full bg-red-100 p-2 dark:bg-red-900/20">
                    <BookOpen className="h-5 w-5 text-red-600 dark:text-red-400" />
                  </div>
                  <CardTitle className="text-xl">Misi</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-500 dark:text-gray-400">
                  <li>
                    • Menyediakan akses mudah ke informasi perundang-undangan
                    Indonesia
                  </li>
                  <li>
                    • Mengembangkan teknologi AI yang dapat memahami konteks
                    hukum Indonesia
                  </li>
                  <li>
                    • Meningkatkan literasi hukum di kalangan masyarakat umum
                  </li>
                  <li>
                    • Berkolaborasi dengan pakar hukum untuk memastikan akurasi
                    informasi
                  </li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUpVariants}
            custom={3}
          >
            <Card className="backdrop-blur-sm bg-white/80 dark:bg-gray-950/80 border-2">
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2">
                  <div className="rounded-full bg-red-100 p-2 dark:bg-red-900/20">
                    <Users className="h-5 w-5 text-red-600 dark:text-red-400" />
                  </div>
                  <CardTitle className="text-xl">Nilai-Nilai</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-500 dark:text-gray-400">
                  <li>
                    • Akurasi: Memastikan informasi hukum yang tepat dan terkini
                  </li>
                  <li>
                    • Aksesibilitas: Membuat informasi hukum mudah dipahami oleh
                    semua orang
                  </li>
                  <li>
                    • Transparansi: Jelas tentang sumber dan batasan informasi
                    yang kami berikan
                  </li>
                  <li>
                    • Inovasi: Terus mengembangkan teknologi untuk meningkatkan
                    layanan
                  </li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUpVariants}
            custom={4}
          >
            <Card className="backdrop-blur-sm bg-white/80 dark:bg-gray-950/80 border-2">
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2">
                  <div className="rounded-full bg-red-100 p-2 dark:bg-red-900/20">
                    <Award className="h-5 w-5 text-red-600 dark:text-red-400" />
                  </div>
                  <CardTitle className="text-xl">Komitmen</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500 dark:text-gray-400">
                  Kami berkomitmen untuk terus memperbarui database
                  perundang-undangan kami, meningkatkan kemampuan AI kami, dan
                  bekerja sama dengan pakar hukum untuk memastikan bahwa
                  informasi yang kami berikan selalu akurat dan bermanfaat bagi
                  masyarakat Indonesia.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
