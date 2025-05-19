"use client";

import type React from "react";

import { useState } from "react";
import { Search, Filter, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { AnswerDisplay } from "@/components/answer-display";

export function SearchForm() {
  const [question, setQuestion] = useState("");
  const [category, setCategory] = useState("all");
  const [showAnswer, setShowAnswer] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!question) return;

    setIsLoading(true);
    // Simulasi loading
    setTimeout(() => {
      setIsLoading(false);
      setShowAnswer(true);
    }, 1500);
  };

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-950">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-3xl space-y-8">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold tracking-tight text-center hidden lg:block">
              Tanyakan Pertanyaan Hukum Anda
            </h2>
            <p className="text-gray-500 dark:text-gray-400 text-center hidden lg:block">
              Dapatkan jawaban akurat berdasarkan perundang-undangan terbaru di
              Indonesia
            </p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
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
                <Select value={category} onValueChange={setCategory}>
                  <SelectTrigger className="w-[180px]">
                    <Filter className="mr-2 h-4 w-4" />
                    <SelectValue placeholder="Kategori" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Semua Perundangan</SelectItem>
                    <SelectItem value="uu">Undang-Undang</SelectItem>
                    <SelectItem value="pp">Peraturan Pemerintah</SelectItem>
                    <SelectItem value="permen">Peraturan Menteri</SelectItem>
                    <SelectItem value="perda">Peraturan Daerah</SelectItem>
                  </SelectContent>
                </Select>
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
          </form>

          {showAnswer && (
            <AnswerDisplay question={question} category={category} />
          )}
        </div>
      </div>
    </section>
  );
}
