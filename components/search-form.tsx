"use client";

import type React from "react";

import { useState } from "react";
import { Search, Filter, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { AnswerDisplay } from "@/components/answer-display";
import { motion } from "framer-motion";
import API from "@/lib/API";
import Link from "next/link";

interface ResponseAPI {
  answer: string;
  source: string;
}

export function SearchForm() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState<ResponseAPI | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState<Boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!question || !question.trim()) return;
    setIsLoading(true);
    setIsError(false);
    setErrorMessage("");
    setAnswer(null);
    API.post("/api/qa", { question: question })
      .then((res) => {
        setAnswer(res.data.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
        setIsError(true);
        setErrorMessage(err.response.data.message);
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
              <div className="flex gap-2 w-full justify-center items-center">
                <Button>
                  <Link href={"/chatbot"}>
                    {isLoading ? (
                      <div className="flex items-center">
                        <div className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent mr-2" />
                        <span>Mencari...</span>
                      </div>
                    ) : (
                      <div className="flex items-center">
                        <span>Mulai Bertanya</span>
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </div>
                    )}
                  </Link>
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

          {isError && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-red-500">{errorMessage}</p>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
