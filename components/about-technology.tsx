"use client";

import { motion } from "framer-motion";
import { Database, Server, Cpu, BarChart } from "lucide-react";

export function AboutTechnology() {
  const technologies = [
    {
      icon: <Database className="h-10 w-10 text-red-600 dark:text-red-400" />,
      title: "Database Perundangan",
      description:
        "Database komprehensif yang mencakup UU, PP, Permen, dan peraturan lainnya yang selalu diperbarui secara berkala.",
    },
    {
      icon: <Cpu className="h-10 w-10 text-red-600 dark:text-red-400" />,
      title: "Kecerdasan Buatan",
      description:
        "Model AI canggih yang dilatih khusus untuk memahami konteks hukum Indonesia dan memberikan jawaban yang akurat.",
    },
    {
      icon: <Server className="h-10 w-10 text-red-600 dark:text-red-400" />,
      title: "Pemrosesan Bahasa Alami",
      description:
        "Teknologi NLP yang memungkinkan sistem kami memahami pertanyaan dalam bahasa sehari-hari dan memberikan jawaban yang relevan.",
    },
    {
      icon: <BarChart className="h-10 w-10 text-red-600 dark:text-red-400" />,
      title: "Analisis Data",
      description:
        "Kemampuan analisis data untuk mengidentifikasi tren dan pola dalam pertanyaan hukum yang sering diajukan masyarakat.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white/50 dark:bg-gray-950/50 backdrop-blur-sm">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-2"
          >
            <div className="inline-block rounded-lg  px-3 py-1 text-base font-bold">
              Teknologi
            </div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              Didukung oleh Teknologi Canggih
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              LexBotID menggunakan teknologi terkini untuk memberikan jawaban
              yang akurat dan relevan tentang perundang-undangan Indonesia.
            </p>
          </motion.div>
        </div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-2 lg:gap-12"
        >
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="flex flex-col items-center space-y-4 rounded-lg border-2 p-6 backdrop-blur-sm bg-white/80 dark:bg-gray-950/80"
            >
              <div className="rounded-full bg-red-100 p-3 dark:bg-red-900/20">
                {tech.icon}
              </div>
              <h3 className="text-xl font-bold">{tech.title}</h3>
              <p className="text-center text-gray-500 dark:text-gray-400">
                {tech.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
        <div className="mt-12 flex justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative rounded-lg overflow-hidden border-2 shadow-lg"
          >
            <div className="aspect-video w-full max-w-3xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
              <div className="text-center p-8">
                <h3 className="text-xl font-bold mb-4">
                  Arsitektur Sistem HukumQA
                </h3>
                <div className="w-full h-[300px] flex items-center justify-center">
                  <svg
                    width="600"
                    height="300"
                    viewBox="0 0 600 300"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="max-w-full h-auto"
                  >
                    {/* User */}
                    <rect
                      x="250"
                      y="20"
                      width="100"
                      height="40"
                      rx="5"
                      fill="#FEE2E2"
                      stroke="#EF4444"
                    />
                    <text
                      x="300"
                      y="45"
                      textAnchor="middle"
                      fill="#111827"
                      className="text-sm font-medium"
                    >
                      Pengguna
                    </text>

                    {/* Frontend */}
                    <rect
                      x="250"
                      y="100"
                      width="100"
                      height="40"
                      rx="5"
                      fill="#FEE2E2"
                      stroke="#EF4444"
                    />
                    <text
                      x="300"
                      y="125"
                      textAnchor="middle"
                      fill="#111827"
                      className="text-sm font-medium"
                    >
                      Frontend
                    </text>

                    {/* API */}
                    <rect
                      x="250"
                      y="180"
                      width="100"
                      height="40"
                      rx="5"
                      fill="#FEE2E2"
                      stroke="#EF4444"
                    />
                    <text
                      x="300"
                      y="205"
                      textAnchor="middle"
                      fill="#111827"
                      className="text-sm font-medium"
                    >
                      API
                    </text>

                    {/* AI Engine */}
                    <rect
                      x="100"
                      y="240"
                      width="100"
                      height="40"
                      rx="5"
                      fill="#FEE2E2"
                      stroke="#EF4444"
                    />
                    <text
                      x="150"
                      y="265"
                      textAnchor="middle"
                      fill="#111827"
                      className="text-sm font-medium"
                    >
                      AI Engine
                    </text>

                    {/* Database */}
                    <rect
                      x="400"
                      y="240"
                      width="100"
                      height="40"
                      rx="5"
                      fill="#FEE2E2"
                      stroke="#EF4444"
                    />
                    <text
                      x="450"
                      y="265"
                      textAnchor="middle"
                      fill="#111827"
                      className="text-sm font-medium"
                    >
                      Database
                    </text>

                    {/* Arrows */}
                    <line
                      x1="300"
                      y1="60"
                      x2="300"
                      y2="100"
                      stroke="#6B7280"
                      strokeWidth="2"
                    />
                    <line
                      x1="300"
                      y1="140"
                      x2="300"
                      y2="180"
                      stroke="#6B7280"
                      strokeWidth="2"
                    />
                    <line
                      x1="300"
                      y1="220"
                      x2="300"
                      y2="230"
                      stroke="#6B7280"
                      strokeWidth="2"
                    />
                    <line
                      x1="300"
                      y1="230"
                      x2="150"
                      y2="230"
                      stroke="#6B7280"
                      strokeWidth="2"
                    />
                    <line
                      x1="300"
                      y1="230"
                      x2="450"
                      y2="230"
                      stroke="#6B7280"
                      strokeWidth="2"
                    />
                    <line
                      x1="150"
                      y1="230"
                      x2="150"
                      y2="240"
                      stroke="#6B7280"
                      strokeWidth="2"
                    />
                    <line
                      x1="450"
                      y1="230"
                      x2="450"
                      y2="240"
                      stroke="#6B7280"
                      strokeWidth="2"
                    />

                    {/* Arrow heads */}
                    <polygon points="300,100 296,92 304,92" fill="#6B7280" />
                    <polygon points="300,180 296,172 304,172" fill="#6B7280" />
                    <polygon points="150,240 146,232 154,232" fill="#6B7280" />
                    <polygon points="450,240 446,232 454,232" fill="#6B7280" />
                  </svg>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
