"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function AboutFaq() {
  const faqs = [
    {
      question: "Apa itu LexBotID?",
      answer:
        "LexBotID adalah platform question answering berbasis AI yang dirancang untuk membantu masyarakat Indonesia memahami perundang-undangan dengan lebih mudah. Platform ini menggunakan kecerdasan buatan untuk menjawab pertanyaan tentang UU, PP, Permen, dan peraturan lainnya dengan bahasa yang mudah dipahami.",
    },
    {
      question: "Bagaimana cara kerja LexBotID?",
      answer:
        "LexBotID menggunakan teknologi AI dan pemrosesan bahasa alami untuk memahami pertanyaan Anda, kemudian mencari informasi yang relevan dari database perundang-undangan kami. Sistem kami akan menganalisis dan merangkum informasi tersebut untuk memberikan jawaban yang akurat dan mudah dipahami.",
    },
    {
      question:
        "Apakah informasi yang diberikan LexBotID dapat dijadikan sebagai nasihat hukum?",
      answer:
        "Tidak. LexBotID dirancang untuk memberikan informasi umum tentang perundang-undangan Indonesia, bukan sebagai pengganti nasihat hukum profesional. Untuk kasus hukum spesifik, kami menyarankan Anda untuk berkonsultasi dengan pengacara atau ahli hukum yang berkualifikasi.",
    },
    {
      question: "Seberapa akurat jawaban yang diberikan oleh LexBotID?",
      answer:
        "LexBotID berusaha memberikan informasi yang akurat berdasarkan perundang-undangan terbaru. Namun, interpretasi hukum dapat bervariasi dan peraturan dapat berubah. Kami terus memperbarui database kami dan bekerja sama dengan pakar hukum untuk memastikan akurasi informasi yang kami berikan.",
    },
    {
      question: "Apakah LexBotID menyimpan pertanyaan dan data pengguna?",
      answer:
        "Ya, LexBotID menyimpan riwayat percakapan untuk meningkatkan layanan kami dan memungkinkan pengguna untuk melihat kembali pertanyaan mereka sebelumnya. Namun, kami menjaga kerahasiaan data pengguna dan tidak membagikannya kepada pihak ketiga tanpa izin.",
    },
  ];

  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
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
              FAQ
            </div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              Pertanyaan yang Sering Diajukan
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Temukan jawaban untuk pertanyaan umum tentang LexBotID dan layanan
              kami.
            </p>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mx-auto max-w-3xl space-y-4 py-12"
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-500 dark:text-gray-400">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
