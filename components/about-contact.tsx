"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Mail, MapPin, Phone } from "lucide-react";

export function AboutContact() {
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
              Kontak
            </div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              Hubungi Tim LexBotID
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Punya pertanyaan atau masukan? Jangan ragu untuk menghubungi kami.
            </p>
          </motion.div>
        </div>
        <div className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-2 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="backdrop-blur-sm bg-white/80 dark:bg-gray-950/80 border-2 h-full">
              <CardHeader>
                <CardTitle>Kirim Pesan</CardTitle>
                <CardDescription>
                  Isi formulir di bawah ini dan tim kami akan menghubungi Anda
                  sesegera mungkin.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label
                        htmlFor="first-name"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Nama Depan
                      </label>
                      <Input
                        id="first-name"
                        placeholder="Masukkan nama depan"
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="last-name"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Nama Belakang
                      </label>
                      <Input
                        id="last-name"
                        placeholder="Masukkan nama belakang"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="nama@example.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="subject"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Subjek
                    </label>
                    <Input id="subject" placeholder="Subjek pesan Anda" />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Pesan
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Tulis pesan Anda di sini..."
                      className="min-h-[150px]"
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    Kirim Pesan
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-8"
          >
            <Card className="backdrop-blur-sm bg-white/80 dark:bg-gray-950/80 border-2">
              <CardHeader>
                <CardTitle>Informasi Kontak</CardTitle>
                <CardDescription>
                  Berikut adalah cara untuk menghubungi kami secara langsung.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-4">
                  <Mail className="h-5 w-5 text-red-600 dark:text-red-400 mt-0.5" />
                  <div>
                    <h3 className="font-medium">Email</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      info@hukumqa.id
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      support@hukumqa.id
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Phone className="h-5 w-5 text-red-600 dark:text-red-400 mt-0.5" />
                  <div>
                    <h3 className="font-medium">Telepon</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      +62 21 1234 5678
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Senin - Jumat, 09:00 - 17:00 WIB
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <MapPin className="h-5 w-5 text-red-600 dark:text-red-400 mt-0.5" />
                  <div>
                    <h3 className="font-medium">Alamat</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Gedung Cyber Tower, Lantai 12
                      <br />
                      Jl. HR. Rasuna Said Blok X-5
                      <br />
                      Jakarta Selatan, 12950
                      <br />
                      Indonesia
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="backdrop-blur-sm bg-white/80 dark:bg-gray-950/80 border-2">
              <CardHeader>
                <CardTitle>Jam Operasional</CardTitle>
                <CardDescription>
                  Waktu layanan dukungan pelanggan kami.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium">Senin - Jumat</span>
                    <span>09:00 - 17:00 WIB</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Sabtu</span>
                    <span>09:00 - 14:00 WIB</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Minggu & Hari Libur</span>
                    <span>Tutup</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
