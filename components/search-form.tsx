"use client";

import type React from "react";

import { useState } from "react";
import { Search, Filter, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { AnswerDisplay } from "@/components/answer-display";
import { motion } from "framer-motion";
import API from "@/lib/API";

interface ResponseAPI {
  answer: string;
  source: string;
}

export function SearchForm() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState<ResponseAPI | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!question || !question.trim()) return;
    setIsLoading(true);
    setAnswer(null);
    API.post("/api/qa", { question: question })
      .then((res) => {
        setAnswer(res.data.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  };

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-950">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-3xl space-y-8">
          <div className="space-y-2">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-2xl font-bold tracking-tight text-center hidden lg:block"
            >
              Tanyakan Pertanyaan Hukum Anda
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="text-gray-500 dark:text-gray-400 text-center hidden lg:block"
            >
              Dapatkan jawaban akurat berdasarkan perundang-undangan terbaru di
              Indonesia
            </motion.p>
          </div>
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.7 }}
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500 dark:text-gray-400" />
                <Input
                  type="text"
                  placeholder="Contoh: Apa sanksi untuk pelanggaran lalu lintas?"
                  className="pl-10"
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                />
              </div>
              <div className="flex gap-2 w-full lg:w-auto justify-center items-center">
                <Button type="submit" disabled={!question || isLoading}>
                  {isLoading ? (
                    <div className="flex items-center">
                      <div className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent mr-2" />
                      <span>Mencari...</span>
                    </div>
                  ) : (
                    <div className="flex items-center">
                      <span>Cari</span>
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </div>
                  )}
                </Button>
              </div>
            </div>
          </motion.form>

          {answer && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <AnswerDisplay question={question} data={answer} />
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
