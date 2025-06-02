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
import OpenAI from "openai";
import ReactMarkdown from "react-markdown";
type Message = {
  id: string;
  content: string;
  role: "user" | "assistant";
  timestamp: Date;
  isShow?: boolean;
};

export function ChatInterface() {
  const openai = new OpenAI({
    baseURL: "https://openrouter.ai/api/v1",
    apiKey: process.env.NEXT_PUBLIC_DEEP_SEEK_API_KEY as string,
    dangerouslyAllowBrowser: true,
  });
  const [contextMessage, setContextMessage] = useState<Message[]>([
    {
      id: Date.now().toString(),
      content: `
      Anda adalah pakar hukum yang ahli dalam sistem hukum Indonesia (pidana, perdata, tata negara, dll.) dengan kemampuan merujuk pada UUD 1945, KUHP, KUHPer, UU sektoral, yurisprudensi MA/MK, serta peraturan turunannya.

      Ketentuan jawaban saya:
      - Jawablah semua pertanyaan dalam bahasa Indonesia yang formal dan jelas.
      - Maksimal 3 kalimat dengan bahasa formal namun mudah dipahami.
      - Sebutkan dasar hukum (pasal/UU/yurisprudensi) jika relevan.
      - Bersifat netral – hindari opini pribadi kecuali diminta sebagai analisis hukum.
      - Peringatkan pengguna jika pertanyaan membutuhkan konsultasi langsung dengan ahli hukum.
      - Jika pertanyaan di luar konteks hukum, jawab 'Saya tidak tahu'  dan sarankan konsultasi ke ahli terkait.
      - jangan menyertakan kata-kata seperti ini 'berikut adalah jawaban dalam format yang diminta:' atau yang sejenisnya, cukup jawab dengan jelas

      (Contoh: 'Pasal 1320 KUHPer mengatur syarat sah perjanjian: sepakat, cakap, objek tertentu, dan sebab yang halal.')
      `,
      role: "assistant",
      isShow: false,
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [botId, setBotId] = useState<string>("");

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
    // console.log(contextMessage);
  }, [contextMessage]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    // setIsStreamStop(false);

    const userMessage: Message = {
      id: Date.now().toString(),
      content: input,
      role: "user",
      timestamp: new Date(),
    };

    // Tambahkan pesan user ke chat
    setContextMessage((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    try {
      const stream = await openai.chat.completions.create({
        stream: true,
        model: "deepseek/deepseek-chat-v3-0324:free",
        messages: [
          ...contextMessage.map((msg) => ({
            role: msg.role,
            content: msg.content,
          })),
          {
            role: "user",
            content: input,
          },
        ],
      });

      let assistantReply = "";
      const assistantId = Date.now().toString();
      setBotId(assistantId);
      // Tambahkan placeholder pesan assistant
      setContextMessage((prev) => [
        ...prev,
        {
          id: assistantId,
          content: "",
          role: "assistant",
          timestamp: new Date(),
        },
      ]);

      for await (const chunk of stream) {
        const content = chunk.choices[0]?.delta?.content || "";
        if (content) {
          assistantReply += content;

          setContextMessage((prev) =>
            prev.map((msg) =>
              msg.id === assistantId ? { ...msg, content: assistantReply } : msg
            )
          );
        }
      }
    } catch (error) {
      console.error("Error:", error);
      // Tambahkan pesan error ke chat
      setContextMessage((prev) => [
        ...prev,
        {
          id: Date.now().toString(),
          content: "Terjadi kesalahan saat memproses permintaan.",
          role: "assistant",
          timestamp: new Date(),
        },
      ]);
    }

    setIsTyping(false);
  };

  return (
    <Card className="border-2 shadow-lg overflow-hidden relative backdrop-blur-sm bg-white/80 dark:bg-gray-950/80 no-scrollbar">
      <div className="h-[600px] flex flex-col">
        <div className="flex-1 overflow-y-auto p-6 no-scrollbar">
          <AnimatePresence initial={false}>
            {contextMessage.map((message) =>
              message.isShow !== false ? (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className={cn(
                    "flex",
                    message.role === "user"
                      ? "justify-end py-5"
                      : "justify-start py-5"
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
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="h-4 w-4"
                            >
                              <path d="M12 8V4H8" />
                              <rect width="16" height="12" x="4" y="8" rx="2" />
                              <path d="M2 14h2" />
                              <path d="M20 14h2" />
                              <path d="M15 13v2" />
                              <path d="M9 13v2" />
                            </svg>
                          </AvatarFallback>
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
                      <ReactMarkdown>{message.content}</ReactMarkdown>
                    </div>
                  </div>
                </motion.div>
              ) : null
            )}
            {isTyping && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex justify-start"
              >
                <div className="flex gap-3 max-w-[80%]">
                  <Avatar className="h-8 w-8 bg-red-100 dark:bg-red-900/20 opacity-0">
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
