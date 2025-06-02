"use client";

import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Linkedin, Mail, ExternalLink } from "lucide-react";

export function AboutTeam() {
  const teamMembers = [
    {
      name: "Dr. Budi Santoso, S.H., M.H.",
      role: "Pendiri & Pakar Hukum",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Dosen hukum dengan pengalaman lebih dari 15 tahun. Spesialis dalam hukum perdata dan bisnis.",
      specialties: ["Hukum Perdata", "Hukum Bisnis"],
    },
    {
      name: "Siti Rahayu, S.H., LL.M.",
      role: "Direktur Konten Hukum",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Mantan hakim dengan keahlian dalam menganalisis dan menyederhanakan perundang-undangan yang kompleks.",
      specialties: ["Hukum Pidana", "Hukum Ketenagakerjaan"],
    },
    {
      name: "Ir. Andi Wijaya, M.Sc.",
      role: "Kepala Teknologi",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Ahli AI dan machine learning dengan fokus pada pemrosesan bahasa alami untuk dokumen hukum.",
      specialties: ["AI", "NLP", "Data Science"],
    },
    {
      name: "Maya Indira, S.Kom., M.T.I.",
      role: "UI/UX Designer",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Desainer dengan pengalaman dalam membuat antarmuka yang mudah digunakan untuk aplikasi kompleks.",
      specialties: ["UI/UX", "Desain Interaksi"],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

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
            <div className="inline-block rounded-lg bg-red-100 dark:bg-red-900/20 px-3 py-1 text-sm">
              Tim Kami
            </div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              Bertemu dengan Para Ahli di Balik LexBotID
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Tim kami terdiri dari pakar hukum, teknologi, dan desain yang
              berdedikasi untuk membuat informasi hukum lebih mudah diakses.
            </p>
          </motion.div>
        </div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-2 lg:gap-12"
        >
          {teamMembers.map((member, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="overflow-hidden backdrop-blur-sm bg-white/80 dark:bg-gray-950/80 border-2">
                <div className="aspect-square relative overflow-hidden">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    className="h-full w-full"
                  >
                    <Avatar className="h-full w-full rounded-none">
                      <AvatarImage
                        src={member.image || "/placeholder.svg"}
                        alt={member.name}
                        className="object-cover"
                      />
                      <AvatarFallback className="rounded-none text-4xl">
                        {member.name[0]}
                      </AvatarFallback>
                    </Avatar>
                  </motion.div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                    <div>
                      <h3 className="text-xl font-bold text-white">
                        {member.name}
                      </h3>
                      <p className="text-white/80">{member.role}</p>
                    </div>
                  </div>
                </div>
                <CardHeader className="pb-2">
                  <CardTitle>{member.name}</CardTitle>
                  <CardDescription>{member.role}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-500 dark:text-gray-400">
                    {member.bio}
                  </p>
                  <div>
                    <p className="text-sm font-medium mb-2">Spesialisasi:</p>
                    <div className="flex flex-wrap gap-2">
                      {member.specialties.map((specialty, i) => (
                        <Badge key={i} variant="secondary">
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <motion.a
                      whileHover={{ y: -2 }}
                      transition={{ duration: 0.2 }}
                      href="#"
                      className="rounded-full bg-gray-100 p-2 text-gray-600 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700"
                    >
                      <Linkedin className="h-4 w-4" />
                      <span className="sr-only">LinkedIn</span>
                    </motion.a>
                    <motion.a
                      whileHover={{ y: -2 }}
                      transition={{ duration: 0.2 }}
                      href="#"
                      className="rounded-full bg-gray-100 p-2 text-gray-600 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700"
                    >
                      <Mail className="h-4 w-4" />
                      <span className="sr-only">Email</span>
                    </motion.a>
                    <motion.a
                      whileHover={{ y: -2 }}
                      transition={{ duration: 0.2 }}
                      href="#"
                      className="rounded-full bg-gray-100 p-2 text-gray-600 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700"
                    >
                      <ExternalLink className="h-4 w-4" />
                      <span className="sr-only">Website</span>
                    </motion.a>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
