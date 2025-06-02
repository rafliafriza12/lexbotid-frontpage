"use client";

import { useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  BookOpen,
  FileText,
  ExternalLink,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";

interface AnswerDisplayProps {
  question: string;
  data: {
    answer: string;
    source: string;
  };
}

export function AnswerDisplay({ question, data }: AnswerDisplayProps) {
  return (
    <Card className="w-full border-2 border-red-100 dark:border-red-900/20 shadow-lg">
      <CardHeader className="bg-red-50 dark:bg-red-900/10">
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-xl">
              Jawaban untuk pertanyaan Anda
            </CardTitle>
            <CardDescription className="mt-2 text-gray-600 dark:text-gray-400">
              {question}
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="space-y-4">
          <p className="text-lg">{data.answer}</p>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between border-t bg-gray-50 dark:bg-gray-900/50 px-6 py-4">
        <h1>{data.source}</h1>
      </CardFooter>
    </Card>
  );
}
