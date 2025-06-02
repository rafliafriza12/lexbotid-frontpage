"use client";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function RecentQuestions() {
  // Simulasi data pertanyaan terbaru
  const recentQuestions = [
    {
      id: 1,
      question: "Apa sanksi untuk pelanggaran lalu lintas?",
      category: "UU",
      views: 1245,
    },
    {
      id: 2,
      question: "Bagaimana prosedur pendirian PT di Indonesia?",
      category: "PP",
      views: 987,
    },
    {
      id: 3,
      question: "Apa syarat untuk mengajukan izin usaha mikro?",
      category: "Permen",
      views: 756,
    },
    {
      id: 4,
      question: "Bagaimana aturan tentang hak cipta di Indonesia?",
      category: "UU",
      views: 632,
    },
    {
      id: 5,
      question: "Apa saja hak-hak pekerja menurut UU Ketenagakerjaan?",
      category: "UU",
      views: 521,
    },
  ];

  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-2xl font-bold tracking-tighter md:text-4xl/tight"
            >
              Pertanyaan Populer
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="max-w-[900px] text-gray-500 text-sm/relaxed md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400"
            >
              Lihat pertanyaan yang sering ditanyakan oleh pengguna lain
            </motion.p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2">
          {recentQuestions.map((q) => (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card key={q.id} className="hover:shadow-md transition-shadow">
                <CardHeader className="p-4 pb-2">
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-lg font-medium">
                      {q.question}
                    </CardTitle>
                    <Badge
                      variant={
                        q.category === "UU"
                          ? "default"
                          : q.category === "PP"
                          ? "secondary"
                          : "outline"
                      }
                      className="ml-2"
                    >
                      {q.category}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="p-4 pt-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {q.views} kali dilihat
                    </span>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-red-600 dark:text-red-400"
                    >
                      Lihat Jawaban
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        <div className="flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Button variant="outline" className="gap-1">
              Lihat Lebih Banyak
              <ArrowRight className="h-4 w-4" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
