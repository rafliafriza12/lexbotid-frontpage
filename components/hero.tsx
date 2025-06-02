"use client";
import { ScaleIcon as Scales } from "lucide-react";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="w-full pt-12 md:py-24 lg:py-32 bg-gradient-to-b from-red-50 to-white dark:from-gray-900 dark:to-gray-950">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block rounded-lg bg-red-100 dark:bg-transparent p-2 mb-4"
          >
            <Scales className="h-20 w-20 text-red-600 dark:text-red-400" />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-2xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl"
          >
            Cari Tahu Tentang Hukum Indonesia
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="max-w-[700px] text-gray-500 text-sm md:text-xl dark:text-gray-400"
          >
            Platform cerdas untuk menjawab pertanyaan Anda seputar UU, PP,
            Perpres, Perppu, Perban, Perda dan Permen dengan cepat dan akurat.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
