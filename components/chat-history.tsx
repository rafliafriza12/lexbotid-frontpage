"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  Clock,
  Tag,
  Download,
  Trash2,
  MessageSquare,
  ArrowRight,
} from "lucide-react";
import { format, subDays } from "date-fns";
import { id } from "date-fns/locale";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useRef } from "react";

// Tipe data untuk riwayat chat
type ChatMessage = {
  id: string;
  content: string;
  role: "user" | "assistant";
  timestamp: Date;
};

type ChatSession = {
  id: string;
  title: string;
  preview: string;
  messages: ChatMessage[];
  timestamp: Date;
  category: string;
  tags: string[];
  starred?: boolean;
};

export function ChatHistory() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedPeriod, setSelectedPeriod] = useState("all");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedChat, setSelectedChat] = useState<ChatSession | null>(null);
  const [filteredSessions, setFilteredSessions] = useState<ChatSession[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [isFirstSelectChat, setIsFirstSelectChat] = useState<boolean>(true);

  // Data contoh untuk riwayat chat
  const chatSessions: ChatSession[] = [
    {
      id: "1",
      title: "Sanksi Pelanggaran Lalu Lintas",
      preview: "Apa sanksi untuk pelanggaran lalu lintas?",
      timestamp: subDays(new Date(), 1),
      category: "Hukum Pidana",
      tags: ["Lalu Lintas", "Sanksi", "UU No. 22 Tahun 2009"],
      messages: [
        {
          id: "1-1",
          content: "Apa sanksi untuk pelanggaran lalu lintas?",
          role: "user",
          timestamp: subDays(new Date(), 1),
        },
        {
          id: "1-2",
          content:
            "Berdasarkan UU No. 22 Tahun 2009 tentang Lalu Lintas dan Angkutan Jalan, sanksi pelanggaran lalu lintas bervariasi tergantung jenis pelanggarannya, mulai dari denda administratif hingga pidana kurungan.",
          role: "assistant",
          timestamp: subDays(new Date(), 1),
        },
        {
          id: "1-3",
          content: "Berapa denda untuk tidak menggunakan helm?",
          role: "user",
          timestamp: subDays(new Date(), 1),
        },
        {
          id: "1-4",
          content:
            "Berdasarkan Pasal 291 UU No. 22 Tahun 2009, pengendara sepeda motor yang tidak menggunakan helm standar nasional dapat dikenakan denda maksimal Rp250.000.",
          role: "assistant",
          timestamp: subDays(new Date(), 1),
        },
      ],
    },
    {
      id: "2",
      title: "Prosedur Pendirian PT",
      preview: "Bagaimana prosedur pendirian PT di Indonesia?",
      timestamp: subDays(new Date(), 3),
      category: "Hukum Bisnis",
      tags: ["PT", "Pendirian Usaha", "UU No. 40 Tahun 2007"],
      starred: false,
      messages: [
        {
          id: "2-1",
          content: "Bagaimana prosedur pendirian PT di Indonesia?",
          role: "user",
          timestamp: subDays(new Date(), 3),
        },
        {
          id: "2-2",
          content:
            "Berdasarkan UU No. 40 Tahun 2007 tentang Perseroan Terbatas, untuk mendirikan PT diperlukan minimal 2 orang pendiri, akta notaris, modal dasar minimal, dan pengesahan dari Kementerian Hukum dan HAM.",
          role: "assistant",
          timestamp: subDays(new Date(), 3),
        },
      ],
    },
    {
      id: "3",
      title: "Izin Usaha Mikro",
      preview: "Apa syarat untuk mengajukan izin usaha mikro?",
      timestamp: subDays(new Date(), 5),
      category: "Hukum Bisnis",
      tags: ["UMKM", "Izin Usaha", "PP No. 7 Tahun 2021"],
      messages: [
        {
          id: "3-1",
          content: "Apa syarat untuk mengajukan izin usaha mikro?",
          role: "user",
          timestamp: subDays(new Date(), 5),
        },
        {
          id: "3-2",
          content:
            "Berdasarkan PP No. 7 Tahun 2021, syarat mengajukan izin usaha mikro adalah memiliki NIK, mengisi formulir permohonan, dan melampirkan surat pernyataan memenuhi standar usaha.",
          role: "assistant",
          timestamp: subDays(new Date(), 5),
        },
      ],
    },
    {
      id: "4",
      title: "Hak Cipta di Indonesia",
      preview: "Bagaimana aturan tentang hak cipta di Indonesia?",
      timestamp: subDays(new Date(), 7),
      category: "Hukum Kekayaan Intelektual",
      tags: ["Hak Cipta", "HAKI", "UU No. 28 Tahun 2014"],
      starred: false,
      messages: [
        {
          id: "4-1",
          content: "Bagaimana aturan tentang hak cipta di Indonesia?",
          role: "user",
          timestamp: subDays(new Date(), 7),
        },
        {
          id: "4-2",
          content:
            "Berdasarkan UU No. 28 Tahun 2014 tentang Hak Cipta, perlindungan hak cipta di Indonesia berlaku selama hidup pencipta ditambah 70 tahun setelah pencipta meninggal dunia.",
          role: "assistant",
          timestamp: subDays(new Date(), 7),
        },
      ],
    },
    {
      id: "5",
      title: "Hak Pekerja",
      preview: "Apa saja hak-hak pekerja menurut UU Ketenagakerjaan?",
      timestamp: subDays(new Date(), 10),
      category: "Hukum Ketenagakerjaan",
      tags: ["Pekerja", "Hak", "UU No. 13 Tahun 2003"],
      starred: false,
      messages: [
        {
          id: "5-1",
          content: "Apa saja hak-hak pekerja menurut UU Ketenagakerjaan?",
          role: "user",
          timestamp: subDays(new Date(), 10),
        },
        {
          id: "5-2",
          content:
            "Berdasarkan UU No. 13 Tahun 2003 tentang Ketenagakerjaan, hak-hak pekerja meliputi hak atas upah yang layak, jam kerja yang wajar, istirahat dan cuti, jaminan sosial, dan keselamatan kerja.",
          role: "assistant",
          timestamp: subDays(new Date(), 10),
        },
      ],
    },
    {
      id: "6",
      title: "Perceraian dan Harta Gono-Gini",
      preview: "Bagaimana pembagian harta gono-gini dalam perceraian?",
      timestamp: subDays(new Date(), 14),
      category: "Hukum Perdata",
      tags: ["Perceraian", "Harta Gono-Gini", "KUHPerdata"],
      messages: [
        {
          id: "6-1",
          content: "Bagaimana pembagian harta gono-gini dalam perceraian?",
          role: "user",
          timestamp: subDays(new Date(), 14),
        },
        {
          id: "6-2",
          content:
            "Berdasarkan KUHPerdata dan UU No. 1 Tahun 1974 tentang Perkawinan, harta gono-gini (harta bersama) dalam perceraian pada prinsipnya dibagi dua sama rata antara suami dan istri.",
          role: "assistant",
          timestamp: subDays(new Date(), 14),
        },
      ],
    },
  ];

  const onSelectHistory = (selected: ChatSession) => {
    setSelectedChat(selected);

    if (isFirstSelectChat)
      setTimeout(() => {
        setIsFirstSelectChat(false);
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
      }, 200);
    else messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Filter chat sessions berdasarkan pencarian dan filter
  useEffect(() => {
    setIsLoading(true);

    // Simulasi loading
    setTimeout(() => {
      let filtered = [...chatSessions];

      // Filter berdasarkan pencarian
      if (searchQuery) {
        filtered = filtered.filter(
          (session) =>
            session.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            session.preview.toLowerCase().includes(searchQuery.toLowerCase()) ||
            session.tags.some((tag) =>
              tag.toLowerCase().includes(searchQuery.toLowerCase())
            )
        );
      }

      // Filter berdasarkan periode
      if (selectedPeriod !== "all") {
        const now = new Date();
        let cutoffDate = now;

        switch (selectedPeriod) {
          case "today":
            cutoffDate = new Date(now.setHours(0, 0, 0, 0));
            break;
          case "week":
            cutoffDate = subDays(now, 7);
            break;
          case "month":
            cutoffDate = subDays(now, 30);
            break;
        }

        filtered = filtered.filter(
          (session) => session.timestamp >= cutoffDate
        );
      }

      // Filter berdasarkan kategori
      if (selectedCategory !== "all") {
        filtered = filtered.filter(
          (session) => session.category === selectedCategory
        );
      }

      setFilteredSessions(filtered);
      setIsLoading(false);
    }, 500);
  }, [searchQuery, selectedPeriod, selectedCategory]);

  // Kategori unik untuk filter
  //   const categories = Array.from(
  //     new Set(chatSessions.map((session) => session.category))
  //   );

  return (
    <div className="space-y-6">
      <Card className="backdrop-blur-sm bg-white/80 dark:bg-gray-950/80 border-2">
        <CardHeader className="pb-3">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500 dark:text-gray-400" />
              <Input
                type="text"
                placeholder="Cari riwayat percakapan..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="all" className="w-full">
            <TabsContent value="all" className="mt-0">
              <div className="space-y-4">
                {isLoading ? (
                  <div className="flex justify-center items-center py-12">
                    <div className="flex flex-col items-center gap-2">
                      <div className="h-8 w-8 animate-spin rounded-full border-4 border-gray-200 border-t-red-600"></div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Memuat riwayat percakapan...
                      </p>
                    </div>
                  </div>
                ) : filteredSessions.length === 0 ? (
                  <div className="flex flex-col items-center justify-center py-12 text-center">
                    <div className="rounded-full bg-gray-100 p-3 dark:bg-gray-800">
                      <Search className="h-6 w-6 text-gray-400" />
                    </div>
                    <h3 className="mt-4 text-lg font-semibold">
                      Tidak ada hasil
                    </h3>
                    <p className="mt-2 text-sm text-gray-500 dark:text-gray-400 max-w-sm">
                      Tidak ditemukan riwayat percakapan yang sesuai dengan
                      kriteria pencarian Anda.
                    </p>
                  </div>
                ) : (
                  <AnimatePresence>
                    {filteredSessions.map((session) => (
                      <motion.div
                        key={session.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Card
                          className={cn(
                            "cursor-pointer transition-all hover:shadow-md",
                            selectedChat?.id === session.id &&
                              "border-red-200 dark:border-red-800"
                          )}
                          onClick={() => onSelectHistory(session)}
                        >
                          <CardHeader className="p-4 pb-2">
                            <div className="flex justify-between items-start">
                              <div className="flex items-center gap-2">
                                <CardTitle className="text-lg font-medium">
                                  {session.title}
                                </CardTitle>
                              </div>
                              <Badge variant="outline" className="ml-2">
                                {session.category}
                              </Badge>
                            </div>
                            <CardDescription className="mt-1 line-clamp-1">
                              {session.preview}
                            </CardDescription>
                          </CardHeader>
                          <CardContent className="p-4 pt-0">
                            <div className="flex flex-wrap gap-2 mt-2">
                              {session.tags.map((tag) => (
                                <Badge
                                  key={tag}
                                  variant="secondary"
                                  className="text-xs"
                                >
                                  {tag}
                                </Badge>
                              ))}
                            </div>
                          </CardContent>
                          <CardFooter className="p-4 pt-0 flex justify-between items-center text-sm text-gray-500 dark:text-gray-400">
                            <div className="flex items-center gap-1">
                              <Clock className="h-3 w-3" />
                              <span>
                                {format(session.timestamp, "d MMMM yyyy", {
                                  locale: id,
                                })}
                              </span>
                            </div>
                            <div className="flex items-center gap-1">
                              <MessageSquare className="h-3 w-3" />
                              <span>{session.messages.length} pesan</span>
                            </div>
                          </CardFooter>
                        </Card>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                )}
              </div>
            </TabsContent>
            <TabsContent value="starred" className="mt-0">
              <div className="space-y-4">
                {isLoading ? (
                  <div className="flex justify-center items-center py-12">
                    <div className="flex flex-col items-center gap-2">
                      <div className="h-8 w-8 animate-spin rounded-full border-4 border-gray-200 border-t-red-600"></div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Memuat riwayat percakapan...
                      </p>
                    </div>
                  </div>
                ) : filteredSessions.filter((s) => s.starred).length === 0 ? (
                  <div className="flex flex-col items-center justify-center py-12 text-center">
                    <div className="rounded-full bg-gray-100 p-3 dark:bg-gray-800">
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
                        className="h-6 w-6 text-gray-400"
                      >
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                    </div>
                    <h3 className="mt-4 text-lg font-semibold">
                      Tidak ada percakapan berbintang
                    </h3>
                    <p className="mt-2 text-sm text-gray-500 dark:text-gray-400 max-w-sm">
                      Anda belum menandai percakapan apa pun dengan bintang.
                    </p>
                  </div>
                ) : (
                  <AnimatePresence>
                    {filteredSessions
                      .filter((s) => s.starred)
                      .map((session) => (
                        <motion.div
                          key={session.id}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                        >
                          <Card
                            className={cn(
                              "cursor-pointer transition-all hover:shadow-md",
                              selectedChat?.id === session.id &&
                                "border-red-200 dark:border-red-800"
                            )}
                            onClick={() => onSelectHistory(session)}
                          >
                            <CardHeader className="p-4 pb-2">
                              <div className="flex justify-between items-start">
                                <div className="flex items-center gap-2">
                                  <CardTitle className="text-lg font-medium">
                                    {session.title}
                                  </CardTitle>
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="h-4 w-4 text-yellow-500"
                                  >
                                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                  </svg>
                                </div>
                                <Badge variant="outline" className="ml-2">
                                  {session.category}
                                </Badge>
                              </div>
                              <CardDescription className="mt-1 line-clamp-1">
                                {session.preview}
                              </CardDescription>
                            </CardHeader>
                            <CardContent className="p-4 pt-0">
                              <div className="flex flex-wrap gap-2 mt-2">
                                {session.tags.map((tag) => (
                                  <Badge
                                    key={tag}
                                    variant="secondary"
                                    className="text-xs"
                                  >
                                    {tag}
                                  </Badge>
                                ))}
                              </div>
                            </CardContent>
                            <CardFooter className="p-4 pt-0 flex justify-between items-center text-sm text-gray-500 dark:text-gray-400">
                              <div className="flex items-center gap-1">
                                <Clock className="h-3 w-3" />
                                <span>
                                  {format(session.timestamp, "d MMMM yyyy", {
                                    locale: id,
                                  })}
                                </span>
                              </div>
                              <div className="flex items-center gap-1">
                                <MessageSquare className="h-3 w-3" />
                                <span>{session.messages.length} pesan</span>
                              </div>
                            </CardFooter>
                          </Card>
                        </motion.div>
                      ))}
                  </AnimatePresence>
                )}
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      {selectedChat && (
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="backdrop-blur-sm bg-white/80 dark:bg-gray-950/80 border-2">
              <CardHeader className="pb-3">
                <div className="flex flex-col gap-5 lg:gap-0 lg:flex-row justify-between items-start">
                  <div>
                    <CardTitle
                      ref={messagesEndRef}
                      className="text-xl flex items-center gap-2"
                    >
                      {selectedChat.title}
                      {selectedChat.starred && (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-4 w-4 text-yellow-500"
                        >
                          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                        </svg>
                      )}
                    </CardTitle>
                    <CardDescription className="mt-1 flex items-center gap-2">
                      <span>
                        {format(selectedChat.timestamp, "EEEE, d MMMM yyyy", {
                          locale: id,
                        })}
                      </span>
                      <span>•</span>
                      <Badge variant="outline">{selectedChat.category}</Badge>
                    </CardDescription>
                  </div>
                  <div className="flex gap-2 pb-5 lg:pb-0">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button
                          variant="outline"
                          size="sm"
                          className="h-8 gap-1"
                        >
                          <Download className="h-3.5 w-3.5" />
                          <span className="hidden sm:inline">Ekspor</span>
                        </Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Ekspor Percakapan</DialogTitle>
                          <DialogDescription>
                            Pilih format untuk mengekspor percakapan ini.
                          </DialogDescription>
                        </DialogHeader>
                        <div className="grid grid-cols-2 gap-4 py-4">
                          <Button
                            variant="outline"
                            className="h-24 flex flex-col items-center justify-center gap-2"
                          >
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
                              className="h-8 w-8"
                            >
                              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                              <polyline points="14 2 14 8 20 8" />
                              <line x1="16" y1="13" x2="8" y2="13" />
                              <line x1="16" y1="17" x2="8" y2="17" />
                              <line x1="10" y1="9" x2="8" y2="9" />
                            </svg>
                            <span>PDF</span>
                          </Button>
                          <Button
                            variant="outline"
                            className="h-24 flex flex-col items-center justify-center gap-2"
                          >
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
                              className="h-8 w-8"
                            >
                              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                              <polyline points="7 10 12 15 17 10" />
                              <line x1="12" y1="15" x2="12" y2="3" />
                            </svg>
                            <span>Teks</span>
                          </Button>
                        </div>
                        <DialogFooter>
                          <Button variant="outline">Batal</Button>
                          <Button>Unduh</Button>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>
                    <AlertDialog>
                      <AlertDialogTrigger asChild>
                        <Button
                          variant="outline"
                          size="sm"
                          className="h-8 gap-1"
                        >
                          <Trash2 className="h-3.5 w-3.5" />
                          <span className="hidden sm:inline">Hapus</span>
                        </Button>
                      </AlertDialogTrigger>
                      <AlertDialogContent>
                        <AlertDialogHeader>
                          <AlertDialogTitle>Hapus Percakapan</AlertDialogTitle>
                          <AlertDialogDescription>
                            Apakah Anda yakin ingin menghapus percakapan ini?
                            Tindakan ini tidak dapat dibatalkan.
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <AlertDialogCancel>Batal</AlertDialogCancel>
                          <AlertDialogAction className="bg-red-600 hover:bg-red-700">
                            Hapus
                          </AlertDialogAction>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
                    <Link href="/chatbot">
                      <Button size="sm" className="h-8 gap-1">
                        <span>Lanjutkan</span>
                        <ArrowRight className="h-3.5 w-3.5" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  <div className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400">
                    <Tag className="h-3.5 w-3.5" />
                    <span>Tag:</span>
                  </div>
                  {selectedChat.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <Separator className="my-4" />
                <ScrollArea className="h-[400px] pr-4">
                  <div className="space-y-4">
                    {selectedChat.messages.map((message) => (
                      <div
                        key={message.id}
                        className={`flex ${
                          message.role === "user"
                            ? "justify-end"
                            : "justify-start"
                        }`}
                      >
                        <div
                          className={`flex gap-3 max-w-[80%] ${
                            message.role === "user"
                              ? "flex-row-reverse"
                              : "flex-row"
                          }`}
                        >
                          <Avatar
                            className={`h-8 w-8 ${
                              message.role === "assistant" &&
                              "bg-red-100 dark:bg-red-900/20"
                            }`}
                          >
                            {message.role === "assistant" ? (
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
                                  <rect
                                    width="16"
                                    height="12"
                                    x="4"
                                    y="8"
                                    rx="2"
                                  />
                                  <path d="M2 14h2" />
                                  <path d="M20 14h2" />
                                  <path d="M15 13v2" />
                                  <path d="M9 13v2" />
                                </svg>
                              </AvatarFallback>
                            ) : (
                              <AvatarFallback className="bg-blue-100 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400">
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
                                  <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                                  <circle cx="12" cy="7" r="4" />
                                </svg>
                              </AvatarFallback>
                            )}
                          </Avatar>
                          <div
                            className={`rounded-lg p-4 ${
                              message.role === "user"
                                ? "bg-blue-500 text-white dark:bg-blue-600"
                                : "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-100"
                            }`}
                          >
                            <p className="text-sm sm:text-base">
                              {message.content}
                            </p>
                            <div className="mt-1 text-xs opacity-70 text-right">
                              {format(message.timestamp, "HH:mm", {
                                locale: id,
                              })}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </ScrollArea>
              </CardContent>
            </Card>
          </motion.div>
        </AnimatePresence>
      )}
    </div>
  );
}
