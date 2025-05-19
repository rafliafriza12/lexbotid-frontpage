"use client";

import type React from "react";

import { useState, useRef, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Send, Bot, User, Paperclip, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

type Message = {
  id: string;
  content: string;
  role: "user" | "assistant";
  timestamp: Date;
  sources?: {
    title: string;
    type: string;
  }[];
};

export function ChatInterface() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      content:
        "Selamat datang di Asisten Hukum AI. Apa yang ingin Anda tanyakan tentang perundang-undangan Indonesia?",
      role: "assistant",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Contoh respons untuk simulasi
  const exampleResponses = [
    {
      content:
        "Berdasarkan UU No. 13 Tahun 2003 tentang Ketenagakerjaan, hak-hak pekerja meliputi hak atas upah yang layak, jam kerja yang wajar, istirahat dan cuti, jaminan sosial, dan keselamatan kerja.",
      sources: [
        { title: "UU No. 13 Tahun 2003", type: "uu" },
        { title: "PP No. 78 Tahun 2015", type: "pp" },
      ],
    },
    {
      content:
        "Menurut UU No. 1 Tahun 1974 jo. UU No. 16 Tahun 2019 tentang Perkawinan, syarat usia minimal untuk menikah adalah 19 tahun baik untuk pria maupun wanita.",
      sources: [
        { title: "UU No. 1 Tahun 1974", type: "uu" },
        { title: "UU No. 16 Tahun 2019", type: "uu" },
      ],
    },
    {
      content:
        "Berdasarkan UU No. 40 Tahun 2007 tentang Perseroan Terbatas, untuk mendirikan PT diperlukan minimal 2 orang pendiri, akta notaris, modal dasar minimal, dan pengesahan dari Kementerian Hukum dan HAM.",
      sources: [
        { title: "UU No. 40 Tahun 2007", type: "uu" },
        { title: "Permen Hukum dan HAM No. 4 Tahun 2014", type: "permen" },
      ],
    },
  ];

  useEffect(() => {
    // scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      content: input,
      role: "user",
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);
    scrollToBottom();

    // Simulate AI response after delay
    setTimeout(() => {
      const randomResponse =
        exampleResponses[Math.floor(Math.random() * exampleResponses.length)];
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: randomResponse.content,
        role: "assistant",
        timestamp: new Date(),
        sources: randomResponse.sources,
      };
      setMessages((prev) => [...prev, botMessage]);
      setIsTyping(false);
      scrollToBottom();
    }, 1500);
  };

  return (
    <Card className="border-2 shadow-lg overflow-hidden relative backdrop-blur-sm bg-white/80 dark:bg-gray-950/80 no-scrollbar">
      <div className="h-[600px] flex flex-col">
        <div className="flex-1 overflow-y-auto p-6 no-scrollbar">
          <AnimatePresence initial={false}>
            {messages.map((message) => (
              <motion.div
                key={message.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className={cn(
                  "flex",
                  message.role === "user" ? "justify-end" : "justify-start"
                )}
              >
                <div
                  className={cn(
                    "flex gap-3 max-w-[80%]",
                    message.role === "user" ? "flex-row-reverse" : "flex-row"
                  )}
                >
                  <Avatar
                    className={cn(
                      "h-8 w-8",
                      message.role === "assistant" &&
                        "bg-red-100 dark:bg-red-900/20"
                    )}
                  >
                    {message.role === "assistant" ? (
                      <>
                        <AvatarFallback className="bg-red-100 text-red-600 dark:bg-red-900/20 dark:text-red-400">
                          <Bot className="h-4 w-4" />
                        </AvatarFallback>
                        <AvatarImage src="/placeholder.svg?height=32&width=32" />
                      </>
                    ) : (
                      <AvatarFallback className="bg-blue-100 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400">
                        <User className="h-4 w-4" />
                      </AvatarFallback>
                    )}
                  </Avatar>
                  <div
                    className={cn(
                      "rounded-lg p-4",
                      message.role === "user"
                        ? "bg-blue-500 text-white dark:bg-blue-600"
                        : "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-100"
                    )}
                  >
                    <p className="text-sm sm:text-base">{message.content}</p>
                    {message.sources && (
                      <div className="mt-2 pt-2 border-t border-gray-200 dark:border-gray-700">
                        <p className="text-xs text-gray-600 dark:text-gray-400 mb-1">
                          Sumber:
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {message.sources.map((source, index) => (
                            <Badge
                              key={index}
                              variant={
                                source.type === "uu"
                                  ? "default"
                                  : source.type === "pp"
                                  ? "secondary"
                                  : "outline"
                              }
                              className="text-xs animate-fade-in"
                            >
                              {source.title}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
            {isTyping && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex justify-start"
              >
                <div className="flex gap-3 max-w-[80%]">
                  <Avatar className="h-8 w-8 bg-red-100 dark:bg-red-900/20">
                    <AvatarFallback className="bg-red-100 text-red-600 dark:bg-red-900/20 dark:text-red-400">
                      <Bot className="h-4 w-4" />
                    </AvatarFallback>
                  </Avatar>
                  <div className="rounded-lg p-4 bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-100">
                    <div className="flex space-x-1">
                      <motion.div
                        className="h-2 w-2 rounded-full bg-gray-400 dark:bg-gray-500"
                        animate={{ y: [0, -5, 0] }}
                        transition={{
                          repeat: Number.POSITIVE_INFINITY,
                          duration: 0.8,
                          delay: 0,
                        }}
                      />
                      <motion.div
                        className="h-2 w-2 rounded-full bg-gray-400 dark:bg-gray-500"
                        animate={{ y: [0, -5, 0] }}
                        transition={{
                          repeat: Number.POSITIVE_INFINITY,
                          duration: 0.8,
                          delay: 0.2,
                        }}
                      />
                      <motion.div
                        className="h-2 w-2 rounded-full bg-gray-400 dark:bg-gray-500"
                        animate={{ y: [0, -5, 0] }}
                        transition={{
                          repeat: Number.POSITIVE_INFINITY,
                          duration: 0.8,
                          delay: 0.4,
                        }}
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          <div
            className="mt-24 w-full h-10 bg-transparent"
            ref={messagesEndRef}
          />
        </div>

        <div className="border-t p-4 bg-white dark:bg-gray-950">
          <form onSubmit={handleSubmit} className="flex gap-2">
            <Button
              type="button"
              size="icon"
              variant="outline"
              className="rounded-full h-10 w-10 flex-shrink-0 animate-pulse"
            >
              <Sparkles className="h-4 w-4 text-yellow-500" />
            </Button>
            <Button
              type="button"
              size="icon"
              variant="outline"
              className="rounded-full h-10 w-10 flex-shrink-0"
            >
              <Paperclip className="h-4 w-4" />
            </Button>
            <div className="relative flex-1">
              <Input
                placeholder="Ketik pertanyaan hukum Anda..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="pr-10 rounded-full"
              />
            </div>
            <Button
              type="submit"
              className="rounded-full"
              disabled={!input.trim() || isTyping}
            >
              Kirim
            </Button>
          </form>
        </div>
      </div>
    </Card>
  );
}
